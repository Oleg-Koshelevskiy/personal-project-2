import React from 'react'
import Container from '@mui/material/Container'
import ArticleList from '../../components/ArticleCards/ArticleList'
import AboutMe from './AboutMe'
import SimpleSlider from './Slider'
import { Route, Switch } from 'react-router'
import BlogPage from '../../pages/BlogPage/BlogPage'
import CategoryPage from '../../pages/CategoryPage/CategoryPage'
import FavoritePage from '../../pages/FavoritePage/FavoritePage'
import GalleryePage from '../../pages/GalleryPage/GalleryPage'

const Main = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact>
                    <>
                        <SimpleSlider />
                        <Container maxWidth="lg">
                            <AboutMe />
                            <ArticleList />
                        </Container>
                    </>
                </Route>
                <Route path="/blog" exact>
                    <BlogPage />
                </Route>
                <Route path="/category" exact>
                    <CategoryPage />
                </Route>
                <Route path="/favorite" exact>
                    <FavoritePage />
                </Route>
                <Route path="/gallery" exact>
                    <GalleryePage />
                </Route>
            </Switch>
        </>
    )
}

export default Main
