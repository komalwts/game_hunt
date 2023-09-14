import React from 'react'
import { NavLink } from 'react-router-dom';

const lists = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Games', path: '/games' },
  { name: 'Tournaments', path: '/tournaments' },
  { name: 'Games Developers', path: '/gamesDevelopers' },
];

const Slider = () => {
  return (
    <div className="sidebar">
      {lists.map(list => {
      return (
          <NavLink to={list.path}
            className={ ({isActive}) => isActive ? 'nav-link active' : 'nav-link' }
          >{list.name}</NavLink>
      )
    })}
    </div>
  )
}

export default Slider