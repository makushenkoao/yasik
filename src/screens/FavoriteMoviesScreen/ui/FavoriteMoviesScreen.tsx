import {ScrollView, View} from 'react-native';
import {Emoji} from '@shared/ui/Emoji';
import {Header} from '@widgets/Header';
import {useEffect, useState} from 'react';
import {Favorite, getFavoritesByUserId} from '@entities/Favorite';
import {useUser} from '@app/providers/user/UserProvider.tsx';
import {MovieCard} from '@entities/Movie';
import styles from './styles.ts';

export const FavoriteMoviesScreen = () => {
  const {user} = useUser();

  const [favs, setFavs] = useState<Favorite[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) {
      return;
    }

    setLoading(true);
    getFavoritesByUserId({
      userId: user._id,
    })
      .then(data => setFavs(data))
      .finally(() => setLoading(false));
  }, [user]);

  const renderFavs = () => {
    if (loading) {
      return [1, 2, 3, 4].map(item => <MovieCard key={item} loading />);
    }

    return favs.map(item => (
      <MovieCard
        key={item._id}
        id={item.movieId}
        img={item.backdrop_path}
        loading={loading}
        title={item.title}
      />
    ));
  };

  return (
    <>
      <Header variant="close" />
      <Emoji text="Add your favorite movies so you don’t forget to watch them 🤪" />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.container}>
          <View style={styles.list}>{renderFavs()}</View>
        </View>
      </ScrollView>
    </>
  );
};
