import React from 'react'
import { Link } from 'react-router-dom'

const NoMatch = () => (
  <div>
    <span>404</span>
    <Link to='/'>Return to home page</Link>
  </div>
)

export default NoMatch