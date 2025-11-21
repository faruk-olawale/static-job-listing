import MainBody from './Component/MainBody'
import Header from './Component/Header'
import jobDate from "./assets/data.json"
import { useState } from 'react'
import './App.scss'

function App() {
  const [jobs, setJobs] = useState(jobDate);
  const [filter, setFilter] = useState([]);

  const addFilter = (data) => {
    if(filter.indexOf(data) < 0){
        setFilter([...filter, data]);   
    }

  }

  const clearFilters = () => {
    setFilter([]);
  }
  return (
    <>
      <Header filter={filter} clearFilters={clearFilters}/>
      <MainBody jobs={jobs} addFilter ={addFilter}/>
    </>
  )
}

export default App
