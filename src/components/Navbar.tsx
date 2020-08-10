import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Link} from 'react-router-dom'
import avatar from '../LogoMakr_2RcyvD.png'
import {
AppBar,
Toolbar,
ListItem,
IconButton,
ListItemIcon,
ListItemText,

Avatar,
Divider,
List,
Typography,
Box,
MenuList,
MenuItem
} from '@material-ui/core'

import {
    ArrowBack,
    AssignmentInd,
    Home,
    SvgIconComponent,
    Cloud,
    ContactMail
} from '@material-ui/icons'

const useStyles = makeStyles({
    menuSliderContainer: {
        width:250,
        background:'#511',
        height:'30rem'
    }
})
export default function Navbar() {
    const classes = useStyles();
    return (
        <>        
        <Box component='nav'>
            <AppBar position='static' style={{background: '#222'}}>
                <Toolbar>                                        
                    <MenuList>
                        <MenuItem component={Link} to='/about'>
                            <Typography variant='h6'>
                                About                    
                            </Typography>        
                        </MenuItem>
                        <MenuItem component={Link} to='/projects'>
                            <Typography variant='h6'>
                                Projects                 
                            </Typography>         
                        </MenuItem>
                    </MenuList>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}
