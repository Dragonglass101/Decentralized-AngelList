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

    const navigationList = ['Dashboard', 'Search Startups', 'Track Investments', 'My Wallet'];
    const navigationIconList = [];

    const listElement = [];
    for(let i=0;i<navigationList.length;i++){
        listElement.push(
            <ListItem button key={navigationList[i]}>
                <ListItemText primary={navigationList[i]} />
            </ListItem>
        )
    }

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
                            {/* <div class="dropdown">
                                <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M3 18v-2h6v2Zm0-5v-2h12v2Zm0-5V6h18v2Z" /></svg>
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
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
                        {listElement}
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

                    <div id='dashboard' className='container h-100'>
                        <div className='row h-100'>
                            <div className='col-4 h-100'>

                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}







