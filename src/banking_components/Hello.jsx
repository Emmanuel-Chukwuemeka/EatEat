import React from 'react'
import xyz from './hello.module.css' // how to import css module in react

const Hello = () => {
  return (
    // how to use css module in className react
    <div className={xyz.heda}>
      <h1>Greetings from Hello Component</h1>
    </div>
  )
}

export default Hello
