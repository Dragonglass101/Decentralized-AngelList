import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { getRootStorage } from '../utils/Api';
import { getActiveAccount, connectWallet } from '../utils/wallet';

import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import SearchIcon from '@material-ui/icons/Search';

import img1 from '../images/home/end_minus_5.png';
import img2 from '../images/home/end_minus_4.png';
import img3 from '../images/home/end_minus_3.png';
import img4 from '../images/home/end_minus_2.png';
import img5 from '../images/home/end_minus_1.png';
import img6 from '../images/home/end.png';
import img7 from '../images/home/end_plus_1.png';
import angellist_logo from '../images/home/angellist_logo.png'
import devils_logo_img from '../images/logo/devils_logo_800px_trans.png'
import devils_logo_svg from '../images/logo/devils_logo.svg'
import small_devils_logo from '../images/logo/small_devils_logo.png'


import { Button } from '@material-ui/core';

export const Home = () => {

    const navigate = useNavigate();
    const [connectAndLogin, setconnectAndLogin] = useState(false);

    const [wallet, setWallet] = useState(null);
    useEffect(() => {
        if(wallet){
            setconnectAndLogin(true);
        }
        (async () => {
          const activeAccount = await getActiveAccount();
          setWallet(activeAccount);
        })();
      }, []);

      useEffect(() => {
        const connectAndLoginFun = async () => {
            const storage = await getRootStorage();

            for( let companyAddress of storage["all_companies"]){
                console.log(wallet.address, companyAddress)
                if(wallet.address === companyAddress)
                    navigate("/dashboard-company", true);
            }
            for( let investorAddress of storage["all_investors"]){
                console.log(wallet.address, investorAddress)
                if(wallet.address === investorAddress)
                    navigate("/dashboard-investor");
            }
            for( let employeeAddress of storage["all_employee"]){
                console.log(wallet.address, employeeAddress)
                if(wallet.address === employeeAddress)
                    navigate("/dashboard-company");
            }
        }
        if(wallet && connectAndLogin)
            connectAndLoginFun()
      }, [wallet, connectAndLogin]);
    
    const handleConnectWallet = async () => {
        const { wallet } = await connectWallet();
        setWallet(wallet);
    };

    async function handleLogin(){
        if(!wallet){
            await handleConnectWallet();
            setconnectAndLogin(true);
        }
        setconnectAndLogin(true);
    }

    return (
        <>
            <nav className='d-flex justify-content-between align-items-center shadow rounded15 px-3' style={{ height: '70px', marginBottom: '30px' }}>
                <div className='d-flex align-items-center justify-content-start'>
                    <img src={small_devils_logo} style={{width:'48px'}}/>
                    <span className='pt-3 ms-3 fw-bold' style={{ fontFamily: 'devils_lairs_font', fontSize: '40px', alignSelf: 'flex-end' }}>Devils List</span>
                </div>
                {/* <span className='font15 ms-5 ps-5 fw-bold'>Dashboard</span> */}
                <div className='d-flex align-items-center w-50 justify-content-between'>
                    <span className='btn'>For Investors</span>
                    <span className='btn'>For Fund Managers</span>
                    <span className='btn'>For Founders</span>
                    <span className='btn'>Company</span>
                    <span className='btn'>Help</span>
                </div>

                <div className='d-flex justify-content-between align-items-center'>
                    <Button className='mx-2' variant="outlined" color="primary" onClick={handleLogin}>
                        Log in
                    </Button>
                    <Link to='/sign-up'>
                        <Button className='mx-2' variant="contained" color="primary">
                            Join
                        </Button>
                    </Link>
                </div>
            </nav>

            <div class="p-5 mb-4 mx-5 background-light-purple rounded-3 d-flex">
                <div class="container-fluid py-4" style={{ width: '55%' }}>
                    <h1 class="display-5 fw-bold mb-3">Invest in world-changing startups</h1>
                    <p class="col-md-8 fs-4 p-0 mb-5">Join leading investors funding the next wave of world-changing startups.</p>
                    <button class="btn button-purple text-white btn-lg" type="button">Invest Now</button>
                </div>
                <div class="container-fluid py-4" style={{ width: '45%' }}>
                    <img className='w-100' src={devils_logo_img} />
                    {/* <img className='w-100' src={devils_logo_svg} /> */}
                </div>
            </div>

            <div className='d-flex justify-content-around align-items-center'>
                <div className='text-center'>
                    <h2 className='m-0' style={{ fontSize: '30px', fontWeight: '700' }}>15000+</h2>
                    <p>Funds & Syndicates</p>
                </div>

                <div className='text-center'>
                    <h2 className='m-0' style={{ fontSize: '30px', fontWeight: '700' }}>$10B</h2>
                    <p>Assets Supported</p>
                </div>

                <div className='text-center'>
                    <h2 className='m-0' style={{ fontSize: '30px', fontWeight: '700' }}>190</h2>
                    <p>Unicorns</p>
                </div>

                <div className='text-center'>
                    <h2 className='m-0' style={{ fontSize: '30px', fontWeight: '700' }}>57%</h2>
                    <p>of all top-tier U.S. VC </p>
                </div>
            </div>

            <div className='container'>
                <img className='w-100' src={img1} />
                <img className='w-100' src={img2} />
                <img className='w-100' src={img3} />
                <img className='w-100' src={img4} />
                <img className='w-100' src={img5} />
                <img className='w-100' src={img6} />
                <img className='w-100' src={img7} />
            </div>
        </>
    )
}
