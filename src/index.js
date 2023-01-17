import React from 'react'
import styles from './styles.module.css'

export const BeysButton = ({ type='', text }) => {
  return (
    <div>
      <button className={styles[type]}>{text}</button>
    </div>
  )
}
