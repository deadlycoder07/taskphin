import React, { useEffect, useState } from 'react';
import DashBoardCardInfo from './DashboardCardInfo';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import LineChart from './LineChart';
const DashBoard = () => {
  // Define state variables to store the data
  const [data, setData] = useState({
    total_entries: 0,
    hired_count: 0,
    rejected_count: 0,
    average_score: 0,
  });
  
  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/candidates/analytics');
        
        // Assuming the API response has the structure you provided
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

// const employeeData = [
//     {
//       id: 1,
//       name: "Esther Howard",
//       position: "Sale's manager USA",
//       transactions: 3490,
//       rise: true,
//       tasksCompleted: 3,
//       imgId: 0,
//     },
  
//     {
//       id: 2,
//       name: "Eleanor Pena",
//       position: "Sale's manager Europe",
//       transactions: 590,
//       rise: false,
//       tasksCompleted: 5,
//       imgId: 2,
//     },
  
//     {
//       id: 3,
//       name: "Robert Fox",
//       position: "Sale's manager Asia",
//       transactions: 2600,
//       rise: true,
//       tasksCompleted: 1,
//       imgId: 3,
//     },
//   ];
  
//   function DashBoard() {
//     return (
//       <div className="flex w-full">
//         <div className="w-full h-screen hidden sm:block sm:w-20 xl:w-60 flex-shrink-0">.</div>
//         <div className=" h-screen flex-grow overflow-x-hidden overflow-auto flex flex-wrap content-start p-2">
//           <div className="w-full sm:flex p-2 items-end">
//             <div className="sm:flex-grow flex justify-between">
//               <div className="">
//                 <div className="flex items-center">
//                   <div className="text-3xl font-bold text-white">Hello David</div>
//                   <div className="flex items-center p-2 bg-card ml-2 rounded-xl">
//                     {/* <Icon path="res-react-dash-premium-star" /> */}
  
//                     <div className="ml-2 font-bold text-premium-yellow">PREMIUM</div>
//                   </div>
//                 </div>
//                 <div className="flex items-center">
//                   {/* <Icon path="res-react-dash-date-indicator" className="w-3 h-3" /> */}
//                   <div className="ml-2">October 26</div>
//                 </div>
//               </div>
//               {/* <IconButton icon="res-react-dash-sidebar-open" className="block sm:hidden" onClick={onSidebarHide} /> */}
//             </div>
//             <div className="w-full sm:w-56 mt-4 sm:mt-0 relative">
//               {/* <Icon path="res-react-dash-search" className="w-5 h-5 search-icon left-3 absolute" /> */}
//               <form action="#" method="POST">
//                 <input
//                   type="text"
//                   name="company_website"
//                   id="company_website"
//                   className="pl-12 py-2 pr-2 block w-full rounded-lg border-gray-300 bg-card"
//                   placeholder="search"
//                 />
//               </form>
//             </div>
//           </div>
        
  
//   <div className="w-full p-2 lg:w-2/3">
//             <div className="rounded-lg bg-card sm:h-80 h-60">
//               {/* <Graph /> */}
//             </div>
//           </div>
//           <div className="w-full p-2 lg:w-1/3">
//             <div className="rounded-lg bg-card h-80">
//               {/* <TopCountries /> */}
//             </div>
//           </div>
  
//           <div className="w-full p-2 lg:w-1/3">
//             <div className="rounded-lg bg-card h-80">
//               {/* <Segmentation /> */}
//             </div>
//           </div>
//           <div className="w-full p-2 lg:w-1/3">
//             <div className="rounded-lg bg-card h-80">
//               {/* <Satisfication /> */}
//             </div>
//           </div>
//           <div className="w-full p-2 lg:w-1/3">
//             <div className="rounded-lg bg-card overflow-hidden h-80">
//               {/* <AddComponent /> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
  
// export default DashBoard;