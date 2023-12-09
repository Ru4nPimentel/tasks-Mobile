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
import Home from '../../src/pages/Home';

describe('Home', () => {
  it('should render the Page', () => {
    const {getByPlaceholderText} = render(<Home />);
    const inputNewText = getByPlaceholderText('Nova tarefa');

    expect(inputNewText).toBeDefined();

    expect(inputNewText.props.placeholder).toBeTruthy();
  });

  it('should check if value was added to the list', async () => {
    const {result} = renderHook(() => useTaskList(), {
      wrapper: TasksContextProvider,
    });

    const data = {id: 'Task01', title: 'Task01'};

    await act(() => result.current.addTask(data));

    expect(result.current.tasks).toBeTruthy();
  });

  it('should press the button to added the name to the list', async () => {
    const {getByPlaceholderText, getByTestId} = render(<Home />, {
      wrapper: TasksContextProvider,
    }); // como a Home utiliza metodos do context ele tbm precisa esta com o provider

    const {result} = renderHook(() => useTaskList(), {
      wrapper: TasksContextProvider,
    }); //para utilizar função dentro do provide

    const inputNewText = getByPlaceholderText('Nova tarefa'); // pega input
    const button = getByTestId('addButton'); // pega botão

    const data = {id: 'Task01', title: 'Task01'}; // obj que vai ser setado

    act(() => fireEvent.changeText(inputNewText, data.title)); //preenchimento do input

    await act(async () => {
      await fireEvent.press(button); // evento de click
    });

    expect(result.current.tasks).toBeTruthy(); // verificando se foi adicionado
  });
});
