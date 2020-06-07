import React, { useState, useEffect } from 'react';

import { makeStyles, fade } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import SearchIcon from '@material-ui/icons/Search';
import { navigate } from '@reach/router';

import { globalStyles } from '../assets/css/globalStyle';
import bgImage from '../assets/images/isometric-city-buildings-set_1284-24090-removebg.png';

const useStyles = makeStyles((theme) => ({
    body: {
        background: 'linear-gradient(127deg, rgba(5,110,207,1) 0%, rgba(29,101,253,1) 28%, rgba(69,252,247,1) 100%)',
        height: '90vh',
        minHeight: '90vh',
        maxWidth: '100vw',
        overflowX: 'hidden',
    },
    title: {
        display: 'block',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        [theme.breakpoints.up('xs')]: {
            padding: '60px',
        },
        color: '#fff',
        fontWeight: 'bolder',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginTop: '20px',
        width: '80%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
        },
        color: '#fff',
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        height: '65px',
        color: '#fff',
    },
    bgImageCont: {
        width: '100%',
        [theme.breakpoints.up('xs')]: {
            textAlign: 'center',
        },
    },
    bgImage: {
        width: '100%',
        [theme.breakpoints.up('xs')]: {
            width: '80%',
            textAlign: 'center',
        },
    },
}));

const Home: React.FunctionComponent = (props) => {
    const classes = useStyles();
    const globalStyle = globalStyles();
    const [searchQuery, setSearchQuery] = useState(0);
    const promptToUseNavigator = () => {
        navigator.geolocation.getCurrentPosition((position: any) => {});
    };
    const handleChange = (event: any) => {
        setSearchQuery(event.target.value);
    };
    useEffect(() => {
        promptToUseNavigator();
    }, []);
    useEffect(() => {
        if (searchQuery !== 0) {
            navigate(`/find/${searchQuery}`);
        }
    }, [searchQuery]);
    return (
        <div className={classes.body}>
            <Grid container spacing={3} className={globalStyle.grow}>
                <Grid item xs={12} sm={6} className={globalStyle.grow}>
                    <div className={[globalStyle.flexCenterCenter, globalStyle.flexColumn, globalStyle.grow].join(' ')}>
                        <Typography className={classes.title} variant="h2">
                            Find nearby hospitals
                        </Typography>

                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <Select
                                labelId="demo-simple-select-label"
                                id="select"
                                value={searchQuery}
                                onChange={handleChange}
                                className={classes.inputInput}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value={0}>Select Radius</MenuItem>
                                <MenuItem value={500}>Five Hundred</MenuItem>
                                <MenuItem value={700}>Seven Hundred</MenuItem>
                                <MenuItem value={1000}>One Thousand</MenuItem>
                                <MenuItem value={1500}>One Thousand Five Hundred</MenuItem>
                                <MenuItem value={2000}>Two Thousand</MenuItem>
                                <MenuItem value={2500}>Two Thousand Five Hundred</MenuItem>
                            </Select>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.bgImageCont}>
                    <img src={bgImage} alt="" className={classes.bgImage} />
                </Grid>
            </Grid>

            <div style={{ textAlign: 'right' }}></div>
        </div>
    );
};

export default Home;
