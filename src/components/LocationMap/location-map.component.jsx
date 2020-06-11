import React from 'react';
import './location-map.styles.scss';

import GoogleMapReact from 'google-map-react';
import Marker from '../MapMarker/map-marker.component';

class LocationMap extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            center: {
                lat: '',
                lng: ''
            },
            zoom: 11,
            postalCode: '',
            componentMount: false
        }
    }
    componentDidMount(){
        this.setState({
            center : {
                lat: this.props.latitude,
                lng: this.props.longitude,
            },
            postalCode: this.props.postalCode,
            componentMount: true,
        })
    }
    render() {

        return (
            <div>
                <h2>{this.state.postalCode}</h2>
                <p>latitude : { this.state.center.lat} , longitude : { this.state.center.lng } </p>
                
                <div className="fixedheightwidth">
                {
                    this.state.componentMount 
                    ? (
                        <GoogleMapReact 
                        bootstrapURLKeys={{ key: 'AIzaSyBolpG9OgyqG5AIA5weqb8YqMmcTUpGxZM' }}
                        defaultCenter={this.state.center}
                        defaultZoom={this.state.zoom}
                        distanceToMouse={()=>{}}
                        >
                        <Marker
                            lat={this.state.center.lat}
                            lng={this.state.center.lng}
                        />
                        </GoogleMapReact>
                    )
                    : ''
                }
                </div>
                    
               
            </div>
        )
    }
}

export default LocationMap;