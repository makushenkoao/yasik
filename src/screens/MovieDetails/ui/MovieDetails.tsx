import React, {useEffect, useRef, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Header} from '@widgets/Header';
import {
  getMovieDetails,
  getMovieTrailer,
  MovieDetails as IMovieDetails,
  MovieVideo,
} from '@entities/Movie';
import styles from './styles.ts';
import {MovieDetailsPoster} from '@screens/MovieDetails/ui/MovieDetailsPoster.tsx';
import BottomSheet from '@gorhom/bottom-sheet';
import {VideoTrailer} from '@features/trailer';
import {Button} from '@shared/ui/Button';
import {
  addToFavorites,
  getFavoritesByUserId,
  removeFromFavorites,
} from '@entities/Favorite';
import {useUser} from '@app/providers/user/UserProvider.tsx';

export const MovieDetails = () => {
  const {user} = useUser();
  const route = useRoute();

  // TODO: fix ts error
  // @ts-ignore
  const {id} = route.params;

  const [movie, setMovie] = useState<IMovieDetails | null>(null);
  const [video, setVideo] = useState<MovieVideo | null>(null);
  const [isFavorites, setIsFavorites] = useState(false);
  const [loading, setLoading] = useState(false);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = [0.1, '80%'];

  const handleOpenVideo = () => {
    bottomSheetRef?.current?.expand();
  };

  useEffect(() => {
    getMovieDetails(id).then(setMovie);
    getMovieTrailer(id).then(setVideo);
  }, [id]);

  const isFavoriteMovie = async () => {
    if (!user || !movie) {
      return;
    }

    const favs = await getFavoritesByUserId({userId: user._id});

    // TODO: fav.movieId
    const isFavorite = favs.some(fav => Number(fav.movieId) === movie.id);

    setIsFavorites(isFavorite);
  };

  useEffect(() => {
    setLoading(true);
    isFavoriteMovie().finally(() => setLoading(false));
    // eslint-disable-next-line
  }, []);

  const handleAddToFavorites = () => {
    if (!movie || !user) {
      return;
    }

    setLoading(true);

    addToFavorites({
      movieId: movie.id,
      title: movie.title,
      userId: user._id,
      backdrop_path: movie.backdrop_path || movie.poster_path || '',
    })
      .then(() => setIsFavorites(true))
      .finally(() => setLoading(false));
  };

  const handleRemoveFromFavorites = () => {
    if (!movie || !user) {
      return;
    }

    setLoading(true);
    removeFromFavorites({
      movieId: movie.id,
      userId: user._id,
    })
      .then(() => setIsFavorites(false))
      .finally(() => setLoading(false));
  };

  if (!movie || !video) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <Header />
      {movie && (
        <MovieDetailsPoster
          title={movie.title}
          img={movie.backdrop_path || movie.poster_path}
          handleOpenVideo={handleOpenVideo}
          releaseDate={movie.release_date}
          voteAverage={movie.vote_average}
          countries={movie.production_countries}
        />
      )}
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.container}>
          <View style={styles.genreContainer}>
            {movie.genres.map(genre => (
              <View key={genre.id} style={styles.genre}>
                <Text style={styles.genreText}>{genre.name}</Text>
              </View>
            ))}
          </View>
          <Text style={styles.text}>{movie.overview}</Text>
        </View>
      </ScrollView>
      <VideoTrailer
        snapPoints={snapPoints}
        bottomSheetRef={bottomSheetRef}
        uri={video?.results[0]?.key}
        containerStyle={styles.trailer}
      />
      <View style={styles.container}>
        {isFavorites ? (
          <Button
            content="Remove from Favorites"
            onPress={handleRemoveFromFavorites}
            loading={loading}
          />
        ) : (
          <Button
            content="Add to Favorites"
            onPress={handleAddToFavorites}
            loading={loading}
          />
        )}
      </View>
    </View>
  );
};
