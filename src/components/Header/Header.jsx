import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import styles from './style.module.css'

const Header = ({menu}) => {
  return (
    <div className={styles.header}>
      {
        menu.map(item => {
          return (
            <NavLink to={item.url}>
              {item.title}
            </NavLink>
          )
        })
      }
    </div>
  )
}

export default Header;