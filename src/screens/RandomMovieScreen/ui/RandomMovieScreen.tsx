import {useState} from 'react';
import {Container} from '@shared/ui/Container';
import {Button} from '@shared/ui/Button';
import {Screen} from '@widgets/Screen';
import {Text, View} from 'react-native';
import {Emoji} from '@shared/ui/Emoji';
import {
  getMovieImages,
  getRandomMovie,
  Movie,
  MoviePoster,
} from '@entities/Movie';
import styles from './styles.ts';

export const RandomMovieScreen = () => {
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
          {error && <Text style={styles.error}>{error}</Text>}
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
