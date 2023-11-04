import {Route, Routes, Navigate} from 'react-router-dom';
import {HomePage, AboutPage, LoginPage, Navbar} from '.';
import { UserProvider } from './context/userProvider';


export const MainApp = () => {
    return (
        <>
            <UserProvider>
                <Navbar/>
                <hr/>


                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="login" element={<LoginPage />}/>
                    <Route path="about" element={<AboutPage />}/>

                    {/* <Route path="/*" element={<LoginPage/>}/> */}
                    <Route path="/*" element={<Navigate to="about"/>}/>
                </Routes>
            </UserProvider>
        </>
    )
}
