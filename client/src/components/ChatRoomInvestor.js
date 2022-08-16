import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { NFTStorage, File } from 'nft.storage'

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
import CircularProgress from '@material-ui/core/CircularProgress';

import InvestorNavbar from './InvestorNavbar';
import NavFloating from './NavFloating';

import PaymentIcon from '@material-ui/icons/Payment';
import ThumbDownRoundedIcon from '@material-ui/icons/ThumbDownRounded';
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded';

import { getActiveAccount } from '../utils/wallet';
import { requestFromInvestor } from '../utils/operation';

//Transaction Debit/credit/pending

import SearchIcon from '@material-ui/icons/Search';
import TelegramIcon from '@material-ui/icons/Telegram';
import { getKeyBigMapByID } from '../utils/Api';
import { changeMessageHash } from '../utils/operation';

import ipfs_mini from '../ipfs_mini';

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

export const ChatRoomInvestor = () => {
    const classes = useStyles();
    const companyBigMapID = 88413;
    const investorBigMapID = 88417;

    const nftstore_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDJENkM4Qjg4RWY2YzY4YTU1NzdGMGZhOUU3MDE4ODU1ODk5YTYzQzkiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2MDI0NDkwMjI5MiwibmFtZSI6IkRldmlsc0xpc3QifQ.fuOaSEThIZdIxTzNUQ-yOc4gvcuzv4K3LssZGSw6thc"

    const [loading, setloading] = useState(false);
    const [wallet, setWallet] = useState(null);
    const [sendersList, setsendersList] = useState(null);
    const [conversationElements, setconversationElements] = useState(null);
    const [messageHash, setmessageHash] = useState();
    const [currentCompany, setcurrentCompany] = useState();
    const [investementType, setinvestementType] = useState("SAFE");
    const [loadingChats, setloadingChats] = useState(false);
    const [investorPhotoCID, setinvestorPhotoCID] = useState();
    const [companyPhotoCID, setcompanyPhotoCID] = useState();

    const valuationCap = useRef();
    const directEquity = useRef();
    const investement = useRef();

    const typedMessage = useRef();

    useEffect(() => {
        if(!wallet){
            (async () => {
            const activeAccount = await getActiveAccount();
            setWallet(activeAccount);
        })();}
      }, []);

    useEffect(() => {
        async function handleChangeMessageHash(){
            try{
                await changeMessageHash(currentCompany, wallet.address, messageHash);
                window.location.reload();
              }catch(error){
                alert("Transaction Failed:", error.message);
              }
            setloading(false);
        }
        if(wallet && messageHash)
        handleChangeMessageHash();
    }, [messageHash])
    
    async function makeSendersList(){
        const investorDetails = await getKeyBigMapByID(investorBigMapID, wallet.address);
        const investorProfileHash = investorDetails.value["investor_profile_Id"];
        const investorJSON = await axios("https://" + investorProfileHash + ".ipfs.dweb.link/metadata.json");
        const investorimageUri = investorJSON.data.image;
        const investorimageHash = investorimageUri.substring(7, investorimageUri.length-5);
        setinvestorPhotoCID(investorimageHash);
        const sendersList = investorDetails.value["message_history"]
        console.log(investorJSON);
        console.log(investorDetails, sendersList);
        const tempSenderlist = [];
        for(let sender of Object.keys(sendersList)){
            const companyDetails = await getKeyBigMapByID(companyBigMapID, sender);
            const companyProfileHash = companyDetails.value["company_profile_Id"];
            const companyJSON = await axios("https://" + companyProfileHash + ".ipfs.dweb.link/metadata.json");
        
            const companyimageUri = companyJSON.data.image;
            const companyimageHash = companyimageUri.substring(7, companyimageUri.length-5);
            setcompanyPhotoCID(companyimageHash);
            console.log(companyJSON);

            tempSenderlist.push(
                <div key={sender}>
                    <div onClick={()=>{ setcurrentCompany(sender);fetchSenderChats(sender, investorDetails.value["message_history"])}} className='row p-3' style={{cursor: "pointer"}}>
                        <div className='col-3'>
                            <Avatar src={"https://" + companyPhotoCID + ".ipfs.dweb.link/blob"}/>
                        </div>
                        <div className='col-7'>
                            <h6 className='m-0'>{companyJSON.data.name}</h6>
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

    async function fetchSenderChats(companyAddress, messageHistory){
        setloadingChats(true);
        const tempElements = [];
        
        if(messageHistory[`${companyAddress}`] === "") {
            setconversationElements(tempElements);
            return;
        }
        
        const messageHashInStorage = messageHistory[`${companyAddress}`];
        console.log(messageHistory, companyAddress);
        const messagesStringJson = await axios("https://" + messageHashInStorage + ".ipfs.dweb.link/metadata.json")
        const messagesString = messagesStringJson.data.chats;
        const messagesArr = messagesString.split("|");

        for(let message of messagesArr){
            if(message[0] === 'i'){
                console.log(message);
                tempElements.push(
                    <div key={message}className='w-75 ms-auto' id='right-side-chat'>
                        <div className='d-flex my-3 justify-content-end'>
                            <div className='me-3 background-light d-flex align-items-center p-3 text-dark right-chat'>
                                <span>{message.split("=")[1]}</span>
                            </div>
                            <div className='text-center me-1'>
                                <Avatar src={"https://" + investorPhotoCID + ".ipfs.dweb.link/blob"}/>
                                <span className='font13 text-dark'>09:00</span>
                            </div>
                        </div>
                    </div>
                )
            }
            if(message[0] === 's'){
                console.log(message);
                tempElements.push(
                    <div key={message} className='w-75' id='left-side-chat'>
                        <div className='d-flex my-3'>
                            <div className='text-center'>
                                <Avatar src={"https://" + companyPhotoCID + ".ipfs.dweb.link/blob"}/>
                                <span className='font13 text-dark'>09:00</span>
                            </div>
                            <div className='ms-3 background-light d-flex align-items-center p-3 text-dark left-chat'>
                                <span>{message.split("=")[1]}</span>
                            </div>
                        </div>
                    </div>
                )
            }
        }
        setconversationElements(tempElements);
        setloadingChats(false);
    }
    async function addTextIpfs(text){
        const client = new NFTStorage({ token:  nftstore_token});
        const data = {
            name: "Chats",
            description: "chats",
            image: new File([], 'blob'),
            chats: text
        };
        const metadata = await client.store(data);
        console.log("metadata", metadata);
        setmessageHash(metadata.ipnft);
    }

    async function handleMessageSend(){
        setloading(true);
        console.log(typedMessage.current.value);
        const investorDetails = await getKeyBigMapByID(investorBigMapID, wallet.address);
        const messageHistory = investorDetails.value["message_history"];
        const oldMessageHash = messageHistory[`${currentCompany}`];
        let newMessage;

        if(oldMessageHash === ""){
            newMessage = "i:" + "7:00" + "=" + typedMessage.current.value + "|";
        }
        else{
            const messageString = await axios("https://" + oldMessageHash + ".ipfs.dweb.link/metadata.json");
            newMessage = messageString.data.chats + "i:" + "7:00" + "=" + typedMessage.current.value + "|";
        }

        addTextIpfs(newMessage);
    }

    const handleRequestFromInvestor = async (e) => {
        e.preventDefault();
        if(investementType === "DirectEquity")
            requestFromInvestor(currentCompany, Number(directEquity.current.value), Number(investement.current.value), investementType, 0);
        if(investementType === "SAFE")
            requestFromInvestor(currentCompany, 0, Number(investement.current.value), investementType, Number(valuationCap.current.value));
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
                <InvestorNavbar />
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

                            {/* <ForumRoundedIcon className='text-white' /> */}
                            {/* <div className='w-75' id='left-side-chat'>
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
                            </div> */}
                            {conversationElements ? 
                                <div className='shadow-sm m-3 p-3 rounded15 bg-white' style={{ width: '60%', height: '505px' }}>
                                    <div id='chat-window' style={{ height: '85%', overflow: 'auto' }}>
                                        {conversationElements}
                                    </div>
                                    <div id='chat-text' className='d-flex justify-content-center align-items-center bg-light rounded15' style={{ height: '15%' }}>
                                        <input ref={typedMessage} className="col-9 mx-auto form-control rounded-pill px-4" type="text" placeholder="Type a message" aria-label="default input example" />
                                        <div className='col-3 text-white mx-auto d-flex justify-content-around'>
                                            <Tooltip title='Send Message' aria-label='send-message'>
                                                <button onClick={handleMessageSend} className='btn d-flex justify-content-center align-items-center rounded-circle text-white' style={{ width: '40px', height: '40px', backgroundColor: 'rgb(58,165,138)' }}>
                                                    {loading? <CircularProgress/> : <TelegramIcon />}
                                                </button>
                                            </Tooltip>

                                            <Tooltip title='Propose a Deal' aria-label='propose-a-deal'>
                                                <button data-bs-toggle="modal" data-bs-target="#requestingBtn" className='btn d-flex justify-content-center align-items-center rounded-circle sidebar-background text-white' style={{ width: '40px', height: '40px' }}>
                                                    <PaymentIcon />
                                                </button>
                                            </Tooltip>

                                            <form onSubmit={(e)=>{handleRequestFromInvestor(e)}} className="modal fade" id="requestingBtn" tabIndex="-1" aria-labelledby="requestingBtnLabel" aria-hidden="true">
                                                <div className="modal-dialog my-auto">
                                                    <div className="modal-content">
                                                        <div className="modal-header bg-dark">
                                                            <h5 className="modal-title" id="requestingBtnLabel">Raise Funds</h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">

                                                            <select defaultValue="SAFE" onChange={(e)=>{setinvestementType(e.target.value)}} className="form-select mb-3" aria-label="Default select example">
                                                                <option disabled>Select Investment Type</option>
                                                                <option value="SAFE">SAFE</option>
                                                                <option value="DirectEquity">Direct Equity</option>
                                                            </select>

                                                            {investementType === "DirectEquity" ?
                                                            <div className="input-group mb-3">
                                                                <span className="input-group-text">Direct Equity</span>
                                                                <input ref={directEquity} type="number" className="form-control" aria-label="Direct Equity" required/>
                                                                <span className="input-group-text">%</span>
                                                            </div> : null}
                                                            {investementType === "SAFE" ?
                                                            <div className="input-group mb-3">
                                                                <span className="input-group-text">Valuation Cap</span>
                                                                <input ref={valuationCap} type="number" className="form-control" aria-label="Valuation Cap" required/>
                                                            </div> : null}

                                                            <div className="input-group mb-3">
                                                                <span className="input-group-text">Investement</span>
                                                                <input ref={investement} type="number" className="form-control" aria-label="Investement" required/>
                                                                <span className="input-group-text">ꜩ</span>
                                                            </div>

                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            <button type="submit" className="btn background-primary text-white">Send Request</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            :
                            <div className='shadow-sm m-3 p-3 d-flex align-items-center justify-content-center flex-column' style={{ width: '60%' }}>
                                <div className='background-purplepink p-3 m-3 rounded-circle'>
                                    {loadingChats ? <CircularProgress/> : null}
                                </div>
                                <span className='text-center m-0 text-secondary'>Start a Meaningful Converstation !</span>
                            </div>}
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
