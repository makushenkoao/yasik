import React from 'react';
import {Image, ScrollView} from 'react-native';

export const CreateMovieSession = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <Image
        source={require('@shared/assets/images/movie-preview.jpeg')}
        style={{
          width: '100%',
          height: 250,
        }}
      />
    </ScrollView>
  );
};
