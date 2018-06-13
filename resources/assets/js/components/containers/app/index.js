import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "../home";
import Header from "../header";
import Footer from "../footer/index";
import { Provider } from "react-alert";
import AlertTemplate from "./alert-template";
import ReactDOM from 'react-dom';
const options = {
  timeout: 5000,
  position: "bottom center"
};

const App = () => (
  <Provider template={AlertTemplate} {...options}>
    <Header />
    <main style={{ "marginTop": "75px" }}>
      <Home />
      <Footer />
    </main>
  </Provider>
);

export default App;

if (document.getElementById('main-app')) {
  ReactDOM.render(<App />, document.getElementById('main-app'));
}
