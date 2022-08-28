import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./store/reducers";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter basename="/takeoffstaff">
      {/* <StyledEngineProvider injectFirst> 
        <ThemeProvider theme={myTheme}>  */}
      <App />
      {/* </ThemeProvider> 
      </StyledEngineProvider>  */}
    </BrowserRouter>
  </Provider>
  //  </React.StrictMode>
);
