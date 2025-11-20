import closeIcon from "../assets/Img/icon-remove.svg"
const Header = () => {
    return(
        <header>
        <section className="flex">
          <div className="flex">
             <p className="filter">
             <span>Frontend</span>
             <button>
              <img src={closeIcon} alt="close-icon" />
             </button>
             </p>
             <p className="filter">
             <span>Frontend</span>
             <button>
              <img src={closeIcon} alt="close-icon" />
             </button>
             </p>
             <p className="filter">
             <span>Frontend</span>
             <button>
              <img src={closeIcon} alt="close-icon" />
             </button>
             </p>
          </div>

          <button className="clear">Clear</button>
        </section>
      </header>
    )
}

export default Header