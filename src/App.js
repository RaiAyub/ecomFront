import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Furniture from './component/Furniture';


function App() {
  return (

    <Router>
      <div className="app">

        <Switch>
          /*Links are routed in between the two switch */

          <Route path='/checkout'>
          <Header />
            <h1>Checkout</h1>

          </Route>
          
          <Route path='/furniture'>
            <Header />
            <Furniture/>
            </Route>

          <Route path='/login'>
            <h1>Log In</h1>

          </Route>

          <Route path='/'>
            <Header />
            <Home />
           
          </Route>

          /*Links are routed in between the two switch */                    
       </Switch>        
      </div>      
    </Router>

  );
}

export default App;
