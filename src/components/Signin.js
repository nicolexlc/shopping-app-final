import { Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

export const SigninButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button variant="outline-success" onClick={() => loginWithRedirect()}>Login</Button>;
};


