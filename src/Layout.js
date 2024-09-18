import './styles/pages/page.scss'

import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="layout_container">
      <Header />
      <main className="layout_main">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
