import React from 'react';
import RightSidebarItem from './../RightSidebarItem/RightSidebarItem';
import './RightSidebar.scss';
import avatar1 from '@assets/images/avatar1.png';
import avatar4 from '@assets/images/avatar4.png';
import avatar5 from '@assets/images/avatar5.png';
import avatar6 from '@assets/images/avatar6.png';
import shameWomen1 from '@assets/images/shameWomen1.png';
import beast from '@assets/images/beast.png';
import beast2 from '@assets/images/beast2.png';
import {Link} from 'react-router-dom';
const RightSidebar = () => {
  return (
    <>
      <div className="home_sidebar_right">
        <div className="home_sidebar_right_inner">
          <div className="home_sidebar_right_title">
            <h2>Suggestions</h2>
          </div>
          <div className="home_sidebar_right_content">
            <Link to="/otherProfilesPage">
              <RightSidebarItem
                title="Arlen McCoy"
                surname="@ticklishkoala607"
                backgroundImage={shameWomen1}
                backgroundAvatar={avatar1}
                imageAvatar="avatar1.png"
              />
            </Link>
            <Link to="/otherProfilesPage">
              <RightSidebarItem
                title="Arlen McCoy"
                surname="@ticklishkoala607"
                backgroundImage={beast}
                backgroundAvatar={avatar4}
                imageAvatar="avatar4.png"
              />
            </Link>
            <Link to="/otherProfilesPage">
              <RightSidebarItem
                title="Arlen McCoy"
                surname="@ticklishkoala607"
                backgroundImage={beast2}
                backgroundAvatar={avatar5}
                imageAvatar="avatar5.png"
              />
            </Link>
            <Link to="/otherProfilesPage">
              <RightSidebarItem
                title="Arlen McCoy"
                surname="@ticklishkoala607"
                backgroundImage={beast}
                backgroundAvatar={avatar6}
                imageAvatar="avatar6.png"
              />
            </Link>
          </div>
          <div className="home_sidebar_right_footer">
            <div className="home_sidebar_right_footer_top">
              <Link to="/about">About</Link>
              <span>•</span>
              <a href="#">Terms of Service</a>
              <span>•</span>
              <a href="#">Help</a>
              <span>•</span>
              <a href="#">Contact</a>
            </div>
            <p>© 2022 Fanclub</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSidebar;
