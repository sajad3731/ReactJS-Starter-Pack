import { useAppSelector } from "app/hooks";
import Template from "components/templates/Template";
import { FC } from "react";
import { Navigate } from "react-router-dom";

type PrivateRoutePropsType = {
  children: JSX.Element;
};

const PrivateRoute: FC<PrivateRoutePropsType> = ({ children }) => {
  const { token } = useAppSelector((state) => state);

  return token ? <Template children={children} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
