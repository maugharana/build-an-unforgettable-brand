import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PALETTE = ["#d9a441", "#e8c473", "#7d8bff", "#e0745c", "#f3f1ec"];

const SECTION_CONFIG = [
  { radius: 1.05, rotSpeed: 0.045, spread: 1 },
  { radius: 0.75, rotSpeed: 0.03, spread: 0.75 },
  { radius: 1.15, rotSpeed: 0.07, spread: 1.15 },
  { radius: 0.85, rotSpeed: 0.035, spread: 0.85 },
  { radius: 0.68, rotSpeed: 0.025, spread: 0.65 },
  { radius: 0.92, rotSpeed: 0.04, spread: 0.9 },
  { radius: 1, rotSpeed: 0.05, spread: 1 },
];

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function useParticleGeometry(count) {
  return useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      // Points scattered inside a sphere, denser near the surface for a "cloud shell" look.
      const r = 1 + Math.pow(Math.random(), 0.5) * 0.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      color.set(PALETTE[Math.floor(Math.random() * PALETTE.length)]);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return { positions, colors };
  }, [count]);
}

function ParticleCloud({ activeIndex }) {
  const pointsRef = useRef(null);
  const { positions, colors } = useParticleGeometry(1100);
  const state = useRef({ ...SECTION_CONFIG[0] });

  useFrame((_, delta) => {
    const target = SECTION_CONFIG[activeIndex] ?? SECTION_CONFIG[0];
    const s = state.current;
    const t = Math.min(delta * 1.4, 1);

    s.radius = lerp(s.radius, target.radius, t);
    s.rotSpeed = lerp(s.rotSpeed, target.rotSpeed, t);
    s.spread = lerp(s.spread, target.spread, t);

    if (pointsRef.current) {
      pointsRef.current.scale.setScalar(s.radius);
      pointsRef.current.rotation.y += s.rotSpeed * delta;
      pointsRef.current.rotation.x += s.rotSpeed * 0.4 * delta;
    }
  });

  return (
    <points ref={pointsRef} position={[1.7, 0.1, -1]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.026}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function Rig() {
  const group = useRef(null);
  useFrame((s) => {
    if (!group.current) return;
    const x = (s.pointer.x * Math.PI) / 30;
    const y = (s.pointer.y * Math.PI) / 30;
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
        <fog attach="fog" args={["#0a0a0c", 4, 8.5]} />
        <ambientLight intensity={0.4} />
        <Suspense fallback={null}>
          <ParticleCloud activeIndex={activeIndex} />
        </Suspense>
        <Rig />
      </Canvas>
    </div>
  );
}
