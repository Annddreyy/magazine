import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Catalog from './pages/Catalog';
import Contacts from './pages/Contacts';
import About from './pages/About';
import Reviews from './pages/Reviews';
import Bin from './pages/Bin';
import Favority from './pages/Favority';
import Login from './pages/Login';
import Product from './pages/Product';
import { connect } from 'react-redux';
import { checkUser } from './redux/auth/authThunks';
import React from 'react';

class App extends React.Component {
    componentDidMount() {
        this.props.checkUser();
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
                <Route path='/product/:productId' element={ <Product /> } />
            </Routes>
        )
    }
}

export default connect(null, { checkUser })(App);
