import React from 'react'

import ConfigurationItem from './configuration_item/ConfigurationItem'
import s from './Page.module.css'

const ConfigurationPage = () => {
  return (
    <div>
      <p className={s.header}>Собери свою мечту</p>
      <ConfigurationItem/>
    </div>
  )
}

export default ConfigurationPage