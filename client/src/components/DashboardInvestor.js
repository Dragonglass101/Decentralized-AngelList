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
import NavFloating from './NavFloating';

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
                    <NavFloating />
                    <div className={classes.padded}>


                        {/* <Divider className='mb-4' style={{ color: 'grey', backgroundColor: 'grey', variant: 'middle' }} /> */}


                        {/* <h5 className='fw-bold'>Dashboard</h5> */}
                        <div className='d-flex'>
                            <div id='walletImg' className='d-flex flex-column align-items-center justify-content-center' style={{ width: '20%' }}>
                                <img style={{ width: '70%', height: 'fit-content' }} src={walletImg} />
                                <h5 className='font13 fw-bold text-secondary'>Balance</h5>
                                <h5 className='fw-bold font-numbers'>36,000 ꜩ</h5>
                            </div>


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
                    </div>

                </main>
            </div>
        </>
    )
}







