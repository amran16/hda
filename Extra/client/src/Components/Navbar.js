import React from 'react';
import '../Styles/Navbar.css'

const Navbar = (props) => {
    return <header>
		   <h3>Cloudnasium</h3>
        <i className="fa fa-cloud" aria-hidden="true" style={{ fontSize: '36px'}}></i>
			<nav>
			  <h4>Account</h4>
			</nav>
		</header>;
}


export default Navbar;
