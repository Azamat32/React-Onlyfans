import Header from '@ui/Components/Header/Header';
import RightSidebar from '@ui/Components/RightSidebar/RightSidebar';
import Sidebar from '@ui/Components/Sidebar/Sidebar';

import React, {useEffect} from 'react';
import {Outlet} from 'react-router-dom';

const Main = () => {
  return (
    <>
      <Header title="Fanclub" adaptive_title="Home" />
      <div className="container">
        <div className="main_content_inner">
        <Sidebar />
        <Outlet />
        <RightSidebar />
        </div>
        
      </div>
    </>
  );
};

export default Main;
{
  /*Main Layout*/
}
{
  /*тут нужно будет подключить header, footer и  т.д.*/
}
