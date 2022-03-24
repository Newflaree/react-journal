import React from "react";
// Redux
import { Provider } from "react-redux";
import { store } from "./store/store";
// Router
import { AppRouter } from "./routers/AppRouter";

export const JournalApp = () => {
  return (
    <Provider store={ store }>
      <AppRouter />
    </Provider>
  )
}
