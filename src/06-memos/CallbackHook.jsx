import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
	const [counter, setCounter] = useState(10);
	const incrementFather = useCallback((value) => {
		setCounter((v) => v + value);
	}, []);

	return (
		<>
			<h1>Counter : {counter}</h1>
			<hr />
			<ShowIncrement increment={incrementFather} />
		</>
	);
};

// useCallback para memorizar funciones
