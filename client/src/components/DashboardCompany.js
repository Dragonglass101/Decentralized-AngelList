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

import Navbar from './InvestorNavbar';

import searchIcon from '../images/search.png'
import appleLogo from '../images/apple-logo.png'
import pieChart from '../images/pie-chart.png'
import walletImg from '../images/wallet.png'

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

export const DashboardCompany = () => {
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
          <div className='d-flex align-items-start'>

            <div id='walletImg' className='d-flex flex-column align-items-center justify-content-center' style={{ width: '20%' }}>
              <img style={{ width: '70%', height: 'fit-content' }} src={walletImg} />
              <h5 className='font13 fw-bold text-secondary'>Balance</h5>
              <h5 className='fw-bold font-numbers'>36,000 ꜩ</h5>
            </div>



            <div id='stock-enteries' className='container rounded25 shadow-sm cardColorGreyish p-4 ms-0 mt-4' style={{ width: '50%' }}>
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

            <div id='cap-table' className='container rounded25 shadow-sm background-cream p-4 ms-0' style={{ width: '40%' }}>
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

          </div>

          <div id='recent-transaction' className='shadow-sm container mt-3 ms-0 rounded25 px-5 py-2' style={{ width: '80%', backgroundColor: 'rgb(177 248 232 / 25%)', height: '295px', cursor: 'pointer', overflow: 'hidden' }}>
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
          </div>

        </main>
      </div>
    </>
  )
}
