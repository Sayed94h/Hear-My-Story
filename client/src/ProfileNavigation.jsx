import {Link} from "react-router-dom";
import React from "react";

import './ProfileNavigation.css';

const ProfileNavigation = () => {
  return <nav className="ProfileNavigation">
    <ul>
      <li>
        <Link to={"/profile"}>Create Story</Link>
      </li>
      <li>
        <Link to={"/profile/stories"}>Show Stories</Link>
      </li>
      {/*<li>*/}
      {/*  <Link to={'/'}>Saved Stories</Link>*/}
      {/*</li>*/}
      <li>
        <Link to={"/profile/stories/reactions"}>Reactions</Link>
      </li>
    </ul>
  </nav>;
}

export default ProfileNavigation;