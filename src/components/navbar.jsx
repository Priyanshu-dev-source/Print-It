import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='navbar-body-wrapper'>
        <div className='navbar-logo-name'>
            Print It
        </div>
        <div className='navbar-items'>
            <ul type='none' className='navbar-items-list'>
                <li>Catalog</li>
                <li>How it works</li>
                <li>Price</li>
                <li>Blog</li>
                <li>Services</li>
                <li>Use-Cases</li>
                <li>Need help?</li>
            </ul>
        </div>
        <div className='navbar-login-signup'>
            <button>Log in</button>
            <button>Sign Up</button>
        </div>
    </div>
    </>
  )
}

export default Navbar
