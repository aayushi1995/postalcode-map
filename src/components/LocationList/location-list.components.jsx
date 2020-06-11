import React from 'react';

import LocationTableRow from '../LocationTableRow/location-table-row.component';

import './location-list.styles.scss';

const LocationList = ({filteredPostalCodes}) => (
    <table>
        <tr className="table-row-wrapper">
            <th>POSTALCODE</th>
            <th>LATITUDE</th>
            <th>LONGITUDE</th>
        </tr>
        {
            filteredPostalCodes.map( ({postalCode, ...otherProps}) => (
                <LocationTableRow key={postalCode} postalCode={postalCode}  { ...otherProps} />
            ))
        }
    </table>
)
export default LocationList;