import React from 'react'

import dashboardCss from '../Css/dashboardCss.module.css'
import HPanel from './HPanel';
import DashboardUsers from './DashboardUsers';


function DashboardStats(props) {
  return (
    <div className={dashboardCss.container}>
      <HPanel statsdata={props.stats}/> 
    </div>
  )
}

export default DashboardStats