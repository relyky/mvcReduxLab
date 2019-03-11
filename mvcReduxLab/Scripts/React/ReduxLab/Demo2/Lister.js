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

                <ul className="list-group">
                    {itemList.map((item, index) =>
                        <li className="list-group-item" key={index}>
                            {index} {item.name}&nbsp;
                            <span className="badge badge-primary badge-pill">{item.count}</span>
                            <div class="btn-group float-right">
                                <button className="btn btn-primary" onClick={(e) => this.updateItem(item, index)}>讚</button>
                                <button className="btn btn-danger" onClick={(e) => this.removeItem(item, index)}>移除</button>
                            </div>
                        </li>
                    )}
                </ul>

                {/*
                <ul class="list-group">
                    <li class="list-group-item ">
                        Ads
                        <span class="badge badge-primary badge-pill">50</span>
                        <button class="btn btn-danger float-right">Remove</button>
                    </li>
                    <li class="list-group-item ">
                        Junk
                        <span class="badge badge-primary badge-pill">99</span>
                        <button class="btn btn-danger float-right">Remove</button>
                    </li>
                </ul>
                */}

            </div>
        )
    }

    removeItem(item, index) {
        this.props.dispRemoveItem(index)
    }

    addItem(newItem) {
        this.props.dispInsertItem(newItem)
    }

    updateItem(item, index) {
        item.count = item.count + 1 // 設定新值
        this.props.dispUpdateItem(index, item)
    }

    handleKeyUp(e) {
        //## where press <Enter>
        if (e.keyCode === 13) {
            const target = e.target
            console.log('handleKeyUp:Enter', target.value);

            const newItem = {
                name: target.value,
                count:0
            }
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