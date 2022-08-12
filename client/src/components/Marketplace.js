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

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, ZoomLine, Column2D, FusionTheme);

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



export const Marketplace = () => {
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

            <div className='px-3'>
                <div className='d-flex justify-content-between'>
                    <div className='w-50 shadow bg-white rounded d-flex justify-content-between align-items-end'>
                        <div className='p-4' style={{ width: '52%' }}>
                            <h4 className='fw-bold pe-3 mb-3'>Discover, Collect, Sell and Create your own NFTs.</h4>
                            <p className='text-secondary mb-3'>The world's first and largets digital marketplace.</p>
                            <div className='d-flex justify-content-between'>
                                <Button style={{ backgroundColor: '#405189', textTransform: 'capitalize' }} color='primary' variant='contained'>Discover Now</Button>
                                <Button style={{ backgroundColor: '#0ab39c', textTransform: 'capitalize' }} color='primary' variant='contained'>Create Your Own</Button>
                            </div>
                        </div>
                        <div style={{ width: '48%' }}>
                            <img className='w-100' src={marketplace} />
                        </div>
                    </div>
                    <div className='w-25 px-2'>
                        <div className='bg-white h-100 p-3 shadow'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div className='p-2 rounded' style={{ backgroundColor: 'rgba(64,81,137,.1)', color: 'rgba(64,81,137,1)' }}>
                                        <MonetizationOnOutlinedIcon style={{ width: '40px', height: '40px' }} />
                                    </div>
                                    <span className='ms-3 fw-bold text-secondary'>TOTAL REVENUE</span>
                                </div>
                                <MoreVertIcon />
                            </div>

                            <h4 className='fw-bold my-4'>624,562.564</h4>

                            <div className='d-flex'>
                                <div className='py-1 me-3 d-flex justify-content-center align-items-center rounded' style={{ backgroundColor: 'rgba(240,101,72,.1)', color: 'rgba(240,101,72,1)' }}>
                                    <KeyboardArrowDownIcon className='font15' />
                                    <span className='fw-bold font13' style={{}}>6.24%</span>
                                </div>
                                <span className='text-secondary'>vs. previous month</span>
                            </div>
                        </div>
                    </div>

                    <div className='w-25 px-2'>
                        <div className='bg-white h-100 p-3 shadow'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div className='p-2 rounded' style={{ backgroundColor: 'rgba(64,81,137,.1)', color: 'rgba(64,81,137,1)' }}>
                                        <AccountBalanceWalletOutlinedIcon style={{ width: '40px', height: '40px' }} />
                                    </div>
                                    <span className='ms-3 fw-bold text-secondary'>ESTIMATED</span>
                                </div>
                                <MoreVertIcon />
                            </div>

                            <h4 className='fw-bold my-4'>559,526.564</h4>

                            <div className='d-flex'>
                                <div className='py-1 me-3 d-flex justify-content-center align-items-center rounded' style={{ backgroundColor: 'rgba(10,179,156,.1)', color: 'rgba(10,179,156,1)' }}>
                                    <KeyboardArrowUpIcon className='font15' />
                                    <span className='fw-bold font13' style={{}}>6.24%</span>
                                </div>
                                <span className='text-secondary'>vs. previous month</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='shadow my-4 p-4'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h5 className='fw-bold mb-0'>Top Artworks</h5>
                        <MoreVertIcon />
                    </div>
                    <Divider className='my-3' style={{ backgroundColor: 'grey' }} />

                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <Avatar className='me-4' src={appleLogo} />
                            <div>
                                <p className='mb-0 fw-bold'>One Shop Destination On</p>
                                <p className='mb-0 font13 text-secondary'>13,450 Sales</p>
                            </div>
                        </div>
                        <img style={{ height: '40px' }} src={chart1} />
                        <div>
                            <p className='mb-0 fw-bold'>$23,5000 +</p>
                            <p className='mb-0 font13 text-secondary'>Total USD</p>
                        </div>
                    </div>

                    <Divider className='my-3' style={{ backgroundColor: 'grey' }} />

                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <Avatar className='me-4' src={appleLogo} />
                            <div>
                                <p className='mb-0 fw-bold'>One Shop Destination On</p>
                                <p className='mb-0 font13 text-secondary'>13,450 Sales</p>
                            </div>
                        </div>
                        <img style={{ height: '40px' }} src={chart2} />
                        <div>
                            <p className='mb-0 fw-bold'>$23,5000 +</p>
                            <p className='mb-0 font13 text-secondary'>Total USD</p>
                        </div>
                    </div>

                    <Divider className='my-3' style={{ backgroundColor: 'grey' }} />

                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <Avatar className='me-4' src={appleLogo} />
                            <div>
                                <p className='mb-0 fw-bold'>One Shop Destination On</p>
                                <p className='mb-0 font13 text-secondary'>13,450 Sales</p>
                            </div>
                        </div>
                        <img style={{ height: '40px' }} src={chart3} />
                        <div>
                            <p className='mb-0 fw-bold'>$23,5000 +</p>
                            <p className='mb-0 font13 text-secondary'>Total USD</p>
                        </div>
                    </div>

                    <Divider className='my-3' style={{ backgroundColor: 'grey' }} />

                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <Avatar className='me-4' src={appleLogo} />
                            <div>
                                <p className='mb-0 fw-bold'>One Shop Destination On</p>
                                <p className='mb-0 font13 text-secondary'>13,450 Sales</p>
                            </div>
                        </div>
                        <img style={{ height: '40px' }} src={chart4} />
                        <div>
                            <p className='mb-0 fw-bold'>$23,5000 +</p>
                            <p className='mb-0 font13 text-secondary'>Total USD</p>
                        </div>
                    </div>

                    <Divider className='my-3' style={{ backgroundColor: 'grey' }} />

                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <Avatar className='me-4' src={appleLogo} />
                            <div>
                                <p className='mb-0 fw-bold'>One Shop Destination On</p>
                                <p className='mb-0 font13 text-secondary'>13,450 Sales</p>
                            </div>
                        </div>
                        <img style={{ height: '40px' }} src={chart5} />
                        <div>
                            <p className='mb-0 fw-bold'>$23,5000 +</p>
                            <p className='mb-0 font13 text-secondary'>Total USD</p>
                        </div>
                    </div>

                </div>
                <div className='my-5 p-4 bg-white shadow mx-auto text-center'>
                    <h5>Revenue</h5>
                    <div className='d-flex align-items-center my-3 '>
                        <div className='w-25 text-center border p-2'>
                            <h5 className='m-0 font15 fw-bold'>7,585</h5>
                            <p className='m-0 text-secondary'>Orders</p>
                        </div>
                        <div className='w-25 text-center border p-2'>
                            <h5 className='m-0 font15 fw-bold'>$22.89k</h5>
                            <p className='m-0 text-secondary'>Earnings</p>
                        </div>
                        <div className='w-25 text-center border p-2'>
                            <h5 className='m-0 font15 fw-bold'>367</h5>
                            <p className='m-0 text-secondary'>Funds</p>
                        </div>
                        <div className='w-25 text-center border p-2'>
                            <h5 className='m-0 font15 fw-bold'>18.92%</h5>
                            <p className='m-0 text-secondary'>Conversation Ratio</p>
                        </div>
                    </div>
                    <ReactFC style={{ backgroundColor: 'white' }} {...nftGraphConfigs} />
                </div>
            </div>



            {/* Footer */}

            <div className='px-5 mt-5 bg-black shadow'>
                <div className='d-flex justify-content-between'>
                    <div className='p-5 w-50 text-white'>
                        <h3 className='fw-bold'>Stay in the loop</h3>
                        <h5 className='text-light my-3'>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea.</h5>
                        <div className='d-flex mt-4 justify-content-between'>
                            <input style={{ width: '70%', fontSize: '20px' }} type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email address" />
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



            {/* <div className='mt-5 container'>
                <img className='w-100' src={img1} />
                <img className='w-100' src={img2} />
                <img className='w-100' src={img3} />
                <img className='w-100' src={img4} />
                <img className='w-100' src={img5} />
                <img className='w-100' src={img6} />
                <img className='w-100' src={img7} />
            </div> */}
        </>
    )
}
