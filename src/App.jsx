import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Catalog from './pages/Catalog';
import Contacts from './pages/Contacts';
import About from './pages/About';
import Reviews from './pages/Reviews';
import Bin from './pages/Bin';
import Favority from './pages/Favority';

function App() {
    return (
        <Routes>
            <Route path='/' element={ <Main /> } />
            <Route path='/catalog' element={ <Catalog /> } />
            <Route path='/contacts' element={ <Contacts /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/reviews' element={ <Reviews /> } />
            <Route path='/bin' element={ <Bin /> } />
            <Route path='/favorites' element={ <Favority /> } />
        </Routes>
    )
}

export default App;
