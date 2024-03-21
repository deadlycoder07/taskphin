import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachographDigital, faUmbrella, faUser, faUserCheck, faUsers } from '@fortawesome/free-solid-svg-icons';

function Sidebar({ onSelect, activeTab }) {
    return (
        <>
        <div className="h-full w-64 bg-gray-800 mt-17 -z-10">
            <div className="flex flex-col justify-between">
                <div>
                    <nav className="mt-5 px-4">
                    <button
                            onClick={() => {
                                onSelect('dashboard')
                            }}
                            className={`w-full text-left text-l px-4 py-2 rounded hover:bg-gray-700 rounded-lg dark:text-white hover:bg-gray-500 dark:hover:bg-gray-700 ${activeTab === 'dashboard' ? 'bg-gray-900' : ''
                                }`}
                        >
                            <span className='px-3'><FontAwesomeIcon icon={faTachographDigital} />  </span>
                            Dashboard
                            

                        </button>
                        <button
                            onClick={() => {
                                onSelect('add')
                            }}
                            className={`w-full text-left text-l px-4 py-2 rounded hover:bg-gray-700 trounded-lg dark:text-white hover:bg-gray-500 dark:hover:bg-gray-700 ${activeTab === 'add' ? 'bg-gray-900' : ''
                                }`}
                        >
                            <span className='px-3'><FontAwesomeIcon icon={faUserCheck} />  </span>
                            Add Candidate
                        </button>
                        <button
                            onClick={() => {
                                onSelect('list')
                            }}
                            className={`w-full text-left text-l px-4 py-2 rounded hover:bg-gray-700 rounded-lg dark:text-white hover:bg-gray-500 dark:hover:bg-gray-700 ${activeTab === 'list' ? 'bg-gray-900' : ''
                                }`}
                        >
                            <span className='px-3'><FontAwesomeIcon icon={faUsers} />  </span>
                            List Candidates
                        </button>
                    </nav>
                </div>
            </div>
        </div>



        


   


</>

    );
}

export default Sidebar;
