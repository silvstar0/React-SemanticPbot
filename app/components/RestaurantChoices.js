import React, { Component } from 'react';
import { Container, Image } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import chickenDark from '../assets/images/chicken-dark.png';
import chickenLight from '../assets/images/chicken-light.png';
import brunchDark from '../assets/images/brunch-dark.png';
import brunchLight from '../assets/images/brunch-light.png';
import wineDark from '../assets/images/wine-dark.png';
import wineLight from '../assets/images/wine-light.png';
import saladDark from '../assets/images/salad-dark.png';
import saladLight from '../assets/images/salad-light.png';
import positionIcon from '../assets/images/icon1.png';
import addressIcon from '../assets/images/icon2.png';
import alarmIcon from '../assets/images/icon3.png';
import footerLogo from '../assets/images/footer-logo.png';

export default class RestaurantChoices extends Component {
  constructor () {
    super();
    this.state = {
      isOverChicken: false,
      isOverWine: false,
      isOverBrunch: false,
      isOverSalad: false,
      isRedirect: false,
    };
  }

  handleOverBrunch (isOverBrunch) {
    this.setState({ isOverBrunch });
  }

  handleOverChicken (isOverChicken) {
    this.setState({ isOverChicken });
  }

  handleOverWine (isOverWine) {
    this.setState({ isOverWine });
  }

  handleOverSalad (isOverSalad) {
    this.setState({ isOverSalad });
  }

  handleClick () {
    this.setState({ isRedirect: true });
  }

  render() {
    if (this.state.isRedirect) {
      return <Redirect to="/babett-eatery" />;
    }
    return (
      <div>
        <Container className="text-center">
          <h3>Restaurant Choices</h3>
          <br />
          <p className="grey-font">
            Babett Eatery & Bar serves a seasonal Western cuisine,
            inspired by Californian traditions.
          </p>
          <div className="bottom-container">
            <div className="choices">
              <div className="choice-item -top-left" onMouseEnter={() => this.handleOverChicken(true)} onMouseLeave={() => this.handleOverChicken(false)}>
                <Image
                  src={this.state.isOverChicken ? chickenLight : chickenDark}
                  onClick={() => this.handleClick()}
                />
                <h5 className="no-margin">Menu</h5>
              </div>
              <div className="choice-item -top-right" onMouseEnter={() => this.handleOverWine(true)} onMouseLeave={() => this.handleOverWine(false)}>
                <Image
                  src={this.state.isOverWine ? wineLight : wineDark}
                  onClick={() => this.handleClick()}
                />
                <h5 className="no-margin">Wine & Cocktails</h5>
              </div>
            </div>
            <div className="choices">
              <div className="choice-item -bottom-left" onMouseEnter={() => this.handleOverBrunch(true)} onMouseLeave={() => this.handleOverBrunch(false)} >
                <Image
                  src={this.state.isOverBrunch ? brunchLight : brunchDark}
                  onClick={() => this.handleClick()}
                />
                <h5 className="no-margin">Brunch</h5>
              </div>
              <div className="choice-item -bottom-right" onMouseEnter={() => this.handleOverSalad(true)} onMouseLeave={() => this.handleOverSalad(false)} >
                <Image
                  src={this.state.isOverSalad ? saladLight : saladDark}
                  onClick={() => this.handleClick()}
                />
                <h5 className="no-margin">Tapas</h5>
              </div>
            </div>
            <br />
            <div className="contact-detail">
              <div className="contact-line"><Image src={positionIcon} /><h5 className="no-margin">5 Alan Pya Pagoda Street, Yangon</h5></div>
              <hr />
              <div className="contact-line"><Image src={addressIcon} /><h5 className="no-margin">+95 1 243 639</h5></div>
              <hr />
              <div className="contact-line"><Image src={alarmIcon} /><h5 className="no-margin">7:00 AM - 23:00 PM Daily</h5></div>
            </div>
            <div className="footer-line"><Image src={footerLogo} /></div>
          </div>
        </Container>
      </div>
    );
  }
}

