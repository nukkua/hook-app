import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';

const heavyStuff = (iterations = 100) => {
	for (let i = 0; i < iterations; i++) {
		console.log('seguimos en el loop');
	}
	return `${iterations} done`;
};

export const MemoHook = () => {
	const { counter, increment } = useCounter(4000);
	const [hide, setHide] = useState(true);

	const result = useMemo(() => heavyStuff(counter), [counter]);

	return (
		<>
			<h1>
				Counter <small>{counter}</small>
			</h1>
			<h3>{result}</h3>
			<hr />

			<button className="btn btn-primary" onClick={() => increment()}>
				+ 1
			</button>

			<button className="btn btn-outline-primary" onClick={() => setHide((h) => !h)}>
				Show/Hide {JSON.stringify(hide)}
			</button>
		</>
	);
};

// Memorizo, el resultado, siempre es asi, es como hermano esto es pesado y solo quiero que lo trigeree
// el cambio de un estado
