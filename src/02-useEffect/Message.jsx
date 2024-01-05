import { useEffect } from 'react';

export const Message = () => {
	useEffect(() => {
		const handleMouseMove = (e) => {
			console.log(e);
		};
		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return (
		<>
			<h1>Usuario ya existe</h1>
		</>
	);
};
