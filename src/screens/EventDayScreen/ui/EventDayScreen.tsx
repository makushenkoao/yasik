import React, {useMemo, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Linking,
  ScrollView,
  Share,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Emoji} from '@shared/ui/Emoji';
import {Button} from '@shared/ui/Button';
import {getFilteredActivity, getRandomActivity} from '../model/services/events';
import {Activity, ActivityType} from '../model/types/event';
import {SetUpActivity} from '@screens/EventDayScreen/ui/SetUpActivity/SetUpActivity.tsx';
import {Header} from '@widgets/Header';
import styles from './styles';

export const EventDayScreen = () => {
  const [activity, setActivity] = useState<Activity | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [selectedType, setSelectedType] = useState<ActivityType | null>(null);
  const [participants, setParticipants] = useState<string>('');
  const [minprice, setMinrice] = useState<string>('');
  const [maxprice, setMaxPrice] = useState<string>('');
  const [step, setStep] = useState(1);

  const onGetRandomActivityType = () => {
    setLoading(true);
    getRandomActivity()
      .then(setActivity)
      .finally(() => setLoading(false));
  };

  const onGetFilteredActivity = () => {
    setLoading(true);
    setStep(1);
    getFilteredActivity({
      type: selectedType,
      maxprice,
      minprice,
      participants,
    })
      .then(setActivity)
      .finally(() => setLoading(false));
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

  const onChangeMinprice = (value: string) => {
    setMinrice(value);
  };
  const onChangeMaxprice = (value: string) => {
    setMaxPrice(value);
  };
  const onChangeParticipants = (value: string) => {
    setParticipants(value);
  };

  const activitiesBlocks = useMemo(
    () => [
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
    ],
    [
      activity?.accessibility,
      activity?.activity,
      activity?.participants,
      activity?.price,
      activity?.type,
    ],
  );

  const handleShare = () => {
    console.log('PRESS');
    if (!activity) {
      return;
    }

    const message = `I found a activity!\n\nActivity: ${activity.activity}\nType: ${activity.type}\nPrice: ${activity.price}\nParticipants: ${activity.participants}\nAccessibility: ${activity.accessibility}`;

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
      .catch(err => console.error('Failed to share:', err));
  };

  return (
    <>
      <Header />
      <Emoji text="Let's find something for you to do today 🎯" />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.container}>
          <Button
            loading={loading}
            content="Get Random Activity"
            onPress={onGetRandomActivityType}
          />
          {activity &&
            (loading ? (
              <View style={styles.activityWrapper}>
                <ActivityIndicator size="large" color="#fff" />
              </View>
            ) : (
              <View style={styles.activityWrapper}>
                <TouchableOpacity
                  onPress={handleShare}
                  style={styles.shareButton}>
                  <Image
                    source={require('@shared/assets/images/share.png')}
                    style={styles.shareImage}
                  />
                </TouchableOpacity>
                <Text style={styles.activityTitle}>
                  We have found an activity 😎
                </Text>
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
            ))}
        </View>
      </ScrollView>
      <SetUpActivity
        step={step}
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
    </>
  );
};
