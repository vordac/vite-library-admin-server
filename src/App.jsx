import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Outlet, useNavigate } from 'react-router-dom';
import './App.css'

import Index from './components/Index';
import DashboardAdmin from './components/roles/admin/DashboardAdmin';
import EmployeeAdd from './components/roles/admin/EmployeeAdd';
import Header from './components/Header';
import DashboardBibliographer from './components/roles/bibliographer/DashboardBibliographer';
import DashboardLibrarian from './components/roles/librarian/DashboardLibrarian';

function App() {
  const [tab, setTab] = useState(1);
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLibrarian, setIsLibrarian] = useState(false);
  const [isBibliographer, setIsBibliographer] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('jwtToken');
    const jobTitle = localStorage.getItem('jobTitle');
    if (storedToken && jobTitle) {
      setCurrentUser(storedToken);
      if (jobTitle === 'admin') {
        setIsAdmin(true);
      } else if (jobTitle === 'librarian') {
        setIsLibrarian(true);
      } else if (jobTitle === 'bibliographer') {
        setIsBibliographer(true);
      }
    }
  }, []);

  const LayoutIndex = () => {
    if (currentUser && isAdmin) {
      return (
        <div className='dashboard'>
          <Header setCurrentUser={setCurrentUser} setTab={setTab} isAdmin={isAdmin} isLibrarian={isLibrarian} isBibliographer={isBibliographer} setIsAdmin={setIsAdmin} setIsBibliographer={setIsBibliographer} setIsLibrarian={setIsLibrarian} />
          <DashboardAdmin tab={tab} />
        </div>
      )
    } else if (currentUser && isLibrarian) {
      return (
        <div className='dashboard'>
          <Header setCurrentUser={setCurrentUser} setTab={setTab} isAdmin={isAdmin} isLibrarian={isLibrarian} isBibliographer={isBibliographer} setIsAdmin={setIsAdmin} setIsBibliographer={setIsBibliographer} setIsLibrarian={setIsLibrarian} />
          <DashboardLibrarian tab={tab} currentUser={currentUser} jobTitle={jobTitle} address={address}/>
        </div>
      )
    } else if (currentUser && isBibliographer) {
      return (
        <div className='dashboard'>
          <Header setCurrentUser={setCurrentUser} setTab={setTab} isAdmin={isAdmin} isLibrarian={isLibrarian} isBibliographer={isBibliographer} setIsAdmin={setIsAdmin} setIsBibliographer={setIsBibliographer} setIsLibrarian={setIsLibrarian} />
          <DashboardBibliographer tab={tab} />
        </div>
      )
    } else {
      return (
        <>
          <Index setCurrentUser={setCurrentUser} setIsAdmin={setIsAdmin} setIsBibliographer={setIsBibliographer} setIsLibrarian={setIsLibrarian} setJobTitle={setJobTitle} setAddress={setAddress} />
        </>
      )
    }
  }

  const LayoutDashboard = () => {

    if (currentUser && isAdmin) {
      return (
        <div className='dashboard'>
          <Header setCurrentUser={setCurrentUser} setTab={setTab} isAdmin={isAdmin} isLibrarian={isLibrarian} isBibliographer={isBibliographer} setIsAdmin={setIsAdmin} setIsBibliographer={setIsBibliographer} setIsLibrarian={setIsLibrarian} />
          <DashboardAdmin tab={tab} />
        </div>
      )
    } else if (currentUser && isLibrarian) {
      return (
        <div className='dashboard'>
          <Header setCurrentUser={setCurrentUser} setTab={setTab} isAdmin={isAdmin} isLibrarian={isLibrarian} isBibliographer={isBibliographer} setIsAdmin={setIsAdmin} setIsBibliographer={setIsBibliographer} setIsLibrarian={setIsLibrarian} />
          <DashboardLibrarian tab={tab} jobTitle={jobTitle} address={address}/>
        </div>
      )
    } else if (currentUser && isBibliographer) {
      return (
        <div className='dashboard'>
          <Header setCurrentUser={setCurrentUser} setTab={setTab} isAdmin={isAdmin} isLibrarian={isLibrarian} isBibliographer={isBibliographer} setIsAdmin={setIsAdmin} setIsBibliographer={setIsBibliographer} setIsLibrarian={setIsLibrarian} />
          <DashboardBibliographer tab={tab} />
        </div>
      )
    } else {
      return (
        <div>You don't have permissions to use dashboard</div>
      )
    }
  }

  const LayoutAddEmployee = () => {
    if (currentUser && isAdmin) {
      return (
        <>
          <EmployeeAdd setCurrentUser={setCurrentUser} />
        </>
      )
    } else {
      return (
        <div>You don't have permissions</div>
      )
    }
  }

  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LayoutIndex />}></Route>
            <Route path="/dashboard" element={<LayoutDashboard />}></Route>
            <Route path="/add-employee" element={<LayoutAddEmployee />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
