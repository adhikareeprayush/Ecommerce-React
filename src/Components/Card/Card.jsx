import './Card.css';
import PropTypes from 'prop-types';

<<<<<<< HEAD
const Card = (props) => {
  return (
    <div className="card">
      <div className="icon">
        <img src={props.icon} alt="" />
      </div>
      <div className="card-desc">
        <div className="card-title">
          {props.title}
        </div>
        <div className='card-details'>
          {props.description}
        </div>
=======
import React from 'react';
import { Icons } from './icons';
import './Card.css';

const Card = () => {
  const features = [
    {
      icon: 'delivery',
      title: 'EXPRESS DELIVERY',
      description: 'DHL express delivery worldwide from our bag company'
    },
    {
      icon: 'payment',
      title: 'PAYMENT IN 3X',
      description: 'Take advantage of a payment in 3x without fees from $100 of purchase'
    },
    {
      icon: 'returns',
      title: 'FREE RETURNS',
      description: 'Free return for 7 days for any order delivered in France'
    }
  ];

  return (
    <div className="we-supported-by">
      <h2 className="title">We Supported By</h2>
      <div className="features">
        {features.map((feature, index) => (
          <div key={index} className="feature">
            {Icons[feature.icon]}
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
>>>>>>> 7c53461b51e4997a2963942c1fcef7187e3e4dd1
      </div>
    </div>
  );
};

// Props Validation
Card.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};


export default Card;


