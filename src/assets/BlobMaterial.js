import * as THREE from 'three'
import { shaderMaterial } from '@react-three/drei'
import { extend } from '@react-three/fiber'

// BlobMaterial 정의
const BlobMaterial = shaderMaterial(
  {
    time: 0,
    color1: new THREE.Color('#fff'), // 보라색
    color2: new THREE.Color('#fff'), // 파란색
    specularColor: new THREE.Color('#ffffff'), // 스펙큘러 하이라이트 색상 (흰색)
    shininess: 50, // 반짝임의 강도 (높은 값)
    waveIntensity: 0.3, // 초기 파동 강도
  },
  `
// Vertex Shader
  varying vec2 vUv;
  varying vec3 vNormal; // 노멀 벡터
  uniform float time;
  uniform float waveIntensity; // 파동 강도
  void main() {
    vUv = uv;
    vNormal = normalize(normal);
    vec3 pos = position;
    float wave = sin(pos.x * 15.0 + time * 2.0) * waveIntensity;
    pos.z += wave;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`,
  `
// Fragment Shader
  varying vec2 vUv;
  varying vec3 vNormal;
  uniform vec3 color1;
  uniform vec3 color2;
  uniform vec3 specularColor;
  uniform float shininess;

  void main() {
    float u = vUv.x;
    float v = vUv.y;

    // 색상 영역을 균등하게 나누어 배치
    vec3 finalColor = mix(color1, color2, smoothstep(0.1, 0.6, v));

    // 조명 방향 설정
    vec3 lightDir = normalize(vec3(0.5, 0.8, 2.5)); // 우측 위 방향
    vec3 viewDir = normalize(-gl_FragCoord.xyz); // 카메라 방향

    // 반사 벡터 계산
    vec3 reflectDir = reflect(viewDir, vNormal);
    float spec = pow(max(dot(reflectDir, lightDir), 0.3), shininess);

    // 조명 및 반사 효과
    vec3 ambient = vec3(0.0); // 주변광
    vec3 diffuse = max(dot(vNormal, lightDir), 0.2) * finalColor;
    vec3 specular = specularColor * spec;

    gl_FragColor = vec4(ambient + diffuse + specular, 1.0);
  }
`
)

extend({ BlobMaterial })

export default BlobMaterial
