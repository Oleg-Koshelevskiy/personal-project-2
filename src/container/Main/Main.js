import React from 'react'
import Container from '@mui/material/Container'
import ArticleList from '../../components/ArticleCards/ArticleList'

const Main = () => {
    return (
        <>
            <Container maxWidth="lg">
                <ArticleList />
            </Container>
        </>
    )
}

export default Main
