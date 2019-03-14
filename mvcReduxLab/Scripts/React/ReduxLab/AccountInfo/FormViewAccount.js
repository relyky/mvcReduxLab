import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Ks } from 'CommonFF/actions.js'
import { Container, Row, Col } from 'reactstrap'
import TextField from 'CommonMA/FormInputFields/TextField.js'

class FormViewAccount extends Component {
    constructor(props) {
        super(props);

        //this.state = {}

        //this.handleValueChange = this.handleValueChange.bind(this)
    }

    render() {
        const { accountInfo, dispatch, handleValueChange } = this.props
        return (
            <Container className="mt-2 bg-secondary text-white rounded">
                <h2>§ 帳號基本資料</h2>
                <Row>
                    <Col md={6}>
                        <TextField label="帳號" name="name"
                            value={accountInfo.name || ''}
                            onChange={handleValueChange}
                        />
                    </Col>
                    <Col md={6}>
                        <TextField label="Email" name="email" type="email"
                            value={accountInfo.email || ''}
                            onChange={handleValueChange}
                        />
                    </Col>
                    <Col md={6}>
                        <TextField label="手機" name="mobilePhone" type="tel"
                            value={accountInfo.mobilePhone || ''}
                            onChange={handleValueChange}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }

    //handleValueChange(name, value) {
    //    this.setState({ [name]: value })
    //}

}

// connect to Store
const mapStateToProps = (state, ownProps) => {
    return {
        accountInfo: state.accountInfo
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const targetReducer = 'accountReducer'
    return {
        dispatch,
        handleValueChange: (name, value) => {
            dispatch({
                type: Ks.ASSIGN_VALUE,
                name,
                value,
                targetReducer
            })
        },
        assignStateProps: (properties) => {
            dispatch({
                type: Ks.ASSIGN_STATE_PROPS,
                properties,
                targetReducer
            })
        }
    }
}

//export default FormViewAccount;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormViewAccount);
