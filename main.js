import { createPlanet, createText } from "./shapes.js";
import { initHandTracking, hand } from "./handTracking.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const planet = createPlanet(scene);
createText(scene);

initHandTracking();

function animate() {
  requestAnimationFrame(animate);

  planet.rotation.y += 0.002;

  if (hand.active) {
    planet.rotation.x = hand.y * 0.2;
    planet.rotation.y = hand.x * 0.2;
  }

  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});