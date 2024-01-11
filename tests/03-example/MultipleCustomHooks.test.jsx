import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples';
import { useCounter, useFetch } from '../../src/hooks';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en el componente <MultipleCustomHooks>', () => {
	const mockIncrement = jest.fn();
	useCounter.mockReturnValue({
		counter: 1,
		increment: mockIncrement
	});

	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('debe de mostrar el componente por defecto', () => {
		useFetch.mockReturnValue({
			data: null,
			isLoading: true,
			hasError: null
		});

		render(<MultipleCustomHooks />);

		expect(screen.getByText('Breaking bad')).toBeTruthy();

		const nextButton = screen.getByRole('button', { name: 'Next quote' });
		expect(nextButton.disabled).toBeTruthy();
	});

	test('debe de mostrar el componente despues del useFetch', () => {
		useFetch.mockReturnValue({
			data: [{ author: 'Marco', quote: 'Me pican los cocos' }],
			isLoading: false,
			hasError: null
		});

		render(<MultipleCustomHooks />);

		expect(screen.getByText('Me pican los cocos')).toBeTruthy();
		expect(screen.getByText('Marco')).toBeTruthy();

		const nextButton = screen.getByRole('button', { name: 'Next quote' });
		expect(nextButton.disabled).toBeFalsy();
	});
	test('debe de llamar la funcion de incrementar', () => {
		useFetch.mockReturnValue({
			data: [{ author: 'Marco', quote: 'Me pican los cocos' }],
			isLoading: false,
			hasError: null
		});

		render(<MultipleCustomHooks />);

		const newButton = screen.getByRole('button', { name: 'Next quote' });
		fireEvent.click(newButton);
		expect(mockIncrement).toHaveBeenCalledTimes(1);
	});
});
