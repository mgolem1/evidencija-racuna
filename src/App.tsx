import './App.css';
import RacunList from './racun/RacunList';
import AddRacun from './racun/AddRacun';
import DetailsRacun from './racun/DetailsRacun';
import {  BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RacunList/>}/>
        <Route path="/addRacun" element={<AddRacun/>}/>
        <Route path="/updateRacun/:Id" element={<AddRacun/>}/>
        <Route path="/detailsRacun/:id" element={<DetailsRacun/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
