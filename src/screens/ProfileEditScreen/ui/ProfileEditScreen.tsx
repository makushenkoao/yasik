import React, {useState} from 'react';
import {Container} from '@shared/ui/Container';
import {Header} from '@widgets/Header';
import {Text, View} from 'react-native';
import {Screen} from '@widgets/Screen/ui/Screen.tsx';
import {Input} from '@shared/ui/Input';
import {Button} from '@shared/ui/Button';

export const ProfileEditScreen = () => {
  const [name, setName] = useState('Your Name');

  const onSave = () => {
    console.log('Save');
  };

  const onChangeName = (value: string) => {
    setName(value);
  };

  return (
    <Screen headerVariant="close" headerTitle="Profile Edit">
      <Container style={{marginTop: 140, marginBottom: 60}}>
        <View style={{height: '100%', justifyContent: 'space-between'}}>
          <Input
            placeholder="Enter Your Name"
            variant="outlined"
            value={name}
            onChangeText={onChangeName}
          />
          <Button content="Save Changes" onPress={onSave} />
        </View>
      </Container>
    </Screen>
  );
};
