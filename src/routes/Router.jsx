import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import LogIn from "../Pages/LogIn";
import ViewDetails from "../Components/ViewDetails/ViewDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Components/JobApply/JobApply";
import MyApplications from "../Pages/MyApplications";
import AddJob from "../Pages/AddJob";
import MyPostedJob from "../Pages/MyPostedJob";
import ViewApplication from "../Components/ViewApplication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h1 className="text-red-600 text-4xl">Page not Found!!</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:'/details/:id',
        element:<PrivateRoute><ViewDetails/></PrivateRoute>,
        loader:({params})=> fetch(`https://dream-desk-server.vercel.app/jobs/${params.id}`)
      },
      {
        path:'/jobApply/:id',
        element:<PrivateRoute><JobApply/></PrivateRoute>,
      },
      {
        path:'/myApplication',
        element:<PrivateRoute><MyApplications/></PrivateRoute>,
      },
      {
        path:'/myPostedJob',
        element:<PrivateRoute><MyPostedJob/></PrivateRoute>,
      },
      {
        path:'/viewApplication/:job_id',
        element:<PrivateRoute><ViewApplication/></PrivateRoute>,
        loader:({params})=>fetch(`https://dream-desk-server.vercel.app/jobs-applications/jobs/${params.job_id}`)
      },
      {
        path:'/addJob',
        element:<AddJob/>
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
    ],
  },
]);

export default router;
