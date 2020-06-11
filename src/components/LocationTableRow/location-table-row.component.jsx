import React from 'react';

import './location-table-row.styles.scss';

const LocationTableRow = ({postalCode, latitude, longitude}) => (
    <tr key={postalCode} className="table-row-wrapper"> 
        <td> {postalCode} </td>
        <td> {latitude}</td>
        <td> {longitude}</td> 
    </tr>
)

export default LocationTableRow;
