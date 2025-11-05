// Website Pages
import Web from '../layouts/Web.jsx';
import Landing from '../pages/Landing.jsx'
import About from '../pages/Aboutus.jsx'
import Rooms from '../pages/Rooms.jsx'


import { BrowserRouter, Routes, Route } from 'react-router-dom'


const webRoute = [
    {
        path : '/',
        element : <Landing/>
    },
    {
        path : '/about',
        element : <About/>
    },
    {
        path : '/rooms',
        element : <Rooms/>
    },
]


export default function Routing(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Web/>}>
                    {
                        webRoute.map((r,i)=>(
                            <Route key={i} path={r.path} element={r.element} ></Route>
                        ))
                    }
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}






