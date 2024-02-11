import React, {useState} from 'react';
import {Container} from '@shared/ui/Container';
import {ImageBackground, View} from 'react-native';
import {Button} from '@shared/ui/Button';
import {Screen} from '@widgets/Screen';
import {Input} from '@shared/ui/Input';
import styles from './styles.ts';

export const ConnectToSessionScreen = () => {
  const [code, setCode] = useState('');

  const handleConnectToSession = () => {};

  return (
    <Screen>
      <ImageBackground
        source={{
          uri: 'https://image.tmdb.org/t/p/w500/jlJ8nDhMhCYJuzOw3f52CP1W8MW.jpg\n',
        }}
        style={styles.imageBackground}
      />
      <Container style={styles.container}>
        <View style={styles.content}>
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
