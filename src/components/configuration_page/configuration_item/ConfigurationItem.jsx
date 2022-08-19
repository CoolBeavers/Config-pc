import React from 'react'
import { Link } from 'react-router-dom'

import s from './Item.module.css'

const ConfigurationItem = (props) => {
  return (
    <Link to={'/list'} className='pt-5'>
      <div className={s.bg}>
        <img className={s.img} src={props.img} alt="" />
        <div className={s.block__desc}>
          <div>
            <p className={s.type}>{props.type}</p>
            <a href="#">
              <h5 className={s.header}>{props.title}</h5>
            </a>
            <p className={s.desc}>{props.description}</p>
          </div>
          <div className={s.btn__box}>
            <span className={s.price}>{props.price}</span>  
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