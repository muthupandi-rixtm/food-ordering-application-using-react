import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

import Offers from "./components/Offers";
import Help from "./components/Help";
import AboutUs from "./components/AboutUs";
import ErrorPage from "./components/ErrorPage";
import RestaurantOverview from "./components/RestaurantOverview";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/about",
        element: <AboutUs />,
      },

      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/details/:id",
        element: <RestaurantOverview />,
      },
    ],
  },
]);

const rootEle = document.getElementById("root");
const root = ReactDOM.createRoot(rootEle);
root.render(<RouterProvider router={appRouter}></RouterProvider>);
