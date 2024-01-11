import { renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';
import { act } from 'react-dom/test-utils';

describe('pruebas on useForm', () => {
	const initialForm = {
		email: 'marco@google.com',
		name: 'Marco'
	};
	test('probando valor por defecto', () => {
		const { result } = renderHook(() => useForm(initialForm));

		expect(result.current).toEqual({
			name: initialForm.name,
			email: initialForm.email,
			formState: initialForm,
			handleInputChange: expect.any(Function),
			onResetForm: expect.any(Function)
		});
	});
	test('debe de cambiar el nombre en el formulario', () => {
		const { result } = renderHook(() => useForm(initialForm));
		const { handleInputChange } = result.current;

		act(() => {
			handleInputChange({ target: { name: 'name', value: 'Marco' } });
		});

		expect(result.current.name).toBe(initialForm.name);
		expect(result.current.formState.name).toBe(initialForm.name);
	});
	test('debe de resetear el formulario', () => {
		const { result } = renderHook(() => useForm());

		const { onResetForm, handleInputChange } = result.current;

		act(() => {
			handleInputChange({ target: { name: 'name', value: 'Marco' } });
			onResetForm();
		});

		expect(result.current.formState).toEqual({});
	});
});
