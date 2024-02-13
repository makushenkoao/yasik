import {Text, View} from 'react-native';
import {Container} from '@shared/ui/Container';
import {Screen} from '@widgets/Screen/ui/Screen.tsx';
import {Button} from '@shared/ui/Button';
import {useUser} from '@app/providers/user/UserProvider.tsx';
import {deleteUserAccount} from '@entities/User';
import styles from './styles.ts';

export const ProfileScreen = () => {
  const {logout, user} = useUser();

  const onDeleteAccount = () => {
    deleteUserAccount(user?._id).then(logout);
  };

  if (!user) return;

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
            />
          </View>
        </View>
      </Container>
    </Screen>
  );
};
