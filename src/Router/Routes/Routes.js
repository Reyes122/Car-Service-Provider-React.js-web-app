import Main from "../../layout/Main/Main";
import Checkout from "../../layout/pages/Checkout/Checkout";
import Home from "../../layout/pages/Home/Home";
import Login from "../../layout/pages/Login/Login";
import Orders from "../../layout/pages/Orders/Orders";
import Signup from "../../layout/pages/Signup/Signup";

const { createBrowserRouter } = require("react-router-dom");

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
                element: <Signup></Signup>
              },
              {
                path: '/checkout/:id',
                element: <Checkout></Checkout>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
              },
              {
                path: '/orders',
                element : <Orders></Orders>
              }
            ]
          }
]);

export default router;