import PrivateRoute from "../auth/PrivateRoute";
import AddProducts from "../Dashboard/AddProducts";
import Allbuyers from "../Dashboard/Allbuyers";
import Allsellers from "../Dashboard/Allsellers";
import Dashboard from "../Dashboard/Dashboard";
import Myorders from "../Dashboard/Myorders";
import MyProducts from "../Dashboard/MyProducts";
import AdminRoutes from "../Layout/AdminRoutes";
import DashboardLayout from "../Layout/DashboardLayout";
import AllUsers from "../Pages/Bookings/AllUsers";
import MarcelCategories from "../Pages/Home/MarcelCategories";
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
        path: "/marcelcategories",
        element: <MarcelCategories></MarcelCategories>,
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
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/dashboard/myproducts",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "/dashboard/allsellers",
        loader: () => fetch("http://localhost:5000/usersquery?role=seller"),
        element: <Allsellers></Allsellers>,
      },
      {
        path: "/dashboard/allbuyers",
        loader: () => fetch("http://localhost:5000/usersquery?role=Buyer"),
        element: (
       
            <Allbuyers></Allbuyers>
         
        ),
      },
      {
        path: "/dashboard/myorders",
        element: <Myorders></Myorders>,
      },
      {
        path: "/dashboard/allusers",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);

export default router;
