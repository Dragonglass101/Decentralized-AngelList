import React from 'react';
import { alpha, makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import LinkedinCover from '../images/linkedin_cover.png'
import profilePic from '../images/ProfilePic.jpeg'
import LinkedinBack from '../images/LinkedinBack.png'
import LinkedinBackBlue from '../images/LinkedinBackBlue.png'

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import Navbar from './InvestorNavbar';
import NavFloating from './NavFloating';

import searchIcon from '../images/search.png'
import appleLogo from '../images/apple-logo.png'
import pieChart from '../images/pie-chart.png'
import walletImg from '../images/wallet.png'
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import PaymentIcon from '@material-ui/icons/Payment';

//Transaction Debit/credit/pending
import SyncProblemIcon from '@material-ui/icons/SyncProblem';
import EjectIcon from '@material-ui/icons/Eject';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import TrendingDownRoundedIcon from '@material-ui/icons/TrendingDownRounded';
import TrendingUpRoundedIcon from '@material-ui/icons/TrendingUpRounded';

import DataUsageRoundedIcon from '@material-ui/icons/DataUsageRounded';
import SearchIcon from '@material-ui/icons/Search';


const drawerWidth = 240;

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    tabView: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    tabs: {
        backgroundColor: theme.palette.background.paper,
        // width: 500,
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

export const ProfileInvestor = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
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
                    <img className='w-100' src={LinkedinBackBlue}/>
                    <div style={{marginTop:'-150px'}} className={classes.padded}>
                        <div className='d-flex justify-content-around'>
                            <div className='p-3 shadow bg-white text-center' style={{ width: '25%' }}>
                                <Avatar src={profilePic} style={{ width: '90px', height: '90px' }} className='mb-3 mx-auto' />
                                <h5 className='fw-bold mb-0'>Nathaniel Poole</h5>
                                <p className='text-secondary'>Microsoft Inc.</p>
                                <Divider />
                                <div className='d-flex justify-content-between align-items-center p-2'>
                                    <span>Opportunities applied</span>
                                    <span className='fw-bold' style={{ color: 'orange' }}>32</span>
                                </div>

                                <Divider />
                                <div className='d-flex justify-content-between align-items-center p-2'>
                                    <span>Opportunities won</span>
                                    <span className='fw-bold' style={{ color: 'green' }}>32</span>
                                </div>

                                <Divider />
                                <div className='d-flex justify-content-between align-items-center p-2'>
                                    <span>Current Opportunities</span>
                                    <span className='fw-bold' style={{ color: 'grey' }}>32</span>
                                </div>

                                <Divider />

                                <Button className='my-3' style={{ textTransform: 'capitalize' }} variant='outlined'>View Public Profile</Button>
                            </div>

                            <div className='shadow bg-white' style={{ width: '70%' }}>
                                <div className={classes.tabView}>
                                    <AppBar position="static">
                                        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                                            <Tab style={{ textTransform: 'capitalize' }} label="Account Settings" {...a11yProps(0)} />
                                            <Tab style={{ textTransform: 'capitalize' }} label="Company Settings" {...a11yProps(1)} />
                                            <Tab style={{ textTransform: 'capitalize' }} label="Documents" {...a11yProps(2)} />
                                            <Tab style={{ textTransform: 'capitalize' }} label="Billing" {...a11yProps(3)} />
                                            <Tab style={{ textTransform: 'capitalize' }} label="Notifications" {...a11yProps(4)} />
                                        </Tabs>
                                    </AppBar>
                                    <TabPanel value={value} index={0}>
                                        <div className='container'>
                                            <div className='row'>
                                                <div className='col-6 mb-3'>
                                                    <label for="exampleFormControlInput1" class="form-label">First Name</label>
                                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" disabled />
                                                </div>

                                                <div className='col-6 mb-3'>
                                                    <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" disabled />
                                                </div>

                                                <div className='col-6 mb-3'>
                                                    <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                                                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="" disabled />
                                                </div>

                                                <div className='col-6 mb-3'>
                                                    <label for="exampleFormControlInput1" class="form-label">Email Address</label>
                                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" disabled />
                                                </div>

                                                <div className='col-6 mb-3'>
                                                    <label for="exampleFormControlInput1" class="form-label">City</label>
                                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" disabled />
                                                </div>

                                                <div className='col-6 mb-3'>
                                                    <label for="exampleFormControlInput1" class="form-label">State/Country</label>
                                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" disabled />
                                                </div>

                                                <div className='col-6 mb-3'>
                                                    <label for="exampleFormControlInput1" class="form-label">Postcode</label>
                                                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="" disabled />
                                                </div>

                                                <div className='col-6 mb-3'>
                                                    <label for="exampleFormControlInput1" class="form-label">Country</label>
                                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" disabled />
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel value={value} index={1}>
                                        Item Two
                                    </TabPanel>
                                    <TabPanel value={value} index={2}>
                                        Item Three
                                    </TabPanel>
                                </div>
                                <Divider />
                                <div className='mt-3 mb-4 text-center'>
                                    <Button variant='contained' color='primary'>Update</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        </>
    )
}