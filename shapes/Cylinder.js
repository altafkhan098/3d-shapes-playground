class Cylinder {
    constructor() {
      this.geometry = new THREE.CylinderGeometry(0.6, 0.6, 1.2, 32);
      this.material = new THREE.MeshStandardMaterial({ 
        color: getRandomColor(),
        roughness: 0.3,
        metalness: 0.7
      });
      this.mesh = new THREE.Mesh(this.geometry, this.material);
      this.mesh.castShadow = true;
      this.speed = Math.random() * 0.02 + 0.01;
    }
  
    animate() {
      this.mesh.rotation.x += this.speed;
    }
  
    setColor(color) {
      this.material.color.set(color);
    }
  }