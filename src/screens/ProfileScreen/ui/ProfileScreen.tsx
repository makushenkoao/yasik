import React from 'react';
import {Container} from '@shared/ui/Container';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '@shared/const/colors.ts';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList} from '@shared/types/router.ts';

// settings - delele account/update account/logout/reset app
// account - movie bookmarks/info/update account

interface ProfileScreenProps {
  navigation: StackNavigationProp<RootParamList, 'Profile'>;
}

export const ProfileScreen = (props: ProfileScreenProps) => {
  const {navigation} = props;

  const onNavigate = (link: string) => {
    navigation.navigate(link);
  };

  return (
    <ScrollView>
      <Container>
        <View>
          <TouchableOpacity
            style={styles.block}
            activeOpacity={0.7}
            onPress={() => onNavigate('Account')}>
            <Text style={styles.text}>Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.block}
            activeOpacity={0.7}
            onPress={() => onNavigate('Settings')}>
            <Text style={styles.text}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.block}
            activeOpacity={0.7}
            onPress={() => onNavigate('About')}>
            <Text style={styles.text}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.block}
            activeOpacity={0.7}
            onPress={() => onNavigate('Support')}>
            <Text style={styles.text}>Support</Text>
          </TouchableOpacity>
        </View>
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  block: {padding: 20, borderBottomWidth: 1, borderColor: Colors.BORDER},
  text: {
    color: Colors.TEXT,
    fontSize: 16,
  },
});
