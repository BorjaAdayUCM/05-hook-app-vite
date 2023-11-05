import {act, renderHook} from "@testing-library/react"
import {useCounter} from "../../src/hooks/useCounter"

describe('Pruebas en useCounter', () => {

    test('Deve devolver los valores por defecto', () => {
        const {result} = renderHook(() => useCounter());
        const {counter, increment, decrement, reset} = result.current;

        expect(counter).toBe(0);
        expect(increment).toEqual(expect.any(Function));
        expect(decrement).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));

    })

    test('Debe generar el counter con el valor 100', () => {
        const {result} = renderHook(() => useCounter(100));
        expect(result.current.counter).toBe(100);
    })

    test('Debe incrementar el contador', () => {
        const {result} = renderHook(() => useCounter(98));
        const {increment} = result.current;

        act(() => {
            increment();
            increment();
        })

        expect(result.current.counter).toBe(100);
    })

    test('Debe decrementar el contador', () => {
        const {result} = renderHook(() => useCounter(102));
        const {decrement} = result.current;

        act(() => {
            decrement();
            decrement();
        })

        expect(result.current.counter).toBe(100);
    })

    test('Debe resetear el contador', () => {
        const {result} = renderHook(() => useCounter(100));
        const {decrement, reset} = result.current;

        act(() => {
            decrement();
            decrement();
            reset();
        })

        expect(result.current.counter).toBe(100);
    })

})