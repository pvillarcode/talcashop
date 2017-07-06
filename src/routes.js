import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import ProductsPage from './components/products/ProductsPage';
import CartPage from './components/cart/CartPage';

export default (
    <Route path="/" component= {App}>
        <IndexRoute component={ProductsPage} />
        <Route path="Cart" component={CartPage} />
    </Route>
);

