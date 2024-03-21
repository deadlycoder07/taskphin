
import { faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useState } from 'react';
import Toast from './Toast';


const CandidatesListCardInfo = ({candidateData}) => {
    const [status,setStatus] = useState(candidateData.status)
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const handleChange = async (e) => {
      setStatus(e.target.value);
      try {
        const response = await axios.patch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/candidates`, {'id':candidateData.id,candidateStatus:e.target.value});
        console.log(response.data);
        setToastMessage('Candidate updated successfully!');
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000); 
      } catch (error) {
        console.error('There was an error!', error);
        setToastMessage('An error occurred!');
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      }
    };

    return (
        <>
    <div className="w-full h-40 bg-white shadow-md rounded-lg overflow-hidden m-4 p-4 flex items-center">
      <div className="flex w-64">
        <FontAwesomeIcon icon={faUserCircle} size="3x" className="text-gray-700 mr-3"  />
        <h2 className="text-xl font-bold p-2">{candidateData.first_name}<span></span> {candidateData.last_name}</h2>
      </div>
      <div className="flex-grow flex flex-col justify-between m-6">
        <div className="flex gap-x-4">
          <div className="flex-1 space-y-2 p-8 text-gray-500"> 
            <p><span className='text-base font-sans font-extrabold'>Email:</span> {candidateData.email_address}</p>
            <p><span className='text-base font-sans font-extrabold'>Company: </span>{candidateData.company} </p>
            <p><span className='text-base font-sans font-extrabold'>Contact Details:</span> {candidateData.phone_number} </p>
            <p><span className='text-base font-sans font-extrabold'>Expected Salary:</span> {candidateData.expected_salary}</p>
          </div>
          <div className="flex-1 space-y-2 p-8 text-gray-500" > 
            <p><span className='text-base font-sans font-extrabold'>Work Experience:</span> {candidateData.work_experience} years</p>
            <p><span className='text-base font-sans font-extrabold'>React Experience: </span>{candidateData.skills.react_experience} years</p>
            <p><span className='text-base font-sans font-extrabold'>Node Experience:</span> {candidateData.skills.node_experience} years</p>
            <p><span className='text-base font-sans font-extrabold'>Score:</span>{candidateData.score}</p>

          </div>
        </div>
      </div>
      <div className='flex mr-6'>
      <div>
          <select name="reactExperience"
            value={status}
            onChange={handleChange}
             id="countries" class="bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="AWAITING_REVIEW">AWAITING REVIEW</option>
            <option value="CONTACTED">CONTACTED</option>
            <option value="INTERVIEW_SCHEDULED">INTERVIEW SCHEDULED</option>
            <option value="HIRED">HIRED</option>
            <option value="REJECTED">REJECTED</option>
            <option value="OFFER_EXTENDED">OFFER EXTENDED</option>

          </select>
        </div>
      </div>
    </div>
    <Toast message={toastMessage} show={showToast} onClose={() => setShowToast(false)} />
</>


        
    );
}

export default CandidatesListCardInfo;