import React from 'react'
import { bill, apple, google } from '../assets'
import styles, {layout} from '../style'

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} px-3 `}>
          Control your <br className="sm:block hidden" /> <span className={`text-gradient`}>billing & invoicing</span> <br className="sm:block hidden" /> on the go
        </h2>
        <p className={`${styles.paragraph} feature-card px-3 py-3 max-w-[600px] mt-5 rounded-lg`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem non, saepe, ipsam nexeretis suscipit beatae, molestiae eaque 
        </p>
      </div>
    </section>
  )
}

export default Billing
