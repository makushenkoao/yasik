import React, {useState} from 'react';
import {Container} from '@shared/ui/Container';
import {View} from 'react-native';
import {Input} from '@shared/ui/Input';
import RNPickerSelect from 'react-native-picker-select';
import {Button} from '@shared/ui/Button';
import {Colors} from '@shared/const/colors.ts';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList} from '@shared/types/router.ts';
import {useToast} from 'react-native-toast-notifications';

interface CreateTodoScreenProps {
  navigation: StackNavigationProp<RootParamList, 'CreateTodo'>;
}

// TODO:
// filtering by name, date, priority
// edit todos
// drag todos

export const CreateTodoScreen = (props: CreateTodoScreenProps) => {
  const {navigation} = props;

  const [priority, setPriority] = useState('no_priority');
  const [date, setDate] = useState<Date>(new Date());
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const toast = useToast();

  const onChangePriority = (value: string) => {
    setPriority(value === null ? 'no_priority' : value);
  };

  const onChangeDate = (event: DateTimePickerEvent, value?: Date) => {
    if (value) {
      const currentDate = new Date();
      if (value > currentDate) {
        setDate(value);
      } else {
        setDate(currentDate);
        toast.show('Select an existing date 🕒', {
          placement: 'top',
          type: 'danger',
        });
      }
    }
  };

  const onChangeTitle = (v: string) => {
    setTitle(v);
  };
  const onChangeDescription = (v: string) => {
    setDescription(v);
  };

  const onCreateTodo = () => {
    // request: create user todo
    const data = {
      id: Date.now(),
      priority,
      date,
      title,
      description,
      isCompleted: false,
    };

    console.log(data);

    navigation.navigate('Todo');
  };

  return (
    <Container>
      <View style={{gap: 10}}>
        <Input
          placeholder="Enter Your Task Title"
          variant="outlined"
          value={title}
          onChangeText={onChangeTitle}
        />
        <Input
          placeholder="Enter Your Task Description"
          variant="outlined"
          value={description}
          onChangeText={onChangeDescription}
        />
        <RNPickerSelect
          onValueChange={onChangePriority}
          items={[
            {label: 'No Priority', value: 'no_priority'},
            {label: 'Low Priority', value: 'low_priority'},
            {label: 'Priority', value: 'priority'},
            {label: 'Important', value: 'important'},
          ]}
          value={priority}
          doneText="Done"
          placeholder={{
            value: null,
            label: 'Select a Priority...',
          }}
          darkTheme
          style={{
            inputIOS: {
              color: Colors.TEXT,
              borderWidth: 1,
              borderColor: Colors.ACCENT,
              paddingHorizontal: 24,
              paddingVertical: 14,
              borderRadius: 12,
            },
            placeholder: {
              color: Colors.ACCENT,
            },
          }}
        />
        <DateTimePicker
          mode="datetime"
          onChange={onChangeDate}
          value={date}
          themeVariant="dark"
          accentColor={Colors.ACCENT}
          textColor={Colors.TEXT}
        />
      </View>
      <Button
        style={{marginTop: 20}}
        content="Create Task"
        onPress={onCreateTodo}
      />
    </Container>
  );
};
