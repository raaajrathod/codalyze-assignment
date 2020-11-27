import React, { Fragment } from "react";
// import { Fragment } from "react";

// Redux Connect
import { connect } from "react-redux";

// Components
import Row from "./Table.Row";

// Styles
import "./Table.styles.css";

const Table = ({ products }) => {
  console.log(products);

  return (
    <Fragment>
      <h3 className="large text-dark pt-2 display-4">Product List</h3>
      <div className="table-responsive-md pt-2">
        <table class="table table-hover">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Sr No.</th>
              <th scope="col">Name</th>
              <th scope="col">Weight (in Grams)</th>
              <th scope="col">Available</th>
              <th scope="col">Editable</th>
            </tr>
          </thead>
          <tbody>
            {products.map((obj, index) => (
              <Row product={obj} index={index} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  products: state.AppReducer.products,
});

export default connect(mapStateToProps, {})(Table);
