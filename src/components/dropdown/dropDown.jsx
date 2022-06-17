import './dropdown.scss'
import BgImage from '../bgImage/bgImage'

const background = [
    {
        backgroundId: 1,
        backgroundUrl: '../../assets/1.jpeg'
    },
    {
        backgroundId: 2,
        backgroundUrl: '../../assets/2.jpeg'
    },
    {
        backgroundId: 3,
        backgroundUrl: '../../assets/3.jpeg'
    },
    {
        backgroundId: 4,
        backgroundUrl: '../../assets/4.jpeg'
    },
    {
        backgroundId: 'bgImage',
        backgroundUrl: '../../assets/4.jpeg'
    },
    {
        backgroundId: 5,
        backgroundUrl: '../../assets/4.jpeg'
    },
    {
        backgroundId: 6,
        backgroundUrl: '../../assets/4.jpeg'
    },
    {
        backgroundId: 8,
        backgroundUrl: '../../assets/4.jpeg'
    },
    {
        backgroundId: 7,
        backgroundUrl: '../../assets/4.jpeg'
    }
]

const DropDown = () => {
    return (
        <div className="drop-down-container">
            <span className='theme'>Set Your Own Theme</span>
            <div className='bg-container'>

                {background.map((bg) => (
                    <BgImage bg={bg} />
                ))}
            </div>
                    
        </div>
    )
}

export default DropDown
