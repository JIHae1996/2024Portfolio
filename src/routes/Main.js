import { useRef } from 'react'
import '../styles/pages/main.scss'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, Plane } from '@react-three/drei'
// import BlobMaterial from '../assets/BlobMaterial'

import txt_ani from '../assets/txt_ani.png'

function Blob() {
  const materialRef = useRef()
  const speedFactor = 4.0 // 애니메이션 속도 조절 인자

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value =
        clock.getElapsedTime() * speedFactor
    }
  })

  return (
    <Sphere args={[1.5, 82, 82]} position={[0, 0, 0]} castShadow receiveShadow>
      <blobMaterial ref={materialRef} attach="material" />
    </Sphere>
  )
}

function Wave() {
  const meshRef = useRef()

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
    const { array } = meshRef.current.geometry.attributes.position
    for (let i = 0; i < array.length; i += 3) {
      const x = array[i]
      const y = array[i + 1]

      // z 변형 범위를 줄임
      const waveX1 = 0.25 * Math.sin(x * 1 + time) // 원래 0.5에서 0.25로 변경
      const waveX2 = 0.24 * Math.sin(x * 1 + time * 0.5) // 원래 0.25에서 0.125로 변경
      const waveY1 = 0.25 * Math.sin(y * 1 + time * 0.8) // 원래 0.1에서 0.05로 변경

      array[i + 2] = waveX1 + waveX2 + waveY1
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true
  })

  // Plane의 크기를 크게 확장
  return (
    <Plane
      ref={meshRef}
      args={[20, 30, 50, 64]} // Plane의 크기 조정
      position={[0, -2, -5]} // 뒤로 배치
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <meshStandardMaterial color="#eee" wireframe />
    </Plane>
  )
}

function Main() {
  return (
    <div className="main_container">
      <div className="inner">
        <div className="canvas_container">
          <Canvas
            style={{
              display: 'block',
              width: '100%',
              height: '100vh',
              overflow: 'hidden', // 전체 배경을 차지하도록
            }}
            shadows
          >
            <ambientLight intensity={0.2} />
            <directionalLight
              position={[10, 20, 10]}
              intensity={1}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
              shadow-camera-near={0.5}
              shadow-camera-far={50}
            />
            <spotLight
              position={[15, 15, 15]}
              angle={0.3}
              penumbra={1}
              intensity={1}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
              shadow-camera-near={1}
              shadow-camera-far={100}
            />
            <Wave />
          </Canvas>
        </div>
        <div className="intro_text_area">
          <strong>Web Publisher</strong>
          <p className="intro_txt">
            마크업 개발 &amp;
            <br />
            인터랙션 <span>퍼블리셔</span>
          </p>
          <p className="dis_txt">
            안녕하세요! 이벤트 퍼블리싱과 UI 개발을 담당하고 있는{' '}
            <span>이지해</span>입니다.
            <br />
            <br />
            2021년부터 2022년까지는 스타트업에서 디자이너로 근무하였고, 2023년
            1월부터 2025년까지는 교보문고에서 퍼블리셔로 일했습니다.
            <br />
            <br />
            2026년부터는 교보문고 온라인몰 개발팀에서 프론트엔드 개발자로 업무를
            이어가고 있습니다.
          </p>
        </div>
        <div class="txtMotion05">
          <div class="marquee">
            <img src={txt_ani} alt="Jihae" />
          </div>
          <div class="marquee">
            <img src={txt_ani} alt="Jihae" />
          </div>
          <div class="marquee">
            <img src={txt_ani} alt="Jihae" />
          </div>
          <div class="marquee">
            <img src={txt_ani} alt="Jihae" />
          </div>
          <div class="marquee">
            <img src={txt_ani} alt="Jihae" />
          </div>
        </div>
        <div className="contects">
          <div className="e_mail">easysun@gmail.com</div>
          <div className="copy">Made by JiHae</div>
        </div>
      </div>
    </div>
  )
}

export default Main
