import { colors, makeStyles } from "@material-ui/core";
import SideBar from '../components/sideBar';
import Box from '@mui/material/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        fontSize: '16px',
        fontFamily: 'Rubik, sans- serif',
        lineHeight: '1.7',
        color: '#5e5c7f',
        backgroundColor: '#f9f9ff',
        fontWeight: '400',
        textAlign: 'left',
    },
    sidebar: {
        maxWidth: '20%',
        height: '100vh',
    }
}));

export default function MainPage() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>

            </div>
            <div>
                <Box className={classes.sidebar}>
                    <SideBar />
                </Box >
            </div>
        </div>
    );
}