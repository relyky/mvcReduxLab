import React, { Component } from "react"
import PropTypes from 'prop-types'
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap'
import { cuIsEmpty } from 'Common/CommonUtilities.js'

//.card-header.fa
const faStyle = {
    transition: '.3s transform ease-in-out'
}

// .card - header.collapsed.fa
const faRotateStyle = {
    transform: 'rotate(90deg)'
}

class FormPanel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: true
        }

        this.handleToggle = this.handleToggle.bind(this)
    }

    render() {
        const { isOpen } = this.state
        const { children, caption, collapse } = this.props
        return (
            <Card>
                <CardHeader tag="h4" onClick={() => collapse && this.handleToggle()}>
                    {collapse &&
                        <i className="fa fa-chevron-down pull-right small"
                            style={isOpen ? { ...faStyle } : { ...faStyle, ...faRotateStyle }}>
                        </i>
                    }
                    {caption}
                </CardHeader>
                <Collapse isOpen={isOpen}>
                    <CardBody>
                        {children}
                    </CardBody>
                </Collapse>
            </Card>
        )
    }

    handleToggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

FormPanel.propTypes = {
    caption: PropTypes.string,
    collapse: PropTypes.bool // 可折疊
}

FormPanel.defaultProps = {
    collapse: false
}

export default FormPanel;