import {useState} from 'react';
import {Container} from '@shared/ui/Container';
import {FlatList, Text, View} from 'react-native';
import {Input} from '@shared/ui/Input';
import {Movie, MovieCard, searchMovies} from '@entities/Movie';
import {Header} from '@widgets/Header';
import styles from './styles.ts';

export const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async () => {
    if (query.trim() === '') {
      return;
    }

    setLoading(true);

    searchMovies({page, query})
      .then(data => {
        setMovies(prevMovies =>
          page === 1 ? data?.results : [...prevMovies, ...data?.results],
        );
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  };

  const handleSearch = () => {
    setPage(1);
    setMovies([]);
    fetchMovies();
  };

  const loadMoreMovies = () => {
    setPage(prevPage => prevPage + 1);
    fetchMovies();
  };

  const renderItem = ({item}: {item: Movie}) => (
    <MovieCard
      title={item.title}
      id={item.id}
      img={item.backdrop_path}
      loading={loading}
      style={styles.card}
    />
  );

  return (
    <>
      <Header variant="search" />
      <Container style={styles.container}>
        <View style={styles.inputWrapper}>
          <Input
            placeholder="Search"
            keyboardType="web-search"
            keyboardAppearance="dark"
            variant="outlined"
            value={query}
            onChangeText={text => setQuery(text)}
            onSubmitEditing={handleSearch}
          />
        </View>
        {!movies.length && !loading && (
          <View style={styles.noResultsWrapper}>
            <Text style={styles.noResultsText}>No Results</Text>
          </View>
        )}
        <FlatList
          data={movies}
          renderItem={renderItem}
          indicatorStyle="white"
          numColumns={2}
          contentContainerStyle={styles.list}
          keyExtractor={item => item.id.toString()}
          onEndReached={loadMoreMovies}
          onEndReachedThreshold={0.5}
          extraData={loading}
        />
      </Container>
    </>
  );
};
