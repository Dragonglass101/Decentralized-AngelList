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
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import AccountBalanceWalletRoundedIcon from '@material-ui/icons/AccountBalanceWalletRounded';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined'

import DataUsageRoundedIcon from '@material-ui/icons/DataUsageRounded';
import SearchIcon from '@material-ui/icons/Search';

// Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";
import ZoomLine from "fusioncharts/fusioncharts.zoomline"

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import MonetizationOn from '@material-ui/icons/MonetizationOn';

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, ZoomLine, Column2D, FusionTheme);


const chartData = [
    {
        label: "Founders",
        value: "285040"
    },
    {
        label: "Employees",
        value: "146330"
    },
    {
        label: "Investor A",
        value: "105070"
    },
    {
        label: "Investor B",
        value: "49100"
    },
    {
        label: "Option Pool",
        value: "49100"
    }
];

// Create a JSON object to store the chart configurations
const doughnutConfigs = {
    type: "doughnut2d", // The chart type
    width: "100%", // Width of the chart
    height: "500", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
        // Chart Configuration
        // chart: {
        //     // caption: "Companies Market Share",
        //     // subCaption: "Last year",
        //     numberPrefix: "$",
        //     bgColor: "#fbfafa",
        //     startingAngle: "310",
        //     showLegend: "1",
        //     defaultCenterLabel: "Total Shares: $64.08K",
        //     centerLabel: "$label: $value",
        //     centerLabelBold: "1",
        //     enableSmartLabels: "0",
        //     showLegend: '0',
        //     // showTooltip: "0",
        //     // showPercentValues: "1",
        //     valuePosition: 'inside',
        //     labelPosition: "inside",
        //     minAngleForLabel: "360",
        //     showPercentInTooltip: "1",
        //     decimals: "0",
        //     theme: "fusion"
        // },
        "chart": {
            "caption": "Company Market Share",
            "subCaption": "Last year",
            "numberPrefix": "$",
            "bgColor": "#ffffff",
            "startingAngle": "310",
            "showLegend": "1",
            "defaultCenterLabel": "Total revenue: $64.08K",
            "centerLabel": "Revenue from $label: $value",
            "centerLabelBold": "1",
            "showTooltip": "0",
            "decimals": "0",
            "theme": "fusion"
        },
        // Chart Data - from step 2
        data: chartData
    }
};

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
        backgroundColor: 'rgb(243,243,248)',
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

export const CapTable = () => {
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

                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='bg-white rounded shadow d-flex justify-content-around p-3' style={{ width: '32%' }}>
                                <div className='w-25'>
                                    <div className='d-flex justify-content-center align-items-center' style={{ width: '48px', height: '48px', backgroundColor: 'rgba(64,81,137,0.1)', borderRadius: '50%' }}>
                                        <MonetizationOn style={{ color: 'rgba(64,81,137,1)' }} />
                                    </div>
                                </div>
                                <div className='w-50'>
                                    <p className='my-1 font13 fw-bold text-secondary'>Company Valuation</p>
                                    <h6 className='fw-bold mb-0'>370k ꜩ</h6>
                                </div>
                                <div className='w-25' style={{ alignSelf: 'flex-end' }}>
                                    <div className='py-1 d-flex justify-content-center align-items-center rounded' style={{ backgroundColor: 'rgba(10,179,156,.1)', color: 'rgba(10,179,156,1)' }}>
                                        <KeyboardArrowUpIcon className='font15' />
                                        <span className='fw-bold font10' style={{}}>6.24%</span>
                                    </div>
                                </div>
                            </div>

                            <div className='bg-white rounded shadow d-flex justify-content-around p-3' style={{ width: '32%' }}>
                                <div className='w-25'>
                                    <div className='d-flex justify-content-center align-items-center' style={{ width: '48px', height: '48px', backgroundColor: 'rgba(64,81,137,0.1)', borderRadius: '50%' }}>
                                        <MonetizationOn style={{ color: 'rgba(64,81,137,1)' }} />
                                    </div>
                                </div>
                                <div className='w-50'>
                                    <p className='my-1 font13 fw-bold text-secondary'>Ownership Percentage</p>
                                    <h6 className='fw-bold mb-0'>84 %</h6>
                                </div>
                                <div className='w-25' style={{ alignSelf: 'flex-end' }}>
                                    <div className='py-1 d-flex justify-content-center align-items-center rounded' style={{ backgroundColor: 'rgba(240,101,72,.1)', color: 'rgba(240,101,72,1)' }}>
                                        <KeyboardArrowDownIcon className='font15' />
                                        <span className='fw-bold font10' style={{}}>5%</span>
                                    </div>
                                </div>
                            </div>

                            <div className='bg-white rounded shadow d-flex justify-content-around p-3' style={{ width: '32%' }}>
                                <div className='w-25'>
                                    <div className='d-flex justify-content-center align-items-center' style={{ width: '48px', height: '48px', backgroundColor: 'rgba(64,81,137,0.1)', borderRadius: '50%' }}>
                                        <MonetizationOn style={{ color: 'rgba(64,81,137,1)' }} />
                                    </div>
                                </div>
                                <div className='w-50'>
                                    <p className='my-1 font13 fw-bold text-secondary'>Investments Recieved</p>
                                    <h6 className='fw-bold mb-0'>150k ꜩ</h6>
                                </div>
                                <div className='w-25' style={{ alignSelf: 'flex-end' }}>
                                    <div className='py-1 d-flex justify-content-center align-items-center rounded' style={{ backgroundColor: 'rgba(240,101,72,.1)', color: 'rgba(240,101,72,1)' }}>
                                        <KeyboardArrowDownIcon className='font15' />
                                        <span className='fw-bold font10' style={{}}>6.24%</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='d-flex mt-3 justify-content-center align-items-center'>
                            <div className='w-100'>
                                <ReactFC className='shadow' {...doughnutConfigs} />
                            </div>
                        </div>

                        <div className='d-flex mt-4 justify-content-center align-items-center'>
                            <table className="table shadow pb-0 mb-0 sidebar-color bg-white" style={{ overflow: 'hidden', height: '200px', borderRadius: '0px 0px 17px 17px' }}>
                                <thead className='table-light'>
                                    <tr className='text-secondary'>
                                        <th scope="col"></th>
                                        <th scope="col">Stakeholder</th>
                                        <th scope="col">Common Shares</th>
                                        <th scope="col">Common Options</th>
                                        <th scope="col">Preferred Shares</th>
                                        <th scope="col">Total Shares</th>
                                        <th scope="col">Ownership</th>
                                    </tr>
                                </thead>
                                <tbody className='font13 text-secondary'>
                                    <tr>
                                        <th scope="row">
                                            <img style={{ width: '32px', height: '32px', borderRadius: '50%' }} alt="Remy Sharp" src={appleLogo} />
                                        </th>
                                        <td className='align-middle fw-bold text-black'>Company Name</td>
                                        <td className='align-middle'>2,000,000</td>
                                        <td className='align-middle'>2,000,000</td>
                                        <td className='align-middle'>2,000,000</td>
                                        <td className='align-middle sidebar-color'>2,000,000</td>
                                        <td className='align-middle fw-bold sidebar-color'>
                                            <BarChartOutlinedIcon className='mb-1 ms-1' style={{ color: 'rgb(37, 186, 168)' }} />
                                            25%
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <svg width="32px" height="32px" viewBox="126.444 2.281 589 589" xmlns="http://www.w3.org/2000/svg"><circle cx="420.944" cy="296.781" r="294.5" fill="#2daae1" /><path d="M609.773 179.634c-13.891 6.164-28.811 10.331-44.498 12.204 16.01-9.587 28.275-24.779 34.066-42.86a154.78 154.78 0 0 1-49.209 18.801c-14.125-15.056-34.267-24.456-56.551-24.456-42.773 0-77.462 34.675-77.462 77.473 0 6.064.683 11.98 1.996 17.66-64.389-3.236-121.474-34.079-159.684-80.945-6.672 11.446-10.491 24.754-10.491 38.953 0 26.875 13.679 50.587 34.464 64.477a77.122 77.122 0 0 1-35.097-9.686v.979c0 37.54 26.701 68.842 62.145 75.961-6.511 1.784-13.344 2.716-20.413 2.716-4.998 0-9.847-.473-14.584-1.364 9.859 30.769 38.471 53.166 72.363 53.799-26.515 20.785-59.925 33.175-96.212 33.175-6.25 0-12.427-.373-18.491-1.104 34.291 21.988 75.006 34.824 118.759 34.824 142.496 0 220.428-118.052 220.428-220.428 0-3.361-.074-6.697-.236-10.021a157.855 157.855 0 0 0 38.707-40.158z" fill="#fff" /></svg>
                                        </th>
                                        <td className='align-middle fw-bold text-black'>Company Name</td>
                                        <td className='align-middle'>2,000,000</td>
                                        <td className='align-middle'>2,000,000</td>
                                        <td className='align-middle'>2,000,000</td>
                                        <td className='align-middle sidebar-color'>2,000,000</td>
                                        <td className='align-middle fw-bold sidebar-color'><BarChartOutlinedIcon className='mb-1 ms-1' style={{ color: 'rgb(37, 186, 168)' }} />25%</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <svg width="32px" height="32px" viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4" /><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853" /><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05" /><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335" /></svg>
                                        </th>
                                        <td className='align-middle fw-bold text-black'>Company Name</td>
                                        <td className='align-middle'>2,000,000</td>
                                        <td className='align-middle'>2,000,000</td>
                                        <td className='align-middle'>2,000,000</td>
                                        <td className='align-middle sidebar-color'>2,000,000</td>
                                        <td className='align-middle fw-bold sidebar-color'><BarChartOutlinedIcon className='mb-1 ms-1' style={{ color: 'rgb(37, 186, 168)' }} />25%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
