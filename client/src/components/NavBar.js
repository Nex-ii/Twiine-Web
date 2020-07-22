import React, { Component } from 'react';
import {Link} from "react-router-dom";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import '../CSS/NavBar.css';
import Login from '../components/Login.js';
const drawerWidth = '100vw';

export default function NavBar(){
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return(
        <div id="wrapper-navbar">
            <div className={classes.root}>
            <div id="allClickable">
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
                })}
                style={{backgroundColor: "transparent", boxShadow: '0 0 0 0'}}
            >
                <div>
                <Toolbar>
                <Typography variant="h2" noWrap className={classes.title}>
                    <a href="/" id="mainLogo">
                        Secret Title
                    </a>
                </Typography>
                <Button id="loginButton">
                    <Link to="/login">
                    Login
                    </Link>
                </Button>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="end"
                    onClick={handleDrawerOpen}
                    className={clsx(open && classes.hide)}
                >
                    <MenuIcon style={{fontSize: 110}} />
                </IconButton>
                </Toolbar>
                </div>
            </AppBar>
            <Drawer
            className={classes.drawer}
            variant="temporary"
            anchor="top"
            open={open}
            classes={{
            paper: classes.drawerPaper,
            }}
            >
            <div className={classes.drawerHeader}>
            <Typography variant="h2" nowrap className={classes.title}>
            <a href="/" id="mainLogo" style={{paddingLeft: "12px", color: "red"}}>
                Secret Title
            </a>
            </Typography>
            <Button id="insideLoginButton">
                <Link to="/login">
                Login
                </Link>
            </Button>
            <IconButton onClick={handleDrawerClose}>
                <ClearIcon style={{fontSize: 110}}>
                </ClearIcon>
            </IconButton>
            </div>
            <Divider />
            <div id="wholeNav">
                {
                /*
                    This section will be representing the company section. Essentially a section is like a box
                */
                }
                <section id="section">
                    <h4 id="sectionTitle">Company</h4>
                    {['About Us', 'Contact Us'].map((text, index) => (
                        //This part gets whatever index is chosen from the arrow function (0 or 1) and checks if it's 0 after using the modulus operator
                        //then the syntax ":" afterwards represents the choices, so if it's 0, then it runs the first index (about us), 2nd index is "contact us"
                        <Typography>{index % 2 === 0 ? 
                        <li id="sectionContent"><Link to="/about" id="listContent" onClick={handleDrawerClose}>{text}</Link></li>
                        : 
                        <li id="sectionContent"><Link to="/contact" id="listContent" onClick={handleDrawerClose}>{text}</Link></li>}
                        </Typography>
                    ))}
                </section>
                {
                /*
                    This section will be representing the Public Relations section. Essentially a section is like a box
                */
                }
                <section id="section">
                <h4 id="sectionTitle">Public Relations</h4>
                {['Community', 'Blog'].map((text, index) => (
                    //This part gets whatever index is chosen from the arrow function (0 or 1) and checks if it's 0 after using the modulus operator
                    //then the syntax ":" afterwards represents the choices, so if it's 0, then it runs the first index (Community), 2nd index is "blog"
                    <Typography>{index % 2 === 0 ? 
                        <li id="sectionContent"><Link to="/community" id="listContent" onClick={handleDrawerClose}>{text}</Link></li>
                        : 
                        <li id="sectionContent"><Link to="/blog" id="listContent" onClick={handleDrawerClose}>{text}</Link></li>}
                    </Typography>
                ))}
                </section>
                {
                /*
                    This section will be representing the mobile app section. Essentially a section is like a box
                */
                }
                <section id="section">
                <h4 id="sectionTitle">Mobile App</h4>
                <Typography>
                    <li id="sectionContent"><Link to="/instructions" id="listContent" onClick={handleDrawerClose}>How To Use</Link></li>
                </Typography>
                </section>
            </div>
            <Divider/>
            </Drawer>
            </div> 
        </div>
        </div>
    );
}
const useStyles = makeStyles((theme) => ({
    root: {
    display: 'flex',
    
    },

    appBar: {
    // transition: theme.transitions.create(['margin', 'width'], {
    //     easing: theme.transitions.easing.sharp,
    //     duration: theme.transitions.duration.leavingScreen,
    // }),
    },

    appBarShift: {
    // width: `calc(100% - ${drawerWidth}px)`,
    // transition: theme.transitions.create(['margin', 'width'], {
    //     easing: theme.transitions.easing.easeOut,
    //     duration: theme.transitions.duration.enteringScreen,
    // }),
    marginRight: drawerWidth,
    },

    title: {
        flexGrow: 1,
        alignContent: "Left"
    },

    hide: {
        display: 'none',
    },

    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },

    drawerPaper: {
        width: drawerWidth,
    },

    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1.5),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },

    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
    }),
        marginRight: -drawerWidth,
        
    },

    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
    }),
        marginRight: 0,
    },
}));

