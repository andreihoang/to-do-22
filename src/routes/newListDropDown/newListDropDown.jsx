import { Route, Routes } from "react-router-dom";
import ListCreated from "../ListCreated/listcreated";
import Myday from "../MyDay/myday";

const NewList = () => {
    

    return (
        <Routes>
            <Route index={true} element={<ListCreated/>} />
            <Route path=":id" element={<Myday />} />
        </Routes>
    )
}

export default NewList;
