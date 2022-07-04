import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="logo">
        <NavLink to={''}   ><img src="" />VOGUE</NavLink>
        <div className="fa fa-bars font-normal" />
      </div>
      {/* <div class="menu hidden">
                            <ul>
                                <li><a href="">Menu</a></li>
                                <li><a href="">Menu</a></li>
                                <li><a href="">Menu</a></li>
                                <li><a href="">Menu</a></li>
                            </ul>
                        </div>
                        <div class="user">
                            <a href="" class="fa fa-user text-2xl my-auto" aria-hidden="true"></a>
                        </div> */}
    </header>
  )
}

export default HeaderComponent