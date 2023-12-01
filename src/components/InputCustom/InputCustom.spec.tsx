import {render} from '@testing-library/react-native';
import {InputCustom} from '.';

describe('teste', () => {
  it('should to render', () => {
    const {getByText, debug} = render(<InputCustom text="ronaldo" />);

    expect(getByText('ronaldo')).toBeTruthy();
  });
});
