import * as THREE from 'three';

export function addLighting(scene) {
  // Add ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambientLight);

  // Add directional light (sun-like)
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 5, 5);
  directionalLight.castShadow = true;
  
  // Configure shadow properties
  directionalLight.shadow.mapSize.width = 1024;
  directionalLight.shadow.mapSize.height = 1024;
  directionalLight.shadow.camera.near = 0.5;
  directionalLight.shadow.camera.far = 50;
  directionalLight.shadow.camera.left = -10;
  directionalLight.shadow.camera.right = 10;
  directionalLight.shadow.camera.top = 10;
  directionalLight.shadow.camera.bottom = -10;
  
  scene.add(directionalLight);

  // Add a second directional light from opposite direction for better illumination
  const backLight = new THREE.DirectionalLight(0xffffff, 0.5);
  backLight.position.set(-5, 3, -5);
  scene.add(backLight);

  // Optional: Add light helper for debugging
  // const helper = new THREE.DirectionalLightHelper(directionalLight);
  // scene.add(helper);
}
