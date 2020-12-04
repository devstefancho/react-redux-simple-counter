import React from "react";
import { connect } from "react-redux";

import { countUp, countDown } from "../redux/actions/actions";

class CountNumber extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.state = {
      number: 1
    };
  }
  onChangeNumber = (event) => {
    console.log(event.target.value);
    let payload = parseInt(event.target.value, 10);
    this.setState({ number: payload });
  };
  render() {
    // console.log(this.props);
    let number = this.state.number;
    return (
      <div>
        <h1>COUNT NUMBER </h1>
        <div>
          <input type="text" onChange={this.onChangeNumber} />
        </div>
        <div>
          <button onClick={this.props.countUp(number)}>UP</button>
          <button onClick={this.props.countDown(number)}>DOWN</button>
        </div>
        <h2> {this.props.count} </h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { count } = state.countReducer;
  // console.log("count", count, state);
  return { count };
};
const mapDispatchToProps = (dispatch) => {
  return {
    countUp: (payload) => () => dispatch(countUp(payload)),
    countDown: (payload) => () => dispatch(countDown(payload))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CountNumber);
