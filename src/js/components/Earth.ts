import {
  SphereGeometry,
  Mesh,
  TextureLoader,
  Scene,
  ShaderMaterial
} from 'three';

import earthTexture from './../../assets/earthTexture.jpg';
import earthVertex from '../../shaders/earthVertex.glsl';
import earthFragment from '../../shaders/earthFragment.glsl';

export default class Earth {
  private earthRad: number;
  private mesh: Mesh;

  constructor(scene: Scene) {
    this.earthRad = 1;

    this.mesh = this.initEarth();
    scene.add(this.mesh);
  }

  private initEarth(): Mesh {
    const geo = new SphereGeometry(this.earthRad, 60, 60);
    const mat = new ShaderMaterial({
      vertexShader: earthVertex,
      fragmentShader: earthFragment,
      uniforms: {
        globeTexture: {
          value: new TextureLoader().load(earthTexture)
        }
      }
    })

    return new Mesh(geo, mat);
  }
}