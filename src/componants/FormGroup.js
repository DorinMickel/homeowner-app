import React from 'react';
import { Form } from 'react-bootstrap';
import './formGroup.css'

export function FromGroup (props) {
    const changeHandler = (e) => {
        props.populateField(e.target.value)
    }
    return (
        <Form.Group className="formgroup mt-3" controlId={props.controlId}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control onChange={changeHandler} type={props.type} placeholder={props.placeholder} />
        </Form.Group>
    )
    
}