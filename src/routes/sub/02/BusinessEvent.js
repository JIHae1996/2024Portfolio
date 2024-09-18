import React from 'react'
import subimage01 from '../../../assets/page/UIdevPage/e03_01.PNG'
import subimage02 from '../../../assets/page/UIdevPage/e03_02.PNG'
import subimage03 from '../../../assets/page/UIdevPage/e03_03.PNG'
import subimage04 from '../../../assets/page/UIdevPage/e03_04.PNG'
import Navigation from '../../../components/Navigation'

function EventBusiness() {
  return (
    <div className="page_container">
      <Navigation />
      <div className="cotent_wrap">
        <div className="page_title_wrap">
          <h2 className="page_title">교보문고 비즈니스 기획전 이벤트 페이지</h2>
          <a
            className="page_btn"
            href="https://event.kyobobook.co.kr/detail/224886"
            target="_blank"
            rel="noopener noreferrer"
          >
            런칭 페이지 바로가기
          </a>
        </div>
        <div className="sections">
          <div className="inner">
            <div className="intro_box">
              2024.08 교보문고 비즈니스 기획전 이벤트 중 하나인 전문가의 책장
              &lt;프로-마인드&gt; 이벤트 페이지 입니다.
            </div>
            <div className="image_area">
              <img src={subimage01} alt="상세설명" />
            </div>
            <div className="section_title">
              <span>HTML</span>
              <span>css</span>
              <span>jQuery</span>
              <span>json</span>
            </div>
            <div className="main_description">
              해당 이벤트는 성수기로 인해 작업 기간이 약 '5시간으로' 단기적으로
              하루 안에 끝내야 했던 작업이였던 특징이 있었습니다.
              <div className="sub_description">
                지금 생각하면 굉장히 <span className="blue">아찔한?</span>{' '}
                작업이였던 기억이 남았지만. 위기를 기회로 생각하여 가장 차분하게
                마크업 계획을 진행하여 제 시간안에 제출 할수있었던 좋은 경험이
                남아있습니다.
              </div>
            </div>
            <div className="image_area">
              <img src={subimage02} alt="상세설명" />
            </div>
            <div className="main_description">
              우선 이벤트 작업 전 기획서를 살펴 보고 간단하게 이벤트의 조건과
              들어가는 데이터를 정리하였습니다.
              <br />
              다음과 같이 간략한 작업이라도 어떠한 데이터가 중복적으로 얼마나
              많이 들어가는지에 따라 일부는 하드코딩 , 일부는 json 파일을 이용한
              배열방식을 사용하였습니다.
            </div>
            <div className="image_area">
              <img src={subimage03} alt="상세설명" />
            </div>
            <div className="main_description">
              간단한 코드 계획을 어느정도 생각 한 뒤 일부 데이터에 대한 중복적인
              요소가 보여 해당 데이터의 폴더링을 규칙을 만들어 정리하는 작업에
              가장 공을 들였습니다.
              <div className="sub_description">
                위와 같은 방식으로 작업 시, 혹여 데이터가 변경되거나 아니면
                데이터 양이 방대할수록{' '}
                <span className="blue">
                  작업자가 헷갈리는것을 방지 할 수 있으며
                </span>
                폴더에도 각각의 영역을 주어 다른 폴더간 오염을 최대한 방지할 수
                있다는 점에서 조금 조급해도 작업 전 코드 기획단계를 철저하게
                다지는 것에 집중 하였습니다.
              </div>
            </div>
            <div className="image_area">
              <img src={subimage04} alt="상세설명" />
            </div>
            <div className="main_description">
              폴더링만 꼼꼼하게 규칙을 심어 주면, 다음과 같이 부모 폴더의 순서
              규칙에 따라 데이터가 전부 변경되거나 등, 하나하나 고생해서
              데이터를 심는 작업을 대폭 감소시킬수 있다는 점에서 급하면서 방대한
              양의 작업일 수록 해당 작업에 효율이 상승되는 점을 발견할수
              있었습니다.
            </div>
            <div className="main_description">
              [결과]
              <br />
              <br />
              해당 이벤트는 촉박한 시간에 하드코딩을 최대한 줄이기 위한, 오직
              시간단축을 위해서 작업한 방식이였습니다.
              <br /> 하드코딩을 줄이고 데이터를 따로 분리함으로써, 데이터 오염을
              최대한 막고 시간을 단축했다는 장점이 있었습니다. 막 교보문고에
              입사하고 처음 하였던 리액트 부트캠프때 팀원분이 json파일의 배열 안
              배열에 대하여 설명해 주신적이 있어, 해당 방법으로 부트캠프를
              진행했었는데, 처음으로 실무에서 그 방식을 진행해볼수 있어서
              좋은경험을 가지게 되었습니다.
              <br />
              <br />
              다만 작업 시간이 턱 없이 부족하여 작업 전 코드 기획을 탄탄하게
              세울 수 없어 만족스러운 결과물은 만들어내진 못했습니다.
              <br /> 다음에 비슷한 기회가 생기게되면 조급하더라도 코드
              기획단계에 시간을 좀 더 투자해도 될것같다는 생각을 많이 준
              작업이였습니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventBusiness
