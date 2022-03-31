import React from "react";
import Globalstyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

//Pages......
import Home from "./pages/Home";
import SignUp from "./pages/SignupPage";
import Pricing from "./pages/PricingPage";

function App() {
  return (
  
      <Router>
        <Globalstyle />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/pricing" exact component={Pricing} />
        </Switch>
      </Router>
  
  );
}

export default App;
