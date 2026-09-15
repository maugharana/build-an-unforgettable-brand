import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sparkles } from "@react-three/drei";

const SECTION_CONFIG = [
  { position: [1.6, 0.1, 0], scale: 1.55, distort: 0.42, speed: 1.1, rotSpeed: 0.09 },
  { position: [-1.7, -0.15, -1], scale: 1.05, distort: 0.22, speed: 0.7, rotSpeed: 0.05 },
  { position: [1.5, 0.35, -0.5], scale: 1.25, distort: 0.55, speed: 1.6, rotSpeed: 0.12 },
  { position: [-1.5, 0.05, 0], scale: 1.15, distort: 0.3, speed: 0.9, rotSpeed: 0.06 },
  { position: [1.4, -0.2, -1], scale: 0.95, distort: 0.18, speed: 0.6, rotSpeed: 0.04 },
  { position: [0, -0.05, -1.2], scale: 1.35, distort: 0.38, speed: 1.2, rotSpeed: 0.1 },
];

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function Centerpiece({ activeIndex }) {
  const meshRef = useRef(null);
  const materialRef = useRef(null);
  const state = useRef({ ...SECTION_CONFIG[0] });

  useFrame((_, delta) => {
    const target = SECTION_CONFIG[activeIndex] ?? SECTION_CONFIG[0];
    const s = state.current;
    const t = Math.min(delta * 1.6, 1);

    s.position[0] = lerp(s.position[0], target.position[0], t);
    s.position[1] = lerp(s.position[1], target.position[1], t);
    s.position[2] = lerp(s.position[2], target.position[2], t);
    s.scale = lerp(s.scale, target.scale, t);
    s.distort = lerp(s.distort, target.distort, t);
    s.speed = lerp(s.speed, target.speed, t);
    s.rotSpeed = lerp(s.rotSpeed, target.rotSpeed, t);

    if (meshRef.current) {
      meshRef.current.position.set(s.position[0], s.position[1], s.position[2]);
      meshRef.current.scale.setScalar(s.scale);
      meshRef.current.rotation.x += s.rotSpeed * delta;
      meshRef.current.rotation.y += s.rotSpeed * 1.4 * delta;
    }
    if (materialRef.current) {
      materialRef.current.distort = s.distort;
      materialRef.current.speed = s.speed;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1, 6]} />
      <MeshDistortMaterial
        ref={materialRef}
        color="#d9a441"
        roughness={0.25}
        metalness={0.65}
        wireframe
        distort={0.4}
        speed={1}
      />
    </mesh>
  );
}

function Rig() {
  const group = useRef(null);
  useFrame((s) => {
    if (!group.current) return;
    const x = (s.pointer.x * Math.PI) / 40;
    const y = (s.pointer.y * Math.PI) / 40;
    group.current.rotation.y = lerp(group.current.rotation.y, x, 0.03);
    group.current.rotation.x = lerp(group.current.rotation.x, -y, 0.03);
  });
  return null;
}

export default function Scene({ activeIndex }) {
  const dpr = useMemo(() => (typeof window !== "undefined" ? Math.min(window.devicePixelRatio, 2) : 1), []);

  return (
    <div className="canvas-root" aria-hidden="true">
      <Canvas
        dpr={dpr}
        camera={{ position: [0, 0, 5.2], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#0a0a0c"]} />
        <fog attach="fog" args={["#0a0a0c", 6, 11]} />
        <ambientLight intensity={0.35} />
        <pointLight position={[4, 3, 4]} intensity={1.4} color="#d9a441" />
        <pointLight position={[-4, -2, -3]} intensity={0.5} color="#5c6cff" />
        <Suspense fallback={null}>
          <Centerpiece activeIndex={activeIndex} />
          <Sparkles count={90} scale={[9, 6, 6]} size={1.4} speed={0.25} color="#e8c473" opacity={0.5} />
        </Suspense>
        <Rig />
      </Canvas>
    </div>
  );
}
