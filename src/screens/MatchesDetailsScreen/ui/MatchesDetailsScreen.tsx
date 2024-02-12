import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import {Header} from '@widgets/Header';
import {MovieCard} from '@entities/Movie';
import styles from './styles.ts';

export const MatchesDetailsScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Header />
      <ImageBackground
        style={styles.imageBackground}
        source={{
          uri: 'https://image.tmdb.org/t/p/original/sGqqnvOqJg2HDHrjtCPIlCwF4Mu.jpg',
        }}>
        <View style={styles.imageBackgroundContent}>
          <Text style={styles.imageBackgroundTitle}>Session CODE</Text>
          <View style={styles.imageBackgroundInfoWrapper}>
            <View style={styles.imageBackgroundInfoContainer}>
              <Image
                source={require('@shared/assets/images/calendar.png')}
                style={styles.imageBackgroundInfoIcon}
              />
              <Text style={styles.imageBackgroundInfoText}>16 August</Text>
            </View>
            <View style={styles.imageBackgroundInfoContainer}>
              <Image
                source={require('@shared/assets/images/users.png')}
                style={styles.imageBackgroundInfoIcon}
              />
              <Text style={styles.imageBackgroundInfoText}>
                Jack, Derek, Scott
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.container}>
          <View style={styles.list}>
            {[
              'Movie Name',
              'Movie Name',
              'Movie Name',
              'Movie Name',
              'Movie Name',
              'Movie Name',
              'Movie Name',
              'Movie Name',
            ].map((item, index) => (
              <MovieCard
                id={44422}
                img="/sGqqnvOqJg2HDHrjtCPIlCwF4Mu.jpg"
                title={item}
                key={index}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
