
import React from "react";
import Globalstyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Pages......
import Home from './pages/Home';
import SignUp from './pages/SignupPage';
import Pricing from './pages/PricingPage';


function App() {
  return (
    <div className="App">
      <Router>
<Globalstyle />

<Switch>
<Route path='/' exact component={Home} />
<Route path='/signup' exact component={SignUp} />
<Route path='/pricing' exact component={Pricing} />

</Switch>

      </Router>


    </div>
  );
}

export default App;
