import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNav = () => (
  <div className="sideNav">
    <nav>
      <ul className="nav_ul">
        <li className="nav_li" id="logout_link">
          <NavLink className="nav_link " to="/logout">Logout</NavLink>
        </li>
        <li className="nav_li" id="home_link">
          <NavLink className="nav_link " to="/">Models</NavLink>
        </li>
        <li className="nav_li" id="create_link">
          <NavLink className="nav_link" to="/create">Create</NavLink>
        </li>
        <li className="nav_li" id="reserve_link">
          <NavLink className="nav_link" to="/reserve_list">My Reservations</NavLink>
        </li>
        <li className="nav_li" id="delete_link">
          <NavLink className="nav_link" to="/delete_car">Delete Car</NavLink>
        </li>
      </ul>
    </nav>
    <div />
  </div>
);

export default SideNav;
