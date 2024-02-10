import React from 'react';
import {ImageBackground, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles.ts';

interface MoviePosterProps {
  title: string;
  id: number;
  poster_path: string;
}

export const MoviePoster = (props: MoviePosterProps) => {
  const {title, id, poster_path} = props;

  const navigation = useNavigation();

  const onNavigate = () => {
    // @ts-ignore
    navigation.navigate('MovieDetails', {id});
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onNavigate}>
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/w500${poster_path}`,
        }}
        style={styles.imageBackground}>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
          {title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};
