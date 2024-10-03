import './Hero.css'
import heroBag from '../../assets/luxury-woman-handbag.png'
import downArrow from '../../assets/icons/arrow-up-right-svgrepo-com.svg'
import rightArrow from '../../assets/icons/arrow-right-svgrepo-com.svg'

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
                <div className="top-link d-flex flex-column gap-1">
                    <div className="top-desc d-flex align-items-start gap-2">
                        <img src={downArrow} />
                        <p>Discover the epitome Of style and craftsmanship
                            with our curated leather bag collection.</p>
                    </div>
                    <button className='btn button-primary m-0'>
                        <span>Start Shopping</span>
                        <img src={rightArrow} />
                    </button>
                </div>
                <div className="controls">
                    <button className="btn prev-btn disabled">
                        <img src={rightArrow} alt="" />
                    </button>
                    <button className="btn next-btn">
                        <img src={rightArrow} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero
