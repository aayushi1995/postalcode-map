import React from 'react';

import LocationTableRow from '../LocationTableRow/location-table-row.component';

import './location-list.styles.scss';

const LocationList = ({filteredPostalCodes, highlightrow}) => (
    <table className="search-records-table">
        <tbody>
            <tr className="table-row-wrapper">
                <th>#</th>
                <th>POSTALCODE</th>
                <th>LATITUDE</th>
                <th>LONGITUDE</th>
            </tr>
            {
                filteredPostalCodes.map( ({id, ...otherProps}) => (
                    <LocationTableRow key={id} id={id} { ...otherProps} highlightrow={id === 0 ? highlightrow : ''}/>
                ))
            }
        </tbody>
    </table>
)
export default LocationList;