import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import "./NavBar.css";

const NavBar = () => {
    return(
    <div className="Navv">
        <AppBar backgourd-color="red" position = "static">
            <ToolBar className="Navv" >
                <Typography variant="title" backgourd-color="red">
                    Use Code Kid-Player 
                </Typography>
            </ToolBar> 
            </AppBar>

    </div>
    );

}
export default NavBar;