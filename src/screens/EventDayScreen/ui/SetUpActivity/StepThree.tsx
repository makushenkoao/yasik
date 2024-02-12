import React from 'react';
import {Text, View} from 'react-native';
import {Input} from '@shared/ui/Input';
import {Button} from '@shared/ui/Button';
import styles from './styles';

interface StepThreeProps {
  onChangeMinprice: (value: string) => void;
  onChangeMaxprice: (value: string) => void;
  minprice: string;
  maxprice: string;
  handleBack: () => void;
  findActivity: () => void;
}

export const StepThree = (props: StepThreeProps) => {
  const {
    onChangeMinprice,
    onChangeMaxprice,
    maxprice,
    minprice,
    findActivity,
    handleBack,
  } = props;

  return (
    <>
      <View style={styles.gap10}>
        <Text style={styles.stepTitle}>Enter Price</Text>
        <Input
          keyboardType="numeric"
          onChangeText={onChangeMinprice}
          value={minprice}
          placeholder="Enter min price"
          variant="outlined"
        />
        <Input
          keyboardType="numeric"
          onChangeText={onChangeMaxprice}
          placeholder="Enter max price"
          value={maxprice}
          variant="outlined"
        />
      </View>
      <View style={styles.buttonsWrapper}>
        <Button style={styles.button} content="Back" onPress={handleBack} />
        <Button style={styles.button} content="Find" onPress={findActivity} />
      </View>
    </>
  );
};
