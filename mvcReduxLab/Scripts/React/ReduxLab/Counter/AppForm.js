import React from 'react'
import { connect } from 'react-redux'
import AppHelper from 'CommonFF/AppHelper.js'
import Counter from './Counter.js'

class AppForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log('AppForm.render', { props: this.props })
        return (
            <div>
                <AppHelper appInfo={globalappinfo} noInitFormMode />
                <Counter />
            </div>
        )
    }
}

// connect to Store
const mapStateToProps = (state, ownProps) => ({
    appInfo: state.appInfo,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch
})

//export default AppForm;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppForm);
