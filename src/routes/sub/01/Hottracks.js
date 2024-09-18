import React from 'react'
import subimage01 from '../../../assets/page/UIdevPage/e01_01.PNG'
import subimage02 from '../../../assets/page/UIdevPage/e01_02.PNG'
import Navigation from '../../../components/Navigation'

function Hottracks() {
  return (
    <div className="page_container">
      <Navigation />
      <div className="cotent_wrap">
        <div className="page_title_wrap">
          <h2 className="page_title">핫트랙스 웰컴 메인 페이지</h2>
          <a
            className="page_btn"
            href="https://hottracks.kyobobook.co.kr"
            target="_blank"
            rel="noopener noreferrer"
          >
            런칭 페이지 바로가기
          </a>
        </div>
        <div className="sections">
          <div className="inner">
            <div className="intro_box">
              2024.01 교보문고와 핫트랙스 통합건으로 제작한 핫트랙스 리뉴얼
              페이지 입니다.
            </div>
            <div className="image_area">
              <img src={subimage01} alt="상세설명" />
            </div>
            <div className="section_title">
              <span>HTML</span>
              <span>scss</span>
              <span>jQuery</span>
              <span>SVN</span>
            </div>
            <div className="main_description">
              핫트랙스 채널 안의 모든 페이지가 변경되는 것이 아닌,
              <br />
              웰컴 메인페이지만을 리뉴얼한 작업본 입니다.
              <br />
              <br />
              레거시 작업본이 SVN으로 관리되어 있어, SVN을 활용 하여 관리 및
              유지 보수를 진행하였습니다.
              <br />
              기존에 키치한 무드를 완전히 버린 대규모 리뉴얼 이였기 때문에,
              리뉴얼에 따른 UI개발 및 상품 컴포넌트 및 jQuery로 작업해 두었던
              스크립트도 대거 수정이 되었습니다.
            </div>
            <div className="image_area">
              <img src={subimage02} alt="상세설명" />
            </div>
            <div className="main_description">
              핫트랙스 채널의 전 페이지는 모두 스타일을 함께 공유하고 있기
              때문에 기존의 스타일이 깨지지 않도록 유지하는것에 작업을 집중
              하였습니다.
              <br />
              <br />
              레거시가 많고, 오래된 회사라는 특징에서 기존 작업자에게 혼돈이
              오지 않게 레거시 파일을 최대한 활용 하는 방향으로 리뉴얼 작업을
              진행하였습니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hottracks
