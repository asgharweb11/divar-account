import React , { useState , useRef } from "react"
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Menu from "@material-ui/core/Menu"



const BtnSave = () => {

    const options = [
        'انتشار', 
        'پیش نویس', 
        'پیش نمایش'
    ];


    // -------------
    const [anchorEl, setAnchorEl] = useState(null);
    const [index , setIndex] = useState(0)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event) => {
        setAnchorEl(null);
    };

    const handleSelect = id => e => {
        setIndex(id)
        setAnchorEl(null);
    }

    return (
        <React.Fragment>
            <ButtonGroup variant="contained" color="primary" aria-label="split button">
                <Button
                    color="primary"
                    size="small"
                    aria-haspopup="true"
                    onClick={handleClick}

                >
                    <ArrowDropDownIcon />
                </Button>
                <Button>{options[index]}</Button>
            </ButtonGroup>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                >
                    {
                        options.map((item , index) => {
                            return (<MenuItem onClick={handleSelect(index)}>{item}</MenuItem>)
                        })
                    }
            </Menu>
        </React.Fragment>



    )
}

export default BtnSave;