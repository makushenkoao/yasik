import React, {useEffect, useRef, useState} from 'react';
import {Container} from '@shared/ui/Container';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Emoji} from '@shared/ui/Emoji';
import {Colors} from '@shared/const/colors.ts';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList} from '@shared/types/router.ts';
import {formatDateTime} from '@shared/libs/utils/formatDateTime/formatDateTime.ts';
import {Swipeable} from 'react-native-gesture-handler';
import {Priority, Todo, TODOS_MOCK} from '@entities/Todo';
import styles from './styles.ts';

interface TodoScreenProps {
  navigation: StackNavigationProp<RootParamList, 'Todo'>;
}

export const TodoScreen = (props: TodoScreenProps) => {
  const {navigation} = props;
  const [todos, setTodos] = useState<Todo[]>(TODOS_MOCK);
  const swipeables = useRef<Swipeable[]>([]);

  const emojiText = todos.length
    ? 'Complete your tasks already! 📝'
    : 'Create your first task! 📝';

  const close = () => {
    console.log('COMPLETE');
    swipeables.current.forEach(swipeable => swipeable.close());
  };

  const onChangeCompleted = (id: string) => {
    close();

    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return {...todo, isCompleted: !todo.isCompleted};
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const getPriorityColor = (p: Priority) => {
    switch (p) {
      case 'important':
        return Colors.IMPORTANT;
      case 'priority':
        return Colors.PRIORITY;
      case 'low_priority':
        return Colors.LOW_PRIORITY;
      case 'no_priority':
        return Colors.NO_PRIORITY;
    }
  };

  const onDeleteTodo = (id: string) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const onNavigateToEdit = (id: string) => {
    navigation.navigate('CreateTodo');
  };

  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Container style={styles.container}>
          <Emoji text={emojiText} />
          <View style={{marginVertical: 20, gap: 10}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: Colors.TEXT}}>Your Checklist</Text>
              <TouchableOpacity activeOpacity={0.7}>
                <Text style={{color: Colors.TEXT}}>Edit</Text>
              </TouchableOpacity>
            </View>
            {todos.map((todo, index) => (
              <Swipeable
                key={todo.id}
                ref={swipeable => {
                  if (swipeable) {
                    swipeables.current[index] = swipeable;
                  }
                }}
                renderRightActions={() => (
                  <View style={{flexDirection: 'row', borderRadius: 12}}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: Colors.SECONDARY,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 100,
                        borderRadius: 12,
                      }}
                      onPress={() => onNavigateToEdit(todo.id)}>
                      <Text style={{color: Colors.TEXT}}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        backgroundColor: Colors.ERROR,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 100,
                        borderRadius: 12,
                      }}
                      onPress={() => onDeleteTodo(todo.id)}>
                      <Text style={{color: Colors.TEXT}}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                )}
                renderLeftActions={() => (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={{
                      backgroundColor: Colors.SECONDARY,
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: 100,
                      borderRadius: 12,
                    }}
                    onPress={() => onChangeCompleted(todo.id)}>
                    <Text style={{color: Colors.TEXT}}>
                      {todo.isCompleted ? 'Incomplete' : 'Complete'}
                    </Text>
                  </TouchableOpacity>
                )}>
                <View
                  style={{
                    backgroundColor: todo.isCompleted
                      ? Colors.COMPLETED
                      : Colors.ACCENT,
                    padding: 10,
                    borderRadius: 12,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    position: 'relative',
                  }}>
                  <View>
                    <Text style={{color: Colors.TEXT}}>{todo.title}</Text>
                    <Text style={{fontSize: 12, color: Colors.SECONDARY}}>
                      {todo.description}
                    </Text>
                  </View>
                  <View style={{justifyContent: 'space-between'}}>
                    <View />
                    <View>
                      <Text style={{fontSize: 12, color: Colors.SECONDARY}}>
                        {formatDateTime(todo.date)}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 100,
                      backgroundColor: getPriorityColor(todo.priority),
                      position: 'absolute',
                      right: 10,
                      top: 10,
                    }}
                  />
                </View>
              </Swipeable>
            ))}
          </View>
        </Container>
      </ScrollView>
      <TouchableOpacity
        style={styles.plusIconContainer}
        activeOpacity={0.7}
        onPress={() => navigation.navigate('CreateTodo')}>
        <Image
          source={require('@shared/assets/images/plus.png')}
          style={styles.plusIcon}
        />
      </TouchableOpacity>
    </View>
  );
};
