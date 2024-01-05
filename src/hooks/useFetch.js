import { useEffect, useState } from 'react';

export const useFetch = (url) => {
	const [state, setState] = useState({
		data: null,
		isLoading: true,
		hasError: null
	});

	const getFetch = async () => {
		setState({
			...state,
			isLoading: true
		});
		try {
			const resp = await fetch(url);
			if (!resp.ok) throw new Error('Error fetching data');
			const data = await resp.json();

			setState({
				data: data,
				isLoading: false,
				hasError: null
			});
		} catch (e) {
			setState({
				data: null,
				isLoading: false,
				hasError: e || 'something went wrong!'
			});
		}
	};

	useEffect(() => {
		getFetch();
	}, [url]);

	return {
		data: state.data,
		isLoading: state.isLoading,
		hasError: state.hasError
	};
};
