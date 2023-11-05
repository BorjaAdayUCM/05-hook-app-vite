import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage"
import { UserContext } from "../../src/09-useContext/context/userContext";

describe('Pruebas en <HomePage />', () => {

    const user = {
        id: 1,
        name: 'Borja Aday'
    }

    test('Debe mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{user: null}}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');
    })

    test('Debe mostrar el componente scon el usuario', () => {
        render(
            <UserContext.Provider value={{user}}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(`${user.id}`);
    })

})