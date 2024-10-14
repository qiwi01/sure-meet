import React from 'react'
import "../css/Dashboard.css"
import Menu from '../components/Nav'

const Dashboard = () => {
  return (
    <div>
        <div>
            <h2>Hello User</h2>
            <p>This is your dashboard</p>
        <div className="my-menu">
        <Menu/>
        </div>
        </div>
    </div>
  )
}

export default Dashboard