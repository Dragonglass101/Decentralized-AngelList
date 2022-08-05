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
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

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
      // doughnutRadius:'85',
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

const lineChart = {
  "caption": "Company Valuation Graph",
  // "subcaption": "Last year",
  "yaxisname": "Valuation",
  "xaxisname": "Date",
  "yaxisminValue": "800",
  "yaxismaxValue": "1400",
  "pixelsPerPoint": "0",
  "pixelsPerLabel": "30",
  "lineThickness": "1",
  "compactdatamode": "1",
  "dataseparator": "|",
  "labelHeight": "30",
  "theme": "fusion"
}

const valuationData = [
  {
    label: "03:34, 25Jun",
    value: "35000$"
  },
  {
    label: "03:34, 25Jun",
    value: "34000$"
  },
  {
    label: "03:34, 25Jun",
    value: "37000$"
  },
  {
    label: "03:34, 25Jun",
    value: "32000$"
  },
  {
    label: "03:34, 25Jun",
    value: "40000$"
  },
  {
    label: "03:34, 25Jun",
    value: "50000$"
  },
  {
    label: "03:34, 25Jun",
    value: "47000$"
  },
  {
    label: "03:34, 25Jun",
    value: "53000$"
  },
  {
    label: "03:34, 25Jun",
    value: "30000$"
  }
];

const currencyChart = {
  bgcolor: "#FFFFFF",
  canvasBgColor: "#FFFFFF",
  showBorder: "0",
  showCanvasBorder: "0",
  showLabels: "0",
  drawCrossLine: "1",
  divLineAlpha: "0",
  showYAxisValues: "0",
  chartLeftMargin: "0",
  chartRightMargin: "0",
  canvasRightMargin: "0",
  canvasLeftMargin: "0",
  chartBottomMargin: "0",
  canvasBottomMargin: "0",
  chartTopMargin: "0",
  canvasTopMargin: "0",
  showValues: "0",
  shadow: "0",
  legendPadding: "0",
  showShadow: "0",
  paletteColors: "#3273DC",
  drawAnchors: "0",
  showAlternateHGridColor: "0",
  crossLineColor: "#363636",
  crossLineAlpha: "15",
  drawCrossLineOnTop: "0",
  usePlotGradientColor: "1",
  plotFillAlpha: "15",
  plotColorinTooltip: "0",
  tooltipBorderAlpha: "0",
  toolTipPadding: "0",
  baseFontColor: "#205BBB",
  baseFontSize: "15",
  baseFont: "Nunito",
  tooltipbgalpha: "0",
  plotFillAngle: "90",
  numberPrefix: "$",
  plotToolText: "<b>$label: $dataValue</b>"
}

const nrChartConfig = {
  type: "mscombi2d",
  width: "500",
  height: "200",
  dataFormat: "json",
  dataSource: {
    chart: currencyChart,
    categories: [{
      category: valuationData
    }],
    dataset: [
      {
        renderAs: "spline",
        lineThickness: "3",
        alpha: "50",
        data: valuationData
      }, {
        renderAs: "splinearea",
        showPlotBorder: "0",
        plotToolText: " ",
        data: valuationData
      }
    ]
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

          <NavFloating />

          <div className='px-3'>

            <div className='d-flex justify-content-around mb-3'>
              <div className="shadow-sm color-purple-border sidebar-background p-2 d-flex align-items-center justify-content-between" style={{ width: '17rem' }}>
                <PeopleAltRoundedIcon style={{ fontSize: '40px', color: 'linear-gradient(90deg, #4776E6 0%, #8E54E9 100%)' }} className='w-25 color-chat-request me-3' />
                <div className='w-75'>
                  <p className='mb-1 font13'>Employees Appointed</p>
                  <h5 className='mb-0 font15 fw-bold'>8.02K</h5>
                </div>

              </div>

              <div className="shadow-sm color-purple-border sidebar-background p-2 d-flex align-items-center justify-content-between" style={{ width: '15rem' }}>
                <AccountBalanceWalletRoundedIcon style={{ fontSize: '40px', color: 'linear-gradient(90deg, #4776E6 0%, #8E54E9 100%)' }} className='w-25 color-chat-request me-3' />
                <div className='w-75'>
                  <p className='mb-1 font13'>Company Valuation</p>
                  <h5 className='mb-0 font15 fw-bold'>1300 ꜩ</h5>
                </div>

              </div>

              <div className="shadow-sm color-purple-border sidebar-background p-2 d-flex align-items-center justify-content-between" style={{ width: '12rem' }}>
                <TrendingUpRoundedIcon style={{ fontSize: '40px', color: 'linear-gradient(90deg, #4776E6 0%, #8E54E9 100%)' }} className='w-25 color-chat-request me-3' />
                <div className='w-75'>
                  <p className='mb-1 font13'>Shares Issued</p>
                  <h5 className='mb-0 font15 fw-bold'>1300 ꜩ</h5>
                </div>

              </div>

              <div className="shadow-sm color-purple-border sidebar-background p-2 d-flex align-items-center justify-content-between" style={{ width: '11rem' }}>
                <MonetizationOnIcon style={{ fontSize: '40px', color: 'linear-gradient(90deg, #4776E6 0%, #8E54E9 100%)' }} className='w-25 color-chat-request me-3' />
                <div className='w-75'>
                  <p className='mb-1 font13'>Stock Price</p>
                  <h5 className='mb-0 font15 fw-bold'>9 ꜩ</h5>
                </div>

              </div>

            </div>

            <div className='d-flex align-items-center justify-content-around mb-1'>
              <div className='bg-white shadow rounded15 pt-3' style={{ width: 'fit-content' }}>
                <div className="px-3 d-flex justify-content-between">
                  <div>
                    <p className="text-secondary mb-1">Company Valuation</p>
                    <h4>$149.7K</h4>
                  </div>
                  <div>
                    <h4 className='text-danger'><ArrowDownwardRoundedIcon />2%</h4>
                  </div>
                </div>
                <ReactFC {...nrChartConfig} />
              </div>

              <div className='ms-2' style={{ height: '340px',width:'fit-content', overflow: 'hidden' }}>
                <ReactFC className='doughnut' {...doughnutConfigs} />
              </div>
            </div>


            <div className='d-flex justify-content-around align-items-center'>

              <div className='bg-white rounded15' style={{ width: '500px', cursor: 'pointer' }}>
                <h6 className='fw-bold shadow-sm py-3 m-0 text-center banner'>Recent Transactions</h6>
                {/* <h6 className='fw-bold mb-3 pb-2 ms-3'>Recent Transactions</h6> */}
                <table className="table shadow-sm pb-0 mb-0 sidebar-color" style={{ overflow: 'hidden', height: '200px', borderRadius: '0px 0px 17px 17px' }}>
                  <thead className='table-light'>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Account Holder</th>
                      <th scope="col">Date</th>
                      <th scope="col">Amount</th>
                    </tr>
                  </thead>
                  <tbody className='font13 text-secondary'>
                    <tr>
                      <th scope="row">
                        <img style={{ width: '32px', height: '32px', borderRadius: '50%' }} alt="Remy Sharp" src={appleLogo} />
                      </th>
                      <td className='align-middle'>Account Name</td>
                      <td className='align-middle'>Mar 20, 2022</td>
                      <td className='align-middle fw-bold text-black'><ArrowUpwardRoundedIcon className='color-credit me-2' />36,000 ꜩ</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <img style={{ width: '32px', height: '32px', borderRadius: '50%' }} alt="Remy Sharp" src={appleLogo} />
                      </th>
                      <td className='align-middle'>Account Name</td>
                      <td className='align-middle'>Mar 20, 2022</td>
                      <td className='align-middle fw-bold text-black'><ArrowDownwardRoundedIcon className='color-debit me-2' />36,000 ꜩ</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <img style={{ width: '32px', height: '32px', borderRadius: '50%' }} alt="Remy Sharp" src={appleLogo} />
                      </th>
                      <td className='align-middle'>Account Name</td>
                      <td className='align-middle'>Mar 20, 2022</td>
                      <td className='align-middle fw-bold text-black'><ArrowDownwardRoundedIcon className='color-debit me-2' />36,000 ꜩ</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='rounded15' style={{ width: '400px', cursor: 'pointer' }}>
                <h6 className='fw-bold shadow-sm py-3 m-0 text-center banner'>Stocks Owned</h6>
                <table className="table shadow-sm pb-0 mb-0 sidebar-color" style={{ overflow: 'hidden', height: '200px', borderRadius: '0px 0px 17px 17px' }}>
                  <thead className='table-light'>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Stakeholder</th>
                      <th scope="col">Shares Owned</th>
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
                      <td className='align-middle fw-bold sidebar-color'><DataUsageRoundedIcon className='me-2' />25%</td>
                    </tr>

                    <tr>
                      <th scope="row">
                        <img style={{ width: '32px', height: '32px', borderRadius: '50%' }} alt="Remy Sharp" src={appleLogo} />
                      </th>
                      <td className='align-middle'>Company Name</td>
                      <td className='align-middle'>2,000,000</td>
                      <td className='align-middle fw-bold sidebar-color'><DataUsageRoundedIcon className='me-2' />25%</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <img style={{ width: '32px', height: '32px', borderRadius: '50%' }} alt="Remy Sharp" src={appleLogo} />
                      </th>
                      <td className='align-middle'>Company Name</td>
                      <td className='align-middle'>2,000,000</td>
                      <td className='align-middle fw-bold sidebar-color'><DataUsageRoundedIcon className='me-2' />25%</td>
                    </tr>
                  </tbody>
                </table>
              </div>


            </div>
          </div>



          {/* <div className='d-flex align-items-start'>

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
          </div> */}

        </main>
      </div>
    </>
  )
}
