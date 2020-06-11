import React from 'react';

import './search-field.styles.scss';

const SearchField = ({searchedText, handleChange}) => (
    <div className="search-wrapper">
        <input 
            type="search" 
            placeholder="Search Postal codes" 
            value={searchedText} 
            className="postalcode-search-field" 
            onChange={handleChange}
        />
    </div>
)
export default SearchField;