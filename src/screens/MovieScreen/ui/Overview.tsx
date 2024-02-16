import React, {useMemo, useRef} from 'react';
import {Text, View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import styles from './styles.ts';

interface OverviewProps {
  overview: string;
}

export const Overview = (props: OverviewProps) => {
  const {overview} = props;

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['10%', '50%'], []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      handleIndicatorStyle={styles.bottomSheetIndicator}
      snapPoints={snapPoints}
      backgroundStyle={styles.bottomSheetBackground}>
      <View style={styles.bottomSheetWrapper}>
        <Text style={styles.bottomSheetTitle}>Overview</Text>
        <View style={styles.bottomSheetContainer}>
          <Text style={styles.bottomDescription}>{overview}</Text>
        </View>
      </View>
    </BottomSheet>
  );
};
