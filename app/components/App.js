import React from 'react';
import { Route, Switch } from 'react-router';
import ConfirmBooking from './ConfirmBooking';
import GoodRooms from './GoodRooms';
import NumberOfRooms from './NumberOfRooms';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={GoodRooms} />
      <Route path="/confirm-booking" component={ConfirmBooking} />
      <Route path="/number-rooms" component={NumberOfRooms} />
    </Switch>
  );
};

export default App;
