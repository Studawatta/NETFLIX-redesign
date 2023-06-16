import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="container">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158" alt="logo" />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popolar</span>
                <span>My List</span>
            </div>
            <div className="right"></div>
        </div>
    </div>
  )
}

export default Navbar