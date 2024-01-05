import { useRef } from 'react';

export const FocusScreen = () => {
	const inputRef = useRef();
	const onClick = () => {
		inputRef.current.select();
		// document.querySelect('input').select();
	};

	return (
		<>
			<h1>Focus Screen</h1>
			<hr />

			<input type="text" placeholder="Ingrese su nombre" className="form-control" ref={inputRef} />
			<button onClick={onClick} className="btn btn-primary mt-2">
				Focus
			</button>
		</>
	);
};
// Referencias para elementos del dom, para poder modificarlos, sin necesidad se usar vanilla JS
// O para otra cosa, pero la cosa es que mantiene la referencia
