import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import './App.css';
import Main from './pages/Main';
import { checkUser } from './redux/auth/authThunks';
import { withRouter } from './hoc/withRouter';
import { setLastPage } from './redux/app/appReducer';
import Loading from './components/common/Loading/Loading';

const Catalog = React.lazy(() => import('./pages/Catalog'));
const Contacts = React.lazy(() => import('./pages/Contacts'));
const About = React.lazy(() => import('./pages/About'));
const Reviews = React.lazy(() => import('./pages/Reviews'));
const Bin = React.lazy(() => import('./pages/Bin'));
const Favority = React.lazy(() => import('./pages/Favority'));
const Login = React.lazy(() => import('./pages/Login'));
const Product = React.lazy(() => import('./pages/Product'));
const Registration = React.lazy(() => import('./pages/Registration'));

class App extends React.Component {
    componentDidMount() {
        this.props.checkUser();
        this.props.setLastPage(this.props.location.pathname)
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            if (this.props.location.pathname !== '/registration' && this.props.location.pathname !== '/login') {
                this.props.setLastPage(this.props.location.pathname);
            }
        }
    }

    render() {
        return (
            <Routes>
                <Route path='/' element={ <Main /> } />
                <Route path='/catalog' element={ 
                    <React.Suspense fallback={<Loading />}>
                        <Catalog />
                    </React.Suspense>
                }/>
                <Route path='/contacts' element={ 
                    <React.Suspense fallback={<Loading />}>
                        <Contacts />
                    </React.Suspense>
                }/>
                <Route path='/about' element={ 
                    <React.Suspense fallback={<Loading />}>
                        <About />
                    </React.Suspense>
                }/>
                <Route path='/reviews' element={ 
                    <React.Suspense fallback={<Loading />}>
                        <Reviews />
                    </React.Suspense>
                }/>
                <Route path='/bin' element={ 
                    <React.Suspense fallback={<Loading />}>
                        <Bin />
                    </React.Suspense>
                }/>
                <Route path='/favorites' element={ 
                    <React.Suspense fallback={<Loading />}>
                        <Favority />
                    </React.Suspense>
                }/>
                <Route path='/login' element={ 
                    <React.Suspense fallback={<Loading />}>
                        <Login />
                    </React.Suspense>
                }/>
                <Route path='/registration' element={ 
                    <React.Suspense fallback={<Loading />}>
                        <Registration />
                    </React.Suspense>
                }/>
                <Route path='/product/:productId' element={ 
                    <React.Suspense fallback={<Loading />}>
                        <Product />
                    </React.Suspense>
                }/>
            </Routes>
        )
    }
}

export default compose(
    connect(null, { checkUser, setLastPage }),
    withRouter
)(App);
