import React, {useCallback, useMemo, useRef} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {Text, View} from 'react-native';
import {StepOne} from './StepOne.tsx';
import {StepTwo} from './StepTwo.tsx';
import {StepThree} from './StepThree.tsx';
import {ActivityType} from '@screens/EventDayScreen/model/types/event.ts';
import styles from './styles.ts';

interface SetUpActivityProps {
  step: number;
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

export const SetUpActivity = (props: SetUpActivityProps) => {
  const {
    handleBack,
    handleContinue,
    minprice,
    onChangeMinprice,
    onChangeParticipants,
    participants,
    onChangeSelectedType,
    selectedType,
    onChangeMaxprice,
    maxprice,
    step,
    onGetFilteredActivity,
  } = props;

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['10%', '50%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const findActivity = () => {
    onGetFilteredActivity();
    bottomSheetRef?.current?.snapToIndex(0);
  };

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
            findActivity={findActivity}
            maxprice={maxprice}
            minprice={minprice}
            onChangeMaxprice={onChangeMaxprice}
            onChangeMinprice={onChangeMinprice}
          />
        );
    }
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      handleIndicatorStyle={styles.bottomSheetIndicator}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backgroundStyle={styles.bottomSheetBackground}>
      <View style={styles.bottomSheetWrapper}>
        <Text style={styles.bottomSheetTitle}>Set Up Activity</Text>
        <View style={styles.bottomSheetContainer}>{renderStep()}</View>
      </View>
    </BottomSheet>
  );
};
