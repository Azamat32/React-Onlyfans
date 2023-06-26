import React from 'react';
import Image from '../Image/Image';
import './Header.scss';

import {Link} from 'react-router-dom';

interface Props {
  title: string;
  adaptive_title?: string;
  back_icon?: string;
  className?: string;
}

const Header: React.FC<Props> = ({
  title,
  adaptive_title,
  back_icon,
  className,
}) => {
  return (
    <>
      <nav className={className}>
        <div className="container">
          <div className="nav_inner">
            <div className="nav_logo">
              <h1 className="not_adaptive_logo">{title}</h1>
              <h1 className="adaptive_logo">
                <Link to="/home">
                  <Image className="nav_img" path={back_icon} />
                </Link>
                {adaptive_title}
              </h1>
            </div>
            <div className="nav_input">
              <div className="nav_search">
                <Image path="search.svg" alt="" />
                <input type="" placeholder="Search" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
