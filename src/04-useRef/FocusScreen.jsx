import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = () => {
        inputRef.current.select();
        // document.querySelector('input').select();
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr/>

            <input 
                ref = {inputRef}
                className="form-control"
                type="text"
                placeholder="Nombre"
            />

            <button className="btn btn-primary mt-2" onClick={onClick}>
                Set Focus
            </button>
        </>
    )
}
