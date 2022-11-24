import SingerCategories from "../Pages/Home/SingerCategories";
import WaltonCategories from "../Pages/Home/WaltonCategories";
import Login from "../Pages/Login.js/Login";
import Register from "../Pages/Register/Register";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/waltoncategories',
                element: <WaltonCategories></WaltonCategories>
            },
            {
                path:'/singercategories',
                element: <SingerCategories></SingerCategories>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
        ]
    }
]);

export default router;