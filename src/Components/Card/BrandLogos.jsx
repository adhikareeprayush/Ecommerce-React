import React from 'react';
import './Card.css';

import nikeImage from '../../assets/logos/nike-logo.png';
import etsyImage from '../../assets/logos/etsy-logo.png';
import ebayImage from '../../assets/logos/ebay-logo.png';
import asosImage from '../../assets/logos/asos-logo.png';
import zaraImage from '../../assets/logos/zara-logo.png';
import reebokImage from '../../assets/logos/reebok-logo.png';


const BrandLogos = () => {
  const brands = [
    { name: 'Nike', image: nikeImage },
    { name: 'Etsy', image: etsyImage },
    { name: 'Ebay', image: ebayImage },
    { name: 'Asos', image: asosImage },
    { name: 'Zara', image: zaraImage },
    { name: 'Reebok', image: reebokImage },
  ];

  return (
    <div className="brand-logos-container">
      <h2 className="brand-logos-title">We Supported By</h2>
      <div className="brand-logos-grid">
        {brands.map((brand, index) => (
          <div key={index} className="brand-logo">
            <img 
              src={brand.image} 
              alt={`${brand.name} logo`} 
              className="brand-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandLogos;