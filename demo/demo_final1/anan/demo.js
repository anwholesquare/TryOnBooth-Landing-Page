"use strict";

let THREECAMERA = null;

//disable_console
	window.console = (function(originalConsole){
		var api = {};
		var props = Object.keys(originalConsole);
		for (var i=0; i<props.length; i++) {
			api[props[i]] = function(){};
		}
		return api;
	})(window.console);

// callback: launched if a face is detected or lost.
function detect_callback(faceIndex, isDetected) {
  if (isDetected) {
    //console.log('INFO in detect_callback(): DETECTED');
  } else {
    //console.log('INFO in detect_callback(): LOST');
  }
}

// build the 3D. called once when Face Filter is OK:
function init_threeScene(spec) {
  const threeStuffs = THREE.JeelizHelper.init(spec, detect_callback);

  // improve WebGLRenderer settings:
  threeStuffs.renderer.toneMapping = THREE.ACESFilmicToneMapping;
  threeStuffs.renderer.outputEncoding = THREE.sRGBEncoding;

  // CREATE THE GLASSES AND ADD THEM
  const r = ThreeGlassesCreator({
    envMapURL: "envMap.jpg",
    frameMeshURL: "models3D/chosma.json",
    lensesMeshURL: "models3D/glassesLenses.json",
    occluderURL: "models3D/face.json"
  });

  threeStuffs.faceObject.add(r.occluder);
  r.occluder.rotation.set(0.3,0,0);
  r.occluder.position.set(0,0.1,-0.06);
  r.occluder.scale.multiplyScalar(0.008);

  const threeGlasses = r.glasses;
  //threeGlasses.rotation.set(-0.15,0,0); //X neg -> rotate branches down
  threeGlasses.position.set(0,0.07,0.4);
  threeGlasses.scale.multiplyScalar(0.006);
  threeStuffs.faceObject.add(threeGlasses);

  // CREATE THE CAMERA:
  THREECAMERA = THREE.JeelizHelper.create_camera();
  

  
} // end init_threeScene()



// entry point:
function main(){
  JeelizResizer.size_canvas({
    canvasId: 'canvaser',
    callback: function(isError, bestVideoSettings){
      init_faceFilter(bestVideoSettings);
    }
  })
}

function init_faceFilter(videoSettings){
  JEEFACEFILTERAPI.init({
    followZRot: true,
    canvasId: 'canvaser',
    NNCpath: '../anan/NNCIntel1536.json',
    maxFacesDetected: 1,
    callbackReady: function(errCode, spec){
      if (errCode){
      console.log('AN ERROR HAPPENS. ERR =', errCode);
      return;
      }

      console.log('INFO: FACEAPI IS READY');
      init_threeScene(spec);
    },

    // called at each render iteration (drawing loop):
    callbackTrack: function(detectState){
      THREE.JeelizHelper.render(detectState, THREECAMERA);
    }
  }); //end API.init call
}

