import {Button, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {Colors} from '@shared/const/colors.ts';
import styles from './styles.ts';

interface VideoTrailerProps {
  videoUrl: string;
  onClose: () => void;
}

export const VideoTrailer = (props: VideoTrailerProps) => {
  const {videoUrl, onClose} = props;

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Close" onPress={onClose} color={Colors.HIGHLIGHT} />
      </View>
      <WebView source={{uri: videoUrl}} />
    </View>
  );
};
