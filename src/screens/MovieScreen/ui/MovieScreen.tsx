import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Container} from '@shared/ui/Container';
import axios from 'axios';
import {Colors} from '@shared/const/colors.ts';
import {Emoji} from '@shared/ui/Emoji';
import credentials from '@shared/credentials/credentials.json';

interface Genre {
  id: string;
  name: string;
}

export const MovieScreen = () => {
  const [genres, setGenres] = useState<Genre[]>([]);

  const getGenres = async () => {
    const url = `${credentials.THEMOVIEDB_URL}/genre/movie/list`;

    const response = await axios.get(url, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${credentials.THEMOVIEDB_KEY}`,
      },
    });

    return response.data.genres;
  };

  useEffect(() => {
    getGenres().then(setGenres);
  }, []);

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <Image
        source={require('@shared/assets/images/movie-preview.jpeg')}
        style={{
          width: '100%',
          height: 250,
        }}
      />
      <Container>
        <View>
          <Text style={{color: Colors.TEXT, marginBottom: 10}}>Genres</Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: 10,
            }}>
            {genres.map(genre => (
              <TouchableOpacity
                key={genre.id}
                activeOpacity={0.7}
                style={{
                  borderColor: 'gray',
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 12,
                }}>
                <Text style={{color: Colors.TEXT}}>{genre.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Container>
    </ScrollView>
  );
};
