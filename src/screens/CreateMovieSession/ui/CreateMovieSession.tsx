import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button} from '@shared/ui/Button';
import {Colors} from '@shared/const/colors.ts';
import {Header} from '@widgets/Header';
import {getMovieGenres} from '@entities/Movie/model/services/movie.ts';
import {Genre} from '@entities/Movie';
import RNPickerSelect from 'react-native-picker-select';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList} from '@shared/types/router.ts';
import styles, {selectStyles} from './styles.ts';
import {Order} from '../model/types/createMovieSession.ts';
import {
  orderItems,
  orderPlaceholder,
} from '../model/const/createMovieSession.ts';

interface CreateSessionScreenProps {
  navigation: StackNavigationProp<RootParamList, 'StartSession'>;
}

export const CreateMovieSession = (props: CreateSessionScreenProps) => {
  const {navigation} = props;

  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [order, setOrder] = useState<Order>('default');

  const handleCreateToSession = () => {
    navigation.navigate('StartSession');
  };

  const handleChangeOrder = (value: Order) => {
    setOrder(value);
  };

  const handleSelectGenre = (id: number) => {
    setSelectedGenres(prevState => {
      const isIdAlreadySelected = prevState.includes(id);

      if (isIdAlreadySelected) {
        return prevState.filter(genreId => genreId !== id);
      } else {
        return [...prevState, id];
      }
    });
  };

  useEffect(() => {
    getMovieGenres().then(setGenres);
  }, []);

  const getGenreBackground = (genre: Genre) => ({
    backgroundColor: selectedGenres.includes(genre.id)
      ? Colors.BORDER
      : 'transparent',
  });

  return (
    <View style={styles.wrapper}>
      <Header />
      <ImageBackground
        source={{
          uri: 'https://image.tmdb.org/t/p/original/gnkBzJVH2zicIopP2fHf4kRElne.jpg',
        }}
        style={styles.imageBackground}
      />
      <View style={styles.container}>
        <View style={styles.filterContent}>
          <Text style={styles.orderTitle}>Movie Order in Session</Text>
          <RNPickerSelect
            onValueChange={handleChangeOrder}
            items={orderItems}
            value={order}
            doneText="Done"
            darkTheme
            placeholder={orderPlaceholder}
            style={selectStyles}
          />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.container}>
          <View style={styles.genres}>
            {genres.map(genre => (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => handleSelectGenre(genre.id)}
                style={[styles.genre, getGenreBackground(genre)]}
                key={genre.id}>
                <Text style={styles.genreText}>{genre.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.container}>
        <Button
          // loading={loading}
          content="Continue"
          onPress={handleCreateToSession}
        />
      </View>
    </View>
  );
};
