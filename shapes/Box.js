class Box {
    constructor() {
      this.geometry = new THREE.BoxGeometry(1, 1, 1);
      this.material = new THREE.MeshStandardMaterial({ 
        color: getRandomColor(),
        roughness: 0.4,
        metalness: 0.6
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