import React from 'react'
import classes from '../../Header/Header.module.css'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div className={classes.menu}>
            <div>
                <Link className={classes.li} to="/">
                    Home
                </Link>
            </div>
            <div>
                <Link className={classes.li} to="/blog">
                    Blog
                </Link>
            </div>
            <div>
                <Link className={classes.li} to="/category">
                    Category
                </Link>
            </div>
            <div>
                <Link className={classes.li} to="/favorite">
                    Favorite
                </Link>
            </div>
            <div>
                <Link className={classes.li} to="/gallery">
                    Gallery
                </Link>
            </div>
        </div>
    )
}

export default Menu
