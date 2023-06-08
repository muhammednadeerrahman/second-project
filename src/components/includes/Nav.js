import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'
import styled from 'styled-components'

export default function Nav() {
  return (
    <>
        <SideBar>
            <ul>
                <li><NavLink to ="/">Dashboard</NavLink></li>
                <li><NavLink to ="security">security</NavLink></li>
                <li><NavLink to ="Settings">Settings</NavLink></li>
                <li><NavLink to ="Trading">Trading</NavLink></li>
                <li><NavLink to ="Transcations">Transcations</NavLink></li>
                <li><NavLink to ="Wallet">Wallet</NavLink></li>
                <li></li>
            </ul>

        </SideBar>
        <Outlet/>
    </>
  )
}

const SideBar = styled.div`

width: 18%;
background-color:#192a56;
height:vh;

`
