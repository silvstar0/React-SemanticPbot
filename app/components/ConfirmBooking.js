import React, { Component } from 'react';
import { Container, Image, Button } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import Slider from 'react-slick';
import s3 from '../assets/images/s3.png';
import s4 from '../assets/images/s4.png';
import s5 from '../assets/images/s5.png';
import s6 from '../assets/images/s6.png';

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

export default class ConfirmBooking extends Component {
  constructor() {
    super();
    this.state = {
      isDecline: false,
      isAccept: true,
      isRedirect: false,
      isRedirectToRC: false,
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
    this.setState({ isRedirectToRC: true });
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
          <h3 id="heading">Confirm Booking 1</h3>
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
          <div className="room-type display-flex padding"><h4 className="bolder">1x Good Room</h4><h4>$151/ni</h4></div>
          <hr className="margin" />
          <div className="room-details display-flex padding"><h4 className="grey-font">Check-In</h4><h4>March 24</h4></div>
          <div className="room-details display-flex padding" ><h4 className="grey-font">Check-Out</h4><h4>March 28</h4></div>
          <div className="room-details display-flex padding"><h4 className="grey-font">Guest(s)</h4><h4>1x Adult</h4></div>
          <div className="room-details display-flex padding"><h4 className="grey-font">Refundable</h4><h4 className="m-b">Yes</h4></div>
          <div className="room-details display-flex padding"><h4 className="grey-font">Breakfast</h4><h4>Not Included</h4></div>
          <Button.Group Fluid className="buttons-group">
            <Button inverted color="blue" active={this.state.isDecline} className="confirm-booking-btn" onClick={() => this.handleDecline()} >Decline</Button>
            <Button inverted color="blue" active={!this.state.isAccept} className="confirm-booking-btn" onClick={() => this.handleAccept()}>Accept For $444</Button>
          </Button.Group>
        </Container>
      </div>
    );
  }
}

