import React from 'react';
import './location-map.styles.scss';

import GoogleMapReact from 'google-map-react';
import Marker from '../MapMarker/map-marker.component';

class LocationMap extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            id: '',
            center: {
                lat: '',
                lng: ''
            },
            zoom: 11,
            postalCode: '',
            componentMount: false
        }
    }

    componentDidMount () {
        this.setState({
            id: this.props.id,
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
            <div className="map-container-wrapper">
            
                {/* Currently plotted location */}
                <div className="currently-plotted-data">
                    <div>Currently Plotting #{this.state.id}</div>
                    <div>Postal Code: {this.state.postalCode}</div>
                    <div>latitude : { this.state.center.lat} , longitude : { this.state.center.lng } </div>
                </div>
                   
                
                <div className="fixedheightwidth">
                {
                    // render Google Maps only if the component is mounted properly
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