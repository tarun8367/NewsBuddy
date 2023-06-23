
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
const App = () => {
  const pageSize = 6
  const apiKey = process.env.REACT_APP_NEWS_API
  const[progress,setProgress] = useState(0);
  // state = {
  //   progress : 0
  // }

    
   
  
    return (
      <div>
      <Router>
        <LoadingBar
        height = {3}
        color='#f11946'
        progress={progress}
      />
        <Navbar/>
        
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey = {apiKey} key="general" pageSize = {pageSize} country ="in" category = "general"/>}/>
          <Route exact path="/home" element={<News setProgress={setProgress} apiKey = {apiKey} key="general" pageSize = {pageSize} country ="in" category = "general"/>}/>
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey = {apiKey} key="business" pageSize = {pageSize} country ="in" category = "business"/>}/>
          <Route exact path="/entertainment" element= {<News setProgress={setProgress} apiKey = {apiKey} key="entertainment" pageSize = {pageSize} country ="in" category = "entertainment"/>}/>
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey = {apiKey} key="general" pageSize = {pageSize} country ="in" category = "general"/>}/>
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey = {apiKey} key="sports" pageSize = {pageSize} country ="in" category = "sports"/>}/>
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey = {apiKey} key="science" pageSize = {pageSize} country ="in" category = "science"/>}/>
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey = {apiKey} key="health" pageSize = {pageSize} country ="in" category = "health"/>}/>
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey = {apiKey} key="technology" pageSize = {pageSize} country ="in" category = "technology"/>}/>
    
        </Routes>
      </Router>
      </div>

    )
  }


export default App;

// b29bb9a6b74e42e59cfb402c58fb7cb1
// 6e483c86e8754c42a541ecdb633dd28b