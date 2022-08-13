import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { getRootStorage } from '../utils/Api';
import { getActiveAccount, connectWallet } from '../utils/wallet';

import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import SearchIcon from '@material-ui/icons/Search';
import Divider from '@material-ui/core/Divider';

import stock1 from '../images/stocks/stock1.png'
import stock2 from '../images/stocks/stock2.png'
import stock3 from '../images/stocks/stock3.png'

import sample1 from '../images/logo/sample-1.jpg'
import sample2 from '../images/logo/sample-2.jpg'
import dragon_glass from '../images/logo/dragon_glass.png'

import buy1 from '../images/Marketplace/ProfilePic.png'
import buy2 from '../images/Marketplace/stockPrice.png'

import chart1 from '../images/charts/chart1.png'
import chart2 from '../images/charts/chart2.png'
import chart3 from '../images/charts/chart3.png'
import chart4 from '../images/charts/chart4.png'
import chart5 from '../images/charts/chart5.png'

import img1 from '../images/home/end_minus_5.png';
import img2 from '../images/home/end_minus_4.png';
import img3 from '../images/home/end_minus_3.png';
import img4 from '../images/home/end_minus_2.png';
import img5 from '../images/home/end_minus_1.png';
import img6 from '../images/home/end.png';
import img7 from '../images/home/end_plus_1.png';
import angellist_abstract from '../images/stocks/angellist_abstract.png'
import marketplace from '../images/marketplace.png'
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Avatar from '@material-ui/core/Avatar';
import appleLogo from '../images/apple-logo.png'

import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import RedditIcon from '@material-ui/icons/Reddit';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import angellist_logo from '../images/home/angellist_logo.png'
import devils_logo_img from '../images/logo/devils_logo_800px_trans.png'
import devils_logo_svg from '../images/logo/devils_logo.svg'
import small_devils_logo from '../images/logo/small_devils_logo.png'
import { Button } from '@material-ui/core';

// Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";
import ZoomLine from "fusioncharts/fusioncharts.zoomline"

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { payVndr } from '../utils/operation';

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, ZoomLine, Column2D, FusionTheme);

const stockConfigs = {
    type: "zoomline",
    width: "700", // Width of the chart
    height: "450", // Height of the chart
    dataFormat: "JSON",
    dataSource: {
        chart: {
            // caption: "Houses leased vs sold across US in 2017",
            // subcaption: "Click & drag on the plot area to zoom & then scroll",
            yaxisname: "Number of houses",
            xaxisname: "Date",
            forceaxislimits: "1",
            pixelsperpoint: "0",
            pixelsperlabel: "30",
            compactdatamode: "1",
            dataseparator: "|",
            theme: "fusion"
        },
        categories: [
            {
                category:
                    "Jan 01|Jan 02|Jan 03|Jan 04|Jan 05|Jan 06|Jan 07|Jan 08|Jan 09|Jan 10|Jan 11|Jan 12|Jan 13|Jan 14|Jan 15|Jan 16|Jan 17|Jan 18|Jan 19|Jan 20|Jan 21|Jan 22|Jan 23|Jan 24|Jan 25|Jan 26|Jan 27|Jan 28|Jan 29|Jan 30|Jan 31|Feb 01|Feb 02|Feb 03|Feb 04|Feb 05|Feb 06|Feb 07|Feb 08|Feb 09|Feb 10|Feb 11|Feb 12|Feb 13|Feb 14|Feb 15|Feb 16|Feb 17|Feb 18|Feb 19|Feb 20|Feb 21|Feb 22|Feb 23|Feb 24|Feb 25|Feb 26|Feb 27|Feb 28|Mar 01|Mar 02|Mar 03|Mar 04|Mar 05|Mar 06|Mar 07|Mar 08|Mar 09|Mar 10|Mar 11|Mar 12|Mar 13|Mar 14|Mar 15|Mar 16|Mar 17|Mar 18|Mar 19|Mar 20|Mar 21|Mar 22|Mar 23|Mar 24|Mar 25|Mar 26|Mar 27|Mar 28|Mar 29|Mar 30|Mar 31|Apr 01|Apr 02|Apr 03|Apr 04|Apr 05|Apr 06|Apr 07|Apr 08|Apr 09|Apr 10|Apr 11|Apr 12|Apr 13|Apr 14|Apr 15|Apr 16|Apr 17|Apr 18|Apr 19|Apr 20|Apr 21|Apr 22|Apr 23|Apr 24|Apr 25|Apr 26|Apr 27|Apr 28|Apr 29|Apr 30|May 01|May 02|May 03|May 04|May 05|May 06|May 07|May 08|May 09|May 10|May 11|May 12|May 13|May 14|May 15|May 16|May 17|May 18|May 19|May 20|May 21|May 22|May 23|May 24|May 25|May 26|May 27|May 28|May 29|May 30|May 31|Jun 01|Jun 02|Jun 03|Jun 04|Jun 05|Jun 06|Jun 07|Jun 08|Jun 09|Jun 10|Jun 11|Jun 12|Jun 13|Jun 14|Jun 15|Jun 16|Jun 17|Jun 18|Jun 19|Jun 20|Jun 21|Jun 22|Jun 23|Jun 24|Jun 25|Jun 26|Jun 27|Jun 28|Jun 29|Jun 30|Jul 01|Jul 02|Jul 03|Jul 04|Jul 05|Jul 06|Jul 07|Jul 08|Jul 09|Jul 10|Jul 11|Jul 12|Jul 13|Jul 14|Jul 15|Jul 16|Jul 17|Jul 18|Jul 19|Jul 20|Jul 21|Jul 22|Jul 23|Jul 24|Jul 25|Jul 26|Jul 27|Jul 28|Jul 29|Jul 30|Jul 31|Aug 01|Aug 02|Aug 03|Aug 04|Aug 05|Aug 06|Aug 07|Aug 08|Aug 09|Aug 10|Aug 11|Aug 12|Aug 13|Aug 14|Aug 15|Aug 16|Aug 17|Aug 18|Aug 19|Aug 20|Aug 21|Aug 22|Aug 23|Aug 24|Aug 25|Aug 26|Aug 27|Aug 28|Aug 29|Aug 30|Aug 31|Sep 01|Sep 02|Sep 03|Sep 04|Sep 05|Sep 06|Sep 07|Sep 08|Sep 09|Sep 10|Sep 11|Sep 12|Sep 13|Sep 14|Sep 15|Sep 16|Sep 17|Sep 18|Sep 19|Sep 20|Sep 21|Sep 22|Sep 23|Sep 24|Sep 25|Sep 26|Sep 27|Sep 28|Sep 29|Sep 30|Oct 01|Oct 02|Oct 03|Oct 04|Oct 05|Oct 06|Oct 07|Oct 08|Oct 09|Oct 10|Oct 11|Oct 12|Oct 13|Oct 14|Oct 15|Oct 16|Oct 17|Oct 18|Oct 19|Oct 20|Oct 21|Oct 22|Oct 23|Oct 24|Oct 25|Oct 26|Oct 27|Oct 28|Oct 29|Oct 30|Oct 31|Nov 01|Nov 02|Nov 03|Nov 04|Nov 05|Nov 06|Nov 07|Nov 08|Nov 09|Nov 10|Nov 11|Nov 12|Nov 13|Nov 14|Nov 15|Nov 16|Nov 17|Nov 18|Nov 19|Nov 20|Nov 21|Nov 22|Nov 23|Nov 24|Nov 25|Nov 26|Nov 27|Nov 28|Nov 29|Nov 30|Dec 01|Dec 02|Dec 03|Dec 04|Dec 05|Dec 06|Dec 07|Dec 08|Dec 09|Dec 10|Dec 11|Dec 12|Dec 13|Dec 14|Dec 15|Dec 16|Dec 17|Dec 18|Dec 19|Dec 20|Dec 21|Dec 22|Dec 23|Dec 24|Dec 25|Dec 26|Dec 27|Dec 28|Dec 29|Dec 30|Dec 31"
            }
        ],
        dataset: [
            {
                seriesname: "Sold",
                data:
                    "2140|2160|1667|1645|1740|1932|1127|1137|1172|1181|1142|1134|1117|1147|1141|1149|1150|1113|1119|1110|1092|1102|1128|1131|1083|1081|1087|1088|1092|1609|1112|1065|1063|1057|1045|1043|1078|1083|1043|2039|1036|1031|1048|1056|1074|1045|1037|1034|1039|1031|1045|2048|2031|2019|2026|2017|2011|2022|2027|2022|1017|1019|1010|1015|1023|1029|1020|1009|2012|2008|2015|2027|1033|1008|1007|1009|1010|1013|1017|1024|1012|1009|1007|1009|1011|1015|1020|1004|1009|1011|1028|1037|1049|1057|1045|1047|1056|1068|1077|1089|1100|1090|1086|1094|1098|1101|1125|1131|1111|1102|1109|1099|1094|1112|1121|1102|1094|1087|1089|1097|2139|1148|1131|1127|1129|1122|1137|1158|1174|1145|1143|1137|2139|2147|2156|1162|1134|1127|1130|1123|1117|1137|1138|1117|2109|1107|1100|1107|1120|2122|2120|2112|1100|1094|1090|1100|2102|2052|2054|2044|2047|1063|1077|2080|2050|1047|1030|1022|1021|1022|1025|1015|1009|1010|1007|2002|1010|1020|2000|1994|2990|2987|2910|2001|999|982|977|967|966|974|990|987|974|977|969|962|967|972|977|961|957|959|960|958|967|970|959|954|962|961|957|980|987|977|976|979|982|983|1000|1009|994|999|1002|1009|1015|1024|1029|1020|1011|1009|1015|1010|1025|1031|1019|1018|1022|1014|1018|1022|1025|1010|1022|1017|1019|1010|1015|1023|1029|1020|1009|1012|1008|1015|1027|1033|1008|1007|1009|1010|1013|1017|1024|1012|1009|1007|1009|1011|1015|1020|1004|1009|1045|1043|1078|1083|1043|1039|1036|1031|1048|1056|1074|1045|1037|1034|1039|1031|1045|1048|1031|1019|1026|1017|1011|1022|1027|1022|1020|1023|1024|1025|1040|1057|1035|1033|1037|1047|1049|1068|1074|1052|1059|1064|1860|1064|1080|1089|1080|2081|2079|2086|2084|2090|2099|2090|2391|1088|1084|1082|1089|1100|1094|1127|1129|1122|1137|1158|1174|1145|1143|1137|1139|1947|2156|2162|2134|1927|1930|1923|1917|1937|1938|1117|1109|1907|2100|2107|2137|1640|1620|1827|2130|2131"
            },
            {
                seriesname: "Rented",
                data:
                    "2127|2129|2122|2137|2158|2174|2145|2143|2137|2139|2147|2156|2162|2134|2127|2131|2123|2117|2137|2138|2217|2192|2171|2122|2173|2137|2144|2124|2127|2133|2131|2147|2166|2167|2145|2614|2132|2127|2137|2172|2181|2142|2134|2117|2147|2141|2149|2165|2113|2119|2161|2692|2612|2128|2131|2838|2881|2897|2898|2495|2430|2780|2873|2463|2639|2366|2361|2468|2566|2774|2745|2377|2834|2399|2301|2445|2348|2431|2319|2426|2517|2161|2726|2627|2262|2672|2267|2254|2265|2455|3272|2667|2669|2556|2665|2673|2759|2567|2659|2652|2558|2665|2747|2853|2558|2557|2549|2446|2563|2667|2674|2672|2589|2578|2599|2671|2675|2777|2754|2579|2115|2537|2177|2975|2983|2988|2133|2983|2889|2886|2881|2799|2186|2124|2985|2887|2884|2879|2871|2975|2798|2781|2679|2776|2687|2691|2720|2707|2887|2872|2878|2664|2637|2774|2577|2489|2322|2327|2117|2136|2234|1939|1937|1974|1977|1969|1962|1967|1972|1977|1961|1957|1959|1916|1958|1967|1973|1959|1954|1962|1961|1957|1983|1987|1977|1976|1979|1982|1983|2133|2319|1994|1999|2233|2339|2135|2324|2239|2332|2131|2933|2135|2144|2255|2351|2159|2158|2252|2154|2158|2225|2255|2152|2112|2152|2954|2952|2251|2122|2552|2554|2454|2457|2653|2757|2558|2555|2457|2355|2252|2521|2522|2525|2515|2559|2551|2527|2222|2521|2522|2222|1994|3222|2417|2419|2214|2145|2423|2429|2442|2449|2412|2448|2215|2327|2333|3238|2337|2339|2311|2513|2517|2524|2512|2559|2557|2595|2611|2415|2642|2464|2946|2611|2628|2367|2469|2657|2645|2647|2656|2668|2677|2689|2641|2669|2686|2964|2968|2611|2125|2131|2111|2162|2619|2699|2964|2112|2121|2612|2964|2867|2869|2976|2567|2365|2334|2637|2467|2469|2668|2674|2652|2659|2674|2677|2674|2778|2879|2778|2871|2779|2786|2784|2779|2997|2977|2917|2878|2874|2872|2879|2771|2974|2139|2148|2131|2127|2129|2122|2137|2158|2174|2145|2143|2137|2139|2147|2156|2162|2134|2127|2713|2123|2117|2137|2138|2117|2169|2717|2641|2147|2124|2122|2124"
            }
        ]
    }
}

const nftGraphConfigs = {
    type: "msline", // The chart type
    width: "1100", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
        "chart": {
            "theme": "fusion",
            // "caption": "Number of visitors last week",
            // "subCaption": "Bakersfield Central vs Los Angeles Topanga",
            "xAxisName": "Day"
        },
        "categories": [
            {
                "category": [
                    {
                        "label": "Mon"
                    },
                    {
                        "label": "Tue"
                    },
                    {
                        "label": "Wed"
                    },
                    {
                        "vline": "true",
                        "lineposition": "0",
                        "color": "#62B58F",
                        "labelHAlign": "center",
                        "labelPosition": "0",
                        "label": "National holiday",
                        "dashed": "1"
                    },
                    {
                        "label": "Thu"
                    },
                    {
                        "label": "Fri"
                    },
                    {
                        "label": "Sat"
                    },
                    {
                        "label": "Sun"
                    }
                ]
            }
        ],
        "dataset": [
            {
                "seriesname": "Bakersfield Central",
                "data": [
                    {
                        "value": "15123"
                    },
                    {
                        "value": "14233"
                    },
                    {
                        "value": "25507"
                    },
                    {
                        "value": "9110"
                    },
                    {
                        "value": "15529"
                    },
                    {
                        "value": "20803"
                    },
                    {
                        "value": "19202"
                    }
                ]
            },
            {
                "seriesname": "Los Angeles Topanga",
                "data": [
                    {
                        "value": "13400"
                    },
                    {
                        "value": "12800"
                    },
                    {
                        "value": "22800"
                    },
                    {
                        "value": "12400"
                    },
                    {
                        "value": "15800"
                    },
                    {
                        "value": "19800"
                    },
                    {
                        "value": "21800"
                    }
                ]
            }
        ],
        "trendlines": [
            {
                "line": [
                    {
                        "startvalue": "17022",
                        "color": "#62B58F",
                        "valueOnRight": "1",
                        "displayvalue": "Average"
                    }
                ]
            }
        ]
    }
}

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
        backgroundColor: theme.palette.background.paper,
        width: 500,
    },
}));



export const BuySellShares = () => {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    async function showAlertBuy(){
        if(window.confirm("Seller found, Name of Seller: Anurag")){
            await payVndr(1000, "tz1Yik5c1vGKgB3yyytZqrjxb1hbuSF2X8MZ", "tz1baoq2Ys4aqUGDJWYtWVpTxfUup9PdEpoP", "buying");
        }
        alert("Token Transfer Successful");
    }
    return (
        <>
            <nav className='d-flex justify-content-between align-items-center shadow rounded15 px-3' style={{ height: '70px', marginBottom: '30px' }}>
                <div className='d-flex align-items-center justify-content-start'>
                    <img src={small_devils_logo} style={{ width: '48px' }} />
                    <span className='pt-3 ms-3 fw-bold' style={{ fontFamily: 'devils_lairs_font', fontSize: '40px', alignSelf: 'flex-end' }}>Devils Marketplace</span>
                </div>
                {/* <span className='font15 ms-5 ps-5 fw-bold'>Dashboard</span> */}
                <div className='d-flex align-items-center w-50 justify-content-between'>
                    {/* <span className='btn'>For Investors</span>
                    <span className='btn'>For Fund Managers</span>
                    <span className='btn'>For Founders</span>
                    <span className='btn'>Company</span>
                    <span className='btn'>Help</span> */}
                </div>

                <div className='d-flex justify-content-between align-items-center'>
                    {/* <Button className='mx-2' variant="outlined" color="primary" onClick={handleLogin}>
                        Log in
                    </Button>
                    <Link to='/sign-up'>
                        <Button className='mx-2' variant="contained" color="primary">
                            Join
                        </Button>
                    </Link> */}
                </div>
            </nav>

            <div className='d-flex'>
                <div className='p-4 mx-auto shadow' style={{ width: '80%' }}>
                    <div className='pb-4 ms-5'>
                        <h3 className='mb-0'>Welcome Rakshit!</h3><h5><br/>Wallet Balance</h5>
                        <div className='d-flex align-items-start'>
                            <h3 className='me-2 mb-0 pb-0 display-4'>28850.25</h3>
                            <h4 className='mt-2 mb-0 pb-0 text-secondary'>XTZ</h4>
                        </div>
                    </div>

                    <AppBar position="static" color="default">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"
                            centered
                            aria-label="full width tabs example"
                        >
                            <Tab label="Buy" {...a11yProps(0)} />
                            <Tab label="Sell" {...a11yProps(1)} />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <div className='p-3'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div style={{ width: '60%' }}>
                                        <img src={buy1} className='w-100' />
                                    </div>
                                    <div style={{ width: '40%' }}>
                                        <div className='p-3 bg-white shadow'>
                                            <h5 className='fw-bold pb-2'>Market Order</h5>
                                            <div className='my-3 d-flex justify-content-between align-items-center'>
                                                <span className='text-secondary'>Tokens</span>
                                                <input defaultValue={0} style={{ width: '35%' }} type="number" className="form-control" id="exampleFormControlInput1" placeholder="" />
                                            </div>

                                            <div className='my-3 d-flex justify-content-between align-items-center'>
                                                <span className='text-secondary'>Market Price</span>
                                                <input defaultValue={0} style={{ width: '35%' }} type="number" className="form-control" id="exampleFormControlInput1" placeholder="" />
                                            </div>

                                            <Divider />

                                            <div className='my-3 d-flex justify-content-between align-items-center'>
                                                <span className='text-secondary'>Commissions</span>
                                                <span className='fw-bold'>0.00 XTZ</span>
                                            </div>

                                            <Button onClick={()=>{setTimeout(showAlertBuy, 2000)}} style={{ backgroundColor: 'rgb(79,57,246)' }} className='d-block w-100' variant='contained' color='primary'>Buy Tokens</Button>

                                            <div className='my-3 text-center'>
                                                <span className='text-secondary'>Trade Options</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <div className='p-3'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div style={{ width: '60%' }}>
                                        <img src={buy2} className='w-100' />
                                    </div>
                                    <div style={{ width: '40%' }}>
                                        <div className='p-3 bg-white shadow'>
                                            <h5 className='fw-bold pb-2'>Market Order</h5>
                                            <div className='my-3 d-flex justify-content-between align-items-center'>
                                                <span className='text-secondary'>Tokens</span>
                                                <input defaultValue={0} style={{ width: '35%' }} type="number" className="form-control" id="exampleFormControlInput1" placeholder="" />
                                            </div>

                                            <div className='my-3 d-flex justify-content-between align-items-center'>
                                                <span className='text-secondary'>Market Price</span>
                                                <input defaultValue={0} style={{ width: '35%' }} type="number" className="form-control" id="exampleFormControlInput1" placeholder="" />
                                            </div>

                                            <Divider />

                                            <div className='my-3 d-flex justify-content-between align-items-center'>
                                                <span className='text-secondary'>Commissions</span>
                                                <span className='fw-bold'>0.00 XTZ</span>
                                            </div>

                                            <Button onClick={()=>{setTimeout(showAlertBuy, 2000)}} style={{ backgroundColor: 'rgb(79,57,246)' }} className='d-block w-100' variant='contained' color='primary'>Sell Tokens</Button>

                                            <div className='my-3 text-center'>
                                                <span className='text-secondary'>Trade Options</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    </SwipeableViews>
                </div>

                {/* <div className='p-3 my-auto' style={{ width: '30%' }}>
                    <div className='p-3 mb-4 bg-white shadow'>
                        <div className='my-2 d-flex justify-content-between align-items-center'>
                            <span className='text-secondary'>Open</span>
                            <span className='fw-bold'>13 101.48</span>
                        </div>
                        <div className='my-2 d-flex justify-content-between align-items-center'>
                            <span className='text-secondary'>High</span>
                            <span className='fw-bold'>13 504.40</span>
                        </div>
                        <div className='my-2 d-flex justify-content-between align-items-center'>
                            <span className='text-secondary'>Low</span>
                            <span className='fw-bold'>13 101.43</span>
                        </div>
                        <div className='my-2 d-flex justify-content-between align-items-center'>
                            <span className='text-secondary'>Close</span>
                            <span className='fw-bold'>13 112.50</span>
                        </div>
                        <div className='my-2 d-flex justify-content-between align-items-center'>
                            <span className='text-secondary'>% Change</span>
                            <span className='fw-bold'>7.53%</span>
                        </div>
                    </div>
                    
                </div> */}
            </div>


            <div className='shadow mt-5 my-4 p-4 mx-auto' style={{width:'80%'}}>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h5 className='fw-bold mb-0'>Top Firms</h5>
                        <MoreVertIcon />
                    </div>
                    <Divider className='my-3' style={{ backgroundColor: 'grey' }} />

                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <Avatar className='me-4' src={dragon_glass} />
                            <div>
                                <p className='mb-0 fw-bold'>Dragon Glass</p>
                                <p className='mb-0 font13 text-secondary'>1,000 Tokens</p>
                            </div>
                        </div>
                        <img style={{ height: '40px' }} src={chart1} />
                        <div className='d-flex justify-content-around text-align-center'>
                            <div className='text-center'>
                                <p className='mb-0 fw-bold'>4 . 00 ꜩ</p>
                                <p className='mb-0 font13 text-secondary'>Price per Token</p>
                            </div>

                            <div className='py-1 me-3 d-flex justify-content-center align-items-center rounded px-2 ms-3' style={{ backgroundColor: 'rgba(10,179,156,.1)', color: 'rgba(10,179,156,1)' }}>
                                <span className='fw-bold font13' style={{}}>0 . 00%</span>
                            </div>
                        </div>
                    </div>

                    <Divider className='my-3' style={{ backgroundColor: 'grey' }} />



                </div>



            {/* Footer */}

            <div className='px-5 mt-5 bg-black shadow'>
                <div className='d-flex justify-content-between'>
                    <div className='p-5 w-50 text-white'>
                        <h3 className='fw-bold'>Stay in the loop</h3>
                        <h5 className='text-light my-3'>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea.</h5>
                        <div className='d-flex mt-4 justify-content-between'>
                            <input style={{ width: '70%', fontSize: '20px' }} type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email address" />
                            <Button style={{ textTransform: 'capitalize', fontSize: '20px' }} className='w-25 fw-bold' variant='contained' color='primary'>Sign Up</Button>
                        </div>
                    </div>

                    <div className='py-5 d-flex flex-column justify-content-between align-items-center w-25 text-white'>
                        <h3 className='fw-bold text-center'>Join the community</h3>
                        <div className='d-flex flex-wrap justify-content-center'>
                            <div className='p-2 m-2 background-chat-request rounded15'>
                                <TwitterIcon style={{ width: '32px', height: '32px' }} />
                            </div>
                            <div className='p-2 m-2 background-chat-request rounded15'>
                                <YouTubeIcon style={{ width: '32px', height: '32px' }} />
                            </div>
                            <div className='p-2 m-2 background-chat-request rounded15'>
                                <FacebookIcon style={{ width: '32px', height: '32px' }} />
                            </div>
                            <div className='p-2 m-2 background-chat-request rounded15'>
                                <MailOutlineIcon style={{ width: '32px', height: '32px' }} />
                            </div>
                            <div className='p-2 m-2 background-chat-request rounded15'>
                                <RedditIcon style={{ width: '32px', height: '32px' }} />
                            </div>
                            <div className='p-2 m-2 background-chat-request rounded15'>
                                <InstagramIcon style={{ width: '32px', height: '32px' }} />
                            </div>
                        </div>
                    </div>
                </div>

                <Divider variant='middle' className='my-2' style={{ color: 'white', background: 'white' }} />

                <div className='d-flex justify-content-between ps-5 py-5'>
                    <div className='w-25'>
                        <img className='mb-3' src={small_devils_logo} style={{ height: '80px', width: '80px' }} />
                        <h3 className='text-white my-3'>Devils List</h3>
                        <p className='text-light my-3'>The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p>
                    </div>

                    <div className='w-75 d-flex ms-5'>
                        <div className='w-25 text-white'>
                            <h4 className='fw-bold mb-4'>Marketplace</h4>
                            <div>
                                <p>All NFTs</p>
                                <p>Solana NFTs</p>
                                <p>Art</p>
                                <p>Collections</p>
                                <p>Domain Names</p>
                                <p>Music</p>
                                <p>Photography</p>
                                <p>Sports</p>
                                <p>Trading Cards</p>
                                <p>Utility</p>
                            </div>
                        </div>
                        <div className='w-25 text-white'>
                            <h4 className='fw-bold mb-4'>My Account</h4>
                            <div>
                                <p>Profile</p>
                                <p>Favourites</p>
                                <p>Watchlist</p>
                                <p>My Collections</p>
                                <p>Settings</p>
                            </div>
                        </div>
                        <div className='w-25 text-white'>
                            <h4 className='fw-bold mb-4'>Resources</h4>
                            <div>
                                <p>Help Center</p>
                                <p>Platform Status</p>
                                <p>Partners</p>
                                <p>Gas-Free MarketPlace</p>
                                <p>Taxes</p>
                                <p>Blog</p>
                                <p>Docs</p>
                                <p>Newsletter</p>
                            </div>
                        </div>
                        <div className='w-25 text-white'>
                            <h4 className='fw-bold mb-4'>Company</h4>
                            <div>
                                <p>About</p>
                                <p>Careers</p>
                                <p>Ventures</p>
                                <p>Grants</p>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}




