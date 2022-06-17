import { useContext } from "react";
import { BgContext } from "../../context/bgContext";

const BgImage = ({bg}) => {

    const {bgImage, setBgImage} = useContext(BgContext);

    const handleBgChange = () => setBgImage(bg.backgroundId)

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