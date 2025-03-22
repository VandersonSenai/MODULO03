import React from 'react'

import chap from '../assets/chapolin.png'
const Images = () => {
  return (
    <div>
        <h1>Images H1</h1>
        <h2>Images H2</h2>
        <img src='./Black-Kamen-Rider.png' width={600} alt="" />
        <img src={chap} width={600} alt="" />
    </div>
  )
}

export default Images


