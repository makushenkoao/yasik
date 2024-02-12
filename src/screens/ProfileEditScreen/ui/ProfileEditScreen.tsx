import {useState} from 'react';
import {Container} from '@shared/ui/Container';
import {View} from 'react-native';
import {Screen} from '@widgets/Screen/ui/Screen.tsx';
import {Input} from '@shared/ui/Input';
import {Button} from '@shared/ui/Button';
import styles from './styles.ts';

export const ProfileEditScreen = () => {
  const [name, setName] = useState('Your Name');
  const [error, setError] = useState('');

  const onSave = () => {
    if (name.length <= 3) {
      setError('Enter a name with more than 3 letters');
      return;
    }
    console.log('Save');
  };

  const onChangeName = (value: string) => {
    setError('');
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
            error={error}
          />
          <Button content="Save" onPress={onSave} />
        </View>
      </Container>
    </Screen>
  );
};
