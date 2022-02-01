import {NavLink} from 'react-router-dom';
import './Header.css';

function Header() {
    return (
      <div className = "header">
        <nav>
          <ul>
            <li> <NavLink exact className = "Nav_link" to = "/">Home</NavLink> </li>
            <li> <NavLink className = "Nav_link" to = "/note">Note</NavLink> </li>
            <li> <NavLink className = "Nav_link" to = "/create">Create</NavLink> </li>
            <li> <NavLink className = "Nav_link" to = "/about">About</NavLink> </li>
            </ul>
        </nav>
      </div>
    );
  }
  
  export default Header;