import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
	const [formState, setFormState] = useState({
		username: 'strider',
		email: 'marco@google.com'
	});

	const { username, email } = formState;

	const onInputChange = ({ target }) => {
		const { name, value } = target;

		setFormState({
			...formState,
			[name]: value // propiedad computada, es como decirle este atributo del objeto modificalo en este caso el name
		});
	};

	useEffect(() => {
		// console.log('render useEffect');
	}, []); // primer argumento callback, arreglo de dependencias

	useEffect(() => {
		// console.log('the form changed');
	}, [formState]);

	useEffect(() => {
		// console.log('the email changed');
	}, [email]);
	return (
		<>
			<h1>Formulario Simple</h1>
			<hr />

			<input
				type="text"
				placeholder="Username"
				className="form-control mt-2"
				name="username"
				value={username}
				onChange={onInputChange}
			/>
			<input
				type="email"
				placeholder="marco@gmail.com"
				className="form-control mt-2"
				name="email"
				value={email}
				onChange={onInputChange}
			/>
			{username === 'strider2' && <Message />}
		</>
	);
};
