import React from 'react'
import Container from '@mui/material/Container'
import classes from './Header.module.css'
import Logo from '../Header/logo.png'
import Menu from './Menu/Menu'
import Social from '../../components/Social/Social'

const Header = () => {
    return (
        <header className={classes.header}>
            <Container maxWidth="lg">
                <div className={classes.row}>
                    <div className={classes.col_md_3}>
                        <img className={classes.logo} src={Logo} alt="Logo" />
                    </div>
                    <div className={classes.col_md_6}>
                        <Menu />
                    </div>
                    <div className={classes.col_md_3}>
                        <Social />
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
