import React, { useState, useEffect } from 'react';
import { globalStyles } from '../assets/css/globalStyle';
import CircularProgress from '@material-ui/core/CircularProgress';
import Map from '../components/MapContainer';
import { Typography } from '@material-ui/core';

const SearchHospitals: React.FunctionComponent = (props: any) => {
    const globalStyle = globalStyles();
    const [radius] = useState(props.radius);
    const [isReady, setIsReady] = useState(false);
    useEffect(() => {
        const time = setTimeout(() => {
            setIsReady(true);
        }, 2000);
        return () => {
            clearTimeout(time);
        };
    }, []);

    return (
        <div className={globalStyle.pageWrapper}>
            <Typography className={globalStyle.title} variant="h2">
                Nearby Hospitals
            </Typography>
            {isReady ? (
                <Map radius={radius} />
            ) : (
                <div className={globalStyle.loadingPage}>
                    <CircularProgress />
                </div>
            )}
        </div>
    );
};

export default SearchHospitals;
