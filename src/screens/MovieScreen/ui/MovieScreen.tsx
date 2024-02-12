import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button} from '@shared/ui/Button';
import {Header} from '@widgets/Header';
import {useState} from 'react';
import {VideoTrailer} from '@features/videoTrailer';
import {Overview} from '@screens/MovieScreen/ui/Overview.tsx';
import styles from './styles.ts';

export const MovieScreen = () => {
  const [showVideo, setShowVideo] = useState(false);

  const openVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  return (
    <>
      <Header />
      <ImageBackground
        source={{
          uri: 'https://image.tmdb.org/t/p/original/oihWVx3imvRKujnGmSDYhfG1gI5.jpg',
        }}
        style={styles.imageBackground}>
        <View style={styles.infoWrapper}>
          <Text style={[styles.title, styles.mb10]}>Movie Name</Text>
          <View style={[styles.rateWrapper, styles.mb10]}>
            <Text style={styles.text}>8</Text>
            <Image
              style={styles.starIcon}
              source={require('@shared/assets/images/star.png')}
            />
          </View>
          <Text style={[styles.text, styles.mb10]}>Year</Text>
          <Text style={[styles.text, styles.mb10]}>Comedy</Text>
        </View>
        <View style={styles.container}>
          <Button
            onPress={openVideo}
            content="Watch Movie Trailer"
            style={styles.mb10}
          />
          <View style={styles.btnWrapper}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.button, styles.cancel]}>
              <Text style={styles.buttonText}>Don't Want</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.button, styles.done]}>
              <Text style={styles.buttonText}>Want</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Overview />
      </ImageBackground>
      {showVideo && (
        <VideoTrailer
          videoUrl="https://www.youtube.com/watch?v=wXp-lj9luJU"
          onClose={closeVideo}
        />
      )}
    </>
  );
};
