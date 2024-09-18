import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import data from '../data/navigation.json'
import '../styles/components/navigation.scss'

function Navigation() {
  const location = useLocation()
  const [filteredCategories, setFilteredCategories] = useState([])
  const [activeParent, setActiveParent] = useState(null) // 기본적으로 어떤 부모도 활성화되지 않음

  useEffect(() => {
    const path = location.pathname.substring(1) // 현재 URL에서 '/' 제거
    const categoryData = data.find(item =>
      item.categories.some(cat => cat.depth.includes(path))
    )

    if (categoryData) {
      setFilteredCategories(categoryData.categories)

      // 현재 경로를 기반으로 초기 부모 인덱스 설정
      const initialParentIndex = categoryData.categories.findIndex(category =>
        category.depth.includes(path)
      )
      setActiveParent(initialParentIndex)
    } else {
      setFilteredCategories([])
    }
  }, [location.pathname])

  const handleParentClick = index => {
    // 클릭된 부모가 이미 열려있는 경우 닫기
    if (activeParent === index) {
      setActiveParent(null)
    } else {
      setActiveParent(index)
    }
  }

  const getIconPath = iconName => {
    try {
      return require(`../assets/nav_ico/${iconName}.png`)
    } catch (error) {
      return ''
    }
  }

  return (
    <div className="nav_container">
      <nav>
        {filteredCategories.map((category, parentIndex) => (
          <ul key={category.pagenumber} className="parent-ul">
            <li
              className={`parent ${activeParent === parentIndex ? 'on' : ''}`}
              onClick={() => handleParentClick(parentIndex)}
            >
              <div className="cte">
                <span>
                  <img src={getIconPath(category.icon)} alt="nav icon" />
                </span>
                {category.name}
                <span className="arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path d="M15.625 7.74994L14.7113 6.875L10 11.375L5.28877 6.875L4.375 7.74994L10 13.125L15.625 7.74994Z" />
                  </svg>
                </span>
              </div>
              <ul
                className={`depth-menu ${
                  activeParent === parentIndex ? 'open' : ''
                }`}
              >
                {category.depth.map((item, childIndex) => (
                  <li
                    key={childIndex}
                    className={`link ${
                      location.pathname.substring(1) === item ? 'active' : ''
                    }`}
                  >
                    <Link to={`/${item}`}>{item}</Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        ))}
      </nav>
    </div>
  )
}

export default Navigation
