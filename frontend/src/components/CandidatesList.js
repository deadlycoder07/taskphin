import React, { useEffect, useState } from 'react';
import CandidatesListCardInfo from './CandidateListCardInfo';
import CandidateLoader from './CadidateLoader';
import axios from 'axios';

const CandidatesList = ({ candidates, onUpdate }) => {
  const [loading,setLoading] = useState(true);
  const [candidatesData, setCandidatesData] = useState({
    count: 0,
    candidates: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/candidates`);
        setCandidatesData(response.data.data);
        console.log(candidatesData)
        setTimeout(5000);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="space-y-2">
      {
        loading ?
         <CandidateLoader/> 
         :
          candidatesData.candidates.map((candidate) =>(
            <CandidatesListCardInfo candidateData={candidate}/>
          ))
      }
      </div> 
  );
};

export default CandidatesList;
