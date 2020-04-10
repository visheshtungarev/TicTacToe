import React from 'react';
import "./index.css"

const Square=(props)=> {
    const {value,onClick} = props;
    return (
      <button className="square" onClick={onClick}>
        {value}
      </button>
    );
}
export default Square;