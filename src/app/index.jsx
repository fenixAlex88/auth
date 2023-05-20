import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Routing } from "pages";
import "./index.scss";
import store from "./store";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Provider store={store}>
          <Routing />
        </Provider>
      </BrowserRouter>
    </div>
  );
}
