import React from 'react';
import '../styles/form.css'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Switch from '@material-ui/core/Switch';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';

import IconButton from '@material-ui/core/IconButton';

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
    return ['Getting Started', 'Company Details', 'Founders', 'Ownership', 'Company Terms', 'Costs', 'Sign and Submit'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return (
                <>
                    <div className='container'>
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
                </>
            );
        case 1:
            return (
                <>
                    <div className='container'>
                        <h4 className='row fw-bold'>Company Details</h4>
                        <p className='row font15 text-secondary'>Provide high-level information about your new company, like the legal name you would like your company to have. The name you choose must be available
                            in Delaware's registry search and end with one of the following suffixes: Incorporated, Inc., Corporation, or Corp.</p>
                        <Divider variant='fullWidth' />
                        <form className='row mt-3 font13'>
                            <div className="mb-3 col-6">
                                <label for="exampleInputEmail1" className="form-label font13 fw-bold">Company Legal Name</label>
                                <input type="text" className="form-control font13" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                            </div>
                            <div className='mb-3 col-6'>
                                <label for="basic-url" className="form-label font13 fw-bold">Industry</label>
                                <select className="form-select font13" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <label for="basic-url" className="form-label font13 fw-bold">Website<span style={{ fontSize: '10px' }}> (optional)</span></label>
                            <div className="input-group mb-3 col-6">
                                <span className="input-group-text font13" id="basic-addon3">https://</span>
                                <input type="text" className="form-control font13" id="basic-url" aria-describedby="basic-addon3" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1" className='fw-bold'>What will your company do?
                                    <span className='fw-normal text-secondary' style={{ fontSize: '10px' }}>(Required. In a few sentences, describe your products/services, how you plan to finance the company, and founder backgrounds.)</span>
                                </label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                            </div>
                            <div className='mb-3'>
                                <p className='fw-bold mb-0'>Business Address</p>
                                <span className='text-secondary' style={{ fontSize: '11px' }}>This can be your personal address. Please list a valid US address where you will receive company notices and information from your registered agent. Do not list a P.O
                                    Box, virtual mailbox, or mail forwarding address.</span>
                            </div>
                            <div className="col-12 mb-3">
                                <label for="inputAddress" className="form-label fw-bold">Address</label>
                                <input type="text" className="form-control font13" id="inputAddress" placeholder="1234 Main St" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="inputCity" className="form-label fw-bold">City</label>
                                <input type="text" className="form-control font13" id="inputCity" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="inputZip" className="form-label fw-bold">Zip Code</label>
                                <input type="text" className="form-control font13" id="inputZip" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="inputState" className="form-label fw-bold">State</label>
                                <select id="inputState" className="form-select font13">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="inputState" className="form-label fw-bold">Country</label>
                                <select id="inputState" className="form-select font13">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>

                            {/* <button type="submit" className="btn btn-primary">Submit</button> */}
                        </form>
                    </div>
                </>
            );
        case 2:
            return (
                <>
                    <div className='container'>
                        <h4 className='row fw-bold'>Founders</h4>
                        <span className='row font15 text-secondary'>This is where you can list co-founders if you have them. The co-founders you list here will join the Board of Directors.</span>
                        <form className='row rounded border mt-3 p-4'>
                            <div className="col-4 mb-3">
                                <label for="inputState" className="form-label font13 fw-bold">First Name</label>
                                <input type="text" className="form-control font13" aria-label="First name" />
                            </div>
                            <div className="col-4 mb-3">
                                <label for="inputState" className="form-label font13 fw-bold">Last Name</label>
                                <input type="text" className="form-control font13" aria-label="Last name" />
                            </div>
                            <div className="col-4 mb-3">
                                <label for="inputState" className="form-label font13 fw-bold">Email</label>
                                <input type="email" className="form-control font13" aria-label="Last name" />
                            </div>
                            <div className="col-6 mb-3">
                                <label for="inputState" className="form-label font13 fw-bold">Nationality</label>
                                <select id="inputState" className="form-select font13">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className='col-6 mb-3'>
                                <label for="inputState" className="form-label font13 fw-bold">Personal Website
                                    <span style={{ fontSize: '10px' }}>  ( GitHub, Linkedin, Twitter, or other profile )</span>
                                </label>
                                <input type="url" className="form-control font13" aria-label="Last name" placeholder='https://example.com' />

                            </div>
                            <div className="col-4 mb-3">
                                <label for="inputState" className="form-label font13 fw-bold">Date of Birth</label>
                                <input style={{ textTransform: 'uppercase' }} type="date" className="form-control font13" aria-label="Last name" />
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
                                    <input type="text" className="form-control font13" aria-label="Text input with dropdown button" />
                                </div>
                            </div>
                            <div className="col-12 mb-3">
                                <label for="inputAddress" className="form-label font13 fw-bold">Address</label>
                                <input type="text" className="form-control font13" id="inputAddress" placeholder="1234 Main St" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="inputCity" className="form-label font13 fw-bold">City</label>
                                <input type="text" className="form-control font13" id="inputCity" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="inputZip" className="form-label font13 fw-bold">Zip Code</label>
                                <input type="text" className="form-control font13" id="inputZip" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="inputState" className="form-label font13 fw-bold">State</label>
                                <select id="inputState" className="form-select font13">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="inputState" className="form-label font13 fw-bold">Country</label>
                                <select id="inputState" className="form-select font13">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                        </form>
                        <div className='text-center mt-3'>
                            <button className='btn btn-dark my-2'>Add Co-Founder</button>
                        </div>
                    </div>
                </>
            );
        case 3:
            return (
                <>
                    <div className='container'>
                        <h4 className='row fw-bold'>Titles and Ownership</h4>
                        {/* <span className='row'>Assign titles and ownership amounts.</span> */}
                        <form className='row rounded border p-4'>
                            {/* <h5>Title and Ownership</h5> */}
                            <span className='mb-3' style={{ fontSize: '13px' }}>Assign title and ownership amount</span>
                            <div className="col-4 mb-3">
                                <label for="inputState" className="form-label font13 fw-bold">Stakeholder Name</label>
                                <input type="text" className="form-control font13" aria-label="First name" placeholder='Founder-XX' disabled />
                            </div>

                            <div className="col-4 mb-3">
                                <label for="inputState" className="form-label font13 fw-bold">Appointed Officer Role</label>
                                <select id="inputState" className="form-select font13">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="input-group align-items-end col-3 mb-3">
                                <input type="text" className="form-control font13" placeholder="Ownership" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <span className="input-group-text font13" id="basic-addon2">%</span>
                            </div>
                        </form>
                    </div>
                </>
            );
        case 4:
            return (
                <>
                    <div className='container'>
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
                </>
            );
        case 5:
            return (
                <>
                    <div className='container'>
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
                </>
            );
        case 6:
            return (
                <>
                    <div className='container'>
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
                </>
            );
        default:
            return 'Unknown stepIndex';
    }
}

export const FormCompany = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <div className='d-flex mt-5'>
                <Stepper className='w-25 fitHeight' activeStep={activeStep} orientation='vertical'>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    {activeStep === steps.length ? (
                        <div>
                            <Typography className={classes.instructions}>All steps completed</Typography>
                            <Button onClick={handleReset}>Reset</Button>
                        </div>
                    ) : (
                        <div>
                            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                            <div className='container d-flex justify-content-between my-4'>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.backButton}
                                    variant='contained'
                                >
                                    Back
                                </Button>
                                <Button variant="contained" color="primary" onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Save and Continue'}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}