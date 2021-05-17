import React, { useEffect, useRef } from 'react';
import Header from './common/header';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';

function TaxiMap({ goToPage }) {
    
    const mapContainer = useRef(null);

    mapboxgl.accessToken = 'pk.eyJ1Ijoic2hha2VzcGVhcjIyMTEiLCJhIjoiY2tvanc3bXF2MDJqaTJwbnBuY3o4ZG52cSJ9.wixdaE4ceQASYslGCy6uAw';
    
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            zoom: 8,
            center: [30.27,60]
        });
    })
    const mapStyle = {
        position: 'absolute',
        top: '68px',
        bottom: '0',
        right: '0',
        left: '0',
        width: '100%'
    }

    return (
        <div>
            <Header goToPage={goToPage} />
            <div ref={mapContainer} style={mapStyle}></div>
        </div>
    )
};

TaxiMap.propTypes = {
    goToPage: PropTypes.func,
};

export default TaxiMap;