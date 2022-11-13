import { Navigate } from "react-router-dom";

const Logout = (props) => {
  const { setAuthHook } = props;
  return <Navigate to="/login">{setAuthHook(false)}</Navigate>;
};
export default Logout;
