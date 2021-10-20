import { Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    title: {
        margin: '20px',
        color: 'grey',
    },
})

const CategoryPage = () => {
    const classes = useStyles()
    return (
        <Typography
            align="center"
            variant="h3"
            component="h1"
            className={classes.title}
        >
            CategoryPage
        </Typography>
    )
}

export default CategoryPage
