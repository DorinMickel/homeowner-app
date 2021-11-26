import React, { useState } from 'react'
import { Col, Container, Form , Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { FromGroup } from '../../componants/FormGroup'
import { addNewCommunity, addNewTenant, setActiveUser } from '../../redux/actions/storageActions'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom'


const mapDispatchToProps = (dispatch) => ({
    addToTenantsList: (newTenant) => dispatch(addNewTenant(newTenant)),
    addToCommunitiesList: (newCommunity) => dispatch(addNewCommunity(newCommunity)),
    asignActiveUser: (newTenant) => dispatch(setActiveUser(newTenant))
})
const mapStateToProps = (state) => {
    return state.tenants
}

function MemberSignup (props){
    let [newTenant, setTenant] = useState({})
    let [newCommunity, setCommunity] = useState({})

    let [fullName, setFullName] = useState('')
    let [email, setEmail] = useState('')
    let [pwd, setPwd] = useState('')
    let [apt, setApt] = useState('')
    let [communityName, setCommunityName] = useState('')
    let [address, setAddress] = useState('')
    let [city, setCity] = useState('')

    const createNewCommunity = () => {
        setTenant(
            newTenant = {
                userId: uuidv4(),
                fullName,
                email,
                pwd,
                apt,
                communityName,
                isCommitteeMember: true
            }
        )

        setCommunity(
            newCommunity = {
                communityId: uuidv4(),
                communityName,
                address,
                city,
            }
        )

        props.addToTenantsList(newTenant)
        props.addToCommunitiesList(newCommunity)
        props.asignActiveUser(newTenant)
        
        window.location.href = "/main/dashboard"
    }

    return (
        <Container>
        <h1>Hello New Committee Member, Welcome Aboard!</h1>
        <Form >
            <Col xs lg="5">
                
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
                
                <FromGroup
                    controlId="formGroupCommunity"
                    label="Community name"
                    populateField={(e) => setCommunityName(e)}
                    placeholder="Enter an original name"
                />
                
                <FromGroup
                    controlId="formGridAddress"
                    label="Address"
                    populateField={(e) => setAddress(e)}
                    placeholder="1234 Main St"
                />
                
                <FromGroup
                    controlId="formGridCity"
                    label="City"
                    populateField={(e) => setCity(e)}
                    placeholder="Tel-Aviv"
                />
                
                <Button onClick={createNewCommunity} variant="primary" type="button">
                    Sign me up
                </Button>
                <Link className="signup-linkToLogin" to="/login">Login</Link>
            </Col>
        </Form>
    </Container>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(MemberSignup)