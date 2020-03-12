import * as React from "react";

export interface TemperatureProps {
  temperature: number;
}

export interface State {}

class Degrees extends React.Component<TemperatureProps, State> {
  render() {
    return <div>{Math.round(this.props.temperature)} °C</div>;
  }
}

export default Degrees;
