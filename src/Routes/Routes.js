import PrivateRoute from "../auth/PrivateRoute";
import AddProducts from "../Dashboard/AddProducts";
import Allbuyers from "../Dashboard/Allbuyers";
import Allsellers from "../Dashboard/Allsellers";
import Dashboard from "../Dashboard/Dashboard";
import Myorders from "../Dashboard/Myorders";
import MyProducts from "../Dashboard/MyProducts";
import DashboardLayout from "../Layout/DashboardLayout";
import SingerCategories from "../Pages/Home/SingerCategories";
import WaltonCategories from "../Pages/Home/WaltonCategories";
import Login from "../Pages/Login.js/Login";
import Register from "../Pages/Register/Register";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home/Home");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/waltoncategories",
        element: <WaltonCategories></WaltonCategories>,
      },
      {
        path: "/singercategories",
        element: <SingerCategories></SingerCategories>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/addproducts",
        element: <AddProducts></AddProducts>
      },
      {
        path: "/dashboard/myproducts",
        element: <MyProducts></MyProducts>
      },
      {
        path: "/dashboard/allsellers",
        element: <Allsellers></Allsellers> ,
      },
      {
        path: "/dashboard/allbuyers",
        element: <Allbuyers></Allbuyers>,
      },
      {
        path: "/dashboard/myorders",
        element: <Myorders></Myorders>
      },
    ],
  },
]);

export default router;
