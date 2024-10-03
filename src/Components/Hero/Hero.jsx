import './Hero.css'
import heroBag from '../../assets/luxury-woman-handbag.png'

const Hero = () => {
    return (
        <div className='Hero'>
            <div className="hero-container">
                <div className="bag-container">
                    <img src={heroBag} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero
