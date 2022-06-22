import Navigation from "./routes/navigation/navigation";
import { Routes, Route } from "react-router-dom";
import Myday from "./routes/MyDay/myday";
import Important from "./routes/Important/important";
import Home from "./routes/home/home";
import Authentication from "./routes/authentication/authentication";

import { useDispatch, useSelector } from "react-redux";
import { selectBgImage } from "./store/bgImage/bg.selector";
import { selectCurrentUser } from "./store/user/user.selector";
import { setCurrentUser } from "./store/user/user.action";
import { useEffect } from "react";
import { setBgImage } from "./store/bgImage/bg.action";
import { checkUserSession } from "./store/user/user.action";

const App = () => {
  const {bgImage} = useSelector(selectBgImage);
  const user = useSelector(selectCurrentUser);
  const {id} = user;
  const dispatch = useDispatch();

  // persist user on web page
  useEffect(() => {
    
      const loggedInUser = localStorage.getItem("user");
      if (loggedInUser) {
        const foundUser = JSON.parse(loggedInUser);
        dispatch(checkUserSession(foundUser));
       }
    
  }, []);

  useEffect(() => {
    const bg = localStorage.getItem("bg");
    dispatch(setBgImage(bg))
  }, []);


  return (
    <div className="app" style={{ 
      backgroundImage: `url(${require(`./assets/${bgImage}.jpeg`)})` ,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
     }}>
    <Routes>
    {id ?
      (<>
        <Route path='/' element={<Navigation />} >
          <Route index={true} element={<Home />} />
      
          <Route path='myday' element={<Myday />} />       
          <Route path='important' element={<Important />} />
        
            
          </Route>
       </>) 
        :  (
          <>
          <Route path='/' element={<Authentication />}/>
          <Route path='myday' element={<Home />} />       
          <Route path='important' element={<Home />} />
          </>
         )  
      }

    </Routes>
</div>
  );
}

export default App;
