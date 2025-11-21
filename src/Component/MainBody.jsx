import JobList from "./JobList"

const MainBody = ({jobs, addFilter}) => {

    return(
       <main>
        {
            jobs.map((job, index) => {
                return (
                <JobList 
                 key={index}
                 job={job}
                 addToFilters={addFilter}
                 />
                 
            ) 
            })
        }

       </main>
    )
}

export default MainBody