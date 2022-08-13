import React from 'react'
import { Link } from "react-router-dom";

import s from './Navbar.module.css'

const Navbar = () => {
  return (
      <div className='py-12'>
        <div className={s.block}>
        <Link to="/" className={s.link}>Config PC</Link>
          <ul className={s.block__inner}>
            <Link to="/" className={s.link}>Главная</Link>
            <Link to="/config" className={s.link}>Сборка</Link>
            <Link to="/about" className={s.link}>О нас</Link>
            <Link to="/support" className={s.link}>Помощь</Link>
          </ul>
          <Link to="/login">
            <button className={s.link__login}>Войти</button>
          </Link>
        </div>
      </div>
  )
}

export default Navbar