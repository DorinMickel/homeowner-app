import React, { useState } from 'react';
import { Col, Container, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ButtonComp from '../../componants/ButtonComp';
import Error from '../../componants/Error';
import { FromGroup } from '../../componants/FormGroup'
import { setActiveUser } from '../../redux/actions/storageActions';

const mapStateToProps = (state) => {
    return state.tenants
}
const mapDispatchToProps = (dispatch) => ({
    asignActiveUser: (tenant) => dispatch(setActiveUser(tenant))
})

const Login = (props) => {
    let [email, setEmail] = useState('')
    let [pwd, setPdw] = useState('')
    let [error, setError] = useState('')
    let [show, setShow] = useState(false)

    const userLogin = () => {
        props.tenants.find(tenant => {
            if (tenant.email.toLowerCase() === email.toLowerCase() && tenant.pwd === pwd) {
                props.asignActiveUser(tenant)
                window.location.href = "/main/dashboard"
            }
            else {
                setShow(true)
                setError('Incorrect email or password')       
            }
        }) 
    }
    return (
        <React.Fragment>
            <div className="bg-img"></div>
            <Container className="in-container">
                <h1 className="headline">Welcome Back</h1>
                <Form >
                    <Col xs lg="5">
                        <Error
                            show={show}
                            error={error}
                        />
                        
                        <FromGroup
                            controlId="formGroupEmail"
                            label="Email address"
                            populateField={(e) => setEmail(e)}
                            type="email"
                            placeholder="Enter email"
                        />

                        <FromGroup
                            controlId="formGroupPassword"
                            label="Password"
                            populateField={(e) => setPdw(e)}
                            type="password"
                            placeholder="Enter Password"
                        />
                        <div className="btn-container">
                            <ButtonComp 
                                handleClick={userLogin}
                                btnText="Log me in"
                            />
                            <p><span>Don't have a community yet? </span>
                            <Link className="login-linkToSignup" to="/member-signup">SignUp</Link>
                            <span> to create one now</span></p>
                        </div>
                    </Col>
                </Form>
            </Container>
        </React.Fragment>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)