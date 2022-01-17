import React from "react";
import { Button } from 'react-bootstrap';

const ButtonComp = (props) => {
    const btnColor = props.btnColor ? props.btnColor : "lightcoral"
    return (
        <Button style={{backgroundColor: btnColor, border: 0}} 
        onClick={props.handleClick} 
        type={props.btnType ? props.btnType : "button"} disabled={props.disable}>
            {props.btnText}
        </Button>
    )
}

export default ButtonComp