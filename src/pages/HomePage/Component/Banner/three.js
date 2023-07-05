import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

let camera, scene, renderer;
// let geometry, material, mesh;
const loader = new GLTFLoader();

export function init() {
  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    10
  );
  scene = new THREE.Scene();
  camera.position.z = 10;

  const light = new THREE.AmbientLight(0xffffff, 1);
  scene.add(light);

  //   geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  //   material = new THREE.MeshNormalMaterial();

  //   mesh = new THREE.Mesh(geometry, material);
  //   scene.add(mesh);
  loader.load("../../../../assets/img/three/scene.gltf", (gltf) => {
    let model = gltf.scene;
    scene.add(model);
  });

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animation);
  document.body.appendChild(renderer.domElement);
}
function animation(time) {
  console.log("heloo");
  //   mesh.rotation.x = time / 2000;
  //   mesh.rotation.y = time / 1000;

  renderer.render(scene, camera);
}
