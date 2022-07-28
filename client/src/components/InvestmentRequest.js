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

export const InvestmentRequest = () => {
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

                    <h4 className='fw-bold'>Card List</h4>
                    <div id='request-page-container' className='container p-0 rounded my-2 d-flex' style={{ height: '85vh' }}>
                        <div className='h-100' style={{ overflow: 'auto', width: '35%' }}>
                            <div className="list-group">
                                {/* <button type="button" className="list-group-item list-group-item-action active" aria-current="true">
                                    The current button
                                </button> */}

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
                            <div className='container bg-white w-100 p-0 rounded'>
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







