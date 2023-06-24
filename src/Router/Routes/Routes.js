import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import CheckOut from "../../Pages/Services/CheckOut/CheckOut";
import Orders from "../../Pages/Orders/Orders/Orders";
import Services from "../../Pages/Home/Services/Services";


export const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      }
      ,
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/services/:id',
        element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
        loader:({params}) => fetch(`https://car-doctor-server-sigma-indol.vercel.app/services/${params.id}`)
      },
      {
        path:'/orders',
        element:<PrivateRoute><Orders></Orders></PrivateRoute>
      },{
        path:'/services',
        element:<Services></Services>
      }
    ]

  }
])