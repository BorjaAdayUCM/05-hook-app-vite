import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples"
import { useCounter, useFetch } from "../../src/hooks";

jest.mock('../../src/hooks/useCounter');
jest.mock('../../src/hooks/useFetch');

describe('Pruebas en <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('Debe mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })

        render(<MultipleCustomHooks/>);

        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Rick and Morty Episodes'));

        const nextButton = screen.getByRole('button', {name: 'Next Episode'});
        expect(nextButton.disabled).toBeTruthy();

    })

    test('Debe mostrar el componente por defecto', () => {

        render(<MultipleCustomHooks/>);

        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Rick and Morty Episodes'));

        const nextButton = screen.getByRole('button', {name: 'Next Episode'});
        expect(nextButton.disabled).toBeTruthy();

    })

    test('Debe mostrar un Episode', () => {

        useFetch.mockReturnValue({
            data: {name: 'Episode 1', air_date: '1 de enero'},
            isLoading: false,
            hasError: null
        })

        render(<MultipleCustomHooks/>);

        expect(screen.getByText('1. Episode 1')).toBeTruthy();
        
        const nextButton = screen.getByRole('button', {name: 'Next Episode'});
        expect(nextButton.disabled).toBeFalsy();

    })

    test('Debe llamar la funcion incrementar', () => {

        render(<MultipleCustomHooks/>);
        
        const nextButton = screen.getByRole('button', {name: 'Next Episode'});

        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();

    })

})