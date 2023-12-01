import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useEffect, useState} from 'react';

export type ITasks = {
  id: string;
  title: string;
};

type ITasksContext = {
  tasks: ITasks[];
  addTask(newTask: ITasks): void;
  removeTask(id: string): void;
};

const tasksData = '@MyTasks:Tasks';

export const TasksContext = createContext<ITasksContext>({} as ITasksContext);

export const TasksContextProvider = ({children}: React.PropsWithChildren) => {
  const [tasks, setTasks] = useState<ITasks[]>([] as ITasks[]);

  useEffect(() => {
    async function loadTask() {
      const taksList = await AsyncStorage.getItem(tasksData);

      if (taksList) {
        setTasks(JSON.parse(taksList));
      }
    }
    loadTask();
  }, []);

  async function addTask(newTask: ITasks) {
    try {
      const newTaskList = [...tasks, newTask];
      setTasks(newTaskList);
      await AsyncStorage.setItem(tasksData, JSON.stringify(newTaskList)); //transforma o JSON em string
    } catch (e) {
      throw new Error(e as string);
    }
  }

  const removeTask = async (id: string) => {
    const newTaskList = tasks.filter(task => task.id !== id);
    setTasks(newTaskList);
    await AsyncStorage.setItem(tasksData, JSON.stringify(newTaskList));
  };

  return (
    <TasksContext.Provider value={{tasks, addTask, removeTask}}>
      {children}
    </TasksContext.Provider>
  );
};

export function useTaskList(): ITasksContext {
  const context = React.useContext(TasksContext);
  if (!context) {
    throw new Error('useTaskList deve ser usado em um TasksProvide');
  }

  return context;
}
