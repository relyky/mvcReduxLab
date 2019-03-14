import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Ks } from 'CommonFF/actions.js'
import { Container, Row, Col } from 'reactstrap'
import TextField from 'CommonMA/FormInputFields/TextField.js'

class FormViewUser extends Component {
    constructor(props) {
        super(props);

        //this.state = {}

        //this.handleValueChange = this.handleValueChange.bind(this)
    }

    render() {
        const { userInfo, dispatch, handleValueChange } = this.props
        return (
            <Container className="mt-2 bg-secondary text-white rounded">
                <h2>§ 使用者資料</h2>
                <Row>
                    <Col md={6}>
                        <TextField label="生日" name="birthday" type="date"
                            value={userInfo.birthday || ''}
                            onChange={handleValueChange}
                        />
                    </Col>
                    <Col md={6}>
                        <TextField label="聯絡時間" name="contactTime" type="time"
                            value={userInfo.contactTime || ''}
                            onChange={handleValueChange}
                        />
                    </Col>
                    <Col md={12}>
                        <TextField label="自我介紹" name="remark" type="text"
                            value={userInfo.remark || ''}
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
        userInfo: state.userInfo
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const targetReducer = 'userReducer'
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

//export default FormViewUser;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormViewUser);
