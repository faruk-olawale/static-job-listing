import { useState, useEffect } from 'react';
import MainBody from './Component/MainBody';
import Header from './Component/Header';
import { fetchRemoteOKJobs } from './utils/remoteOKAdapter';
import './App.scss';

function App() {
  const [allJobs, setAllJobs] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadJobs = async () => {
      setLoading(true);
      const remoteJobs = await fetchRemoteOKJobs();
      setAllJobs(remoteJobs);
      setJobs(remoteJobs);
      setLoading(false);
    };
    loadJobs();
  }, []);

  const filterJobs = (jobsList, filters, search) => {
    let filtered = jobsList;

    if (filters.length > 0) {
      filtered = filtered.filter(job => {
        return filters.every(filter => 
          job.tags && job.tags.some(tag => 
            tag.toLowerCase() === filter.value.toLowerCase()
          )
        );
      });
    }

    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(job => 
        job.position?.toLowerCase().includes(searchLower) ||
        job.company?.toLowerCase().includes(searchLower) ||
        job.description?.toLowerCase().includes(searchLower) ||
        (job.tags && job.tags.some(tag => tag.toLowerCase().includes(searchLower)))
      );
    }

    setJobs(filtered);
  };

  const addFilter = (data) => {
    const dataExisting = filter.some(f => f.type === data.type && f.value === data.value);
    if (!dataExisting) {
      const updatedFilters = [...filter, data];
      setFilter(updatedFilters);
      filterJobs(allJobs, updatedFilters, searchTerm);
    }
  };

  const clearFilters = () => {
    setFilter([]);
    setSearchTerm('');
    setJobs(allJobs);
  };

  const removeFilter = (filterData) => {
    const updatedFilters = filter.filter(f => 
      !(f.type === filterData.type && f.value === filterData.value)
    );
    setFilter(updatedFilters);
    filterJobs(allJobs, updatedFilters, searchTerm);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterJobs(allJobs, filter, value);
  };

  return (
    <>
      <Header 
        filter={filter} 
        clearFilters={clearFilters} 
        removeFilter={removeFilter}
        searchTerm={searchTerm}
        onSearch={handleSearch}
        jobCount={jobs.length}
        loading={loading}
      />
      {loading ? (
        <div className="loading">Loading amazing remote jobs...</div>
      ) : (
        <MainBody jobs={jobs} addFilter={addFilter} />
      )}
    </>
  );
}

export default App;