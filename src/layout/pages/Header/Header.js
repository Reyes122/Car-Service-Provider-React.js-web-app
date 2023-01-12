import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import './Header.css';

const Header = () => {
  const {user} = useContext(AuthContext);
  return (
    <div className="navbar bg-base-100 hd">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
        </div>
        <a href='val' className="btn btn-ghost normal-case text-xl"><b>GeniusCar_</b></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to='/'>Home</Link></li>
          {
              user?.email ?
              <>
                <li><Link to='/order'>Order</Link></li>
              </>
              :<li><Link to='/login'>Login</Link></li>
          }
          <li><Link to='/signup'>SignUp</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a href='val' className="btn">Appointment</a>
      </div>
    </div>
  );
};

export default Header;