import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Nav from '../Base/Nav';
import Footer from '../Base/Footer';
import ScrollTop from '../Base/ScrollTop';
import Loading from './Loading';
// import BlogArticle from '../Blog/BlogArticle';

const IndexComponent = (
    lazy(()=> (
        import ('./Index')
    ))
)

const AboutComponent = (
    lazy(() => (
      import('../About/About')
    ))
)

const SoftwareComponent = (
    lazy(() => (
      import('../Software/Software')
    ))
)
const ContactComponent = (
    lazy(() => (
      import('../Contact/Contact')
    ))
)

const BlogArticle = (
    lazy(() => (
        import('../Blog/BlogArticle')
    ))
)

const LoadingMessage = () => (
    <Loading />
)

export default class Main extends Component {
    render() {
        return (
            <Router basename="/">
                <ScrollTop />
                <Nav />
                    <Switch>
                        <Suspense fallback={<LoadingMessage />}>
                        <Route path="/blog/:title/" exact component={BlogArticle} />
                        <Route path="/" exact component={IndexComponent} />
                        <Route path="/about">
                            <AboutComponent />
                        </Route>
                        <Route path="/contact" exact component={ContactComponent} />
                        <Route path="/software" exact component={SoftwareComponent} />
                        </Suspense>
                    </Switch>
                <Footer />
            </Router> 
        )
    }
}