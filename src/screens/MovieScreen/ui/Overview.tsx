import React, {useCallback, useMemo, useRef} from 'react';
import {Text, View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import styles from './styles.ts';

export const Overview = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['10%', '50%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      handleIndicatorStyle={styles.bottomSheetIndicator}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backgroundStyle={styles.bottomSheetBackground}>
      <View style={styles.bottomSheetWrapper}>
        <Text style={styles.bottomSheetTitle}>Overview</Text>
        <View style={styles.bottomSheetContainer}>
          <Text style={styles.bottomDescription}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            ad, alias cum deserunt doloremque ea eius enim eos fugiat id minima
            necessitatibus non odit qui reiciendis, saepe suscipit tempore
            voluptates?
          </Text>
        </View>
      </View>
    </BottomSheet>
  );
};
