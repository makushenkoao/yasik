import {useState} from 'react';
import {Container} from '@shared/ui/Container';
import {Button} from '@shared/ui/Button';
import {Screen} from '@widgets/Screen';
import {Text, View, Button as RNButton, Share} from 'react-native';
import {Emoji} from '@shared/ui/Emoji';
import {Colors} from '@shared/const/colors.ts';
import {
  getMovieImages,
  getRandomMovie,
  Movie,
  MoviePoster,
} from '@entities/Movie';
import styles from './styles.ts';

export const RandomMovie = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGetRandomMovie = () => {
    setLoading(true);
    getRandomMovie()
      .then(data => {
        setMovie(data);
        setLoading(false);
        getMovieImages(data.id).then(imageData =>
          setImage(imageData.backdrops[0]?.file_path),
        );
      })
      .catch(() => {
        setError('An error occurred while fetching the random movie.');
        setLoading(false);
      });
  };

  const handleShare = () => {
    if (!movie) {
      return null;
    }

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
      .catch(err => console.error('Failed to share:', err));
  };

  console.log(image);

  return (
    <Screen>
      {!movie && (
        <Emoji
          text="Choose a random popular movie for your evening 🌇"
          style={styles.emoji}
        />
      )}
      {movie && (
        <MoviePoster
          id={movie.id}
          title={movie.title}
          poster_path={image || movie.poster_path}
        />
      )}
      <Container>
        <View style={styles.content}>
          <View>
            {movie && (
              <RNButton
                onPress={handleShare}
                title="Share"
                color={Colors.HIGHLIGHT}
              />
            )}
          </View>
          <View>
            {error && <Text style={styles.error}>{error}</Text>}
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
