import React, { useEffect, useState } from "react";

import { alpha, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

import AssessmentRoundedIcon from '@material-ui/icons/AssessmentRounded';

import walletImg from '../images/wallet.png'

import { getActiveAccount } from "../utils/wallet";
import { Link } from "react-router-dom";
import { getBalance, getRootStorage, getKeyBigMapByID } from "../utils/Api";
import { useRef } from "react";
import { raiseFunds } from "../utils/operation";


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
    const [loading, setLoading] = useState(false);
    const [balance, setbalance] = useState(null);
    const [storage, setstorage] = useState();
    const [fundAlreadyRaised, setfundAlreadyRaised] = useState(null);
    const [name, setname] = useState();
    const [photoCID, setphotoCID] = useState();

    const companyBigMapID = 74523;
    const investorBigMapID = 74527;

    const investementRaised = useRef();
    const ownershipRaised = useRef();
    const typeOfInvestement = useRef();

    const [wallet, setWallet] = useState(null);
    useEffect(() => {
        if (!wallet) {
            (async () => {
                const activeAccount = await getActiveAccount();
                setWallet(activeAccount);
            })();
        }
        const retrieveStorage = async () => {
            const st = await getRootStorage();
            console.log(st);
            setstorage(st);
        }
        if(!storage)
            retrieveStorage();
    }, []);

    useEffect(() => {
        const retrieveBalance = async () => {
            const bal = await getBalance(wallet.address);
            setbalance(bal)
        }
        const getProfile = async () => {
            const companyDetails = await getKeyBigMapByID(companyBigMapID, wallet.address);
            const companyProfileHash = companyDetails.value["company_profile_Id"];
            console.log(companyProfileHash);
            const companyJSON = await fetchJSON(`https://ipfs.io/ipfs/${companyProfileHash}`);
            console.log(companyJSON);
            setname(companyJSON.name);
            setphotoCID(companyJSON.photoCID);
        }
        if (wallet && !balance){
            retrieveBalance();
            getProfile();
        }
    }, [wallet])

    async function fetchJSON(url) {
        const response = await fetch(url);
        const jsonfile = await response.json();
        return jsonfile;
    }

    async function handleRaiseFund() {
        console.log(typeof Number(investementRaised.current.value), typeof Number(ownershipRaised.current.value), typeof typeOfInvestement.current.value);
        setLoading(true)
        try {
            await raiseFunds(Number(investementRaised.current.value), Number(ownershipRaised.current.value), typeOfInvestement.current.value);
            alert("Fund has been raised");
            window.location.reload();
        } catch (error) {
            alert("Transaction Failed:", error.message);
        }

        setLoading(false);
    }

    async function checkFundRaised(){
        for( let companyAddress of storage["fundraised_companies"]){
            if(wallet.address === companyAddress)
                setfundAlreadyRaised(true);
            else
                setfundAlreadyRaised(false);
        }
    }
    if(wallet && storage && fundAlreadyRaised === null){
        checkFundRaised();
    }


    const currentLocation = window.location.pathname;
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
                        
                        {/* <Divider style={{ color: 'grey', backgroundColor: 'grey', variant: 'middle' }} /> */}
                        <div className="d-flex py-3 ps-4 my-2" style={{ borderRadius: '5px', border:'1px solid rgba(63, 81, 181, 0.5)' }}>
                        {photoCID ?
                            <img src={`https://ipfs.io/ipfs/${photoCID}`} className="me-3" style={{width: "42px", height: "42px", borderRadius:"50%"}}/> : null}
                            <div>
                                <h6 className="font15 menu-item-color mb-1">{name}</h6>
                                <h6 className="font10 m-0">Bangalore, Karnataka</h6>
                            </div>
                            
                        </div>

                        {fundAlreadyRaised ?
                        <Button className="mt-3 d-block w-100" variant="outlined" color="primary">
                            Fund Raised
                        </Button> : 
                        <Button className="mt-3 d-block w-100" variant="outlined" color="primary" data-bs-toggle="modal" data-bs-target="#RaiseFund">
                            Raise Fund
                        </Button>}

                        <div className="modal fade" id="RaiseFund" tabIndex="-1" aria-labelledby="RaiseFundLabel" aria-hidden="true">
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

                                        <select ref={typeOfInvestement} className="form-select mb-3" aria-label="Default select example">
                                            <option disabled>Select Investment Type</option>
                                            <option value="SAFE">SAFE</option>
                                            <option value="DirectEquity">Direct</option>
                                            <option value="SAFT">SAFT</option>
                                        </select>

                                        <div className="input-group mb-3">
                                            <span className="input-group-text">Ownership</span>
                                            <input ref={ownershipRaised} type="number" className="form-control" aria-label="Ownership" />
                                            <span className="input-group-text">%</span>
                                        </div>

                                        <div className="input-group mb-3">
                                            <span className="input-group-text">Investement</span>
                                            <input ref={investementRaised} type="number" className="form-control" aria-label="Valuation Cap" />
                                            <span className="input-group-text">ꜩ</span>
                                        </div>

                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button onClick={handleRaiseFund} type="button" className="btn background-primary text-white">{loading ? "loading..." : "Raise"}</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <List className="mx-auto" style={{ width: '100%' }}>
                            <div className="d-flex py-3 ps-4 my-2" style={{ borderRadius: '5px', backgroundColor: 'rgb(25, 33, 48)' }}>
                                <div style={{ width: '50%' }}>
                                    <img style={{ width: '50%', height: 'fit-content' }} src={walletImg} />
                                </div>
                                <div>
                                    <h6 className="font15 menu-item-color mb-1">Wallet</h6>
                                    <h6 className="font13 m-0"> {(balance - (balance % 10000)) / 1000000} ꜩ</h6>
                                </div>
                            </div>
                        </List>

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

                        <Link to="/add-founders" style={{ color: "inherit", textDecoration: 'unset' }}>
                            <ListItem
                                className={(currentLocation === "/add-founders" ? "highlight-karo" : "")}
                                style={{ marginBottom: '10px' }} button key='Add Founders'>
                                <AccountBalanceWalletIcon className={(currentLocation === "/add-founders" ? "green-karo" : "") + " menu-icon-color"} />
                                {/* <ListItemText className="ms-2" primary='Dashboard'/> */}
                                <span className={(currentLocation === "/add-founders" ? "green-karo" : "") + " font13 fw-bold ms-2 menu-item-color"}>Add Members</span>
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

                        <Link to="/cap-table" style={{ color: "inherit", textDecoration: 'unset' }}>
                            <ListItem
                                className={(currentLocation === "/cap-table" ? "highlight-karo" : "")}
                                style={{ marginBottom: '10px' }} button key='Startups List'>
                                <AssessmentRoundedIcon className={(currentLocation === "/cap-table" ? "green-karo" : "") + " menu-icon-color"} />
                                {/* <ListItemText className="ms-2" primary='Dashboard'/> */}
                                <span className={(currentLocation === "/cap-table" ? "green-karo" : "") + " font13 fw-bold ms-2 menu-item-color"}>Cap Table</span>
                            </ListItem>
                        </Link>


                        {/* EMPLOYEE SECTION  */}
                        <Divider className="mt-3" style={{ color: 'grey', backgroundColor: 'grey', marginBottom: 'auto' }} />
                        <h6 className="font10 ps-2 mt-4">EMPLOYEE</h6>

                        {/* <Link to="/employees-appointed" style={{ color: "inherit", textDecoration: 'unset' }}>
                            <ListItem
                                className={(currentLocation === "/employees-appointed" ? "highlight-karo" : "")}
                                style={{ marginBottom: '10px' }} button key='Startups List'>
                                <PeopleAltIcon className={(currentLocation === "/employees-appointed" ? "green-karo" : "") + " menu-icon-color"} />
                                <span className={(currentLocation === "/employees-appointed" ? "green-karo" : "") + " font13 fw-bold ms-2 menu-item-color"}>Employee Details</span>
                            </ListItem>
                        </Link> */}

                        <Link to="/hire-employees" style={{ color: "inherit", textDecoration: 'unset' }}>
                            <ListItem
                                className={(currentLocation === "/hire-employees" ? "highlight-karo" : "")}
                                style={{ marginBottom: '10px' }} button key='Startups List'>
                                <PersonAddIcon className={(currentLocation === "/hire-employees" ? "green-karo" : "") + " menu-icon-color"} />
                                {/* <ListItemText className="ms-2" primary='Dashboard'/> */}
                                <span className={(currentLocation === "/hire-employees" ? "green-karo" : "") + " font13 fw-bold ms-2 menu-item-color"}>Hire Employees</span>
                            </ListItem>
                        </Link>



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


