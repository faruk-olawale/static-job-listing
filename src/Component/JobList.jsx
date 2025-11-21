import PhotoSnapImg from "../assets/Img/photosnap.svg"

import img1 from "../assets/Img/photosnap.svg"
import img2 from "../assets/Img/manage.svg"
import img3 from "../assets/Img/account.svg"
import img4 from "../assets/Img/myhome.svg"
import img5 from "../assets/Img/loop-studios.svg"
import img6 from "../assets/Img/faceit.svg"
import img7 from "../assets/Img/shortly.svg"
import img8 from "../assets/Img/insure.svg"
import img9 from "../assets/Img/eyecam-co.svg"
import img10 from "../assets/Img/the-air-filter-company.svg"

const JobList = ({job, addToFilters}) => {
    const images =[
        {id: 1, image: img1},
        {id: 2, image: img2},
        {id: 3, image: img3},
        {id: 4, image: img4},
        {id: 5, image: img5},
        {id: 6, image: img6},
        {id: 7, image: img7},
        {id: 8, image: img8},
        {id: 9, image: img9},
        {id: 10, image: img10},
    ]
    
    return(
        <article className="flex">
        <div className="flex">
            <img src={images.find(img => img.id === job.id).image} alt={job.company} />
            <div className="job-details">
                <div >
                    <span className="job-company">{job.company}</span>
                    {job.new && <span className="job-new">New!</span>}
                    {job.featured && <span className="job-featured">Featured</span>}
                </div>
                <p>{job.position}</p>
                <div>
                    <span>{job.postedAt}</span>
                    <span>.</span>
                    <span>{job.contract}</span>
                    <span>{job.location}</span>
                </div>
            </div>
        </div>

        <div>
            <button onClick={() => addToFilters(job.role)}>{job.role}</button>
            <button onClick={() => addToFilters(job.level)}>{job.level}</button>
            {
                job.languages.map(language => <button onClick={() => addToFilters(language)}>{language}</button>)
            }

            {
                job.tools.map(tool => <button onClick={() => addToFilters(tool)}>{tool}</button>)
            }


        </div>
       </article>
    )
}

export default JobList