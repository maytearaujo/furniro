import React from 'react'

const root = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href={`/`}>Home</a>
          </li>
          <li>
            <a href={`/about/`}>About</a>
          </li>
          <li>
            <a href={`/contact`}>Contact</a>
          </li>
          <li>
            <a href={`/shop/`}>Shop</a>
          </li>
        </ul>
      </nav>
      <div id="detail"></div>
    </>
  )
}

export default root