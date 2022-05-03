const TryOnBooth = function() { var r = { canvasFace: null, canvasThree: null, videoURL: null, width: window.innerWidth, height: window.innerHeight, FeaturesTryOnBooth: { NNCPath: "neuralNets/NN_GLASSES_6.json", scanSettings: { threshold: .9 } }, stabilizerSpec: {}, isGlasses: !0, modelURL: null, occluderURL: null, envmapURL: null, pointLightIntensity: .8, pointLightY: 200, hemiLightIntensity: .8, bloom: null, taaLevel: 0, branchFadingZ: -.9, branchFadingTransition: .6, branchBendingAngle: 5, branchBendingZ: 0, resizeDelay: 50, rotationContraints: null, dracoDecoderPath: "draco/", debugOccluder: !1 }; const l = { faceAccessory: new THREE.Object3D, envMap: null, loadingManager: null }; let s = null,
        c = null; var d = { error: -3, notLoaded: -1, loading: -2, idle: 0, pause: 1 }; let h = d.notLoaded; const o = Math.PI / 180; let t = null;

    function u(e, n, a) { return e.replace(n, n + "\n" + a) }

    function g(e) { s.isGlasses && (e.scale.multiplyScalar(82), e.position.set(0, 40, 63), e.rotation.set(-.3, 0, 0)), e.traverse(function(n) { if (n.material) { let e = n.material; if (e.userData) { var a, t = e.userData; for (a in t) e[a] = t[a] } var i = (i = s.isGlasses) && e.name && -1 !== e.name.indexOf("frame");
                n.material = function(e, i) { const n = e.clone(); return n.fog = !1, n.onBeforeCompile = function(e) { let n = e.vertexShader,
                            a = e.fragmentShader; var t;
                        i && (t = { uBranchFading: { value: new THREE.Vector2(s.branchFadingZ, s.branchFadingTransition) }, uBranchBendingAngle: { value: s.branchBendingAngle * o }, uBranchBendingZ: { value: s.branchBendingZ } }, Object.assign(e.uniforms, t), n = "uniform float uBranchBendingAngle, uBranchBendingZ;\n" + n, t = "float zBranch = max(0.0, uBranchBendingZ-position.z);\n", t += "float bendBranchDx = tan(uBranchBendingAngle) * zBranch;\n", t += "transformed.x += sign(transformed.x) * bendBranchDx;\n", t += "transformed.z *= (1.0 - bendBranchDx);\n", n = u(n, "#include <begin_vertex>", "float zBranch = max(0.0, uBranchBendingZ-position.z);\nfloat bendBranchDx = tan(uBranchBendingAngle) * zBranch;\ntransformed.x += sign(transformed.x) * bendBranchDx;\ntransformed.z *= (1.0 - bendBranchDx);\n"), n = "varying float vPosZ;\n" + n, n = u(n, "#include <fog_vertex>", "vPosZ = position.z;"), a = "uniform vec2 uBranchFading;\n varying float vPosZ;\n" + a, a = u(a, "#include <dithering_fragment>", "gl_FragColor *= smoothstep(uBranchFading.x - uBranchFading.y * 0.5, uBranchFading.x + uBranchFading.y * 0.5, vPosZ);")), e.vertexShader = n, e.fragmentShader = a }, n }(n.material, i), n.material.depthWrite = !0 } }) }

    function p(a, t) { if (!a) return m(), void(t && t(null)); const n = TryOnHelper.getThree().scene;
        n.children.forEach(function(e) { "DirectionalLight" === e.type && n.remove(e) }), "assets/models3D/c2.glb" === a && (light = new THREE.DirectionalLight(13298938, 7), light.position.set(1e3, 200, 100), light.rotation.set(0, -45, 0), light.castShadow = !1, n.add(light), light2 = new THREE.DirectionalLight(13298938, 7), light2.position.set(-300, 200, 100), light2.rotation.set(0, 45, 0), light2.castShadow = !1, n.add(light2), light3 = new THREE.DirectionalLight(16187135, 7.5), light3.position.set(50, 200, 300), light3.rotation.set(-30, 0, 0), light3.castShadow = !1, n.add(light3)); const e = new THREE.GLTFLoader(l.loadingManager); if (THREE.DRACOLoader) { const i = new THREE.DRACOLoader;
            i.setDecoderPath(s.dracoDecoderPath), e.setDRACOLoader(i) }
        e.load(a, function(e) { e.scene.traverse(function(e) { e.isMesh && e instanceof THREE.Mesh && "lens" === e.name && "assets/models3D/c2.glb" === a && (e.material = new THREE.MeshStandardMaterial({ alphaMap: null, alphaToCoverage: !1, color: 0, aoMap: null, aoMapIntensity: 0, blendDst: 205, blendDstAlpha: null, blendEquation: 100, blendEquationAlpha: null, blendSrc: 204, blendSrcAlpha: null, blending: 1, bumpMap: null, bumpScale: 1, clipIntersection: !1, clipShadows: !1, clippingPlanes: null, colorWrite: !0, defines: { STANDARD: "" }, depthFunc: 3, depthTest: !0, depthWrite: !1, displacementBias: 0, displacementMap: null, displacementScale: 1, dithering: !1, emissiveIntensity: 1, emissiveMap: null, flatShading: !1, map: null, metalness: .8, metalnessMap: null, normalMap: null, normalMapType: 0, opacity: .6389405727386475, premultipliedAlpha: !1, refractionRatio: 0, roughness: .9, side: 2, toneMapped: !1, transparent: !0 })) }); const n = e.scene.clone();
            g(n), m(), l.faceAccessory = n, c.threeFaceFollowers && c.threeFaceFollowers.forEach(function(e) { e.add(n.clone()) }), t && t(n) }) }

    function m() { c.threeFaceFollowers && l.faceAccessory && (c.threeFaceFollowers.forEach(function(n) { if (n.children.length)
                for (let e = n.children.length - 1; 0 <= e; --e) { var a = n.children[e];
                    a.userData.isOccluder || n.remove(a) } }), l.faceAccessory = null) } return { init: function(o) { return new Promise(function(a, t) { if (h === d.notLoaded)
                    if (THREE) { h = d.loading, s = Object.assign({}, r, o), l.loadingManager = new THREE.LoadingManager; var e = window.devicePixelRatio || 1,
                            n = s.width * e,
                            e = s.height * e;
                        s.canvasFace.width = n, s.canvasFace.height = e, s.canvasThree.width = n, s.canvasThree.height = e; const i = { spec: s.FeaturesTryOnBooth, canvas: s.canvasFace, canvasThree: s.canvasThree, videoURL: s.videoURL, isPostProcessing: !!s.bloom, taaLevel: s.taaLevel, stabilizerSpec: s.stabilizerSpec, rotationContraints: s.rotationContraints, callbackReady: function(e, n) { if (e) return t(e), void(h = d.error);
                                c = n,
                                    function() { const e = c.threeRenderer,
                                            n = c.threeScene,
                                            a = c.threeComposer; if (e.toneMapping = THREE.ACESFilmicToneMapping, e.outputEncoding = THREE.sRGBEncoding, s.envmapURL) { const i = new THREE.PMREMGenerator(e);
                                            i.compileEquirectangularShader(), new THREE.RGBELoader(l.loadingManager).setDataType(THREE.HalfFloatType).load(s.envmapURL, function(e) { l.envMap = i.fromEquirectangular(e).texture, i.dispose(), n.environment = l.envMap }) } var t; if (0 < s.hemiLightIntensity && (t = new THREE.HemisphereLight(16777215, 0, s.hemiLightIntensity), n.add(t)), 0 < s.pointLightIntensity) { const o = new THREE.PointLight(16777215, s.pointLightIntensity);
                                            o.position.set(0, s.pointLightY, 0), n.add(o) }
                                        s.modelURL, s.occluderURL && TryOnHelper.add_occluderFromFile(s.occluderURL, null, l.loadingManager, s.debugOccluder), s.modelURL && p(s.modelURL, null), s.bloom && (t = new THREE.UnrealBloomPass(new THREE.Vector2(s.canvasThree.width, s.canvasThree.height), s.bloom.strength, s.bloom.radius, s.bloom.threshold), a.addPass(t)), l.loadingManager.onLoad = function() { s.callback && s.callback(l) } }(), h = d.idle, a() } };
                        o.solvePnPObjPointsPositions && (i.solvePnPObjPointsPositions = o.solvePnPObjPointsPositions), o.solvePnPImgPointsLabels && (i.solvePnPImgPointsLabels = o.solvePnPImgPointsLabels), TryOnHelper.init(i) } else t("NO_THREE");
                else t("ALREADY_INITIALIZED") }) }, load: function(e, n) { p(e, n) }, pos: function() { return l.faceAccessory }, pause: function(e) { return h === d.idle && (TRYONBOOTHDRAW.toggle_pause(!0, e), h = d.pause, !0) }, resume: function(e) { return h === d.pause && (TRYONBOOTHDRAW.toggle_pause(!1, e), h = d.idle, !0) }, capture_image: function(e) { if (h !== d.pause && h !== d.idle) return !1; var n = TRYONBOOTHDRAW.capture_image(!0),
                a = n.width,
                t = n.height,
                i = c.threeRenderer.domElement; const o = document.createElement("canvas");
            o.width = a, o.height = t; const r = o.getContext("2d");
            r.translate(a, 0), r.scale(-1, 1), r.drawImage(n, 0, 0), r.drawImage(i, 0, 0), e(o) }, resize: function(n, a) { return (h === d.pause || h === d.idle) && (null !== t && window.clearTimeout(t), t = setTimeout(function() { var e = window.devicePixelRatio || 1;
                TryOnHelper.resize(n * e, a * e), t = null }, s.resizeDelay), !0) }, destroy: function() { return new Promise(function(e, n) { TRYONBOOTHDRAW.destroy().finally(function() { h = d.notLoaded, c.threeRenderer && (c.threeRenderer = null), e() }) }) } } }();