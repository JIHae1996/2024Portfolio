import React from 'react'
import subimage01 from '../../../assets/page/EventProduct/e01_01.jpg'
import subimage02 from '../../../assets/page/EventProduct/e01_02.jpg'
import subimage03 from '../../../assets/page/EventProduct/e01_03.jpg'
import subimage04 from '../../../assets/page/EventProduct/e01_04.jpg'
import subimage05 from '../../../assets/page/EventProduct/e01_05.jpg'
import subimage06 from '../../../assets/page/EventProduct/e01_06.jpg'
import subimage07 from '../../../assets/page/EventProduct/e01_07.jpg'
import Navigation from '../../../components/Navigation'

function GalaxyThemes() {
  return (
    <div className="page_container">
      <div className="nav">
        <Navigation />
      </div>
      <div className="cotent_wrap">
        <div className="page_title_wrap">
          <h2 class="page_title">삼성 갤럭시 테마</h2>
          <a
            className="page_btn"
            href="https://notefolio.net/jihae_96"
            target="blank_"
          >
            노트폴리오 바로가기
          </a>
        </div>
        <div className="sections">
          <div className="inner">
            <div className="intro_box">
              캐릭터 스타트업 자사 브랜드 갤럭시 테마 디자인 입니다.
            </div>
            <div className="image_area">
              <img src={subimage01} alt="images" />
            </div>
            <div className="section_title">
              <span>Clip Studio</span>
              <span>Photoshop</span>
            </div>
            <div className="main_description">
              자사 캐릭터 브랜드 홍보를 위해 제작한 삼성 갤럭시 테마 디자인
              입니다.
              <br />
              실제로 직접 삼성에 포트폴리오 제출 및 합격하게 되어 제작부터
              런칭까지 담당하게 되었습니다.
              <br />
              <br />
              삼성 갤럭시 테마앱으로 들어간 뒤
              <span className="blue">'thelittlepeonykorea'</span> 를
              검색해주세요.
            </div>
            <div className="image_area">
              <img src={subimage02} alt="images" />
            </div>
            <div className="main_description">
              모든 페이지의 일러스는 컨셉 및 드로잉까지 직접 제작 하였습니다.
              <br />
              <br />
              귀여운 요소의 10대 사용자의 니즈에 맞춰 감성적이고 부드러운 톤을
              활용하고자 하였습니다. 기존의 캐릭터 브랜드와 다르게 아이콘과
              일러스트를 직접 수작업으로 그리면 어떨까 라는 발상과 함께 런칭된
              작업문들 전부 오픈소스 및 일러스트가 아닌 직접 디지털 드로잉을
              이용하여 만들어졌습니다.
            </div>
            <div className="image_area">
              <img src={subimage03} alt="images" />
              <img src={subimage04} alt="images" />
              <img src={subimage05} alt="images" />
              <img src={subimage06} alt="images" />
              <img src={subimage07} alt="images" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalaxyThemes
