import React, {useEffect, useState} from 'react';
import {
  Button,
  Image,
  ImageBackground,
  Modal,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Colors} from '@shared/const/colors.ts';
import {Header} from '@widgets/Header';
import {
  getMovieDetails,
  getMovieImages,
  getMovieTrailer,
  MovieDetails as IMovieDetails,
  MovieVideo,
} from '@entities/Movie';
import WebView from 'react-native-webview';
import styles from './styles.ts';
import {MovieDetailsPoster} from '@screens/MovieDetails/ui/MovieDetailsPoster.tsx';

export const MovieDetails = () => {
  const route = useRoute();

  // TODO: fix ts errpr
  // @ts-ignore
  const {id} = route.params;

  const [movie, setMovie] = useState<IMovieDetails | null>(null);
  const [video, setVideo] = useState<MovieVideo | null>(null);
  const [isShowVideo, setIsShowVideo] = useState(false);
  const [image, setImage] = useState('');

  useEffect(() => {
    getMovieDetails(id).then(setMovie);
    getMovieTrailer(id).then(setVideo);
    getMovieImages(id).then(data => setImage(data.backdrops[0]?.file_path));
  }, [id]);

  const onOpenModal = () => {
    setIsShowVideo(true);
  };

  const onCloseModal = () => {
    setIsShowVideo(false);
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
          img={image || movie.poster_path}
          onOpenModal={onOpenModal}
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={isShowVideo}
        onRequestClose={onCloseModal}>
        <View style={styles.modalWrapper}>
          <View style={styles.modalContainer}>
            <Button
              title="Close"
              onPress={onCloseModal}
              color={Colors.HIGHLIGHT}
            />
            <ScrollView contentContainerStyle={styles.scroll}>
              <View style={styles.modalContent}>
                <WebView
                  allowsFullscreenVideo
                  source={{
                    uri: `https://www.youtube.com/watch?v=${video?.results[0]?.key}`,
                  }}
                  style={styles.webview}
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};
