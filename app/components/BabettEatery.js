import React, { Component } from 'react';
import { Container, Image, Button, Icon } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import Collapsible from 'react-collapsible';
import Slider from 'react-slick';
import s3 from '../assets/images/starters/s1.jpg';
import s4 from '../assets/images/starters/s2.jpg';
import s5 from '../assets/images/starters/s3.jpg';
import s6 from '../assets/images/starters/s4.jpg';

const settings = {
  customPaging (i) {
    let imgSrc;
    switch (i) {
      case 0:
        imgSrc = s3;
        break;
      case 1:
        imgSrc = s4;
        break;
      case 2:
        imgSrc = s5;
        break;
      case 3:
        imgSrc = s6;
        break;
      default:
        imgSrc = s3;
        break;
    }
    return (
      <Image src={imgSrc} size="big" />
    );
  },
  dots: true,
  dotsClass: 'slick-dots slick-thumb',
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default class BabettEatery extends Component {
  constructor() {
    super();
    this.state = {
      isWebSite: false,
      isReseveTable: true,
      isRedirect: false,
      isOpenedStarters: false,
      isOpenedSoups: false,
      isOpenedOceans: false,
      isOpenedLand: false,
      isRedirectToRC: false,
    };
  }

  handleDecline () {
    this.setState({ isWebSite: !this.state.isWebSite });
    this.setState({ isReseveTable: this.state.isWebSite });
    this.setState({ isRedirectToRC: true });
  }

  handleAccept () {
    this.setState({ isReseveTable: !this.state.isReseveTable });
    this.setState({ isWebSite: !this.state.isWebSite });
  }

  handleClickStarters (isOpenedStarters) {
    this.setState({ isOpenedStarters });
  }

  handleClickSoups (isOpenedSoups) {
    this.setState({ isOpenedSoups });
  }

  handleClickOceans (isOpenedOceans) {
    this.setState({ isOpenedOceans });
  }

  handleClickLand (isOpenedLand) {
    this.setState({ isOpenedLand });
  }

  render() {
    if (this.state.isRedirect) {
      return <Redirect to="/number-rooms" />;
    }
    if (this.state.isRedirectToRC) {
      return <Redirect to="/restaurant-choices" />;
    }
    return (
      <div>
        <Container>
          <h3 id="heading">Babett Eatery & Bar Menu</h3>
          <div>
            <Slider {...settings}>
              <div>
                <Image src={s3} />
              </div>
              <div>
                <Image src={s4} />
              </div>
              <div>
                <Image src={s5} />
              </div>
              <div>
                <Image src={s6} />
              </div>
            </Slider>
          </div>
          <div className="out-slider">
            <Collapsible trigger={<div className="collapsible-header"><span>Starters</span><Icon name={!this.state.isOpenedStarters ? 'chevron right' : 'chevron down'} /></div>} onOpen={() => this.handleClickStarters(true)} onClose={() => this.handleClickStarters(false)}>
              <a href="/starters">Go to details</a>
            </Collapsible>
            <Collapsible trigger={<div className="collapsible-header"><span>Soups</span><Icon name={!this.state.isOpenedSoups ? 'chevron right' : 'chevron down'} /></div>} onOpen={() => this.handleClickSoups(true)} onClose={() => this.handleClickSoups(false)}>
              <a href="/starters">Go to details</a>
            </Collapsible>
            <Collapsible trigger={<div className="collapsible-header"><span>From the Oceans</span><Icon name={!this.state.isOpenedOceans ? 'chevron right' : 'chevron down'} /></div>} onOpen={() => this.handleClickOceans(true)} onClose={() => this.handleClickOceans(false)}>
              <a href="/starters">Go to details</a>
            </Collapsible>
            <Collapsible trigger={<div className="collapsible-header"><span>From the Land</span><Icon name={!this.state.isOpenedLand ? 'chevron right' : 'chevron down'} /></div>} onOpen={() => this.handleClickLand(true)} onClose={() => this.handleClickLand(false)}>
              <a href="/starters">Go to details</a>
            </Collapsible>
          </div>
          <Button.Group Fluid className="buttons-group">
            <Button inverted color="blue" active={this.state.isDecline} className="confirm-booking-btn" onClick={() => this.handleDecline()} >Website</Button>
            <Button inverted color="blue" active={!this.state.isAccept} className="confirm-booking-btn" onClick={() => this.handleAccept()}>Reserve A Table</Button>
          </Button.Group>
        </Container>
      </div>
    );
  }
}

