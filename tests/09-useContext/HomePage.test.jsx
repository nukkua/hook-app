import { render, screen } from '@testing-library/react';
import { HomePage } from '../../src/09-useContext/HomePage';
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('Pruebas en <HomePage> ', () => {
	const user = {
		id: 1,
		name: 'Marco'
	};
	test('debe de mostrar el componente sin el usario', () => {
		render(
			<UserContext.Provider value={{ user: null }}>
				<HomePage />
			</UserContext.Provider>
		);

		const preTag = screen.getByLabelText('pre');

		expect(preTag.innerHTML).toBe('null');
	});
	test('debe de mostrar el respectivo usuario', () => {
		render(
			<UserContext.Provider value={{ user: user }}>
				<HomePage />
			</UserContext.Provider>
		);
		const preTag = screen.getByLabelText('pre');

		expect(preTag.innerHTML).toContain(user.name);
		expect(preTag.innerHTML).toContain(user.id + '');
	});
});
