import React from 'react'
import classes from '../../Header/Header.module.css'

const Menu = () => {
    return (
        <div className={classes.menu}>
            <div className={classes.li}>Home</div>
            <div className={classes.li}>Blog</div>
            <div className={classes.li}>Category</div>
            <div className={classes.li}>Gallery</div>
        </div>
    )
}

export default Menu
