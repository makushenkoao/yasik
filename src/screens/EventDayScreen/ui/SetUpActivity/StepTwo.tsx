import React from 'react';
import {Text, View} from 'react-native';
import {Input} from '@shared/ui/Input';
import {Button} from '@shared/ui/Button';
import styles from './styles';

interface StepTwoProps {
  participants: string;
  onChangeParticipants: (value: string) => void;
  handleBack: () => void;
  handleContinue: () => void;
}

export const StepTwo = (props: StepTwoProps) => {
  const {participants, onChangeParticipants, handleContinue, handleBack} =
    props;

  return (
    <>
      <View>
        <Text style={[styles.stepTitle, styles.mb10]}>Enter Participants</Text>
        <Input
          keyboardType="numeric"
          onChangeText={onChangeParticipants}
          placeholder="Enter number of participants"
          variant="outlined"
          value={participants}
        />
      </View>
      <View style={styles.buttonsWrapper}>
        <Button style={styles.button} content="Back" onPress={handleBack} />
        <Button
          style={styles.button}
          content="Continue"
          onPress={handleContinue}
        />
      </View>
    </>
  );
};
