import React from 'react';
import { Link, Route } from 'react-router-dom';

const Category = ({ match }) => (
  <div>
    <h1>Category Component</h1>
    <h5>Click on a category</h5>
    <ul>
      <li>
        <Link to={`${match.url}/shoes`}>Shoes</Link>
      </li>
      <li>
        <Link to={`${match.url}/food`}>Food</Link>
      </li>
      <li>
        <Link to={`${match.url}/dresses`}>Dresses</Link>
      </li>
    </ul>
    <Route
      path={`${match.path}/:categoryName`}
      render={props => <div>{props.match.params.categoryName} category</div>}
    />
  </div>
);

export default Category;