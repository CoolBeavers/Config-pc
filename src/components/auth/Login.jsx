import React from 'react'
import { Link } from 'react-router-dom'

import bg from '../../assets/img/pc.png'
import s from './Auth.module.css'

const Login = () => {
  return (
    <div>
      <div className={s.main}>
        <div>
          <img src={bg} alt="" />
        </div>
        <div className={s.box__header}>
          <p className={s.header}>Авторизация</p>
          <div className="w-72">
            <div class="relative z-0 mb-6 w-full group">
              <input type="text" name="floating_email" id="floating_email" className={"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#E55D87] focus:outline-none focus:ring-0 focus:border-[#E55D87] peer"} placeholder=" " required />
              <label for="floating_email" className={"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#E55D87] peer-focus:dark:text-[#E55D87] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"}>Логин</label>
            </div>
            <div class="relative z-0 mb-8 w-full group">
              <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#E55D87] focus:outline-none focus:ring-0 focus:border-[#E55D87] peer" placeholder=" " required />
              <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#E55D87] peer-focus:dark:text-[#E55D87] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Пароль</label>
            </div>
            <div className={s.box__btn}>
              <Link to="/login">
                <button className={s.btn}>Войти</button>
              </Link>
            </div>
          </div>

          <p className={s.box__link}>Нет аккаунта?&nbsp;
            <span className={s.link}> 
              <Link to="/registration">
                Зарегистрируйся
              </Link> 
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login