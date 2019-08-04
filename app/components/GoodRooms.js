import React, { Component } from 'react';
import { Container, Image, Divider, Button } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import Slider from 'react-slick';
import s3 from '../assets/images/s3.png';
import s4 from '../assets/images/s4.png';
import s5 from '../assets/images/s5.png';
import s6 from '../assets/images/s6.png';
import kingSize from '../assets/images/king-size.png';
import mountain from '../assets/images/mountain.png';
import people from '../assets/images/people.png';
import wifi from '../assets/images/wifi.png';

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

export default class GoodRooms extends Component {
  constructor() {
    super();
    this.state = {
      isAmentities: false,
      isBooking: true,
      isRedirect: false,
    };
  }

  handleAmentities () {
    this.setState({ isAmentities: !this.state.isAmentities });
    this.setState({ isBooking: this.state.isAmentities });
  }

  handleBookingDetails () {
    this.setState({ isBooking: !this.state.isBooking });
    this.setState({ isAmentities: !this.state.isAmentities });
    this.setState({ isRedirect: true });
  }

  render() {
    const { isAmentities, isBooking, isRedirect } = this.state;
    if (isRedirect) {
      return <Redirect to="/number-rooms" />;
    }
    return (
      <div>
        <Container>
          <h3 id="heading">Good Rooms</h3>
          <div className="header-box">
            <h4>$148/night</h4>
            <p>Membership Discount</p>
          </div>
          <br />
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
            <div className="item-box">
              <div className="item"><Image src={kingSize} /><span> King Size</span></div>
              <div className="item"><span>3 People </span><Image src={people} /></div>
            </div>
            <Divider fitted />
            <div className="item-box">
              <div className="item"><Image src={mountain} /><span> Mountain View</span></div>
              <div className="item"><span>Free Wifi </span><Image src={wifi} /></div>
            </div>
          </div>
          <div className="comment-box">
            <h4>
              Indulge in our 30sqm good rooms.
              It is the perfect combination of lofty space and modern ambiance.
            </h4>
          </div>
          <Button.Group Fluid className="buttons-group">
            <Button inverted color="blue" active={isAmentities} onClick={() => this.handleAmentities()} >Amenities</Button>
            <Button inverted color="blue" active={!isBooking} onClick={() => this.handleBookingDetails()}>Booking Details</Button>
          </Button.Group>
        </Container>
      </div>
    );
  }
}

