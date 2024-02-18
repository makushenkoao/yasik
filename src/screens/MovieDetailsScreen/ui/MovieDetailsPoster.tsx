import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../ui/styles.ts';
import {Share} from '@features/share';

interface MovieDetailsPosterProps {
  releaseDate: string;
  voteAverage: number;
  shareMessage: string;
  title: string;
  img: string | null;
  handleOpenVideo: () => void;
  countries: {
    iso_3166_1: string;
    name: string;
  }[];
}

export const MovieDetailsPoster = (props: MovieDetailsPosterProps) => {
  const {
    releaseDate,
    img,
    shareMessage,
    voteAverage,
    handleOpenVideo,
    title,
    countries,
  } = props;

  return (
    <ImageBackground
      source={{
        uri: `https://image.tmdb.org/t/p/original/${img}`,
      }}
      style={styles.imageBackground}>
      <View style={styles.overlay}>
        <Share shareMessage={shareMessage} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.details}>
          <Text style={styles.detailText}>
            {new Date(releaseDate).getFullYear()}
          </Text>
          <Text style={styles.detailText}>|</Text>
          <Text style={styles.detailText}>{Math.round(voteAverage)}</Text>
          <Image
            source={require('@shared/assets/images/star.png')}
            style={styles.starIcon}
          />
        </View>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.countries}>
          {countries.length > 1
            ? countries.map((item, index) => (
                <Text key={item.iso_3166_1}>
                  {item.name}
                  {index !== countries.length - 1 && ' | '}
                </Text>
              ))
            : countries[0].name}
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
    </ImageBackground>
  );
};
