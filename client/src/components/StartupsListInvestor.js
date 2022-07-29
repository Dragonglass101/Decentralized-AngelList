import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import appleLogo from '../images/apple-logo.png';
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

export const StartupsListInvestor = () => {
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
                <Navbar/>
                <main className={classes.content}>
                    <div id='startup-list'>
                        <h5 className='fw-bold mx-2 mt-4'>Recomended Startups</h5>
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
                </main>
            </div>
        </>
    )
}







