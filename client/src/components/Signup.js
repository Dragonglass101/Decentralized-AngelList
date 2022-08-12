import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import appleLogo from '../images/apple-logo.png';

import analytics_img from '../images/undraw_handcrafts_analytics.svg'
import briefcase_img from '../images/undraw_handcrafts_briefcase.svg'
import document_img from '../images/undraw_handcrafts_document.svg'
import small_devils_logo from '../images/logo/small_devils_logo.png'

export const Signup = () => {
  return (
    <>

      <nav className='d-flex justify-content-between align-items-center shadow rounded15 px-3' style={{ height: '70px', marginBottom: '30px' }}>
        <div className='d-flex align-items-center justify-content-start'>
          <img src={small_devils_logo} style={{ width: '48px' }} />
          <span className='pt-3 ms-3 fw-bold' style={{ fontFamily: 'devils_lairs_font', fontSize: '40px', alignSelf: 'flex-end' }}>Devils List</span>
        </div>

        <div className='d-flex justify-content-between align-items-center'>
          <Button className='mx-2' variant="outlined" color="primary">
            Log in
          </Button>
          <Button className='mx-2' variant="contained" color="primary">
            Join
          </Button>
        </div>
      </nav>

      <div className='container' style={{ marginTop: '12vh' }}>
        <h2 className='text-center m-0'>Welcome to DevilList Venture</h2>
        <p className='text-center font13 text-secondary'>We're glad you're here. Choose your path to get started.</p>
        <div className='d-flex justify-content-around align-items-center'>

          <div className="shadow-sm card cardColorPinkish rounded m-3" style={{ width: '18rem', border: '0px' }}>
            <div className="card-body">
              <div className='d-flex justify-content-between align-items-center mb-4'>
                <img style={{ height: '100px' }} src={analytics_img} />
              </div>
              <h5 className="card-title fw-bold mb-1">Investors</h5>
              <p className="card-text font13 text-secondary">You can invest into Rolling Funds now. Apply to invest in Syndicates(deal-by-deal) and Venture Funds below.</p>
              <Link to="/form-investor"><Button className='d-block w-100 mt-4' style={{ textTransform: 'capitalize' }} variant='contained' color="primary">Apply</Button></Link>
            </div>
          </div>

          <div className="shadow-sm card cardColorPinkish rounded m-3" style={{ width: '18rem', border: '0px' }}>
            <div className="card-body">
              <div className='d-flex justify-content-between align-items-center mb-4'>
                <img style={{ height: '100px' }} src={document_img} />
              </div>
              <h5 className="card-title fw-bold mb-1">Founders</h5>
              <p className="card-text font13 text-secondary">Create a fundraising-ready startup with everything from incorporation, banking, to equity management tools in one place.</p>
              <Link to="/form-company"><Button className='d-block w-100 mt-4' style={{ textTransform: 'capitalize' }} variant='contained' color="primary">Apply</Button></Link>
            </div>
          </div>

          <div className="shadow-sm card cardColorPinkish rounded m-3" style={{ width: '18rem', border: '0px' }}>
            <div className="card-body">
              <div className='d-flex justify-content-between align-items-center mb-4'>
                <img style={{ height: '100px' }} src={briefcase_img} />
              </div>
              <h5 className="card-title fw-bold mb-1">Employee</h5>
              <p className="card-text font13 text-secondary">Apply to run a Rolling Fund. Start raising with Syndicates (deal-by-deal) or Venture Funds below.</p>
              <Link to="/form-employee"><Button className='d-block w-100 mt-4' style={{ textTransform: 'capitalize' }} variant='contained' color="primary">Apply</Button></Link>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}
