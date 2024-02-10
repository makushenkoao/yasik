import React, {useState} from 'react';
import {Container} from '@shared/ui/Container';
import {Button} from '@shared/ui/Button';
import {Screen} from '@widgets/Screen';
import {Text, View} from 'react-native';
import {Emoji} from '@shared/ui/Emoji';
import {Colors} from '@shared/const/colors.ts';
import {getRandomMovie, Movie, MoviePoster} from '@entities/Movie';

export const RandomMovie = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGetRandomMovie = () => {
    setLoading(true);
    getRandomMovie()
      .then(data => {
        setMovie(data);
        setLoading(false);
      })
      .catch(() => {
        setError('An error occurred while fetching the random movie.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Screen>
      {!movie && (
        <Emoji
          text="Choose a random popular movie for your evening 🌇"
          style={{height: 600, alignItems: 'center', justifyContent: 'center'}}
        />
      )}
      {movie && (
        <MoviePoster
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        />
      )}
      <Container style={{marginVertical: 40}}>
        <View style={{height: '100%', justifyContent: 'flex-end'}}>
          {error && (
            <Text
              style={{
                color: Colors.ERROR,
                marginBottom: 20,
                textAlign: 'center',
              }}>
              {error}
            </Text>
          )}
          <Button
            loading={loading}
            content="Get Random Movie"
            onPress={handleGetRandomMovie}
          />
        </View>
      </Container>
    </Screen>
  );
};
