import React, { Component } from 'react';
import '../styles/items.css';
import List from './List';

class Items extends Component {
  constructor(props) {
    super();

    this.state = { files: [], newItem: '', message: '', show: false };
  }

  componentDidMount() {
    this.showData();
  }

  showData() {
    fetch('http://localhost:5000/apps/')
      .then(response => {
        return response.json();
      })
      .then(files => {
        this.setState({ files });
        //console.log(JSON.stringify(files));
      })
      .catch(error => console.error('Error:', error));
  }

  addData = name => {
    fetch('http://localhost:5000/apps/name', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name })
    })
      .then(response => {
        //console.log(response);
        return response.json();
      })
      .then(data => {
        //console.log(data)
        //console.log(data.message);
        this.setState({
          message: data.message
        });
      })
      .catch(error => console.error('Error:', error));
  };

  deleteData = id => {
    const deleteURL = 'http://localhost:5000/apps/' + id;
    fetch(deleteURL, {
      method: 'delete'
    })
      .then(() => {
        const items = this.state.files.filter(file => {
          //console.log(item.id);
          return file.id !== id;
        });
        this.setState({ files: items });
      })
      .catch(error => console.error('Error:', error));
  };

  handleSubmit = e => {
    e.preventDefault();

    this.addData(this.state.newItem);

    this.setState({
      files: [...this.state.files, this.state.newItem],
      newItem: '',
      message: ''
    });
  };

  showModal = () => {
    this.setState({ show: true });
  }

  hideModal = () => {
    this.setState({ show: false });
  }

  render() {
    const { newItem, message, show } = this.state;
    const showHideClassName = show ? 'inputModal display-block' : 'inputModal display-none';

    return <div>
        <div className="apps">
          <div className='myApps'>My Apps</div>
          

          {message !== '' && <h5>{message}</h5>}
          {/* <div className='bbb'> <p>+</p></div> */}
          <List files={this.state.files} deleteData={this.deleteData} />
        <div className="inputForm" type="button" onClick={this.showModal}>
          <p>+</p>
        </div>
        <div className="inputModal" className={showHideClassName}>
              {/* <button onClick={this.hideModal}>Close</button> */}
            <div className="closeForm" type="button" onClick={this.hideModal}>
              <p>+</p>
            </div>
              <form onSubmit={this.handleSubmit}>
                <input type="text" name="newItem" value={newItem} className="input" placeholder="Create new app" onChange={e => this.setState(
                      { [e.target.name]: e.target.value }
                    )} />
              </form>
          </div>
        </div>
      </div>;
  }
}



export default Items;
