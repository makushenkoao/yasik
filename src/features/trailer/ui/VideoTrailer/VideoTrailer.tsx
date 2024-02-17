import styles from '@screens/MovieScreen/ui/styles.ts';
import {StyleProp, View, ViewStyle} from 'react-native';
import {WebView} from 'react-native-webview';
import BottomSheet from '@gorhom/bottom-sheet';
import React, {RefObject} from 'react';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';

interface VideoTrailerProps {
  uri: string;
  snapPoints: (string | number)[];
  bottomSheetRef: RefObject<BottomSheetMethods>;
  containerStyle?: StyleProp<ViewStyle>;
}

export const VideoTrailer = (props: VideoTrailerProps) => {
  const {uri, bottomSheetRef, snapPoints, containerStyle} = props;

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      handleIndicatorStyle={styles.bottomSheetIndicator}
      snapPoints={snapPoints}
      containerStyle={containerStyle}
      backgroundStyle={styles.bottomSheetBackground}>
      <View style={styles.bottomSheetWrapper}>
        <WebView
          source={{uri: `https://www.youtube.com/watch?v=${uri}`}}
          mediaPlaybackRequiresUserAction
        />
      </View>
    </BottomSheet>
  );
};
