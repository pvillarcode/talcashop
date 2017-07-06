import React from 'react';
import {Link} from 'react-router';

class ProductsPage extends React.Component {
    render() {
        return(
        <div className="jumbotron">
            <h1>Products Page</h1>
            <a href="/Cart">Cart</a>
        </div>
        
        );
    }
}

export default ProductsPage;