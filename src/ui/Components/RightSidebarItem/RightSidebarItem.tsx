import React from 'react';
import './RightSidebarItem.scss';
import Image from '../Image/Image';

interface Props {
  backgroundColor?: string;
  title: React.ReactNode;
  backgroundImage: string;
  backgroundAvatar: string;
  imageAvatar: string;
  surname: string;
}
const RightSidebarItem: React.FC<Props> = ({
  title,
  surname,
  backgroundImage,
  backgroundAvatar,
  imageAvatar,
}) => {
  return (
    <>
      <div
        className="home_sidebar_right_item"
        style={{backgroundImage: `url(${backgroundImage})`}}
      >
        <div className="overlay"></div>
        <div className="main_item_header_title">
          <div
            className="main_item_header_title_image"
            style={{backgroundImage: `url(${backgroundAvatar})`}}
          >
            <Image path={imageAvatar} alt="" />
          </div>

          <div className="main_item_header_nickname">
            <a href="other_profiles.html">
              <h3>
                <span>{title}</span>
                <Image path="verified.svg" alt="" />
              </h3>
            </a>
            <p>{surname}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSidebarItem;
