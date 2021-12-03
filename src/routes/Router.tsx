import { FC } from "react";
import Home from "components/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "components/pages/Login";
import PrivateRoute from "./PrivateRoute";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute children={<Home />} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
