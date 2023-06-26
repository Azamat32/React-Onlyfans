import Button from '@ui/Components/Button/Button';
import Image from '@ui/Components/Image/Image';
import React from 'react';
import {NavLink} from 'react-router-dom';

import './MyProfile.scss';

const MyProfile = () => {
  return (
    <>
    <div className="my_profile_inner"><div className="profile_main_inner">
        <NavLink className="profle_main_btn" to="/newPost">
          <Button
            padding="11px 37px"
            border="none"
            backgroundColor="#23329A"
            maxWidth="197px"
            title=" New Post"
            icon="add.svg"
            width="100%"
            hoverColorChange="#3f50c0"
            fontColor="#fff"
          />
        </NavLink>
        <div className="other_profiles_header">
          <div className="myprofiles_banner_adaptive_inner">
            <div className="myprofiles_banner_adaptive_left">
              <div className="main_sidebar_banner_item">
                <NavLink to="/subscriptions">
                  <Image path="subscriptions.svg" />
                </NavLink>
              </div>
              <div className="main_sidebar_banner_item">
                <NavLink to="/subscribers">
                  <Image path="Subscribers.svg" />
                </NavLink>
              </div>
            </div>
            <div className="myprofiles_banner_adaptive_right">
              <div className="main_sidebar_banner_item">
                <a className="copy_link " href="#">
                  <Image path="link.svg" />
                </a>
              </div>
              <div className="main_sidebar_banner_item">
                <NavLink to="/settings" className="metal_pair">
                  <Image path="metal.svg" />
                </NavLink>
              </div>
              <div className="main_sidebar_banner_item">
                <NavLink to="/subscribers">
                  {' '}
                  <Image path="search.svg" />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="my_profiles_banner witoutbanner "> </div>
          <div className="other_profiles_banner_adaptive adaptive"></div>
          <div className="other_profiles_header_content">
            <div className="other_profiles_header_username">
              <div className="other_profiles_username_avatar">
                <div className="other_profiles_username_avatar_image">
                  <h1>AM</h1>
                </div>
                <div className="other_profiles_username_avatar_text">
                  <h3>
                    <span>Arlene McCoy</span>
                    <Image path="verified.svg" alt="" />
                  </h3>
                  <p>@ticklishkoala607</p>
                </div>
              </div>
              <div className="other_profiles_username_subscribe not_adaptive">
                <NavLink className="sub_btn" to="/edit">
                  <Button
                    border="none"
                    maxWidth="197px"
                    title="Edit"
                    width="100%"
                    backgroundColor="#3f50c0"
                    hoverColorChange="#23329A"
                    fontColor="#fff"
                    icon="pen.svg"
                  />
                </NavLink>
              </div>
            </div>
            <div className="other_profiles_header_community">
              <div className="other_profiles_community_left">
                <div className="other_profiles_community_item">
                  <div className="reaction_hover">
                    <Image path="heart.svg" />
                  </div>
                  <p>0</p>
                </div>
                <div className="other_profiles_community_item">
                  <div className="dark">
                    <Image path="subscriptions.svg" />
                  </div>

                  <p>0</p>
                </div>
                <div className="other_profiles_community_item">
                  <div className="dark">
                    <Image path="picture.svg" />
                  </div>

                  <p>0</p>
                </div>
                <div className="other_profiles_community_item">
                  <div className="dark">
                    <Image path="camera.svg" />
                  </div>

                  <p>0</p>
                </div>
              </div>
              <div className="other_profiles_community_right">
                <a className="copy_link not_adaptive" href="#">
                  <Image path="link.svg" />
                </a>
                <NavLink to="/settings" className="metal_pair not_adaptive">
                  <div className="comment_hover">
                    {' '}
                    <Image path="metal.svg" />
                  </div>
                </NavLink>
                <div className="link_box not_adaptive">
                  <p>Link copied</p>
                </div>
                <div className="other_profiles_username_subscribe adaptive">
                  <NavLink className="sub_btn" to="/edit">
                    <Button
                      border="none"
                      maxWidth="197px"
                      title="Edit"
                      width="100%"
                      backgroundColor="#3f50c0"
                      hoverColorChange="#23329A"
                      fontColor="#fff"
                      icon="pen.svg"
                    />
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="w3-bar w3-black">
              <button
                className="w3-bar-item w3-button tablink w3-red "
                //   onclick="openCity(event,'Tabs1')"
              >
                0 POSTS
              </button>
              <button
                className="w3-bar-item w3-button tablink "
                //   onclick="openCity(event,'Tabs2')"
              >
                0 MEDIA
              </button>
            </div>
          </div>
        </div>
        <div
          id="Tabs1"
          className="tabs"
          style={{borderTop: '1px solid #efeff4'}}
        ></div>
        <div id="Tabs2" className="tabs media_inner">
          <div className="tabs_media_content"></div>
        </div>
      </div></div>
      
    </>
  );
};

export default MyProfile;
