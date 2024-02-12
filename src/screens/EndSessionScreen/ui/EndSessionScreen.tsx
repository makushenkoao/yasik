import {Screen} from '@widgets/Screen';
import {Text, View, Button as RNButton} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList} from '@shared/types/router.ts';
import {Button} from '@shared/ui/Button';
import {Colors} from '@shared/const/colors.ts';

interface EndSessionProps {
  navigation: StackNavigationProp<RootParamList, 'EndSession'>;
}

export const EndSessionScreen = (props: EndSessionProps) => {
  const {navigation} = props;

  const onNavigate = (to: string) => {
    navigation.navigate(to);
  };

  return (
    <Screen>
      <View
        style={{
          height: '100%',
          justifyContent: 'center',
          paddingHorizontal: 24,
          gap: 10,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: Colors.TEXT,
            textAlign: 'center',
            lineHeight: 30,
            paddingHorizontal: 30,
          }}>
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
