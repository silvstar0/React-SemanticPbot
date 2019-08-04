import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../components/App';
// import ConfirmBooking from '../components/ConfirmBooking';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={App} exact />
        {/* <Route path="/confirm-booking" component={ConfirmBooking} exact /> */}
      </Switch>
    </Router>
  );
};

export default Root;

