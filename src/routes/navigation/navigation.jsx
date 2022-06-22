import './navigation.scss';
import * as FaIcons from "react-icons/fa";
import { Link, Outlet } from 'react-router-dom';
import DropDown from '../../components/dropdown/dropDown';
import { ReactComponent as SunLogo } from '../../assets/sun.svg';

import { selectImportantTask } from '../../store/important/important.selector';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import SearchBox from '../../search-box/ search';
import { signOutStart } from '../../store/user/user.action';
import { useDispatch } from 'react-redux';

import { useState } from 'react';

const Navigation = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const {importantArray }= useSelector(selectImportantTask); 
    const importantCount = importantArray.length;
    
    const dispatch = useDispatch();

    const {id}= useSelector(selectImportantTask); 
  
    const signOutHandler = () => {
        dispatch(signOutStart());
        localStorage.removeItem('user');
    };

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
                        {id ?? 
                            (<Link to="/" className='Sign-in' onClick={signOutHandler}>SIGN OUT</Link>) 
                        }
                        
                    
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
         
        </div>
            <Outlet />
        </div>
        </>
        
    )
}

export default Navigation;