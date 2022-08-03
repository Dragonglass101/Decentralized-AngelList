import React, { useEffect, useState } from "react";

import { alpha, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

import DashboardIcon from '@material-ui/icons/Dashboard';
import SearchIcon from '@material-ui/icons/Search';
import ReceiptRoundedIcon from '@material-ui/icons/ReceiptRounded';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import MenuIcon from '@material-ui/icons/Menu';
import appleLogo from '../images/apple-logo.png'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';
import walletImg from '../images/wallet.png'

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
        backgroundColor: 'rgb(18,24,39)',
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

const CompanyNavbar = () => {
    const classes = useStyles();
    const [currentindex, setcurrentindex] = useState(-1)

    const currentLocation = window.location.pathname;
    console.log(currentLocation);

    document.body.style.background = 'rgb(250,250,252)';
    return (
        <>
            <div className={classes.root}>
                <Drawer
                    className={classes.drawer}
                    style={{ backgroundColor: 'rgb(18,24,39)', color: 'rgb(26,27,47)' }}
                    variant="persistent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    open={true}
                    anchor="left"
                >
                    {/* <div className={classes.toolbar} /> */}
                    {/* <div className="mx-1 mt-4 mb-4 d-flex justify-content-around align-items-center">
                        <div className="col-2">
                            <Avatar style={{ width: '30px', height: '30px' }} />
                        </div>
                        <h5 className=" col-7 font13 fw-bold m-0 text-white ps-3">Rayfan Tio S.</h5>
                        <ExitToAppIcon style={{ color: 'rgb(255 ,94, 94)', cursor: 'pointer' }} className="col-3" />
                    </div> */}
                    <List className="mx-auto" style={{ width: '90%' }}>
                        <svg width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg" className="css-2tcqb0 ms-3 mt-3 mb-3"><path fillRule="evenodd" clipRule="evenodd" d="M22.6744 4.50247L31.9038 9.66459C32.117 9.78381 32.2944 9.95738 32.4178 10.1674C32.5413 10.3775 32.6064 10.6164 32.6064 10.8597C32.6064 11.1031 32.5413 11.342 32.4178 11.5521C32.2944 11.7621 32.117 11.9357 31.9038 12.0549L22.6745 17.2172C22.0854 17.5467 21.4212 17.7198 20.7456 17.7198C20.0698 17.7198 19.4056 17.5467 18.8166 17.2172L9.5873 12.0549C9.37415 11.9357 9.1967 11.7621 9.0732 11.5521C8.94971 11.342 8.8846 11.1031 8.8846 10.8597C8.8846 10.6164 8.94971 10.3775 9.0732 10.1674C9.1967 9.95738 9.37415 9.78381 9.5873 9.66459L18.8166 4.50247C19.4056 4.17301 20.0698 4 20.7456 4C21.4212 4 22.0854 4.17301 22.6744 4.50247Z" fill="#5048E5"></path><path opacity="0.7" d="M22.6244 9.34853L35.8422 16.7415C36.0554 16.8607 36.2328 17.0343 36.3563 17.2443C36.4798 17.4544 36.5449 17.6933 36.5449 17.9366C36.5449 18.18 36.4798 18.419 36.3563 18.629C36.2328 18.8391 36.0554 19.0126 35.8422 19.1319L22.6244 26.5248C22.0355 26.8541 21.3712 27.0272 20.6956 27.0272C20.0199 27.0272 19.3557 26.8541 18.7667 26.5248L5.54893 19.1319C5.33578 19.0126 5.15833 18.8391 5.03483 18.629C4.91133 18.419 4.84623 18.18 4.84623 17.9366C4.84623 17.6933 4.91133 17.4544 5.03483 17.2443C5.15833 17.0343 5.33578 16.8607 5.54893 16.7415L18.7667 9.34853C19.3557 9.01916 20.0199 8.84615 20.6956 8.84615C21.3712 8.84615 22.0355 9.01916 22.6244 9.34853Z" fill="#5048E5"></path><path opacity="0.4" d="M22.9257 14.1939L41.2984 24.4703C41.5113 24.5894 41.6884 24.7626 41.8117 24.9724C41.935 25.182 42 25.4206 42 25.6636C42 25.9065 41.935 26.1451 41.8117 26.3548C41.6884 26.5645 41.5113 26.7378 41.2984 26.8568L22.9257 37.1329C22.3377 37.4618 21.6745 37.6346 21 37.6346C20.3254 37.6346 19.6623 37.4618 19.0743 37.1329L0.701542 26.8568C0.488743 26.7378 0.311581 26.5645 0.188286 26.3548C0.0649948 26.1451 0 25.9065 0 25.6636C0 25.4206 0.0649948 25.182 0.188286 24.9724C0.311581 24.7626 0.488743 24.5894 0.701542 24.4703L19.0743 14.1939C19.6623 13.8651 20.3254 13.6923 21 13.6923C21.6745 13.6923 22.3377 13.8651 22.9257 14.1939Z" fill="#5048E5"></path></svg>
                        {/* <Divider style={{ color: 'grey', backgroundColor: 'grey', variant: 'middle' }} /> */}
                        <div className=" py-3 ps-4 my-2" style={{ borderRadius: '5px', backgroundColor: 'rgb(25, 33, 48)' }}>
                            <h6 className="font15 menu-item-color mb-1">Acme Inc.</h6>
                            <h6 className="font10 m-0">Your tier: Premium</h6>
                        </div>

                        <Button className="mt-3 d-block w-100" variant="outlined" color="primary" data-bs-toggle="modal" data-bs-target="#RaiseFund">
                            Raise Fund
                        </Button>

                        {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#RaiseFund">
                            Launch demo modal
                        </button> */}

                        <div className="modal fade" id="RaiseFund" tabindex="-1" aria-labelledby="RaiseFundLabel" aria-hidden="true">
                            <div className="modal-dialog my-auto">
                                <div className="modal-content">
                                    <div className="modal-header bg-dark">
                                        <h5 className="modal-title" id="RaiseFundLabel">Raise Funds</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        {/* <div className="input-group mb-3">
                                            <span className="input-group-text">Investment</span>
                                            <input type="text" className="form-control" aria-label="Investment" />
                                            <span className="input-group-text">ꜩ</span>
                                        </div> */}

                                        <select className="form-select mb-3" aria-label="Default select example">
                                            <option selected>Select Investment Type</option>
                                            <option value="1">SAFE</option>
                                            <option value="2">Direct</option>
                                            <option value="3">SAFT</option>
                                        </select>

                                        <div className="input-group mb-3">
                                            <span className="input-group-text">Ownership</span>
                                            <input type="text" className="form-control" aria-label="Ownership" />
                                            <span className="input-group-text">%</span>
                                        </div>

                                        <div className="input-group mb-3">
                                            <span className="input-group-text">Valuation Cap</span>
                                            <input type="text" className="form-control" aria-label="Valuation Cap" />
                                            <span className="input-group-text">ꜩ</span>
                                        </div>




                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn background-primary text-white">Raise</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Divider className="mt-3" style={{ color: 'grey', backgroundColor: 'grey', marginBottom: 'auto' }} />
                        <h6 className="font10 ps-2 mt-4">GENERAL</h6>
                        <Link to="/dashboard-company" style={{ color: "inherit", textDecoration: 'unset' }}>
                            <ListItem
                                className={(currentLocation === "/dashboard-company" ? "highlight-karo" : "")}
                                style={{ marginBottom: '10px' }} button key='Dashboard'>
                                <HomeRoundedIcon className={(currentLocation === "/dashboard-company" ? "green-karo" : "") + " menu-icon-color"} />
                                {/* <ListItemText className="ms-2" primary='Dashboard'/> */}
                                <span className={(currentLocation === "/dashboard-company" ? "green-karo" : "") + " font13 fw-bold ms-2 menu-item-color"}>Dashboard</span>
                            </ListItem>
                        </Link>

                        <Link to="/chatroom" style={{ color: "inherit", textDecoration: 'unset' }}>
                            <ListItem
                                className={(currentLocation === "/chatroom" ? "highlight-karo" : "")}
                                style={{ marginBottom: '10px' }} button key='Chat Room'>
                                <ForumRoundedIcon className={(currentLocation === "/chatroom" ? "green-karo" : "") + " menu-icon-color"} />
                                {/* <ListItemText className="ms-2" primary='Dashboard'/> */}
                                <span className={(currentLocation === "/chatroom" ? "green-karo" : "") + " font13 fw-bold ms-2 menu-item-color"}>Chat Room</span>
                            </ListItem>
                        </Link>

                        <Link to="/make-payment" style={{ color: "inherit", textDecoration: 'unset' }}>
                            <ListItem
                                className={(currentLocation === "/make-payment" ? "highlight-karo" : "")}
                                style={{ marginBottom: '10px' }} button key='Startups List'>
                                <AccountBalanceWalletIcon className={(currentLocation === "/make-payment" ? "green-karo" : "") + " menu-icon-color"} />
                                {/* <ListItemText className="ms-2" primary='Dashboard'/> */}
                                <span className={(currentLocation === "/make-payment" ? "green-karo" : "") + " font13 fw-bold ms-2 menu-item-color"}>Make Payment</span>
                            </ListItem>
                        </Link>

                        <Link to="/profile-company" style={{ color: "inherit", textDecoration: 'unset' }}>
                            <ListItem
                                className={(currentLocation === "/profile-company" ? "highlight-karo" : "")}
                                style={{ marginBottom: '10px' }} button key='Startups List'>
                                <AccountCircleRoundedIcon className={(currentLocation === "/profile-company" ? "green-karo" : "") + " menu-icon-color"} />
                                {/* <ListItemText className="ms-2" primary='Dashboard'/> */}
                                <span className={(currentLocation === "/profile-company" ? "green-karo" : "") + " font13 fw-bold ms-2 menu-item-color"}>Company Profile</span>
                            </ListItem>
                        </Link>

                        <Link to="#" style={{ color: "inherit", textDecoration: 'unset' }}>
                            <ListItem className="background-selected" style={{ marginBottom: '10px' }} button key='Cart'>
                                <ShoppingCartRoundedIcon className="menu-icon-color" />
                                {/* <ListItemText className="ms-2" primary='Dashboard' /> */}
                                <span className="font13 fw-bold ms-2 menu-item-color">Cart</span>
                            </ListItem>
                        </Link>



                    </List>

                    <List className="mx-auto" style={{ width: '90%' }}>
                        <div className="d-flex py-3 ps-4 my-2" style={{ borderRadius: '5px', backgroundColor: 'rgb(25, 33, 48)' }}>
                            <div style={{ width: '50%' }}>
                                <img style={{ width: '50%', height: 'fit-content' }} src={walletImg} />
                            </div>
                            <div>
                                <h6 className="font15 menu-item-color mb-1">Wallet</h6>
                                <h6 className="font10 m-0">36,000ꜩ</h6>
                            </div>
                        </div>
                    </List>




                    <Divider className="mb-3" style={{ color: 'grey', backgroundColor: 'grey', marginBottom: 'auto' }} />

                    <div className="mx-3 mb-5">
                        <h6 className="font15 fw-semibold menu-item-color">Need Help ?</h6>
                        <h6 className="font13">Check Our Docs</h6>
                        <Button className="mt-3 d-block w-100" variant="outlined" color="primary">
                            Documentation
                        </Button>
                    </div>
                </Drawer>
            </div>
        </>
    );
};

export default CompanyNavbar;


