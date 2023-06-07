import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
        <NavLink to ="/">Dashboard</NavLink>
        <NavLink to ="security">security</NavLink>
        <NavLink to ="Settings">Settings</NavLink>
        <NavLink to ="Trading">Trading</NavLink>
        <NavLink to ="Transcations">Transcations</NavLink>
        <NavLink to ="Wallet">Wallet</NavLink>
        <Outlet/>
    </div>
  )
}
