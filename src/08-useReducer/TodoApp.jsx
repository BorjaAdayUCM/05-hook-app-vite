import { TodoAdd, TodoList } from ".";
import { useTodo } from "../hooks";

export const TodoApp = () => {

    const {todos, todosCount, pendingTodosCount, handleNewTodo, handleRemoveTodo, handleToggleTodo} = useTodo();

    return (
        <>
            <h1>TodoApp: {todosCount}, <small>Pendientes: {pendingTodosCount}</small></h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={todos} 
                        onRemoveTodo={handleRemoveTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                </div>
            

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>
                    <TodoAdd onNewTodo={handleNewTodo}/>
                </div>
            </div>

        </>
    )
}
