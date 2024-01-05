import React from 'react';

export const ShowIncrement = React.memo(({ increment }) => {
	console.log('im rendering again');
	return (
		<>
			<button className="btn btn-primary" onClick={() => increment(5)}>
				Increment
			</button>
		</>
	);
});
