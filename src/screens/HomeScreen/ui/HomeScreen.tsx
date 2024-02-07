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

interface HomeScreenProps {
  navigation: StackNavigationProp<RootParamList, 'Home'>;
}

export const HomeScreen = (props: HomeScreenProps) => {
  const {navigation} = props;

  const onNavigate = (link: string) => {
    navigation.navigate(link);
  };

  return (
    <ScrollView>
      <Container>
        <Emoji text="Stop bothering me! 😠" />
        <View style={{marginTop: 40}}>
          <Button
            style={{width: '100%'}}
            content="Goal Checklist ✍️"
            onPress={() => onNavigate('Todo')}
          />
          <Button
            style={{width: '100%'}}
            content="Boredom Buster ⚡"
            onPress={() => console.log('TODO')}
          />
          <Button
            style={{width: '100%'}}
            content="Choose a Movie 🎥"
            onPress={() => console.log('TODO')}
          />
        </View>
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
