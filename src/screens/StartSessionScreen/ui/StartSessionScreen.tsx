import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button as RNButton,
  Share,
} from 'react-native';
import {Header} from '@widgets/Header';
import {Colors} from '@shared/const/colors.ts';
import {Button} from '@shared/ui/Button';
import {RootParamList} from '@shared/types/router.ts';
import {StackNavigationProp} from '@react-navigation/stack';
import Clipboard from '@react-native-clipboard/clipboard';
import {useToast} from 'react-native-toast-notifications';

interface StartSessionScreenProps {
  navigation: StackNavigationProp<RootParamList, 'StartSession'>;
}

export const StartSessionScreen = (props: StartSessionScreenProps) => {
  const {navigation} = props;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const toast = useToast();

  const handleStartSession = () => {};
  const handleInvite = () => {
    const message = 'Join my session with code "MOCK_CODE".';

    Share.share({
      message: message,
    })
      .then(result => {
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            console.log('Shared via ', result.activityType);
          } else {
            console.log('Shared');
          }
        } else if (result.action === Share.dismissedAction) {
          console.log('Dismissed');
        }
      })
      .catch(error => console.error('Failed to share:', error));
  };

  const handleCopyCode = () => {
    const sessionCode = 'MOCK_CODE';
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

  return (
    <View style={{flex: 1}}>
      <Header />
      <ImageBackground
        source={{
          uri: 'https://image.tmdb.org/t/p/w500/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg\n',
        }}
        style={{
          width: '100%',
          height: 400,
          borderRadius: 12,
          justifyContent: 'flex-end',
          overflow: 'hidden',
        }}>
        <View
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            padding: 10,
          }}>
          <Text
            style={{
              color: Colors.TEXT,
              textAlign: 'center',
              marginBottom: 10,
              fontSize: 20,
            }}>
            Participants
          </Text>
          <Text
            style={{
              color: Colors.TEXT,
              textAlign: 'center',
              fontSize: 16,
              paddingHorizontal: 30,
              lineHeight: 20,
            }}>
            If you invited friends, wait until they connect before starting the
            session.
          </Text>
        </View>
      </ImageBackground>
      <View style={{paddingVertical: 20, paddingHorizontal: 24}}>
        <Text style={{color: Colors.TEXT}}>Session Code</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 10,
          }}>
          <TouchableOpacity
            onPress={handleCopyCode}
            activeOpacity={0.7}
            style={{
              backgroundColor: '#444444',
              flex: 1,
              borderRadius: 16,
              padding: 12,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: Colors.TEXT, fontSize: 15}}>MOCK_CODE</Text>
            <Image
              source={require('@shared/assets/images/copy.png')}
              style={{width: 20, height: 20, tintColor: Colors.TEXT}}
            />
          </TouchableOpacity>
          <Button style={{flex: 1}} content="Invite" onPress={handleInvite} />
        </View>
      </View>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{paddingHorizontal: 24}}>
          <Text
            style={{
              color: Colors.TEXT,
              marginBottom: 10,
              fontSize: 16,
            }}>
            Participants
          </Text>
          <View style={{flexDirection: 'row', gap: 10, flexWrap: 'wrap'}}>
            {['Jackson', 'Derek', 'Scott', 'Anton (You)'].map(item => (
              <View
                key={item}
                style={{
                  padding: 10,
                  backgroundColor: '#444',
                  borderRadius: 12,
                }}>
                <Text style={{color: Colors.TEXT}}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={{paddingVertical: 20, paddingHorizontal: 24}}>
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
            <Text
              style={{color: Colors.TEXT, fontSize: 18, textAlign: 'center'}}>
              Are you sure you want to cancel your session?
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flex: 1}}>
                <RNButton
                  color={Colors.HIGHLIGHT}
                  title="Yes"
                  onPress={handleCancelSession}
                />
              </View>
              <View style={{flex: 1}}>
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

const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalContainer: {
    height: 200,
    width: '80%',
    backgroundColor: '#333',
    borderRadius: 30,
    paddingHorizontal: 24,
    paddingVertical: 30,
    position: 'relative',
    justifyContent: 'space-between',
  },
});
