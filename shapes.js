export function createPlanet(scene) {
  const geometry = new THREE.BufferGeometry();
  const count = 10000;
  const positions = [];

  for (let i = 0; i < count; i++) {
    const r = 3;
    const a = Math.random() * Math.PI * 2;
    const b = Math.acos(2 * Math.random() - 1);

    positions.push(
      r * Math.sin(b) * Math.cos(a),
      r * Math.sin(b) * Math.sin(a),
      r * Math.cos(b)
    );
  }

  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
  );

  const material = new THREE.PointsMaterial({
    color: 0x00ffff,
    size: 0.035
  });

  const planet = new THREE.Points(geometry, material);
  scene.add(planet);
  return planet;
}

export function createText(scene) {
  const geometry = new THREE.BufferGeometry();
  const positions = [];

  const text = "STEHISI";
  let x = -3;

  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < 300; j++) {
      positions.push(
        x + Math.random() * 0.6,
        4 + Math.random() * 0.8,
        Math.random() * 0.4
      );
    }
    x += 1.1;
  }

  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
  );

  const material = new THREE.PointsMaterial({
    color: 0xff66cc,
    size: 0.04
  });

  const textPoints = new THREE.Points(geometry, material);
  scene.add(textPoints);
}
