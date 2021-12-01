import React from "react";
import { Button } from 'react-bootstrap';

const ButtonComp = (props) => {
    return (
        <Button style={{backgroundColor: "lightcoral", border: 0}} 
        onClick={props.handleClick} 
        variant="primary" type="button">
            {props.btnText}
        </Button>
    )
}

export default ButtonComp