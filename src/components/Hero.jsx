import { Button } from './Button';
import './Hero.css';

function Hero() {
  return (
    <div className='hero-container'>
      <img src="/images/img1222.jpg" alt="" />
      <h1>GET FIT.. STAY HEALTHY..</h1>
      <p>With just a simple click!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--medium'
        >
          LEARN MORE
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--medium'
          onClick={console.log('hey')}
        >
          EXPLORE <i className='fa fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default Hero;
