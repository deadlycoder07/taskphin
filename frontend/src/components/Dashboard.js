import React, { useEffect, useState } from 'react';
import DashBoardCardInfo from './DashboardCardInfo';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import LineChart from './LineChart';
const DashBoard = () => {
  const [data, setData] = useState({
    total_entries: 0,
    hired_count: 0,
    rejected_count: 0,
    average_score: 0,
  });
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/candidates/analytics`);
        if (response.data && response.data.success) {
          setData({
            total_entries: response.data.data.total_entries,
            hired_count: response.data.data.hired_count,
            rejected_count: response.data.data.rejected_count,
            average_score: response.data.data.average_score,
          });
        } else {
          console.error('Failed to fetch data:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []); 
  return (
    <div className='flex flex-col'>
       <div className='flex flex-row flex-wrap'>
        <DashBoardCardInfo fieldName="Applied Candidates" fieldValue={data.total_entries} fieldIcon={faUsers}/>
        <DashBoardCardInfo fieldName="Candidates Accepted" fieldValue={data.hired_count} fieldIcon={faUserCircle}/>
        <DashBoardCardInfo fieldName="Candidates Rejected" fieldValue={data.rejected_count} fieldIcon={faUserCircle}/>
        <DashBoardCardInfo fieldName="Total Average Score" fieldValue={data.average_score.toString().substring(0,3)} fieldIcon={faPencil}/>
    </div>
    <div className="flex-1 w-full">
        <LineChart />
      </div>
    </div> 
   
    
  );
};

export default DashBoard;
