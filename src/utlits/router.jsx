import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import AllTreatments from "../components/AllTreatments/AllTreatments";
import MyAppoinments from "../components/MyAppoinments/MyAppoinments";
import Profile from "../components/Profile/Profile";
import Login from "../components/Login/Login";
import Details from "../components/Details/Details";
import Register from "../components/Register/Register";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const servicesRes = await fetch("/service.json");
          const servicesData = await servicesRes.json();

          const feedBackRes = await fetch("/happyclients.json");
          const feedBackData = await feedBackRes.json();

          return { servicesData, feedBackData };
        },
      },
      {
        path: "/allTreatments",
        element: <AllTreatments></AllTreatments>,
        loader: () => fetch("/service.json"),
      },
      {
        path: "/myAppoinments",
        element: <MyAppoinments></MyAppoinments>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch("/service.json");
          const data = await res.json();
          const singleData = data.find((d) => d.id == params.id);
          return singleData;
        },
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
    path: "*",
    element: <h2>error</h2>,
  },
]);

export default router;
