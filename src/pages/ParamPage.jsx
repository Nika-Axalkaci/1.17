import React from 'react'
import style from '../styles/list.module.css'

import { useParams } from 'react-router-dom'
const data = [
  {
    id:1,
    fact:'ხევსურების რწმენით „ოჩოპინტე“ ნადირთა მწყემსია, რომელზეც ჩაბარებულია ნადირთა სულები, ურომლოდაც მონადირე ნადირს ვერ მოჰკლავს.'
  },
  {
    id:2,
    fact:'ხევსურთა რწმენით ის უხილავი არსებაა. ხევსური მონადირე ჯიხვებზე სანადიროდ წასვლის წინ ყოველთვის ნადირთ მწყემს შეახვეწნის, რათა ნადავლის გარეშე არ დარჩეს.'
  }
]

const ParamPage = () => {
  const param = useParams()
  const facts = data.find(fact => fact.id == param.id)
  if(!facts){
    return <div>fact not found</div>
  }
  return(
    <div className={style.cardDiv}>
      <h1>{facts.fact}</h1>
    </div>
  )
}

export default ParamPage