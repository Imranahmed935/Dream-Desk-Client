import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<h1 className="text-red-600 text-4xl">Page not Found!!</h1>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/register',
                element:<Register/>
            }
        ]
    }
])

export default router;