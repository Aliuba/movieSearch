import './App.css';
import React from "react";
import {BaseLayout} from "./layouts";
import {Home} from "./pages";
import {Route, Routes,} from "react-router-dom";
import {useNavigate} from "react-router";
import {MoviePage} from "./pages/MoviePage";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    let navigate = useNavigate();
    const notify = () => toast.success("Wow so easy!");
    return (

        <BaseLayout>
            <button onClick={notify}>Notify!</button>
        <ToastContainer />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/*"
                       element={<div> Path not found <button onClick={() => navigate('/')}>go Home</button></div>}/>
                <Route path={"/movie/:id"} element={<MoviePage/>}/>
            </Routes>

        </BaseLayout>


    );
}

export default App;
