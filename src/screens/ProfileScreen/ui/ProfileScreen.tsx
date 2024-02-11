import {Text, View} from 'react-native';
import {Container} from '@shared/ui/Container';
import {Screen} from '@widgets/Screen/ui/Screen.tsx';
import {Button} from '@shared/ui/Button';
import {useUser} from '@app/providers/user/UserProvider.tsx';
import styles from './styles.ts';

export const ProfileScreen = () => {
  const {logout} = useUser();

  const onDeleteAccount = () => {};

  return (
    <Screen headerVariant="profile">
      <Container style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.name}>Your Name</Text>
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
