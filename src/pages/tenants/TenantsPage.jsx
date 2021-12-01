import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, ListGroup } from 'react-bootstrap'
import TenantsModal from './TenantsModal';
import ButtonComp from '../../componants/ButtonComp';

// const mapDispatchToProps = (dispatch) => {

// }

const mapStateToProps = (state) => {
    return state.tenants
}

const TenantsPage = (props) => {
    let [isModalOpen, setIsModalOpen] = useState(false)
    const handleShow = () => setIsModalOpen(true)
    const handleClose = () => setIsModalOpen(false);
    const tenantList = props.tenants.map( tenant => {
        return (
            <ListGroup.Item>{tenant.fullName}</ListGroup.Item>
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