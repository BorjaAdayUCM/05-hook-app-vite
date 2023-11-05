import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/userContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('Pruebas en <HomePage />', () => {

    test('Debe mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');
        
    })

    test('Debo llamar a setUser al hacer click en button', () => {

        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{user: null, setUser: setUserMock}}>
                <LoginPage />
            </UserContext.Provider>
        );

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(setUserMock).toHaveBeenCalledWith({
            id: 123,
            name: 'Borja Aday',
            email: 'borja@google.com'
        });
        
    })
})