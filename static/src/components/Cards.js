import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>THE FIRST IMPRESSION MATTERS</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/restaurantdemo.jpg'
              text="Diner's want to know the basics when they find you. Make it easy for them while you show off your delicious food!"
              label='Restaurant'
              path='/restaurant-demo'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Customers want an experience when they shop online. Give them a beautiful one!'
              label='Retail'
              path='/web-products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Vehicle owners want quality and reliability, draw in customers with a sleek look!'
              label='Automotive'
              path='/web-products'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Not everyone needs a Storefront, but having a website will give you an oportunity to display your Business!'
              label='Mobile Services'
              path='/marketing'
            />
            <CardItem
              src='images/img-8.jpg'
              text="Do you have a product? Maybe you want to start a Blog? A Let me get your ideas onto the Internet!"
              label='Miscellaneous'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
