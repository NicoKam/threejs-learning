import React from "react";
// import PropTypes from "prop-types";
import THREE from "../../three";


class ThreeDemo extends React.Component {
  divRef = React.createRef();

  componentDidMount() {
    const div = this.divRef.current;
    const { width, height } = div.getBoundingClientRect();
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 1);
    div.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1, 0, 0, 0);
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const meshMaterial = new THREE.MeshPhongMaterial({
      color: 0x156289,
      emissive: 0x072534,
      side: THREE.DoubleSide,
      flatShading: true,
    });
    const cube = new THREE.Mesh(geometry, meshMaterial);
    scene.add(cube);

    camera.position.z = 5;

    const lights = [];
    lights[0] = new THREE.PointLight(0xffffff, 1, 0);
    lights[1] = new THREE.PointLight(0xffffff, 1, 0);
    lights[2] = new THREE.PointLight(0xffffff, 1, 0);

    lights[0].position.set(0, 200, 0);
    lights[1].position.set(100, 200, 100);
    lights[2].position.set(-100, -200, -100);

    scene.add(lights[0]);
    scene.add(lights[1]);
    scene.add(lights[2]);


    const animate = function () {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }

  render() {
    return (
      <div ref={this.divRef} style={{ height: "100%", overflow: "hidden" }} />
    );
  }
};


export default ThreeDemo;
