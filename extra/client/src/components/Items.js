import React, { Component } from 'react';
import '../styles/items.css';
import List from './List';

class Items extends Component {
    constructor(props) {
        super();

        this.state = {
            files: [],
            newItem: ''
        };
    }

    componentDidMount() {
        fetch('http://localhost:5000/apps')
            .then(response => {
                return response.json();
            })
            .then(files => {
                this.setState({ files });
                //console.log(JSON.stringify(files));
            });
    }

    handleDelete = file => {
        const copyItems = this.state.files.filter(files => {
            return files !== file;
        });
        this.setState({ files: [...copyItems] });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.setState({
            files: [...this.state.files, this.state.newItem],
            newItem: ''
        });
    };

    render() {
        return (
            <div>
                

                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="newItem"
                        value={this.state.newItem}
                        className="add"
                        placeholder="add here"
                        onChange={e => this.setState({ [e.target.name]: e.target.value })}
                    />
                </form>
                <List files={this.state.files} handleDelete={this.handleDelete} />
            </div>
        );
    }
}

export default Items;
