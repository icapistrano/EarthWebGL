import {
  SphereGeometry,
  MeshLambertMaterial,
  Mesh,
  TextureLoader,
  Scene,
} from 'three';

import earthTexture from './../../assets/earthTexture.jpg';

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
    const mat = new MeshLambertMaterial({
      map: new TextureLoader().load(earthTexture),
    })

    return new Mesh(geo, mat);
  }
}