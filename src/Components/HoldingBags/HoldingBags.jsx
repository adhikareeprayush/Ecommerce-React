import './HoldingBags.css'
import visitIcon from '../../assets/icons/arrow-up-right-svgrepo-com.svg'
import bag1 from '../../assets/holdingBags/leisara-studio-8FiUeAy6t6Q-unsplash.jpg'
import bag2 from '../../assets/holdingBags/leisara-studio-P779eLIuKyU-unsplash.jpg'


const HoldingBags = () => {
    return (
        <div className='holdingBags'>
            <div className='item'>
                <div className="top-details">
                    <div className="name">
                        modern wuality and mind freshing color bag
                    </div>
                    <div className="visit">
                        <img src={visitIcon} alt="" />
                    </div>
                </div>
                <div className="image">
                    <img src={bag1} alt="" />
                </div>
            </div>
            <div className='item'>
                <div className="top-details">
                    <div className="name">
                        modern wuality and mind freshing color bag
                    </div>
                    <div className="visit">
                        <img src={visitIcon} alt="" />
                    </div>
                </div>
                <div className="image">
                    <img src={bag2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HoldingBags
