import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import appleLogo from '../images/apple-logo.png';
import Navbar from './CompanyNavbar';
import NavFloating from './NavFloating';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import SearchIcon from '@material-ui/icons/Search';

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

export const EmployeesAppointed = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <>
            <div className={classes.root}>
                <CssBaseline />
                <Navbar />
                <main className={classes.content}>

                    <NavFloating />
                    <div className={classes.padded}>
                        <div id='startup-list'>
                            <div className='row mx-3 align-items-center justify-content-between'>
                                <div className='col-4'>
                                    <h5 className='fw-bold m-0'>Employee Details</h5>
                                </div>
                                <div className="col-5 input-group shadow-sm h-100 p-0" style={{ overflow: 'hidden', borderColor: 'rgb(18, 24, 39)' }}>
                                    <input style={{ border: '0px' }} type="text" className="form-control bg-white" placeholder="Search Startups" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button className="btn background-purplepink" type="button" id="button-addon2">
                                        <SearchIcon style={{ color: 'white' }} />
                                    </button>
                                </div>
                                <FormControl className='col-2 cardColorPinkish shadow-sm' variant='filled' style={{fontFamily:'kanit'}}>
                                    <InputLabel id="demo-simple-select-label" style={{fontFamily:'kanit'}}>Sort</InputLabel>
                                    <Select
                                        className='cardColorPinkish'
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        onChange={handleChange}
                                        style={{fontFamily:'kanit'}}
                                    >
                                        <MenuItem value="">
                                            <em style={{fontFamily:'kanit'}}>None</em>
                                        </MenuItem>
                                        <MenuItem value={10} style={{fontFamily:'kanit'}}>Ten</MenuItem>
                                        <MenuItem value={20} style={{fontFamily:'kanit'}}>Twenty</MenuItem>
                                        <MenuItem value={30} style={{fontFamily:'kanit'}}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className='d-flex flex-wrap'>

                                <div className="shadow-sm card cardColorPinkish rounded m-3" style={{ width: '18rem', border: '0px' }}>
                                    <div className="card-body">
                                        <div className='d-flex justify-content-between align-items-center mb-3'>
                                            <Avatar alt="Remy Sharp" src={appleLogo} />
                                            <div className='p-2 d-flex'>
                                                <span className='fw-bold mb-0 color-primary' style={{ fontSize: '30px' }}>13%</span>
                                            </div>
                                        </div>
                                        <h5 className="card-title fw-bold">Company Name</h5>
                                        <p className="card-subtitle mb-2 fw-bold">City, State</p>
                                        <p className="card-text font13 text-secondary">Some quick example text to build on the Company Name and make up the bulk of the card's content.</p>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <h6 className='fw-bold mb-0'>1300 ꜩ</h6>
                                            <Button style={{ textTransform: 'capitalize' }} size='small' variant='contained' color="primary">Invest</Button>
                                            <Button className='' style={{ textTransform: 'capitalize' }} size='small' variant='outlined' color="primary">View Profile</Button>
                                        </div>
                                    </div>
                                </div>

                                <div className="shadow-sm card cardColorPinkish rounded m-3" style={{ width: '18rem', border: '0px' }}>
                                    <div className="card-body">
                                        <div className='d-flex justify-content-between align-items-center mb-3'>
                                            <Avatar alt="Remy Sharp" src={appleLogo} />
                                            <div className='p-2 d-flex'>
                                                <span className='fw-bold mb-0 color-primary' style={{ fontSize: '30px' }}>13%</span>
                                            </div>
                                        </div>
                                        <h5 className="card-title fw-bold">Company Name</h5>
                                        <p className="card-subtitle mb-2 fw-bold">City, State</p>
                                        <p className="card-text font13 text-secondary">Some quick example text to build on the Company Name and make up the bulk of the card's content.</p>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <h6 className='fw-bold mb-0'>1300 ꜩ</h6>
                                            <Button style={{ textTransform: 'capitalize' }} size='small' variant='contained' color="primary">Invest</Button>
                                            <Button className='' style={{ textTransform: 'capitalize' }} size='small' variant='outlined' color="primary">View Profile</Button>
                                        </div>
                                    </div>
                                </div>

                                <div className="shadow-sm card cardColorPinkish rounded m-3" style={{ width: '18rem', border: '0px' }}>
                                    <div className="card-body">
                                        <div className='d-flex justify-content-between align-items-center mb-3'>
                                            <Avatar alt="Remy Sharp" src={appleLogo} />
                                            <div className='p-2 d-flex'>
                                                <span className='fw-bold mb-0 color-primary' style={{ fontSize: '30px' }}>13%</span>
                                            </div>
                                        </div>
                                        <h5 className="card-title fw-bold">Company Name</h5>
                                        <p className="card-subtitle mb-2 fw-bold">City, State</p>
                                        <p className="card-text font13 text-secondary">Some quick example text to build on the Company Name and make up the bulk of the card's content.</p>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <h6 className='fw-bold mb-0'>1300 ꜩ</h6>
                                            <Button style={{ textTransform: 'capitalize' }} size='small' variant='contained' color="primary">Invest</Button>
                                            <Button className='' style={{ textTransform: 'capitalize' }} size='small' variant='outlined' color="primary">View Profile</Button>
                                        </div>
                                    </div>
                                </div>

                                <div className="shadow-sm card cardColorPinkish rounded m-3" style={{ width: '18rem', border: '0px' }}>
                                    <div className="card-body">
                                        <div className='d-flex justify-content-between align-items-center mb-3'>
                                            <Avatar alt="Remy Sharp" src={appleLogo} />
                                            <div className='p-2 d-flex'>
                                                <span className='fw-bold mb-0 color-primary' style={{ fontSize: '30px' }}>13%</span>
                                            </div>
                                        </div>
                                        <h5 className="card-title fw-bold">Company Name</h5>
                                        <p className="card-subtitle mb-2 fw-bold">City, State</p>
                                        <p className="card-text font13 text-secondary">Some quick example text to build on the Company Name and make up the bulk of the card's content.</p>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <h6 className='fw-bold mb-0'>1300 ꜩ</h6>
                                            <Button style={{ textTransform: 'capitalize' }} size='small' variant='contained' color="primary">Invest</Button>
                                            <Button className='' style={{ textTransform: 'capitalize' }} size='small' variant='outlined' color="primary">View Profile</Button>
                                        </div>
                                    </div>
                                </div>

                                <div className="shadow-sm card cardColorPinkish rounded m-3" style={{ width: '18rem', border: '0px' }}>
                                    <div className="card-body">
                                        <div className='d-flex justify-content-between align-items-center mb-3'>
                                            <Avatar alt="Remy Sharp" src={appleLogo} />
                                            <div className='p-2 d-flex'>
                                                <span className='fw-bold mb-0 color-primary' style={{ fontSize: '30px' }}>13%</span>
                                            </div>
                                        </div>
                                        <h5 className="card-title fw-bold">Company Name</h5>
                                        <p className="card-subtitle mb-2 fw-bold">City, State</p>
                                        <p className="card-text font13 text-secondary">Some quick example text to build on the Company Name and make up the bulk of the card's content.</p>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <h6 className='fw-bold mb-0'>1300 ꜩ</h6>
                                            <Button style={{ textTransform: 'capitalize' }} size='small' variant='contained' color="primary">Invest</Button>
                                            <Button className='' style={{ textTransform: 'capitalize' }} size='small' variant='outlined' color="primary">View Profile</Button>
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







