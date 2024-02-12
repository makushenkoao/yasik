import React from 'react';
import {Button, Image, ImageBackground, Text, View} from 'react-native';
import {Colors} from '@shared/const/colors.ts';
import styles from '../ui/styles.ts';

interface MovieDetailsPosterProps {
  releaseDate: string;
  voteAverage: number;
  title: string;
  img: string | null;
  onOpenModal: () => void;
  countries: {
    iso_3166_1: string;
    name: string;
  }[];
}

export const MovieDetailsPoster = (props: MovieDetailsPosterProps) => {
  const {releaseDate, img, voteAverage, onOpenModal, title, countries} = props;

  return (
    <ImageBackground
      source={{
        uri: `https://image.tmdb.org/t/p/original/${img}`,
      }}
      style={styles.imageBackground}>
      <View style={styles.overlay}>
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
        <Button
          title="Show Movie Trailer"
          onPress={onOpenModal}
          color={Colors.HIGHLIGHT}
        />
      </View>
    </ImageBackground>
  );
};
