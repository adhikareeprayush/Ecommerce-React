import bag1 from '../../assets/bags/pngwing.com.png'
import bag2 from '../../assets/bags/pngwing.com (1).png'
import bag3 from '../../assets/bags/pngwing.com (2).png'
import bag4 from '../../assets/bags/pngwing.com (3).png'
import bag5 from '../../assets/bags/pngwing.com (4).png'
import bag6 from '../../assets/bags/pngwing.com (5).png'
// import bag7 from '../../assets/bags/pngwing.com (6).png'
// import bag8 from '../../assets/bags/pngwing.com (7).png'
// import bag9 from '../../assets/bags/pngwing.com (8).png'
// import bag10 from '../../assets/bags/pngwing.com (9).png'
// import bag11 from '../../assets/bags/pngwing.com (10).png'
// import bag12 from '../../assets/bags/pngwing.com (11).png'
// import bag13 from '../../assets/bags/pngwing.com (12).png'
// import bag14 from '../../assets/bags/pngwing.com (13).png'
import BagCard from '../BagCard/BagCard'
import './Bags.css'

const Bags = () => {

    const bags = [
        {
            bagTitle: 'Hobo Small',
            bagPrice: '195.00 CAD',
            bagImage: bag1
        },
        {
            bagTitle: 'Hobo Medium',
            bagPrice: '225.00 CAD',
            bagImage: bag2
        },
        {
            bagTitle: 'Hobo Large',
            bagPrice: '250.00 CAD',
            bagImage: bag3
        },
        {
            bagTitle: 'Hobo Small',
            bagPrice: '195.00 CAD',
            bagImage: bag4
        },
        {
            bagTitle: 'Hobo Medium',
            bagPrice: '225.00 CAD',
            bagImage: bag5
        },
        {
            bagTitle: 'Hobo Large',
            bagPrice: '250.00 CAD',
            bagImage: bag6
        }
    ]


    return (
        <div className='bags'>
            {bags.map((bag, index) => (
                <BagCard key={index} bagImage={bag.bagImage} bagTitle={bag.bagTitle} bagPrice={bag.bagPrice} />
            ))}
        </div>
    )
}

export default Bags
