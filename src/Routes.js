import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import Logout from "../Modals/Logout/Logout";


const Slider = lazy(() => {
  return import("./Slider");
});

const Header = lazy(() => {
    return import("./Header");
  });


const unauthorizedRoutes = [
  {
    path: "/Slider",
    element: <Slider />,
  },
  {
    path: "/Header",
    element: <Header />,
  },
];

const Routes = () => {
    return unauthorizedRoutes;
  };
  
  export default Routes;