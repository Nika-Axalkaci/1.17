
import {Link, Outlet } from 'react-router-dom'
import style from '../styles/list.module.css'
const Layouts = () => {
  return (
    <div className={style.links}>
        <div>
        <Link to={'/about'}> about</Link>
        <Link to={'/'}> home</Link>
        </div>
        <Outlet/>
  
    </div>
  )
}

export default Layouts