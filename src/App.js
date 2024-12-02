

// src/App.js
import React from 'react';
import todo from './Components/todo.js';  
import Navbar from './NavBar';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';



const App = () => {
  return (
    <div className="h-screen w-full P-Color flex justify-center">
       <div className="flex card  md:w-3/4  lg:w-3/6 xl:w-3/6 flex-col items-center pt-14 my-6 h-5/6 overflow-y-scroll">
    <h2 className="text-3xl font-bold t-p-Color text-center mb-4">Todo List</h2>

          <BrowserRouter>
           <Navbar/>
          
           <AppRoutes />

          </BrowserRouter>

      </div>
    </div>


  );
}

export default App;



// import logo from './logo.svg';
// import './App.css';
// import Navbar from './NavBar';
// import Home from './Home';
// import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';
// import Create from './createtodo';
// import Details from './dotoDetails';
// import Notfound from './notfound';

// function App() {
//   return (
//     <div className='app flex   items-center justify-center flex-col py-8 '>
//     <div className=' card w-2/4  flex items-center flex-col py-11 overflow-y-scroll '>
      
//       <Router>
//       <Navbar/>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/create" element={<Create />} />
//         <Route path="/details/:id" element={<Details />} />
//         <Route path="*" element={<Notfound />} />
//       </Routes>
//     </Router>
//     </div>
//     </div>

 
//   );
// }

// export default App;
