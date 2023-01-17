import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { configureStore } from "@reduxjs/toolkit";//to configure the store using toolkit
import { Provider } from "react-redux";//to make the store accessible to all components 

//importing reducers
import themeReducer from "./features/theme"
import  userReducer from "./features/user"
import counterReducer from "./features/counter"

//configuring the store
const store = configureStore({
  reducer: {
    user:userReducer,
    theme:themeReducer,
    counter:counterReducer
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
