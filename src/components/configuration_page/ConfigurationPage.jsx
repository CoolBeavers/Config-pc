import React from 'react'

import ConfigurationItem from './configuration_item/ConfigurationItem'
import s from './Page.module.css'

import data from './Assembly.json'

const ConfigurationPage = () => {
  return (
    <div>
      <p className={s.header}>Собери свою мечту</p>
      <ConfigurationItem img={data[0].img} type={data[0].type} title={data[0].title} description={data[0].description} price={'$' + data[0].price}/>
    </div>
  )
}

export default ConfigurationPage