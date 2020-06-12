import React from 'react';

import LocationTableRow from '../LocationTableRow/location-table-row.component';

import './location-list.styles.scss';

const LocationList = ({filteredPostalCodes}) => (
    <table>
        <tbody>
            <tr className="table-row-wrapper">
                <th>#</th>
                <th>POSTALCODE</th>
                <th>LATITUDE</th>
                <th>LONGITUDE</th>
            </tr>
            {
                filteredPostalCodes.map( ({id, ...otherProps}) => (
                    <LocationTableRow key={id} id={id} { ...otherProps} />
                ))
            }
        </tbody>
    </table>
)
export default LocationList;