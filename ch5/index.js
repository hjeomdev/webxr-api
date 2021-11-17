import * as THREE from './modules/three.module.js';

main();
function main() {
    // create a context
    const canvas = document.querySelector("#c");
    const gl = new THREE.WebGLRenderer({
        canvas,
        antialias: true
    });

    // create and set a camera
    const angleOfView = 55;
    const aspectRatio = canvas.clientWidth / canvas.clientHeight;
    const nearPlane = 0.1;
    const farPlane = 100;
    const camera = new THREE.PerspectiveCamera(
        angleOfView, // range of view (radian)
        aspectRatio, // ratio of screen
        nearPlane, // minimum distance of camera
        farPlane // maximum distance of camera
    );
    camera.position.set(0, 8, 30);

    // create the scene
    const scene = new THREE.Scene();

    // create the cube
    const cubeSize = 4;
    const cubeGeometry = new THREE.BoxGeometry(
        cubeSize, // width of cube
        cubeSize, // height of cube
        cubeSize // depth of cube
    );
    const cubeMaterial = new THREE.MeshPhongMaterial({
        color: 'pink'
    })

    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(cubeSize + 1, cubeSize + 1, 0);
    scene.add(cube);

    // create the light
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    scene.add(light);

    // drawing
    function draw() {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;       
        cube.rotation.z += 0.01;

        gl.render(scene, camera);
        requestAnimationFrame(draw);
    }

    requestAnimationFrame(draw);

}