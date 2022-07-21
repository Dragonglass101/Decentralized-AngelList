import React from "react";
import { connectWallet, getActiveAccount, disconnectWallet } from "../utils/wallet";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [wallet, setWallet] = useState(null);
  const navigate = useNavigate();

  const handleConnectWallet = async () => {
    const { wallet } = await connectWallet();
    setWallet(wallet);
  };
  const handleDisconnectWallet = async () => {
    if(window.confirm("Do you want to signout")){
      const { wallet } = await disconnectWallet();
      setWallet(wallet);
    }
  };

  function redirectToSignup(){
    navigate("/sign-up");
  }

  useEffect(() => {
    const func = async () => {
      const account = await getActiveAccount();
      if (account) {
        setWallet(account.address);
      }
    };
    func();
  }, []);

  return (
	<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="/test">Test</a>
        <a className="nav-link" href="#">Pricing</a>
		<div>
        <button
		  className="btn btn-danger"
          onClick={wallet ? handleDisconnectWallet : redirectToSignup}
		  style={{marginLeft: "800px"}}
        >
          {wallet
            ? wallet.slice(0, 4) +
              "..." +
              wallet.slice(wallet.length - 4, wallet.length)
            : "Signup"}
        </button>
      </div>
      </div>
    </div>
  </div>
</nav>
  );
}