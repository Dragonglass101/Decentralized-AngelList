import React, {useState, useEffect} from 'react';
import { alpha, makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import { getActiveAccount } from '../utils/wallet';

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import Navbar from './CompanyNavbar';
import NavFloating from './NavFloating';


//Transaction Debit/credit/pending


import employeeImg from '../images/employee.png'
import onlineBankingImg from '../images/onlineBanking.png'
import { useRef } from 'react';
import { payEmp, payVndr } from '../utils/operation';


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

export const MakePayment = () => {
    const classes = useStyles();

    const empID = useRef();
    const empTag = useRef();
    const empAmount = useRef();
    const vndrName = useRef();
    const vndrID = useRef();
    const vndrTag = useRef();
    const vndrAmount = useRef();

    const [wallet, setWallet] = useState(null);
    useEffect(() => {
        if (!wallet) {
            (async () => {
                const activeAccount = await getActiveAccount();
                setWallet(activeAccount);
            })();
        }
    }, []);

    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    function handleEmpPay(){
        payEmp(empAmount.current.value, wallet.address, empID.current.value, empTag.current.value);
    }
    function handleVndrPay(){
        payVndr(vndrAmount.current.value, wallet.address, vndrID.current.value, vndrTag.current.value);
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
                        <div className={classes.tabs} style={{ width: '96%', marginLeft: 'auto', marginRight: 'auto', boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)' }}>
                            <AppBar position="static" color="default">
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    variant="fullWidth"
                                    aria-label="full width tabs example"
                                >
                                    <Tab style={{ textTransform: 'capitalize' }} label="Pay To Employee" {...a11yProps(0)} />
                                    <Tab style={{ textTransform: 'capitalize' }} label="Pay To Vendor" {...a11yProps(1)} />
                                </Tabs>
                            </AppBar>
                            <SwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={value}
                                onChangeIndex={handleChangeIndex}
                            >
                                <TabPanel value={value} index={0} dir={theme.direction}>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <div style={{width:'60%'}}>
                                            <img className='w-100' src={employeeImg} />
                                        </div>
                                        <div className='container text-center rounded' style={{width:'50%'}}>
                                            <h4 className='mb-4'>Pay to Employee</h4>
                                            <Autocomplete
                                                id="combo-box-demo"
                                                className='mx-auto mb-3 w-100'
                                                options={top100Films}
                                                getOptionLabel={(option) => option.title}
                                                style={{ width: 300, fontFamily: 'kanit' }}
                                                renderInput={(params) => <TextField {...params} placeholder='Select Employee' variant="outlined" />}
                                            />
                                            <div className="input-group mb-3 w-100 mx-auto">
                                                <span className="input-group-text px-4" id="basic-addon1">Account ID</span>
                                                <input ref={empID} type="text" className="form-control bg-white" aria-label="Username" aria-describedby="basic-addon1" disabled />
                                            </div>
                                            <div className="input-group mb-3 w-100 mx-auto">
                                                <span className="input-group-text px-4" id="basic-addon1">Tag</span>
                                                <input ref={empTag} type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                                            </div>
                                            <div className="input-group input-group-lg mb-5 w-100 mx-auto">
                                                <span className="input-group-text px-4 sidebar-background text-white fw-bold" id="basic-addon1">Amount</span>
                                                <input ref={empAmount} type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                                                <span className="input-group-text sidebar-background text-white" id="basic-addon1">ꜩ</span>
                                            </div>
                                            <Button onClick={handleEmpPay} className='d-block w-100' style={{ textTransform: 'capitalize' }} variant="contained" color="primary" size='large'>
                                                Make Payment
                                            </Button>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel value={value} index={1} dir={theme.direction}>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <div style={{width:'60%'}}>
                                            <img className='w-100' src={onlineBankingImg} />
                                        </div>
                                        <div className='container text-center rounded' style={{width:'50%'}}>
                                            <h4 className='mb-4'>Pay to Vendor</h4>
                                            <div className="input-group mb-3 w-100 mx-auto">
                                                <span className="input-group-text" id="basic-addon1">Vendor Name</span>
                                                <input ref={vndrName} type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                                            </div>
                                            <div className="input-group mb-3 w-100 mx-auto">
                                                <span className="input-group-text px-4" id="basic-addon1">Account ID</span>
                                                <input ref={vndrID} type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                                            </div>
                                            <div className="input-group mb-3 w-100 mx-auto">
                                                <span className="input-group-text px-4" id="basic-addon1">Tag</span>
                                                <input ref={vndrTag} type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                                            </div>
                                            <div className="input-group input-group-lg mb-5 w-100 mx-auto">
                                                <span className="input-group-text px-4 sidebar-background text-white fw-bold" id="basic-addon1">Amount</span>
                                                <input ref={vndrAmount} type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                                                <span className="input-group-text sidebar-background text-white" id="basic-addon1">ꜩ</span>
                                            </div>
                                            <Button onClick={handleVndrPay} className='d-block w-100' style={{ textTransform: 'capitalize' }} variant="contained" color="primary" size='large'>
                                                Make Payment
                                            </Button>
                                        </div>
                                    </div>
                                </TabPanel>
                            </SwipeableViews>
                        </div>
                    </div>

                </main>
            </div>
        </>
    )
}


// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'Corrie Irving'},
    { title: 'Abraham Hansen'},
    { title: 'Theodore Fry'},
    { title: 'Kayla Greene'}
];

