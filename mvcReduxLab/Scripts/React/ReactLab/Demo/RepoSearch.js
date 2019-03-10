import React, { Component } from 'react'
import axios from 'axios'

class RepoSearch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            queryParam: 'steak',
            repoList: [],
            f_UIBlock: false
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }

    render() {
        const { f_UIBlock } = this.state

        return (
            <div className="container">
                <h2>§ RepoSearch on GitHub</h2>

                <input type='text' name='queryParam' value={this.state.queryParam} onChange={this.handleInputChange} />
                {/*<button onClick={this.handleSearch}>Search</button>*/}
                <button className="btn btn-primary" type="button" onClick={this.handleSearch} disabled={f_UIBlock} >
                    {f_UIBlock && <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>}
                    {f_UIBlock ? 'Loading...' : 'Search'}
                </button>

                <div>
                    <label>count:</label> {this.state.repoList.length}
                    <ul>
                        {this.state.repoList.map((repo, index) => 
                            <li key={index}><a href={repo.html_url}>{repo.name}</a></li>
                        )}
                    </ul>
                </div>

            </div>
        )
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSearch(e) {
        const { queryParam } = this.state
        console.log('handleSearch', { queryParam })

        this.setState({ f_UIBlock: true })
        let url = 'https://api.github.com/search/repositories?q=' + queryParam;
        axios.get(url).then((resp) => {
            console.log('handleSearch success', resp.data)
            const repoList = resp.data.items
            this.setState({ repoList })
        }).catch((xhr) => {
            console.error('handleSearch FAIL!', { xhr })
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'handleSearch FAIL!'
            })
        }).finally(() => {
            this.setState({ f_UIBlock: false })
        })
    }
}

export default RepoSearch;
