import React from 'react'
import hPanelCss from '../Css/hPanelCss.module.css'

function HPanel(props) {
  return (
    <div className={hPanelCss.container}>
        <h2 className={hPanelCss.h2}>STATS</h2>
        <div className={hPanelCss.statsValue}>
           { props.statsdata.map((stat)=>
            <ul key={stat.id} style={{display:'block'}}>
                <li className={hPanelCss.lilabel}>{stat.label}</li>
                :
                <li className={hPanelCss.lirate}>{stat.Rate}</li>
            </ul>
            ) }
        </div>
    </div>
  )
}

export default HPanel;