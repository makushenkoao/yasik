import React, {useState} from 'react';
import {Linking, Text, TouchableOpacity, View} from 'react-native';
import {Screen} from '@widgets/Screen';
import {Emoji} from '@shared/ui/Emoji';
import {Container} from '@shared/ui/Container';
import {Button} from '@shared/ui/Button';
import {getFilteredActivity, getRandomActivity} from '../model/services/events';
import {Activity, ActivityType} from '../model/types/event';
import {Modal} from './Modal/Modal';
import styles from './styles';

// TODO:
//  swipe modal
//  animation swipe
//  loading
//  error

export const EventDayScreen = () => {
  const [activity, setActivity] = useState<Activity | undefined>(undefined);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedType, setSelectedType] = useState<ActivityType | null>(null);
  const [participants, setParticipants] = useState<string>('');
  const [minprice, setMinrice] = useState<string>('');
  const [maxprice, setMaxPrice] = useState<string>('');
  const [step, setStep] = useState(1);

  const onGetRandomActivityType = () => {
    getRandomActivity().then(setActivity);
  };

  const onGetFilteredActivity = () => {
    onCloseModal();
    getFilteredActivity({
      type: selectedType,
      maxprice,
      minprice,
      participants,
    }).then(setActivity);
  };

  const setUpActivity = () => {
    onOpenModal();
    setStep(1);
  };

  const onChangeSelectedType = (type: ActivityType) => {
    setSelectedType(type);
  };

  const handleContinue = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const onCloseModal = () => {
    setModalVisible(false);
  };

  const onOpenModal = () => {
    setModalVisible(true);
  };

  const onRequestClose = () => {
    setModalVisible(!modalVisible);
  };

  const onChangeMinprice = (value: string) => {
    setMinrice(value);
  };
  const onChangeMaxprice = (value: string) => {
    setMaxPrice(value);
  };
  const onChangeParticipants = (value: string) => {
    setParticipants(value);
  };

  const activitiesBlocks = [
    {
      id: '1',
      label: 'Activity: ',
      text: activity?.activity ?? '',
    },
    {
      id: '2',
      label: 'Type: ',
      text: activity?.type ?? '',
    },
    {
      id: '3',
      label: 'Price: ',
      text: activity?.price ?? '',
    },
    {
      id: '4',
      label: 'Participants: ',
      text: activity?.participants ?? '',
    },
    {
      id: '5',
      label: 'Accessibility: ',
      text: activity?.accessibility ?? '',
    },
  ];

  return (
    <Screen>
      <Emoji text="Let's find something for you to do today 🎯" />
      <Container>
        <Button
          content="Get Random Activity"
          onPress={onGetRandomActivityType}
        />
        <Button content="Set up Activity" onPress={setUpActivity} />
        {activity && (
          <View style={styles.activityWrapper}>
            <Text style={styles.activityTitle}>We have found an activity 😎</Text>
            {activitiesBlocks.map(item => (
              <Text key={item.id} style={styles.activityText}>
                <Text style={styles.activityTextBold}>{item.label}</Text>
                {item.text}
              </Text>
            ))}
            {activity.link && (
              <TouchableOpacity
                onPress={() => Linking.openURL(activity.link)}
                activeOpacity={0.7}>
                <Text style={styles.link}>Open Link</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </Container>
      <Modal
        modalVisible={modalVisible}
        onRequestClose={onRequestClose}
        step={step}
        onCloseModal={onCloseModal}
        selectedType={selectedType}
        onChangeSelectedType={onChangeSelectedType}
        handleContinue={handleContinue}
        onChangeMinprice={onChangeMinprice}
        onChangeMaxprice={onChangeMaxprice}
        minprice={minprice}
        maxprice={maxprice}
        handleBack={handleBack}
        onGetFilteredActivity={onGetFilteredActivity}
        participants={participants}
        onChangeParticipants={onChangeParticipants}
      />
    </Screen>
  );
};
