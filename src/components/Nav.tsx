import React from 'react'
import { useMoralis } from 'react-moralis'

import { GITHUB, ETHERSCAN } from "icons"

interface NavProps {
  goToRoute: (route: string) => void
}

const Nav: React.FC<NavProps> = ({ goToRoute }) => {
  const { authenticate, isAuthenticating, isAuthenticated, user, logout } = useMoralis()

  const goHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    goToRoute('')
  }

  const controls = isAuthenticated ? (
    <button className='login-button' onClick={() => logout()}>
      Logout {user?.get('username')}
    </button>
  ) : (
    <button disabled={isAuthenticating} className='login-button' onClick={() => authenticate()}>
      {isAuthenticating ? <div className='spinner' /> : 'Login / Register'}
    </button>
  )

  return (
    <nav className='sidebar with-sidebar'>
      <div className='sidebar'>{controls}</div>
      <div className='not-sidebar nav-title'>
        <h1><a href='/' onClick={goHome}>
          Paperfax
        </a></h1>
        <h2 className='nav-subtitle'>MMO peer review.</h2>
        <a href="https://github.com/jooddang/paperfax" target="_blank">
          <img src={GITHUB} />
        </a>
        <a href="https://rinkeby.etherscan.io/address/0x5434550785ac720c57835f1523f622bc3fc9e3fe#code" target="_blank">
          <img src={ETHERSCAN} />
        </a>
      </div>
    </nav>
  )
}

export default Nav
