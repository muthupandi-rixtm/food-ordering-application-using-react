import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import AboutUs from "./components/AboutUs";

import Help from "./components/Help";
import ErrorPage from "./components/ErrorPage";
import RestaurantOverview from "./components/RestaurantOverview";
// import Groceries from "./components/Groceries";

const AppLayout = () => {
  return (
    <div className='main-container'>
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
        path: "/about",
        element: <AboutUs />,
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
