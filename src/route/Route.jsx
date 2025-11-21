// Website Pages
import Web from "../layouts/Web.jsx";
import Landing from "../pages/Landing.jsx";
import About from "../pages/Aboutus.jsx";
import Rooms from "../pages/Rooms.jsx";

// Admin Pages
import AdminLayout from "../layouts/AdminLayout.jsx";
import Dashboard from "../pages/admin/Dashboard.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const webRoutes = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/rooms",
    element: <Rooms />,
  },
];

const adminRoutes = [
    {
        path : "admin",
        element : <AdminLayout/>,
        children : [
            {
                path: "dashboard",
                element: <Dashboard />,
            },
        ]
    }
]

export default function Routing() {
  return (
    <>
      <BrowserRouter>
        <Routes>


          {/* Website Routes */}
          <Route element={<Web />}>
            {webRoutes.map((r, i) => (
              <Route key={i} path={r.path} element={r.element}></Route>
            ))}
          </Route>

            {/* Admin Routes */}
            {adminRoutes.map((r, i) => (
              <Route key={i} path={r.path} element={r.element}>
                {
                    r.children.map((child,idx)=>(
                        <Route key={idx} path={child.path} element={child.element}></Route>
                    ))
                }
              </Route>
            ))} 
            

        </Routes>
      </BrowserRouter>
    </>
  );
}
