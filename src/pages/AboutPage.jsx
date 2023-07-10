import React from 'react'
import style from '../styles/list.module.css'
import MainPage from './MainPage'
const AboutPage = () => {
  
  return (
    <div className={style.cardDiv}>
      <MainPage/>
      <p className={style.aboutAvatar}> ქართულ მითოლოგიაში გარეულ 
        ცხოველთა წინამძღოლი და მფარველი.
         მისი სახელის პირველი ნაწილი (ოჩო), 
         ქართული პანთეონის სხვა ღვთაებას - ბოჩის უკავშირდება, 
         ხოლო მეორე ნაწილი (პინტე, პინტრე) - ბერძნულ პანს.
          ოჩოპინტრე თითოეული ცხოველის სულს ფლობს.
           მონადირე სანადიროდ წასვლამდე (და ნადირობისას) ოჩოპინტრეს ევედრება იღბალს 
           და ნადირის მოკვლის ნებართვას.</p>
    </div>
  )
}

export default AboutPage