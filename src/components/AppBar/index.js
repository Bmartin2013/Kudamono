import React from 'react';
import { AppBar, Typography, Toolbar, IconButton, } from '@material-ui/core';
import AppleIcon from '@material-ui/icons/Apple';

export default ({ appName }) => {

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <AppleIcon />
                </IconButton>
                <Typography variant="h6" >
                    {appName}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}