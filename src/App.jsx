import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';

function App() {
    return (
        <main>
            <Routes>
                <Route path='/' element={ <Main /> } />
            </Routes>
        </main>
    )
}

export default App;
