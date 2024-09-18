import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.png'
import data from '../data/navigation.json'
import '../styles/components/header.scss'

function Header() {
  const location = useLocation()
  const navigate = useNavigate()

  // 현재 경로가 어떤 id에 속하는지 확인하는 함수
  const getActiveId = () => {
    const currentPath = location.pathname.substring(1) // '/' 제거한 현재 경로
    for (const item of data) {
      for (const category of item.categories) {
        if (category.depth.includes(currentPath)) {
          return item.id
        }
      }
    }
    return null
  }

  const activeId = getActiveId()

  const getFirstDepthPage = id => {
    const category = data.find(item => item.id === id)
    if (category && category.categories.length > 0) {
      return category.categories[0].depth[0] // 첫 번째 depth 페이지 이름
    }
    return ''
  }

  const handleNavigation = id => {
    const firstPage = getFirstDepthPage(id)
    if (firstPage) {
      navigate(`/${firstPage}`) // 페이지 이동
    }
  }

  return (
    <div className="header_container">
      <div className="inner">
        <ul className="header_gnb">
          <li>
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </li>
          <li>
            <button
              onClick={() => handleNavigation('01')}
              className={`gnb_link ${activeId === '01' ? 'active' : ''}`}
            >
              UI Development
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation('02')}
              className={`gnb_link ${activeId === '02' ? 'active' : ''}`}
            >
              Design works
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
