import React, { useState } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { FromGroup } from "../../componants/FormGroup";
import { addNewTenant } from "../../redux/actions/storageActions";
import { v4 as uuidv4 } from 'uuid';
import ButtonComp from "../../componants/ButtonComp";
import "./tenants.css"

const mapDispatchToProps = (dispatch) => ({
    addToTenantsList: (newTenant) => dispatch(addNewTenant(newTenant))
})
const mapStateToProps = (state) => {
    return state
}

const TenantsModal = (props) => {
    
    let [newTenant, setTenant] = useState({})

    let [fullName, setFullName] = useState('')
    let [email, setEmail] = useState('')
    let [pwd, setPwd] = useState('')
    let [apt, setApt] = useState('')
    let [isCommitteeMember, setIsCommitteeMember] = useState(false)
    let communityName = props.activeUser.activeUser.communityName

    const createNewTenant = () => {
        setTenant(
            newTenant = {
                userId: uuidv4(),
                fullName,
                email,
                pwd,
                apt,
                communityName,
                isCommitteeMember
            }
        )
        props.addToTenantsList(newTenant)
    }
    return (
        <Modal show={props.isModalOpen} onHide={(e) => props.handleClose(e)}>
            <Modal.Header className="headline-modal" closeButton>
            <Modal.Title>Add new tenant to {communityName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form >
                    <Col >
                        
                        <FromGroup
                            controlId="formGroupFullName"
                            label="Full Name"
                            populateField={(e) => {setFullName(e)}}
                            type="text"
                            placeholder="Enter your full name"
                        />
                        
                        <FromGroup
                            controlId="formGroupEmail"
                            label="Email address"
                            populateField={(e) => {setEmail(e)}}
                            type="email"
                            placeholder="Enter email"
                        />

                        <FromGroup
                            controlId="formGroupPassword"
                            label="Password"
                            populateField={(e) => setPwd(e)}
                            type="password"
                            placeholder="Password"
                        />

                        <FromGroup
                            controlId="formGroupApt"
                            label="Apartment no."
                            populateField={(e) => setApt(e)}
                            type="text"
                            placeholder="5b"
                        />
                        
                        <Form.Group className="mt-3" controlId="formGroupCommunity">
                            <Form.Label>Community name</Form.Label>
                            <Form.Control readOnly placeholder={communityName} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState" className="mt-3">
                            <Form.Label>Set teanant as committee member</Form.Label>
                            <Form.Select size="sm" onChange={(e) => setIsCommitteeMember(e)}>
                                <option>No</option>
                                <option>Yes</option>
                            </Form.Select>
                        </Form.Group>

                    </Col>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={(e) => props.handleClose(e)}>
                Close
            </Button>
            <ButtonComp
                handleClick={createNewTenant}
                btnText="Create new tenant"
            />
            </Modal.Footer>
        </Modal>

    );
}

export default connect(mapStateToProps,mapDispatchToProps)(TenantsModal)