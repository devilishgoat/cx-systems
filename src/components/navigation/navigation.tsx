import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation: React.SFC = () => {
    return <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/clients'>Clients</Link></li>
            <li><Link to='/tech'>Tech stack</Link></li>
            <li><Link to='/approach'>Approach</Link></li>
            <li><Link to='/contact'>Contact us</Link></li>
        </ul>
    </nav>
}