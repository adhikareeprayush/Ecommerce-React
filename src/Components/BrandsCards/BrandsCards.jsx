import './BrandsCards.css'
import nike from '../../assets/logos/brand-nike-svgrepo-com.svg'
import adidas from '../../assets/logos/adidas-svgrepo-com.svg'
import puma from '../../assets/logos/free-puma-logo-icon-download-in-svg-png-gif-file-formats--sport-sports-exercise-brand-brands-and-logos-pack-icons-2673893.webp'
import rebook from '../../assets/logos/Reebok_2019_logo.svg.png'
import zara from '../../assets/logos/Zara_Logo.svg.png'
import asos from '../../assets/logos/png-clipart-asos-com-online-shopping-retail-fashion-logo-black-friday-miscellaneous-company.png'
import etsy from '../../assets/logos/etsy.svg'
import ebay from '../../assets/logos/ebay-svgrepo-com.svg'

const BrandsCards = () => {

    const logos = [nike, adidas, puma, rebook, zara, asos, etsy, ebay]

    return (
        <>
            <h1 className="section-title">We Supported By</h1>
            <div className='supportedBy'>
                <div className="card-grid">
                    {logos.map((logo, index) => (
                        <div className="card" key={index}>
                            <img src={logo} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default BrandsCards
