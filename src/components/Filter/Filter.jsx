import React from 'react';
import T from 'prop-types';

const Filter = ({ filterValue, onFilterChange }) => (
  <>
    <p>Find contacts by name</p>
    <input id="filter" value={filterValue} onChange={onFilterChange} />
  </>
);

Filter.defaultProps = {
  filterValue: '',
};

Filter.propTypes = {
  filterValue: T.string,
  onFilterChange: T.func.isRequired,
};

export default Filter;
