import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import Login from "../pages/Login";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";

const Router = () => {
  return (
    <Routes>
      <Route element={<Login />} path="login" />
      <Route element={<AuthOutlet fallbackPath="/login" />}>
        {routes.map((e) => (
          <Route key={e.id} element={e.element} path={e.path} />
        ))}
      </Route>
    </Routes>
  );
};

export default Router;
