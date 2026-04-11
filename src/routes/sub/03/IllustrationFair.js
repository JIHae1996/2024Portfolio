import subimage01 from '../../../assets/page/EventProduct/e01_08.jpg'
import subimage02 from '../../../assets/page/EventProduct/e01_09.jpg'
import Navigation from '../../../components/Navigation'

function GalaxyThemes() {
  return (
    <div className="page_container">
      <div className="nav">
        <Navigation />
      </div>
      <div className="cotent_wrap">
        <div className="page_title_wrap">
          <h2 class="page_title">세계수 : 개인 일러스트 페어 출품작</h2>
          <a
            className="page_btn"
            href="https://jihae1996.github.io/Forest_brand/"
            target="blank_"
          >
            일러스트 페이지 바로가기
          </a>
        </div>
        <div className="sections">
          <div className="inner">
            <div className="intro_box">
              개인 일러스트 브랜드 작업 및 일러스트 페어 출품을 위한
              프로젝트입니다.
              <br />
              마곡 K-일러스트페어에 출품 경험이 있으며, 현재 서울 일러스트페어를
              준비 중입니다.
            </div>

            <div className="image_area">
              <img src={subimage01} alt="images" />
            </div>
            <div className="section_title">
              <span>Photoshop</span>
              <span>After Effect</span>
            </div>
            <div className="main_description">
              개인 브랜드 "세계수"를 기획 및 운영하며, 브랜드 컨셉에 맞는
              일러스트와 비주얼 작업을 진행하고 있습니다. <br />
              브랜드 아이덴티티를 기반으로 컬러, 무드, 그래픽 요소를 일관되게
              설계하여 전체 콘텐츠의 완성도를 높이고자 했습니다.
              <br />
            </div>
            <div className="image_area">
              <img src={subimage02} alt="images" />
            </div>
            <div className="main_description">
              모든 일러스트는 컨셉 기획부터 드로잉, 후반 작업까지 직접
              제작하였으며, 브랜드 아이덴티티를 기반으로 일관된 비주얼을
              구성하였습니다.
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalaxyThemes
