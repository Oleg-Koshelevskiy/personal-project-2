import React from 'react'
import classes from '../../container/Header/Header.module.css'
import Facebook from '../Social/facebook.png'
import Instagram from '../Social/instagram.png'
import Twitter from '../Social/twitter.png'

const Social = () => {
    return (
        <div className={classes.contacts}>
            <img className={classes.social} src={Facebook} alt="Facebbok" />
            <img className={classes.social} src={Instagram} alt="Instagram" />
            <img className={classes.social} src={Twitter} alt="Twitter" />
        </div>
    )
}
export default Social
