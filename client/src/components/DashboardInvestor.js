import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

import appleLogo from '../images/apple-logo.png'
import walletImg from '../images/wallet.png'

import Navbar from './Navbar';

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

export const DashboardInvestor = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>

                </AppBar>
                <Navbar />
                <main className={classes.content}>

                    <h5 className='fw-bold'>Dashboard</h5>
                    <div className='d-flex'>
                        <div id='walletImg' className='d-flex flex-column align-items-center justify-content-center' style={{width:'20%'}}>
                            <img style={{ width: '70%', height: 'fit-content' }} src={walletImg} />
                            <h5 className='font13 fw-bold text-secondary'>Balance</h5>
                            <h5 className='fw-bold font-numbers'>36,000 ꜩ</h5>
                        </div>

                        <div id='recent-transaction' className='shadow-sm container mt-3 bg-white ms-0 rounded25 px-5 py-2' style={{ width: '80%', height: '295px', cursor: 'pointer', overflow: 'hidden' }}>
                            <h6 className='fw-bold pt-3 mb-4 pb-2'>Recent Investments</h6>
                            <div className='row align-items-center'>
                                <div className='col-1'>
                                    <Avatar alt="Remy Sharp" src={appleLogo} />
                                </div>
                                <div className='col-3'>
                                    <p className='font13 fw-bold mb-0'>Figma Pro Plan</p>
                                    <p className='font13 text-secondary'>SAFE</p>
                                </div>
                                <div className='col-3'>
                                    <p className='font15 fw-bold'>Mar 20, 2022</p>
                                </div>
                                <div className='col-3'>
                                    <p className='font15 fw-bold'>1300 ꜩ</p>
                                </div>
                                <div className='col-2'>
                                    <Chip className='fw-bold' style={{ fontSize: '12px', backgroundColor: '#90ee90' }} label="Success" />
                                </div>
                            </div>

                            <Divider className='mt-2 mb-3' />


                            <div className='row align-items-center'>
                                <div className='col-1'>
                                    <Avatar alt="Remy Sharp" src={appleLogo} />
                                </div>
                                <div className='col-3'>
                                    <p className='font13 fw-bold mb-0'>Figma Pro Plan</p>
                                    <p className='font13 text-secondary'>SAFE</p>
                                </div>
                                <div className='col-3'>
                                    <p className='font15 fw-bold'>Mar 20, 2022</p>
                                </div>
                                <div className='col-3'>
                                    <p className='font15 fw-bold'>1300 ꜩ</p>
                                </div>
                                <div className='col-2'>
                                    <Chip className='fw-bold' style={{ fontSize: '12px', backgroundColor: '#90ee90' }} label="Success" />
                                </div>
                            </div>

                            <Divider className='mt-2 mb-3' />


                            <div className='row align-items-center'>
                                <div className='col-1'>
                                    <Avatar alt="Remy Sharp" src={appleLogo} />
                                </div>
                                <div className='col-3'>
                                    <p className='font13 fw-bold mb-0'>Figma Pro Plan</p>
                                    <p className='font13 text-secondary'>SAFE</p>
                                </div>
                                <div className='col-3'>
                                    <p className='font15 fw-bold'>Mar 20, 2022</p>
                                </div>
                                <div className='col-3'>
                                    <p className='font15 fw-bold'>1300 ꜩ</p>
                                </div>
                                <div className='col-2'>
                                    <Chip className='fw-bold' style={{ fontSize: '12px', backgroundColor: '#90ee90' }} label="Success" />
                                </div>
                            </div>

                            <Divider className='mt-2 mb-3' />

                            <div className='row'>
                                <div className='col-1'>
                                    <Avatar alt="Remy Sharp" src={appleLogo} />
                                </div>
                                <div className='col-3'>
                                    <p className='font13 fw-bold mb-0'>Figma Pro Plan</p>
                                    <p className='font13 text-secondary'>SAFE</p>
                                </div>
                                <div className='col-3'>
                                    <p className='font15 fw-bold'>Mar 20, 2022</p>
                                </div>
                                <div className='col-3'>
                                    <p className='font15 fw-bold'>1300 ꜩ</p>
                                </div>
                                <div className='col-2'>
                                    <Chip className='fw-bold' style={{ fontSize: '12px', backgroundColor: '#90ee90' }} label="Success" />
                                </div>
                            </div>

                            <Divider className='mt-2 mb-3' />
                        </div>
                    </div>

                    <div className='d-flex'>
                        <div id='stock-enteries' className='d-inline-block shadow-sm container rounded25 cardColorGreyish p-4 ms-0 mt-4' style={{ width: '50%' }}>
                            {/* <h4 className='font15 fw-bold mb-3'>Stocks Owned</h4> */}
                            <h6 className='fw-bold pt-3 mb-4'>Stocks Owned</h6>
                            <div className='container'>
                                <div className='row mb-2'>
                                    <div className='col-2'>
                                        <Avatar style={{ width: '30px', height: '30px' }} alt="Remy Sharp" src={appleLogo} />
                                    </div>
                                    <div className='col-4'>
                                        <p className='font13 fw-bold mb-0'>Foina Founder</p>
                                        <p className='font10 text-secondary'>Founder</p>
                                    </div>
                                    <div className='col-3'>
                                        <p className='font13 fw-bold mb-0'>2,000,000</p>
                                    </div>
                                    <div className='col-3'>
                                        <p className='font13 fw-bold mb-0'>25%</p>
                                    </div>
                                </div>

                                <div className='row mb-2'>
                                    <div className='col-2'>
                                        <Avatar style={{ width: '30px', height: '30px' }} alt="Remy Sharp" src={appleLogo} />
                                    </div>
                                    <div className='col-4'>
                                        <p className='font13 fw-bold mb-0'>Foina Founder</p>
                                        <p className='font10 text-secondary'>Founder</p>
                                    </div>
                                    <div className='col-3'>
                                        <p className='font13 fw-bold mb-0'>2,000,000</p>
                                    </div>
                                    <div className='col-3'>
                                        <p className='font13 fw-bold mb-0'>25%</p>
                                    </div>
                                </div>

                                <div className='row mb-2'>
                                    <div className='col-2'>
                                        <Avatar style={{ width: '30px', height: '30px' }} alt="Remy Sharp" src={appleLogo} />
                                    </div>
                                    <div className='col-4'>
                                        <p className='font13 fw-bold mb-0'>Foina Founder</p>
                                        <p className='font10 text-secondary'>Founder</p>
                                    </div>
                                    <div className='col-3'>
                                        <p className='font13 fw-bold mb-0'>2,000,000</p>
                                    </div>
                                    <div className='col-3'>
                                        <p className='font13 fw-bold mb-0'>25%</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='rounded25 mt-4 p-4 my-3 shadow-sm h-100 cardColorPinkish' style={{ width: '45%' }}>
                        <h6 className='fw-bold pt-3 mb-4'>Interested in</h6>
                            <div id='companies-interested-in' className='d-flex' style={{ height: '100px', overflow: 'auto' }}>
                                <div className='me-4'>
                                    <Avatar />
                                    <h6 className='text-secondary font13 mt-2'>Apple</h6>
                                </div>
                                <div className='me-4'>
                                    <Avatar />
                                    <h6 className='text-secondary font13 mt-2'>Apple</h6>
                                </div>
                                <div className='me-4'>
                                    <Avatar />
                                    <h6 className='text-secondary font13 mt-2'>Apple</h6>
                                </div>

                                <div className='me-4'>
                                    <Avatar />
                                    <h6 className='text-secondary font13 mt-2'>Apple</h6>
                                </div>
                                <div className='me-4'>
                                    <Avatar />
                                    <h6 className='text-secondary font13 mt-2'>Apple</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        </>
    )
}







