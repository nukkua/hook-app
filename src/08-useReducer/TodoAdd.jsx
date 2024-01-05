import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ onAddNewTodo }) => {
	const { description, handleInputChange, onResetForm } = useForm({
		description: ''
	});
	const handleSubmit = (event) => {
		event.preventDefault();
		if (description.length <= 1) return;
		const newTodo = {
			id: new Date().getTime(),
			done: false,
			description
		};
		onAddNewTodo(newTodo);
		onResetForm();
	};
	return (
		<form action="" onSubmit={handleSubmit}>
			<input
				value={description}
				onChange={handleInputChange}
				type="text"
				placeholder="What to do?"
				className="form-control"
				name="description"
			/>
			<button type="submit" className="btn btn-outline-primary mt-1">
				Agregar
			</button>
		</form>
	);
};
