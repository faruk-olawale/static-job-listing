import PhotoSnapImg from "../assets/Img/photosnap.svg"

const JobList = () => {
    return(
        <article className="flex">
        <div className="flex">
            <img src={PhotoSnapImg} alt="" />
            <div className="job-details">
                <div >
                    <span className="job-company">Photosnap</span>
                    <span className="job-new">New!</span>
                    <span className="job-featured">Featured</span>
                </div>
                <p>Senior Frontend Developer</p>
                <div>
                    <span>1d ago</span>
                    <span>.</span>
                    <span>Full time</span>
                    <span>USA Only</span>
                </div>
            </div>
        </div>

        <div>
            <button>Frontend</button>
            <button>Senior</button>
            <button>HTML</button>
            <button>CSS</button>
            <button>Javascript</button>

        </div>
       </article>
    )
}

export default JobList