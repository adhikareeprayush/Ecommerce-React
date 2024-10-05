import './Card.css';
import PropTypes from 'prop-types';

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


