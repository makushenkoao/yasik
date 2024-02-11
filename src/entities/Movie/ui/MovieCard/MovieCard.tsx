import React from 'react';
import {ImageBackground, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootParamList} from '@shared/types/router.ts';
import styles from './styles.ts';

interface MovieCardProps {
  id: number;
  title: string;
  img: string;
}

export const MovieCard = (props: MovieCardProps) => {
  const {img, title, id} = props;

  const navigation = useNavigation<RootParamList>();

  const handleClick = () => {
    navigation.navigate('MovieDetails', {id});
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={handleClick}>
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/w500${img}`,
        }}
        style={styles.imageBackground}>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.text}>
          {title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};
