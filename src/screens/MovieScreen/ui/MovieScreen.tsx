import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '@shared/const/colors.ts';
import {Button} from '@shared/ui/Button';
import {Header} from '@widgets/Header';

export const MovieScreen = () => {
  const onOpenTrailer = () => {};

  return (
    <>
      <Header />
      <ImageBackground
        source={{
          uri: 'https://image.tmdb.org/t/p/original/oihWVx3imvRKujnGmSDYhfG1gI5.jpg',
        }}
        style={styles.imageBackground}>
        <View style={styles.infoWrapper}>
          <Text style={[styles.title, styles.mb10]}>Movie Name</Text>
          <View style={[styles.rateWrapper, styles.mb10]}>
            <Text style={styles.text}>8</Text>
            <Image
              style={styles.starIcon}
              source={require('@shared/assets/images/star.png')}
            />
          </View>
          <Text style={[styles.text, styles.mb10]}>Year</Text>
          <Text style={[styles.text, styles.mb10]}>Comedy</Text>
        </View>
        <View style={styles.container}>
          <Button
            onPress={onOpenTrailer}
            content="Watch Movie Trailer"
            style={styles.mb10}
          />
          <View style={styles.btnWrapper}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.button, styles.cancel]}>
              <Text style={styles.buttonText}>Don't Want</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.button, styles.done]}>
              <Text style={styles.buttonText}>Want</Text>
            </TouchableOpacity>
          </View>
          <Text>Info</Text>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  mb12: {marginBottom: 12},
  mb5: {marginBottom: 5},
  mb10: {marginBottom: 10},
  title: {
    fontSize: 20,
    color: Colors.HEADER,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 15,
    color: Colors.HEADER,
  },
  btnWrapper: {
    flexDirection: 'row',
    gap: 10,
  },
  container: {
    paddingHorizontal: 24,
    paddingBottom: 60,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  button: {
    flex: 1,
    padding: 12,
    borderRadius: 16,
  },
  buttonText: {
    fontSize: 18,
    color: Colors.HEADER,
    textAlign: 'center',
  },
  done: {
    backgroundColor: Colors.SUCCESS,
  },
  cancel: {
    backgroundColor: Colors.IMPORTANT,
  },
  rateWrapper: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  starIcon: {
    width: 18,
    height: 18,
    tintColor: Colors.HIGHLIGHT,
  },
  infoWrapper: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
});
