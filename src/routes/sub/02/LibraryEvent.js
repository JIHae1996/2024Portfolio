import React from 'react'
import subimage01 from '../../../assets/page/UIdevPage/e04_01.PNG'
import subimage02 from '../../../assets/page/UIdevPage/e04_02.PNG'
import subimage03 from '../../../assets/page/UIdevPage/e04_03.png'
import subimage04 from '../../../assets/page/UIdevPage/e04_04.png'
import subimage05 from '../../../assets/page/UIdevPage/e04_05.PNG'
import Navigation from '../../../components/Navigation'

function LibraryEvent() {
  return (
    <div className="page_container">
      <Navigation />
      <div className="cotent_wrap">
        <div className="page_title_wrap">
          <h2 className="page_title">2024 교보문고 연말 프로모션 설렘문고</h2>
          <a
            className="page_btn"
            href="https://event.kyobobook.co.kr/make/228548"
            target="_blank"
            rel="noopener noreferrer"
          >
            런칭 페이지 바로가기
          </a>
        </div>
        <div className="sections">
          <div className="inner">
            <div className="intro_box">
              2024.12 교보문고 마케팅 기획팀과 함께 한 연말 프로모션
              <br /> '설렘문고' 이벤트 페이지 입니다.
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
              교보문고 설렘문고 페이지는 자사 페이지의 연말 이벤트 중 가장 처음
              런칭 된 이벤트 이자, 대표 이벤트 페이지 입니다.
              <div className="sub_description">
                연말 대표 페이지 답게, 화려한 이펙트를 요구하였고. 그에 따른
                인터렉션 작업에 가장 집중 하였습니다.
              </div>
            </div>
            <div className="image_area">
              <img src={subimage02} alt="상세설명" />
            </div>
            <div className="main_description">
              가장 공을 들인 작업은 버블형식의 네비게이션이였습니다.
              <br />
              이벤트 상단위의 버블이 각 섹션 별 움직이는 작업으로, 해당
              인터랙션을 이용하여 사용자에게 보다 더 풍부한 경험을 전달할 수
              있겠다 라는 생각을 가지게 되어 시안을 확인 후 직접 제안하고 구현한
              작업이였습니다.
            </div>
            <div className="image_area">
              <img src={subimage03} alt="상세설명" />
            </div>
            <div className="main_description">
              기존에 회사에서 사용하던 방식이 아닌, 새로운 방식의 작업이였기
              때문에 기본적으로 사용하는 네비게이션 마크업 위에 버블 형식의
              모형을 가상으로 넣어 해당 위치에 맞게 버블 위치값이 변경되도록
              작업을 기획하였습니다.
            </div>
            <div className="image_area">
              <img src={subimage04} alt="상세설명" />
            </div>
            <div className="main_description">
              따라서 전체적인 이벤트작용에 따라 버블이 해당 요소의
              위치값(left)으로 이동 되도록 구현이 되었습니다.
            </div>
            <div className="image_area">
              <img src={subimage05} alt="상세설명" />
            </div>
            <div className="main_description">
              도서 리스트 부분 역시, 데이터 양이 방대하여 json파일을 이용해
              연결하는 방식을 사용하였습니다.
              <div className="sub_description">
                상단 아카이브 팝업 데이터 :
                https://contents.kyobobook.co.kr/pmtn/2024/book/241128_library/archive.json{' '}
                <br />
                하단 책장 도서 및 팝업 데이터 :
                https://contents.kyobobook.co.kr/pmtn/2024/book/241128_library/pop_up02/publishing.json
              </div>
            </div>
            <div className="main_description">
              [결과]
              <br />
              <br />
              마케팅 적인 수익을 창출했던 큰 이벤트는 아니였으나, 전반적인 사내
              내부에서 해당 인터랙션에 대한 반응이 뜨거웠던 좋은 결과를
              가져다주었습니다. 작업시간 3일. 다른 업무와 병렬적으로 진행하였던
              작업이라 적은 시간이였으나, 해당 시간내에 최선을 다한 결과를 더
              가져다 주지 못해 조금 아쉬움이 남아있습니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LibraryEvent
