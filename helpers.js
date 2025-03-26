function getRandomColor() {
    return new THREE.Color(
        Math.random() * 0.5 + 0.5,
        Math.random() * 0.5 + 0.5,
        Math.random() * 0.5 + 0.5
    );
}

function getRandomPosition(radius = 5) {
    return new THREE.Vector3(
        (Math.random() - 0.5) * radius * 2,
        Math.random() * radius,
        (Math.random() - 0.5) * radius * 2
    );
}

function updateShapeCount(count) {
    document.getElementById('shapeCount').textContent = `${count} shape${count !== 1 ? 's' : ''}`;
}

let lastTime = performance.now();
let frameCount = 0;
let fps = 0;

function updateFPS() {
    const now = performance.now();
    frameCount++;
    
    if (now >= lastTime + 1000) {
        fps = Math.round((frameCount * 1000) / (now - lastTime));
        document.getElementById('fpsCounter').textContent = `${fps} FPS`;
        frameCount = 0;
        lastTime = now;
    }
    
    requestAnimationFrame(updateFPS);
}

updateFPS();