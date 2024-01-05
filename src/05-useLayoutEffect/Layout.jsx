import { useCounter, useFetch } from '../hooks/';
import { LoadingQuote, Quote } from '../03-examples';

export const Layout = () => {
	const { counter, increment } = useCounter(1);
	const { data, isLoading, hasError } = useFetch(
		`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
	);

	const { quote, author } = !!data && data[0];

	// if (isLoading){
	// 	return (
	// 		<h1>Cargando</h1>
	// 	)
	// }

	return (
		<>
			<h1>Breaking bad</h1>
			<hr />
			<h2>{counter}</h2>
			{isLoading ? <LoadingQuote /> : <Quote quote={quote} author={author} />}

			<button className="btn btn-primary" disabled={isLoading} onClick={() => increment(1)}>
				Next quote
			</button>
		</>
	);
};

// es renderizacion, bueno tiene el conveniente de que si se cumple la condicion,
//  solo eso se rendirizara, pero no tengo que poner nada debajo
