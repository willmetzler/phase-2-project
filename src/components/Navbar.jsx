import { Link } from 'react-router-dom'

function Navbar () {

    return (
        <div>
            <Link to="/">Home</Link>
            &nbsp; &nbsp;
            <Link to="/about">About</Link>
            &nbsp; &nbsp;
            <Link to="/contact">Contact</Link>
            &nbsp; &nbsp;
            <Link to="/about/portfolio">About: Portfolio</Link>
            &nbsp; &nbsp;
            <Link to="/about/bio">About: Bio</Link>
        </div>
    )
}

export default Navbar