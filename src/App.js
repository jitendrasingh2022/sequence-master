import logo from "./logo.svg";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import "./App.css";
import Router from "./routers/Router";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
