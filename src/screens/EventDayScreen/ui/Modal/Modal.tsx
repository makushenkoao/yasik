import React from 'react';
import {
  Image,
  Modal as ReactNativeModal,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {StepOne} from './StepOne';
import {StepTwo} from './StepTwo';
import {StepThree} from './StepThree';
import {ActivityType} from '../../model/types/event';
import styles from './styles';

interface ModalProps {
  modalVisible: boolean;
  onRequestClose: () => void;
  step: number;
  onCloseModal: () => void;
  selectedType: ActivityType | null;
  onChangeSelectedType: (value: ActivityType) => void;
  handleContinue: () => void;
  onChangeMinprice: (value: string) => void;
  onChangeMaxprice: (value: string) => void;
  minprice: string;
  maxprice: string;
  handleBack: () => void;
  onGetFilteredActivity: () => void;
  participants: string;
  onChangeParticipants: (value: string) => void;
}

export const Modal = (props: ModalProps) => {
  const {
    step,
    onChangeMinprice,
    onChangeParticipants,
    participants,
    minprice,
    onChangeMaxprice,
    maxprice,
    onChangeSelectedType,
    selectedType,
    onGetFilteredActivity,
    modalVisible,
    onCloseModal,
    onRequestClose,
    handleBack,
    handleContinue,
  } = props;

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <StepOne
            handleContinue={handleContinue}
            onChangeSelectedType={onChangeSelectedType}
            selectedType={selectedType}
          />
        );
      case 2:
        return (
          <StepTwo
            handleContinue={handleContinue}
            handleBack={handleBack}
            onChangeParticipants={onChangeParticipants}
            participants={participants}
          />
        );
      case 3:
        return (
          <StepThree
            handleBack={handleBack}
            getFilteredActivity={onGetFilteredActivity}
            maxprice={maxprice}
            minprice={minprice}
            onChangeMaxprice={onChangeMaxprice}
            onChangeMinprice={onChangeMinprice}
          />
        );
    }
  };

  return (
    <ReactNativeModal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={onRequestClose}>
      <View style={styles.modalWrapper}>
        <View style={styles.modalContainer}>
          <ScrollView contentContainerStyle={styles.scroll}>
            <View style={styles.modalContent}>{renderStep()}</View>
          </ScrollView>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={onCloseModal}
            style={styles.closeButtonWrapper}>
            <Image
              source={require('@shared/assets/images/cross.png')}
              style={styles.closeButton}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ReactNativeModal>
  );
};
