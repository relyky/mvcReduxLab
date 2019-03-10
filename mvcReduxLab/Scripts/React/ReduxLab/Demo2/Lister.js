import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Ks } from 'CommonFF/actions.js'

class Lister extends Component {
    constructor(props) {
        super(props)

        this.removeItem = this.removeItem.bind(this)
        this.addItem = this.addItem.bind(this)
        this.handleKeyUp = this.handleKeyUp.bind(this)
    }

    render() {
        const { itemList } = this.props
        console.log('Lister.render', { itemList })

        return (
            <div className="container">
                <h2>§ Lister</h2>

                {/* 進階輸入操作 */}
                <p>
                    <input type="text" onKeyUp={this.handleKeyUp} />
                    <span>&nbsp;按Enter新增</span>
                </p>

                <ul>
                    {itemList.map((item, index) => {
                        console.log('render item', { item, index })
                        return (
                            <li key={index} onClick={(e) => this.removeItem(item, index)}>{index} {item}</li>
                        )
                    })}
                </ul>

            </div>
        )
    }

    removeItem(item, index) {
        console.log('removeItem', { item, index })
        this.props.dispRemoveItem(index)
    }

    addItem(newItem) {
        console.log('addItem', { newItem })
        this.props.dispInsertItem(newItem)
    }

    handleKeyUp(e) {
        //## where press <Enter>
        if (e.keyCode === 13) {
            const target = e.target
            console.log('handleKeyUp:Enter', target.value);

            const newItem = target.value
            this.addItem(newItem)

            // reset the target Input
            target.value = ''
        }
    }
}

// connect to Store
const mapStateToProps = (state, ownProps) => {
    return {
        itemList: state.itemList
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const targetReducer = 'listerReducer'
    return {
        dispatch,
        dispInsertItem: (payload) => {
            dispatch({ type: Ks.INSERT_ITEM, payload, targetReducer })
        },
        dispRemoveItem: (index) => {
            dispatch({ type: Ks.REMOVE_ITEM, index, targetReducer })
        },
        dispUpdateItem: (index, payload) => {
            dispatch({ type: Ks.UPDATE_ITEM, index, payload, targetReducer })
        }
    }
}



//export default Lister;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Lister);