import React, { useState, useEffect } from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import Navbar from './CompanyNavbar';
import NavFloating from './NavFloating';

import PaymentIcon from '@material-ui/icons/Payment';
import ThumbDownRoundedIcon from '@material-ui/icons/ThumbDownRounded';
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded';

import { getActiveAccount } from '../utils/wallet';

//Transaction Debit/credit/pending

import SearchIcon from '@material-ui/icons/Search';
import TelegramIcon from '@material-ui/icons/Telegram';
import { getKeyBigMapByID } from '../utils/Api';

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
        padding: theme.spacing(0),
    },
    padded: {
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

export const ChatRoom = () => {
    const classes = useStyles();
    const companyBigMapID = 64865;
    const investorBigMapID = 64867;

    const [wallet, setWallet] = useState(null);
    const [sendersList, setsendersList] = useState(null);

    useEffect(() => {
        if(!wallet){
            (async () => {
            const activeAccount = await getActiveAccount();
            setWallet(activeAccount);
        })();}
      }, []);

    async function fetchJSON(url) {
        const response = await fetch(url);
        const jsonfile = await response.json();
        return jsonfile;
    }
    
    async function makeSendersList(){
        const companyDetails = await getKeyBigMapByID(companyBigMapID, wallet.address);
        const sendersList = companyDetails.value["request_from_investor"]

        const tempSenderlist = [];
        for(let sender of sendersList){

            /* This line needs to be deleted */
            if(sender.investor === wallet.address) continue;

            const investorDetails = await getKeyBigMapByID(investorBigMapID, sender.investor);
            const investorProfileHash = investorDetails.value["investor_profile_Id"];

            const investorJSON = await fetchJSON(`https://ipfs.io/ipfs/${investorProfileHash}`);

            tempSenderlist.push(
                <div key={sender.investor}>
                    <div className='row p-3'>
                        <div className='col-3'>
                            <Avatar />
                        </div>
                        <div className='col-7'>
                            <h6 className='m-0'>{investorJSON.name}</h6>
                            <span className='text-secondary font13'>Type a message</span>
                        </div>
                        <div className='col-2'>
                            <span className='text-secondary font13'></span>
                        </div>
                    </div>

                    <Divider />
                </div>
            )
        }
        setsendersList(tempSenderlist);
    }

    if(wallet && !sendersList){
        makeSendersList();
    }

    return (
        <>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                </AppBar>
                <Navbar />
                <main className={classes.content}>

                    <NavFloating />

                    <div className={classes.padded}>
                        <div className='container shadow p-3 rounded15 h-100 d-flex'>
                            <div className='p-3' style={{ width: '40%' }}>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h3>Chats</h3>
                                    {/* <Button style={{ textTransform: 'capitalize' }} variant='contained' color='primary'>Add Member</Button> */}
                                </div>
                                <div className="input-group shadow-sm mt-3 w-100" style={{ width: '90%', overflow: 'hidden', borderColor: 'rgb(18, 24, 39)' }}>
                                    <input style={{ border: '0px' }} type="text" className="form-control bg-white" placeholder="Search Contacts" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button className="btn background-purplepink" type="button" id="button-addon2">
                                        <SearchIcon style={{ color: 'white' }} />
                                    </button>
                                </div>
                                <div className='container shadow mt-4 rounded15' style={{ overflow: 'auto', height: '380px' }}>
                                  {sendersList}
                                </div>
                            </div>

                            {/* When There is No Conversation Clicked */}
                            {/* <div className='shadow-sm m-3 p-3 d-flex align-items-center justify-content-center flex-column' style={{ width: '60%' }}>
                                <div className='background-purplepink p-3 m-3 rounded-circle'>
                                    <ForumRoundedIcon className='text-white' />
                                </div>
                                <span className='text-center m-0 text-secondary'>Start a Meaningful Converstation !</span>
                            </div> */}

                            {/* When There is Ongoing Conversation */}
                            <div className='shadow-sm m-3 p-3 rounded15 bg-white' style={{ width: '60%', height: '505px' }}>
                                <div id='chat-window' style={{ height: '85%', overflow: 'auto' }}>
                                    <div className='w-75' id='left-side-chat'>
                                        <div className='d-flex my-3'>
                                            <div className='text-center'>
                                                <Avatar />
                                                <span className='font13 text-dark'>09:00</span>
                                            </div>
                                            <div className='ms-3 background-light d-flex align-items-center p-3 text-dark left-chat'>
                                                <span>Hi there, how are you ?</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='w-75' id='left-side-chat'>
                                        <div className='d-flex my-3'>
                                            <div className='text-center'>
                                                <Avatar />
                                                <span className='font13 text-dark'>09:00</span>
                                            </div>
                                            <div className='ms-3 background-light d-flex align-items-center p-3 text-dark left-chat'>
                                                <span>Hi there, how are you ?</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='w-75' id='left-side-chat'>
                                        <div className='d-flex my-3'>
                                            <div className='text-center'>
                                                <Avatar />
                                                <span className='font13 text-dark'>09:00</span>
                                            </div>
                                            <div className='ms-3 background-light d-flex align-items-center p-3 text-dark left-chat'>
                                                <span>Hi there, how are you ?</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='w-75' id='left-side-request'>
                                        <div className='d-flex my-3'>
                                            <div className='text-center'>
                                                <Avatar />
                                                <span className='font13 text-dark'>09:00</span>
                                            </div>
                                            <div className='ms-3 p-4 text-dark left-chat background-chat-request'>
                                                <div className='mb-3'>
                                                    <div className='d-flex justify-content-between align-items-center text-light'>
                                                        <h6>Ownership</h6>
                                                        <span>13%</span>
                                                    </div>

                                                    <div className='d-flex justify-content-between align-items-center text-light'>
                                                        <h6>Valuation Cap</h6>
                                                        <span>1300 ꜩ</span>
                                                    </div>

                                                    <div className='d-flex justify-content-between align-items-center text-light'>
                                                        <h6>Investment</h6>
                                                        <span>1300 ꜩ</span>
                                                    </div>
                                                </div>

                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <Button className='me-3 text-black background-accept' variant='contained'>
                                                        <ThumbUpRoundedIcon className='text-black me-2' />
                                                        Accept
                                                    </Button>
                                                    <Button variant='contained' className='background-deny'>
                                                        <ThumbDownRoundedIcon className='me-2' />
                                                        Deny
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='w-75 ms-auto' id='right-side-chat'>
                                        <div className='d-flex my-3 justify-content-end'>
                                            <div className='me-3 background-light d-flex align-items-center p-3 text-dark right-chat'>
                                                <span>Hi there, how are you. I am Rahul Jain, so nice to meet to you. Fuck you Bitch.
                                                    I still see some shadows in my room, I Lorem Ipsum.
                                                </span>
                                            </div>
                                            <div className='text-center me-1'>
                                                <Avatar />
                                                <span className='font13 text-dark'>09:00</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='w-75 ms-auto' id='right-side-request'>
                                        <div className='d-flex my-3 justify-content-end'>
                                            <div className='me-3 p-4 text-dark right-chat background-chat-request'>
                                                <div className='mb-3'>
                                                    <div className='d-flex justify-content-between align-items-center text-light'>
                                                        <h6>Ownership</h6>
                                                        <span>13%</span>
                                                    </div>

                                                    <div className='d-flex justify-content-between align-items-center text-light'>
                                                        <h6>Valuation Cap</h6>
                                                        <span>1300 ꜩ</span>
                                                    </div>

                                                    <div className='d-flex justify-content-between align-items-center text-light'>
                                                        <h6>Investment</h6>
                                                        <span>1300 ꜩ</span>
                                                    </div>
                                                </div>

                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <Button className='me-3 text-black background-accept' variant='contained'>
                                                        <ThumbUpRoundedIcon className='text-black me-2' />
                                                        Accept
                                                    </Button>
                                                    <Button variant='contained' className='background-deny'>
                                                        <ThumbDownRoundedIcon className='me-2' />
                                                        Deny
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className='text-center me-1'>
                                                <Avatar />
                                                <span className='font13 text-dark'>09:00</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div id='chat-text' className='d-flex justify-content-center align-items-center bg-light rounded15' style={{ height: '15%' }}>
                                    <input className="col-9 mx-auto form-control rounded-pill px-4" type="text" placeholder="Type a message" aria-label="default input example" />
                                    <div className='col-3 text-white mx-auto d-flex justify-content-around'>
                                        <Tooltip title='Send Message' aria-label='send-message'>
                                            <button className='btn d-flex justify-content-center align-items-center rounded-circle text-white' style={{ width: '40px', height: '40px', backgroundColor: 'rgb(58,165,138)' }}>
                                                <TelegramIcon />
                                            </button>
                                        </Tooltip>

                                        <Tooltip title='Propose a Deal' aria-label='propose-a-deal'>
                                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn d-flex justify-content-center align-items-center rounded-circle sidebar-background text-white' style={{ width: '40px', height: '40px' }}>
                                                <PaymentIcon />
                                            </button>
                                        </Tooltip>

                                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog my-auto">
                                                <div className="modal-content">
                                                    <div className="modal-header bg-dark">
                                                        <h5 className="modal-title" id="exampleModalLabel">Create an Offer</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="input-group mb-3">
                                                            <span className="input-group-text">Investment</span>
                                                            <input type="text" className="form-control" aria-label="Investment" />
                                                            <span className="input-group-text">ꜩ</span>
                                                        </div>

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
                                                        <button type="button" className="btn background-primary text-white">Send Proposal</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
