import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';
import TaskList from '../../components/TaskList';
import {useTaskList} from '../../context/TasksContext';

const Home = () => {
  const [newTesk, setNewTesk] = useState('');

  const {addTask} = useTaskList();

  function handleAddNewTask() {
    const data = {
      id: String(new Date().getTime()),
      title: newTesk ? newTesk : 'Task empty',
    };

    setNewTesk('');
    addTask(data);
  }

  return (
    <SafeAreaView style={style.safeArea}>
      <View style={style.conteiner}>
        <Text style={style.text}> Welcome, Dev</Text>
        <TextInput //Input Text
          style={style.textInput}
          placeholderTextColor="#555"
          placeholder="Nova tarefa"
          onChangeText={setNewTesk}
          value={newTesk}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={style.buttonCustom}
          onPress={handleAddNewTask}>
          <Text style={style.btnText}>Adicionar</Text>
        </TouchableOpacity>

        <Text style={style.titleText}>Minhas tarefas</Text>

        <TaskList />
      </View>
    </SafeAreaView>
  );
};

// Platform serve para fazer alteração apenas em uma plataforma de styles

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121212',
  },
  conteiner: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  titleText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 50,
    textTransform: 'uppercase',
  },
  textInput: {
    backgroundColor: '#29292e',
    color: 'white',
    fontSize: 18,
    padding: 5,
    height: 40,
    marginTop: Platform.OS === 'ios' ? 15 : 10,
    borderRadius: 5,
  },
  buttonCustom: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 15,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
  },
  btnText: {
    textAlign: 'center',
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
