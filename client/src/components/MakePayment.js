import React from 'react';
import { alpha, makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
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
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

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

import DataUsageRoundedIcon from '@material-ui/icons/DataUsageRounded';
import SearchIcon from '@material-ui/icons/Search';


const drawerWidth = 240;

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
        display: 'flex',
    },
    tabs: {
        backgroundColor: theme.palette.background.paper,
        // width: 500,
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

export const MakePayment = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
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
                        <div className={classes.tabs} style={{width:'75%', marginLeft:'auto', marginRight:'auto',boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)'}}>
                            <AppBar position="static" color="default">
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    variant="fullWidth"
                                    aria-label="full width tabs example"
                                >
                                    <Tab label="Pay To Employee" {...a11yProps(0)} />
                                    <Tab label="Pay To Vendor" {...a11yProps(1)} />
                                </Tabs>
                            </AppBar>
                            <SwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={value}
                                onChangeIndex={handleChangeIndex}
                            >
                                <TabPanel value={value} index={0} dir={theme.direction}>
                                    <div className='container text-center px-5 py-3 rounded' style={{width:'80%'}}>
                                        <h4 className='mb-4'>Pay to Employee</h4>
                                        <Autocomplete
                                            id="combo-box-demo"
                                            className='mx-auto my-5 w-100'
                                            options={top100Films}
                                            getOptionLabel={(option) => option.title}
                                            style={{ width: 300, fontFamily: 'kanit' }}
                                            renderInput={(params) => <TextField {...params} placeholder='Select Employee' variant="outlined" />}
                                        />
                                        <div className="input-group input-group-lg mb-5 w-100 mx-auto">
                                            <span className="input-group-text px-4 sidebar-background text-white fw-bold" id="basic-addon1">Amount</span>
                                            <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                                            <span className="input-group-text sidebar-background text-white" id="basic-addon1">ꜩ</span>
                                        </div>
                                        <Button style={{ textTransform: 'capitalize' }} variant="contained" color="primary" size='large'>
                                            Make Payment
                                        </Button>
                                    </div>
                                </TabPanel>
                                <TabPanel value={value} index={1} dir={theme.direction}>
                                    <div className='container text-center px-5 py-3 rounded' style={{width:'80%'}}>
                                        <h4 className='mb-5'>Pay to Vendor</h4>
                                        <div className="input-group mb-3 w-100 mx-auto">
                                            <span className="input-group-text" id="basic-addon1">Vendor Name</span>
                                            <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3 w-100 mx-auto">
                                            <span className="input-group-text px-4" id="basic-addon1">Account ID</span>
                                            <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group input-group-lg mb-5 w-100 mx-auto">
                                            <span className="input-group-text px-4 sidebar-background text-white fw-bold" id="basic-addon1">Amount</span>
                                            <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                                            <span className="input-group-text sidebar-background text-white" id="basic-addon1">ꜩ</span>
                                        </div>
                                        <Button style={{ textTransform: 'capitalize' }} variant="contained" color="primary" size='large'>
                                            Make Payment
                                        </Button>
                                    </div>
                                </TabPanel>
                            </SwipeableViews>
                        </div>
                        {/* <div className='container d-flex h-100'>
                            <div className='container text-center shadow p-5 rounded25'>
                                <h4 className='mb-4'>Pay to Employee</h4>
                                <Autocomplete
                                    id="combo-box-demo"
                                    className='mx-auto my-5 w-100'
                                    options={top100Films}
                                    getOptionLabel={(option) => option.title}
                                    style={{ width: 300, fontFamily: 'kanit' }}
                                    renderInput={(params) => <TextField {...params} placeholder='Select Employee' variant="outlined" />}
                                />
                                <div className="input-group input-group-lg mb-5 w-100 mx-auto">
                                    <span className="input-group-text px-4 sidebar-background text-white fw-bold" id="basic-addon1">Amount</span>
                                    <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                                    <span className="input-group-text sidebar-background text-white" id="basic-addon1">ꜩ</span>
                                </div>
                                <Button style={{ textTransform: 'capitalize' }} variant="contained" color="primary" size='large'>
                                    Make Payment
                                </Button>
                            </div>

                            <h3 className='text-center my-3 fw-bold sidebar-color my-auto mx-3'>OR</h3>

                            <div className='container text-center shadow p-5 rounded25'>
                                <h4 className='mb-5'>Pay to Vendor</h4>
                                <div className="input-group mb-3 w-100 mx-auto">
                                    <span className="input-group-text" id="basic-addon1">Vendor Name</span>
                                    <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div className="input-group mb-3 w-100 mx-auto">
                                    <span className="input-group-text px-4" id="basic-addon1">Account ID</span>
                                    <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div className="input-group input-group-lg mb-5 w-100 mx-auto">
                                    <span className="input-group-text px-4 sidebar-background text-white fw-bold" id="basic-addon1">Amount</span>
                                    <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                                    <span className="input-group-text sidebar-background text-white" id="basic-addon1">ꜩ</span>
                                </div>
                                <Button style={{ textTransform: 'capitalize' }} variant="contained" color="primary" size='large'>
                                    Make Payment
                                </Button>
                            </div>
                        </div> */}
                    </div>

                </main>
            </div>
        </>
    )
}


// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
    { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
];

