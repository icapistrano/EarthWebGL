import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  AxesHelper,
  AmbientLight
} from 'three';

export default class SceneManager {
  private canvas: HTMLCanvasElement;
  public scene: Scene;
  private camera: PerspectiveCamera;
  private renderer: WebGLRenderer;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.scene = this.initScene();

    this.camera = this.initCamera();
    this.camera.position.setZ(8);

    this.renderer = this.initRenderer();
  }

  private initScene(): Scene {
    return new Scene();
  }

  private initCamera(): PerspectiveCamera {
    const fov = 45;
    const aspectRatio = this.canvas.width / this.canvas.height;
    const near = 1;
    const far = 1000;
    const camera = new PerspectiveCamera(fov, aspectRatio, near, far);
    
    this.scene.add(camera);
    return camera;
  }

  private initRenderer(): WebGLRenderer {
    const renderer = new WebGLRenderer({ canvas: this.canvas, antialias: true })
    renderer.setSize(this.canvas.width, this.canvas.height);
    renderer.setPixelRatio(window.devicePixelRatio);
    return renderer;
  }

  addAmbientLight(colour: string) {
    const light = new AmbientLight(colour);
    this.scene.add(light);
  }

  setAxesHelper(size: number) {
    const ax = new AxesHelper(size);
    this.scene.add(ax);
  }

  onWindowResize() {
    this.camera.aspect = this.canvas.width / this.canvas.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.canvas.width, this.canvas.height);
  }

  update() {
    this.camera.updateProjectionMatrix();
    this.renderer.render(this.scene, this.camera);
  }
}