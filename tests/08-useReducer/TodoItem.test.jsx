import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('pruebas en <TodoItem>', () => {
	const todo = {
		id: 1,
		description: 'Mear',
		done: false
	};
	const onToggleTodoMock = jest.fn();
	const onDeleteTodoMock = jest.fn();

	beforeEach(() => {
		return jest.clearAllMocks();
	});

	test('debe de mostrar el todo pendiente', () => {
		render(
			<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} />
		);

		const liElement = screen.getByRole('listitem');
		expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

		const spanElement = screen.getByLabelText('span');
		expect(spanElement.className).toBe('align-self-center ');
	});
	test('debe de mostrar el todo completado', () => {
		todo.done = true;
		render(
			<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />
		);
		const spanElement = screen.getByLabelText('span');
		expect(spanElement.className).toContain('text-decoration-line-through');
	});
	test('span debe de llamar al toggleTodo mockeando un click', () => {
		render(
			<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />
		);
		const spanElement = screen.getByLabelText('span');
		fireEvent.click(spanElement);
		expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
	});
	test('el boton debe de llamar al deleteTodo simulando un click', () => {
		render(
			<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />
		);
		const buttonElement = screen.getByRole('button');

		fireEvent.click(buttonElement);

		expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
	});
});
