import React from 'react'
import { Link } from 'react-router-dom'

import Elipse from '../../assets/img/Ellipse.png'
import s from './Title.module.css'

const Title = () => {
  return (
    <div className={s.block}>
      <div className={s.block__inner}>
        <p className={s.header}>Скорости <br /> нет предела</p>
        <p className={s.header__inner}>Поможем вам собрать компьютер вашей мечты совершенно <span className={s.span}> бесплатно </span> и доступно</p>
        <Link to="/config">
          <button className={s.link}>Собрать</button>
        </Link>
      </div>
      <div>
        <img className={s.img} src={ Elipse } alt=''/>
        <img className='drop-shadow-3xl' src='https://edelws.ru/upload/iblock/6d8/6d89c539dd7b4dc6ad4dad92a59ea942.png' alt=''/>
      </div>
    </div>
  )
}

export default Title