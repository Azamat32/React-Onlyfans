import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import Image from '../Image/Image';
import Button from '../Button/Button';
import './Sidebar.scss';
import {useDispatch} from 'react-redux';
import {authenticationActions} from '@bus/authentication/actions';
const Sidebar = () => {
  const dispatch = useDispatch();
  const logout = () => dispatch(authenticationActions.logoutAsync());

  return (
    <div className="main_sidebar">
      <div className="main_sidebar_adaptive_content">
        <div>
          <NavLink className="main_sidebar_item" to="/home">
            <Image path="home.svg" />
          </NavLink>
        </div>
        <div className=" notification_icon">
          <NavLink className="main_sidebar_item" to="/notifications">
            <Image path="notification.svg" />
          </NavLink>
        </div>
        <div>
          <NavLink className="main_sidebar_item" to="/messages">
            <Image path="message.svg" />
          </NavLink>
        </div>
        <div>
          <NavLink className="main_sidebar_item" to="/suggestions">
            <Image path="suggestionIcon.svg" />
          </NavLink>
        </div>
        <div>
          <NavLink className="main_sidebar_item" to="/myProfile">
            <Image path="Myprofile.svg" />
          </NavLink>
        </div>
      </div>
      <div className="main_sidebar_content">
        <div className="">
          <NavLink className="main_sidebar_item " to="/">
            <Image path="home.svg" />
            <span>Home</span>
          </NavLink>
        </div>
        <div className="notification_icon">
          <NavLink className="main_sidebar_item" to="/notifications">
            <Image path="notification.svg" />

            <span>Notifications</span>
          </NavLink>
        </div>
        <div>
          <NavLink className="main_sidebar_item" to="/messages">
            <Image path="message.svg" />
            <span>Messages</span>
          </NavLink>
        </div>
        <div>
          <NavLink className="main_sidebar_item" to="/subscriptions">
            <Image path="subscriptions.svg" />
            <span>Subscriptions</span>
          </NavLink>
        </div>
        <div>
          <NavLink className="main_sidebar_item" to="/subscribers">
            <Image path="Subscribers.svg" />
            <span>Subscribers</span>
          </NavLink>
        </div>
        <div>
          <NavLink className="main_sidebar_item" to="/suggestions">
            <Image path="suggestionIcon.svg" />
            <span>Suggestions</span>
          </NavLink>
        </div>
        <div>
          <NavLink className="main_sidebar_item" to="/profile">
            <Image path="Myprofile.svg" />
            <span>My profile</span>
          </NavLink>
        </div>
        <Link to="/newPost">
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
        </Link>
        <div style={{marginTop: '10px'}}>
          <Button
            onClick={logout}
            padding="11px 37px"
            border="none"
            backgroundColor="#23329A"
            maxWidth="197px"
            title="Выход"
            width="100%"
            hoverColorChange="#3f50c0"
            fontColor="#fff"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
