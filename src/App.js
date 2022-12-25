import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import RegistrationForm from './pages/RegistrationForm';
import PageNotFound from './pages/PageNotFound';

function App() {
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        async function getIssues(){
            const response = await axios.get('https://localhost:7283/Issue/GetAllIssues');
            console.log(response.data);
            setIssues(response.data);
            console.log(issues);
        }

        getIssues();
    }, [issues])


  return (

    <div className="App">
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element= {<RegistrationForm />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </main>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
