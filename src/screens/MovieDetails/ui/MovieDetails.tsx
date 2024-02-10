import React, {useEffect, useState} from 'react';
import {
  Button,
  Image,
  ImageBackground,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Colors} from '@shared/const/colors.ts';
import {Header} from '@widgets/Header';
import {
  getMovieDetails,
  getMovieTrailer,
  MovieDetails as IMovieDetails,
  MovieVideo,
} from '@entities/Movie';
import WebView from 'react-native-webview';

export const MovieDetails = () => {
  const route = useRoute();

  // @ts-ignore
  const {id} = route.params;

  const [movie, setMovie] = useState<IMovieDetails | null>(null);
  const [video, setVideo] = useState<MovieVideo | null>(null);
  const [isShowVideo, setIsShowVideo] = useState(false);

  useEffect(() => {
    getMovieDetails(id).then(setMovie);
    getMovieTrailer(id).then(setVideo);
  }, [id]);

  const onOpenModal = () => {
    setIsShowVideo(true);
  };

  const onCloseModal = () => {
    setIsShowVideo(false);
  };

  if (!movie || !video) return null;

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <Header />
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }}
        style={styles.imageBackground}>
        <View style={styles.overlay}>
          <Text style={styles.title}>{movie.title}</Text>
          <View style={styles.details}>
            <Text style={styles.detailText}>
              {new Date(movie.release_date).getFullYear()}
            </Text>
            <Text style={styles.detailText}>|</Text>
            <Text style={styles.detailText}>{movie.vote_average}</Text>
          </View>
          <Button
            title="Show Video"
            onPress={onOpenModal}
            color={Colors.HIGHLIGHT}
          />
        </View>
      </ImageBackground>
      <View style={{marginHorizontal: 24, paddingVertical: 20}}>
        <View style={styles.genreContainer}>
          {movie.genres.map(genre => (
            <View key={genre.id} style={styles.genre}>
              <Text style={styles.genreText}>{genre.name}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.text}>{movie.overview}</Text>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isShowVideo}
        onRequestClose={onCloseModal}>
        <View style={styles.modalWrapper}>
          <View style={styles.modalContainer}>
            <Button title="Close" onPress={onCloseModal} color={Colors.HIGHLIGHT} />
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: 500,
    justifyContent: 'flex-end',
    borderRadius: 12,
    overflow: 'hidden',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
  },
  title: {
    fontSize: 20,
    color: Colors.TEXT,
    textAlign: 'center',
    marginBottom: 5,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailText: {
    color: Colors.TEXT,
    marginHorizontal: 5,
  },
  text: {
    color: Colors.TEXT,
    fontSize: 15,
  },
  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 20,
  },
  genre: {
    borderColor: Colors.BORDER,
    padding: 10,
    borderWidth: 1,
    borderRadius: 12,
  },
  genreText: {
    color: Colors.TEXT,
  },
  modalWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    height: '100%',
    justifyContent: 'space-between',
    position: 'relative',
  },
  modalContainer: {
    height: '80%',
    backgroundColor: Colors.BACKGROUND,
    borderTopColor: Colors.BORDER,
    borderWidth: 2,
    position: 'relative',
  },
  scroll: {
    flexGrow: 1,
  },
  webview: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
  },
});
