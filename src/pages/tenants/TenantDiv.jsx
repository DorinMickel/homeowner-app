import React from 'react';
import { connect } from 'react-redux';
import ButtonComp from '../../componants/ButtonComp';
import { deleteTenant } from '../../redux/actions/storageActions';

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => ({
    deleteTenantFromList: (index) => dispatch(deleteTenant(index))
})

const TenantDiv = (props) => {
    const tenantDelete = (tenantObj) => {
        const tenantId = tenantObj.userId
        props.deleteTenantFromList(tenantId)
        props.setTenantDiv(false)
    }

    return (
        <React.Fragment>
            <div className="tenants-div">
                <div className="tenants-details">
                    <span>Full Name: {props.tenantObj.fullName}</span>
                    <span>Email Address: {props.tenantObj.email}</span>
                    <span>Apartment No.: {props.tenantObj.apt}</span>
                    <span>User ID: {props.tenantObj.userId}</span>
                </div>
                <div className="tenants-btn">
                    {props.tenantObj.userId === props.activeUser.activeUser.userId ? null :
                    <ButtonComp
                        btnColor="lightgrey"
                        btnText="Delete"
                        handleClick={() => tenantDelete(props.tenantObj)}/>
                    }
                    <ButtonComp
                        btnText="Update"
                        
                    />
                </div>
            </div>
        </React.Fragment>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(TenantDiv)