import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";  
import Thankyou from './components/Thank you/Thankyou';

ReactDOM.render(
  <React.StrictMode>
   
      <Router>  
      
      <Switch>
          <Route path="/Thankyou">
            <Thankyou />
          </Route>
        </Switch> 
      <App />  
      </Router> 
 
    
  </React.StrictMode>,
  document.getElementById('root')
);


