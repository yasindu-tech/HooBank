import React from 'react'
import styles,{layout} from '../styles';
import Buttons from './Buttons';
import { card } from '../assets';

const CardDeal = () => {
  return (
    <section id='cardDeal' className={`${layout.section}`}>
        <div className={`${layout.sectionInfo}`}>
          <h2 className={`${styles.heading2}`}>Find a better card deal <br className='hidden sm:block'/>in few easy steps.</h2>
          <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
          <Buttons styles="mt-5"/>
        </div>
        <div className={`${layout.sectionImg}`}>
          <img src={card} alt="card Deal"  />
        </div>
    </section>


  )
}

export default CardDeal