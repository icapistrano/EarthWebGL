import './css/App.css';
import Earth from './js/components/Earth';
import SceneManager from './js/components/SceneManager';

const canvas: HTMLCanvasElement = document.getElementById('webgl-canvas');

const sceneManager = new SceneManager(canvas);
sceneManager.setAxesHelper(5);
sceneManager.addAmbientLight('0xffffff');

const earth = new Earth(sceneManager.scene);

/* RESIZE */
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  sceneManager.onWindowResize();
})

/* GAME LOOP */
function animate(): void {
  requestAnimationFrame(animate);
  sceneManager.update();
}


animate();