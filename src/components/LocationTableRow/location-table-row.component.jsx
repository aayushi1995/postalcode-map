import React from 'react';

import './location-table-row.styles.scss';

const LocationTableRow = ({highlightrow, id, postalCode, latitude, longitude}) => (
    <tr key={postalCode} className={highlightrow ? "table-row-wrapper highlightrow" : "table-row-wrapper"}> 
        <td>{id} </td>
        <td> {postalCode} </td>
        <td> {latitude}</td>
        <td> {longitude}</td> 
    </tr>
)

export default LocationTableRow;
