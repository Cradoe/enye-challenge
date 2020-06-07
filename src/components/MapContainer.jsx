/*global google*/
import React from 'react';
import { compose, withProps, withHandlers, withState } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

var userSpec = {
    lat: 6.557607,
    long: 3.330581,
    radius: '500',
};
navigator.geolocation.getCurrentPosition((position) => {
    userSpec.lat = position.coords.latitude;
    userSpec.long = position.coords.longitude;
});
const MyMapComponent = compose(
    withProps({
        googleMapURL:
            'https://maps.googleapis.com/maps/api/?key=AIzaSyCtEBEcVChw47Ik3W-Y1qRS_vB-VwxjnCI?v=3.exp&libraries=geometry,drawing,places',
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `600px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
    withState('places', 'updatePlaces', ''),
    withHandlers(() => {
        const refs = {
            map: undefined,
        };

        return {
            onMapMounted: () => (ref) => {
                refs.map = ref;
            },
            fetchPlaces: ({ updatePlaces }) => {
                // const bounds = refs.map.getBounds();
                const service = new google.maps.places.PlacesService(
                    refs.map.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                );
                var pyrmont = new google.maps.LatLng(userSpec.lat, userSpec.long);

                const request = {
                    // bounds: bounds,
                    location: pyrmont,
                    radius: userSpec.radius,
                    type: ['hospital'],
                };
                service.nearbySearch(request, (results, status) => {
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        updatePlaces(results);
                    }
                });
            },
        };
    }),
)((props) => {
    userSpec.radius = props.radius;
    return (
        <GoogleMap
            onTilesLoaded={props.fetchPlaces}
            ref={props.onMapMounted}
            onBoundsChanged={props.fetchPlaces}
            defaultZoom={15}
            defaultCenter={{ lat: userSpec.lat, lng: userSpec.long }}
        >
            {props.places &&
                props.places.map((place, i) => (
                    <Marker
                        key={i}
                        position={{ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }}
                    />
                ))}
        </GoogleMap>
    );
});

export default class MyFancyComponent extends React.PureComponent {
    render() {
        return <MyMapComponent radius={this.props.radius} />;
    }
}
