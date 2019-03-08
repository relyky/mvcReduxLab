import React, { Component } from "react"
import PropTypes from 'prop-types'
import { Collapse, CardBody, Card } from 'reactstrap'

class FormBlock extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: true
        }

        this.handleToggle = this.handleToggle.bind(this)
    }

    render() {
        const { isOpen } = this.state
        const { children, subTitle } = this.props
        return (
            <div>
                <h3 className="text-primary pl-1" onClick={this.handleToggle}>
                    {isOpen && <i className="fa fa-minus-square" aria-hidden="true"></i>}
                    {!isOpen && <i className="fa fa-plus-square" aria-hidden="true"></i>}
                    &nbsp;{subTitle}
                </h3>
                <Collapse isOpen={isOpen}>
                    <Card>
                        <CardBody>
                            {children}
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        )
    }

    handleToggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

FormBlock.propTypes = {
    subTitle: PropTypes.string.isRequired
}

//FormBlock.defaultProps = {
//    subTitle: undefined
//}

export default FormBlock;