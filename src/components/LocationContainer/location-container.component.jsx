import React from 'react';

import LocationData from './LocationData.js';

import './location-container.styles.scss';

import SearchField from '../SearchField/search-field.component';
import LocationList from '../LocationList/location-list.components.jsx';
import LocationMap from '../LocationMap/location-map.component.jsx';

class LocationContainer extends React.Component {

    constructor() {
        super();
       
        this.state = {
            data : [...LocationData],
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
        const { data, searchedText } = this.state;

        // filter out all postal codes who have the searched keyword
        const filteredPostalCodes = data.filter((item,index) => (
            item.postalCode.startsWith(searchedText)
        ));
        
        const first = filteredPostalCodes[0];

        return (

            <div className="container">

                <div className="location-table-wrapper">
                    <SearchField handleChange={this.handleChange} searchedText={this.state.searchedText} />
                    <LocationList filteredPostalCodes={filteredPostalCodes}/>
                </div>

                <div className="location-map-wrapper">
                {
                    first === '' || first === undefined 
                    ? " No Location Found"
                    : <LocationMap {...first} key={first.postalCode}/>
                }
                </div>
            </div>
        )
    }
}

export default LocationContainer;