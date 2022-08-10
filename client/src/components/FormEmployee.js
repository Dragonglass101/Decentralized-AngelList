
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';

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
  return ['Profile', 'Preferences', 'Upload CV and Submit'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (
        <>
          <div className='container mt-4' style={{ width: '60%' }}>
            <h3 className='text-center fw-bold'>Create Your Profile</h3>
            <p className='text-center'>Apply privately to thousands of tech companies & startups with one profile.</p>
            <div className='container border rounded25 px-5 pt-4 bg-white'>
              <div className='py-4'>
                <h5 className='font15 mb-0 fw-bold'>Where are you based?</h5>
                <p className='font13 text-secondary'>Tip: You can choose a city, state, or country</p>
                <TextField className='col-6 font13' size='small' id="filled-basic" label="Location" variant="filled" />
              </div>

              <div className='py-4'>
                <h5 className='font15 fw-bold'>What best describes your current role?</h5>
                <select className="form-select col-6 font13" aria-label="Default select example">
                  <option selected>Select a role</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div className='py-4'>
                <h5 className='font15 fw-bold'>How many years of experience do you have in our current role?</h5>
                <select className="form-select col-6 font13" aria-label="Default select example">
                  <option selected>Select years of experience</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div className='py-4'>
                <h5 className='font15 fw-bold'>How many years of experience do you have in our current role?</h5>
                <select className="form-select col-6 font13" aria-label="Default select example">
                  <option selected>Select years of experience</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div className='py-4'>
                <h5 className='font15 mb-0 fw-bold'>Where do you currently work?</h5>
                <p className='font13 text-secondary'>Your company will never see that you're looking for a job</p>
                <div className='d-flex'>
                  <TextField className='col-4 me-2 font13' size='small' id="filled-basic" label="Job Title" variant="filled" />
                  <TextField className='col-4 me-2 font13' size='small' id="filled-basic" label="Company" variant="filled" />
                  <div className="form-check col-4">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label font13" for="flexCheckDefault">
                      I'm not currently employed.
                    </label>
                  </div>
                </div>
              </div>

              <div className='container employee-form-bg p-4 mb-5 mt-4'>
                <div className="mb-3 col-8">
                  <label for="exampleInputPassword1" className="form-label fw-bold font15">Linkedin Profile</label>
                  <input type="url" className="form-control font13" id="exampleInputPassword1" placeholder='https://linkedin.com/in/' />
                </div>
                <div className="mb-3 col-8">
                  <label for="exampleInputPassword1" className="form-label fw-bold font15">Your Website</label>
                  <input type="url" className="form-control font13" id="exampleInputPassword1" placeholder='https://mypersonalwebsite.com' />
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
            <h3 className='text-center fw-bold'>Set Your Job Preferences</h3>
            <p className='text-center'>Your answers determine which jobs we recommend for you and which startups see your profile.</p>
            <div className='container border rounded25 px-5 pt-4 bg-white'>

              <div className='py-4'>
                <h5 className='font15 fw-bold'>Where are you in Job Search?</h5>
                <div className='d-flex justify-content-between'>
                  <div className='rounded-pill border py-2 ps-4 col-3'>
                    <div className="form-check">
                      <input className="form-check-input font13" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                      <label className="form-check-label font13" for="flexRadioDefault2">
                        Ready to interview
                      </label>
                    </div>
                  </div>

                  <div className='rounded-pill border py-2 ps-4 col-3'>
                    <div className="form-check">
                      <input className="form-check-input font13" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <label className="form-check-label font13" for="flexRadioDefault1">
                        Open to offers
                      </label>
                    </div>
                  </div>

                  <div className='rounded-pill border py-2 ps-4 col-3'>
                    <div className="form-check">
                      <input className="form-check-input font13" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                      <label className="form-check-label font13" for="flexRadioDefault3">
                        Closed to offers
                      </label>
                    </div>
                  </div>

                </div>
              </div>

              <div className='py-4'>
                <h5 className='font15 fw-bold mb-0'>What type of job are you interested in?</h5>
                <p className='font13 text-secondary'>Choose just one for now. You can change this or add more types later.</p>
                <div className='d-flex justify-content-between'>
                  <div className='rounded-pill border py-2 ps-4 col-3'>
                    <div className="form-check">
                      <input className="form-check-input font13" type="radio" name="flexRadioDefault2" id="flexRadioDefault4" />
                      <label className="form-check-label font13" for="flexRadioDefault4">
                        Full-time employee
                      </label>
                    </div>
                  </div>

                  <div className='rounded-pill border py-2 ps-4 col-2'>
                    <div className="form-check">
                      <input className="form-check-input font13" type="radio" name="flexRadioDefault2" id="flexRadioDefault5" />
                      <label className="form-check-label font13" for="flexRadioDefault5">
                        Contractor
                      </label>
                    </div>
                  </div>

                  <div className='rounded-pill border py-2 ps-4 col-2'>
                    <div className="form-check">
                      <input className="form-check-input font13" type="radio" name="flexRadioDefault2" id="flexRadioDefault6" />
                      <label className="form-check-label font13" for="flexRadioDefault6">
                        Intern
                      </label>
                    </div>
                  </div>

                  <div className='rounded-pill border py-2 ps-4 col-3'>
                    <div className="form-check">
                      <input className="form-check-input font13" type="radio" name="flexRadioDefault2" id="flexRadioDefault7" />
                      <label className="form-check-label font13" for="flexRadioDefault7">
                        Co-Founder
                      </label>
                    </div>
                  </div>

                </div>
              </div>


              <div className='py-4'>
                <h5 className='font15 fw-bold mb-0'>What is your desired salary?</h5>
                <p className='font13 text-secondary'>The information will never be shown in your public profile.</p>
                <div className="input-group col-3 ms-0 ps-0">
                  <input type="text" className="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  <span className="input-group-text" id="basic-addon2">Tez</span>
                </div>

              </div>

              <div className='py-4'>
                <h5 className='font15 fw-bold'>What kind of role are you looking for?</h5>
                <select className="form-select col-3 font13" aria-label="Default select example">
                  <option selected>Select a role</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div className='py-4'>
                <h5 className='font15 mb-0 fw-bold'>What location do you want to work in?</h5>
                <p className='font13 text-secondary'>Your current location can't be removed</p>
                <TextField className='col-3 me-2' size='small' id="filled-basic" label="Enter Location" variant="filled" />

                <div className="form-check col-4">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label font13" for="flexCheckDefault">
                    I'm open to working remotely.
                  </label>
                </div>
              </div>


              <div className='py-4'>
                <h5 className='font15 mb-0 fw-bold'>Would you like to work at companies of these sizes?</h5>

                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Ideal</th>
                      <th scope="col">Yes</th>
                      <th scope="col">No</th>
                    </tr>
                  </thead>
                  <tbody className='text-secondary font13'>
                    <tr>
                      <th className='text-secondary fw-normal font13'>Seed (1 - 10 employees)</th>
                      <td>
                        <div className="form-check">
                          <input className="form-check-input font13" type="radio" name="flexRow1" id="flexCol11" />
                        </div>
                      </td>
                      <td>
                        <div className="form-check">
                          <input className="form-check-input font13" type="radio" name="flexRow1" id="flexCol12" />
                        </div>
                      </td>
                      <td>
                        <div className="form-check">
                          <input className="form-check-input font13" type="radio" name="flexRow1" id="flexCol13" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th className='text-secondary fw-normal font13'>Early (11 - 50 employees)</th>
                      <td>
                        <div className="form-check">
                          <input className="form-check-input font13" type="radio" name="flexRow2" id="flexCol21" />
                        </div>
                      </td>
                      <td>
                        <div className="form-check">
                          <input className="form-check-input font13" type="radio" name="flexRow2" id="flexCol22" />
                        </div>
                      </td>
                      <td>
                        <div className="form-check">
                          <input className="form-check-input font13" type="radio" name="flexRow2" id="flexCol23" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th className='text-secondary fw-normal font13'>Mid-size (51 - 200 emplovees)</th>
                      <td>
                        <div className="form-check">
                          <input className="form-check-input font13" type="radio" name="flexRow3" id="flexCol31" />
                        </div>
                      </td>
                      <td>
                        <div className="form-check">
                          <input className="form-check-input font13" type="radio" name="flexRow3" id="flexCol32" />
                        </div>
                      </td>
                      <td>
                        <div className="form-check">
                          <input className="form-check-input font13" type="radio" name="flexRow3" id="flexCol33" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th className='text-secondary fw-normal font13'>Large (201 - 500 employees)</th>
                      <td>
                        <div className="form-check">
                          <input className="form-check-input font13" type="radio" name="flexRow4" id="flexCol41" />
                        </div>
                      </td>
                      <td>
                        <div className="form-check">
                          <input className="form-check-input font13" type="radio" name="flexRow4" id="flexCol42" />
                        </div>
                      </td>
                      <td>
                        <div className="form-check">
                          <input className="form-check-input font13" type="radio" name="flexRow4" id="flexCol43" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th className='text-secondary fw-normal font13'>Very Large (501 - 1000 emplovees)</th>
                      <td>
                        <div className="form-check">
                          <input className="form-check-input font13" type="radio" name="flexRow5" id="flexCol51" />
                        </div>
                      </td>
                      <td>
                        <div className="form-check">
                          <input className="form-check-input font13" type="radio" name="flexRow5" id="flexCol52" />
                        </div>
                      </td>
                      <td>
                        <div className="form-check">
                          <input className="form-check-input font13" type="radio" name="flexRow5" id="flexCol53" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th className='text-secondary fw-normal font13'>Massive (1001+ employees)</th>
                      <td>
                        <div className="form-check">
                          <input className="form-check-input font13" type="radio" name="flexRow6" id="flexCol61" />
                        </div>
                      </td>
                      <td>
                        <div className="form-check">
                          <input className="form-check-input font13" type="radio" name="flexRow6" id="flexCol62" />
                        </div>
                      </td>
                      <td>
                        <div className="form-check">
                          <input className="form-check-input font13" type="radio" name="flexRow6" id="flexCol63" />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </>
      );
    case 2:
      return (
        <>
          <h3 className='text-center fw-bold mt-4'>Upload a recent resume or CV</h3>
          <p className='font15 text-secondary text-center'>Autocomplete your profile in just a few seconds by uploading a resume.</p>
          <div className='container border rounded25 bg-white d-flex flex-column align-items-center justify-content-center' style={{ height: '300px', width: '70%' }}>
            <svg width='50px' height='50px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            <p className='my-4 font15 text-secondary text-center'>Click the button below to upload your resume as .pdf, .doc, .docs, .rtf, .wp or .txt file</p>
            <div className=" mb-4 input-group w-50">
              <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
              <button className="btn btn-primary" type="button" id="inputGroupFileAddon04">Upload Resume</button>
            </div>
          </div>
        </>
      );
    default:
      return 'Unknown stepIndex';
  }
}

export const FormEmployee = () => {
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
            <div className='container mt-4 w-50 d-flex justify-content-between'>
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
  );
}
