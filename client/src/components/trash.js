import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
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


import searchIcon from '../images/search.png'
import appleLogo from '../images/apple-logo.png'
import pieChart from '../images/pie-chart.png'

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
                    <Toolbar className='d-flex justify-content-between'>
                        <Typography className='fw-bold ms-2' variant="h6" noWrap>
                            Startups List
                        </Typography>
                        <div className='d-flex'>
                            <div className={classes.search}>
                                <img className='mx-2 ' width='26px' height='26px' src={searchIcon}></img>
                                <InputBase
                                    placeholder="Search…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </div>
                            {/* <div className="dropdown">
                                <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M3 18v-2h6v2Zm0-5v-2h12v2Zm0-5V6h18v2Z" /></svg>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div> */}
                            <Button aria-controls="simple-menu" variant='contained' aria-haspopup="true" onClick={handleClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M3 18v-2h6v2Zm0-5v-2h12v2Zm0-5V6h18v2Z" /></svg>
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Sort</MenuItem>
                                <MenuItem onClick={handleClose}>My Sort</MenuItem>
                                <MenuItem onClick={handleClose}>Sort</MenuItem>
                            </Menu>
                        </div>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    style={{ backgroundColor: 'rgb(26,27,47)', color: 'rgb(26,27,47)' }}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    anchor="left"
                >
                    <div className={classes.toolbar} />
                    <Divider />
                    <List>
                        {['Dashboard', 'Search Startups', 'Track Investments', 'My Wallet'].map((text, index) => (
                            <ListItem button key={text}>
                                {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider style={{ color: 'grey', backgroundColor: 'grey', marginTop: '350px' }} />
                    <List>
                        {['Help and Support'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <main className={classes.content}>
                    <div id='startup-list'>
                        <h5 className='fw-bold mx-2 mt-4'>Recomended Startups</h5>
                        <div className='d-flex flex-wrap'>
                            <div className="card cardColorPinkish rounded m-2" style={{ width: '18rem', border: '0px' }}>
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

                    <div id='recent-transaction' className='container mt-3 bg-white ms-0' style={{ width: '75%' }}>
                        <h6 className='fw-bold pt-3 mb-4'>Recent Transactions</h6>
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

                    <div id='cap-table' className='container rounded25 background-cream p-4 ms-0' style={{ width: '40%' }}>
                        <h4 className='fw-bold'>Cap table</h4>
                        <div className='container p-0 bg-white my-3 d-flex rounded' style={{ height: '35px', overflow: 'hidden' }}>
                            <div id='founder-percent' className='h-100 background-darkBlue' style={{ width: '64.20%' }}></div>
                            <div id='employee-percent' className='h-100 background-chocolate' style={{ width: '23.76%' }}></div>
                            <div id='seriesA-percent' className='h-100 bg-black' style={{ width: '6.02%' }}></div>
                            <div id='seriesB-percent' className='h-100 bg-white' style={{ width: '6.02%' }}></div>
                        </div>
                        <div id='cap-table-enteries'>
                            <div className='container'>
                                <div className='mb-3 px-4 d-flex justify-content-between text-secondary'>
                                    <span className='font10'>Authorized</span>
                                    <span className='font10'>Issued</span>
                                    <span className='font10'>Ownership</span>
                                </div>
                                <div className='mb-4'>
                                    <div className='d-flex align-items-center'>
                                        <div className='rounded background-darkBlue me-2' style={{ height: '15px', width: '15px' }}></div>
                                        <span className='fw-bold font15'>Founders</span>
                                    </div>
                                    <div className='d-flex justify-content-between my-1 px-4'>
                                        <span className='font13'>50,000,000</span>
                                        <span className='font13'>50,000,000</span>
                                        <span className='font13'>70.22%</span>
                                    </div>
                                </div>

                                <div className='mb-4'>
                                    <div className='d-flex align-items-center'>
                                        <div className='rounded background-chocolate me-2' style={{ height: '15px', width: '15px' }}></div>
                                        <span className='fw-bold font15'>Employees</span>
                                    </div>
                                    <div className='d-flex justify-content-between my-1 px-4'>
                                        <span className='font13'>30,000,000</span>
                                        <span className='font13'>10,000,000</span>
                                        <span className='font13'>23.76%</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div id='stock-enteries' className='container rounded25 cardColorGreyish p-4 ms-0 mt-4' style={{ width: '50%' }}>
                        <h4 className='fw-bold'>Stocks</h4>
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

                    <div id='request-page-container' className='container cardColorGreyish p-0 rounded my-4 d-flex' style={{ height: '80vh' }}>
                        <div className='h-100 bg-dark' style={{ overflow: 'auto', width: '35%' }}>
                            <div className="list-group">
                                <button type="button" className="list-group-item list-group-item-action active" aria-current="true">
                                    The current button
                                </button>
                                <button type="button" className="list-group-item list-group-item-action d-flex">
                                    <div className='col-2 p-0'>
                                        <Avatar alt="Remy Sharp" src={appleLogo} />
                                    </div>
                                    <div className='d-flex flex-column col-7 align-self-center'>
                                        <span className='fw-bold font13'>Apple Inc.</span>
                                        <span className='font10 text-secondary'>1300 ꜩ</span>
                                    </div>
                                    <span className='font13 text-secondary col-3 pe-0' style={{ textAlign: 'right' }}>25 Jul</span>
                                </button>
                                <button type="button" className="list-group-item list-group-item-action d-flex">
                                    <div className='col-2 p-0'>
                                        <Avatar alt="Remy Sharp" src={appleLogo} />
                                    </div>
                                    <div className='d-flex flex-column col-7 align-self-center'>
                                        <span className='fw-bold font13'>Apple Inc.</span>
                                        <span className='font10 text-secondary'>1300 ꜩ</span>
                                    </div>
                                    <span className='font13 text-secondary col-3 pe-0' style={{ textAlign: 'right' }}>25 Jul</span>
                                </button>
                                <button type="button" className="list-group-item list-group-item-action d-flex">
                                    <div className='col-2 p-0'>
                                        <Avatar alt="Remy Sharp" src={appleLogo} />
                                    </div>
                                    <div className='d-flex flex-column col-7 align-self-center'>
                                        <span className='fw-bold font13'>Apple Inc.</span>
                                        <span className='font10 text-secondary'>1300 ꜩ</span>
                                    </div>
                                    <span className='font13 text-secondary col-3 pe-0' style={{ textAlign: 'right' }}>25 Jul</span>
                                </button>
                                <button type="button" className="list-group-item list-group-item-action d-flex">
                                    <div className='col-2 p-0'>
                                        <Avatar alt="Remy Sharp" src={appleLogo} />
                                    </div>
                                    <div className='d-flex flex-column col-7 align-self-center'>
                                        <span className='fw-bold font13'>Apple Inc.</span>
                                        <span className='font10 text-secondary'>1300 ꜩ</span>
                                    </div>
                                    <span className='font13 text-secondary col-3 pe-0' style={{ textAlign: 'right' }}>25 Jul</span>
                                </button>
                                <button type="button" className="list-group-item list-group-item-action d-flex">
                                    <div className='col-2 p-0'>
                                        <Avatar alt="Remy Sharp" src={appleLogo} />
                                    </div>
                                    <div className='d-flex flex-column col-7 align-self-center'>
                                        <span className='fw-bold font13'>Apple Inc.</span>
                                        <span className='font10 text-secondary'>1300 ꜩ</span>
                                    </div>
                                    <span className='font13 text-secondary col-3 pe-0' style={{ textAlign: 'right' }}>25 Jul</span>
                                </button>
                                <button type="button" className="list-group-item list-group-item-action d-flex">
                                    <div className='col-2 p-0'>
                                        <Avatar alt="Remy Sharp" src={appleLogo} />
                                    </div>
                                    <div className='d-flex flex-column col-7 align-self-center'>
                                        <span className='fw-bold font13'>Apple Inc.</span>
                                        <span className='font10 text-secondary'>1300 ꜩ</span>
                                    </div>
                                    <span className='font13 text-secondary col-3 pe-0' style={{ textAlign: 'right' }}>25 Jul</span>
                                </button>
                                <button type="button" className="list-group-item list-group-item-action d-flex">
                                    <div className='col-2 p-0'>
                                        <Avatar alt="Remy Sharp" src={appleLogo} />
                                    </div>
                                    <div className='d-flex flex-column col-7 align-self-center'>
                                        <span className='fw-bold font13'>Apple Inc.</span>
                                        <span className='font10 text-secondary'>1300 ꜩ</span>
                                    </div>
                                    <span className='font13 text-secondary col-3 pe-0' style={{ textAlign: 'right' }}>25 Jul</span>
                                </button>
                                <button type="button" className="list-group-item list-group-item-action d-flex">
                                    <div className='col-2 p-0'>
                                        <Avatar alt="Remy Sharp" src={appleLogo} />
                                    </div>
                                    <div className='d-flex flex-column col-7 align-self-center'>
                                        <span className='fw-bold font13'>Apple Inc.</span>
                                        <span className='font10 text-secondary'>1300 ꜩ</span>
                                    </div>
                                    <span className='font13 text-secondary col-3 pe-0' style={{ textAlign: 'right' }}>25 Jul</span>
                                </button>
                                <button type="button" className="list-group-item list-group-item-action d-flex">
                                    <div className='col-2 p-0'>
                                        <Avatar alt="Remy Sharp" src={appleLogo} />
                                    </div>
                                    <div className='d-flex flex-column col-7 align-self-center'>
                                        <span className='fw-bold font13'>Apple Inc.</span>
                                        <span className='font10 text-secondary'>1300 ꜩ</span>
                                    </div>
                                    <span className='font13 text-secondary col-3 pe-0' style={{ textAlign: 'right' }}>25 Jul</span>
                                </button>
                                <button type="button" className="list-group-item list-group-item-action d-flex">
                                    <div className='col-2 p-0'>
                                        <Avatar alt="Remy Sharp" src={appleLogo} />
                                    </div>
                                    <div className='d-flex flex-column col-7 align-self-center'>
                                        <span className='fw-bold font13'>Apple Inc.</span>
                                        <span className='font10 text-secondary'>1300 ꜩ</span>
                                    </div>
                                    <span className='font13 text-secondary col-3 pe-0' style={{ textAlign: 'right' }}>25 Jul</span>
                                </button>

                            </div>
                        </div>
                        <div style={{ width: '65%' }}>
                            <div className='container bg-white w-75 my-5 p-0 rounded'>
                                <div className='row m-0 p-0 border'>
                                    <div className='col-5 font15 fw-bold text-center font-digitalClock m-0 p-3 bg-dark text-white rounded'>
                                        <h5 className='fw-bold'>Remaining Time</h5>
                                    </div>
                                    <div className='col-7 font15 fw-bold h-100 m-0 p-3 text-dark rounded d-flex justify-content-around'>
                                        <div>
                                            <h4 className='font-digitalClock fw-bold'>07</h4>
                                            <span className='text-secondary'>Days</span>
                                        </div>
                                        <h4 className='text-secondary'>:</h4>
                                        <div>
                                            <h4 className='font-digitalClock fw-bold'>12</h4>
                                            <span className='text-secondary'>Hrs</span>
                                        </div>
                                        <h4 className='text-secondary'>:</h4>
                                        <div>
                                            <h4 className='font-digitalClock fw-bold'>47</h4>
                                            <span className='text-secondary'>Mins</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='container w-50 p-0 py-5'>
                                    <div className='d-flex mb-3 text-center mx-auto align-items-center justify-content-center'>
                                        <Avatar alt="Remy Sharp" src={appleLogo} />
                                        <h4 className='font-numbers my-auto ms-3'>Apple Inc.</h4>
                                    </div>
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                {/* <th>SAFE</th>
                                                <th>NOTE</th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                {/* <th scope="row">1</th> */}
                                                <th>Ownership</th>
                                                <td>13%</td>
                                            </tr>
                                            <tr>
                                                {/* <th scope="row">2</th> */}
                                                <th>Valuation Cap</th>
                                                <td>1300 ꜩ</td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className='row m-0 rounded text-white text-center bg-dark d-flex'>
                                    <h3 className='col-9 m-0 p-0 font-numbers fw-bold my-auto' style={{ fontSize: '36px' }}>36,000 ꜩ</h3>
                                    <Button size='large' className='col-3 m-0 w-100 fw-bold' style={{ textTransform: 'capitalize', fontSize: '30px' }} variant='contained' color="primary">Invest</Button>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </>
    )
}







