
import { useDispatch } from "react-redux";

import { setBgImage } from "../../store/bgImage/bg.action";

const BgImage = ({bg}) => {

    const dispatch = useDispatch();
    

    const handleBgChange = () => {
        dispatch(setBgImage(bg.backgroundId))
        localStorage.setItem('bg', bg.backgroundId);
    };

    return (
        <img 
            className='bg-image' 
            key={bg.backgroundId} 
            src={require(`../../assets/${bg.backgroundId}.jpeg`)} 
            onClick={handleBgChange}
        />
    )
}

export default BgImage;