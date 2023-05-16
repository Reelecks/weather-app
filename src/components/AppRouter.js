import React from 'react'

import styles from '../style/NavBar.module.css';
function AppRouter() {
  return (
    <>
      <nav className={styles.container}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/paris">Paris</a></li>
          <li><a href="/new-york">New York</a></li>
        </ul>
      </nav>
    </>
  )
}

export default AppRouter