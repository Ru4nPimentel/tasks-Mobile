import {StatusBar} from 'expo-status-bar';
import {useState} from 'react';
import {View} from 'react-native';
import Home from './src/pages/Home';
import {TasksContextProvider} from './src/context/TasksContext';

export default function App() {
  return (
    <TasksContextProvider>
      <Home />
    </TasksContextProvider>
  );
}
