import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en <TodoItem />', () => {

    const todo = {
        id: 1,
        description: 'Tarea 1',
        done: false
    }

    const onRemoveTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('Debe mostrar el todo pendiente de completar', () => {

        render(<TodoItem todo={todo} onRemoveTodo={onRemoveTodoMock} onToggleTodo={onToggleTodoMock}/>);
        
        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center');
        expect(spanElement.className).not.toContain('text-decoration-line-through');
    })

    test('Debe mostrar el todo completado', () => {

        todo.done = true;

        render(<TodoItem todo={todo} onRemoveTodo={onRemoveTodoMock} onToggleTodo={onToggleTodoMock}/>);
        
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');
    })

    test('Span debe llamar a onToggleTodo cuando se hace click', () => {

        render(<TodoItem todo={todo} onRemoveTodo={onRemoveTodoMock} onToggleTodo={onToggleTodoMock}/>);
        
        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalled();
    })

    test('Button debe llamar a onRemoveTodo cuando se hace click', () => {

        render(<TodoItem todo={todo} onRemoveTodo={onRemoveTodoMock} onToggleTodo={onToggleTodoMock}/>);
        
        const deleteButton = screen.getByRole('button');
        fireEvent.click(deleteButton);

        expect(onRemoveTodoMock).toHaveBeenCalledWith(todo.id);
    })

})