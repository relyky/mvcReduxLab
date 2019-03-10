import React, { Component } from 'react'

class Lister extends Component {
    constructor(props) {
        super(props)

        this.state = {
            itemList: []
        }

        this.removeItem = this.removeItem.bind(this)
        this.addItem = this.addItem.bind(this)
        this.handleKeyUp = this.handleKeyUp.bind(this)
    }

    componentDidMount() {
        this.setState({
            itemList: ['Apple', 'Samsung', 'Sony', 'ASUS']
        })
    }

    render() {
        const { itemList } = this.state

        return (
            <div className="container">
                <h2>§ Lister</h2>

                {/* 進階輸入操作 */}
                <p>
                    <input type="text" onKeyUp={this.handleKeyUp} />
                    <span>&nbsp;按Enter新增</span>
                </p>

                <ul>
                    {itemList.map((item, index) =>
                        <li key={index} onClick={(e) => this.removeItem(item, index)}>{index} {item}</li>
                    )}
                </ul>

                <h4>table版本</h4>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>項次</th>
                            <th>內容</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemList.map((item, index) =>
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{item}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={(e) => this.removeItem(item, index)}>移除</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>
        )
    }

    removeItem(item, index) {
        console.log('removeItem', { item, index })

        const itemList = this.state.itemList
        itemList.splice(index, 1)

        // update & refresh UI
        this.setState({ itemList })
    }

    addItem(newItem) {
        console.log('addItem', { newItem })

        const itemList = this.state.itemList
        itemList.push(newItem)

        // update & refresh UI
        this.setState({ itemList })
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

export default Lister
