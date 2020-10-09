import React, { useRef, useEffect } from 'react';
import { WebGLRenderer, PerspectiveCamera, Scene, LineBasicMaterial, Vector3, BufferGeometry, Line } from 'three';

function threeStart(root) {
  const renderer = new WebGLRenderer();
  renderer.setSize(root.clientWidth, root.clientHeight);
  renderer.setClearColor(0xf7f7f7, 1.0);

  root.appendChild(renderer.domElement);

  const camera = new PerspectiveCamera(45, root.clientWidth / root.clientHeight, 1, 500);
  camera.position.set(0, 0, 100);
  camera.lookAt(0, 0, 0);

  const scene = new Scene();
  const material = new LineBasicMaterial({ color: 0x0000ff });

  const points = [];
  points.push(new Vector3(-10, 0, 0));
  points.push(new Vector3(0, 10, 0));
  points.push(new Vector3(10, 0, 0));

  const geometry = new BufferGeometry().setFromPoints(points);
  const line = new Line(geometry, material);
  scene.add(line);
  renderer.render(scene, camera);
}
function HomePage() {
  const ref = useRef();
  useEffect(() => {
    threeStart(ref.current);
  }, []);
  return <div className="HomePage" ref={ref} style={{ width: 700, height: 600 }} />;
}

export default HomePage;
