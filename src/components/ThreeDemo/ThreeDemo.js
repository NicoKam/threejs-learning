import React from "react";
// import PropTypes from "prop-types";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
} from "../../three/three.module";

class ThreeDemo extends React.Component {
  divRef = React.createRef();

  componentDidMount() {
    const div = this.divRef.current;
    const { width, height } = div.getBoundingClientRect();
    const scene = new Scene();
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new WebGLRenderer();
    renderer.setSize(width, height);
    div.appendChild(renderer.domElement);

    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;
  }

  render() {
    return (
      <div ref={this.divRef} style={{ height: "100%", overflow: "hidden" }} />
    );
  }
};


export default ThreeDemo;
