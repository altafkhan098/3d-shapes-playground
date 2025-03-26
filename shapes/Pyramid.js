class Pyramid {
    constructor() {
      this.geometry = new THREE.ConeGeometry(0.8, 1.5, 4);
      this.material = new THREE.MeshStandardMaterial({ 
        color: getRandomColor(),
        roughness: 0.5,
        metalness: 0.5
      });
      this.mesh = new THREE.Mesh(this.geometry, this.material);
      this.mesh.castShadow = true;
      this.speed = Math.random() * 0.02 + 0.01;
    }
  
    animate() {
      this.mesh.rotation.y += this.speed;
    }
  
    setColor(color) {
      this.material.color.set(color);
    }
  }