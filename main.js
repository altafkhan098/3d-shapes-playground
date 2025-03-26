const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111122);
scene.fog = new THREE.FogExp2(0x111122, 0.02);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 15);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
document.getElementById('canvas-container').appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.minDistance = 5;
controls.maxDistance = 50;

const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 1024; 
directionalLight.shadow.mapSize.height = 1024;
scene.add(directionalLight);

const groundGeometry = new THREE.PlaneGeometry(50, 50);
const groundMaterial = new THREE.MeshStandardMaterial({ 
  color: 0x333344,
  side: THREE.DoubleSide,
  roughness: 0.8,
  metalness: 0.1
});
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2;
ground.receiveShadow = true;
scene.add(ground);

const shapes = [];
let animateEnabled = true;
const MAX_SHAPES = 50; 

function createInitialShapes() {
  const initialShapes = [
    new Box(), new Sphere(), new Pyramid(), new Cylinder(), new Torus()
  ];
  
  initialShapes.forEach((shape, i) => {
    shape.mesh.position.x = (i - 2) * 3;
    shape.mesh.position.y = 1;
    scene.add(shape.mesh);
    shapes.push(shape);
  });
  
  updateShapeCount(shapes.length);
}

function setupEventListeners() {
  const shapeButtons = [
    { id: 'addBoxBtn', shape: Box },
    { id: 'addSphereBtn', shape: Sphere },
    { id: 'addPyramidBtn', shape: Pyramid },
    { id: 'addCylinderBtn', shape: Cylinder },
    { id: 'addTorusBtn', shape: Torus }
  ];
  
  shapeButtons.forEach(btn => {
    document.getElementById(btn.id).addEventListener('click', () => {
      if (shapes.length >= MAX_SHAPES) {
        alert(`Maximum ${MAX_SHAPES} shapes allowed!`);
        return;
      }
      const shape = new btn.shape();
      shape.mesh.position.copy(getRandomPosition(5));
      shape.mesh.position.y = 1;
      scene.add(shape.mesh);
      shapes.push(shape);
      updateShapeCount(shapes.length);
    });
  });

  document.getElementById('clearBtn').addEventListener('click', function() {
    shapes.forEach(shape => {
      scene.remove(shape.mesh);
      shape.geometry.dispose(); 
      shape.material.dispose();
    });
    shapes.length = 0;
    updateShapeCount(0);
    console.log("Cleared all shapes");
  });

  document.getElementById('animateBtn').addEventListener('click', function() {
    animateEnabled = !animateEnabled;
    const icon = this.querySelector('i');
    
    if (animateEnabled) {
        icon.className = 'fas fa-pause';
        this.innerHTML = '<i class="fas fa-pause"></i> Pause'; 
    } else {
        icon.className = 'fas fa-play';
        this.innerHTML = '<i class="fas fa-play"></i> Play';
    }
    
    console.log("Animation", animateEnabled ? "resumed" : "paused");
});

  document.getElementById('randomizeBtn').addEventListener('click', function() {
    shapes.forEach(shape => {
      if (shape.setColor) { 
        shape.setColor(getRandomColor());
      }
    });
    console.log("Randomized colors");
  });
}

function animate() {
  requestAnimationFrame(animate);
  
  if (animateEnabled) {
    shapes.forEach(shape => shape.animate());
  }
  
  controls.update();
  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});


createInitialShapes();
setupEventListeners();
animate();