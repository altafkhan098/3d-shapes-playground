class Torus {
    constructor() {
      this.geometry = new THREE.TorusGeometry(0.6, 0.2, 16, 32);
      this.material = new THREE.MeshStandardMaterial({ 
        color: getRandomColor(),
        roughness: 0.1,
        metalness: 0.9
      });
      this.mesh = new THREE.Mesh(this.geometry, this.material);
      this.mesh.castShadow = true;
      this.speed = Math.random() * 0.02 + 0.01;
    }
  
    animate() {
      this.mesh.rotation.x += this.speed;
      this.mesh.rotation.y += this.speed;
    }
  
    setColor(color) {
      this.material.color.set(color);
    }
  }