import React from 'react';
import './App.css';
import CalendarContents from './components/Calendar/calendar-contents';

import {
  BrowserRouter as Router,
  Routes,
  Route,
}   from "react-router-dom";

import DetailsRedirect from './components/Calendar/details-redirect'


function App() {
  return (
    <CalendarContents />,
    <Router>
    <Routes>
       <Route exact path="/" element={<CalendarContents/>} />
       <Route exact path="/details-redirect" element={<DetailsRedirect/>}/>
    </Routes>
    </Router>
   
  );
}

export default App;
