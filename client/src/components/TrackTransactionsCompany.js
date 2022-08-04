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
    width: "400", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
        // Chart Configuration
        chart: {
            // caption: "Companies Market Share",
            // subCaption: "Last year",
            numberPrefix: "$",
            bgColor: "#fbfafa",
            startingAngle: "310",
            showLegend: "1",
            defaultCenterLabel: "Total Shares: $64.08K",
            centerLabel: "$label: $value",
            centerLabelBold: "1",
            enableSmartLabels: "0",
            showLegend: '0',
            // showTooltip: "0",
            // showPercentValues: "1",
            valuePosition: 'inside',
            labelPosition: "inside",
            minAngleForLabel: "360",
            showPercentInTooltip: "1",
            decimals: "0",
            theme: "fusion"
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

export const TrackTransactionsCompany = () => {
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

                        <div className='d-flex mt-2 justify-content-center'>
                            <div className='bg-white rounded15' style={{ width: '80%', cursor: 'pointer' }}>
                                <h6 className='fw-bold shadow-sm py-3 m-0 text-center banner'>Cap Table</h6>
                                {/* <h6 className='fw-bold mb-3 pb-2 ms-3'>Recent Transactions</h6> */}
                                <table className="table shadow-sm pb-0 mb-0 sidebar-color" style={{ overflow: 'hidden', height: '200px', borderRadius: '0px 0px 17px 17px' }}>
                                    <thead className='table-light'>
                                        <tr>
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
                                            <td className='align-middle'>Company Name</td>
                                            <td className='align-middle'>2,000,000</td>
                                            <td className='align-middle'>2,000,000</td>
                                            <td className='align-middle'>2,000,000</td>
                                            <td className='align-middle sidebar-color'>2,000,000</td>
                                            <td className='align-middle fw-bold sidebar-color'><DataUsageRoundedIcon className='me-2' />25%</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <img style={{ width: '32px', height: '32px', borderRadius: '50%' }} alt="Remy Sharp" src={appleLogo} />
                                            </th>
                                            <td className='align-middle'>Company Name</td>
                                            <td className='align-middle'>2,000,000</td>
                                            <td className='align-middle'>2,000,000</td>
                                            <td className='align-middle'>2,000,000</td>
                                            <td className='align-middle sidebar-color'>2,000,000</td>
                                            <td className='align-middle fw-bold sidebar-color'><DataUsageRoundedIcon className='me-2' />25%</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <img style={{ width: '32px', height: '32px', borderRadius: '50%' }} alt="Remy Sharp" src={appleLogo} />
                                            </th>
                                            <td className='align-middle'>Company Name</td>
                                            <td className='align-middle'>2,000,000</td>
                                            <td className='align-middle'>2,000,000</td>
                                            <td className='align-middle'>2,000,000</td>
                                            <td className='align-middle sidebar-color'>2,000,000</td>
                                            <td className='align-middle fw-bold sidebar-color'><DataUsageRoundedIcon className='me-2' />25%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className='d-flex mt-5 justify-content-center align-items-center'>
                            <div className='ms-2' style={{ height: '340px', overflow: 'hidden' }}>
                                <ReactFC className='doughnut' {...doughnutConfigs} />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
