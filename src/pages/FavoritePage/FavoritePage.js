import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles({
    title: {
        margin: '20px',
        color: 'grey',
    },
})

const FavoritePage = () => {
    const classes = useStyles()
    return (
        <Typography
            align="center"
            variant="h3"
            component="h1"
            className={classes.title}
        >
            FavoritePage
        </Typography>
    )
}

export default FavoritePage
