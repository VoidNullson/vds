import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
        <h1>NO ONE LIKES A BAD WEBSITE</h1>
      <p>It's time to increase your customer appeal!</p>
      <div className='hero-btns'>
      {/*     <Button
          className='web-samp'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
        Website Samples
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'

        >
          WATCH TRAILER <i className='far fa-play-circle' />
      </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
