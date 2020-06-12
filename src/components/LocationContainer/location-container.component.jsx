import React from 'react';

import LocationData from './LocationData.js';

import './location-container.styles.scss';

import SearchField from '../SearchField/search-field.component';
import LocationList from '../LocationList/location-list.components.jsx';
import LocationMap from '../LocationMap/location-map.component.jsx';
import Pagination from '../Pagination/pagination.component.jsx';

class LocationContainer extends React.Component {

    constructor() {
        super();
       
        this.state = {
            postalData : [...LocationData],
            searchedText: ''
        }
    }

    handleChange = event => {
        this.setState({
            searchedText : event.target.value.trim()
        })
    }

    render () {

        // duplicate data from the state in order to keep the raw data clean and untouched
        const { postalData, searchedText } = this.state;

        // filter out all postal codes who have the searched keyword
        const filteredPostalCodes = postalData.filter((item,index) => (
            item.postalCode.startsWith(searchedText)
        ));

        const dataTobePlotted = filteredPostalCodes[0];

        return (

            <div className="container">

                {/* Table container */}
                <div className="location-table-wrapper">
                    <SearchField handleChange={this.handleChange} searchedText={this.state.searchedText} />
                    {
                        this.state.searchedText !== ''  
                        ?   <LocationList filteredPostalCodes={filteredPostalCodes}/> 
                        :   <Pagination postalData={postalData} recordlimit="5"/> 
                    }
                       
                       
                </div>

                {/* Map container */}
                <div className="location-map-wrapper">
                {
                    /* if data to be plotted is empty then display Location not found */

                    dataTobePlotted === '' || dataTobePlotted === undefined 

                    ? <div style={{padding:'20px'}}> Location not found</div>

                    : <LocationMap {...dataTobePlotted} key={dataTobePlotted.id}/>
                }
                </div>
            </div>
        )
    }
}

export default LocationContainer;