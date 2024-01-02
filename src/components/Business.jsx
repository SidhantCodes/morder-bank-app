import React from 'react'
import styles, { layout } from '../style'
import Button from './Button'
import { features } from '../constants'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} `}>
      <img src={icon} alt="" className={`w-[50%] h-[50%] object-contain`}/>
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className={`font-poppins text-[18px] text-white font-semibold`}>
        {title}
      </h4>
      <p className={`text-dimWhite font-poppins text-[15px]`}>
        {content}
      </p>
    </div>
  </div>
)
const Business = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Spend more time on <span className="text-gradient">Business</span> <br className='sm:block hidden' /> We'll handle the <span className="text-gradient">Banking</span>
        </h2>
        <p className={`${styles.paragraph} max-w-[800px] mt-4`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nostrum itaque soluta placeat. Fugiat incidunt eveniet non provident repudiandae animi quidem, dolores magnam iure, quibusdam est, minima blanditiis dolore quae.
        </p>
        <Button />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
    </section>
  )
}

export default Business
