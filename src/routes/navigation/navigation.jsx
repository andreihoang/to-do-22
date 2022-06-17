import './navigation.scss';
import * as FaIcons from "react-icons/fa";
import { Link, Outlet } from 'react-router-dom';
import DropDown from '../../components/dropdown/dropDown';
import { ReactComponent as SunLogo } from '../../assets/sun.svg';
import { useContext } from 'react';
import { ImportantContext } from '../../context/importantContext';

import SearchBox from '../../search-box/ search';

import { useState } from 'react';

const Navigation = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const {importantCount} = useContext(ImportantContext);
   

    const toogleDropDown = () => setIsOpen(!isOpen);

    return (
        <>
        <div className='page-contaner'>
            <div className='horizon-nav'>

                <div className="main-nav">
                <Link to='/'>

                <span className='logo'>TO DO</span>
                </Link>
                    <SearchBox />
                <div className='menu-bars'>
                        <FaIcons.FaBars className='icon'  onClick={ toogleDropDown }/>
                        <Link to="/" className='Sign-in'>SIGN IN</Link>
                </div>
                    
                {isOpen && <DropDown />}
                </div>
            </div>
           
          
                <div className={'nav-menu active'} >
                    
                    <Link to="myday" className="menu-bars" >
                        <SunLogo />
                        <span className='span'> My Task</span>
                    </Link>
                    <Link to="important" className="menu-bars" >
                    <SunLogo />
                        <span className='span-important'>Important</span>
                        <span className='count-important'>{importantCount}</span>
                    </Link>
                    

                    
                
                
                </div>
         
            <Outlet />
        </div>
        </>
        
    )
}

export default Navigation;