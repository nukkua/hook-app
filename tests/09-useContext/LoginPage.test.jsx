import { fireEvent, render, screen } from '@testing-library/react';
import { LoginPage } from '../../src/09-useContext/LoginPage';
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('Pruebas en <LoginPage>', () => {
	test('debe de mostar el componente sin el usuario', () => {
		render(
			<UserContext.Provider value={{ user: null }}>
				<LoginPage />
			</UserContext.Provider>
		);
		const preTag = screen.getByLabelText('pre');
		expect(preTag.innerHTML).toBe('null');
	});
	test('debe de llamar el setUser cuando hago click', () => {
		const setUserMock = jest.fn();
		render(
			<UserContext.Provider value={{ user: null, setUser: setUserMock }}>
				<LoginPage />
			</UserContext.Provider>
		);
		const buttonTag = screen.getByRole('button');
		fireEvent.click(buttonTag);

		expect(setUserMock).toHaveBeenCalledWith({ email: 'marco@google.com', id: 123, name: 'Marco' });
	});
});
