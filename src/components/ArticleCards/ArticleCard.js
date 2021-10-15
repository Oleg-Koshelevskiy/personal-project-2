import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Button, CardActions } from '@mui/material'
import './ArticleCard.css'

const ArticleCard = ({ header, image, prewiew, category, date }) => {
    return (
        <Card>
            <CardContent>
                <h2>{header}</h2>
                <div className="article-img">
                    <img src={image} alt="" />{' '}
                </div>
                <p>{prewiew}</p>
                <div>Category: {category}</div>
                <div>Date of publication: {date}</div>
            </CardContent>
            <CardActions>
                <Button>Open Article</Button>
            </CardActions>
        </Card>
    )
}

export default ArticleCard
