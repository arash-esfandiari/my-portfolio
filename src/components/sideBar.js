import { makeStyles, withTheme } from "@material-ui/core";
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ChatIcon from '@mui/icons-material/Chat';

const useStyles = makeStyles((theme) => ({
    header: {
        display: 'flex',
        color: '#fff',
        textAlign: 'left',
        border: '1px solid hsla(0,0%,100%,.1)',
        backgroundColor: '#353353',
        position: 'fixed',
        overflowY: 'auto',
        overflowX: 'hidden',
        height: '100vh',
        width: '13%',
        zIndex: '1',
        flexDirection: 'column',
        padding: '20px',
        font: 'Rubik',
    },
    logo: {
        width: '100%',
    },
    nav:
    {
        display: 'block',
        listStyleType: 'none',
        padding: '130px 10px',
        height: '100%',
        "& > *": {
            padding: '8px',
            position: 'relative',
        },

    },
    navlink: {
        display: 'flex',
        color: 'white',
        fontSize: '18px',
        fontWeight: 'bold',
        textDecoration: 'none',
        '&:hover': {
            color: 'yellow',
        },
    },
    nav_icon: {
        display: 'flex',
        marginRight: '20px',
        color: 'yellow',
    },
    footer: {
        paddingTop: '70%',
        color: '#9c9ab3',
        fontSize: '14px',
    },
}));

export default function SideBar() {
    const classes = useStyles();
    const currentYear = new Date().getFullYear();
    return (
        <>
            <Box className={classes.header}>
                <div>
                    <a href="/"><img className={classes.logo} src={process.env.PUBLIC_URL + '/img/Esfandiari-logo2.png'} alt="logo" /></a>
                </div>
                <div>
                    <nav>
                        <ul className={classes.nav}>
                            <li><a className={classes.navlink} href="/"><i className={classes.nav_icon}><HomeIcon /></i>Home</a></li>
                            <li><a className={classes.navlink} href=""><i className={classes.nav_icon}><PersonIcon /></i>About</a></li>
                            <li><a className={classes.navlink} href=""><i className={classes.nav_icon}><BusinessCenterIcon /></i>Services</a></li>
                            <li><a className={classes.navlink} href=""><i className={classes.nav_icon}><SchoolIcon /></i>Experience</a></li>
                            <li><a className={classes.navlink} href=""><i className={classes.nav_icon}><LightbulbIcon /></i>Projects</a></li>
                            <li><a className={classes.navlink} href=""><i className={classes.nav_icon}><ChatIcon /></i>Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div className={classes.footer}>
                    <span> © {currentYear} Arash Esfandiari.</span>
                </div>
            </Box >
        </>
    );
}