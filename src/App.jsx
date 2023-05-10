import './App.css';

import { Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Home from './components/pages/Home';
import Sidebar from './components/sidebar/Sidebar';
import Customers from './components/pages/customers/Customers';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

export default function App() {
  const { authState } = useContext(AuthContext);

  return (
    <>
      {authState?.authorized ? (
        <div className='flex'>
          <Sidebar />
          <main className='flex-1 w-full h-full p-4'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/customers' element={<Customers />} />
            </Routes>
          </main>
        </div>
      ) : (
        <div className='wrapper'>
          <Signup />
        </div>
      )}
    </>
  );
}

// import './App.css';

// import { Routes, Route } from 'react-router-dom';
// import Signup from './components/Signup';
// import Home from './components/pages/Home';
// import Sidebar from './components/sidebar/Sidebar';
// import Customers from './components/pages/customers/Customers';

// import { DataContext } from './context/DataContext';
// import { AuthContext } from './context/AuthContext';
// import { useContext } from 'react';

// export default function App() {
//   const { isLogged, customers, setCustomers, searchResults } =
//     useContext(DataContext);

//   const { authState, onLogout } = useContext(AuthContext);

//   return (
//     <>
//       {isLogged ? (
//         <div className='flex'>
//           <Sidebar />
//           <main className='flex-1 h-full p-4'>
//             <Routes>
//               <Route path='/' element={<Home />} />
//               <Route
//                 path='/customers'
//                 element={
//                   <Customers
//                     customers={customers}
//                     setCustomers={setCustomers}
//                     searchResults={searchResults}
//                   />
//                 }
//               />
//             </Routes>
//           </main>
//         </div>
//       ) : (
//         <div className='wrapper'>
//           <Signup />
//         </div>
//       )}
//     </>
//   );
// }
