import {Header} from '@widgets/Header';
import {ScrollView, Text, View} from 'react-native';
import {Container} from '@shared/ui/Container';
import React from 'react';
import {Screen} from '@widgets/Screen/ui/Screen.tsx';
import {Button} from '@shared/ui/Button';
import {Colors} from '@shared/const/colors.ts';

export const ProfileScreen = () => {
  const onLeaveFromApp = () => {};

  const onDeleteAccount = () => {};

  return (
    <Screen headerVariant="profile">
      <Container style={{marginTop: 140, marginBottom: 40}}>
        <View style={{height: '100%', justifyContent: 'space-between'}}>
          <Text style={{textAlign: 'center', fontSize: 20, color: Colors.TEXT}}>
            Your Name
          </Text>
          <View>
            <Button onPress={onLeaveFromApp} content="Leave From App" />
            <Button onPress={onDeleteAccount} content="Delete Account" />
          </View>
        </View>
      </Container>
    </Screen>
  );
};
