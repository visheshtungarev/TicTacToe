import React, { Component } from "react";
import { connect } from "react-redux";
import ButtonComponent from "../../components/ButtonComponent";
import Images from "../../assets/images";
import "../../assets/css/globalStyles.css";

class CreditPage extends Component {
  backClick = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="App">
        <main className="App-header">
          <img src={Images.logoImg.Icon} alt="" className="logo" />

          <div style={{}}>Credit</div>
          <ButtonComponent name="Back" onClick={this.backClick} />
        </main>
      </div>
    );
  }
}

const mapStateToProps = function (state, props) {
  return {};
};

const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(CreditPage);
