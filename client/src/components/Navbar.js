import React, { useEffect, useState } from "react";

import { alpha, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { connectWallet, getActiveAccount, disconnectWallet } from "../utils/wallet";
import { Link, useNavigate } from "react-router-dom";

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
  const classes = useStyles();
  const [open, setopen] = useState(true);

  const handleSideNavClose = () => {
    setopen(false);
  };
  const handleSideNavOpen = () => {
    setopen(true);
  };

  const navigationList = ['Dashboard', 'Search Startups', 'Pending Requests', 'Track Investments', 'My Wallet'];
  const navigationPathList = ["/dashboard-investor", "/startups-list-investor", "/investment-request", "#", "#"]
  const navigationIconList = [];

  const listElement = [];
  for(let i=0;i<navigationList.length;i++){
      listElement.push(
        <Link to={navigationPathList[i]} style={{color: "inherit"}}>
          <ListItem button key={navigationList[i]}>
              <ListItemText primary={navigationList[i]} />
          </ListItem>
        </Link>
      )
  }
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
            <div className={classes.toolbar} />
            <Divider />
            <List>
                {listElement}
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
