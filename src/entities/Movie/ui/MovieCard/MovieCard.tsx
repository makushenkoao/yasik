import React, {memo} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootParamList} from '@shared/types/router.ts';
import styles from './styles.ts';

interface MovieCardProps {
  id: number;
  title: string;
  img: string;
  style?: StyleProp<ViewStyle>;
  loading?: boolean;
}

export const MovieCard = memo((props: MovieCardProps) => {
  const {img, loading, title, id, style} = props;

  const navigation = useNavigation<RootParamList>();

  const handleClick = () => {
    navigation.navigate('MovieDetails', {id});
  };

  if (loading) {
    return (
      <View style={[styles.loadingWrapper, style]}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={handleClick} style={style}>
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/original${img}`,
        }}
        style={styles.imageBackground}>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.text}>
          {title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
});
