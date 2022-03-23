import React from "react";
// Routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
// Auth Components
import { AuthRouter } from "./AuthRouter";
// Components
import { JournalScreen } from "../components/journal/JournalScreen";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route
            path='/auth'
            component={ AuthRouter }
          />
          <Route
            exact
            path='/'
            component={ JournalScreen }
          />
          <Redirect to='/auth/login' />
        </Switch>
      </div>
    </Router>
  )
}
