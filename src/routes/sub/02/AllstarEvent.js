import React from 'react'
import subimage01 from '../../../assets/page/UIdevPage/e02_01.PNG'
import subimage02 from '../../../assets/page/UIdevPage/e02_02.PNG'
import subimage03 from '../../../assets/page/UIdevPage/e02_03.PNG'
import Navigation from '../../../components/Navigation'

function EventAllstar() {
  return (
    <div className="page_container">
      <Navigation />
      <div className="cotent_wrap">
        <div className="page_title_wrap">
          <h2 className="page_title">교보문고 올스타전 이벤트 페이지</h2>
          <a
            className="page_btn"
            href="https://event.kyobobook.co.kr/make/224594"
            target="_blank"
            rel="noopener noreferrer"
          >
            런칭 페이지 바로가기
          </a>
        </div>
        <div className="sections">
          <div className="inner">
            <div className="intro_box">
              2024.09 교보문고 올스타전 이벤트 페이지 입니다.
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
              교보문고 올스타전 이벤트는 총 20권의 도서 별 공략이 따르며, 해당
              공략을 바탕으로 투표를 진행하는 입니다.
              <br />
              도서 리스트와 공략 등 자료가 방대한 이벤트이며, 해당
              <span className="blue">자료를 중복으로</span>
              사용하는 부분이 많은게 특징입니다.
            </div>
            <div className="main_description">
              [json 파일을 활용한 중복 데이터 정리]
              <div className="sub_description">
                해당 이벤트는 대상도서 리스트에 있는 데이터를 스와이퍼 영역 ,
                팝업 영역, 투표지 영역 총 세개의 부분에 들어가야 하는
                상황이였다. 따라서, 도서 리스트를 전체적으로 한 파일(json)에
                정리. 해당 리스트를 사용하고 싶을때마다
                <span className="blue">원하는 데이터를 뽑아</span> 사용할 수
                있게 작업하였습니다.
              </div>
            </div>
            <div className="image_area">
              <img src={subimage02} alt="상세설명" />
            </div>
            <div className="sub_description">
              다음과 같이 데이터를 정리했을때, 01번부터 20번의 도서 중 "isbn"과
              "title”을 제외한 나머지 데이터를 불러온 예시는 다음과 같습니다.
            </div>
            <div className="image_area">
              <img src={subimage03} alt="상세설명" />
            </div>
            <div className="main_description">
              <strong>[결과]</strong>
              <br />
              <br />
              해당 이벤트는 다음과 같이 방대한 양의 자료가 반복적으로 들어가는
              구간이 많아 하드코딩으로 진행되었을때, 약 3000줄 이상의 마크업이
              나오는 이벤트입니다. 중복되는 데이터를 정리 후 끌어 오는 방식을
              사용하면, 유지보수 및 관리 하는 차원에서 작업자가 조금이라도
              편하게 작업하는게 좋은 방법일것 같다는 느낌이 들어 해당 방법을
              이번 이벤트에 처음으로 시도해 보았어요. 결과적으로 도서 리스트에
              제법 많은 수정사항이 들어왔었는데, 그럴때마다 중복되는 모든
              마크업을 변경하는게 아닌, 리스트 파일 하나만을 수정하면 해결되었던
              점에서 수정사항을 수월하게 작업할수있었던 부분이 가장
              메리트였습니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventAllstar
