import subimage01 from '../../../assets/page/UIdevPage/e00_01.png'
import subimage02 from '../../../assets/page/UIdevPage/e00_02.jpg'
import Navigation from '../../../components/Navigation'

function CompanyPage() {
  const handleOpenPopup = () => {
    alert('개발 완료되었습니다.\n현재 런칭 준비중입니다.')
  }

  return (
    <div className="page_container">
      <Navigation />
      <div className="cotent_wrap">
        <div className="page_title_wrap">
          <h2 className="page_title">교보문고 회사소개 페이지 리액트 리뉴얼</h2>
          {/* <a
            className="page_btn ghost_btn"
            href="https://cmpy.kyobobook.co.kr/story-room"
            target="_blank"
            rel="noopener noreferrer"
          >
            런칭 페이지 바로가기
          </a> */}
          <button
            type="button"
            className="page_btn ghost_btn"
            onClick={handleOpenPopup}
          >
            런칭 페이지 바로가기
          </button>
        </div>
        <div className="sections">
          <div className="inner">
            <div className="intro_box">
              2026 교보문고 회사소개 페이지 리뉴얼
            </div>
            <div className="image_area">
              <img src={subimage01} alt="상세설명" />
            </div>
            <div className="section_title">
              <span>TypeScript</span>
              <span>Image CDN</span>
              <span>Tailwind</span>
              <span>git fork</span>
            </div>
            <div className="main_description">
              브랜드커뮤니케이션팀의 요청으로 기존 회사소개 페이지 리뉴얼 작업을
              진행했습니다. 기존 HTML 퍼블리싱 구조에서 React + TypeScript 기반
              프로젝트로 전환하였으며, 현재는 콘텐츠 작업으로 인해 미런칭
              상태이나 개발은 완료된 상황입니다.
              <br />
              <br />
              <br />
              <strong>[주요 작업 내용]</strong>
              <div className="sub_description">
                <br />- 리스트 구조 개선 및 컴포넌트화
                <br />- 리스트 및 상세 페이지 반응형 스타일 구현
                <br />- 리스트 및 상세 페이지 데이터 호출을 위한 util 환경 구축
                <br />- 카테고리 API 중복 호출 방지를 위한 Context 분리 및 상태
                관리
              </div>
            </div>

            <div className="image_area">
              <img src={subimage02} alt="상세설명" />
            </div>

            <div className="main_description">
              <strong>[핵심 작업 내용]</strong>
              <div className="sub_description">
                <br />- 페이지 탭 이동 시 카테고리 API가 중복 호출되는 이슈가
                있었으며, 이를 Context를 활용한 전역 상태 관리 방식으로 개선하여
                불필요한 API 호출을 제거했습니다.
                <br />- 회사소개 페이지 구조상 상세 페이지의 메인 배너 이미지가
                리스트 영역에서도 동일하게 사용되는 구조였기 때문에, 초기 로딩
                시 발생하는 성능 저하를 개선하기 위해 이미지 CDN의 `fit-in`
                리사이징 기능을 활용했습니다.
                <br />- 관리자 도구에서 전달받는 원본 이미지 URL을 기반으로,
                프론트에서 util을 통해 사이즈별 URL을 동적으로 가공하여 최적화된
                이미지를 적용했습니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyPage
