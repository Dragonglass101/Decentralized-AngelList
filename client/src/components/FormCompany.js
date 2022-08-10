import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../styles/form.css'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Switch from '@material-ui/core/Switch';
import Divider from '@material-ui/core/Divider';

import { connectWallet } from "../utils/wallet";
import ipfs_mini from "../ipfs_mini";
import { signupCompany } from '../utils/operation';
import ipfs_api from '../ipfs_api';

import small_devils_logo from '../images/logo/small_devils_logo.png'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Getting Started', 'Company Details', 'Company Terms', 'Costs', 'Sign and Submit'];
}

export const FormCompany = () => {
    const classes = useStyles();
    const [error, seterror] = useState(null);
    const [success, setsuccess] = useState("");
    const [loading, setloading] = useState(false);
    const [companyValuation, setcompanyValuation] = useState();
    const [companyDetailsCID, setcompanyDetailsCID] = useState();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const navigate = useNavigate();

    const [details, setDetails] = useState({
        industry: "",
        linkedIn: "",
        name: "",
        walletID: "",
        whatWillCompanyDo: "",
        address: "",
        startupCity: "",
        startupZipCode: "",
        startupState: "",
        startupCountry: "",
        startupWebsiteUrl: "",

        bufferPhoto: null,
        bufferResume: null
      });
      const [photoCID, setphotoCID] = useState(null);

      useEffect(() => {
          const onVerifyCompany = async () =>{
            try{
              await signupCompany(companyDetailsCID, companyValuation);
              navigate("/dashboard-company");
            }catch(error){
              alert("Transaction Failed:", error.message);
            }
        
            setloading(false);
            
          }
          if(companyDetailsCID != null)
            onVerifyCompany();
      }, [companyDetailsCID]);

      useEffect(() => {
        console.log(photoCID);
    
        const uploadCompanyDetailsIpfs = async ()=>{
            const startupDetails = {
                industry: details["industry"],
                linkedIn: details["linkedIn"],
                name: details["name"],
                walletID: details["walletID"],
                whatWillCompanyDo: details["whatWillCompanyDo"],
                address: details["address"],
                startupCity: details["startupCity"],
                startupZipCode: details["startupZipCode"],
                startupState: details["startupState"],
                startupCountry: details["startupCountry"],
                startupWebsiteUrl: details["startupWebsiteUrl"],
                companyValuation: companyValuation,
                photoCID: photoCID
            }
            await uploadDataIpfs(startupDetails);
        }
        if(photoCID != null)
          uploadCompanyDetailsIpfs();
        
      }, [photoCID])

    const [wallet, setWallet] = useState(null);
    const handleConnectWallet = async () => {
      const { wallet } = await connectWallet();
      setWallet(wallet);
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    async function handleSubmit(e){
        e.preventDefault()
        await handleConnectWallet();
        uploadPhoto();
    }

    const uploadDataIpfs = async(data) => {
        ipfs_mini.addJSON(data, (err, hash) => {
            if (err)
                console.error(err);
            setcompanyDetailsCID(hash);
            
            setloading(false);
        });
    }

    function uploadPhoto() {
        ipfs_api.files.add(details["bufferPhoto"], (error, result) => {
          if(error) {
            console.error(error)
            return
          }
          setphotoCID(result[0].hash)
        })
    }

    function capturePhoto(event) {
        event.preventDefault()
        const file = event.target.files[0]
        const reader = new window.FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = () => {
          setDetails({ ...details, bufferPhoto: Buffer(reader.result) })
        }
    }

    return (
        <div className={classes.root}>
            <nav className='d-flex justify-content-between align-items-center shadow rounded15 px-3' style={{ height: '70px', marginBottom: '30px' }}>
                <div className='d-flex align-items-center justify-content-start'>
                    <img src={small_devils_logo} style={{ width: '48px' }} />
                    <span className='pt-3 ms-3 fw-bold' style={{ fontFamily: 'devils_lairs_font', fontSize: '40px', alignSelf: 'flex-end' }}>Devils List</span>
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
            {error ? <div class="alert alert-danger" role="alert">
            {error}
            </div> : null}
            <div className='d-flex mt-5'>
                <Stepper className='w-25 fitHeight' activeStep={activeStep} orientation='vertical'>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    <div>
                        <Typography className={classes.instructions}>
                        <form onSubmit={handleSubmit}>
                            <div className={"container " + `${activeStep != 0 ? "hidden" : ""}`}>
                                <h4 className='row fw-bold'>Getting Started</h4>
                                <p className='row font15 text-secondary'>Before we start, let's see if AngelList Stack is a good fit for your company.</p>
                                <Divider variant='fullWidth' />
                                <h5 className='row font13 mt-3 ms-1 fw-bold'>I am</h5>
                                <div className='row my-3 align-items-center'>
                                    <Switch color='primary' />
                                    <span className='col-11 fs-6 font13 text-secondary'>Starting a technology startup. AngelList Stack is purpose-built for high growth technology companies.</span>
                                </div>
                                <div className='row my-3 align-items-center'>
                                    <Switch color='primary' />
                                    <span className='col-11 fs-6 font13 text-secondary'>Interested in raising capital from venture capitalists in the future. AngelList Stack is confiqured to incorporate Delaware C Corporations, which are
                                        the preferred legal entity for businesses that aim to raise venture capital.</span>
                                </div>
                                <div className='row my-3 align-items-center'>
                                    <Switch color='primary' />
                                    <span className='col-11 fs-6 font13 text-secondary'>A resident of the United States. AngelList Stack is currently only available to US residents with a Social Security Number or Taxpayer Identification
                                        Number.</span>
                                </div>
                            </div>

                            <div className={"container " + `${activeStep != 1 ? "hidden" : ""}`}>
                                <h4 className='row fw-bold'>Company Details</h4>
                                <p className='row font15 text-secondary'>Provide high-level information about your new company, like the legal name you would like your company to have. The name you choose must be available
                                    in Delaware's registry search and end with one of the following suffixes: Incorporated, Inc., Corporation, or Corp.</p>
                                <Divider variant='fullWidth' />
                                <form className='row mt-3 font13'>
                                    <div className="mb-3 col-6">
                                        <label for="exampleInputEmail1" className="form-label font13 fw-bold">Company Legal Name</label>
                                        <input type="text" className="form-control font13" id="exampleInputEmail1" 
                                        aria-describedby="emailHelp" 
                                        onChange={(e) =>
                                            setDetails({ ...details, name: e.target.value })
                                          }
                                        required/>
                                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                                    </div>
                                    <div className='mb-3 col-6'>
                                        <label for="basic-url" className="form-label font13 fw-bold">Industry</label>
                                        <select className="form-select font13" aria-label="Default select example"
                                        onChange={(e) =>
                                            setDetails({ ...details, industry: e.target.value })
                                        }
                                        required>
                                            <option disabled selected>Select Industry</option>
                                            <option value="1">Technology</option>
                                            <option value="2">Agro</option>
                                            <option value="3">Health Care</option>
                                        </select>
                                    </div>
                                    <label for="basic-url" className="form-label font13 fw-bold">Website<span style={{ fontSize: '10px' }}> (optional)</span></label>
                                    <div className="input-group mb-3 col-6">
                                        <span className="input-group-text font13" id="basic-addon3">https://</span>
                                        <input type="text" className="form-control font13" id="basic-url" aria-describedby="basic-addon3" 
                                        onChange={(e) =>
                                            setDetails({ ...details, startupWebsiteUrl: ("https://"+e.target.value) })
                                        } required/>
                                    </div>
                                    <div>
                                        <p className="q"> Profile Picture </p>
                                        <input type="file" onChange={capturePhoto} required/>
                                    </div>
                                    <label for="basic-url" className="form-label font13 fw-bold">LinkedIn<span style={{ fontSize: '10px' }}> (optional)</span></label>
                                    <div className="input-group mb-3 col-6">
                                        <span className="input-group-text font13" id="basic-addon3">https://linkedin.com/in/</span>
                                        <input type="text" className="form-control font13" id="basic-url" aria-describedby="basic-addon3" 
                                        onChange={(e) =>
                                            setDetails({ ...details, linkedIn: ("https://linkedin.com/in/"+e.target.value) })
                                        } required/>
                                    </div>
                                    <div className="mb-3 col-6">
                                        <label for="exampleInputEmail1" className="form-label font13 fw-bold">Company Valuation</label>
                                        <input type="number" className="form-control font13" id="exampleInputEmail1" 
                                        aria-describedby="emailHelp" 
                                        onChange={(e) =>{ setcompanyValuation(e.target.value);}}
                                        required/>
                                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleFormControlTextarea1" className='fw-bold'>What will your company do?
                                            <span className='fw-normal text-secondary' style={{ fontSize: '10px' }}>(Required. In a few sentences, describe your products/services, how you plan to finance the company, and founder backgrounds.)</span>
                                        </label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"
                                        onChange={(e) =>
                                            setDetails({ ...details, whatWillCompanyDo: e.target.value })
                                        } required></textarea>
                                    </div>
                                    <div className='mb-3'>
                                        <p className='fw-bold mb-0'>Business Address</p>
                                        <span className='text-secondary' style={{ fontSize: '11px' }}>This can be your personal address. Please list a valid US address where you will receive company notices and information from your registered agent. Do not list a P.O
                                            Box, virtual mailbox, or mail forwarding address.</span>
                                    </div>
                                    <div className="col-12 mb-3">
                                        <label for="inputAddress" className="form-label fw-bold">Address</label>
                                        <input type="text" className="form-control font13" id="inputAddress" placeholder="1234 Main St" 
                                        onChange={(e) =>
                                            setDetails({ ...details, address: e.target.value })
                                        } required/>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label for="inputCity" className="form-label fw-bold">City</label>
                                        <input type="text" className="form-control font13" id="inputCity" 
                                        onChange={(e) =>
                                            setDetails({ ...details, startupCity: e.target.value })
                                        } required/>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label for="inputZip" className="form-label fw-bold">Zip Code</label>
                                        <input type="text" className="form-control font13" id="inputZip" 
                                        onChange={(e) =>
                                            setDetails({ ...details, startupZipCode: e.target.value })
                                        } required/>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label for="inputState" className="form-label fw-bold">State</label>
                                        <input type="text" className="form-control font13" id="inputState" 
                                        onChange={(e) =>
                                            setDetails({ ...details, startupState: e.target.value })
                                        } required/>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label for="inputState" className="form-label fw-bold">Country</label>
                                        <input type="text" className="form-control font13" id="inputZip" 
                                        onChange={(e) =>
                                            setDetails({ ...details, startupCountry: e.target.value })
                                        } required/>
                                    </div>

                                </form>
                            </div>

                            <div className={"container " + `${activeStep != 2 ? "hidden" : ""}`}>
                                <h4 className='row fw-bold'>Company Terms</h4>
                                <span className='row font15 text-secondary'>Here is the configuration for your company.</span>
                                <table className="table mb-3 font13 mt-3">
                                    <thead>
                                        <tr>
                                            <th scope="col">Configuration</th>
                                            <th scope="col">Why?</th>
                                            <th scope="col">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody className='text-secondary'>
                                        <tr>
                                            <th scope="row">Share issued at incorporation</th>
                                            <td>These are the shares allocated to founders</td>
                                            <td>10,000,000 shares</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Additional authorized shares</th>
                                            <td>This gives you flexibility in the future to authorize additional shares for
                                                fundraises or employee equity programs without having to make
                                                additional filings.</td>
                                            <td>5,000,000 shares</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Total authorized shares</th>
                                            <td>This is the sum of the above two fields.</td>
                                            <td>15,000,000 shares</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Transfer Restrictions</th>
                                            <td>A standard term. This helps you ensure you control who owns your stock</td>
                                            <td>Included; Transfer requires written consent by the board members.</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Stock Par Value</th>
                                            <td>This sets the floor for the value of the company's shares. You want this
                                                number to be low to ensure it's easy to purchase your own shares</td>
                                            <td>$.00001/share</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Board Members</th>
                                            <td>This can be changed later</td>
                                            <td>All founders are included.</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="form-check font15 fw-bold text-secondary my-4">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        I have reviewed the terms listed above.
                                    </label>
                                </div>
                            </div>

                            <div className={"container " + `${activeStep != 3 ? "hidden" : ""}`}>
                                <h4 className='row fw-bold'>Costs</h4>
                                <div className='row border rounded text-center my-4'>
                                    <h3>$500</h3>
                                    <span className='text-secondary'>Incorporation includes Stack Base plan for the first year.</span>
                                </div>
                                <h5 className='fw-bold font15'>What's included:</h5>
                                <h5 className='text-danger'>Table Data Requires Edit</h5>
                                <table className="table mb-3 font13">
                                    <thead>
                                        <tr>
                                            <th scope="col">Feature</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Included</th>
                                        </tr>
                                    </thead>
                                    <tbody className='text-secondary'>
                                        <tr>
                                            <th scope="row">Entity Formation</th>
                                            <td>These are the shares allocated to founders</td>
                                            <td>CheckCircleOutlineIcon</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Incorporation Fees</th>
                                            <td>This gives you flexibility in the future to authorize additional shares for
                                                fundraises or employee equity programs without having to make
                                                additional filings.</td>
                                            <td>5,000,000 shares</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Online Cap Table Management</th>
                                            <td>This is the sum of the above two fields.</td>
                                            <td>15,000,000 shares</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Fundraising Tools</th>
                                            <td>A standard term. This helps you ensure you control who owns your stock</td>
                                            <td>Included; Transfer requires written consent by the board members.</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Corporate Bank Account</th>
                                            <td>This sets the floor for the value of the company's shares. You want this
                                                number to be low to ensure it's easy to purchase your own shares</td>
                                            <td>$.00001/share</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Post Incorporation Documents</th>
                                            <td>This sets the floor for the value of the company's shares. You want this
                                                number to be low to ensure it's easy to purchase your own shares</td>
                                            <td>$.00001/share</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Corporate Bank Account</th>
                                            <td>This sets the floor for the value of the company's shares. You want this
                                                number to be low to ensure it's easy to purchase your own shares</td>
                                            <td>$.00001/share</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Corporate Bank Account</th>
                                            <td>This sets the floor for the value of the company's shares. You want this
                                                number to be low to ensure it's easy to purchase your own shares</td>
                                            <td>$.00001/share</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Corporate Bank Account</th>
                                            <td>This sets the floor for the value of the company's shares. You want this
                                                number to be low to ensure it's easy to purchase your own shares</td>
                                            <td>$.00001/share</td>
                                        </tr>
                                    </tbody>
                                </table>


                            </div>

                            <div className={"container " + `${activeStep != 4 ? "hidden" : ""}`}>
                                <h4 className='fw-bold'>Agreement</h4>
                                <span className='font15'>
                                    Before submitting, please review & accept the below mentioned documents and the terms and conditions. After submitting, you will be redirected to payment. After
                                    payment is received, Stack will begin processing your incorporation. If for any reason incorporation is cancelled or unsuccessful, you will be refunded.
                                </span>

                                <div className='row my-3 align-items-center font13 text-secondary'>
                                    <Switch />
                                    <span className='col-11 font13'>I confirm that my company is not involved in any way with gambling, wagering, cannabis, tobacco, firearms, manufacturing alcohol, or illegal
                                        activities.</span>
                                </div>
                                <div className='row my-3 align-items-center font13 text-secondary'>
                                    <Switch />
                                    <span className='col-11 font13'>By providing the information above, I hereby certify, to the best of my knowledge, that the information provided in this application is complete and
                                        correct..</span>
                                </div>
                                <div className='row my-3 align-items-center font13 text-secondary'>
                                    <Switch />
                                    <span className='col-11 font13'>I acknowledge that once I submit this application, that the incorporation may be filed with the state of Delaware and I will be invoiced for the cost
                                        of incorporation.</span>
                                </div>
                                <div className='row my-3 align-items-center font13 text-secondary'>
                                    <Switch />
                                    <span className='col-11 font13'>I have read and accepted the Electronic Disclosure & E-Signature Consent, Deposit Account Terms and Conditions, Cardholder Terms and
                                        Conditions, Privacy Policy, Terms of Service, Master Subscription Agreement, and the Disclosures listed below. I consent to the use of electronic
                                        records in connection with this application and to place my e-Signature on the documents listed above</span>
                                </div>
                            </div>

                            {activeStep === steps.length - 1 ? 
                                <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>Finish</Button> : 
                                null
                            }
                        </form>
                        </Typography>
                        <div className='container d-flex justify-content-between my-4'>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={classes.backButton}
                                variant='contained'
                            >
                                Back
                            </Button>
                        
                            {activeStep === steps.length - 1 ? 
                                null : 
                                <Button variant="contained" color="primary" onClick={handleNext}>Save and Continue</Button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}