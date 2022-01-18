import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { addNewTenant } from "../../redux/actions/storageActions";
import { v4 as uuidv4 } from 'uuid';
import ButtonComp from "../../componants/ButtonComp";
import "./tenants.css"
import TenantsModalForm from "./TanentsModalForm";


const mapDispatchToProps = (dispatch) => ({
    addToTenantsList: (newTenant) => dispatch(addNewTenant(newTenant))
})
const mapStateToProps = (state) => {
    return state
}

const TenantsModal = (props) => {
    let [validated, setValidated] = useState(false)
    let [newTenant, setTenant] = useState({})
    let [fullName, setFullName] = useState('')
    let [email, setEmail] = useState('')
    let [pwd, setPwd] = useState('')
    let [apt, setApt] = useState('')
    let [isCommitteeMember, setIsCommitteeMember] = useState(false)
    let communityName = props.activeUser.activeUser.communityName
    let [errText, setErrText] = useState('')

    const formValidation = (event) => {
        const form = event.currentTarget;
        const emailExist = props.tenants.tenants.find(exEmail => email === exEmail.email)
        console.log(emailExist)
        if (form.checkValidity() === false || emailExist) {
            event.preventDefault();
            event.stopPropagation();
            if (emailExist){
                setErrText('Email address already exists')
            }
        }
        else{
            createNewTenant()
        }
        setValidated(true);
    }

    const createNewTenant = (e) => {
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
        props.handleClose(e)
        setFullName('')
        setEmail('')
        setPwd('')
        setApt('')
        setIsCommitteeMember(false)
    }

    return (
        <Modal show={props.isModalOpen} onHide={(e) => props.handleClose(e)}>
            <Modal.Header closeButton>
                <Modal.Title>Add new tenant to {communityName}</Modal.Title>
            </Modal.Header>
            <Form noValidate validated={validated} onSubmit={formValidation}>
            <Modal.Body>  
                <TenantsModalForm
                    setFullName={setFullName}
                    setEmail={setEmail}
                    setPwd={setPwd}
                    setApt={setApt}
                    setIsCommitteeMember={setIsCommitteeMember}
                    communityName={communityName}
                    errText={errText}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={(e) => props.handleClose(e)}>
                    Close
                </Button>
                <ButtonComp
                    btnText="Create new tenant"
                    btnType="submit"
                />
            </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default connect(mapStateToProps,mapDispatchToProps)(TenantsModal)