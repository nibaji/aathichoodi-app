import React from "react";
import { Provider } from "react-redux";
import StackedNavigation from "./Navigation/stackedNavigation";
import store from "./Redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <StackedNavigation />
    </Provider>
  );
}
