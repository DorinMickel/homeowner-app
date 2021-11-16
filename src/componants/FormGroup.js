import React from 'react';
import { Form } from 'react-bootstrap';

export function FromGroup (props) {
    const changeHandler = (e) => {
        props.populateField(e.target.value)
    }
    return (
        <Form.Group controlId={props.controlId}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control onChange={changeHandler} type={props.type} placeholder={props.placeholder} />
        </Form.Group>
    )
    
}