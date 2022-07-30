import React, { useEffect, useState } from "react";

import { alpha, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import DashboardIcon from '@material-ui/icons/Dashboard';
import SearchIcon from '@material-ui/icons/Search';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import MenuIcon from '@material-ui/icons/Menu';
import appleLogo from '../images/apple-logo.png'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { connectWallet, getActiveAccount, disconnectWallet } from "../utils/wallet";
import { Link, useNavigate } from "react-router-dom";
import { Wallet } from "@taquito/taquito";
import { Avatar } from "@material-ui/core";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: 'rgb(26,27,47)',
        color: 'grey'
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
}));

const InvestorNavbar = () => {
    const classes = useStyles();
    const [currentindex, setcurrentindex] = useState(-1)

    const currentLocation = window.location.pathname;
    return (
        <>
            <div className={classes.root}>
                <Drawer
                    className={classes.drawer}
                    style={{ backgroundColor: 'rgb(26,27,47)', color: 'rgb(26,27,47)' }}
                    variant="persistent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    open={true}
                    anchor="left"
                >
                    {/* <div className={classes.toolbar} /> */}
                    <div className="mx-1 mt-4 mb-4 d-flex justify-content-around align-items-center">
                        <div className="col-2">
                            <Avatar style={{ width: '30px', height: '30px' }} />
                        </div>
                        <h5 className=" col-7 font13 fw-bold m-0 text-white ps-3">Rayfan Tio S.</h5>
                        <ExitToAppIcon style={{ color: 'rgb(255 ,94, 94)', cursor: 'pointer' }} className="col-3" />
                    </div>
                    <Divider style={{ color: 'grey', backgroundColor: 'grey', variant: 'middle' }} />
                    <List>
                        <Link to="/dashboard-investor" style={{ color: "inherit" }}>
                            <ListItem className={currentLocation === "/dashboard-investor" ? "background-selected" : ""} button key='Dashboard' onClick={() => { setcurrentindex(1) }}>
                                <DashboardIcon />
                                <ListItemText className="ms-2" primary='Dashboard' />
                            </ListItem>
                        </Link>
                        <Link to="/dashboard-investor" style={{ color: "inherit" }}>
                            <ListItem className={currentLocation === "/dashboard-investor" ? "background-selected" : ""} button key='Dashboard' onClick={() => { setcurrentindex(2) }}>
                                <DashboardIcon />
                                <ListItemText className="ms-2" primary='Dashboard' />
                            </ListItem>
                        </Link>
                        <Link to="/dashboard-investor" style={{ color: "inherit" }}>
                            <ListItem className={currentLocation === "/dashboard-investor" ? "background-selected" : ""} button key='Dashboard' onClick={() => { setcurrentindex(3) }}>
                                <DashboardIcon />
                                <ListItemText className="ms-2" primary='Dashboard' />
                            </ListItem>
                        </Link>
                        <Link to="/dashboard-investor" style={{ color: "inherit" }}>
                            <ListItem className={currentLocation === "/dashboard-investor" ? "background-selected" : ""} button key='Dashboard' onClick={() => { setcurrentindex(4) }}>
                                <DashboardIcon />
                                <ListItemText className="ms-2" primary='Dashboard' />
                            </ListItem>
                        </Link>
                        <Link to="/dashboard-investor" style={{ color: "inherit" }}>
                            <ListItem className={currentLocation === "/dashboard-investor" ? "background-selected" : ""} button key='Dashboard' onClick={() => { setcurrentindex(5) }}>
                                <DashboardIcon />
                                <ListItemText className="ms-2" primary='Dashboard' />
                            </ListItem>
                        </Link>
                    </List>
                    <Divider style={{ color: 'grey', backgroundColor: 'grey', marginBottom: 'auto' }} />
                    <List>
                        {['Help and Support'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </div>
        </>
    );
};

export default InvestorNavbar;


