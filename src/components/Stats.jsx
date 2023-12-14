import {stats} from '../constants';
import styles from '../styles';

const Stats = () => {
  return (
    <section id='stats' className={`${styles.flexCenter} flex-row  flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) =>(
        <div className='flex flex-row items-center justify-start flex-1 m-3 flex-start'>
          <h4 className='text-white font-poppins xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] font-semibold'>
            {stat.value}
          </h4>
          <p className='text-gradient font-poppins xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] font-normal'>{stat.title}</p>
        </div>
      ))}
    </section>
  )
}

export default Stats

