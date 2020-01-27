import React from 'react';
import {connect} from 'react-redux';
import {getSettings} from "../../redux/selectors";
import {setSettings} from "../../redux/actions";
import styled from "styled-components";

const mapStateToProps = state => {
  return getSettings(state)
};

const Wrapper = styled.div`
  overflow: auto;
  width: 100%;
  max-width: 680px;
  justify-self: center;
  display: grid
`;

const Form = styled.form`
  max-width: 680px;
  padding: 20px;
  display: grid;
  grid-template-rows: repeat(${props => props.rows}, 50px);
  grid-gap: 20px;
  margin: 20px;
  align-items: center;
  justify-items: start;
  position: relative;
  
  select {
    //display: none;
    justify-self: end;
  }
`;

const Label = styled.label`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  
  select {
    width: 150px;
  }
`;

const Submit = styled.input`
  height: 60px;
  margin: 20px;
  justify-self: end;
  cursor: ${props => props.active ? "pointer" : null};;
  box-shadow: ${props => props.active ? "0 4px 8px 0 rgba(0,0,0,0.2)" : null};
  padding: 10px;
  border-radius: 10px;
  font-size: 20px;
  border: none;
  background: none;
  
`;


class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 'C',
      distance: 'm',
      speed: 'm/s',
      angle: 'deg',
      timeFormat: '24-hour',
      dirty: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({dirty: true});
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.setSettings(this.state);
    this.setState({dirty: false});
    alert("Settings have been changed");
  }

  render() {
    return (
      <Wrapper>
        <h2 style={{textAlign: "start", margin: "20px"}}>Unit Settings</h2>
        <Form className={"card"} rows={"4"} onSubmit={this.handleSubmit}>
          <Label>
            Temperature Unit:
            <select name={"temperature"} onChange={this.handleChange}>
              <option value={"C"}>Celsius</option>
              <option value={"K"}>Kelvin</option>
              <option value={"F"}>Fahrenheit</option>
            </select>
          </Label>
          <Label>
            Distance Unit:
            <select name={"distance"} onChange={this.handleChange}>
              <option value={"m"}>Metric</option>
              <option value={"i"}>Imperial</option>
            </select>
          </Label>
          <Label>
            Speed Unit:
            <select name={"speed"} onChange={this.handleChange}>
              <option value={"m/s"}>Meters per second</option>
              <option value={"km/h"}>Kilometers per hour</option>
              <option value={"knot"}>Knots</option>
              <option value={"mph"}>Miles per hour</option>
            </select>
          </Label>
          <Label>
            Angular Unit:
            <select name={"angle"} onChange={this.handleChange}>
              <option value={"deg"}>Degree</option>
              <option value={"rad"}>Radian</option>
            </select>
          </Label>
        </Form>
        <h2 style={{textAlign: "start", margin: "20px"}}>Date and Time Settings</h2>
        <Form className={"card"} rows={"1"} onSubmit={this.handleSubmit}>
          <Label>
            Time Format:
            <select name={"timeFormat"} onChange={this.handleChange}>
              <option value={"24-hour"}>24 Hour</option>
              <option value={"am/pm"}>AM/PM</option>
            </select>
          </Label>
        </Form>
        <Submit onClick={this.handleSubmit} active={this.state.dirty} disabled={!this.state.dirty} type={"submit"} value={"Save Settings"}/>

      </Wrapper>
    )

  }
}

export default connect(mapStateToProps, { setSettings, getSettings })(Settings);
