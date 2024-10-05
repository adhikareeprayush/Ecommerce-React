import './BagCard.css'
import heart from '../../assets/icons/heart-svgrepo-com.svg'
import cart from '../../assets/icons/bag-4-svgrepo-com.svg'
import PropTypes from 'prop-types'

const BagCard = ({ bagTitle, bagPrice, bagImage }) => {
    return (
        <div className='bagCard'>
            <div className="top-details">
                <div className="left-details">
                    <div className="bag-name">{bagTitle}</div>
                    <div className="bag-price">${bagPrice}</div>
                </div>
                <div className="right-controls">
                    <div className="heart">
                        <img src={heart} alt="" />
                    </div>
                    <div className="cart">
                        <img src={cart} alt="" />
                    </div>
                </div>
            </div>
            <div className="bag-image">
                <img src={bagImage} alt="" />
            </div>
        </div>
    )
}

// Props Validation
BagCard.propTypes = {
    bagTitle: PropTypes.string.isRequired,
    bagPrice: PropTypes.number.isRequired,
    bagImage: PropTypes.string.isRequired
};

export default BagCard
