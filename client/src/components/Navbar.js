import React, { useEffect, useState } from "react";
import { connectWallet, getAccount, disconnectWallet } from "../utils/wallet";

const Navbar = () => {
  const [account, setAccount] = useState("");

  useEffect(() => {
    (async () => {
      const activeAccount = await getAccount();
      setAccount(activeAccount);
    })();
  }, []);

  const onConnectWallet = async () => {
    await connectWallet();
    const activeAccount = await getAccount();
    setAccount(activeAccount);
  };

  const onDisConnectWallet = async () => {
    console.log("Disconnecting");
    await disconnectWallet();
    const activeAccount = await getAccount();
    setAccount(activeAccount);
    console.log("Disconnected");
  };

  return (
    <div className="navbar navbar-dark bg-dark fixed-top">
      <div className="container py-2">
        <a href="/" className="navbar-brand">
          Decentralized-AngeList
        </a>
        <div className="d-flex">
          <button onClick={onConnectWallet} className="btn btn-outline-info">
            {account !== "" ? account : "Connect Wallet"}
          </button>

          <button onClick={onDisConnectWallet} className="btn btn-outline-info">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
