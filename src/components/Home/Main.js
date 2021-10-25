import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Nav from '../Base/Nav';
import Footer from '../Base/Footer';
import ScrollTop from '../Base/ScrollTop';
import Loading from './Loading';
import BlogArticle from '../Blog/BlogArticle';
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

// const BlogArticle = (
//     lazy(() => (
//         import('../Blog/BlogArticle')
//     ))
// )

const LoadingMessage = () => (
    <Loading />
)

const DocViewer = (
    lazy(() => (
      import('../DocViwer/Doc')
    ))
)

export default class Main extends Component {
    render() {
        return (
            <Router basename="/">
                <ScrollTop />
                <Nav />
                    <Switch>
                        <Route path="/blog/:title/" exact component={BlogArticle} />
                        <Suspense fallback={<LoadingMessage />}>
                        <Route path="/" exact component={IndexComponent} />
                        <Route path="/about">
                            <AboutComponent />
                        </Route>
                        <Route path="/contact" exact component={ContactComponent} />
                        <Route path="/blog" exact component={SoftwareComponent} />
                        <Route path="/software" exact component={SoftwareComponent} />
                        <Route path="/viewdoc" exact component={DocViewer} />
                        </Suspense>
                    </Switch>
                <Footer />
            </Router> 
        )
    }
}