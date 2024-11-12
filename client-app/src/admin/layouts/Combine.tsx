import React, { useState } from 'react'
import './css/Combine.css'

import MenuSidebar from './sidebar/MenuSidebar';
import Content from './content/Content';

const Combine = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  return (
    <div className="menu-sidebar wrapper">
      <MenuSidebar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
      <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
    </div>
  )
}

export default Combine