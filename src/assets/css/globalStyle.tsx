import { makeStyles } from '@material-ui/core/styles';

export const globalStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

    flexCenterCenter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    flexColumn: {
        flexDirection: 'column',
    },
    grow: {
        flexGrow: 1,
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            height: 'auto',
        },
    },
    pageWrapper: {
        backgroundColor: '#f5f5f5',
        maxWidth: '100vw',
        overflowX: 'hidden',
        minHeight: '100vh',
        paddingTop: '50px',
    },
    loadingPage: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: '20px',
        padding: '20px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '40px',
        },
        color: '#1F6DFD',
        fontWeight: 'bolder',
        textAlign: 'center',
    },
}));
