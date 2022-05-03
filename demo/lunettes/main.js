function main() {
    // get the 2 canvas from the DOM:
    const canvasFace = document.getElementById('ARCanvas');
    const canvasThree = document.getElementById('DRAWCanvas');

    // init TryOnBooth:
    TryOnBooth.init({
        //videoURL: 'assets/heyy.mp4', // use a video from a file instead of camera video

        solvePnPImgPointsLabels: [
            //'chinLeft', 'chinRight',
            'noseOuter', 'chin',
            'leftEarBottom',
            'rightEarBottom',
            'noseBottom',
            'noseLeft', 'noseRight',
            'leftEyeExt',
            'rightEyeExt'
        ],

        FeaturesTryOnBooth: {
            NNCPath: 'neuralNets/NN9.json',
            scanSettings: {
                threshold: 0.92
            }
        },

        stabilizerSpec: {

        },

        canvasFace: canvasFace,
        canvasThree: canvasThree,

        maxFacesDetected: 1,

        // initial canvas dimensions:
        width: window.innerWidth,
        height: window.innerHeight,

        // Branch fading parameters (branch become transparent near the ears)
        branchFadingZ: -0.9, // where to start branch fading. - -> to the back
        branchFadingTransition: 0.6, // 0 -> hard transition

        // Branch bending (glasses branches are always bent to slightly tighten the head):
        branchBendingAngle: 12, //in degrees. 0 -> no bending
        branchBendingZ: 0.013, //start brench bending at this position. - -> to the back

        // The occluder is a placeholder for the head. It is rendered with a transparent color
        // (only the depth buffer is updated).
        // It is useful to hide the left glasses branch when the head turns on the left.
        occluderURL: "assets/models3D/occluder.glb",
        modelURL: "assets/models3D/c2.glb", //initial model loaded. false or null -> no model
        envmapURL: "",

        // lighting:
        pointLightIntensity: 1, //intensity of the point light. Set to 0 to disable
        pointLightY: 100, // larger -> move the pointLight to the top
        hemiLightIntensity: 0, // intensity of the hemispheric light. Set to 0 to disable (not really useful if we use an envmap)

        // bloom (set to null to disable):
        bloom: {
            threshold: 0, //0.99,
            strength: 0,
            radius: 0
        },

        // temporal anti aliasing - Number of samples. 0 -> disabled:
        taaLevel: 1,

        // debug flags - all should be false for production:
        debugLandmarks: false,
        debugOccluder: false

    }).then(function() {


        // display controls:
        document.getElementById('controls').style.display = 'flex';

        // handle orientation change or window resizing:
        const resizeCallback = function() {
            TryOnBooth.resize(window.innerWidth, window.innerHeight);
        }
        window.addEventListener('orientationchange', resizeCallback);
        window.addEventListener('resize', resizeCallback);

    }).catch(function(err) {

    });
}


// this function is executed when the user clicks on CAPTURE IMAGE button
// it opens the captured image in a new tab:
function capture_image() {
    TryOnBooth.capture_image(function(cv) {
        const dataURL = cv.toDataURL('image/png');

        const img = new Image();
        img.src = dataURL;
        img.onload = function() {
            const win = window.open("");
            win.document.write(img.outerHTML);
        }
    });
}


window.addEventListener('load', main);