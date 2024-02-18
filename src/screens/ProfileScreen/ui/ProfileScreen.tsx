import {useState} from 'react';
import {Modal, Text, View, Button as RNButton} from 'react-native';
import {Container} from '@shared/ui/Container';
import {Screen} from '@widgets/Screen/ui/Screen.tsx';
import {Button} from '@shared/ui/Button';
import {useUser} from '@app/providers/user/UserProvider.tsx';
import {deleteUserAccount} from '@entities/User';
import {Colors} from '@shared/const/colors.ts';
import styles from './styles.ts';

export const ProfileScreen = () => {
  const {logout, user} = useUser();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const onOpenModal = () => {
    setIsOpenModal(true);
  };

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  const onDeleteAccount = () => {
    setIsOpenModal(false);
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
              onPress={onOpenModal}
              content="Delete Account"
              variant="error"
              loading={loading}
            />
          </View>
        </View>
      </Container>
      <Modal
        visible={isOpenModal}
        onRequestClose={onCloseModal}
        // animationType="fade"
        transparent>
        <View style={styles.modalWrapper}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>
              Are you sure you want to delete your account?
            </Text>
            <View style={styles.modalButtons}>
              <View style={styles.modalButton}>
                <RNButton
                  color={Colors.HIGHLIGHT}
                  title="Yes"
                  onPress={onDeleteAccount}
                />
              </View>
              <View style={styles.modalButton}>
                <RNButton
                  color={Colors.HIGHLIGHT}
                  title="No"
                  onPress={onCloseModal}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </Screen>
  );
};
