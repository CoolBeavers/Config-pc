import React from 'react'

import ConfigurationItem from './configuration_item/ConfigurationItem'
import s from './Page.module.css'

import data from './Assembly.json'

const ConfigurationPage = () => {
  return (
    <div>
      <p className={s.header}>Собери свою мечту</p>
      <div className={s.items}>
        {data.map((item) => (
          <ConfigurationItem img={item.img} type={item.type} title={item.title} description={item.description} price={'$' + item.price}/>
        ))}
      </div>
    </div>
  )
}

export default ConfigurationPage