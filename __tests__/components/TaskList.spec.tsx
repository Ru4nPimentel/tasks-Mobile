import {
  render,
  renderHook,
  act,
  fireEvent,
} from '@testing-library/react-native';
import {
  useTaskList,
  TasksContextProvider,
} from '../../src/context/TasksContext';
import TaskList from '../../src/components/TaskList';

describe('TaskList Component', () => {
  it('Should remove item from the list', async () => {
    render(<TaskList />, {
      wrapper: TasksContextProvider,
    });

    const {result} = renderHook(useTaskList, {
      wrapper: TasksContextProvider,
    });

    const data = {id: 'Task01', title: 'Task01'};

    await act(() => result.current.addTask(data));

    expect(result.current.tasks[0].title).toEqual(data.title);

    await act(() => result.current.removeTask('Task01'));

    expect(result.current.tasks.length).toEqual(0);
  });
});
