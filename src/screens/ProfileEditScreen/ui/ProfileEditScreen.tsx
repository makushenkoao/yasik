import {useState} from 'react';
import {Container} from '@shared/ui/Container';
import {View} from 'react-native';
import {Screen} from '@widgets/Screen/ui/Screen.tsx';
import {Input} from '@shared/ui/Input';
import {Button} from '@shared/ui/Button';
import styles from './styles.ts';
import {useUser} from '@app/providers/user/UserProvider.tsx';
import {updateUser} from '@entities/User';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList} from '@shared/types/router.ts';

interface ProfileEditScreenProps {
  navigation: StackNavigationProp<RootParamList, 'ProfileEdit'>;
}

export const ProfileEditScreen = (props: ProfileEditScreenProps) => {
  const {navigation} = props;

  const {user, setData} = useUser();
  const [name, setName] = useState(user?.name || '');
  const [error, setError] = useState('');

  const onSave = () => {
    if (name.length <= 3) {
      setError('Enter a name with more than 3 letters');
      return;
    }

    updateUser({
      id: user?._id,
      name,
    }).then(user => setData(user));

    navigation.navigate('Profile');
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
