import {Text, View} from 'react-native';
import {Container} from '@shared/ui/Container';
import React from 'react';
import {Screen} from '@widgets/Screen/ui/Screen.tsx';
import {Button} from '@shared/ui/Button';
import {Colors} from '@shared/const/colors.ts';
import {useUser} from '@app/providers/user/UserProvider.tsx';

export const ProfileScreen = () => {
  const {logout} = useUser();

  const onDeleteAccount = () => {};

  return (
    <Screen headerVariant="profile">
      <Container style={{marginTop: 140, marginBottom: 40}}>
        <View style={{height: '100%', justifyContent: 'space-between'}}>
          <Text style={{textAlign: 'center', fontSize: 20, color: Colors.TEXT}}>
            Your Name
          </Text>
          <View>
            <Button onPress={logout} content="Leave From App" />
            <Button
              onPress={onDeleteAccount}
              content="Delete Account"
              variant="error"
            />
          </View>
        </View>
      </Container>
    </Screen>
  );
};
