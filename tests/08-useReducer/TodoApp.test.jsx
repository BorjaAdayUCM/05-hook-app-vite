import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../src/08-useReducer"
import { useTodo } from "../../src/hooks/useTodo"

jest.mock('../../src/hooks/useTodo');

describe('Pruebas en <TodoApp />', () => {

    useTodo.mockReturnValue({
        todos: [
            {id: 1, description: 'Tarea 1', done: false},
            {id: 2, description: 'Tarea 2', done: true}
        ],
        todosCount: 2,
        pendingTodosCount: 1,
        handleRemoveTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        handleNewTodo: jest.fn()
    })

    test('Debe mostrar el componente correctamente', () => {

        render(<TodoApp/>);

        expect(screen.getByText('Tarea 1')).toBeTruthy();
        expect(screen.getByText('Tarea 2')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
    })

})