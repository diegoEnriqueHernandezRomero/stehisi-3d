export function createPlanet(scene) {
  const geometry = new THREE.BufferGeometry();
  const count = 12000;
  const positions = [];

  for (let i = 0; i < count; i++) {
    const r = 3;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    positions.push(
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.sin(phi) * Math.sin(theta),
      r * Math.cos(phi)
    );
  }

  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
  );

  const material = new THREE.PointsMaterial({
    color: 0x00ffff,
    size: 0.03
  });

  const planet = new THREE.Points(geometry, material);
  scene.add(planet);

  return planet;
}

export function createText(scene) {
  const loader = new THREE.FontLoader();

  loader.load(
    "https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",
    font => {
      const geo = new THREE.TextGeometry("STEHISI", {
        font,
        size: 0.7,
        height: 0.01
      });

      geo.center();

      const mat = new THREE.PointsMaterial({
        color: 0xff66cc,
        size: 0.04
      });

      const text = new THREE.Points(geo, mat);
      text.position.y = 4;
      scene.add(text);
    }
  );
}