import { useForm } from "../hooks/useForm";

export const TodoAdd = ({onNewTodo}) => {

    const {onInputChange, onResetForm, description} = useForm({
        description: ''
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        }

        onNewTodo(newTodo);
        onResetForm();
    }

    return (
        <form onSubmit={onFormSubmit} className="d-grid gap-2">
            <input 
                type="text"
                placeholder="¿Qué hay que hacer?"
                className="form-contorl"
                name="description"
                value={description}
                onChange={onInputChange}
            />

            <button 
                type="submit"
                className="btn btn-outline-primary mt-2"
            >Agregar</button>
        </form>
    )
}
