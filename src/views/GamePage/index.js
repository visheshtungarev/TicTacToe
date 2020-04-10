import React, { Component } from "react";
import { connect } from "react-redux";
import ButtonComponent from "../../components/ButtonComponent";
import Square from "../../components/Square";
import Images from "../../assets/images";
import "./index.css";
import "../../assets/css/globalStyles.css";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const { squares, xIsNext } = this.state;
    const squaresRow = squares.slice();
    console.log(squaresRow);
    if (calculateWinner(squaresRow) || squaresRow[i]) {
      return;
    }
    squaresRow[i] = xIsNext ? "X" : "O";
    this.setState({ squares: squaresRow, xIsNext: !xIsNext });
  }
  renderSquare(i) {
    const { squares, xIsNext } = this.state;
    return <Square value={squares[i]} onClick={() => this.handleClick(i)} />;
  }

  render() {
    const { squares, xIsNext } = this.state;
    const winner = calculateWinner(squares);
    console.log(winner);
    let status;
    if (winner) {
      status = `Winner:  + ${winner==="X" ? "Player 1": "Player 2"}`;
      console.log(status);
    } else {
      status = "Next player: " + (this.state.xIsNext ? "Player 1" : "Player 2");
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

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

          <div className="game">
            <div className="game-board">
              <Board />
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
