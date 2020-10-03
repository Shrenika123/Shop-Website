import React, { Suspense } from 'react';
import './App.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'

const Checkout = React.lazy(() => import('./Components/Checkout/Checkout'))



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/checkout">
          <Suspense fallback={<div>Loading...</div>}>
            <Checkout/>
          </Suspense>
        </Route>
        <Route path="/">
          <Header />
            <Home />
        </Route>
      </Switch>
    </Router>
  );


}

export default App;
