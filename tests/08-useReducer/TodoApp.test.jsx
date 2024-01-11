import { render, screen } from '@testing-library/react';
import { useTodo } from '../../src/hooks/useTodo';
import { TodoApp } from '../../src/08-useReducer/TodoApp';

jest.mock('../../src/hooks/useTodo');

describe('Pruebas en el componente <TodoApp>', () => {
	useTodo.mockReturnValue({
		todos: [
			{ id: 1, description: 'Hacer Popo', done: false },
			{ id: 2, description: 'Hacer Pis', done: true }
		],
		todosCount: 2,
		pedingTodosCount: 1,
		handleDeleteTodo: jest.fn(),
		handleToggleTodo: jest.fn(),
		handleNewTodo: jest.fn()
	});

	test('debe de hacer match con el snapshot', () => {
		const { container } = render(<TodoApp />);
		expect(container).toMatchSnapshot();
	});

	test('debe de mostrar el componente correctamente', () => {
		render(<TodoApp />);
		expect(screen.getByText('Hacer Popo')).toBeTruthy();
		expect(screen.getByText('Hacer Pis')).toBeTruthy();
		expect(screen.getByRole('textbox')).toBeTruthy();
	});
});
