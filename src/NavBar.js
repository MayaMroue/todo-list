import {Link, useLocation} from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { MdCreateNewFolder } from "react-icons/md";
const Navbar =() => {
    const location = useLocation();
    return (
        <div className="flex w-full justify-end items-end">
        <Link  to="/"  className={`sections py-1 ${location.pathname === '/' ? 'P-Color text-white' : ''}`}>
          All
        </Link>
        <Link 
          to="/completed" 
          className={`sections py-1 ${location.pathname === '/completed' ? 'P-Color text-white' : ''}`}>
          Completed
        </Link>
        <Link 
          to="/active" 
          className={`sections py-1 ${location.pathname === '/active' ? 'P-Color text-white' : ''}`}>
          Active
        </Link>
        <Link 
          to="/Create" 
          className={`sections py-1 ${location.pathname === '/Create' ? 'P-Color text-white' : ''}`}>
          New Task
        </Link>
      </div>
    );
  };

   export default Navbar;