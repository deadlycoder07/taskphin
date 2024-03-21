import React, { useState } from 'react';
import Sidebar from './components/SideBar';
import CandidatesForm from './components/CandidatesForm';
import CandidatesList from './components/CandidatesList';
import NavigationBar from './components/NavigationBar';
import DashBoard from './components/Dashboard';


function App() {
  const [selectedComponent, setSelectedComponent] = useState('dashboard');
  const handleSelectComponent = (component) => {
    setSelectedComponent(component);
  };

  let ComponentToRender;
  switch (selectedComponent) {
    case 'add':
      ComponentToRender = <CandidatesForm />;
      break;
    case 'list':
      ComponentToRender = <CandidatesList />;
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
