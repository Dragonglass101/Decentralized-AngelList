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

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import Navbar from './CompanyNavbar';
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

export const ProfileCompany = () => {
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
                        <div className='container'>
                            <Avatar style={{width:'90px', height:'90px'}} className='mb-3 mx-auto'/>
                            <h4 className='fw-bold text-center'>Company Details</h4>
                            <Divider variant='fullWidth' />
                            <form className='row mt-3 font13'>
                                <div className="mb-3 col-6">
                                    <label for="exampleInputEmail1" className="form-label font13 fw-bold">Company Legal Name</label>
                                    <input type="text" className="form-control font13" id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        required disabled />
                                </div>
                                <div className='mb-3 col-6'>
                                    <label for="basic-url" className="form-label font13 fw-bold">Industry</label>
                                    <select className="form-select font13" aria-label="Default select example"
                                        required disabled>
                                        <option disabled selected>Select Industry</option>
                                        <option value="1">Technology</option>
                                        <option value="2">Agro</option>
                                        <option value="3">Health Care</option>
                                    </select>
                                </div>
                                <div className='col-6'>
                                    <label for="basic-url" className="form-label font13 fw-bold">Website<span style={{ fontSize: '10px' }}> (optional)</span></label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text font13" id="basic-addon3">https://</span>
                                        <input type="text" className="form-control font13" id="basic-url" aria-describedby="basic-addon3" disabled />
                                    </div>
                                </div>

                                <div className='col-6'>
                                    <label for="basic-url" className="form-label font13 fw-bold">LinkedIn<span style={{ fontSize: '10px' }}> (optional)</span></label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text font13" id="basic-addon3" style={{ height: 'fit-content' }}>https://linkedin.com/in/</span>
                                        <input type="text" className="form-control font13" id="basic-url" aria-describedby="basic-addon3" required disabled />
                                    </div>
                                </div>
                                <label for="exampleInputEmail1" className="form-label font13 fw-bold">Company Valuation</label>
                                <div className="mb-3 col-6">
                                    <input type="number" className="form-control font13" id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        required disabled />
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1" className='fw-bold'>What will your company do?
                                        <span className='fw-normal text-secondary' style={{ fontSize: '10px' }}></span>
                                    </label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" required disabled></textarea>
                                </div>
                                <div className='mb-3'>
                                    <p className='fw-bold mb-0'>Business Address</p>
                                    <span className='text-secondary' style={{ fontSize: '11px' }}>This can be your personal address. Please list a valid US address where you will receive company notices and information from your registered agent. Do not list a P.O
                                        Box, virtual mailbox, or mail forwarding address.</span>
                                </div>
                                <div className="col-12 mb-3">
                                    <label for="inputAddress" className="form-label fw-bold">Address</label>
                                    <input type="text" className="form-control font13" id="inputAddress" placeholder="1234 Main St" required disabled />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="inputCity" className="form-label fw-bold">City</label>
                                    <input type="text" className="form-control font13" id="inputCity" required disabled />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="inputZip" className="form-label fw-bold">Zip Code</label>
                                    <input type="text" className="form-control font13" id="inputZip" required disabled />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="inputState" className="form-label fw-bold">State</label>
                                    <input type="text" className="form-control font13" id="inputState" required disabled />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="inputState" className="form-label fw-bold">Country</label>
                                    <input type="text" className="form-control font13" id="inputZip" required disabled />
                                </div>

                            </form>
                        </div>
                    </div>

                </main>
            </div>
        </>
    )
}