import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({value, onChange}) => (
    <div>
        <p>Find contacts by name</p>
        <input type="text" value={value} onChange={onChange}/>
    </div>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Filter;