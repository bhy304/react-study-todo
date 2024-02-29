import React from 'react'
import styles from './Input.module.css'

const Input = ({ onChange, onClick, value }) => {
  return (
    <form className={styles.inputBox} onSubmit={onClick}>
      <input
        type='text'
        placeholder='What is your goal?'
        value={value}
        onChange={onChange}
        className={styles.input}
      />
      <button type='submit' className={styles.button}>
        Send
      </button>
    </form>
  )
}

export default Input
