import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Stars } from "@react-three/drei";
import type { Mesh } from "three";
import "./App.css";

function Cube() {
  const cubeRef = useRef<Mesh>(null!);

  useFrame((_, delta) => {
    cubeRef.current.rotation.x += delta * 0.3;
    cubeRef.current.rotation.y += delta * 0.6;
  });

  return (
    <Float speed={2} floatIntensity={0.8}>
      <mesh ref={cubeRef}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial
          color="#8b5cf6"
          metalness={0.7}
          roughness={0.2}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
      <ambientLight intensity={1.5} />
      <pointLight position={[3, 3, 3]} intensity={30} color="#a78bfa" />
      <pointLight position={[-3, -2, 2]} intensity={20} color="#22d3ee" />

      <Stars radius={80} depth={40} count={1800} factor={4} fade />
      <Cube />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

export default function App() {
  return (
    <main className="website">
      <nav className="navbar">
        <a className="logo" href="#">NEXORA<span>.</span></a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
        </div>

        <a href="#features" className="nav-cta">Let's Talk ↗</a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <span className="eyebrow">
            ✦ THE NEXT DIMENSION OF WEB
          </span>

          <h1>
            We Build
            <br />
            <span>Beyond Reality.</span>
          </h1>

          <p>
            Immersive digital experiences combining creative design,
            interactive 3D and modern web technology.
          </p>

          <div className="hero-buttons">
            <a className="primary-btn" href="#features">
              Explore Experience ↗
            </a>
            <a className="secondary-btn" href="#about">
              Discover More
            </a>
          </div>

          <div className="hero-stats">
            <div><strong>3D</strong><small>Experiences</small></div>
            <div><strong>100%</strong><small>Creative Vision</small></div>
            <div><strong>∞</strong><small>Possibilities</small></div>
          </div>
        </div>

        <div className="hero-visual">
          <Scene />
          <span className="orbit-label label-one">CREATIVE / 01</span>
          <span className="orbit-label label-two">DESIGN THE FUTURE</span>
        </div>
      </section>

      <section className="features" id="features">
        <span className="eyebrow">WHAT WE DO</span>
        <h2>Digital, but <span>different.</span></h2>

        <div className="feature-grid">
          <article className="feature-card">
            <span>✳</span>
            <h3>Immersive 3D</h3>
            <p>Interactive objects and beautiful experiences in your browser.</p>
          </article>

          <article className="feature-card">
            <span>◈</span>
            <h3>Modern Design</h3>
            <p>Clean interfaces, bold typography and thoughtful details.</p>
          </article>

          <article className="feature-card">
            <span>✦</span>
            <h3>Creative Code</h3>
            <p>React-powered experiences built for the modern web.</p>
          </article>
        </div>
      </section>

      <footer id="about">
        <a className="logo" href="#home">NEXORA<span>.</span></a>
        <p>Designed beyond the ordinary. © 2026</p>
      </footer>
    </main>
  );
}