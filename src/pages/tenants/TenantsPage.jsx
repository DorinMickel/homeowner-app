import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, ListGroup } from 'react-bootstrap'
import TenantsModal from './TenantsModal';
import ButtonComp from '../../componants/ButtonComp';
import TenantDiv from './TenantDiv';
import './tenants.css'

const mapStateToProps = (state) => {
    return state.tenants
}

const TenantsPage = (props) => {
    let [isModalOpen, setIsModalOpen] = useState(false)
    let [tenantDiv, setTenantDiv] = useState(false)
    let [tenantIndex, setTenantIndex] = useState(-1)

    const handleShow = () => setIsModalOpen(true);

    const handleClose = () => setIsModalOpen(false);

    const handleTenantDiv = (tenant) => {
        setTenantIndex(props.tenants.indexOf(tenant))
        !tenantDiv ? setTenantDiv(true) : setTenantDiv(false)
    }

    const tenantList = props.tenants.map( (tenant,index) => {
        return (
            <React.Fragment key={index}>
                <ListGroup.Item onClick={() => handleTenantDiv(tenant)}>{tenant.fullName}</ListGroup.Item>
                {tenantDiv && index === tenantIndex ? <TenantDiv tenantObj={tenant} setTenantDiv={setTenantDiv}/> : null}
            </React.Fragment>
        )
    })
    return (
        <Container>
            <div className="mt-3 mb-3 d-flex justify-content-end">
                <ButtonComp
                    handleClick={handleShow}
                    btnText="Add new tenant"
                />
            </div>

            <TenantsModal
                isModalOpen={isModalOpen}
                handleClose={handleClose}
                
            />
          
            <ListGroup>
                {tenantList}
            </ListGroup>
        </Container>
    )
}

export default connect(mapStateToProps,null)(TenantsPage)