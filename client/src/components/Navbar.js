import React, { useEffect, useState } from "react";

import { alpha, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { connectWallet, getActiveAccount, disconnectWallet } from "../utils/wallet";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: 'rgb(26,27,47)',
        color: 'grey'
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
}));

const Navbar = () => {
  const [account, setAccount] = useState("");
  const classes = useStyles();
  const [open, setopen] = useState(true);
  const [wallet, setWallet] = useState(null);
  const navigate = useNavigate();

  const handleSideNavClose = () => {
    setopen(false);
  };
  const handleSideNavOpen = () => {
    setopen(true);
  };

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
    <>
    <div className={classes.root}>
        <Drawer
            className={classes.drawer}
            style={{ backgroundColor: 'rgb(26,27,47)', color: 'rgb(26,27,47)' }}
            variant="persistent"
            classes={{
                paper: classes.drawerPaper,
            }}
            open={open}
            anchor="left"
        >
          <button onClick={handleSideNavClose}>close</button>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                {['Dashboard', 'Search Startups', 'Track Investments', 'My Wallet'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider style={{ color: 'grey', backgroundColor: 'grey', marginTop: '350px' }} />
            <List>
                {['Help and Support'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    </div>
    </>
  );
};

export default Navbar;
