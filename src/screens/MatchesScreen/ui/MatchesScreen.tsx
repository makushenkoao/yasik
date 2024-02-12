import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList} from '@shared/types/router.ts';
import {Header} from '@widgets/Header';
import styles from './styles.ts';

interface MatchesScreenProps {
  navigation: StackNavigationProp<RootParamList, 'Matches'>;
}

export const MatchesScreen = (props: MatchesScreenProps) => {
  const {navigation} = props;

  const onNavigateToMatch = () => {
    navigation.navigate('MatchesDetails');
  };

  return (
    <View style={styles.wrapper}>
      <Header />
      <ImageBackground
        style={styles.imageBackground}
        source={{
          uri: 'https://image.tmdb.org/t/p/original/sGqqnvOqJg2HDHrjtCPIlCwF4Mu.jpg',
        }}>
        <View style={styles.imageBackgroundContent}>
          <Text style={styles.imageBackgroundTitle}>My Matches</Text>
        </View>
      </ImageBackground>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.container}>
          <View style={styles.matchesList}>
            {[1, 2, 3, 4, 5, 6].map(item => (
              <TouchableOpacity
                key={item}
                activeOpacity={0.7}
                onPress={onNavigateToMatch}>
                <ImageBackground
                  style={styles.matchImageBackground}
                  source={{
                    uri: 'https://image.tmdb.org/t/p/original/c1f7HpEEEZaOQ5PxAGLwbauURMu.jpg',
                  }}>
                  <View style={styles.matchContainer}>
                    <View style={styles.matchHeader}>
                      <Text style={styles.matchTitle}>Session CODE</Text>
                      <View style={styles.matchCountWrapper}>
                        <Text style={styles.matchCountText}>75 Matches</Text>
                      </View>
                    </View>
                    <View style={styles.matchInfoWrapper}>
                      <View style={styles.matchInfoContainer}>
                        <Image
                          source={require('@shared/assets/images/calendar.png')}
                          style={styles.matchInfoIcon}
                        />
                        <Text style={styles.matchInfoText}>16 August</Text>
                      </View>
                      <View style={styles.matchInfoContainer}>
                        <Image
                          source={require('@shared/assets/images/users.png')}
                          style={styles.matchInfoIcon}
                        />
                        <Text style={styles.matchInfoText}>
                          Jack, Derek, Scott
                        </Text>
                      </View>
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
