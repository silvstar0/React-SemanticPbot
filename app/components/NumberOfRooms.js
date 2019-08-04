import React, { Component } from 'react';
import { Container, Image, Button, Input, Icon } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import s3 from '../assets/images/s3.png';

export default class NumberOfRooms extends Component {
  constructor() {
    super();
    this.state = {
      isBack: false,
      isBook: true,
      startDate: moment(),
      endDatte: moment(),
      adultsNum: 0,
      childrenNum: 0,
      isRedirectConfirm: false,
      isRedirectBack: false,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnChangeEndDate = this.handleOnChangeEndDate.bind(this);
    this.handleIncreaseAdults = this.handleIncreaseAdults.bind(this);
    this.handleDecreaseAdults = this.handleDecreaseAdults.bind(this);
    this.handleIncreaseChildren = this.handleIncreaseChildren.bind(this);
    this.handleDecreaseChildren = this.handleDecreaseChildren.bind(this);
  }

  handleBack () {
    this.setState({ isBack: !this.state.isBack });
    this.setState({ isBook: this.state.isBack });
    this.setState({ isRedirectBack: true });
  }

  handleBook () {
    this.setState({ isBook: !this.state.isBook });
    this.setState({ isBack: !this.state.isBack });
    this.setState({ isRedirectConfirm: true });
  }

  handleOnChange (date) {
    this.setState({ startDate: date });
  }

  handleOnChangeEndDate (date) {
    this.setState({ endDatte: date });
  }

  handleIncreaseAdults () {
    this.setState({ adultsNum: this.state.adultsNum + 1 });
  }

  handleDecreaseAdults () {
    this.setState({ adultsNum: this.state.adultsNum - 1 < 0 ? 0 : this.state.adultsNum - 1 });
  }

  handleIncreaseChildren () {
    this.setState({ childrenNum: this.state.childrenNum + 1 });
  }

  handleDecreaseChildren () {
    this.setState({ childrenNum: this.state.childrenNum - 1 < 0 ? 0 : this.state.childrenNum - 1 });
  }

  render() {
    if (this.state.isRedirectConfirm) {
      return <Redirect to="/confirm-booking" />;
    }
    if (this.state.isRedirectBack) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Container>
          <Image src={s3} />
          <h3 className="nor-title">Good Rooms</h3>
          <div className="adults-children display-flex">
            <div>
              <h4>Adults</h4>
              <Input type="text" placeholder="0" labelPosition="right" action>
                <input value={this.state.adultsNum} />
                <Button onClick={this.handleDecreaseAdults}><Icon name="minus" /></Button>
                <Button onClick={this.handleIncreaseAdults}><Icon name="plus" /></Button>
              </Input>
            </div>
            <div>
              <h4>Children</h4>
              <Input type="text" placeholder="0" labelPosition="right" action>
                <input value={this.state.childrenNum} />
                <Button onClick={this.handleDecreaseChildren}><Icon name="minus" /></Button>
                <Button onClick={this.handleIncreaseChildren}><Icon name="plus" /></Button>
              </Input>
            </div>
          </div>
          <div className="booking-container">
            <h4>Booking</h4>
            <div className="datepicker-container">
              <div className="datepicker-box">
                <DatePicker
                  dateFormat="DD/MM/YYYY"
                  placeholderText="DD/MM/YYYY"
                  onChange={this.handleOnChange}
                  selected={this.state.startDate}
                />
                <Button><Icon name="calendar outline" /></Button>
              </div>
              <div className="datepicker-box">
                <DatePicker
                  dateFormat="DD/MM/YYYY"
                  placeholderText="DD/MM/YYYY"
                  onChange={this.handleOnChangeEndDate}
                  selected={this.state.endDatte}
                />
                <Button><Icon name="calendar outline" /></Button>
              </div>
            </div>
          </div>
          <div className="discount-code">
            <h4>Discount Code</h4>
            <Input type="text" placeholder="DXSPE298" labelPosition="right" action>
              <input />
              <Button>Enter</Button>
            </Input>
          </div>
          <Button.Group Fluid className="buttons-group">
            <Button inverted color="blue" active={this.state.isBack} onClick={() => this.handleBack()} >Back</Button>
            <Button inverted color="blue" active={!this.state.isBook} onClick={() => this.handleBook()}>Book this Room</Button>
          </Button.Group>
        </Container>
      </div>
    );
  }
}

