import React from "react";
// Redux Connect
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

// Action
import { loadProductToEdit } from "../../actions/AppActions";

const Row = (props) => {
  let { name, weight, availability, isEditable } = props.product;
  console.log(props);
  const editableLink = isEditable ? (
    <Link to={`/edit-product?id=${props.index}`}>Edit</Link>
  ) : (
    ""
  );

  return (
    <tr scope="row">
      <td>{props.index + 1}</td>
      <td>{name}</td>
      <td>{weight}</td>
      <td>{availability}</td>
      <td>{editableLink}</td>
    </tr>
  );
};

export default connect(null, { loadProductToEdit })(Row);

// export default Row;
