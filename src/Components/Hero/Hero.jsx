import './Hero.css'
import heroBag from '../../assets/luxury-woman-handbag.png'

const Hero = () => {
    return (
        <div className='Hero'>
            <div className="hero-container">
                <div className="bag-header">
                    <h1 className='text-right'>Best Leather Bag</h1>
                    <h1 className='text-left'>Collection For You</h1>
                </div>
                <div className="bag-container">
                    <img src={heroBag} alt="" />
                </div>
                <div className="back-text">
                    Prayush
                </div>
            </div>

        </div>
    )
}

export default Hero
