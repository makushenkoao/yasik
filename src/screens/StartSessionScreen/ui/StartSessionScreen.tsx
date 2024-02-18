import React, {useEffect, useState} from 'react';
import {
  Button as RNButton,
  Image,
  ImageBackground,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Header} from '@widgets/Header';
import {Colors} from '@shared/const/colors.ts';
import {Button} from '@shared/ui/Button';
import {RootParamList} from '@shared/types/router.ts';
import {StackNavigationProp} from '@react-navigation/stack';
import Clipboard from '@react-native-clipboard/clipboard';
import {useToast} from 'react-native-toast-notifications';
import styles from './styles.ts';
import {useRoute} from '@react-navigation/native';
import {getSessionById, Session} from '@entities/Session';
import {Share} from '@features/share';

interface StartSessionScreenProps {
  navigation: StackNavigationProp<RootParamList, 'StartSession'>;
}

export const StartSessionScreen = (props: StartSessionScreenProps) => {
  const {navigation} = props;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const toast = useToast();
  const {params} = useRoute();

  useEffect(() => {
    // TODO: fix ts error
    // @ts-ignore
    getSessionById(params?.sessionId).then(setSession);
    // @ts-ignore
  }, [params?.sessionId]);

  const handleStartSession = () => {
    // TODO: fix ts error
    // @ts-ignore
    navigation.navigate('Movie', {genres: session?.genres});
  };

  const handleCopyCode = () => {
    if (!session) {
      return;
    }

    const sessionCode = session.code;
    Clipboard.setString(sessionCode);
    toast.show('Code copied successfully', {
      placement: 'top',
      successColor: Colors.ACCENT,
      type: 'success',
    });
  };

  const handleCancelSession = () => {
    setIsOpenModal(false);
    navigation.navigate('Home');
  };

  const handleOpenModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);

  if (!session) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <Header />
      <ImageBackground
        source={{
          uri: 'https://image.tmdb.org/t/p/original/jHxCeXnSchAuwHnmVatTgqMYdX8.jpg',
        }}
        style={styles.imageBackground}>
        <View style={styles.imageBackgroundContent}>
          <Text style={styles.imageBackgroundTitle}>Participants</Text>
          <Text style={styles.imageBackgroundDescription}>
            If you invited friends, wait until they connect before starting the
            session.
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.container}>
        <Text style={{color: Colors.TEXT}}>Session Code</Text>
        <View style={styles.buttonsWrapper}>
          <TouchableOpacity
            onPress={handleCopyCode}
            activeOpacity={0.7}
            style={styles.codeButton}>
            <Text style={styles.codeText}>{session.code}</Text>
            <Image
              source={require('@shared/assets/images/copy.png')}
              style={styles.codeImage}
            />
          </TouchableOpacity>
          <Share
            type="button"
            buttonTitle="Invite"
            shareMessage={session.code}
            style={styles.inviteBtn}
          />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.participantsContainer}>
          <Text style={styles.participantsTitle}>Participants</Text>
          <View style={styles.participantList}>
            {['Jackson', 'Derek', 'Scott', 'Anton (You)'].map(item => (
              <View key={item} style={styles.participantBlock}>
                <Text style={styles.participantName}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.container}>
        <Button
          // loading={loading}
          content="Start Session"
          onPress={handleStartSession}
        />
        <Button
          // loading={loading}
          content="Cancel Session"
          variant="error"
          onPress={handleOpenModal}
        />
      </View>
      <Modal
        visible={isOpenModal}
        onRequestClose={handleCloseModal}
        animationType="fade"
        transparent>
        <View style={styles.modalWrapper}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>
              Are you sure you want to cancel your session?
            </Text>
            <View style={styles.modalButtons}>
              <View style={styles.modalButton}>
                <RNButton
                  color={Colors.HIGHLIGHT}
                  title="Yes"
                  onPress={handleCancelSession}
                />
              </View>
              <View style={styles.modalButton}>
                <RNButton
                  color={Colors.HIGHLIGHT}
                  title="No"
                  onPress={handleCloseModal}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
