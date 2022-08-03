import React, {useState, useEffect} from 'react'
import Navbar from './InvestorNavbar'
import NavFloating from './NavFloating'
import { alpha, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import { addFounders } from '../utils/operation';
import { getActiveAccount } from '../utils/wallet';
import ipfs_mini from '../ipfs_mini';

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
// stakeHolder_name = sp.TString, stakeHolder_profile_Id = sp.TString, stakeHolder_type = sp.TString, 
// investment = sp.TMutez, common_shares = sp.TNat, common_options = sp.TNat,
// preferred_shares = sp.TNat, fd_shares = sp.TNat, fd_percent = sp.TNat
export const AddFounders = () => {
    const classes = useStyles();

    const [loading, setloading] = useState();
    const [founderDetailsCID, setfounderDetailsCID] = useState();

    useEffect(() => {
        const onVerifyFounder = async () =>{
          try{
            // await verifyInvestor(50, "alex@gmail.com", 1,"linkedinurl","alice",1234567890,2,"photoCID", "resumeCID",wallet);
            await addFounders(founderDetailsCID, wallet);
            alert("Transaction Confirmed! You are now an Accredited Investor");
          }catch(error){
            alert("Transaction Failed:", error.message);
          }
          setloading(false);
        }
        if(founderDetailsCID != null)
          onVerifyFounder();
    }, [founderDetailsCID]);

    const [wallet, setWallet] = useState(null);
    useEffect(() => {
        (async () => {
          const activeAccount = await getActiveAccount();
          setWallet(activeAccount);
        })();
      }, []);

    const [details, setDetails] = useState({
        founderFirstName: "",
        founderLastName: "",
        founderEmail: "",
        founderNationality: "",
        founderLinkedin: "",
        founderDOB: "",
        founderNumber: "",
        founderAddress: "",
        founderCity: "",
        founderState: "",
        founderZipCode: "",
        founderCountry: ""
    });

    const uploadDataIpfs = async(data) => {
        ipfs_mini.addJSON(data, (err, hash) => {
            if (err)
                console.error(err);
            setfounderDetailsCID(hash);
            
            setloading(false);
        });
    }

    async function handleFounderSubmit(e){
        e.preventDefault();
        console.log("add founder")
        setloading(true);
        const founderDetails = {
            founderFirstName: details["founderFirstName"], 
            founderLastName: details["founderLastName"], 
            founderEmail: details["founderEmail"],
            founderNationality: details["founderNationality"],
            founderLinkedin: details["founderLinkedin"],
            founderNumber: details["founderNumber"],
            founderDOB: details["founderDOB"],
            founderAddress: details["founderAddress"],
            founderCity: details["founderCity"],
            founderState: details["founderState"],
            founderZipCode: details["founderZipCode"],
            founderCountry: details["founderCountry"],
        }
        await uploadDataIpfs(founderDetails)

        document.getElementById("founderForm").reset();
    }

  return (
    <>
    <div className={classes.root} required>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar} required>

        </AppBar>
        <Navbar />

        <main className={classes.content} required>
            <NavFloating />
            <div className={classes.padded} required>
                  <div className="container">
                            <h4 className='row fw-bold'>Founders</h4>
                            <span className='row font15 text-secondary'>This is where you can list co-founders if you have them. The co-founders you list here will join the Board of Directors.</span>
                            <form id="founderForm" onSubmit={handleFounderSubmit} className='row rounded border mt-3 p-4'>
                                <div className="col-4 mb-3">
                                    <label for="inputState" className="form-label font13 fw-bold">First Name</label>
                                    <input type="text" className="form-control font13" aria-label="First name"  
                                    onChange={(e) =>
                                        setDetails({ ...details, founderFirstName: e.target.value })
                                    } required/>
                                </div>
                                <div className="col-4 mb-3">
                                    <label for="inputState" className="form-label font13 fw-bold">Last Name</label>
                                    <input type="text" className="form-control font13" aria-label="Last name" 
                                    onChange={(e) =>
                                        setDetails({ ...details, founderLastName: e.target.value })
                                    } required/>
                                </div>
                                <div className="col-4 mb-3">
                                    <label for="inputState" className="form-label font13 fw-bold">Email</label>
                                    <input type="email" className="form-control font13" aria-label="Last name" 
                                    onChange={(e) =>
                                        setDetails({ ...details, founderEmail: e.target.value })
                                    } required/>
                                </div>
                                <div className="col-6 mb-3">
                                    <label for="inputState" className="form-label font13 fw-bold">Nationality</label>
                                    <select id="inputState" className="form-select font13" 
                                    onChange={(e) =>
                                        setDetails({ ...details, founderNationality: e.target.value })
                                      } required>
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className='col-6 mb-3'>
                                    <label for="inputState" className="form-label font13 fw-bold">Personal Website
                                        <span style={{ fontSize: '10px' }} required>  ( GitHub, Linkedin, Twitter, or other profile )</span>
                                    </label>
                                    <input type="url" className="form-control font13" aria-label="Last name" placeholder='https://example.com' 
                                    onChange={(e) =>
                                        setDetails({ ...details, founderLinkedin: e.target.value })
                                    } required/>

                                </div>
                                <div className="col-4 mb-3">
                                    <label for="inputState" className="form-label font13 fw-bold">Date of Birth</label>
                                    <input style={{ textTransform: 'uppercase' }} type="date" className="form-control font13" aria-label="Last name" 
                                    onChange={(e) =>
                                        setDetails({ ...details, founderDOB: e.target.value })
                                    } required/>
                                </div>
                                <div className='col-4 mb-3'>
                                    <label for="inputState" className="form-label font13 fw-bold">Phone Number</label>
                                    <div className="input-group font13">
                                        <button className="btn btn-outline-secondary dropdown-toggle fitHeight p-1 m-auto font13" type="button" data-bs-toggle="dropdown" aria-expanded="false">+91</button>
                                        <ul className="dropdown-menu firHeight">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                        <input type="number" className="form-control font13" aria-label="Text input with dropdown button" 
                                        onChange={(e) =>
                                            setDetails({ ...details, founderNumber: e.target.value })
                                        } required/>
                                    </div>
                                </div>
                                <div className="col-12 mb-3">
                                    <label for="inputAddress" className="form-label font13 fw-bold">Address</label>
                                    <input type="text" className="form-control font13" id="inputAddress" placeholder="1234 Main St" 
                                    onChange={(e) =>
                                        setDetails({ ...details, founderAddress: e.target.value })
                                    } required/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="inputCity" className="form-label font13 fw-bold">City</label>
                                    <input type="text" className="form-control font13" id="inputCity" 
                                    onChange={(e) =>
                                        setDetails({ ...details, founderCity: e.target.value })
                                    } required/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="inputZip" className="form-label font13 fw-bold">Zip Code</label>
                                    <input type="text" className="form-control font13" id="inputZip" 
                                    onChange={(e) =>
                                        setDetails({ ...details, founderZipCode: e.target.value })
                                    } required/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="inputState" className="form-label font13 fw-bold">State</label>
                                    <select id="inputState" className="form-select font13" 
                                    onChange={(e) =>
                                        setDetails({ ...details, founderState: e.target.value })
                                      } required>
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="inputState" className="form-label font13 fw-bold">Country</label>
                                    <select id="inputState" className="form-select font13" 
                                    onChange={(e) =>
                                        setDetails({ ...details, founderCountry: e.target.value })
                                      } required>
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className='text-center mt-3'>
                                    <button type="submit" className='btn btn-dark my-2'>{loading === true ? "Loading..." : "Add Founder"}</button>
                                </div>
                            </form>
                        </div>
            </div>

        </main>
    </div>
</>
  )
}
