import React, { Fragment } from 'react';
import Card from '../ReUsable/Card';
import dashboarduserCss from '../Css/dashboarduserCss.module.css';
import SearchUser from './SearchUser';

function DashboardUsers(props) {
  return (
    <Fragment>
    <SearchUser />
    <div className={dashboarduserCss.grandcontainer}>
        {props.users.map((user,index)=>
            <div className={dashboarduserCss.container} key={index}>
                {/* {console.log(user.id)} */}
              <Card src={user.avatar}> 
                <li className={dashboarduserCss.li}>{user.name}</li> 
              </Card>
            </div>
            )}
    </div>
    </Fragment>
  )
}

export default DashboardUsers;