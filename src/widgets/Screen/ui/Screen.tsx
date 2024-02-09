import {Header, HeaderVariant} from '@widgets/Header';
import {ScrollView} from 'react-native';
import {ReactNode} from 'react';
import {Container} from '@shared/ui/Container';

interface ScreenProps {
  headerVariant?: HeaderVariant;
  headerTitle?: string;
  children: ReactNode;
}

export const Screen = (props: ScreenProps) => {
  const {headerVariant = 'default', children, headerTitle} = props;

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, flex: 1}}>
      <Header variant={headerVariant} title={headerTitle} />
      {children}
    </ScrollView>
  );
};
