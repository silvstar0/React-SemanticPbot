import React from 'react';
import { Route, Switch } from 'react-router';
import ConfirmBooking from './ConfirmBooking';
import GoodRooms from './GoodRooms';
import NumberOfRooms from './NumberOfRooms';
import RestaurantChoices from './RestaurantChoices';
import BabettEatery from './BabettEatery';
import Starters from './Starters';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={GoodRooms} />
      <Route path="/confirm-booking" component={ConfirmBooking} />
      <Route path="/number-rooms" component={NumberOfRooms} />
      <Route path="/restaurant-choices" component={RestaurantChoices} />
      <Route path="/babett-eatery" component={BabettEatery} />
      <Route path="/starters" component={Starters} />
    </Switch>
  );
};

export default App;
