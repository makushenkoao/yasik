import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Header} from '@widgets/Header';
import React, {useRef} from 'react';
import {VideoTrailer} from '@features/trailer';
import {Overview} from '@screens/MovieScreen/ui/Overview.tsx';
import styles from './styles.ts';
import BottomSheet from '@gorhom/bottom-sheet';

export const MovieScreen = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = [0.1, '80%'];

  const handleOpenVideo = () => {
    bottomSheetRef?.current?.expand();
  };

  return (
    <>
      <Header />
      <ImageBackground
        source={{
          uri: 'https://image.tmdb.org/t/p/original/oihWVx3imvRKujnGmSDYhfG1gI5.jpg',
        }}
        style={styles.imageBackground}>
        <View style={[styles.infoWrapper, styles.mb10]}>
          <Text style={[styles.title, styles.mb10]}>Movie Name | 2006</Text>
          <Text style={[styles.text, styles.mb10]}>Comedy | Horror</Text>
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
      <VideoTrailer
        snapPoints={snapPoints}
        bottomSheetRef={bottomSheetRef}
        uri="wXp-lj9luJU"
      />
    </>
  );
};
