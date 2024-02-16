import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Header} from '@widgets/Header';
import React, {useEffect, useRef, useState} from 'react';
import {VideoTrailer} from '@features/trailer';
import {Overview} from '@screens/MovieScreen/ui/Overview.tsx';
import styles from './styles.ts';
import BottomSheet from '@gorhom/bottom-sheet';
import {useRoute} from '@react-navigation/native';
import {getMovieTrailer, MovieDetails, MovieVideo} from '@entities/Movie';
import {getMovieDetailsByGenres} from '@entities/Movie/model/services/movie.ts';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList} from '@shared/types/router.ts';

interface MovieScreenProps {
  navigation: StackNavigationProp<RootParamList, 'Movie'>;
}

export const MovieScreen = (props: MovieScreenProps) => {
  const {navigation} = props;

  const {
    // TODO: fix ts error
    // @ts-ignore
    params: {genres},
  } = useRoute();

  const [movies, setMovies] = useState<MovieDetails[]>([]);
  const [selectedMovies, setSelectedMovies] = useState<string[]>([]); // сохраняем выбранные фильмы
  const [loading, setLoading] = useState(false);
  const [isLoadedData, setIsLoadedData] = useState(false);
  const [video, setVideo] = useState<MovieVideo | null>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = [0.1, '80%'];

  useEffect(() => {
    setLoading(true);
    getMovieDetailsByGenres({genres})
      .then(data => {
        setMovies(data);
        setIsLoadedData(true);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, [genres]);

  useEffect(() => {
    if (movies.length > 0) {
      getMovieTrailer(movies[0]?.id).then(setVideo);
    }
  }, [movies]);

  const handleOpenVideo = () => {
    bottomSheetRef?.current?.expand();
  };

  const handleWant = () => {
    const currentMovie = movies[0];
    setSelectedMovies(prevSelectedMovies => [
      ...prevSelectedMovies,
      currentMovie.id.toString(),
    ]);
    setMovies(prevMovies => prevMovies.slice(1));
  };

  const handleDontWant = () => {
    setMovies(prevMovies => prevMovies.slice(1));
  };

  const currentMovie = movies[0];

  const hasMoreMovies = movies.length > 0;

  if (!hasMoreMovies && isLoadedData && !loading) {
    navigation.navigate('EndSession');
  }

  if (loading || !currentMovie || !video) {
    return (
      <View style={styles.loadingWrapper}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  console.log(selectedMovies);

  return (
    <>
      <Header variant="close" />
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`,
        }}
        style={styles.imageBackground}>
        <View style={[styles.infoWrapper, styles.mb10]}>
          <Text style={[styles.title, styles.mb10]}>
            {currentMovie.title} |{' '}
            {new Date(currentMovie.release_date).getFullYear()}
          </Text>
          <Text style={[styles.text, styles.mb10]}>
            {currentMovie?.genres?.join(' | ')}
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleOpenVideo}
            style={styles.trailerButton}>
            <Text style={styles.trailerButtonText}>Trailer</Text>
            <Image
              source={require('@shared/assets/images/play.png')}
              style={styles.trailerButtonIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={styles.btnWrapper}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={handleDontWant}
              style={[styles.button, styles.cancel]}>
              <Text style={styles.buttonText}>Don't Want</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={handleWant}
              style={[styles.button, styles.done]}>
              <Text style={styles.buttonText}>Want</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Overview overview={currentMovie.overview} />
      </ImageBackground>
      <VideoTrailer
        snapPoints={snapPoints}
        bottomSheetRef={bottomSheetRef}
        uri={video?.results[0]?.key}
      />
    </>
  );
};
