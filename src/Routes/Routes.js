
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
import Payment from "../Pages/Bookings/Payment";
import Advertise from "../Pages/Home/Advertise";
import MarcelCategories from "../Pages/Home/MarcelCategories";
import SingerCategories from "../Pages/Home/SingerCategories";
import WaltonCategories from "../Pages/Home/WaltonCategories";
import Login from "../Pages/Login.js/Login";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/shared/Blog";
import BuyerRoutes from "../Pages/shared/BuyerRoutes";
import DsplayError from "../Pages/shared/DsplayError";
import Errorpage from "../Pages/shared/Errorpage";
import SellerRoutes from "../Pages/shared/SellerRoutes";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home/Home");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/advertise",
        element: <Advertise></Advertise>,
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
    errorElement: <DsplayError></DsplayError>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/addproducts",
        element: (
          <SellerRoutes>
            {" "}
            <AddProducts></AddProducts>
          </SellerRoutes>
        ),
      },
      {
        path: "/dashboard/myproducts",
        element: (
          <SellerRoutes>
            <MyProducts></MyProducts>
          </SellerRoutes>
        ),
      },
      {
        path: "/dashboard/allsellers",
        loader: () => fetch("https://linkers-server.vercel.app/usersquery?role=seller"),
        element: (
          <AdminRoutes>
            <Allsellers></Allsellers>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/allbuyers",
        loader: () => fetch("https://linkers-server.vercel.app/usersquery?role=Buyer"),
        element: (
          <AdminRoutes>
            <Allbuyers></Allbuyers>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/myorders",
        element: (
          <BuyerRoutes>
            {" "}
            <Myorders></Myorders>
          </BuyerRoutes>
        ),
      },
      {
        path: "/dashboard/allusers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`https://linkers-server.vercel.app/myOrder/${params.id}`),
      },
    ],
  },
]);

export default router;
