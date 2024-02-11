import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
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

type Order = 'rating' | 'novelty' | 'default' | 'random';

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

  return (
    <View style={{flex: 1}}>
      <Header />
      <ImageBackground
        source={{
          uri: 'https://image.tmdb.org/t/p/w500/ln7DqfqyKosTw1xoa92Q7FRT3Jh.jpg',
        }}
        style={{
          width: '100%',
          height: 400,
          borderRadius: 12,
          overflow: 'hidden',
        }}
      />
      <View style={{paddingVertical: 20, paddingHorizontal: 24}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: Colors.TEXT, fontSize: 15}}>
            Movie Order in Session
          </Text>
          <RNPickerSelect
            onValueChange={handleChangeOrder}
            items={[
              {label: 'Rating', value: 'rating'},
              {label: 'Novelty', value: 'novelty'},
              {label: 'Random', value: 'random'},
            ]}
            value={order}
            doneText="Done"
            darkTheme
            placeholder={{value: 'default', label: 'Default'}}
            style={{
              doneDark: {color: Colors.HIGHLIGHT},
              inputIOS: {
                color: Colors.HIGHLIGHT,
              },
              placeholder: {
                color: Colors.HIGHLIGHT,
              },
            }}
          />
        </View>
      </View>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{paddingHorizontal: 24}}>
          <View style={{marginTop: 20}}>
            <View style={styles.genres}>
              {genres.map(genre => (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleSelectGenre(genre.id)}
                  style={[
                    styles.genre,
                    {
                      backgroundColor: selectedGenres.includes(genre.id)
                        ? Colors.BORDER
                        : 'transparent',
                    },
                  ]}
                  key={genre.id}>
                  <Text style={styles.genreText}>{genre.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{paddingVertical: 20, paddingHorizontal: 24}}>
        <Button
          // loading={loading}
          content="Continue"
          onPress={handleCreateToSession}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    backgroundColor: '#2d2d2d',
    padding: 10,
    borderRadius: 16,
    gap: 10,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 12,
    flex: 1,
  },
  tabText: {
    color: Colors.TEXT,
    textAlign: 'center',
    fontSize: 16,
  },
  genres: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  genre: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.BORDER,
    padding: 10,
  },
  genreText: {
    color: Colors.TEXT,
    fontSize: 16,
  },
});
