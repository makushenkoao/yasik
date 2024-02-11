import {useState} from 'react';
import {Container} from '@shared/ui/Container';
import {View} from 'react-native';
import {Screen} from '@widgets/Screen/ui/Screen.tsx';
import {Input} from '@shared/ui/Input';
import {Button} from '@shared/ui/Button';
import styles from './styles.ts';

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
      <Container style={styles.container}>
        <View style={styles.content}>
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
