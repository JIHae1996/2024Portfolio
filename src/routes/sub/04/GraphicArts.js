import React from 'react'
import subimage01 from '../../../assets/page/UIdevPage/e02_01.PNG'
import subimage02 from '../../../assets/page/UIdevPage/e02_02.PNG'
import Navigation from '../../../components/Navigation'

function GraphicArts() {
  return (
    <div className="page_container">
      <Navigation />
      <div className="cotent_wrap">
        <div className="page_title_wrap">
          <h2 className="page_title">그래픽 아트 작업물</h2>
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
            <div className="intro_box">기타 그래픽 아트 작업물들 입니다.</div>
            <div className="image_area">
              <img
                src="https://cdn-bastani.stunning.kr/prod/portfolios/8154e16b-1a89-43a6-8f07-4ac3e16022f4/contents/57fc155640787f6407eab11fcc2fe0c0e314b988e72a9d9f563e3a238875dbd0_v1.jpg"
                alt="images"
              />
            </div>
            <div className="section_title">
              <span>Clip Studio</span>
              <span>Photoshop</span>
            </div>
            <div className="main_description">
              그래픽아트는 대학시절부터 조금씩 독학하면서 배운 작업이였습니다.
              <br />첫 회사에서 그래픽 아트를 할 줄 알아 많은 그래픽 아트 업무를
              담당하게 되면서 부터 그래픽아트 업무를 조금씩 해오고 있습니다.
            </div>
            <div className="image_area">
              <img
                src="https://cdn-bastani.stunning.kr/prod/portfolios/8154e16b-1a89-43a6-8f07-4ac3e16022f4/contents/XB4LYXDjNuiRo3H3.SNS01.png"
                alt="images"
              />
              <img
                src="https://cdn-bastani.stunning.kr/prod/portfolios/8154e16b-1a89-43a6-8f07-4ac3e16022f4/contents/h2oiL2JMgvsJwb3H.SNS02.png"
                alt="images"
              />
              <img
                src="https://cdn-bastani.stunning.kr/prod/portfolios/8154e16b-1a89-43a6-8f07-4ac3e16022f4/contents/sDn6NFRvRYbodeXi.9ceca9156630789.636ab0be0a859.webp"
                alt="images"
              />
              <img
                src="https://cdn-bastani.stunning.kr/prod/portfolios/8154e16b-1a89-43a6-8f07-4ac3e16022f4/contents/ksLZVJJAijLJyEJL.Artboard%201%20copy%2019@2x.png"
                alt="images"
              />
              <img
                src="https://cdn-bastani.stunning.kr/prod/portfolios/8154e16b-1a89-43a6-8f07-4ac3e16022f4/contents/f4hDj29zgJAvdCVd.Artboard%201%20copy%205@2x.png"
                alt="images"
              />
            </div>
            <div className="main_description">
              웹툰 형식의 그림은 셀식, 일러스트는 면식으로 채색을 진행하고
              있습니다.
              <br />
              사물 외에도 사람 동물 등 가리지 않고 다양하게 그리고 있습니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GraphicArts
