import { todoReducer } from '../../src/08-useReducer/todoReducer';

describe('Pruebas en la funcion reducer', () => {
	const initialState = [
		{
			id: 1,
			description: 'Hacer pis',
			done: false
		}
	];
	test('Estado por defecto', () => {
		const newState = todoReducer(initialState, {});

		expect(newState).toBe(initialState);
	});
	test('Agregar un todo', () => {
		const action = {
			type: '[TODO] Add Todo',
			payload: {
				id: 2,
				description: 'Tomar H2O',
				done: false
			}
		};

		const newState = todoReducer(initialState, action);

		expect(newState).toContain(action.payload);
		expect(newState.length).toBe(2);
		expect(newState).not.toBe(initialState);
	});
	test('Eliminar un todo', () => {
		const action = {
			type: '[TODO] Remove Todo',
			payload: 1
		};
		const newState = todoReducer(initialState, action);

		expect(newState.length).toBe(0);
	});
	test('Toggle todo', () => {
		const action = {
			type: '[TODO] Toggle Todo',
			payload: 1
		};

		const newState = todoReducer(initialState, action);
		expect(newState[0].done).toBeTruthy();

		const newState2 = todoReducer(newState, action);
		expect(newState2[0].done).toBeFalsy();
	});
});
