import React from 'react'
import styles from './Goal.module.css'

const Goal = ({ id, status, msg, onCheckChange }) => {
  return (
    <div className={styles.goalWrap}>
      <label
        htmlFor={id}
        className={status ? styles.textDisabled : styles.text}>
        {status && <div className={styles.clean} />}
        <input
          type='checkbox'
          id={id}
          name={id}
          data-msg={msg}
          onChange={onCheckChange}
          checked={status}
        />
        {msg}
      </label>
    </div>
  )
}

export default Goal
