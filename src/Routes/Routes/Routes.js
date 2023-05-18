import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import SignUp from "../../Pages/SignUp/SignUp";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
           {
            path: '/',
            element: <Home></Home>
           },
           {
            path: '/login',
            element: <Login></Login>
           },
           {
            path: '/signup',
            element: <SignUp></SignUp>
           },
           {
            path: '/appointment',
            element: <PrivateRoute><Appointment></Appointment></PrivateRoute>
           },
           {
            path: '/about',
            element: <About></About>
           },
           {
            path: '/contact',
            element: <Contact></Contact>
           },
        ]
    },
   
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard', 
                element: <MyAppointment></MyAppointment> 
            },
           
            {
                path: '/dashboard/allusers', 
                element: <AdminRoutes><AllUsers
                ></AllUsers></AdminRoutes>
            },
        ]
    }
    
]);

export default router;
