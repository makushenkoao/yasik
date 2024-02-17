import {ScrollView, View} from 'react-native';
import {Container} from '@shared/ui/Container';
import {Button} from '@shared/ui/Button';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList} from '@shared/types/router.ts';
import {Emoji} from '@shared/ui/Emoji';
import {Header} from '@widgets/Header';
import {HOME_SCREEN_BUTTONS} from '../model/const/home';
import styles from './styles.ts';

interface HomeScreenProps {
  navigation: StackNavigationProp<RootParamList, 'Home'>;
}

export const HomeScreen = (props: HomeScreenProps) => {
  const {navigation} = props;

  const onNavigate = (link: string) => {
    navigation.navigate(link);
  };

  return (
    <>
      <Header variant="home" />
      <View>
        <Emoji text="Let's choose what to watch already 🔮" />
      </View>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.container}>
          {HOME_SCREEN_BUTTONS.map(item => (
            <Button
              key={item.id}
              content={item.content}
              onPress={() => onNavigate(item.link)}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};
