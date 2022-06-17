import Navigation from "./routes/navigation/navigation";
import { Routes, Route } from "react-router-dom";
import Myday from "./routes/MyDay/myday";
import Important from "./routes/Important/important";
import Home from "./routes/home/home";

import { useContext } from "react";
import { BgContext } from "./context/bgContext";
// import NewList from "./routes/newListDropDown/newListDropDown";
import Authentication from "./routes/authentication/authentication";

const App = () => {

  const {bgImage} = useContext(BgContext);

  return (
    <div className="app" style={{ 
      backgroundImage: `url(${require(`./assets/${bgImage}.jpeg`)})` ,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
     }}>
    <Routes>
      <Route path='/' element={<Authentication />} />  
      <Route path='/todo' element={<Navigation />}>
        <Route index={true} element={<Home />} />  
        <Route path='myday' element={<Myday />} />       
        <Route path='important' element={<Important />} />   

      </Route>

    </Routes>
</div>
  );
}

export default App;
