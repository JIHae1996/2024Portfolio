import React from 'react'
import subimage02 from '../../../assets/page/UIdevPage/e02_02.PNG'
import Navigation from '../../../components/Navigation'

function OtherDesign() {
  return (
    <div className="page_container">
      <div className="nav">
        <Navigation />
      </div>
      <div className="cotent_wrap">
        <div className="page_title_wrap">
          <h2 class="page_title">Lottie를 이용한 개인 포트폴리오</h2>
          <a
            className="page_btn"
            href="https://lottiefiles.com/wlgo3333"
            target="blank_"
          >
            로티 대시보드 바로가기
          </a>
        </div>
        <div className="sections">
          <div className="inner">
            <div className="intro_box">
              Adobe After Effect와 Lottie를 활용한 개인 포트폴리오 디자인
            </div>
            <div className="image_area">
              <img
                src="https://cdn-bastani.stunning.kr/prod/portfolios/8154e16b-1a89-43a6-8f07-4ac3e16022f4/contents/vuZgbhAL9qy5QxJ8.Comp-1.webp"
                alt="images"
              />
            </div>
            <div className="section_title">
              <span>Adobe AfterEffect</span>
              <span>Lottie</span>
              <span>Figma</span>
              <span>Adobe Illustrator</span>
              <span>Adobe Photoshop</span>
            </div>
            <div className="main_description">
              부드럽고 자연스러운 애니메이션을 디자이너가 코드로 구현할 수
              있을까?
              <br />
              <div className="sub_description">
                디자이너 시절 항상 고민했던 생각 중 하나였습니다.
                <br />
                <span className="blue">
                  동영상 편집 기능을 알고 있는데 보여주기만 해서는 한계가 있다는
                  것을 느꼈습니다.
                </span>
              </div>
              <br />
              <br />
              로티는 이러한 고민을 해결해 주고자 같은 회사 직장 동료인 백엔드
              개발자 분이 소개 시켜준 툴이였습니다.
              <br />
              코드를 처음 막 배우기 시작했을때 멋도 모르고 직접 기획, 디자인,
              코딩 작업을 거친 제작물이라 많이 허술한 면이 있지만
              <br /> 혼자서 다양한 시도와 얻어간것이 더 많았던 좋은 프로젝트라고
              지금도 생각하고 있습니다.
              <br />
            </div>
            <div className="image_area">
              <img
                src="https://cdn-bastani.stunning.kr/prod/portfolios/8154e16b-1a89-43a6-8f07-4ac3e16022f4/contents/v9rDtSw2dFXC7xbe.Comp-5.webp"
                alt="images"
              />
              <img
                src="https://cdn-bastani.stunning.kr/prod/portfolios/8154e16b-1a89-43a6-8f07-4ac3e16022f4/contents/wh87ZqWEBYW3AoE2.Comp-4.webp"
                alt="images"
              />
            </div>
            <div className="main_description">
              결과적으로 냉정하게 말하자면 로티 애니메이션은 아주 작은 아이콘인
              쁘띠 애니메이션에만 적합한 라이브러리로 보입니다.
              <br /> 로티의 어마어마한 용량과 렉...
              <br />
              해당 개인 프로젝트를 진행하면서 느낀 가장 큰 배운점이였습니다.
              하지만 쁘띠 아이콘일수록 누구보다 정교하고 부드러운 인터렉션을 줄
              수 있다는 점에서는 굉장한 장점을 주고 싶었던 작업이였습니다.
              <br />
              <br />
              각각의 아이콘은 어도비 일러스트레이터를 이용하여 제작하였고, 해당
              일러스트를 svg로 추출 후 애프터이펙트를 이용하여 애니메이션 제작.
              로티 플러그인을 이용하여 최종적으로 추출하는 방법까지 직접
              시도해보았습니다. 코드는 리액트 플러그인을 활용하여 간단하게
              붙혀보는 방식으로만 진행하본 작은 작업이였습니다.
            </div>
            <div className="image_area">
              <img
                src="https://cdn-bastani.stunning.kr/prod/portfolios/8154e16b-1a89-43a6-8f07-4ac3e16022f4/contents/ZEdbRfzwJ7bnJyny.Comp-3.webp"
                alt="images"
              />
              <img
                src="https://cdn-bastani.stunning.kr/prod/portfolios/8154e16b-1a89-43a6-8f07-4ac3e16022f4/contents/FkPKfxU8Njbce6Ug.Artboard%201%20copy%204@2x.png"
                alt="images"
              />
              <img
                src="https://cdn-bastani.stunning.kr/prod/portfolios/8154e16b-1a89-43a6-8f07-4ac3e16022f4/contents/ZxARNLArfctCUV22.Artboard%201%20copy%2011@2x.png"
                alt="images"
              />
            </div>
            <div className="main_description">
              감성적인 느낌을 전달하기 위해 모든 그래픽 아트는 직접 포토샵을
              이용하여 그렸습니다.
              <br />
              <br />
              전체적인 UI툴은 Figma를 이용하여 작업 하였으며, 아이콘을 figma
              에셋을 이용하여 on/off 기능에 빠른 적용 시안을 볼수 있도록
              제작해두었습니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OtherDesign
