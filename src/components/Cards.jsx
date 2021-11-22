import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import CardItem2 from './CardItem2';

function Cards() {
  return (
    <div className='cards'>
      <h1>WHAT WE OFFER</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/yoga3.jpg'
              text=' We offers everything from full classes to tutorials to meditation practices. All you need to know about yoga, including the health benefits and how people of different ages and levels of fitness can get started.'
              label='Yoga Classes'
              path='/services'
            />
            <CardItem
              src='images/cardio2.jpg'
              text='Balance cardio and strength training! Experience a full-body cardio & strength training workout in one with the Fitwell Cardio Strength classes.'
              label='Cardio & strength training'
              path='/services'
            />
            <CardItem
              src='images/weight3.jpg'
              text='This 5 week training class will guide learners through the essential steps in planning an individualized weight loss program.'
              label='Weight loss program'
              path='/services'
            />
            <CardItem
              src='images/trainer3.jpg'
              text='Our league of personal trainers are to help you achieve certain fitness goals, including but not limited to weight loss, strength training, toning, or overall health management.'
              label='Personal Training'
              path='/services'
            />
          </ul>
          <br/> <br/> <br/> <br/><br/>
          <h1>CHECK YOUR PRICING PLAN!</h1>
          <ul className='cards__items'>
            <CardItem2
              description='Beginners package'
              label='SILVER'
              path='/services'
              benefit1 = "24/7 Gym Access"
              benefit2 = "Access to 3 classes per week"
              amount = "35,000"
            />
            <CardItem2
              description='For committed enthusiasts'
              label='GOLD'
              path='/products'
              benefit1 = "24/7 Gym Access"
              benefit2 = "Unlimited Access to all classes"
              benefit3 = "Access to Exclusive Content"
              benefit4 = "Access to Challenges"
              amount = "60,000"
            />
            <CardItem2
              description='When nothing but the best will do'
              label='PLATINUM'
              path='/sign-up'
              benefit1 = "24/7 Gym Access"
              benefit2 = "Unlimited Access to all classes"
              benefit3 = "Access to Exclusive Content"
              benefit4 = "Access to Challenges"
              benefit5 = "Access to Gym's Executive Forum"
              benefit6 = "2 personal training sessions per week"
              amount = "100,000"
              />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
