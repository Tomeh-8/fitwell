import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function CardItem2(props) {
  return (
    <>
      <li className='cards__item second'>
          <figure className='cards__item__pic-wrap2' data-category={props.label}>
              <div>
                  <h1>₦{props.amount}</h1>
                  <h6>Every 30 days</h6>
                  <h3>{props.description}</h3>
              </div>
          </figure>
          <Button
           className='btns'
           buttonStyle='btn--outline'
           buttonSize='btn--large'
          >
            Subscribe Now
            </Button>
          
          <div className='cards__item__info benefit-div'>
            <h5 className='cards__item__text'>{props.benefit1}</h5>
            <h5 className='cards__item__text'>{props.benefit2}</h5>
            <h5 className='cards__item__text'>{props.benefit3}</h5>
            <h5 className='cards__item__text'>{props.benefit4}</h5>
            <h5 className='cards__item__text'>{props.benefit5}</h5>
            <h5 className='cards__item__text'>{props.benefit6}</h5>
          </div>
      </li>
    </>
  );
}

export default CardItem2;
