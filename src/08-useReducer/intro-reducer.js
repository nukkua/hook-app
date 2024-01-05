const initialState = [
	{
		id: 1,
		description: 'Leer Clean Code',
		done: false
	}
];
const stateReducer = (state = initialState, action = {}) => {
	if (action.type === '[TODO] add todo') {
		return [...state, action.payload];
	}

	return state;
};

let todo = stateReducer();
console.log(todo);

const newTodo = {
	id: 2,
	description: 'Responder a camila',
	done: false
};

const addTodoAction = {
	type: '[TODO] add todo',
	payload: newTodo
};

todo = stateReducer(todo, addTodoAction);
console.log(todo);
