import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '@shared/const/colors';
import {Button} from '@shared/ui/Button';
import {ACTIVITIES} from '../../model/const/event';
import {ActivityType} from '../../model/types/event';
import styles from './styles';

interface StepOneProps {
  selectedType: ActivityType | null;
  onChangeSelectedType: (value: ActivityType) => void;
  handleContinue: () => void;
}

export const StepOne = (props: StepOneProps) => {
  const {selectedType, onChangeSelectedType, handleContinue} = props;

  return (
    <>
      <View>
        <Text style={[styles.stepTitle, styles.mb10]}>
          Select Activity Type
        </Text>
        <View style={styles.typesWrapper}>
          {ACTIVITIES.map(item => (
            <TouchableOpacity
              key={item}
              onPress={() => onChangeSelectedType(item)}
              style={[
                styles.typeBlock,
                {
                  backgroundColor:
                    item === selectedType ? Colors.ACCENT : Colors.BACKGROUND,
                },
              ]}>
              <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <Button content="Continue" onPress={handleContinue} />
    </>
  );
};
