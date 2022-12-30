import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import RegistrationForm from './pages/RegistrationForm';
import PageNotFound from './pages/PageNotFound';
import Board from './pages/Board';

function App() {



  return (

    <div className="App">
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element= {<Board />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </main>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
