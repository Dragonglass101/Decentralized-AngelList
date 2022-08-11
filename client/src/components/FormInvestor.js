
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import small_devils_logo from '../images/logo/small_devils_logo.png'

import TextField from '@material-ui/core/TextField';

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
  return ['Accreditation', 'Investment Goals', 'Past Experience'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (
        <>
          <div className='container mt-4' style={{ width: '60%' }}>
            <h3 className='text-center fw-bold'>Accreditation</h3>
            <p className='text-center'>You must be an accredited investor to invest on DevilsList Venture.</p>
            <div className='container border rounded25 px-5 pt-4 bg-white'>
              <div className='row'>
                <div className="w-50 my-2">
                  <label for="exampleFormControlInput1" className="form-label font15 fw-bold">What is your full legal name?</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Full Name" />
                </div>


                <div className="w-50 my-2">
                  <label for="exampleFormControlInput1" className="form-label font15 fw-bold">Enter your Phone Number</label>
                  <input type="tel" className="form-control" id="exampleFormControlInput1" placeholder="Phone Number" />
                </div>


                <div className="w-50 my-2">
                  <label for="exampleFormControlInput1" className="form-label font15 fw-bold">Enter your Email-Id</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>


                <div className="w-50 my-2">
                  <label for="formFileSm" className="form-label font15 fw-bold">Upload Profile Picture</label>
                  <input className="form-control" id="formFileSm" type="file" />
                </div>

                <div className="w-50 my-2">
                  <label for="formFileSm" className="form-label font15 fw-bold">What is your legal place of residence?</label>
                  <select className="form-select" aria-label="Default select example">
                    <option selected>Select a role</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>

                <div className="w-50 my-2">
                  <label for="formFileSm" className="form-label font15 fw-bold">Upload Resume</label>
                  <input className="form-control" id="formFileSm" type="file" />
                </div>

                {/* Purple Container */}
                <div className='container employee-form-bg p-4 mb-5 mt-4'>
                  <p className='fw-bold'>How are you accredited?</p>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" for="flexRadioDefault1">
                      I have atleast 500k Tez in investments.
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label" for="flexRadioDefault2">
                      I have between 220k to 500k Tez in net assets.
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                    <label className="form-check-label" for="flexRadioDefault3">
                      I have between 100k to 200k Tez in net assets.
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                    <label className="form-check-label" for="flexRadioDefault4">
                      I have income of 200k Tez( or 300k Tez jointly with spouse) for the past 2 years and expect the same for this year.
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" />
                    <label className="form-check-label" for="flexRadioDefault5">
                      I am Series 7, Series65, or Series 82 holder and my license is active and in good standing.
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6" />
                    <label className="form-check-label" for="flexRadioDefault6">
                      I am not accredited yet.
                    </label>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </>
      );
    case 1:
      return (
        <>
          <div className='container mt-4' style={{ width: '80%' }}>
            <h3 className='text-center fw-bold'>Investment Goals</h3>
            <p className='text-center'>Tell us more about why you want to invest on DevilsList Venture.</p>
            <div className='container border rounded25 px-5 pt-4 bg-white'>

              <div className='py-3'>
                <p className='fw-bold'>How much are you hoping to allocate( in Tez) to startups using AngelList Venture over the next 12 months ?</p>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="formAllocation" id="formAllocation1" />
                  <label className="form-check-label" for="formAllocation1">
                    Up to 20,000
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="formAllocation" id="formAllocation2" />
                  <label className="form-check-label" for="formAllocation2">
                    Up to 50,000
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="formAllocation" id="formAllocation3" />
                  <label className="form-check-label" for="formAllocation3">
                    Up to 100,000
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="formAllocation" id="formAllocation4" />
                  <label className="form-check-label" for="formAllocation4">
                    Up to 250,000
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="formAllocation" id="formAllocation5" />
                  <label className="form-check-label" for="formAllocation5">
                    Up to 500,000
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="formAllocation" id="formAllocation6" />
                  <label className="form-check-label" for="formAllocation6">
                    More than 500,000
                  </label>
                </div>
              </div>

              <div className='py-3'>
                <p className='fw-bold'>What percentage of your net - worth do you want to allocate to investing in startups ?</p>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="secondFormAllocation" id="secondFormAllocation1" />
                  <label className="form-check-label" for="secondFormAllocation1">
                    Up to 5%
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="secondFormAllocation" id="secondFormAllocation2" />
                  <label className="form-check-label" for="secondFormAllocation2">
                    Up to 10%
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="secondFormAllocation" id="secondFormAllocation3" />
                  <label className="form-check-label" for="secondFormAllocation3">
                    Up to 15%
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="secondFormAllocation" id="secondFormAllocation4" />
                  <label className="form-check-label" for="secondFormAllocation4">
                    More than 15%
                  </label>
                </div>

              </div>

              <div className='py-3'>
                <p className='fw-bold'>Which of the following investment strategies(or products) best match your preferences ?</p>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                    Picking companies to invest in (DevilsList Syndicates)
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                    Investing in funds that broadly index venture, such as DevilsList Access Fund (DevilsList Managed Funds)
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label className="form-check-label" for="flexCheckChecked">
                    Investing behind Fund Managers who pick companies to invest in (DevilsList Rolling or Traditional Funds)
                  </label>
                </div>
              </div>

              <div className='py-3'>
                <p className='fw-bold'>What are your main reasons for choosing AngelList Venture ?</p>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheck2" />
                  <label className="form-check-label" for="flexCheck2">
                    Generating financial returns for your portfolio
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheck2" />
                  <label className="form-check-label" for="flexCheck2">
                    Meeting new people to expand your network
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheck2" />
                  <label className="form-check-label" for="flexCheck2">
                    Accessing dealflow you can't get anywhere else
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheck2" />
                  <label className="form-check-label" for="flexCheck2">
                    Learning more about tech and startups
                  </label>
                </div>
              </div>

              <div className='py-3'>
                <p className='fw-bold'>How are you hoping to use AngelList Venture ?</p>
                <div className="mb-3">
                  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
              </div>

            </div>
          </div>
        </>
      );
    case 2:
      return (
        <>
          <div className='container mt-4' style={{ width: '80%' }}>
            <h3 className='text-center fw-bold'>Investment Goals</h3>
            <p className='text-center'>Tell us more about why you want to invest on DevilsList Venture.</p>
            <div className='container border rounded25 px-5 pt-4 bg-white'>
              <div className="py-3">
                <label for="exampleInputPassword1" className="form-label fw-bold">Linkedin Profile</label>
                <input type="url" className="form-control font13" id="exampleInputPassword1" placeholder='https://linkedin.com/in/' />
              </div>

              <div className='py-3'>
                <p className='fw-bold mb-0'>What is your experience in investing in venture - backed tech startups or venture capital funds ?</p>
                <p className='text-secondary font13'>Choose all that apply.</p>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheck2" />
                  <label className="form-check-label" for="flexCheck2">
                    I invested in a startup directly or through a single-purpose vehicle (SPV)
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheck2" />
                  <label className="form-check-label" for="flexCheck2">
                    I invested in startups indirectly through a venture fund
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheck2" />
                  <label className="form-check-label" for="flexCheck2">
                    I work or worked at a venture capital or investment firm
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheck2" />
                  <label className="form-check-label" for="flexCheck2">
                    I represent or represented a family office or Registered Investment Advisor (RIA)
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheck2" />
                  <label className="form-check-label" for="flexCheck2">
                    None of the above
                  </label>
                </div>
              </div>

              <div className='py-3'>
                <p className='fw-bold'>What is your experience working with tech startups?</p>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheck2" />
                  <label className="form-check-label" for="flexCheck2">
                    I work or worked at a tech startup
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheck2" />
                  <label className="form-check-label" for="flexCheck2">
                    I advise or advised a tech startup
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheck2" />
                  <label className="form-check-label" for="flexCheck2">
                    I am or was a tech startup founder
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheck2" />
                  <label className="form-check-label" for="flexCheck2">
                    None of the above
                  </label>
                </div>
              </div>

              <div className='py-3'>
                <p className='fw-bold mb-0'>How did you hear about AngelList Venture?</p>
                <p className='text-secondary font13'>Choose all that apply.</p>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheck2" />
                  <label className="form-check-label" for="flexCheck2">
                    Google Search
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheck2" />
                  <label className="form-check-label" for="flexCheck2">
                    Newsletter/Media Site (TechCrunch, etc.)
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheck2" />
                  <label className="form-check-label" for="flexCheck2">
                    Twitter
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheck2" />
                  <label className="form-check-label" for="flexCheck2">
                    Friend or Connection
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheck2" />
                  <label className="form-check-label" for="flexCheck2">
                    AngelList Syndicate Lead or Fund Manager
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheck2" />
                  <label className="form-check-label" for="flexCheck2">
                    Other (please specify)
                  </label>
                </div>
              </div>

              <div className='py-3 font13 text-secondary'>
                <h5 className='fw-bold text-black mb-2'>Please carefully review the information below before submitting your application:</h5>
                <p className='mb-1'>1. I understand that most investments in startups result in a complete loss.</p>
                <p className='mb-1'>2. I understand that AngelList does not verify information on the site, and I am responsible for my own diligence.</p>
                <p className='mb-1'>3. I promise to hold AngelList harmless against any damage that may happen to myself as a result of my use of AngelList.</p>
                <p className='mb-1'>4. If I invest, I will comply with securities laws and consult my own attorney and professional advisors where I need advice.</p>
                <p className='mb-1'>5. I understand that I will be permanently banned from AngelList and that I may face legal consequences if I falsely represent my accreditation status.</p>
                <p className='mb-1'>6. I declare that I am resident of India</p>
              </div>

              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" value="" id="flexCheck2" />
                <label className="form-check-label" for="flexCheck2">
                  I agree to the terms and conditions, as well as the terms above.
                </label>
              </div>

            </div>
          </div>
        </>
      );
    default:
      return 'Unknown stepIndex';
  }
}

export const FormInvestor = () => {
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

  document.body.style.backgroundColor = 'rgb(236, 238, 245)';

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
      <Stepper className='container mt-4 w-50 border rounded-pill' activeStep={activeStep} alternativeLabel>
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
            <div className='container my-4 w-50 d-flex justify-content-between'>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
                variant='contained'
              >
                Back
              </Button>
              <Button style={{ textTransform: 'capitalize' }} variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Submit Application' : 'Save and Continue'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
