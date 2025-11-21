
import closeIcon from "../assets/Img/icon-remove.svg"
const Header = ({filter}) => {
    return(
        <header>
          {
            filter.length > 0 &&
                <section className="flex">
          <div className="flex">
            {
              filter.map(filters =>{
                return(
                  <p className="filter">
                  <span>{filters}</span>
                  <button>
                  <img src={closeIcon} alt="close-icon" />
                  </button>
                  </p>
                )
              })
            }
             
          </div>

          <button className="clear">Clear</button>
        </section>
          }
    
      </header>
    )
}

export default Header