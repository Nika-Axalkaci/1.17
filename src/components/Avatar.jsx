import React from 'react'
import style from '../styles/list.module.css'
function Avatar({img,name}) {
  return (
    <div className={style.insideCard}>
      <div className={style.avatarDiv}>
        <img className={style.avatarImg} src={img} alt={name} />
        </div>
        <div className="inside-div-text">
          <h1>{name}</h1>
        </div>
    </div>
  )
}

export default Avatar