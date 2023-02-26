// bg.js

// Set up the scene, camera and renderer
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Create a star field
var starGeometry = new THREE.Geometry();
for (var i = 0; i < 1000; i++) {
  var star = new THREE.Vector3(
    Math.random() * 2000 - 1000,
    Math.random() * 2000 - 1000,
    Math.random() * 2000 - 1000
  );
  starGeometry.vertices.push(star);
}
var starMaterial = new THREE.PointsMaterial({color: 0xffffff});
var starField = new THREE.Points(starGeometry, starMaterial);
scene.add(starField);

// Add a directional light to the scene
var light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1);
scene.add(light);

// Render the scene
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
