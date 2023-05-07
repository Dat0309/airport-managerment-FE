import React from "react";
import "./base.css";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import NotFound from "./screens/NotFound";
import PrivateRouter from "./PrivateRouter";
import ArriverScreen from "./screens/ArriverScreen";

function App() {

  return (
    <>
      <Router>
        <Switch>
          <PrivateRouter path="/" component={ArriverScreen} exact />
          <PrivateRouter path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
