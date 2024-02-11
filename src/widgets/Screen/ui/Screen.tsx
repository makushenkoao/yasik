import {ReactNode} from 'react';
import {ScrollView} from 'react-native';
import {Header, HeaderVariant} from '../../Header/ui/Header.tsx';
import styles from './styles.ts';

interface ScreenProps {
  headerVariant?: HeaderVariant;
  headerTitle?: string;
  children: ReactNode;
}

export const Screen = (props: ScreenProps) => {
  const {headerVariant = 'default', children, headerTitle} = props;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header variant={headerVariant} title={headerTitle} />
      {children}
    </ScrollView>
  );
};
