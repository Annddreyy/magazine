import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import './App.css';
import Main from './pages/Main';
import Catalog from './pages/Catalog';
import Contacts from './pages/Contacts';
import About from './pages/About';
import Reviews from './pages/Reviews';
import Bin from './pages/Bin';
import Favority from './pages/Favority';
import Login from './pages/Login';
import Product from './pages/Product';
import Registration from './pages/Registration';
import { checkUser } from './redux/auth/authThunks';
import { withRouter } from './hoc/withRouter';
import { setLastPage } from './redux/app/appReducer';

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
                <Route path='/catalog' element={ <Catalog /> } />
                <Route path='/contacts' element={ <Contacts /> } />
                <Route path='/about' element={ <About /> } />
                <Route path='/reviews' element={ <Reviews /> } />
                <Route path='/bin' element={ <Bin /> } />
                <Route path='/favorites' element={ <Favority /> } />
                <Route path='/login' element={ <Login /> } />
                <Route path='/registration' element={ <Registration /> } />
                <Route path='/product/:productId' element={ <Product /> } />
            </Routes>
        )
    }
}

export default compose(
    connect(null, { checkUser, setLastPage }),
    withRouter
)(App);
