import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import './App.css';
import Header from './components/Header';

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
      <Header />
    </div>
  );
}

export default App;
