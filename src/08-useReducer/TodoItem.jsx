export const TodoItem = ({ todo, onDeleteTodo }) => {
	return (
		<li className="list-group-item d-flex justify-content-between">
			<span className="align-self-center">{todo.description}</span>
			<button onClick={() => onDeleteTodo(todo.id)} className="btn btn-danger">
				Borrar
			</button>
		</li>
	);
};
