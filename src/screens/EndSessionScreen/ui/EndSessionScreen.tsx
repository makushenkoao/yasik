import {Screen} from '@widgets/Screen';
import {Button as RNButton, Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList} from '@shared/types/router.ts';
import {Button} from '@shared/ui/Button';
import {Colors} from '@shared/const/colors.ts';
import styles from './styles.ts';

interface EndSessionProps {
  navigation: StackNavigationProp<RootParamList, 'EndSession'>;
}

export const EndSessionScreen = (props: EndSessionProps) => {
  const {navigation} = props;

  const onNavigate = (to: string) => {
    navigation.navigate(to);
  };

  return (
    <Screen headerVariant="close">
      <View style={styles.container}>
        <Text style={styles.title}>
          We've run out of genres and selections you've chosen 🤯
        </Text>
        <Button content="Go to Matches" onPress={() => onNavigate('Matches')} />
        <RNButton
          title="Create a New Session"
          onPress={() => onNavigate('CreateSession')}
          color={Colors.HIGHLIGHT}
        />
      </View>
    </Screen>
  );
};
