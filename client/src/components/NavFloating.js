import React, {useState} from 'react';
import { disconnectWallet, getActiveAccount } from '../utils/wallet';

import searchIcon from '../images/search.png'
import appleLogo from '../images/apple-logo.png'
import pieChart from '../images/pie-chart.png'
import walletImg from '../images/wallet.png'
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import PaymentIcon from '@material-ui/icons/Payment';
import SearchIcon from '@material-ui/icons/Search';

import devils_logo_img from '../images/logo/devils_logo_800px_trans.png'
import small_devils_logo from '../images/logo/small_devils_logo.png'
import { useNavigate } from 'react-router-dom';

export const NavFloating = () => {
    const navigate = useNavigate();
    const [wallet, setWallet] = useState(null);
    const onDisConnectWallet = async () => {
        console.log("Disconnecting");
        await disconnectWallet();
        const activeAccount = await getActiveAccount();
        setWallet(activeAccount);
        console.log("Disconnected");
        navigate("/");
      };
    return (
        <>
            <nav className='d-flex justify-content-between align-items-center shadow rounded15 px-3' style={{ height: '70px', marginBottom: '30px' }}>
                {/* Devil with a tail  */}
                {/* <div className='d-flex align-items-center justify-content-start'>
                    <img className='mt-5' src={devils_logo_img} style={{height:'102px'}}/>
                    <span className='pt-4 ms-3 fw-bold' style={{fontSize: '40px', fontFamily:'devils_lairs_font' }}>Devils List</span>
                </div> */}

                <div className='d-flex align-items-center justify-content-start'>
                    <img src={small_devils_logo} style={{ width: '48px' }} />
                    <span className='pt-3 ms-3 fw-bold' style={{ fontFamily: 'devils_lairs_font', fontSize: '40px', alignSelf: 'flex-end' }}>Devils List</span>
                </div>

                {/* <span className='font15 ms-5 ps-5 fw-bold'>Dashboard</span> */}
                <div className='d-flex align-items-center' style={{ width: '40%' }}>
                    <div className="input-group shadow-sm" style={{ width: '90%', borderRadius: '40px', overflow: 'hidden', borderColor: 'rgb(18, 24, 39)' }}>
                        <input style={{ border: '0px' }} type="text" className="form-control bg-white" placeholder="   Search ..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button style={{ backgroundColor: 'rgb(26, 27, 47)' }} className="btn" type="button" id="button-addon2">
                            <SearchIcon style={{ color: 'white' }} />
                        </button>
                    </div>
                    <IconButton aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton color='inherit' onClick={onDisConnectWallet}>
                        <ExitToAppRoundedIcon className='me-auto' />
                    </IconButton>
                </div>

            </nav>
        </>
    )
}

export default NavFloating;
