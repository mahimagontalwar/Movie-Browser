import './NavBar.css';
import MovieLogo from '../../assets/MovieLogo.png';
import { Link } from 'react-router-dom';
function NavBar(){
    return(
        <div className="nav-bar">
        <Link to="/" className='nav-bar-item'><img src={MovieLogo} className='logo-img'/></Link>
        <Link to="/" className='nav-bar-item'>Movies</Link>
        <Link to="/watchlist" className='nav-bar-item'>Watchlist</Link>
        </div>
    )
}
export default NavBar;