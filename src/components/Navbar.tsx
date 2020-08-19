import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Link from '@material-ui/core/Link';
import logo from '../assets/logo.png'
import {Routes} from '../routes'
import {
AppBar,
Toolbar,
Typography,
} from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      backgroundColor: '#424242',
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    logo:{
        flexGrow: 1,
        color:'white'

    },
    link: {
      margin: theme.spacing(1, 1.5),
      color:'white'
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing(2),
    },
    footer: {
      borderTop: `1px solid ${theme.palette.divider}`,
      marginTop: theme.spacing(8),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
      },
    },
  }));
export default function Navbar() {
    const classes = useStyles();
    return (
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
            <Typography className={classes.logo} variant='h6' >
                CX Systems
            </Typography>
            <nav>
            {Routes.map((route, key) => {
                            return <Link variant="button" color="textPrimary" href={route.path} className={classes.link}>
                                                {route.name}             
                                    </Link>
                        })}
                </nav>
            </Toolbar>
        </AppBar>
    )
}
