import React from "react"
import "../styles/main.css"
import { Footer } from "./footer"
import HTMLHeader from "./htmlHead"
import { SideNav } from "./sidenav"
import { TopNav } from "./topnav"

const Layout = props => {
  return (
    <div className="flex flex-col md:flex-row bg-background-primary">
      <HTMLHeader />
      <div className="w-full md:hidden">
        <TopNav />
      </div>
      <div className="w-12 hidden md:block h-screen">
        <SideNav />
      </div>
      <div className="w-full min-h-screen">
        <div className="flex flex-col h-full items-center p-3 overflow-hidden">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Layout
