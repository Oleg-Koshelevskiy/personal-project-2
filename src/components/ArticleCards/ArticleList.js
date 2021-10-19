import React from 'react'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import { Grid } from '@mui/material'
import ArticleCard from './ArticleCard'
import articlesArray from './articlesArray'

const useStyles = makeStyles({
    title: {
        margin: '20px',
        color: 'grey',
    },
})

const ArticleList = () => {
    const classes = useStyles()
    return (
        <>
            <Typography
                align="center"
                variant="h3"
                component="h1"
                className={classes.title}
            >
                Articles prewiew
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                spacing={2}
            >
                {articlesArray.map(
                    ({ id, header, image, prewiew, category, date }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ArticleCard
                                header={header}
                                image={image}
                                prewiew={prewiew}
                                category={category}
                                date={date}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ArticleList
