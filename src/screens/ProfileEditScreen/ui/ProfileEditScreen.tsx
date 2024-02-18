import React, {useState} from 'react';
import {Container} from '@shared/ui/Container';
import {View} from 'react-native';
import {Screen} from '@widgets/Screen/ui/Screen.tsx';
import {Input} from '@shared/ui/Input';
import {Button} from '@shared/ui/Button';
import {useUser} from '@app/providers/user/UserProvider.tsx';
import {updateUser} from '@entities/User';
import {useToast} from 'react-native-toast-notifications';
import styles from './styles.ts';

export const ProfileEditScreen = () => {
  const {user, setData} = useUser();
  const [name, setName] = useState(user?.name || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const toast = useToast();

  const onSave = () => {
    if (name.length <= 3) {
      setError('Enter a name with more than 3 letters');
      return;
    }

    setLoading(true);

    updateUser({
      id: user?._id,
      name,
    })
      .then(user => {
        setData(user);
        toast.show('Name updated successfully', {
          type: 'success',
          placement: 'top',
        });
      })
      .finally(() => setLoading(false));
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
          <Button content="Save" onPress={onSave} loading={loading} />
        </View>
      </Container>
    </Screen>
  );
};
