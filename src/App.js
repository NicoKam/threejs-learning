import React, { useEffect, useRef } from 'react';
import { BufferGeometry, Line, LineBasicMaterial, PerspectiveCamera, Scene, Vector3, WebGLRenderer } from 'three';
import './App.css';

function threeStart(root) {
  var renderer = new WebGLRenderer();
  renderer.setSize(root.clientWidth, root.clientHeight);
  renderer.setClearColor(0xF7f7f7,1.0);

  root.appendChild(renderer.domElement);

  var camera = new PerspectiveCamera(45, root.clientWidth / root.clientHeight, 1, 500);
  camera.position.set(0, 0, 100);
  camera.lookAt(0, 0, 0);

  var scene = new Scene();
  var material = new LineBasicMaterial({ color: 0x0000ff });

  var points = [];
  points.push(new Vector3(-10, 0, 0));
  points.push(new Vector3(0, 10, 0));
  points.push(new Vector3(10, 0, 0));

  var geometry = new BufferGeometry().setFromPoints(points);
  var line = new Line(geometry, material);
  scene.add(line);
  renderer.render(scene, camera);
}
function App() {
  const ref = useRef();
  useEffect(() => {
    threeStart(ref.current);
  }, []);
  return <div className="App" ref={ref} style={{ width: 700, height: 600 }}></div>;
}

export default App;
