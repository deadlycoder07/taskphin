import React, { useState } from 'react';
import Sidebar from './components/SideBar';
import CandidatesForm from './components/CandidatesForm';
import CandidatesList from './components/CandidatesList';
import NavigationBar from './components/NavigationBar';
import DashBoard from './components/Dashboard';


function App() {
  const [selectedComponent, setSelectedComponent] = useState('dashboard');
  const [candidates, setCandidates] = useState([]);
  const handleSelectComponent = (component) => {
    setSelectedComponent(component);
  };
  const addCandidate = (candidateData) => {
    // Here you would usually call an API to add the candidate
    console.log('Adding candidate:', candidateData);
    // For demo, we're just adding it to the local state
    setCandidates([...candidates, { ...candidateData, id: Date.now(), score: Math.random() * 100 }]);
  };

  const updateCandidateStatus = (candidateId) => {
    console.log('Updating status for candidate:', candidateId);
    // Implement your update logic here, typically involving an API call
  };
  let ComponentToRender;
  switch (selectedComponent) {
    case 'add':
      ComponentToRender = <CandidatesForm />;
      break;
    case 'list':
      ComponentToRender = <CandidatesList candidates={candidates} onUpdate={updateCandidateStatus} />;
      break;
    case 'dashboard':
      ComponentToRender = <DashBoard/>
      break;
  }

  return (
      <div className="flex flex-col h-screen">
        <div className='flex'>
          <NavigationBar />
        </div>
        <div className='flex flex-1 flex-row overflow-hidden'>
          <div className='flex-none h-screen'>
            <Sidebar onSelect={handleSelectComponent} activeTab={selectedComponent} />
          </div>
          <main className="grow overflow-y-auto">
            <div className="mx-auto px-6 py-8">
            {ComponentToRender}
            </div>
          </main>
        </div>
      </div>
  );
}

export default App;
