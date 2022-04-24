import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { SignInContainer } from '../../components/SignIn';

describe('Signin', () => {
  describe('SignInContainer', () => {
    it('Should call the onSubmit handler with the right arguments', async () => {
      const onSubmit = jest.fn();

      const { getByPlaceholderText, getByTestId } = render(<SignInContainer onSubmit={onSubmit}/>);

      fireEvent.changeText(getByPlaceholderText('Username'), "mike");
      fireEvent.changeText(getByPlaceholderText('Password'), "123456*");
      fireEvent.press(getByTestId('btn-submit'));

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
      });
      expect(onSubmit.mock.calls[0][0]).toEqual({
        username: 'mike', password: '123456*'
      });
    })
  })
});