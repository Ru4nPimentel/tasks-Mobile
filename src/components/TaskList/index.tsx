import React from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {useTaskList} from '../../context/TasksContext';

const TaskList = () => {
  const {tasks, removeTask} = useTaskList();

  const handleRemoveTask = (id: string) => {
    Alert.alert('Tem certeza ?', 'Deseja mesmo excluir a tarefa?', [
      {
        text: 'Cancelar',
        onPress: () => {},
      },
      {
        text: 'Excluir',
        onPress: () => {
          removeTask(id);
        },
      },
    ]);
  };

  return (
    <FlatList
      style={style.divTesk}
      data={tasks}
      keyExtractor={tesk => tesk.id}
      renderItem={({item}) => (
        <TouchableOpacity
          activeOpacity={0.7}
          style={style.buttonTesk}
          onPress={() => handleRemoveTask(item.id)}>
          <Text style={style.listTesk}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const style = StyleSheet.create({
  divTesk: {
    display: 'flex',
    flexDirection: 'column',
  },
  listTesk: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTesk: {
    backgroundColor: '#29292e',
    padding: 10,
    marginTop: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
});

export default TaskList;
