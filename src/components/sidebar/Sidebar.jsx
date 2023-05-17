import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import TocIcon from '@mui/icons-material/Toc';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import styles from "./Sidebar.module.css"

function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Workspace</h1>
        {/* <hr/> */}
      </div>
      
      <div className={styles.top}>
        <p><DashboardIcon fontSize='small'/><span>Boards</span></p>
      <p><PersonIcon fontSize='small'/><span>Members</span></p>
      <p><SettingsIcon fontSize='small'/><span>Workspace settings</span></p>
      </div>

      <div className={styles.workspace}>
        <h1>Workspace views</h1>
        <p><TocIcon fontSize='small'/><span>  Table</span></p>
        <p><CalendarMonthIcon fontSize='small'/><span>claendar</span></p>
      </div>

      <div className={styles.boards}>
        <h1>Boards</h1>
      </div>
    </div>
  )
}

export default Sidebar