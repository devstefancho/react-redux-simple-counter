import React from "react";
import { connect } from "react-redux";

class CountNumber extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>COUNT NUMBER </h1>
        <h2> {this.props.count} </h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { count } = state.countReducer;
  console.log("count", count, state);
  return { count };
};
// const mapDispatchToProps = () => {};
export default connect(mapStateToProps, null)(CountNumber);
