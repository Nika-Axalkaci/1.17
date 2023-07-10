import React from 'react'
import Avatar from '../components/Avatar'
import ocho from '../assets/ocho.png'
import style from '../styles/list.module.css'
const MainPage = () => {
  const data = {
    name: 'ოჩოპინტრე',
    avatar: ocho
  }

  return (
    <div className={style.cardDiv}>
      
      <Avatar img={data.avatar} name={data.name} />
      
    </div>
  )
} 

export default MainPage