import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { alpha, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import appleLogo from '../images/apple-logo.png';
import Navbar from './InvestorNavbar';
import NavFloating from './NavFloating';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import SearchIcon from '@material-ui/icons/Search';
import { getKeyBigMapByID, getRootStorage } from '../utils/Api';
import { requestFromInvestor } from '../utils/operation';

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

export const StartupsListInvestor = () => {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [storage, setstorage] = useState();
    const [startupCards, setstartupCards] = useState([]);

    const companyBigMapID = 64865;

    useEffect(() => {
        const retrieveStorage = async () => {
            const st = await getRootStorage();
            console.log(st);
            setstorage(st);
        }
        if (!storage)
            retrieveStorage();
    }, [])

    async function fetchJSON(url) {
        const response = await fetch(url);
        const movies = await response.json();
        return movies;
    }

    async function makeCards() {
        const allCards = [];
        for (let companyAddress of storage["companies_for_funding"]) {
            console.log(companyAddress);

            const companyDetails = await getKeyBigMapByID(companyBigMapID, companyAddress);
            console.log(companyDetails);
            const companyProfileHash = companyDetails.value["company_profile_Id"];
            const fundraiseDetails = companyDetails.value["fundraise_details"][`${companyDetails.value["round_num"]}`];

            const companyJSON = await fetchJSON(`https://ipfs.io/ipfs/${companyProfileHash}`);
            console.log(companyJSON);

            allCards.push(
                <div className="shadow-sm card cardColorPinkish rounded m-3" style={{ width: '18rem', border: '0px' }}>
                    <div className="card-body">
                        <div className='d-flex justify-content-between align-items-center mb-3'>
                            <Avatar alt="Remy Sharp" src={appleLogo} />
                            <div className='p-2 d-flex'>
                                <span className='fw-bold mb-0 color-primary' style={{ fontSize: '30px' }}>{fundraiseDetails.ownership}%</span>
                            </div>
                        </div>
                        <h5 className="card-title fw-bold">{companyJSON.name}</h5>
                        <p className="card-subtitle mb-2 fw-bold">{companyJSON.startupCity}, {companyJSON.startupState}</p>
                        <p className="card-text font13 text-secondary">{companyJSON.whatWillCompanyDo}</p>
                        <div className='d-flex align-items-center justify-content-between'>
                            <h6 className='fw-bold mb-0'>{fundraiseDetails.investment} ꜩ</h6>
                            <Button onClick={handleRequestFromInvestor} style={{ textTransform: 'capitalize' }} size='small' variant='contained' color="primary" data-bs-toggle="modal" data-bs-target="#RaiseFund">Request</Button>
                            <Link to={"/view-startup-profile?profile=" + companyProfileHash}>
                                <Button className='' style={{ textTransform: 'capitalize' }} size='small' variant='outlined' color="primary" >View Profile</Button>
                            </Link>

                            <div className="modal fade" id="RaiseFund" tabindex="-1" aria-labelledby="RaiseFundLabel" aria-hidden="true">
                                <div className="modal-dialog my-auto">
                                    <div className="modal-content">
                                        <div className="modal-header bg-dark">
                                            <h5 className="modal-title" id="RaiseFundLabel">Raise Funds</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">

                                            <select className="form-select mb-3" aria-label="Default select example">
                                                <option selected>Select Investment Type</option>
                                                <option value="SAFE">SAFE</option>
                                                <option value="DirectEquity">Direct</option>
                                                <option value="SAFT">SAFT</option>
                                            </select>

                                            <div className="input-group mb-3">
                                                <span className="input-group-text">Ownership</span>
                                                <input type="number" className="form-control" aria-label="Ownership" />
                                                <span className="input-group-text">%</span>
                                            </div>

                                            <div className="input-group mb-3">
                                                <span className="input-group-text">Investement</span>
                                                <input type="number" className="form-control" aria-label="Valuation Cap" />
                                                <span className="input-group-text">ꜩ</span>
                                            </div>

                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn background-primary text-white">Dhinkachika</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        setstartupCards(allCards)
    }
    if (storage && startupCards.length === 0)
        makeCards();

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    async function handleRequestFromInvestor() {

    }

    return (
        <>
            <div className={classes.root}>
                <CssBaseline />
                <Navbar />
                <main className={classes.content}>

                    <NavFloating />
                    <div className={classes.padded}>
                        <div id='startup-list'>
                            <div className='row mx-3 align-items-center justify-content-between'>
                                <div className='col-4'>
                                    <h5 className='fw-bold m-0'>Recomended Startups</h5>
                                </div>
                                <div className="col-5 input-group shadow-sm h-100 p-0" style={{ overflow: 'hidden', borderColor: 'rgb(18, 24, 39)' }}>
                                    <input style={{ border: '0px' }} type="text" className="form-control bg-white" placeholder="Search Startups" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button className="btn background-purplepink" type="button" id="button-addon2">
                                        <SearchIcon style={{ color: 'white' }} />
                                    </button>
                                </div>
                                <FormControl className='col-2 cardColorPinkish shadow-sm' variant='filled' style={{ fontFamily: 'kanit' }}>
                                    <InputLabel id="demo-simple-select-label" style={{ fontFamily: 'kanit' }}>Sort</InputLabel>
                                    <Select
                                        className='cardColorPinkish'
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        onChange={handleChange}
                                        style={{ fontFamily: 'kanit' }}
                                    >
                                        <MenuItem value="">
                                            <em style={{ fontFamily: 'kanit' }}>None</em>
                                        </MenuItem>
                                        <MenuItem value={10} style={{ fontFamily: 'kanit' }}>Ascending</MenuItem>
                                        <MenuItem value={20} style={{ fontFamily: 'kanit' }}>Dscending</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className='d-flex flex-wrap'>
                                {startupCards}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}







