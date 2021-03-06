import React, { Component } from 'react';

class GoogleMap extends Component {

    // create the google map to bring in to the table 
componentDidMount() {
    new google.maps.Map(this.refs.map, {
        zoom: 12,
        center: {
            lat: this.props.lat,
            lng: this.props.lon
        }
    });
}

    render() {
        return <div ref="map" />
    }
}

export default GoogleMap;