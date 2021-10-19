import React from 'react'
import Container from '@mui/material/Container'
import ArticleList from '../../components/ArticleCards/ArticleList'
import AboutMe from './AboutMe'
import SimpleSlider from './Slider'

const Main = () => {
    return (
        <>
            <Container maxWidth="lg">
                <SimpleSlider />
            </Container>

            <AboutMe />
            <Container maxWidth="lg">
                <ArticleList />
            </Container>
        </>
    )
}

export default Main
