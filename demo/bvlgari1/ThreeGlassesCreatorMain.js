	const ThreeGlassesCreator=function(spec){
	  const threeGlasses = new THREE.Object3D();
	  
	  // envMap texture:
	  const envMap = new THREE.TextureLoader().load( "./chosma/Textures/optimized/envmap.jpg" );
	  //envMap.mapping = THREE.EquirectangularReflectionMapping;
	  //envMap.magFilter = THREE.LinearFilter;
	  //envMap.minFilter = THREE.LinearMipMapLinearFilter;
	  envMap.mapping = THREE.SphericalReflectionMapping;
	  
	  const basicMap = new THREE.TextureLoader().load('./chosma/Textures/optimized/base.jpg');
	  const alphaMap = new THREE.TextureLoader().load('./chosma/Textures/optimized/alphamap.jpg');
	  const normalMap = new THREE.TextureLoader().load('./chosma/Textures/optimized/normal.jpg');
	  // glasses frames:
	  new THREE.BufferGeometryLoader().load("./chosma/frame.json", function(glassesFramesGeometry){


		const mat = new THREE.MeshBasicMaterial( {

		color: 0xffffff,
		map : basicMap,
		envMap: envMap
		} );
		const glassesFramesMesh = new THREE.Mesh(glassesFramesGeometry, mat);
		threeGlasses.add(glassesFramesMesh);

		
	  });
	  
	   // glasses stick1:
	  new THREE.BufferGeometryLoader().load("./chosma/stick1.json", function(glassesFramesGeometry){


		
		const mat = new THREE.MeshBasicMaterial( {

		color: 0xffffff,
		map : basicMap,
		envMap: envMap
		} );
		const glassesFramesMesh = new THREE.Mesh(glassesFramesGeometry, mat);
		threeGlasses.add(glassesFramesMesh);

		
	  });
	  
		// glasses stick2:
	  new THREE.BufferGeometryLoader().load("./chosma/stick2.json", function(glassesFramesGeometry){
		glassesFramesGeometry.computeVertexNormals();

		const mat = new THREE.MeshStandardMaterial( {

		color: 0xffffff,
		roughness: 0.00,
		metalness: 1.00,
		map : basicMap,
		alphaMap : alphaMap,
		normalMap : normalMap,
		normalScale: new THREE.Vector2( 1, -1 ),
		refractionRatio: 0.98,
		flatShading : true,
		envMap: envMap,
		envMapIntensity: 0.6,
		transparent : true
		} );
		const glassesFramesMesh = new THREE.Mesh(glassesFramesGeometry, mat);
		threeGlasses.add(glassesFramesMesh);
		
	  });
	  
		// glasses stick3:
	  new THREE.BufferGeometryLoader().load("./chosma/stick3.json", function(glassesFramesGeometry){


		const mat = new THREE.MeshBasicMaterial( {

		color: 0xffffff,
		map : basicMap,
		alphaMap: alphaMap,
		opacity : 0.6,
		transparent : true,
		envMap: envMap
		} );
		const glassesFramesMesh = new THREE.Mesh(glassesFramesGeometry, mat);
		threeGlasses.add(glassesFramesMesh);

		
	  });
	  
		new THREE.BufferGeometryLoader().load("./chosma/lens.json", function(glassesFramesGeometry){


		const mat = new THREE.MeshBasicMaterial( {

		color: 0xffffff,
		map : basicMap,
		envMap: envMap,
		opacity : 0.5,
		reflectivity: 0.6,
		transparent : true
		} );
		const glassesFramesMesh = new THREE.Mesh(glassesFramesGeometry, mat);
		threeGlasses.add(glassesFramesMesh);

		
	  });



	  const occluderMesh = THREE.JeelizHelper.create_threejsOccluder(spec.occluderURL);
	  
	  return {
		glasses: threeGlasses,
		occluder: occluderMesh
	  };
	}
