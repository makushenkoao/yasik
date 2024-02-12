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
          uri: 'https://image.tmdb.org/t/p/original/wu1uilmhM4TdluKi2ytfz8gidHf.jpg',
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
