import React, { Component } from "react";
import { connect } from "react-redux";
import ButtonComponent from "../../components/ButtonComponent";
import Images from "../../assets/images";
import "../../assets/css/globalStyles.css";

class Home extends Component {
  handleClick = () => {
    this.props.history.push("/gamepage");
  };
  clickCredit = () => {
    this.props.history.push("/creditpage");
  };
  render() {
    return (
      <div className="App">
        <main className="App-header">
          <img src={Images.logoImg.Icon} alt="" className="logo" />
          <div style={{ marginTop: 50 }}>
            <ButtonComponent
              name="New Game"
              variant="light outline-light"
              onClick={this.handleClick}
            ></ButtonComponent>
            <ButtonComponent
              name="Credit"
              variant="light outline-light"
              onClick={this.clickCredit}
            ></ButtonComponent>
            <ButtonComponent
              name="Exit"
              variant="light outline-light"
            ></ButtonComponent>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = function (state, props) {
  return {};
};

const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
