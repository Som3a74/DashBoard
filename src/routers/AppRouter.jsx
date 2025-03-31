import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './../layout/MainLayout/MainLayout';
import Home from './../page/Home';
import Login from "../page/Auth/Login";
import Register from "../page/Auth/Register";
import ProtectedRoute from './../layout/ProtectedRoute';
import DashBoard from "../page/DashBoard/DashBoard";
import TableProdect from "../page/TableProdect/TableProdect";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/dashboard", element: <ProtectedRoute> <DashBoard /></ProtectedRoute> },
      { path: "/tableprodect", element: <ProtectedRoute> <TableProdect /></ProtectedRoute> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;