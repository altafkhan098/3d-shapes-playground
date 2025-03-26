# 3D Shapes Playground 🌐✨

<video src="./preview/3d playground.mp4" controls autoplay loop muted width="800"></video>

An immersive 3D environment built with Three.js that allows users to create, manipulate, and animate geometric shapes in real-time. Perfect for learning WebGL concepts or as a starter template for 3D web applications.

---

## Table of Contents 📑
1. [Features](#-features)
2. [Technical Architecture](#-technical-architecture)
3. [Installation Guide](#-installation-guide)
4. [Usage Documentation](#-usage-documentation)
5. [Development Guide](#-development-guide)
6. [Performance Optimization](#-performance-optimization)
7. [Future Roadmap](#-future-roadmap)
8. [Contributing](#-contributing)
9. [License](#-license)

---

## ✨ Features

### Core Functionality
- **Shape Creation**:
  - 🧊 Box (1x1x1 units)
  - 🔵 Sphere (0.8 radius)
  - 🔺 Pyramid (4-sided cone)
  - 🪵 Cylinder (0.6 radius)
  - 🍩 Torus (doughnut shape)
  
- **Scene Controls**:
  - **Animation Toggle**: Play/Pause all animations
  - **Color Randomizer**: Apply random materials to all shapes
  - **Clear Scene**: Remove all objects with memory cleanup

### Advanced Features
- **Real-time Metrics**:
  - FPS counter (60FPS target)
  - Shape counter (max 50 shapes)
- **Responsive Design**:
  - Adapts to mobile/desktop viewports
  - Touch-friendly controls (partial support)
- **Visual Effects**:
  - Dynamic shadows
  - Environment fog
  - Metallic/roughness materials

---

## 📝 Technical Architecture  
The project follows a modular architecture for better maintainability and scalability:

- **index.html**: Main entry point, includes UI elements and links required scripts.
- **style.css**: Defines styles for UI components and responsiveness.
- **main.js**: Core script that initializes the scene, handles interactions, and manages rendering.
- **helpers.js**: Utility functions for random colors, positions, and FPS tracking.
- **Shapes Module**: Individual shape classes (Box.js, Sphere.js, etc.) for easy extension.
- **Three.js Library**: Used for rendering 3D graphics and handling camera interactions.

## 📈 Performance Optimization  
To ensure smooth performance and avoid lag, the following optimizations have been applied:  

- **Shape Limit**: A maximum of 50 shapes are allowed to maintain a stable FPS.  
- **Efficient Rendering**: Enabled `requestAnimationFrame()` with optimized draw calls.  
- **Shadow & Light Optimization**: Reduced shadow map size and limited the number of dynamic lights.  
- **Memory Management**: Disposing of unused geometries and materials when clearing the scene.  
- **Adaptive Resolution**: Adjusting pixel ratio based on device capabilities to balance quality and performance.  
- **Fog Implementation**: Helps render distant objects efficiently, reducing GPU load. 

## 🚀 Installation Guide  
1. Clone the repository:  
   ```bash
   git clone https://github.com/altafkhan098/3d-shapes-playground.git
   cd 3d-shapes-playground
   ```  
2. Open `index.html` in a browser to run locally.


## 💡 Usage Documentation  
#### Basic Controls  
- **Left-click + drag**: Rotate the scene  
- **Right-click + drag**: Pan the view  
- **Scroll wheel**: Zoom in/out 


## 🛠️ Development Guide  
- Modify `helpers.js` for utility functions.  
- Edit `main.js` for core scene logic.  
- Customize `style.css` for UI styling. 

## 📌 Future Roadmap  
- Additional shape types (e.g., cones, custom models)  
- Advanced physics & collision detection  
- UI improvements & interactive tutorials  

## 🤝 Contributing  
PRs are welcome! Feel free to suggest new features or optimizations.  

## 📝 License  
MIT License – Free to use and modify.  

---
_If you’ve read this far, congratulations! You are now officially 3D-obsessed. Take a break, go outside, and stare at some real-life cubes for inspiration. Or better yet, go add more shapes to this playground! 🚀😂_
