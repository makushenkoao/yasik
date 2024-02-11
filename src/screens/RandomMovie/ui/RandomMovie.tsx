import React, {useState} from 'react';
import {Container} from '@shared/ui/Container';
import {Button} from '@shared/ui/Button';
import {Screen} from '@widgets/Screen';
import {Text, View, Button as RNButton, Share} from 'react-native';
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

  const handleShare = () => {
    if (!movie) return null;

    const message = `I found a movie to watch!\n\n"${movie.title}" | ${new Date(
      movie.release_date,
    ).getFullYear()} | ${movie.vote_average}\n\n${movie.overview}`;

    Share.share({
      message: message,
    })
      .then(result => {
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            console.log('Shared via ', result.activityType);
          } else {
            console.log('Shared');
          }
        } else if (result.action === Share.dismissedAction) {
          console.log('Dismissed');
        }
      })
      .catch(error => console.error('Failed to share:', error));
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
      <Container>
        <View style={{height: '100%', justifyContent: 'space-between'}}>
          <View>
            {movie && <RNButton onPress={handleShare} title="Share" color={Colors.HIGHLIGHT} />}
          </View>
          <View>
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
        </View>
      </Container>
    </Screen>
  );
};
