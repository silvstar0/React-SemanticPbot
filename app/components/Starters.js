import React, { Component } from 'react';
import { Container, Button, Image } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import s3 from '../assets/images/starters/s1.jpg';
import s4 from '../assets/images/starters/s2.jpg';
import s5 from '../assets/images/starters/s3.jpg';
import s6 from '../assets/images/starters/s4.jpg';

export default class Starters extends Component {
  constructor() {
    super();
    this.state = {
      isDecline: false,
      isAccept: true,
      isRedirect: false,
    };
  }

  handleDecline () {
    this.setState({ isDecline: !this.state.isDecline });
    this.setState({ isAccept: this.state.isDecline });
    this.setState({ isRedirect: true });
  }

  handleAccept () {
    this.setState({ isAccept: !this.state.isAccept });
    this.setState({ isDecline: !this.state.isDecline });
  }

  render() {
    if (this.state.isRedirect) {
      return <Redirect to="/babett-eatery" />;
    }
    return (
      <div>
        <Container>
          <h3 id="heading">Starters</h3>
          <div className="starters-list-item">
            <Image src={s3} />
            <div className="list-item-right-container">
              <h4>Two ways Tuna Tar Tare</h4>
              <p className="grey-font">14,000 MKK </p>
            </div>
          </div>
          <div className="starters-list-item">
            <Image src={s4} />
            <div className="list-item-right-container">
              <h4>Artichoke and Squid Salad</h4>
              <p className="grey-font">13,000 MKK</p>
            </div>
          </div>
          <div className="starters-list-item">
            <Image src={s5} />
            <div className="list-item-right-container">
              <h4>Sea Bass Carpaccio</h4>
              <p className="grey-font">14,000 MKK </p>
            </div>
          </div>
          <div className="starters-list-item">
            <Image src={s6} />
            <div className="list-item-right-container">
              <h4>Traditional Fole Gras Terrine</h4>
              <p className="grey-font">28,000 MKK </p>
            </div>
          </div>
          <Button.Group Fluid className="buttons-group -starters-buttons">
            <Button inverted color="blue" active={this.state.isDecline} className="confirm-booking-btn" onClick={() => this.handleDecline()} >Take Away</Button>
            <Button inverted color="blue" active={!this.state.isAccept} className="confirm-booking-btn" onClick={() => this.handleAccept()}>Room Service</Button>
          </Button.Group>
        </Container>
      </div>
    );
  }
}

