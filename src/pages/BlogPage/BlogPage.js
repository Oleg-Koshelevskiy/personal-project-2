import { Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    title: {
        margin: '20px',
        color: 'grey',
    },
})

const BlogPage = () => {
    const classes = useStyles()
    return (
        <Typography
            align="center"
            variant="h3"
            component="h1"
            className={classes.title}
        >
            BlogPage
        </Typography>
    )
}

export default BlogPage
