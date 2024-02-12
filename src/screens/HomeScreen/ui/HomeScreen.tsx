import React from 'react';
import {ScrollView, View} from 'react-native';
import {Container} from '@shared/ui/Container';
import {Button} from '@shared/ui/Button';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList} from '@shared/types/router.ts';
import {Emoji} from '@shared/ui/Emoji';
import {Header} from '@widgets/Header';
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
    <ScrollView contentContainerStyle={styles.scroll}>
      <Header variant="home" />
      <View>
        <Emoji text="Let's choose what to watch already 🔮" />
      </View>
      <Container style={styles.container}>
        <Button
          content="Create session 🎥"
          onPress={() => onNavigate('CreateSession')}
        />
        <Button
          content="Connect to Session 🤝"
          onPress={() => onNavigate('ConnectToSession')}
        />
        <Button
          content="Random Movie 🎲"
          onPress={() => onNavigate('RandomMovie')}
        />
        <Button
          content="Boredom Buster ⚡"
          onPress={() => onNavigate('EventDay')}
        />
      </Container>
    </ScrollView>
  );
};
