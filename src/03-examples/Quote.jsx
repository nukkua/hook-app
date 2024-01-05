import Proptypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';
export const Quote = ({ quote, author }) => {
	const pRef = useRef();
	const [boxSize, setBoxSize] = useState({
		width: 0,
		height: 0
	});
	useLayoutEffect(() => {
		const { width, height } = pRef.current.getBoundingClientRect();
		setBoxSize({ height, width });
	}, [quote]);

	return (
		<>
			<blockquote className="blockquote text-end" style={{ display: 'flex' }}>
				<p ref={pRef} className="mb-7">
					{quote}
				</p>
				<footer className="blockquote-footer">{author}</footer>
			</blockquote>

			<code>{JSON.stringify(boxSize)}</code>
		</>
	);
};

Quote.propTypes = {
	quote: Proptypes.string.isRequired,
	author: Proptypes.string.isRequired
};

// Para el useLayoutEffect, la firma es igual que el useEffect(), tambien tiene su funcion de limpieza,
// para observadores o listeners.

// Puedo poner el setear el state dentro de effect, por que es controlable, en cambio si hago un set random
// bueno pues bucle infinito duke
