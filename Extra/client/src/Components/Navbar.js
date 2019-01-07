import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/Navbar.css';


class Navbar extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <a href="/auth/heroku">login With Heroku</a>;
      default:
        return <a href='/api/logout'>logout</a>;
    }
  }

  render(){
    return (
      <header>
        <Link
          to={this.props.auth ? '/items' : '/'}
        >
          Cloudnasium
        </Link>
        <i
          className="fa fa-cloud"
          aria-hidden="true"
          style={{ fontSize: '36px' }}
        />
        <nav>
          <ul>
            {this.renderContent()}
          </ul>
        </nav>
      </header>
    );
  }
  
};



const mapStateToProps = ({ auth }) => {
  return { auth };
};
export default connect(mapStateToProps)(Navbar);



