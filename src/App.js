import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Hompage from "./components/Hompage";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Hompage />
        </Router>
      </Provider>
    );
  }
}

export default App;
