"use strict";


const ThreeGlassesCreator=function(spec){
  const threeGlasses = new THREE.Object3D();
  
  // envMap texture:
  const textureEquirec = new THREE.TextureLoader().load( spec.envMapURL );
  textureEquirec.mapping = THREE.EquirectangularReflectionMapping;
  textureEquirec.magFilter = THREE.LinearFilter;
  textureEquirec.minFilter = THREE.LinearMipMapLinearFilter;

  // glasses frames:
  new THREE.BufferGeometryLoader().load(spec.frameMeshURL, function(glassesFramesGeometry){


    const mat = new THREE.MeshPhongMaterial({
      color: 0x000000,    
      flatShading: true,
	  envMap: textureEquirec,
	  specular: 0x050505,
      shininess: 150
    });
    const glassesFramesMesh = new THREE.Mesh(glassesFramesGeometry, mat);
    threeGlasses.add(glassesFramesMesh);

    
  });

  // glasses lenses:
  new THREE.BufferGeometryLoader().load(spec.lensesMeshURL, function(glassesLensesGeometry){
    glassesLensesGeometry.computeVertexNormals();
    const mat = new THREE.MeshBasicMaterial({
      opacity: 0.2,
      color: new THREE.Color().setHex(0x7f8082),
      transparent: true,
      fog: false
    });
    const glassesLensesMesh = new THREE.Mesh(glassesLensesGeometry, mat);
    threeGlasses.add(glassesLensesMesh);

    window.debugMatLens = mat; // to debug the material il the JS console
  });

  const occluderMesh = THREE.JeelizHelper.create_threejsOccluder(spec.occluderURL);
  
  return {
    glasses: threeGlasses,
    occluder: occluderMesh
  };
}
