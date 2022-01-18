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
                    <span>Full Name: <b>{props.tenantObj.fullName}</b></span>
                    <span>Email Address: <b>{props.tenantObj.email}</b></span>
                    <span>Apartment No.: <b>{props.tenantObj.apt}</b></span>
                    <span>Is committee member: <b>{props.tenantObj.isCommitteeMember === false ? "No" : "Yes"}</b></span>
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