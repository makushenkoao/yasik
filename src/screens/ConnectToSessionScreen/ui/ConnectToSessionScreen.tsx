import React, {useState} from 'react';
import {Emoji} from '@shared/ui/Emoji';
import {MoviePoster} from '@entities/Movie';
import {Container} from '@shared/ui/Container';
import {ImageBackground, Text, View} from 'react-native';
import {Colors} from '@shared/const/colors.ts';
import {Button} from '@shared/ui/Button';
import {Screen} from '@widgets/Screen';
import styles from '@entities/Movie/ui/MoviePoster/styles.ts';
import {Input} from '@shared/ui/Input';

export const ConnectToSessionScreen = () => {
  const [code, setCode] = useState('');

  const handleConnectToSession = () => {};

  return (
    <Screen>
      <ImageBackground
        source={{
          uri: 'https://image.tmdb.org/t/p/w500/jlJ8nDhMhCYJuzOw3f52CP1W8MW.jpg\n',
        }}
        style={{
          width: '100%',
          height: 500,
          borderRadius: 12,
          overflow: 'hidden',
        }}
      />
      <Container style={{marginVertical: 20}}>
        <View style={{height: '100%', justifyContent: 'space-between'}}>
          <Input
            placeholder="Enter Session Code"
            value={code}
            onChangeText={text => setCode(text)}
            variant="outlined"
          />
          <Button
            // loading={loading}
            content="Connect"
            onPress={handleConnectToSession}
          />
        </View>
      </Container>
    </Screen>
  );
};
