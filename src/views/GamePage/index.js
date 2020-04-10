import React, { Component } from "react";
import { connect } from "react-redux";
import ButtonComponent from "../../components/ButtonComponent";
import Images from "../../assets/images";
import "../../assets/css/globalStyles.css";

class GamePage extends Component {
  render() {
    return (
      <div className="App">
        <main className="App-header">
          <img
            src={Images.logoImg.Icon}
            alt=""
            style={{ width: 200, margin: 50 }}
          />

          <div style={{ margin: 50 }}>Game Section</div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = function (state, props) {
  return {};
};

const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
