import React, { useState, useEffect } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import { Link, navigate } from '@reach/router';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Logo from '../assets/images/logo.png';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    header: {
        background: 'linear-gradient(127deg, rgba(5,110,207,1) 0%, rgba(29,101,253,1) 28%, rgba(69,252,247,1) 100%)',
        marginBottom: '0',
    },
    grow: {
        flexGrow: 1,
    },
    logo: {
        display: 'flex',
        width: 'auto',
        justifyContent: 'space-between',
        alignItems: 'center',
        textDecoration: 'none',
    },
    logoImg: {
        width: '50px',
        height: 'auto',
    },
    title: {
        fontWeight: 'bold',
        fontSize: '30px',
        color: '#fff',
        marginLeft: '10px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
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
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
        color: '#fff',
    },
}));

export default function Header() {
    const classes = useStyles();
    const [searchQuery, setSearchQuery] = useState(0);

    const handleChange = (event: any) => {
        setSearchQuery(event.target.value);
    };

    useEffect(() => {
        if (searchQuery !== 0) {
            navigate(`/find/${searchQuery}`);
        }
    }, [searchQuery]);
    return (
        <div className={classes.grow} style={{ background: 'red', marginBottom: '0' }}>
            <AppBar position="static" className={classes.header}>
                <Toolbar>
                    <Link to="/" className={classes.logo}>
                        <img src={Logo} alt="No to Covid" className={classes.logoImg} />
                        <Typography className={classes.title}>Finder</Typography>
                    </Link>

                    <div className={classes.grow} />
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
                </Toolbar>
            </AppBar>
        </div>
    );
}
