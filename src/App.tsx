import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Verify from "./pages/Auth/Verify";
import Home from "./pages/Home";
function App() {
    //TODO: Create a global state for cheking if user is verified or not
    //TODO: -> Might Use localStorage with userLocalStorage Hook - Write a Hook
    //TODO: -> try creating context
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/auth/register" element={<Register />} />
                    <Route path="/auth/login" element={<Login />} />
                    <Route path="/auth/verify" element={<Verify />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
