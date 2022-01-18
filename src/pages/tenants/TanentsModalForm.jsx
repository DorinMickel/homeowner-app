import React from 'react'
import { Col, Form } from 'react-bootstrap'
import { FromGroup } from '../../componants/FormGroup'

const TenantsModalForm = (props) => {
    return (
        <Col >
                    
            <FromGroup
                controlId="formGroupFullName"
                label="Full Name"
                populateField={(e) => props.setFullName(e)}
                type="text"
                placeholder="Enter your full name"
            />
            
            <FromGroup
                controlId="formGroupEmail"
                label="Email address"
                populateField={(e) => props.setEmail(e)}
                type="email"
                placeholder="Enter email"
                errText={props.errText}
            />

            <FromGroup
                controlId="formGroupPassword"
                label="Password"
                populateField={(e) => props.setPwd(e)}
                type="password"
                placeholder="Password"
            />

            <FromGroup
                controlId="formGroupApt"
                label="Apartment no."
                populateField={(e) => props.setApt(e)}
                type="text"
                placeholder="5b"
            />
            
            <Form.Group className="mt-3 formgroup" controlId="formGroupCommunity">
                <Form.Label>Community name</Form.Label>
                <Form.Control readOnly placeholder={props.communityName} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState" className="mt-3">
                <Form.Label>Set teanant as committee member</Form.Label>
                <Form.Select className="form-select" size="sm" onChange={(e) => props.setIsCommitteeMember(e.target.value)}>
                    <option value={false}>No</option>
                    <option value={true}>Yes</option>
                </Form.Select>
            </Form.Group>

        </Col> 
    )
}

export default TenantsModalForm