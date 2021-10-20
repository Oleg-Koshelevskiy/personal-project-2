import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles({
    title: {
        margin: '20px',
        color: 'grey',
    },
})

const GalleryePage = () => {
    const classes = useStyles()
    return (
        <Typography
            align="center"
            variant="h3"
            component="h1"
            className={classes.title}
        >
            GalleryPage
        </Typography>
    )
}

export default GalleryePage
