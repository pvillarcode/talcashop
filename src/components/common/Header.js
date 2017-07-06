import React, {PropTypes} from 'react';
import {Link, IndexLink } from 'react-router';

const Header = () => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Products</IndexLink>
            {" | "}
            <Link to="/Cart" activeClassName="active">About</Link>
        </nav>
    );
};

export default Header;