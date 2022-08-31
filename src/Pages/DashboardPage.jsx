import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddStatsToRedux, AddUserToRedux } from '../store/actions/ActionConstants';
import DashboardStats from '../Components/DashboardStats'
import DashboardUsers from '../Components/DashboardUsers';
import LoadingSpinner from '../ReUsable/LoadingSpinner';

function DashboardPage() {

  const dispatch = useDispatch();
  const stats = useSelector((state)=>state.stats);
  const users = useSelector((state)=> state.users);
  const [isLoading,setIsLoading] = useState(true);

  useEffect(() => {
      async function fetchStats(){
      const response = await fetch('https://630369f20de3cd918b34e39e.mockapi.io/transactionstats');
      const stats = await response.json();
      // console.log(stats);
      dispatch({ type: AddStatsToRedux, payload: stats });
      
      }
      fetchStats();   
  },[])

  useEffect(() => {
      async function fetchUser(){
          const response = await fetch('https://630369f20de3cd918b34e39e.mockapi.io/users');
          const users = await response.json();
          // console.log(users);
          dispatch({ type: AddUserToRedux, payload: users });
          setIsLoading(false);
          }
          fetchUser();  
  },[])

  return (
    <div>
        <DashboardStats stats={stats} />
        {isLoading ? <LoadingSpinner /> :
        <DashboardUsers users={users} />
        }
    </div>
  )
}

export default DashboardPage