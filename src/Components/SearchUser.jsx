import React from 'react'
import searchCss from '../Css/searchCss.module.css'
import image from '../helpers/icons8-search-60.png'

function SearchUser() {
  return (
    <div className={searchCss.container}>
        <input className={searchCss.input} type="text" name='search' placeholder='Search User ...'/>
        <span className={searchCss.span}>
            <img src={image} alt="" className={searchCss.img} />
        </span>
    </div>
  )
}

export default SearchUser;