import React from 'react'
import classes from '../container/Header/Header.module.css'
import Facebook from '../components/facebook.png'
import Instagram from '../components/instagram.png'
import Twitter from '../components/twitter.png'

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
