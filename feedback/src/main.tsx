import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";  // ✅ Only BrowserRouter here
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import store from "./redux/store";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>  {/* ✅ This is the only BrowserRouter */}
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </Provider>
);
