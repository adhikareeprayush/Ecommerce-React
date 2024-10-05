import boxIcon from '../../assets/icons/box-svgrepo-com (1).svg'
import cardIcon from '../../assets/icons/card-pos-svgrepo-com.svg'
import syncIcon from '../../assets/icons/seven-syc.svg'
import Card from '../Card/Card'
import './SupportedBy.css'

const SupportedBy = () => {

    const cardDetails = [
        {
            title: 'EXPRESS DELIVERY',
            description: 'DHL express delivery worldwide from our bag company',
            icon: boxIcon,
        },
        {
            title: 'PAYMENT IN 3X',
            description: 'Take advantage of a payment in 3x without fees from $100 of purchase',
            icon: cardIcon,
        },
        {
            title: 'FREE RETURNS',
            description: 'Free return for 7 days for any order delivered in France',
            icon: syncIcon,
        },
    ]

    return (
        <>
            <h1 className='section-title'>We Supported By</h1>
            <div className='supportedBy'>
                {cardDetails.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
        </>
    )
}

export default SupportedBy
