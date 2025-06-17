import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import { Provider } from "react-redux"; //Make redux store available to the app
// import { store } from "./redux/store.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Provider store={store}>
      {" "}
      {/* Provide the redux store to the app */}
    {/* </Provider> */}
    <App />
  </StrictMode>
);
