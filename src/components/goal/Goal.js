import React from 'react'
import styles from './Goal.module.css'

const Goal = ({ id, status, msg, onCheckChange }) => {
  return (
    <div className={StyleSheet.goalWrap}>
      <label
        className={status ? styles.textDisabled : styles.text}
        htmlFor={id}>
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
