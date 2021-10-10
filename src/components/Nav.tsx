import React from 'react'
import { useMoralis } from 'react-moralis'

interface NavProps {
  goToRoute: (route: string) => void
}

const Nav: React.FC<NavProps> = ({ goToRoute }) => {
  const { authenticate, isAuthenticating, isAuthenticated, user, logout } = useMoralis()

  const goHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    goToRoute('/')
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
      <h1 className='not-sidebar'>
        <a href='/' onClick={goHome}>
          Paperfax
        </a>
      </h1>
    </nav>
  )
}

export default Nav
