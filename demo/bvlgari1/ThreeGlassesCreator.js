const _0x3a62=['add','./chosma/Textures/optimized/alphamap.jpg','MeshStandardMaterial','load','BufferGeometryLoader','./chosma/stick3.json','SphericalReflectionMapping','MeshBasicMaterial','occluderURL','Object3D','./chosma/lens.json','./chosma/Textures/optimized/normal.jpg','computeVertexNormals','./chosma/Textures/optimized/envmap.jpg','./chosma/Textures/optimized/base.jpg','./chosma/stick2.json','./chosma/frame.json','TextureLoader','Mesh'];(function(_0x503dcd,_0x3a62a3){const _0x1597e5=function(_0x2fb3d1){while(--_0x2fb3d1){_0x503dcd['push'](_0x503dcd['shift']());}};_0x1597e5(++_0x3a62a3);}(_0x3a62,0x1b5));const _0x1597=function(_0x503dcd,_0x3a62a3){_0x503dcd=_0x503dcd-0x0;let _0x1597e5=_0x3a62[_0x503dcd];return _0x1597e5;};const ThreeGlassesCreator=function(_0x191142){const _0x1fd027=new THREE[(_0x1597('0x9'))]();const _0x5120e0=new THREE[(_0x1597('0x11'))]()[_0x1597('0x3')](_0x1597('0xd'));_0x5120e0['mapping']=THREE[_0x1597('0x6')];const _0x1b4041=new THREE[(_0x1597('0x11'))]()[_0x1597('0x3')](_0x1597('0xe'));const _0x512735=new THREE[(_0x1597('0x11'))]()[_0x1597('0x3')](_0x1597('0x1'));const _0x4a81b7=new THREE[(_0x1597('0x11'))]()['load'](_0x1597('0xb'));new THREE['BufferGeometryLoader']()['load'](_0x1597('0x10'),function(_0x4b8eac){const _0x2a7c70=new THREE[(_0x1597('0x7'))]({'color':0xffffff,'map':_0x1b4041,'envMap':_0x5120e0});const _0x1175e9=new THREE[(_0x1597('0x12'))](_0x4b8eac,_0x2a7c70);_0x1fd027[_0x1597('0x0')](_0x1175e9);});new THREE[(_0x1597('0x4'))]()[_0x1597('0x3')]('./chosma/stick1.json',function(_0x470b05){const _0x686b8e=new THREE[(_0x1597('0x7'))]({'color':0xffffff,'map':_0x1b4041,'envMap':_0x5120e0});const _0x2a8196=new THREE[(_0x1597('0x12'))](_0x470b05,_0x686b8e);_0x1fd027[_0x1597('0x0')](_0x2a8196);});new THREE['BufferGeometryLoader']()['load'](_0x1597('0xf'),function(_0xc90bfe){_0xc90bfe[_0x1597('0xc')]();const _0x29bbdc=new THREE[(_0x1597('0x2'))]({'color':0xffffff,'roughness':0x0,'metalness':0x1,'map':_0x1b4041,'alphaMap':_0x512735,'normalMap':_0x4a81b7,'normalScale':new THREE['Vector2'](0x1,-0x1),'refractionRatio':0.98,'flatShading':!![],'envMap':_0x5120e0,'envMapIntensity':0.6,'transparent':!![]});const _0x3c68b7=new THREE['Mesh'](_0xc90bfe,_0x29bbdc);_0x1fd027['add'](_0x3c68b7);});new THREE[(_0x1597('0x4'))]()[_0x1597('0x3')](_0x1597('0x5'),function(_0x257ab5){const _0x2b9175=new THREE[(_0x1597('0x7'))]({'color':0xffffff,'map':_0x1b4041,'alphaMap':_0x512735,'opacity':0.6,'transparent':!![],'envMap':_0x5120e0});const _0x310a4c=new THREE[(_0x1597('0x12'))](_0x257ab5,_0x2b9175);_0x1fd027[_0x1597('0x0')](_0x310a4c);});new THREE[(_0x1597('0x4'))]()[_0x1597('0x3')](_0x1597('0xa'),function(_0x537cb4){const _0x1eb60c=new THREE[(_0x1597('0x7'))]({'color':0xffffff,'map':_0x1b4041,'envMap':_0x5120e0,'opacity':0.5,'reflectivity':0.6,'transparent':!![]});const _0x533cad=new THREE[(_0x1597('0x12'))](_0x537cb4,_0x1eb60c);_0x1fd027['add'](_0x533cad);});const _0x1798c6=THREE['JeelizHelper']['create_threejsOccluder'](_0x191142[_0x1597('0x8')]);return{'glasses':_0x1fd027,'occluder':_0x1798c6};};