import React from "react";
// Routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
// Components
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";

export const AuthRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact
            path='/auth/login'
            component={ LoginScreen }
          />
          <Route
            exact
            path='/auth/register'
            component={ RegisterScreen }
          />
          <Redirect to='/auth/login' />
        </Switch>
      </div>
    </Router>
  )
}
