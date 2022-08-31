import React from 'react'
import cardCss from '../Css/cardCss.module.css'


function Card(props) {
  return (
    <div className={cardCss.container}>
      <div>
        <img src={props.src} alt="" className={cardCss.img}/>
        {props.children}
      </div>
    </div>
  )
}

export default Card;