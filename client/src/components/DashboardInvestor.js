import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import { Toolbar, Typography } from '@material-ui/core';

import appleLogo from '../images/apple-logo.png'
import walletImg from '../images/wallet.png'

import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';

import DataUsageRoundedIcon from '@material-ui/icons/DataUsageRounded';
import SearchIcon from '@material-ui/icons/Search';

import Navbar from './InvestorNavbar';

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
                    <nav className='d-flex justify-content-between align-items-center shadow rounded15 px-3' style={{ height: '70px', marginBottom: '30px' }}>
                        <div className='d-flex align-items-center justify-content-start'>
                            <svg width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg" className="css-2tcqb0 ms-3 mt-3 mb-3"><path fillRule="evenodd" clipRule="evenodd" d="M22.6744 4.50247L31.9038 9.66459C32.117 9.78381 32.2944 9.95738 32.4178 10.1674C32.5413 10.3775 32.6064 10.6164 32.6064 10.8597C32.6064 11.1031 32.5413 11.342 32.4178 11.5521C32.2944 11.7621 32.117 11.9357 31.9038 12.0549L22.6745 17.2172C22.0854 17.5467 21.4212 17.7198 20.7456 17.7198C20.0698 17.7198 19.4056 17.5467 18.8166 17.2172L9.5873 12.0549C9.37415 11.9357 9.1967 11.7621 9.0732 11.5521C8.94971 11.342 8.8846 11.1031 8.8846 10.8597C8.8846 10.6164 8.94971 10.3775 9.0732 10.1674C9.1967 9.95738 9.37415 9.78381 9.5873 9.66459L18.8166 4.50247C19.4056 4.17301 20.0698 4 20.7456 4C21.4212 4 22.0854 4.17301 22.6744 4.50247Z" fill="#5048E5"></path><path opacity="0.7" d="M22.6244 9.34853L35.8422 16.7415C36.0554 16.8607 36.2328 17.0343 36.3563 17.2443C36.4798 17.4544 36.5449 17.6933 36.5449 17.9366C36.5449 18.18 36.4798 18.419 36.3563 18.629C36.2328 18.8391 36.0554 19.0126 35.8422 19.1319L22.6244 26.5248C22.0355 26.8541 21.3712 27.0272 20.6956 27.0272C20.0199 27.0272 19.3557 26.8541 18.7667 26.5248L5.54893 19.1319C5.33578 19.0126 5.15833 18.8391 5.03483 18.629C4.91133 18.419 4.84623 18.18 4.84623 17.9366C4.84623 17.6933 4.91133 17.4544 5.03483 17.2443C5.15833 17.0343 5.33578 16.8607 5.54893 16.7415L18.7667 9.34853C19.3557 9.01916 20.0199 8.84615 20.6956 8.84615C21.3712 8.84615 22.0355 9.01916 22.6244 9.34853Z" fill="#5048E5"></path><path opacity="0.4" d="M22.9257 14.1939L41.2984 24.4703C41.5113 24.5894 41.6884 24.7626 41.8117 24.9724C41.935 25.182 42 25.4206 42 25.6636C42 25.9065 41.935 26.1451 41.8117 26.3548C41.6884 26.5645 41.5113 26.7378 41.2984 26.8568L22.9257 37.1329C22.3377 37.4618 21.6745 37.6346 21 37.6346C20.3254 37.6346 19.6623 37.4618 19.0743 37.1329L0.701542 26.8568C0.488743 26.7378 0.311581 26.5645 0.188286 26.3548C0.0649948 26.1451 0 25.9065 0 25.6636C0 25.4206 0.0649948 25.182 0.188286 24.9724C0.311581 24.7626 0.488743 24.5894 0.701542 24.4703L19.0743 14.1939C19.6623 13.8651 20.3254 13.6923 21 13.6923C21.6745 13.6923 22.3377 13.8651 22.9257 14.1939Z" fill="#5048E5"></path></svg>
                            <span className='ms-3 fw-bold' style={{fontFamily:'devils_font', fontSize:'40px'}}>Devils List</span>
                        </div>
                        {/* <span className='font15 ms-5 ps-5 fw-bold'>Dashboard</span> */}
                        <div className='d-flex align-items-center' style={{width:'40%'}}>
                            <div className="input-group shadow-sm" style={{ width: '90%', borderRadius:'40px', overflow:'hidden', borderColor:'rgb(18, 24, 39)' }}>
                                <input style={{ border: '0px' }} type="text" className="form-control bg-white" placeholder="   Search ..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button style={{ backgroundColor: 'rgb(26, 27, 47)' }} className="btn" type="button" id="button-addon2">
                                    <SearchIcon style={{ color: 'white' }} />
                                </button>
                            </div>
                            <IconButton aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={4} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton color='inherit'>
                                <ExitToAppRoundedIcon className='me-auto' />
                            </IconButton>
                        </div>

                    </nav>


                    {/* <Divider className='mb-4' style={{ color: 'grey', backgroundColor: 'grey', variant: 'middle' }} /> */}


                    {/* <h5 className='fw-bold'>Dashboard</h5> */}
                    <div className='d-flex'>
                        <div id='walletImg' className='d-flex flex-column align-items-center justify-content-center' style={{ width: '20%' }}>
                            <img style={{ width: '70%', height: 'fit-content' }} src={walletImg} />
                            <h5 className='font13 fw-bold text-secondary'>Balance</h5>
                            <h5 className='fw-bold font-numbers'>36,000 ꜩ</h5>
                        </div>

                        {/* <div id='recent-transaction' className='shadow-sm container mt-3 ms-0 rounded25 px-5 py-2' style={{ width: '80%', backgroundColor: 'rgb(177 248 232 / 25%)', height: '295px', cursor: 'pointer', overflow: 'hidden' }}>
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
                        </div> */}

                        <div className='bg-white rounded15' style={{ width: '80%', cursor: 'pointer' }}>
                            <h6 className='fw-bold shadow-sm py-3 m-0 text-center banner'>Recent Transactions</h6>
                            {/* <h6 className='fw-bold mb-3 pb-2 ms-3'>Recent Transactions</h6> */}
                            <table className="table shadow-sm pb-0 mb-0 sidebar-color" style={{ overflow: 'hidden', height: '200px', borderRadius: '0px 0px 17px 17px' }}>
                                <thead className='table-light'>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Company</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Spent</th>
                                    </tr>
                                </thead>
                                <tbody className='font13 text-secondary'>
                                    <tr>
                                        <th scope="row">
                                            <img style={{ width: '32px', height: '32px', borderRadius: '50%' }} alt="Remy Sharp" src={appleLogo} />
                                        </th>
                                        <td className='align-middle'>Company Name</td>
                                        <td className='align-middle'>Mar 20, 2022</td>
                                        <td className='align-middle fw-bold' style={{ color: 'rgb(18, 185, 129)' }}>36,000 ꜩ</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <img style={{ width: '32px', height: '32px', borderRadius: '50%' }} alt="Remy Sharp" src={appleLogo} />
                                        </th>
                                        <td className='align-middle'>Company Name</td>
                                        <td className='align-middle'>Mar 20, 2022</td>
                                        <td className='align-middle fw-bold' style={{ color: 'rgb(18, 185, 129)' }}>36,000 ꜩ</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <img style={{ width: '32px', height: '32px', borderRadius: '50%' }} alt="Remy Sharp" src={appleLogo} />
                                        </th>
                                        <td className='align-middle'>Company Name</td>
                                        <td className='align-middle'>Mar 20, 2022</td>
                                        <td className='align-middle fw-bold' style={{ color: 'rgb(18, 185, 129)' }}>36,000 ꜩ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className='d-flex mt-5'>

                        <div className='bg-white rounded15' style={{ width: '70%', cursor: 'pointer' }}>
                            <h6 className='fw-bold shadow-sm py-3 m-0 text-center banner'>Stocks Owned</h6>
                            {/* <h6 className='fw-bold mb-3 pb-2 ms-3'>Recent Transactions</h6> */}
                            <table className="table shadow-sm pb-0 mb-0 sidebar-color" style={{ overflow: 'hidden', height: '200px', borderRadius: '0px 0px 17px 17px' }}>
                                <thead className='table-light'>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Company</th>
                                        <th scope="col">Shares Owned</th>
                                        <th scope="col">Ownership</th>
                                    </tr>
                                </thead>
                                <tbody className='font13 text-secondary'>
                                    <tr>
                                        <th scope="row">
                                            <img style={{ width: '32px', height: '32px', borderRadius: '50%' }} alt="Remy Sharp" src={appleLogo} />
                                        </th>
                                        <td className='align-middle'>Company Name</td>
                                        <td className='align-middle'>2,000,000</td>
                                        <td className='align-middle fw-bold sidebar-color'><DataUsageRoundedIcon className='me-2' />25%</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <img style={{ width: '32px', height: '32px', borderRadius: '50%' }} alt="Remy Sharp" src={appleLogo} />
                                        </th>
                                        <td className='align-middle'>Company Name</td>
                                        <td className='align-middle'>2,000,000</td>
                                        <td className='align-middle fw-bold sidebar-color'><DataUsageRoundedIcon className='me-2' />25%</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <img style={{ width: '32px', height: '32px', borderRadius: '50%' }} alt="Remy Sharp" src={appleLogo} />
                                        </th>
                                        <td className='align-middle'>Company Name</td>
                                        <td className='align-middle'>2,000,000</td>
                                        <td className='align-middle fw-bold sidebar-color'><DataUsageRoundedIcon className='me-2' />25%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* <div className='rounded15 mt-4 p-4 my-3 shadow-sm bg-white h-100 cardColorPinkish' style={{ width: '45%' }}>
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
                        </div> */}
                    </div>

                </main>
            </div>
        </>
    )
}







