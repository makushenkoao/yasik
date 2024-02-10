import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Container} from '@shared/ui/Container';
import {Colors} from '@shared/const/colors.ts';
import {Button} from '@shared/ui/Button';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList} from '@shared/types/router.ts';
import {Emoji} from '@shared/ui/Emoji';
import {Header} from '@widgets/Header';

interface HomeScreenProps {
  navigation: StackNavigationProp<RootParamList, 'Home'>;
}

export const HomeScreen = (props: HomeScreenProps) => {
  const {navigation} = props;

  const onNavigate = (link: string) => {
    navigation.navigate(link);
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <Header variant="home" />
      <View>
        <Emoji text="Let's choose what to watch already 🔮" />
      </View>
      <Container
        style={{
          marginVertical: 50,
        }}>
        <Button
          style={{width: '100%'}}
          content="Creare session 🎥"
          onPress={() => onNavigate('Todo')}
        />
        <Button
          style={{width: '100%'}}
          content="Connect to Session 🤝"
          onPress={() => console.log('TODO')}
        />
        <Button
          style={{width: '100%'}}
          content="Random Movie 🎲"
          onPress={() => onNavigate('RandomMovie')}
        />
        <Button
          style={{width: '100%'}}
          content="Boredom Buster ⚡"
          onPress={() => onNavigate('EventDay')}
        />
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
  wrapper: {
    alignItems: 'center',
    backgroundColor: Colors.SECONDARY,
    borderRadius: 50,
    overflow: 'hidden',
  },
  textContainer: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});
