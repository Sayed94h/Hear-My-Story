import {NavLink} from "react-router-dom";
import React from "react";

import './ProfileNavigation.css';

const ProfileNavigation = () => {
  return <nav className="ProfileNavigation">
    <ul>
      <li>
        <NavLink exact={true} to={"/profile"}>Create Story</NavLink>
      </li>
      <li>
        <NavLink exact={true} to={"/profile/stories"}>Show Stories</NavLink>
      </li>
      {/*<li>*/}
      {/*  <Link to={'/'}>Saved Stories</Link>*/}
      {/*</li>*/}
      <li>
        <NavLink to={"/profile/stories/reactions"}>Reactions</NavLink>
      </li>
    </ul>
  </nav>;
}

export default ProfileNavigation;