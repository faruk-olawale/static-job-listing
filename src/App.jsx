import MainBody from './Component/MainBody'
import Header from './Component/Header'
import jobDate from "./assets/data.json"
import { useState } from 'react'
import './App.scss'

function App() {
  const [jobs, setJobs] = useState(jobDate);
  const [filter, setFilter] = useState([]);

  const addFilter = (data) => {
    const dataExisting = filter.some(filters => filters.type === data.type && filters.value === data.value)
    if(!dataExisting){
      const updatedFilters = [...filter, data]
      setFilter(updatedFilters);

        const filteredJobs = jobs.filter(job => {
          let levelCheck ,roleCheck ,languageCheck, toolCheck = false;

          if(updatedFilters.some(filters => filters.type === "level")){
            levelCheck = true;
          }

          if(updatedFilters.some(filters => filters.type === "role")){
            roleCheck = true;
          }

          if(updatedFilters.some(filters => filters.type === "language")){
            languageCheck = true;
          }

          if(updatedFilters.some(filters => filters.type === "tool")){
            toolCheck = true;
          }
          return ( 
            (levelCheck ? job.level === updatedFilters.find(filters => filters.type = "level").value :
            true) &&
            (roleCheck ? job.role === updatedFilters.find(filters => filters.type = "role").value :
            true) &&
            (toolCheck ? updatedFilters.filter(f => f.type === "tool").every(f => job.tools.indexOf(f.
             value ) > -1) : true ) &&
            (languageCheck ? updatedFilters.filter(f => f.type === "language").every(f => job.languages.indexOf(f.
             value ) > -1) : true )  

          )
        })   

        setJobs(filteredJobs);

  }
}


  const clearFilters = () => {
    setFilter([]);
    setJobs(jobDate)
  }
  const removeFilter = (filterData) => {
    const updatedFilters = filter.filters(filterItem => {
      return (filterItem.type !== filterData.type && filterItem.value !== filterData.value)
    })
    setFilter(updatedFilters);
  }
  return (
    <>
      <Header filter={filter} clearFilters={clearFilters} removeFilter ={removeFilter}/>
      <MainBody jobs={jobs} addFilter ={addFilter}/>
    </>
  )
}

export default App
