import {useEffect, useState} from 'react';
import {Container} from '@shared/ui/Container';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Genre, getMovieGenres, Movie, MovieCard} from '@entities/Movie';
import {Header} from '@widgets/Header';
import {Colors} from '@shared/const/colors.ts';
import {Button} from '@shared/ui/Button';
import RNPickerSelect from 'react-native-picker-select';
import {filterMovies} from '@entities/Movie/model/services/movie.ts';
import {sortByItems, sortByPlaceholder} from '../model/const/filter';
import styles, {selectStyles} from './styles.ts';

export const FilterMoviesScreen = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState('default');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMovieGenres().then(setGenres);
  }, []);

  const fetchMovies = async () => {
    setLoading(true);

    filterMovies({page, sortBy, genres: selectedGenres})
      .then(data => {
        setMovies(prevMovies =>
          page === 1 ? data?.results : [...prevMovies, ...data?.results],
        );
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  };

  const renderItem = ({item}: {item: Movie}) => (
    <MovieCard
      title={item.title}
      id={item.id}
      img={item.backdrop_path}
      style={styles.card}
      loading={loading}
    />
  );

  const onChangeSelectedGenres = (id: number) => {
    setSelectedGenres(prevSelectedGenres => {
      const isAlreadySelected = prevSelectedGenres.includes(id);

      if (isAlreadySelected) {
        return prevSelectedGenres.filter(genreId => genreId !== id);
      } else {
        return [...prevSelectedGenres, id];
      }
    });
  };

  const handleChangeSortBy = (value: string) => {
    setSortBy(value);
  };

  const handleFind = () => {
    setPage(1);
    setMovies([]);
    fetchMovies();
  };

  const loadMoreMovies = () => {
    setPage(prevPage => prevPage + 1);
    fetchMovies();
  };

  const getGenreBackground = (id: number) => {
    const isActive = selectedGenres.includes(id);

    return {
      backgroundColor: isActive ? Colors.BORDER : 'transparent',
    };
  };

  return (
    <>
      <Header variant="close" closeUrl="Search" />
      <Container style={styles.container}>
        <View style={styles.filterContainer}>
          <ScrollView style={styles.scrollGenres} scrollEnabled={true}>
            <View style={styles.genresWrapper}>
              {genres.map(item => (
                <TouchableOpacity
                  onPress={() => onChangeSelectedGenres(item.id)}
                  activeOpacity={0.7}
                  key={item.id}
                  style={[styles.genre, getGenreBackground(item.id)]}>
                  <Text style={styles.genreText}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
          <View style={styles.filterContent}>
            <Text style={styles.sortByTitle}>Sort by</Text>
            <RNPickerSelect
              onValueChange={handleChangeSortBy}
              items={sortByItems}
              value={sortBy}
              doneText="Done"
              darkTheme
              placeholder={sortByPlaceholder}
              style={selectStyles}
            />
          </View>
          <Button content="Find" onPress={handleFind} />
        </View>
        {!movies.length && !loading && (
          <View style={styles.noResultsWrapper}>
            <Text style={styles.noResultsText}>No Results</Text>
          </View>
        )}
        <FlatList
          data={movies}
          renderItem={renderItem}
          numColumns={2}
          contentContainerStyle={styles.list}
          indicatorStyle="white"
          keyExtractor={item => item.id.toString()}
          onEndReached={loadMoreMovies}
          onEndReachedThreshold={0.5}
          extraData={loading}
        />
      </Container>
    </>
  );
};
