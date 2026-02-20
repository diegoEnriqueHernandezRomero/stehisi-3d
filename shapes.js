export function createPlanet(scene) {
  const geometry = new THREE.BufferGeometry();
  const count = 12000;
  const positions = [];

  for (let i = 0; i < count; i++) {
    const r = 3;
    const t = Math.random() * Math.PI * 2;
    const p = Math.acos(2 * Math.random() - 1);

    positions.push(
      r * Math.sin(p) * Math.cos(t),
      r * Math.sin(p) * Math.sin(t),
      r * Math.cos(p)
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
  const geo = new THREE.BufferGeometry();
  const positions = [];

  const text = "STEHISI";
  let xOffset = -3;

  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < 400; j++) {
      positions.push(
        xOffset + Math.random() * 0.6,
        4 + Math.random() * 0.8,
        Math.random() * 0.4
      );
    }
    xOffset += 1.1;
  }

  geo.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
  );

  const mat = new THREE.PointsMaterial({
    color: 0xff66cc,
    size: 0.04
  });

  const points = new THREE.Points(geo, mat);
  scene.add(points);
}