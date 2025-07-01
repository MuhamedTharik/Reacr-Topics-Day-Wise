// Students.js
import React from 'react';
import PropTypes from 'prop-types';

function Students(props) {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <h3>Student: {props.isStudent ? 'Yes' : 'No'}</h3>
    </>
  );
}

Students.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

Students.defaultProps = {
  name: 'Guest',
  age: 0,
  isStudent: false,
};

export default Students;
