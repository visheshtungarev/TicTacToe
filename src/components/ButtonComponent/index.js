import React from "react";
import Button from "react-bootstrap/Button";

const ButtonComponent = (props) => (
  <Button
    {...props}
    style={{
      background: "#c3e6df",
      width: 130,
      marginRight: 20,
      marginLeft: 20,
    }}
    variant="light outline-light"
  >
    {props.name}
  </Button>
);
export default ButtonComponent;
