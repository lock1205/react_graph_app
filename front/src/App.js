// import { useEffect, useState } from 'react';

import Appbar from './components/baselayout/Appbar';
import Sidebar from './components/baselayout/Sidebar';
import DashboardScreen from './components/dashboard/DashboardScreen';

function App() {
  // const [visitors, setVisitors] = useState([]);
  // const [customers, setCustomers] = useState([]);

  // useEffect(() => {
  //   const fetchVisitors = async () => {
  //     try {
  //       const response = await fetch('http://3.27.35.124/visitors');
  //       //console.log(response);
  //       const visitors = await response.json();
  //       setVisitors(visitors);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   const fetchCustomers = async () => {
  //     try {
  //       const response = await fetch('http://localhost:8081/customers');
  //       //console.log(response);
  //       const customers = await response.json();
  //       setCustomers(customers);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchCustomers();
  //   fetchVisitors();
  // }, []);

  // console.log(visitors);
  // console.log(customers);

  return (
    <div className="App w-full bg-[#212121] text-white">
      <div className="page_wrapper h-screen flex">
        <Sidebar />
        <div className="content-wrapper ml-[calc(20%+12px)] w-full">
          <Appbar />
          <DashboardScreen />
        </div>
      </div>
    </div>
  );
}

export default App;
