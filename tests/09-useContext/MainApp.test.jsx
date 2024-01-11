import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MainApp } from '../../src/09-useContext/MainApp';

describe('Pruebas en el componente <MainApp>', () => {
	test('debe de mostrar el HomePage', () => {
		render(
			<MemoryRouter>
				<MainApp />
			</MemoryRouter>
		);
		expect(screen.getByText('Home Page'));
	});
	test('debe de mostrar el login page ', () => {
		render(
			<MemoryRouter initialEntries={['/login']}>
				<MainApp />
			</MemoryRouter>
		);
		expect(screen.getByText('Login Page'));
	});
	test('debe de mostar el about page', () => {
		render(
			<MemoryRouter initialEntries={['/about']}>
				<MainApp />
			</MemoryRouter>
		);
		expect(screen.getByText('About Page'));
	});
	test('debe de mostar el default page', () => {
		render(
			<MemoryRouter initialEntries={['/login', '/*']}>
				<MainApp />
			</MemoryRouter>
		);
		expect(screen.getByText('About Page'));
	});
});
