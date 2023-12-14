import React from 'react'
import styles,{layout} from '../styles';
import { bill,apple,google } from '../assets';

const Billing = () => {
  return (
    <section id='billing' className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img src={bill} alt="bill" className='w-[100%] h-[100%] relative z-[5]' />
      </div>

      <div className='z-[3] absolute -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'></div>
      <div className='z-[0] absolute -left-1/2 top-0 w-[50%] h-[50%] rounded-full pink__gradient'></div>

      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Easily control your <br className='hidden sm:block' /> billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
        
         <div className='flex flex-row flex-wrap mt-6 sm:mt-10'>
          <img src={`${apple}`} alt="App_Store"  className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
          <img src={`${google}`} alt="Play_Store"  className='w-[128px] h-[42px] object-contain  cursor-pointer'/>
        </div> 

      </div>
    </section>
  )
}

export default Billing