import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

export const Signup = () => {
  return (
    <div>
      <Link to="/form-investor">
        <Button variant="contained" color="primary">
          Investor Form
        </Button>
      </Link>
      <Link to="/form-company">
        <Button variant="contained" color="primary">
          Company Form
        </Button>
      </Link>
      <Link to="/form-employee">
        <Button variant="contained" color="primary">
          Employee Form
        </Button>
      </Link>
    </div>
  )
}
