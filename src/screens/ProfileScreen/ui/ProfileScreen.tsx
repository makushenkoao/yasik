import {Text, View} from 'react-native';
import {Container} from '@shared/ui/Container';
import {Screen} from '@widgets/Screen/ui/Screen.tsx';
import {Button} from '@shared/ui/Button';
import {useUser} from '@app/providers/user/UserProvider.tsx';
import {deleteUserAccount} from '@entities/User';
import styles from './styles.ts';
import {useState} from 'react';

export const ProfileScreen = () => {
  const {logout, user} = useUser();
  const [loading, setLoading] = useState(false);

  const onDeleteAccount = () => {
    setLoading(true);
    deleteUserAccount(user?._id)
      .then(logout)
      .finally(() => setLoading(false));
  };

  if (!user) {
    return (
      <Screen headerVariant="profile">
        <Container style={styles.container}>
          <Text style={styles.name}>Data Not Found</Text>
        </Container>
      </Screen>
    );
  }

  return (
    <Screen headerVariant="profile">
      <Container style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.name}>{user?.name}</Text>
          <View>
            <Button onPress={logout} content="Leave From App" />
            <Button
              onPress={onDeleteAccount}
              content="Delete Account"
              variant="error"
              loading={loading}
            />
          </View>
        </View>
      </Container>
    </Screen>
  );
};
