import React from 'react'
import { Link } from 'react-router-dom'
import opener from '../assets/image1opener85.jpg'

const Opener = () => {
  return (
    <div className="opener_container">
      <img src={opener} className="opener" />
      <div className="opener_words">
        <p className="words">
          This is a simple escape game paying homage to{' '}
          <span>
            <a href="http://www.rustylake.com/adventure-games/the-white-door.html">
              The White Door{' '}
            </a>
          </span>
          game by
          <span>
            <a href="http://www.rustylake.com"> Rusty Lake</a>
          </span>
          . I've taken the liberty of using their images and barely touching on
          the storyline itself.
          <span>
            <Link to="/escape" className="escape">
              enter
            </Link>
          </span>
        </p>
      </div>
    </div>
  )
}
export default Opener
