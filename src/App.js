import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import MainLayout from './Components/Layout/MainLayout';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
      <>
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
         <Route index element={<Dashboard/>}/> 
        </Route>
      </Routes>
    </Router>
      </>
  );
}

export default App;
