import React from 'react'
import { Link } from 'react-router-dom'

import s from './Item.module.css'
import img from '../../../assets/img/op.jpg'

const ConfigurationItem = () => {
  return (
    <Link to={'/list'}>
      <div className={s.bg}>
        <img className={s.img} src={img} alt="" />
        <div className="p-7">
          <p className={s.type}>Type</p>
          <a href="#">
            <h5 className={s.header}>Noteworthy technology acquisitions 2021</h5>
          </a>
          <p className={s.desc}>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <div className={s.btn__box}>
            <span className={s.price}>$599</span>  
            <a href="#" className={s.btn}> Изменить
              <svg aria-hidden="true" className={s.svg} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ConfigurationItem