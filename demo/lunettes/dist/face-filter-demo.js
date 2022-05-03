var TRYONBOOTHDRAW = (window.TRYONBOOTHDRAW = function() {
    function t(t) {
        var e = null,
            r = null,
            n = null,
            i = 0;
        this.v = function(t) { this.Pf(t.tb), n.He({ Cc: t.Cc, zc: t.zc }) }, this.cf = function(t) { return e[t] }, this.Pf = function(t) {
            var a = null;
            i = t.length, e = t.map(function(t, e) { return t = Object.assign({}, t, { index: e, parent: this, zb: a, sf: e === i - 1 }), a = 0 === e ? et.instance(t) : rt.instance(t) }), r = e[0], n = e[i - 1], e.forEach(function(t, e) { 0 !== e && t.Gf() })
        }, this.U = function(t) { t.g(0); var r = t; return e.forEach(function(t) { r = t.U(r, !1) }), r }, this.bf = function() { return r.F() }, this.ff = function() { return n.F() }, this.cc = function() { return n.ef() }, this.sd = function() { return n.sd() }, this.m = function() { e && (e.forEach(function(t) { t.m() }), n = r = e = null, i = 0) }, void 0 !== t && this.v(t)
    }

    function e(t, e) { var r = e % 8; return t[(e - r) / 8] >> 7 - r & 1 }

    function r() { return pt !== mt.play && (null === yt.element ? (pt = mt.ge, !1) : (pt = mt.play, lt.Gb(), vt.stop(), a(), s(), !0)) }

    function n() { return pt === mt.play && (lt.stop(), vt.stop(), pt = mt.pause, !0) }

    function i(t, e, r, n, i) { return t = 4 * (e * Pt + t) + r, n + (jt.buffer[t] / 255 + jt.buffer[t + 4 * Pt] / 65025) * (i - n) }

    function a() { X.kf() }

    function o() { var t = zt.ta(); return Q.P(), G.viewport(0, 0, Pt, 2 * t), C.set("s53"), jt.ca.g(0), jt.Xa.g(1), K.l(!1, !1), Ft.enableAsyncReadPixels ? J.Bb(0, 0, Pt, 2 * t, jt.buffer, c, Ft.readPixelsAsyncDelay) : J.Wd(0, 0, Pt, 2 * t, jt.buffer) }

    function u(t) {
        var e = St[t],
            r = Ot[t],
            n = Lt[t];
        if (t *= 2, e.Qa = i(1, t, 3, 0, 1), n.detectedRaw = e.Qa, n.detected = O.la(n.detected, e.Qa, gt.re), n.isDetected = n.detected > Ft.threshold, e.x = i(0, t, 1, -1, 1), e.y = i(0, t, 2, -1, 1), e.T = i(0, t, 3, 0, 1), n.isDetected) {
            e.rx = i(1, t, 0, -jt.ma[0], jt.ma[0]), e.ry = i(1, t, 1, -jt.ma[1], jt.ma[1]), e.Va = i(1, t, 2, -jt.ma[2], jt.ma[2]);
            for (var a = 0; a < Bt.vc; ++a) {
                var o = 2 + Math.floor(a / 2);
                e.mc[a][0] = i(o, t, a % 2 * 2, -1.2, 1.2), e.mc[a][1] = i(o, t, a % 2 * 2 + 1, -1.2, 1.2)
            }
            r.dx = e.x - n.x, r.dy = e.y - n.y, r.Vb = e.T - n.s, r.Sb = e.rx - n.rx, r.Tb = e.ry - n.ry, r.Ub = Rt.sa ? e.Va : e.Va - n.rz, t = lt.Xe(), r = O.la(kt.alphaRange[1], kt.alphaRange[0], Math.pow((1 - N.pc(kt.translationFactorRange[0], kt.translationFactorRange[1], Math.sqrt(r.dx * r.dx + r.dy * r.dy + r.Vb * r.Vb) / t)) * (1 - N.pc(kt.rotationFactorRange[0], kt.rotationFactorRange[1], Math.sqrt(r.Sb * r.Sb + r.Tb * r.Tb + r.Ub * r.Ub) / t)) * N.pc(kt.qualityFactorRange[0], kt.qualityFactorRange[1], e.Qa), gt.se)), Ut.mode === Ut.ub.Eb && (Ut.ra.fb = Math.cos(Math.sqrt(Math.abs(n.ry))), Ut.ra.Zb = Ut.ed * Math.sin(n.ry)), n.x = O.la(n.x, e.x, r), n.y = O.la(n.y, e.y, r), n.s = O.la(n.s, e.T, r), n.rx = O.la(n.rx, e.rx, r), n.ry = O.la(n.ry, e.ry, r);
            var u = 1,
                s = 0;
            Rt.sa ? (u = Math.cos(n.rz), s = Math.sin(n.rz), n.rz += kt.followZRotAlphaFactor * r * e.Va) : n.rz = O.la(n.rz, e.Va, r), n.landmarks.forEach(function(t, r) {
                var n = Bt.Zc[r],
                    i = e.mc[r];
                r = e.yf[r];
                var a = n[0] + i[0] / Bt.Xb;
                n = n[1] + i[1] / Bt.Xb, Ut.mode === Ut.ub.Eb && (a = a * Ut.ra.fb + Ut.ra.Zb * e.T), Rt.sa && (i = n * u + a * s, a = a * u - n * s, n = i), r[0] = e.x + a * e.T, r[1] = e.y + n * e.T * Dt.Mb, t[0] = r[0], t[1] = r[1]
            }), ++e.xa
        } else Rt.sa && (n.rz = 0), Ut.mode === Ut.ub.Eb && (Ut.ra.fb = 1, Ut.ra.Zb = 0), e.xa = Math.floor(e.xa / 2)
    }

    function s() { pt === mt.play && (Ft.isCleanGLStateAtEachIteration && (C.hd(), K.reset(), K.Aa(), G.disable(G.DEPTH_TEST), C.Fa()), Rt.kc ? lt.Dc(f, o, l, c, v, Ft.animateProcessOrder) : (h(), c(), v())) }

    function f() {
        Q.fa(), yt.Ta || h();
        var t = lt.df();
        zt.update(t, Lt);
        for (var e = 0; e < t; ++e) {
            zt.Gb(e), C.set("s55"), Ut.mode === Ut.ub.Eb && C.H("u44", Ut.ra.fb);
            var r = zt.ta(),
                n = zt.td();
            Rt.sa && C.H("u43", Lt[n].rz), zt.je("u42"), Dt.va.aa(), yt.D.g(1), jt.ca.g(0), K.l(!1, !1), jt.Xa.o(), C.set("s3"), G.viewport(0, n, Pt, 1), C.ba("u4", 1, 1 / r), C.ba("u5", 0, n / r), K.l(!1, !1), _t.U(Dt.va)
        }
    }

    function c() { Q.fg(), Z.reset(), Ft.isCleanGLStateAtEachIteration && (Q.reset(), G.enable(G.DEPTH_TEST)), Rt.Nb && Rt.Nb(zt.Ld() ? Lt : Lt[0]), Ft.isCleanGLStateAtEachIteration && (K.reset(), K.Aa(), G.disable(G.BLEND)) }

    function l() { for (var t = 0; t < zt.ta(); ++t) zt.wf(t) && u(t) }

    function v() { pt === mt.play && vt.Dc(s) }

    function h() {
        if (yt.pb) yt.element.needsUpdate && (yt.D.ce(yt.element.videoWidth, yt.element.videoHeight), yt.D.Ha(yt.element.arrayBuffer), yt.element.needsUpdate = !1);
        else {
            var t = yt.element.currentTime,
                e = t - yt.Ab;
            0 > e && (yt.Ab = t), 1e3 * e < gt.ig || (yt.Ab += e, yt.D.refresh())
        }
    }

    function z() {
        C.N("s55", [{ type: "1i", name: "u1", value: 1 }, { type: "1i", name: "u40", value: 0 }, { type: "2f", name: "u41", value: Dt.I }, { type: "1f", name: "u42", value: .5 }, { type: "1f", name: "u43", value: 0 }, { type: "1f", name: "u44", value: 1 }]);
        var t = [{ type: "1i", name: "u45", value: 0 }, { type: "1f", name: "u51", value: jt.size }];
        C.N("s54", [{ type: "1i", name: "u40", value: 1 }, { type: "1f", name: "u48", value: gt.dg }, { type: "1f", name: "u49", value: Ft.threshold }, { type: "3f", name: "u47", value: [jt.V[0] * Dt.I[0], jt.V[1] * Dt.I[1], jt.V[2]] }, { type: "1f", name: "u42", value: .5 }, { type: "1f", name: "u50", value: 1 }, { type: "1f", name: "u43", value: 0 }].concat(t)), C.N("s57", [{ type: "1f", name: "u50", value: 1 }].concat(t)), C.N("s58", t), C.N("s53", [{ type: "1i", name: "u40", value: 0 }, { type: "1i", name: "u53", value: 1 }, { type: "1f", name: "u55", value: Dt.I[0] }, { type: "2f", name: "u54", value: [0, .5 / zt.ta()] }])
    }

    function g() { jt.size = _t.ff(), Dt.I[0] = 1, Dt.I[1] = Dt.B / Dt.G, ht.v({ yb: Ft.overlapFactors, Qd: Ft.nScaleLevels, B: Dt.B, G: Dt.G, Yd: Ft.scale0Factor, V: jt.V, Zd: Ft.scanCenterFirst }) }

    function d(t) {
        if (null !== Rt.Ya) m(Rt.Ya, t);
        else { var e = Rt.Kb; "JSON" !== e.toUpperCase().split(".").pop() && (e += gt.neuralNetworkPath), P.get(e, function(e) { m(e = JSON.parse(e), t) }) }
    }

    function m(t, e) {
        if (t.exportData) {
            var r = t.exportData;
            r.rotationEulerAnglesFactors && (jt.ma = r.rotationEulerAnglesFactors), r.translationScalingFactors && (jt.V = r.translationScalingFactors), r.landmarksLabels && (Bt.labels = r.landmarksLabels, Bt.vc = Bt.labels.length, Bt.xc = Math.ceil(Bt.vc / 2)), Bt.Zc = r.landmarksCenters ? r.landmarksCenters : Bt.labels.map(function() { return [0, 0] }), r.landmarksFactor && (Bt.Xb = r.landmarksFactor), r.facegenMode && (Ut.mode = r.facegenMode, r.facegenDisplaceXFactor && (Ut.ed = r.facegenDisplaceXFactor))
        }
        e(t)
    }

    function p(e) {
        _t = new t({ tb: e.layers, Cc: "gpuRawAvg", zc: b }), Dt.va && Dt.va.remove(), Dt.va = Z.instance({ isPot: !0, isFloat: !1, width: _t.bf() }),
            function() {
                function t(t, e) { C.N(t, [{ name: "u38", type: "1f", value: e / Pt }]) }

                function e() { return Bt.labels.map(function() { return [0, 0] }) }
                var r = zt.ta();
                Pt = 2 + Bt.xc;
                var n = new Float32Array(4 * Pt);
                n = { width: Pt, height: r, isFloat: !0, isPot: !1, array: zt.Ne(n) }, jt.ca && jt.ca.remove(), jt.ca = W.instance(n), jt.Xa = Z.instance(n), jt.buffer = new Uint8Array(8 * n.width * r), jt.Hc = n.array, t("s54", .5), t("s53", 1), t("s55", .5), St = zt.Wb({ Qa: 0, x: 0, y: 0, T: 1, rx: 0, ry: 0, Va: 0, mc: e(), yf: e(), xa: 0 }), Lt = zt.Wb({ detected: 0, detectedRaw: 0, isDetected: !1, x: 0, y: 0, s: 1, rx: 0, ry: 0, rz: 0, landmarks: e() }), Ot = zt.Wb({ dx: 0, dy: 0, Vb: 0, Sb: 0, Tb: 0, Ub: 0 })
            }(), g(), z()
    }

    function b() {
        var t = zt.td(),
            e = Lt[t];
        jt.ca.Nf(1), G.viewport(0, t, 1, 1), C.set("s54"), Rt.sa && C.H("u43", e.rz), zt.je("u42");
        var r = 1,
            n = zt.Yf(St, Dt.B / Dt.G);
        zt.Ld() && (n && (r = 0, St[t].xa = 0, e.isDetected = !1, e.detected = 0), C.H("u50", r)), C.Uf("u46", ht.get(t)), K.l(!1, !1), (zt.Kd() || n) && (G.viewport(1, t, 1, 1), C.set("s57"), C.H("u50", r), K.l(!1, !1)), zt.Kd() && (G.viewport(2, t, Bt.xc, 1), C.set("s58"), K.l(!1, !1)), jt.ca.sync()
    }

    function E() {
        yt.D && yt.D.remove(), yt.pb = !(!yt.element || !yt.element.isFakeVideo);
        var t = null;
        yt.pb ? t = { isFlipY: !1, array: yt.element.arrayBuffer, width: yt.element.videoWidth, height: yt.element.videoHeight, isKeepArray: !0 } : yt.element && (t = { J: yt.element }), yt.Ic = Z.instance(Object.assign({ isPot: !1, isLinear: !0, isFloat: !1 }, t)), yt.D = yt.Ic
    }

    function y() {
        var t = [{ type: "mat2", name: "u39", value: yt.u }];
        C.N("s56", [{ type: "1i", name: "u1", value: 0 }].concat(t)), C.N("s55", t)
    }

    function w() {
        var t = [.5, .5],
            e = yt.I[1] / yt.I[0],
            r = X.X() / X.F();
        switch (90 === Math.abs(dt.rotate) && (e = 1 / e), e > r ? t[1] *= r / e : t[0] *= e / r, C.N("s54", [{ name: "u52", type: "1f", value: r }]), yt.u[0] = 0, yt.u[1] = 0, yt.u[2] = 0, yt.u[3] = 0, dt.rotate) {
            case 0:
                yt.u[0] = t[0], yt.u[3] = t[1];
                break;
            case 180:
                yt.u[0] = -t[0], yt.u[3] = -t[1];
                break;
            case 90:
                yt.u[1] = t[0], yt.u[2] = -t[1];
                break;
            case -90:
                yt.u[1] = -t[0], yt.u[2] = t[1]
        }
        yt.da[0] = yt.u[0], yt.da[1] = yt.u[1], yt.da[2] = yt.u[2], yt.da[3] = yt.u[3], yt.Ta || (yt.u[1] *= -1, yt.u[3] *= -1), yt.Ta && yt.Ed && (yt.da[1] *= -1, yt.da[3] *= -1)
    }

    function R() {
        var t = yt.element.videoWidth,
            e = yt.element.videoHeight,
            r = yt.I[0] !== t || yt.I[1] !== e;
        return r && (yt.I[0] = t, yt.I[1] = e), r
    }

    function A(t, e) { return pt !== mt.error && (yt.element = t, R(), e && e(), !0) }

    function T(t, e, r) { t && t(), yt.Oa = { video: { facingMode: { ideal: dt.facingMode }, width: { min: dt.minWidth, max: dt.maxWidth, ideal: dt.idealWidth }, height: { min: dt.minHeight, max: dt.maxHeight, ideal: dt.idealHeight } }, audio: !1 }, ct.Tc(yt.Oa, dt.deviceId), ct.get(yt.element ? yt.element : ct.wd(), function(t) { e && e(t), r(t) }, function() { x("WEBCAM_UNAVAILABLE") }, yt.Oa) }

    function x(t) { pt !== mt.error && (pt = mt.error, Rt.Na && Rt.Na(t)) }
    var _, F, k, D, M, j, S, L = null,
        O = { gh: function(t) { return Math.ceil(Math.log2(t)) }, Bh: function(t) { return Math.log2(t) }, yh: function(t) { return 0 == Math.log2(t) % 1 }, sg: function(t) { var e = [0, 0, 0, 0]; return t.forEach(function(t) { e[0] += t[0], e[1] += t[1], e[2] += t[2], e[3] += t[3] }), e }, tg: function(t, e, r) { return Math.min(Math.max(t, e), r) }, wg: function(t) { return t * Math.PI / 180 }, Jh: function(t, e) { return e = Math.pow(10, e), Math.round(t * e) / e }, Kh: function(t) { return Math.round(1e6 * t) / 1e6 }, hh: function(t, e) { return (100 * t / e).toFixed(3) }, la: function(t, e, r) { return t * (1 - r) + e * r }, Ch: function(t, e) { return t[0] * (1 - e) + t[1] * e }, Le: function(t, e) { return O.De(t - e) }, De: function(t) { for (; t > Math.PI;) t -= 2 * Math.PI; for (; t <= -Math.PI;) t += 2 * Math.PI; return t }, Bg: function(t, e) { return Math.abs(O.Le(t, e)) }, jg: function(t, e) { return Math.atan2(Math.sin(t) + Math.sin(e), Math.cos(t) + Math.cos(e)) } },
        P = {
            get: function(t, e, r) {
                var n = new XMLHttpRequest;
                n.open("GET", t, !0), n.withCredentials = !1, n.onreadystatechange = function() { 4 === n.readyState && (200 === n.status || 0 === n.status ? e(n.responseText) : void 0 !== r && r(n.status)) }, n.send()
            },
            gf: function(t) { return new Promise(function(e, r) { P.get(t, e, r) }) },
            dh: function(t, e, r) { t += r ? "?" + P.Pe(r) : "", P.get(t, function(t) { e(JSON.parse(t)) }) },
            Fh: function(t, e, r) {
                var n = new XMLHttpRequest;
                n.open("POST", t, !0), n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), n.onreadystatechange = function() { 4 !== n.readyState || 200 !== n.status && 0 !== n.status || r(n.responseText) }, n.send(e)
            },
            Pe: function(t) { return "string" == typeof t ? t : Object.keys(t).map(function(e) { return encodeURIComponent(e) + "=" + encodeURIComponent(t[e]) }).join("&") },
            Sg: function(t, e) {
                var r = new XMLHttpRequest;
                r.open("POST", t, !0), r.responseType = "arraybuffer", r.onload = function() { e(r.response) }, r.send()
            }
        },
        B = function(t) { return Array.isArray(t) || t.constructor === Float32Array || t.constructor === Uint8Array },
        U = { Qb: function(t, e) { if (0 === e || "object" != typeof t) return t; for (var r in e = void 0 === e || -1 === e ? -1 : e - 1, t = Object.assign({}, t)) t[r] = U.Qb(t[r], e); return t }, Ag: function(t) { return JSON.parse(JSON.stringify(t)) } },
        N = { Vh: function(t, e, r) { return (t = Math.min(Math.max((r - t) / (e - t), 0), 1)) * t * (3 - 2 * t) }, pc: function(t, e, r) { return Math.min(Math.max((r - t) / (e - t), 0), 1) }, Mg: function(t, e, r, n) { return Math.pow(Math.min(Math.max((n - t) / (e - t), 0), 1), r) }, $h: function() { return 0 }, Eh: function() { return 1 }, Ah: function(t) { return t }, Jg: function(t) { return t * t }, Og: function(t) { return t * (2 - t) }, Gg: function(t) { return .5 > t ? 2 * t * t : (4 - 2 * t) * t - 1 }, Eg: function(t) { return t * t * t }, Ng: function(t) { return --t * t * t + 1 }, Fg: function(t) { return .5 > t ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 }, Kg: function(t) { return t * t * t * t }, Pg: function(t) { return 1 - --t * t * t * t }, Hg: function(t) { return .5 > t ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t }, Lg: function(t) { return t * t * t * t * t }, Qg: function(t) { return 1 + --t * t * t * t * t }, Ig: function(t) { return .5 > t ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t } },
        I = function(t, e, r) {
            switch (t) {
                case "relu":
                    return r + "=max(vec4(0.,0.,0.,0.)," + e + ");";
                case "elu":
                    return r + "=mix(exp(-abs(" + e + "))-vec4(1.,1.,1.,1.)," + e + ",step(0.," + e + "));";
                case "elu01":
                    return r + "=mix(0.1*exp(-abs(" + e + "))-vec4(0.1,0.1,0.1,0.1)," + e + ",step(0.," + e + "));";
                case "arctan":
                    return r + "=atan(3.14159265359*texture2D(u0,vUV))/3.14159265359;";
                case "copy":
                    return "";
                default:
                    return !1
            }
        },
        C = function() {
            function t(t, e, r) { return e = t.createShader(e), t.shaderSource(e, r), t.compileShader(e), !!t.getShaderParameter(e, t.COMPILE_STATUS) && e }

            function e(e, r) {
                if (r.C = !!r.C, !r.C) {
                    r.za = r.za || "precision lowp float;attribute vec2 a0;varying vec2 vv0;void main(){gl_Position=vec4(a0,0.,1.),vv0=a0*.5+vec2(.5,.5);}", r.ab = r.ab || ["a0"], r.Ka = r.Ka || [2], r.precision = r.precision || s, r.id = o++, void 0 !== r.ae && (r.ae.forEach(function(t, e) { r.h = r.h.replace(t, r.Cb[e]) }), r.ae.splice(0)), r.Pc = 0, r.Ka.forEach(function(t) { r.Pc += 4 * t });
                    var u = function(t) { return ["float", "sampler2D", "int"].map(function(e) { return "precision " + t + " " + e + ";\n" }).join("") }(r.precision);
                    if (r.ya = function(e, r, i) { r = t(e, e.VERTEX_SHADER, r), i = t(e, e.FRAGMENT_SHADER, i), e === G && n.push(r, i); var a = e.createProgram(); return e.attachShader(a, r), e.attachShader(a, i), e.linkProgram(a), a }(e, u + r.za, u + r.h), r.A = {}, r.i.forEach(function(t) { r.A[t] = e.getUniformLocation(r.ya, t) }), r.attributes = {}, r.La = [], r.ab.forEach(function(t) {
                            var n = e.getAttribLocation(r.ya, t);
                            r.attributes[t] = n, r.La.push(n)
                        }), r.j)
                        for (var f in e.useProgram(r.ya), a = r, i = r.id, r.j) e.uniform1i(r.A[f], r.j[f]);
                    r.wa = !0
                }
            }

            function r(t, r, n) { return e(t, r), t.useProgram(r.ya), t.enableVertexAttribArray(r.attributes.a0), i = -1, a = r }
            var n = [],
                i = -1,
                a = null,
                o = 0,
                u = !1,
                s = "highp",
                f = ["u1"],
                c = ["u0"],
                l = { u1: 0 },
                v = { u0: 0 },
                h = { u1: 0, u2: 1 },
                z = { u3: 0 },
                g = { s0: { h: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}", i: ["u1"], j: { u1: 0 } }, s1: { h: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}", i: f, j: l, precision: "lowp" }, s2: { h: "uniform sampler2D u1,u2;varying vec2 vv0;void main(){vec4 a=texture2D(u2,vv0),b=texture2D(u1,vv0);gl_FragColor=a*b;}", i: ["u1", "u2"], j: h }, s3: { h: "uniform sampler2D u1;uniform vec2 u4,u5;varying vec2 vv0;void main(){vec2 a=vv0*u4+u5;gl_FragColor=texture2D(u1,a);}", i: ["u1", "u4", "u5"], j: l, C: !0 }, s4: { h: "uniform sampler2D u1;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=a.r*f;}", i: f, j: l }, s5: { h: "uniform sampler2D u1,u2;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u2,vv0),b=texture2D(u1,vv0);gl_FragColor=a.a*b.r*f;}", i: ["u1", "u2"], j: h }, s6: { h: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vec2(1.-vv0.x,vv0.y));}", i: f, j: l }, s7: { h: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vec2(vv0.x,1.-vv0.y));}", i: f, j: l }, s8: { h: "uniform sampler2D u0;uniform float u4;varying vec2 vv0;void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=a*u4;}", i: ["u0", "u4"], j: v }, s9: { h: "uniform sampler2D u0;uniform float u4;varying vec2 vv0;const vec4 f=vec4(.25,.25,.25,.25),g=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0);float b=dot(a*u4,f);gl_FragColor=b*g;}", i: ["u0", "u4"], j: v }, s10: { h: "uniform sampler2D u1;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.);void main(){float a=.25*dot(e,texture2D(u1,vv0));gl_FragColor=a*e;}", i: f, j: l }, s11: { h: "uniform sampler2D u1,u6;uniform float u7;const vec4 f=vec4(1.,1.,1.,1.);varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0),b=texture2D(u6,vv0);gl_FragColor=mix(b,a,u7*f);}", i: ["u1", "u6", "u7"], j: { u1: 0, u6: 1 } }, s12: { h: "uniform sampler2D u1;uniform vec2 u8;varying vec2 vv0;void main(){gl_FragColor=.25*(texture2D(u1,vv0+u8)+texture2D(u1,vv0+u8*vec2(1.,-1.))+texture2D(u1,vv0+u8*vec2(-1.,-1.))+texture2D(u1,vv0+u8*vec2(-1.,1.)));}", i: ["u1", "u8"], j: l }, s13: { h: "uniform sampler2D u1;uniform vec4 u9;varying vec2 vv0;float g(float a,float b){a=floor(a)+.5;return floor(a/exp2(b));}float h(float a,float b){return floor(a*exp2(b)+.5);}float i(float a,float b){return mod(a,h(1.,b));}float e(float c,float a,float b){a=floor(a+.5),b=floor(b+.5);return i(g(c,a),b-a);}vec4 j(float a){if(a==0.)return vec4(0.,0.,0.,0.);float k=128.*step(a,0.);a=abs(a);float c=floor(log2(a)),l=c+127.,b=(a/exp2(c)-1.)*8388608.,d=l/2.,m=fract(d)*2.,n=floor(d),o=e(b,0.,8.),p=e(b,8.,16.),q=m*128.+e(b,16.,23.),r=k+n;return vec4(o,p,q,r)/255.;}void main(){float a=dot(texture2D(u1,vv0),u9);gl_FragColor=j(a);}", i: ["u1", "u9"], j: l }, s14: { h: "uniform sampler2D u0;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),b=e/(e+exp(-a));gl_FragColor=b;}", i: c, j: v, C: !0 }, s15: { h: "uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(0.,0.,0.,0.);void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=max(f,a);}", i: c, j: v }, s16: { h: "uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=mix(exp(-abs(a))-f,a,step(0.,a));}", i: c, j: v }, s17: { h: "uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),b=exp(-abs(a))-f;gl_FragColor=mix(.1*b,a,step(0.,a));}", i: c, j: v }, s18: { h: "uniform sampler2D u0,u7,u10;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),c=texture2D(u7,vv0),d=texture2D(u10,vv0),b=a/d;gl_FragColor=c*mix(exp(-abs(b))-f,b,step(0.,a));}", i: ["u0", "u7", "u10"], j: { u0: 0, u7: 1, u10: 2 }, C: !0 }, s19: { h: "uniform sampler2D u0;const float e=3.141593;varying vec2 vv0;void main(){gl_FragColor=atan(e*texture2D(u0,vv0))/e;}", i: c, j: v }, s20: { h: "uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),b=log(f+a);gl_FragColor=b;}", i: c, j: v, C: !0 }, s21: { h: "uniform sampler2D u0,u11;uniform float u12;const vec2 e=vec2(.5,.5);const float f=1e-5;const vec4 g=vec4(1.,1.,1.,1.),i=vec4(0.,0.,0.,0.);varying vec2 vv0;void main(){vec4 a=texture2D(u11,e);float b=u12*u12;vec4 c=max(b*a,f*g);gl_FragColor=texture2D(u0,vv0)/c;}", i: ["u0", "u11", "u12"], j: { u0: 0, u11: 1 }, C: !0 }, s22: { h: "uniform sampler2D u1;uniform vec2 u13;varying vec2 vv0;void main(){float a=u13.x*u13.y;vec2 b=floor(vv0*a)/a,c=fract(vv0*a),d=floor(b*u13.y),f=floor(u13.x*fract(b*u13.y)),g=(f*u13.y+d)/a;gl_FragColor=texture2D(u1,g+c/a);}", i: ["u1", "u13"], j: l }, s23: { h: "uniform sampler2D u14,u15,u16;varying vec2 vv0;void main(){vec4 a=texture2D(u16,vv0);vec2 b=a.rg,c=a.ba;vec4 d=texture2D(u14,b),f=texture2D(u15,c);gl_FragColor=d*f;}", i: ["u14", "u15", "u16"], j: { u15: 0, u14: 1, u16: 2 }, C: !0 }, s24: { h: "uniform float u17,u18;uniform sampler2D u14,u15;varying vec2 vv0;void main(){vec2 c=fract(vv0*u17),a=vv0;float b=u17*u18;a=(.5+floor(b*vv0))/b;vec4 d=texture2D(u14,a),f=texture2D(u15,c);gl_FragColor=d*f;}", i: ["u15", "u14", "u17", "u18"], j: { u15: 0, u14: 1 } }, s25: { h: "uniform float u17,u18;uniform sampler2D u14,u15,u19,u20,u21,u22;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.),g=vec4(1e-3,1e-3,1e-3,1e-3);void main(){vec2 i=vv0*u17,n=floor(i),b=i-n,d=vv0;float j=u17*u18;d=(.5+floor(j*vv0))/j;vec4 o=texture2D(u14,d),h=texture2D(u15,b),c=texture2D(u22,d);c*=255.;vec4 p=texture2D(u19,b),q=texture2D(u20,b),r=texture2D(u21,b),k=step(-g,-c),a=e-k,l=a*step(-e-g,-c);a*=e-l;vec4 m=a*step(-2.*e-g,-c);a*=e-m;vec4 s=a;h=k*h+l*p+m*q+s*r,gl_FragColor=o*h;}", i: "u14 u15 u17 u18 u22 u19 u20 u21".split(" "), j: { u15: 0, u14: 1, u22: 3, u19: 4, u20: 5, u21: 6 }, C: !0 }, s26: { h: "uniform sampler2D u14,u15,u23;uniform float u17,u24,u25,u18;varying vec2 vv0;const vec2 j=vec2(1.,1.),k=vec2(0.,0.);void main(){vec2 b=floor(u24*vv0),c=u24*vv0-b;float d=u17/u24;vec2 f=floor(c*d),g=c*d-f,h=(b+g)/u24;float l=u24*u18/u17;vec2 m=l*f,a=(m+g*u25)/u18;a+=.25/u18;vec2 i=step(a,j)*step(k,a);vec4 n=texture2D(u14,h),o=texture2D(u15,a),p=n*o,q=texture2D(u23,h);gl_FragColor=(p*u25*u25+q)*i.x*i.y;}", i: "u14 u15 u17 u24 u25 u18 u23".split(" "), j: { u15: 0, u14: 1, u23: 2 } }, s27: { h: "uniform sampler2D u14,u15;varying vec2 vv0;void main(){vec4 a=texture2D(u14,vv0),b=texture2D(u15,vv0);gl_FragColor=a*b;}", i: ["u14", "u15"], j: { u15: 0, u14: 1 }, C: !0 }, s28: { h: "uniform sampler2D u1,u23;uniform float u26;varying vec2 vv0;void main(){gl_FragColor=texture2D(u23,vv0)+u26*texture2D(u1,vv0);}", i: ["u1", "u23", "u26"], j: { u1: 0, u23: 1 } }, s29: { h: "varying vec2 vv0;uniform sampler2D u1;const vec4 f=vec4(1.,1.,1.,1.),g=vec4(.299,.587,.114,0.);void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=dot(a,g)*f;}", i: f, j: l, precision: "lowp" }, s30: { h: "varying vec2 vv0;uniform sampler2D u1;uniform float u27;const vec3 f=vec3(.299,.587,.114);void main(){vec3 a=texture2D(u1,vv0).rgb,b=texture2D(u1,vv0+vec2(0.,u27)).rgb,c=texture2D(u1,vv0+vec2(u27,u27)).rgb,d=texture2D(u1,vv0+vec2(u27,0.)).rgb;gl_FragColor=vec4(dot(a,f),dot(b,f),dot(c,f),dot(d,f));}", i: ["u1", "u27"], j: l, precision: "lowp" }, s31: { h: "varying vec2 vv0;uniform sampler2D u1;uniform float u27;const vec3 f=vec3(.299,.587,.114);void main(){vec3 a=texture2D(u1,vv0).rgb,b=texture2D(u1,vv0+vec2(0.,u27)).rgb,c=texture2D(u1,vv0+vec2(u27,u27)).rgb,d=texture2D(u1,vv0+vec2(u27,0.)).rgb;gl_FragColor=vec4(a.r,b.g,c.b,dot(d,f));}", i: ["u1", "u27"], j: l, precision: "lowp" }, s32: { h: "varying vec2 vv0;uniform sampler2D u1,u2;uniform float u28;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=vec4(0.);a-=texture2D(u1,vec2(vv0.x-u28,vv0.y-u28))*1.,a-=texture2D(u1,vec2(vv0.x-u28,vv0.y))*2.,a-=texture2D(u1,vec2(vv0.x-u28,vv0.y+u28))*1.,a+=texture2D(u1,vec2(vv0.x+u28,vv0.y-u28))*1.,a+=texture2D(u1,vec2(vv0.x+u28,vv0.y))*2.,a+=texture2D(u1,vec2(vv0.x+u28,vv0.y+u28))*1.;vec4 b=vec4(0.);b-=texture2D(u1,vec2(vv0.x-u28,vv0.y-u28))*1.,b-=texture2D(u1,vec2(vv0.x,vv0.y-u28))*2.,b-=texture2D(u1,vec2(vv0.x+u28,vv0.y-u28))*1.,b+=texture2D(u1,vec2(vv0.x-u28,vv0.y+u28))*1.,b+=texture2D(u1,vec2(vv0.x,vv0.y+u28))*2.,b+=texture2D(u1,vec2(vv0.x+u28,vv0.y+u28))*1.;vec3 c=sqrt(a.rgb*a.rgb+b.rgb*b.rgb);vec4 e=vec4(c,texture2D(u1,vv0).a),g=texture2D(u2,vv0);gl_FragColor=g.a*e.r*f;}", i: ["u1", "u2", "u28"], j: h, C: !0 }, s33: { h: "varying vec2 vv0;uniform sampler2D u1,u2;uniform float u28;const vec4 j=vec4(1.,1.,1.,1.);const vec2 k=vec2(1.,1.);void main(){float h=0.;vec2 l=k*u28,a,b;float c,d,i=0.;for(float e=-4.;e<=4.;e+=1.)for(float f=-4.;f<=4.;f+=1.)a=vec2(e,f),c=length(a)/2.,d=exp(-c*c),b=vv0+l*a,h+=d*texture2D(u1,b).r,i+=d;vec4 m=texture2D(u2,vv0);gl_FragColor=m.a*(texture2D(u1,b).r-h/i)*j;}", i: ["u1", "u2", "u28"], j: h, C: !0 }, s34: { h: "uniform sampler2D u3;uniform vec2 u8;varying vec2 vv0;vec4 e(vec4 a,vec4 b){vec4 c=step(a,b);return mix(a,b,c);}const vec2 g=vec2(.5,.5),h=vec2(1.,0.),i=vec2(0.,1.);void main(){vec2 a=vv0-u8*g;vec4 b=texture2D(u3,a),c=texture2D(u3,a+u8*h),d=texture2D(u3,a+u8*i),j=texture2D(u3,a+u8),k=e(b,c),l=e(d,j);gl_FragColor=e(k,l);}", i: ["u3", "u8"], j: z }, s35: { h: "uniform sampler2D u3;uniform vec2 u8;varying vec2 vv0;const vec2 k=vec2(1.,0.),l=vec2(0.,1.),m=vec2(2.,0.),n=vec2(0.,2.);vec4 e(vec4 a,vec4 b){vec4 c=step(a,b);return mix(a,b,c);}vec4 f(vec2 a){vec4 b=texture2D(u3,a),c=texture2D(u3,a+u8*k),d=texture2D(u3,a+u8*l),g=texture2D(u3,a+u8),h=e(b,c),i=e(d,g);return e(h,i);}void main(){vec2 a=vv0+u8*vec2(-.55,-1.05);vec4 b=f(a),c=f(a+u8*m),d=f(a+u8*2.),g=f(a+u8*n),h=e(b,c),i=e(d,g);gl_FragColor=e(h,i);}", i: ["u3", "u8"], j: z, C: !0 }, s36: { h: "uniform sampler2D u1;varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=a*a;}", i: ["u1"], j: l, precision: "lowp", C: !0 }, s37: { h: "uniform sampler2D u1;uniform vec2 u8;varying vec2 vv0;const float e=15444.;void main(){vec4 a=1001./e*texture2D(u1,vv0-3.*u8)+2002./e*texture2D(u1,vv0-2.*u8)+3003./e*texture2D(u1,vv0-u8)+3432./e*texture2D(u1,vv0)+3003./e*texture2D(u1,vv0+u8)+2002./e*texture2D(u1,vv0+2.*u8)+1001./e*texture2D(u1,vv0+3.*u8);gl_FragColor=a;}", i: ["u8", "u1"], j: l, precision: "lowp", C: !0 }, s38: { h: "uniform sampler2D u1,u11,u29;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);const float g=.1;void main(){vec4 a=texture2D(u11,vv0),b=texture2D(u29,vv0),c=texture2D(u1,vv0),d=max(f*g,b-a*a),h=sqrt(d);gl_FragColor=(c-a)/h;}", i: ["u1", "u11", "u29"], j: { u1: 0, u11: 1, u29: 2 }, C: !0 } },
                d = { s39: { h: "uniform float u17,u30;uniform sampler2D u14,u15,u23;varying vec2 vv0;const vec2 ZERO2=vec2(0.,0.),ONE2=vec2(1.,1.),HALF2=vec2(.5,.5),EPS2=vec2(1e-5,1e-5);void main(){vec4 sum=texture2D(u23,vv0);float toSparsity=1.1111;vec2 uvFrom,uvWeight,xyPatch=ZERO2,eps2=EPS2/u17,xyTo=floor(vv0*u17+eps2);float weightSize=toSparsity*u17;vec2 halfFromSparsity=ONE2*(toSparsity-1.)/2.;for(float patch_x=0.;patch_x<1.1111;patch_x+=1.){xyPatch.x=patch_x;for(float patch_y=0.;patch_y<1.1111;patch_y+=1.)xyPatch.y=patch_y,uvFrom=(xyTo+HALF2+u30*(xyPatch-halfFromSparsity))/u17,uvFrom+=step(uvFrom,-eps2),uvFrom-=step(ONE2-eps2,uvFrom),uvWeight=(xyTo*toSparsity+xyPatch+HALF2)/weightSize,sum+=texture2D(u14,uvWeight)*texture2D(u15,uvFrom);}gl_FragColor=sum,gl_FragColor*=2.2222;}", i: ["u17", "u14", "u15", "u23", "u30"], Cb: ["1.1111", "gl_FragColor\\*=2.2222;"] }, s40: { h: "uniform float u17,u30,u18;uniform sampler2D u14,u15,u23;varying vec2 vv0;const vec2 ZERO2=vec2(0.,0.),ONE2=vec2(1.,1.),HALF2=vec2(.5,.5),EPS2=vec2(1e-4,1e-4);void main(){vec4 sum=texture2D(u23,vv0);float fromSparsity=1.1111,shrinkFactor=3.3333;vec2 uvFrom,uvWeight,xyFrom,xyPatchTo,xyPatch=ZERO2,xyShrink=ZERO2,eps2=EPS2/u18,xyTo=floor(vv0*u17+eps2);float weightSize=fromSparsity*u18;vec2 halfFromSparsity=ONE2*(fromSparsity-1.)/2.;float toSparsity=weightSize/u17;vec2 xyFrom0=xyTo*shrinkFactor;for(float patch_x=0.;patch_x<1.1111;patch_x+=1.){xyPatch.x=patch_x;for(float patch_y=0.;patch_y<1.1111;patch_y+=1.){xyPatch.y=patch_y;for(float shrink_x=0.;shrink_x<3.3333;shrink_x+=1.){xyShrink.x=shrink_x;for(float shrink_y=0.;shrink_y<3.3333;shrink_y+=1.)xyShrink.y=shrink_y,xyFrom=xyFrom0+xyShrink+shrinkFactor*u30*(xyPatch-halfFromSparsity),uvFrom=(xyFrom+HALF2)/u18,uvFrom+=step(uvFrom,-eps2),uvFrom-=step(ONE2-eps2,uvFrom),xyPatchTo=xyPatch*shrinkFactor+xyShrink,uvWeight=(xyTo*toSparsity+xyPatchTo+HALF2)/weightSize,sum+=texture2D(u14,uvWeight)*texture2D(u15,uvFrom);}}}gl_FragColor=sum,gl_FragColor*=2.2222;}", i: "u17 u18 u14 u15 u23 u30".split(" "), Cb: ["1.1111", "gl_FragColor\\*=2.2222;", "3.3333"] } },
                m = null,
                p = null,
                b = {
                    rb: function() { return u },
                    v: function() {
                        if (!u) {
                            for (var t in m = U.Qb(g, 2), p = U.Qb(d, 2), s = "highp", G.getShaderPrecisionFormat && (G.getShaderPrecisionFormat(G.FRAGMENT_SHADER, G.MEDIUM_FLOAT), G.getShaderPrecisionFormat(G.FRAGMENT_SHADER, G.LOW_FLOAT)), m) e(G, m[t]);
                            C.set("s0"), G.enableVertexAttribArray(0), u = !0
                        }
                    },
                    Vc: function(t) { t.forEach(function(t) { b.Uc(t) }) },
                    Uc: function(t) { m[t.id] = t, e(G, t, t.id) },
                    yd: function(t, r, n) { r || (r = t), m[r] = Object.create(p[t]), m[r].rf = !0, p[t].Cb && p[t].Cb.forEach(function(t, e) { m[r].h = m[r].h.replace(new RegExp(t, "g"), n[e]) }), e(G, m[r]) },
                    set: function(t) {
                        var r = m[t];
                        r.C && (r.C = !1, e(G, r)),
                            function(t) { Y.Sf(b), i !== t.id && (b.M(), i = t.id, a = t, G.useProgram(t.ya), t.La.forEach(function(t) { 0 !== t && G.enableVertexAttribArray(t) })) }(r)
                    },
                    Wa: function(t) { return r(t, { h: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}", i: ["u1"], j: { u1: 0 } }) },
                    Fc: function(t) { return r(t, { h: "void main(){gl_FragColor=vec4(.5,.5,.5,.5);}", i: [], precision: s }) },
                    Qe: function(t) { return void 0 !== m[t] && m[t].wa },
                    M: function() {-1 !== i && (i = -1, a.La.forEach(function(t) { 0 !== t && G.disableVertexAttribArray(t) })) },
                    Gc: function() {
                        var t = 0;
                        a.La.forEach(function(e, r) { r = a.Ka[r], G.vertexAttribPointer(e, r, G.FLOAT, !1, a.Pc, t), t += 4 * r })
                    },
                    hd: function() { G.enableVertexAttribArray(0) },
                    Fa: function() { b.Db(G) },
                    Db: function(t) { t.vertexAttribPointer(a.La[0], 2, t.FLOAT, !1, 8, 0) },
                    Ph: function(t, e) { G.uniform1i(a.A[t], e) },
                    H: function(t, e) { G.uniform1f(a.A[t], e) },
                    ba: function(t, e, r) { G.uniform2f(a.A[t], e, r) },
                    Qh: function(t, e) { G.uniform2fv(a.A[t], e) },
                    Uf: function(t, e) { G.uniform3fv(a.A[t], e) },
                    Rh: function(t, e, r, n) { G.uniform3f(a.A[t], e, r, n) },
                    Vf: function(t, e, r, n, i) { G.uniform4f(a.A[t], e, r, n, i) },
                    de: function(t, e) { G.uniform4fv(a.A[t], e) },
                    ee: function(t, e) { G.uniformMatrix2fv(a.A[t], !1, e) },
                    Sh: function(t, e) { G.uniformMatrix3fv(a.A[t], !1, e) },
                    Th: function(t, e) { G.uniformMatrix4fv(a.A[t], !1, e) },
                    N: function(t, e) {
                        b.set(t), e.forEach(function(t) {
                            switch (t.type) {
                                case "4f":
                                    G.uniform4fv(a.A[t.name], t.value);
                                    break;
                                case "3f":
                                    G.uniform3fv(a.A[t.name], t.value);
                                    break;
                                case "2f":
                                    G.uniform2fv(a.A[t.name], t.value);
                                    break;
                                case "1f":
                                    G.uniform1f(a.A[t.name], t.value);
                                    break;
                                case "1i":
                                    G.uniform1i(a.A[t.name], t.value);
                                    break;
                                case "mat2":
                                    G.uniformMatrix2fv(a.A[t.name], !1, t.value);
                                    break;
                                case "mat3":
                                    G.uniformMatrix3fv(a.A[t.name], !1, t.value);
                                    break;
                                case "mat4":
                                    G.uniformMatrix4fv(a.A[t.name], !1, t.value)
                            }
                        })
                    },
                    fh: function() { return "lowp" },
                    m: function() {
                        for (var t in b.M(), G.disableVertexAttribArray(0), m) {
                            var e = m[t];
                            e.wa && (e.wa = !1, G.deleteProgram(e.ya)), e.rf && delete m[t]
                        }
                        n.forEach(function(t) { G.deleteShader(t) }), n.splice(0), o = 0, u = !1, a = null, i = -1
                    }
                };
            return b
        }(),
        G = null,
        X = function() {
            function t(t) { return console.log("ERROR in ContextFF: ", t), !1 }

            function e() { return navigator.userAgent && -1 !== navigator.userAgent.indexOf("forceWebGL1") }

            function r(t) {
                function r() { $.m(), J.reset(), a.getExtension("WEBGL_lose_context").loseContext() }
                if (e()) return !1;
                var i = document.createElement("canvas");
                i.setAttribute("width", 5), i.setAttribute("height", 5);
                var a = null;
                try { a = i.getContext("webgl2", t) } catch (t) { return !1 }
                return !!a && (n(a), J.jd(a), (t = J.Rb(a)).ha || t.ja ? (t = $.Xc(a, t), r(), !!t) : (r(), !1))
            }

            function n(t) { t.clearColor(0, 0, 0, 0), t.disable(t.DEPTH_TEST), t.disable(t.BLEND), t.disable(t.DITHER), t.disable(t.STENCIL_TEST), t.disable(t.CULL_FACE), t.GENERATE_MIPMAP_HINT && t.hint(t.GENERATE_MIPMAP_HINT, t.FASTEST), t.disable(t.SAMPLE_ALPHA_TO_COVERAGE), t.disable(t.SAMPLE_COVERAGE), t.depthFunc(t.LEQUAL), t.clearDepth(1) }
            var i = null,
                a = null,
                o = null,
                u = null,
                s = !0,
                f = null,
                c = null,
                l = [],
                v = {
                    F: function() { return i.width },
                    X: function() { return i.height },
                    Xg: function() { return i },
                    Vg: function() { return G },
                    ka: function() { return s },
                    flush: function() { G.flush() },
                    kf: function() { Q.fa(), Z.reset(), K.reset(), C.M(), C.hd(), G.disable(G.DEPTH_TEST), G.disable(G.BLEND), K.Aa(), C.Fa() },
                    We: function() { return f || (f = new Uint8Array(i.width * i.height * 4)), G.readPixels(0, 0, i.width, i.height, G.RGBA, G.UNSIGNED_BYTE, f), f },
                    Yg: function() { return i.toDataURL("image/jpeg") },
                    Zg: function() {
                        Q.P(), a || (a = document.createElement("canvas"), o = a.getContext("2d")), a.width = i.width, a.height = i.height;
                        for (var t = v.We(), e = o.createImageData(a.width, a.height), r = a.width, n = a.height, u = e.data, s = 0; s < n; ++s)
                            for (var f = n - s - 1, c = 0; c < r; ++c) {
                                var l = 4 * (s * r + c),
                                    h = 4 * (f * r + c);
                                u[l] = t[h], u[l + 1] = t[h + 1], u[l + 2] = t[h + 2], u[l + 3] = t[h + 3]
                            }
                        return o.putImageData(e, 0, 0), a.toDataURL("image/png")
                    },
                    Ve: function(t) {!a && t && (a = document.createElement("canvas"), o = a.getContext("2d")); var e = t ? a : document.createElement("canvas"); return e.width = i.width, e.height = i.height, (t ? o : e.getContext("2d")).drawImage(i, 0, 0), e },
                    v: function(a) {
                        if ((a = Object.assign({ ia: null, yc: null, bb: null, dd: null, width: 512, height: 512, premultipliedAlpha: !1, Cd: !0, antialias: !1, debug: !1, zg: !1 }, a)).ia ? (G = a.ia, i = a.ia.canvas) : a.dd && !a.bb ? i = document.getElementById(a.dd) : a.bb && (i = a.bb), i || (i = document.createElement("canvas")), i.width = a.width, i.height = a.height, G) s = G instanceof WebGL2RenderingContext;
                        else {
                            s = !0;
                            var o = { antialias: a.antialias, alpha: !0, preserveDrawingBuffer: !0, premultipliedAlpha: a.premultipliedAlpha, stencil: !1, depth: a.Cd, failIfMajorPerformanceCaveat: !0, powerPreference: "high-performance" };
                            navigator && navigator.userAgent && -1 !== navigator.userAgent.indexOf("noAntialiasing") && (o.antialias = !1);
                            var f = r(o);
                            f || !o.antialias || e() || (o.antialias = !1, f = r(o)), f && (G = i.getContext("webgl2", o)), G ? s = !0 : ((G = i.getContext("webgl", o)) || (G = i.getContext("experimental-webgl", o)), s = !1)
                        }
                        return G ? (a.yc && i.addEventListener && (u = G.getExtension("WEBGL_lose_context")) && (c = a.yc, i.addEventListener("webglcontextlost", c, !1)), J.v() ? (n(G), C.v(), K.v(), $.Xc(G, J.Ue()), l.forEach(function(t) { t(G) }), l.splice(0), !0) : t("Not enough GL capabilities")) : t("WebGL1 and 2 are not enabled")
                    },
                    og: function() { return new Promise(function(t) { G ? t(G) : l.push(t) }) },
                    m: function() { G && (J.m(), C.m(), $.m()), u && c && (i.removeEventListener("webglcontextlost", c, !1), u = c = null), G = f = o = a = i = null, l.splice(0) }
                };
            return v
        }(),
        Y = function() {
            function t() { null === e && (void 0 !== C ? e = C : "undefined" != typeof JEShaders && (e = JEShaders)) }
            var e = null;
            return { reset: function() { e = null }, Sf: function(t) { e !== t && (e && e.M(), e = t) }, rb: function() { return e.rb() }, Fa: function() { return e.Fa() }, Db: function(t) { return e.Db(t) }, Gc: function() { return e.Gc() }, M: function() { return e.M() }, set: function(r) { return t(), e.set(r) }, Wa: function(r) { return t(), e.Wa(r) }, Fc: function(r) { return t(), e.Fc(r) } }
        }(),
        H = function() {
            function t(t) { G.bindTexture(G.TEXTURE_2D, t) }

            function r(t) {
                var e = new Uint16Array(t.length);
                return t.forEach(function(t, r) {
                    e[r] = function(t) {
                        w[0] = t;
                        var e = (t = R[0]) >> 16 & 32768,
                            r = t >> 12 & 2047,
                            n = t >> 23 & 255;
                        return 103 > n ? e : 142 < n ? 31744 | e | ((255 == n ? 0 : 1) && 8388607 & t) : 113 > n ? e | ((r |= 2048) >> 114 - n) + (r >> 113 - n & 1) : e = (e | n - 112 << 10 | r >> 1) + (1 & r)
                    }(t)
                }), e
            }

            function n(t, e) {
                if (!Y.rb() || !h) return null;
                var r = null,
                    n = Math.sqrt(t.length / 4);
                try { var i = G.getError(); if ("FUCKING_BIG_ERROR" === i) return !1; if (r = T.instance({ isFloat: !1, S: e, array: t, width: n }), (i = G.getError()) !== G.NO_ERROR) return !1 } catch (t) { return !1 }
                for (V.P(), G.viewport(0, 0, n, n), G.clearColor(0, 0, 0, 0), G.clear(G.COLOR_BUFFER_BIT), Y.set("s0"), r.Ma(0), q.l(!0, !0), t = 4 * n * n, e = new Uint8Array(t), G.readPixels(0, 0, n, n, G.RGBA, G.UNSIGNED_BYTE, e), n = !0, i = 0; i < t; ++i) n = n && 3 > Math.abs(e[i] - 127);
                return r.remove(), V.fa(), n
            }
            var i = 0,
                a = null,
                o = 0,
                u = null,
                s = null,
                f = null,
                c = null,
                l = null,
                v = null,
                h = !1,
                z = [],
                g = { isFloat: !1, isPot: !0, isLinear: !1, isMipmap: !1, isAnisotropicFiltering: !1, isMirrorX: !1, isMirrorY: !1, isSrgb: !1, isKeepArray: !1, isFlipY: null, width: 0, height: 0, url: null, array: null, data: null, J: null, dc: null, qf: !1, S: !1, qa: null, wb: 4, rc: 0 },
                d = !1,
                m = null,
                p = null,
                b = [
                    [1, 0, 0, 0],
                    [0, 1, 0, 0],
                    [0, 0, 1, 0],
                    [0, 0, 0, 1]
                ],
                E = !1,
                y = !1,
                w = new Float32Array(1),
                R = new Int32Array(w.buffer),
                A = { ec: null, fc: null },
                T = {
                    v: function() { h || (l = [G.RGBA, null, G.RGBA, G.RGBA], v = [G.RGBA, null, G.RGBA, G.RGBA], a = [G.TEXTURE0, G.TEXTURE1, G.TEXTURE2, G.TEXTURE3, G.TEXTURE4, G.TEXTURE5, G.TEXTURE6, G.TEXTURE7], E = "undefined" != typeof JEContext, y = void 0 !== J, E && JEContext.zh() && a.push(G.TEXTURE8, G.TEXTURE9), u = [-1, -1, -1, -1, -1, -1, -1, -1], c = [G.UNSIGNED_BYTE, G.FLOAT, G.FLOAT], h = !0) },
                    lf: function() {
                        if (!s) {
                            for (var t = new Float32Array(16384), e = 0; 16384 > e; ++e) t[e] = 2 * Math.random() - 1;
                            s = { random: T.instance({ isFloat: !0, isPot: !0, array: t, width: 64 }), me: T.instance({ isFloat: !1, isPot: !0, width: 1, array: new Uint8Array([0, 0, 0, 0]) }) }
                        }
                        T.hg()
                    },
                    oh: function() { return s.me },
                    hg: function() { c[1] = J.ac(G) },
                    Qf: function() { v = l = [G.RGBA, G.RGBA, G.RGBA, G.RGBA] },
                    Xd: function(t) {
                        C.set("s1"), V.P();
                        var e = t.F(),
                            r = t.X();
                        G.viewport(0, 0, e, r), t.g(0), q.l(!1, !1)
                    },
                    Hh: function(t, e) { T.Xd(t), G.readPixels(0, 0, t.F(), t.X(), G.RGBA, G.UNSIGNED_BYTE, e) },
                    Ih: function(t, e) { return T.Xd(t), J.Bb(0, 0, t.F(), t.X(), e) },
                    qd: function(t, e, r, n, a, o, s) {
                        t.activeTexture(t.TEXTURE0);
                        var c = t.createTexture();
                        t.bindTexture(t.TEXTURE_2D, c), a = a instanceof Float32Array ? a : new Float32Array(a), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, o), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, r, n, 0, t.RGBA, t.FLOAT, a), t.bindTexture(t.TEXTURE_2D, null), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !1), s && (V.fa(), C.Wa(t)), t.viewport(0, 0, r, n), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, e, 0), t.bindTexture(t.TEXTURE_2D, c), s ? q.l(!0, !0) : K.ib(t), t.deleteTexture(c), h && (u[0] = -1, f = null, i = 0)
                    },
                    Lb: function(t) { t !== i && (G.activeTexture(a[t]), i = t) },
                    instance: function(s) {
                        var h;

                        function w() { X = void 0 !== D.J.videoWidth ? D.J.videoWidth : D.J.width, H = void 0 !== D.J.videoHeight ? D.J.videoHeight : D.J.height }

                        function R(t) { var e = G.getError(); return "FUCKING_BIG_ERROR" !== e && (G.texImage2D(G.TEXTURE_2D, 0, nt, it, at, t), (e = G.getError()) !== G.NO_ERROR && it !== G.RGBA && (it = G.RGBA, G.texImage2D(G.TEXTURE_2D, 0, nt, it, at, t)), !0) }

                        function x() {
                            if (!K) {
                                if (t(U), ot && G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL, ot), D.isPot ? (G.texParameteri(G.TEXTURE_2D, G.TEXTURE_WRAP_S, D.isMirrorX ? G.MIRRORED_REPEAT : G.REPEAT), G.texParameteri(G.TEXTURE_2D, G.TEXTURE_WRAP_T, D.isMirrorY ? G.MIRRORED_REPEAT : G.REPEAT)) : (G.texParameteri(G.TEXTURE_2D, G.TEXTURE_WRAP_S, G.CLAMP_TO_EDGE), G.texParameteri(G.TEXTURE_2D, G.TEXTURE_WRAP_T, G.CLAMP_TO_EDGE)), D.isAnisotropicFiltering && "undefined" != typeof JESETTINGS && G.texParameterf(G.TEXTURE_2D, JEContext.$g().TEXTURE_MAX_ANISOTROPY_EXT, JESETTINGS.kg), G.texParameteri(G.TEXTURE_2D, G.TEXTURE_MAG_FILTER, D.isLinear ? G.LINEAR : G.NEAREST), D.isLinear ? G.texParameteri(G.TEXTURE_2D, G.TEXTURE_MIN_FILTER, D.isMipmap && !st ? G.NEAREST_MIPMAP_LINEAR : G.LINEAR) : G.texParameteri(G.TEXTURE_2D, G.TEXTURE_MIN_FILTER, D.isMipmap && !st ? G.NEAREST_MIPMAP_NEAREST : G.NEAREST), it = l[D.wb - 1], nt = v[D.wb - 1], at = c[j], J.ka()) {
                                    var e = J.Ye();
                                    it === G.RGBA && at === G.FLOAT ? D.isMipmap || D.isLinear ? nt = $.$e(G) : J.Yc() ? e && (nt = e) : nt = G.RGBA16F || G.RGBA : it === G.RGB && at === G.FLOAT && e && (nt = e, it = G.RGBA)
                                }
                                if ((D.S && !D.isFloat || D.isFloat && D.isMipmap && $.vf()) && (nt = J.Ze(), at = J.ac(G)), D.rc && (ct = D.rc), D.isSrgb && 4 === D.wb && (it = JEContext.mh()), D.J) R(D.J);
                                else if (D.url) R(N);
                                else if (I) {
                                    e = I;
                                    try { "FUCKING_BIG_ERROR" !== G.getError() && (G.texImage2D(G.TEXTURE_2D, 0, nt, X, H, 0, it, at, e), G.getError() !== G.NO_ERROR && (G.texImage2D(G.TEXTURE_2D, 0, nt, X, H, 0, it, at, null), G.getError() !== G.NO_ERROR && G.texImage2D(G.TEXTURE_2D, 0, G.RGBA, X, H, 0, G.RGBA, G.UNSIGNED_BYTE, null))) } catch (t) { G.texImage2D(G.TEXTURE_2D, 0, nt, X, H, 0, it, at, null) }
                                    D.isKeepArray || (I = null)
                                } else "FUCKING_BIG_ERROR" !== (e = G.getError()) && (G.texImage2D(G.TEXTURE_2D, 0, nt, X, H, 0, it, at, null), (e = G.getError()) !== G.NO_ERROR && (it = G.RGBA, D.S && at !== G.FLOAT && (at = G.FLOAT, G.texImage2D(G.TEXTURE_2D, 0, nt, X, H, 0, it, at, null))));
                                if (D.isMipmap)
                                    if (!st && zt) zt.$b(), lt = !0;
                                    else if (st) {
                                    e = Math.log2(Math.min(X, H)), (ft = Array(1 + e))[0] = U;
                                    for (var r = 1; r <= e; ++r) {
                                        var n = Math.pow(2, r),
                                            a = X / n;
                                        n = H / n;
                                        var o = G.createTexture();
                                        t(o), G.texParameteri(G.TEXTURE_2D, G.TEXTURE_MIN_FILTER, G.NEAREST), G.texParameteri(G.TEXTURE_2D, G.TEXTURE_MAG_FILTER, G.NEAREST), G.texImage2D(G.TEXTURE_2D, 0, nt, a, n, 0, it, at, null), t(null), ft[r] = o
                                    }
                                    lt = !0
                                }
                                t(null), u[i] = -1, ot && G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL, !1), W = !0, D.qa && zt && (D.qa(zt), D.qa = null)
                            }
                        }

                        function _() { for (var t = X * H, e = 2 * t, r = 3 * t, n = 0; n < t; ++n) Z[0][n] = rt[n], Z[1][n] = rt[n + t], Z[2][n] = rt[n + e], Z[3][n] = rt[n + r] }

                        function F() {
                            var t = X * H * 4;
                            tt = [new Uint8Array(t), new Uint8Array(t), new Uint8Array(t), new Uint8Array(t)], Z = [new Float32Array(tt[0].buffer), new Float32Array(tt[1].buffer), new Float32Array(tt[2].buffer), new Float32Array(tt[3].buffer)], et = new Uint8Array(4 * t), rt = new Float32Array(et.buffer), Q = !0
                        }

                        function k() { h = new Uint8Array(X * H * 4), ht = new Float32Array(h.buffer), vt = !0 }
                        var D = Object.assign({}, g, s),
                            M = o++;
                        null === D.isFlipY && (D.isFlipY = !!D.url), D.data && (D.array = "string" == typeof D.data ? function(t) {
                            var r = JSON.parse(t);
                            t = r.ne;
                            var n = r.nf,
                                i = r.n,
                                a = "undefined" == typeof btoa ? Buffer.from(r.data, "base64").toString("latin1") : atob(r.data),
                                o = a.length;
                            r = new Uint8Array(o);
                            for (var u = 0; u < o; ++u) r[u] = a.charCodeAt(u);
                            a = new Float32Array(i), o = new Float32Array(n), u = t + n + 1;
                            for (var s = 0; s < i; ++s) {
                                for (var f = u * s, c = 0 === e(r, f) ? 1 : -1, l = f + 1, v = 1, h = 0, z = l + t - 1; z >= l; --z) h += v * e(r, z), v *= 2;
                                for (l = h, f = f + 1 + t, v = o.length, h = 0, z = f; z < f + v; ++z) o[h] = e(r, z), ++h;
                                for (v = f = 0; v < n; ++v) f += o[v] * Math.pow(2, -v - 1);
                                a[s] = 0 === f && 0 === l ? 0 : c * (1 + f) * Math.pow(2, 1 + l - Math.pow(2, t - 1))
                            }
                            return a
                        }(D.data) : D.isFloat ? new Float32Array(D.data) : new Uint8Array(D.data), D.isFlipY = !1);
                        var j = 0,
                            S = !!D.J,
                            L = null,
                            O = null,
                            P = !1;
                        D.S = D.S || D.isFloat, D.S && (j = 1), !D.qf && D.isFloat && y && !J.Yc() && (D.isFloat = !1), D.isFloat && (j = 2), D.isAnisotropicFiltering && E && !JEContext.sh() && (D.isAnisotropicFiltering = !1);
                        var U = D.dc || G.createTexture(),
                            N = null,
                            I = !1,
                            X = 0,
                            H = 0,
                            W = !1,
                            K = !1,
                            Q = !1,
                            Z = null,
                            tt = null,
                            et = null,
                            rt = null,
                            nt = null,
                            it = null,
                            at = null,
                            ot = D.isFlipY,
                            ut = (s = D.S && D.isMipmap) && $.ye(),
                            st = !(!s || !ut),
                            ft = null,
                            ct = -1,
                            lt = !1,
                            vt = !1,
                            ht = h = null;
                        D.width && (X = D.width, H = D.height ? D.height : X);
                        var zt = {
                            get: function() { return U },
                            F: function() { return X },
                            X: function() { return H },
                            ph: function() { return D.url },
                            th: function() { return D.isFloat },
                            vh: function() { return D.S },
                            wh: function() { return D.isLinear },
                            $b: function() { G.generateMipmap(G.TEXTURE_2D) },
                            we: function(e, r) { st ? (e || (e = zt.ud()), T.Lb(r), t(ft[e]), u[r] = -1) : zt.g(r) },
                            ud: function() { return -1 === ct && (ct = Math.log(X) / Math.log(2)), ct },
                            Re: function(e) {
                                if (st) {
                                    e || (e = zt.ud()), C.set("s12"), T.Lb(0);
                                    for (var r = X, n = H, i = 1; i <= e; ++i) r /= 2, n /= 2, C.ba("u8", .25 / r, .25 / n), G.viewport(0, 0, r, n), t(ft[i - 1]), G.framebufferTexture2D(V.lb(), G.COLOR_ATTACHMENT0, G.TEXTURE_2D, ft[i], 0), q.l(!1, 1 === i);
                                    u[0] = -1
                                } else zt.$b()
                            },
                            Tf: function(t) {
                                (S = !B(t)) ? (I = null, D.J = t, w()) : I = t
                            },
                            g: function(e) { return !!W && (T.Lb(e), u[e] !== M && (t(U), u[e] = M, !0)) },
                            Ma: function(e) { G.activeTexture(a[e]), i = e, t(U), u[e] = M },
                            o: function() { f = zt, G.framebufferTexture2D(V.lb(), G.COLOR_ATTACHMENT0, G.TEXTURE_2D, U, 0) },
                            aa: function() { f = zt, G.viewport(0, 0, X, H), G.framebufferTexture2D(V.lb(), G.COLOR_ATTACHMENT0, G.TEXTURE_2D, U, 0) },
                            Nc: T.Nc,
                            ce: function(t, e) { X = t, H = e },
                            resize: function(t, e) { zt.ce(t, e), x() },
                            clone: function(t) { return t = T.instance({ width: X, height: H, S: D.S, isFloat: D.isFloat, isLinear: D.isLinear, isMirrorY: D.isMirrorY, isFlipY: t ? !ot : ot, isPot: D.isPot }), Y.set("s0"), V.fa(), t.o(), G.viewport(0, 0, X, H), zt.g(0), q.l(!0, !0), t },
                            Wf: function() { G.viewport(0, 0, X, H) },
                            remove: function() { G.deleteTexture(U), K = !0, z.splice(z.indexOf(zt), 1), zt = null },
                            refresh: function() { zt.Ma(0), ot && G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL, !0), S ? G.texImage2D(G.TEXTURE_2D, 0, nt, it, at, D.J) : G.texImage2D(G.TEXTURE_2D, 0, nt, X, H, 0, it, at, I), ot && G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL, !1) },
                            Vd: function() { return Q || F(), G.readPixels(0, 0, X, 4 * H, G.RGBA, G.UNSIGNED_BYTE, et), _(), Z },
                            Jf: function() { return Q || F(), J.Bb(0, 0, X, 4 * H, et).then(function() { return _(), Z }) },
                            Lf: function() { return vt || k(), G.readPixels(0, 0, X, H, G.RGBA, G.UNSIGNED_BYTE, h), ht },
                            Kf: function() { return vt || k(), J.Bb(0, 0, X, H, h) },
                            fd: function(t) {
                                if (V.P(), C.set("s13"), zt.g(0), t) G.viewport(0, 0, X, H), C.Vf("u9", .25, .25, .25, .25), q.l(!1, !0);
                                else
                                    for (t = 0; 4 > t; ++t) G.viewport(0, H * t, X, H), C.de("u9", b[t]), q.l(!1, 0 === t)
                            },
                            Ha: function(e) {
                                var r = at === c[0] && ! function() { if (null !== A.fc) return A.fc; var t = n(new Uint8Array([127, 127, 127, 127]), !1); return null === t || (A.fc = t) }();
                                t(U), ot && G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL, !0), r ? (P || ((L = document.createElement("canvas")).width = X, L.height = H, (O = L.getContext("2d")).createImageData(X, H), P = !0), null.data.set(e), O.putImageData(null, 0, 0), G.texImage2D(G.TEXTURE_2D, 0, nt, it, at, L)) : G.texImage2D(G.TEXTURE_2D, 0, nt, X, H, 0, it, at, e), u[i] = M, ot && G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL, !1)
                            },
                            Zh: function(e, r) { t(U), r && G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL, !0), G.texImage2D(G.TEXTURE_2D, 0, nt, it, at, e), u[i] = M, r && G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL, !1) },
                            Oh: function(t, e) {
                                var r = X * H,
                                    n = 4 * r;
                                t = D.S ? t ? "RGBE" : "JSON" : "RGBA", e && (t = e), e = J.ka() && !1;
                                var i = null;
                                switch (t) {
                                    case "RGBE":
                                        i = "s43";
                                        break;
                                    case "JSON":
                                        i = e ? "s0" : "s13";
                                        break;
                                    case "RGBA":
                                    case "RGBAARRAY":
                                        i = "s7"
                                }
                                if (Q || ("RGBA" === t || "RGBE" === t || "RGBAARRAY" === t ? (tt = new Uint8Array(n), Q = !0) : "JSON" !== t || e || F()), V.P(), C.set(i), zt.g(0), n = null, "RGBA" === t || "RGBE" === t || "RGBAARRAY" === t) {
                                    if (G.viewport(0, 0, X, H), q.l(!0, !0), G.readPixels(0, 0, X, H, G.RGBA, G.UNSIGNED_BYTE, tt), "RGBAARRAY" === t) return { data: tt };
                                    d || (m = document.createElement("canvas"), p = m.getContext("2d"), d = !0), m.width = X, m.height = H, (r = p.createImageData(X, H)).data.set(tt), p.putImageData(r, 0, 0), n = m.toDataURL("image/png")
                                } else if ("JSON" === t)
                                    if (e) n = new Float32Array(r), G.viewport(0, 0, X, H), q.l(!0, !0), G.readPixels(0, 0, X, H, G.RGBA, G.FLOAT, n);
                                    else { for (n = 0; 4 > n; ++n) G.viewport(0, H * n, X, H), C.de("u9", b[n]), q.l(!n, !n); for (zt.Vd(), n = Array(r), e = 0; e < r; ++e) n[4 * e] = Z[0][e], n[4 * e + 1] = Z[1][e], n[4 * e + 2] = Z[2][e], n[4 * e + 3] = Z[3][e] }
                                return { format: t, data: n, width: X, height: H, isMirrorY: D.isMirrorY, isFlipY: "RGBA" === t ? D.isFlipY : !D.isFlipY }
                            }
                        };
                        if (D.isMipmap && !st && W && !lt && (zt.$b(), lt = !0), D.url) t(U), G.texImage2D(G.TEXTURE_2D, 0, G.RGBA, 1, 1, 0, G.RGBA, G.UNSIGNED_BYTE, null), (N = new Image).yg = "Anonymous", N.crossOrigin = "Anonymous", N.src = D.url, N.onload = function() { X = N.width, H = N.height, x() };
                        else if (D.J) {
                            var gt = function() { w(), X ? x() : setTimeout(gt, 1) };
                            gt()
                        } else D.array ? (D.S && !D.isFloat ? D.array instanceof Uint16Array ? (I = D.array, x()) : function() { if (null !== A.ec) return A.ec; var t = n(r([.5, .5, .5, .5]), !0); return null === t || (A.ec = t) }() ? (I = r(D.array), x()) : (x(), T.qd(G, U, zt.F(), zt.X(), D.array, ot, !0)) : (I = D.isFloat ? D.array instanceof Float32Array ? D.array : new Float32Array(D.array) : D.array instanceof Uint8Array ? D.array : new Uint8Array(D.array), x()), D.isKeepArray || (I && I !== D.array && (I = null), delete D.array)) : D.dc ? W = !0 : x();
                        return zt.kh = zt.F, D.qa && W && (D.qa(zt), D.qa = null), z.push(zt), zt
                    },
                    P: function(e) { e !== i && (G.activeTexture(a[e]), i = e), u[e] = -1, t(null) },
                    ng: function(t) { s.random.g(t) },
                    Nc: function() { f = null, G.framebufferTexture2D(V.lb(), G.COLOR_ATTACHMENT0, G.TEXTURE_2D, null, 0) },
                    reset: function() {
                        0 !== i && G.activeTexture(a[0]);
                        for (var t = 0; t < a.length; ++t) u[t] = -1;
                        i = -1
                    },
                    Lh: function() { i = -1 },
                    eg: function() { for (var t = 0; t < a.length; ++t) T.P(t) },
                    rd: function() { s && (s.random.remove(), s.me.remove()) },
                    Yh: function(t, e) {
                        if ("RGBA" === t.format || "RGBE" === t.format) {
                            var r = new Image;
                            r.src = t.data, r.onload = function() {
                                T.instance({
                                    isMirrorY: t.isMirrorY,
                                    isFlipY: t.isFlipY,
                                    isFloat: !1,
                                    J: r,
                                    qa: function(r) {
                                        if ("RGBA" === t.format) e(r);
                                        else {
                                            var n = t.width,
                                                i = t.height,
                                                a = T.instance({ isMirrorY: t.isMirrorY, isFloat: !0, width: n, height: i, isFlipY: t.isFlipY });
                                            V.fa(), G.viewport(0, 0, n, i), C.set("s44"), a.o(), r.g(0), q.l(!0, !0), T.P(0), e(a), J.flush(), setTimeout(r.remove, 50)
                                        }
                                    }
                                })
                            }
                        } else "JSON" === t.format ? e(T.instance({ isFloat: !0, isFlipY: t.isFlipY, width: t.width, height: t.height, array: new Float32Array(t.data) })) : e(!1)
                    },
                    Ee: r,
                    m: function() { f && (Q.fa(), T.Nc(), Q.P()), T.eg(), z.slice(0).forEach(function(t) { t.remove() }), z.splice(0), h = !1, o = 0, void 0 !== $ && $.m(), s = null }
                };
            return T
        }(),
        W = {
            instance: function(t) {
                var e = [H.instance(t), H.instance(t)],
                    r = [e[1], e[0]],
                    n = r,
                    i = { Nf: function(t) { n[1].o(), n[0].g(t), i.he() }, Of: function(t) { n[1].aa(), n[0].g(t), i.he() }, he: function() { n = n === e ? r : e }, refresh: function() { n[0].refresh(), n[1].refresh() }, g: function(t) { n[0].g(t) }, Ma: function(t) { n[0].Ma(t) }, mg: function(t) { n[1].g(t) }, eh: function() { return n[0] }, ih: function() { return n[1] }, Ha: function(t) { n[0].Ha(t), n[1].Ha(t) }, remove: function() { n[0].remove(), n[1].remove(), n = null }, sync: function() { i.Of(0), C.set("s0"), K.l(!1, !1) } };
                return i
            }
        },
        q = function() {
            function t(t) { var e = { ea: null, L: null }; return e.ea = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, e.ea), t.bufferData(t.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), t.STATIC_DRAW), e.L = t.createBuffer(), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, e.L), t.bufferData(t.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2]), t.STATIC_DRAW), e }
            var e = null,
                r = 0,
                n = !1,
                i = [],
                a = -2,
                o = -2,
                u = {
                    reset: function() { o = a = -2 },
                    v: function() { n || (e = t(G), u.Aa(), n = !0) },
                    instance: function(t) {
                        var e = r++,
                            n = t.L ? t.L.length : 0,
                            u = void 0 === t.mode ? G.STATIC_DRAW : t.mode,
                            s = G.createBuffer();
                        G.bindBuffer(G.ARRAY_BUFFER, s), G.bufferData(G.ARRAY_BUFFER, t.ea instanceof Float32Array ? t.ea : new Float32Array(t.ea), u), a = e;
                        var f = null,
                            c = null,
                            l = null;
                        if (t.L) {
                            f = G.createBuffer(), G.bindBuffer(G.ELEMENT_ARRAY_BUFFER, f);
                            var v = null;
                            65536 > t.L.length ? (v = Uint16Array, c = G.UNSIGNED_SHORT, l = 2) : (v = Uint32Array, c = G.UNSIGNED_INT, l = 4), v = t.L instanceof v ? t.L : new v(t.L), G.bufferData(G.ELEMENT_ARRAY_BUFFER, v, u), o = e
                        }
                        var h = { xe: function(t) { a !== e && (G.bindBuffer(G.ARRAY_BUFFER, s), a = e), t && Y.Gc() }, ue: function() { o !== e && (G.bindBuffer(G.ELEMENT_ARRAY_BUFFER, f), o = e) }, bind: function(t) { h.xe(t), h.ue() }, Cg: function() { G.drawElements(G.TRIANGLES, n, c, 0) }, Dg: function(t, e) { G.drawElements(G.TRIANGLES, t, c, e * l) }, remove: function() { G.deleteBuffer(s), t.L && G.deleteBuffer(f), h = null } };
                        return i.push(h), h
                    },
                    Aa: function() {-1 !== a && (G.bindBuffer(G.ARRAY_BUFFER, e.ea), a = -1), -1 !== o && (G.bindBuffer(G.ELEMENT_ARRAY_BUFFER, e.L), o = -1) },
                    l: function(t, e) { t && q.Aa(), e && Y.Fa(), G.drawElements(G.TRIANGLES, 3, G.UNSIGNED_SHORT, 0) },
                    ib: function(e) {
                        var r = t(e = e || G);
                        e.bindBuffer(e.ARRAY_BUFFER, r.ea), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, r.L), Y.Db(e), e.clear(e.COLOR_BUFFER_BIT), e.drawElements(e.TRIANGLES, 3, e.UNSIGNED_SHORT, 0), e.flush(), e.bindBuffer(e.ARRAY_BUFFER, null), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null), e.deleteBuffer(r.ea), e.deleteBuffer(r.L), u.reset(), n && (u.Aa(), Y.Fa())
                    },
                    rd: function() {
                        var t = G,
                            r = e;
                        t.deleteBuffer(r.ea), t.deleteBuffer(r.L)
                    },
                    m: function() { u.rd(), i.forEach(function(t) { t.remove() }), G.bindBuffer(G.ARRAY_BUFFER, null), G.bindBuffer(G.ELEMENT_ARRAY_BUFFER, null), u.reset(), n = !1, i.splice(0), r = 0 }
                };
            return u
        }(),
        V = (_ = null, F = null, k = null, D = !1, M = [], j = { K: -2, pd: 1 }, S = {
            rb: function() { return D },
            v: function() {
                if (!D) {
                    _ = G.createFramebuffer();
                    var t = J.ka();
                    F = t && G.DRAW_FRAMEBUFFER ? G.DRAW_FRAMEBUFFER : G.FRAMEBUFFER, k = t && G.READ_FRAMEBUFFER ? G.READ_FRAMEBUFFER : G.FRAMEBUFFER, D = !0
                }
            },
            ah: function() { return F },
            af: function() { return k },
            lb: function() { return G.FRAMEBUFFER },
            jh: function() { return j },
            Ug: function() { return _ },
            instance: function(t) {
                void 0 === t.Bd && (t.Bd = !1);
                var e = t.D ? t.D : null,
                    r = t.width,
                    n = void 0 !== t.height ? t.height : t.width,
                    i = _,
                    a = null,
                    o = !1,
                    u = !1,
                    s = 0;
                e && (r = r || e.F(), n = n || e.X());
                var f = { be: function() { o || (i = G.createFramebuffer(), o = !0, s = j.pd++) }, qe: function() { f.be(), f.o(), a = G.createRenderbuffer(), G.bindRenderbuffer(G.RENDERBUFFER, a), G.renderbufferStorage(G.RENDERBUFFER, G.DEPTH_COMPONENT16, r, n), G.framebufferRenderbuffer(F, G.DEPTH_ATTACHMENT, G.RENDERBUFFER, a), G.clearDepth(1) }, bind: function(t, a) { s !== j.K && (G.bindFramebuffer(F, i), j.K = s), e && e.o(), a && G.viewport(0, 0, r, n), t && G.clear(G.COLOR_BUFFER_BIT | G.DEPTH_BUFFER_BIT) }, lg: function() { s !== j.K && (G.bindFramebuffer(F, i), j.K = s) }, clear: function() { G.clear(G.COLOR_BUFFER_BIT | G.DEPTH_BUFFER_BIT) }, ug: function() { G.clear(G.COLOR_BUFFER_BIT) }, vg: function() { G.clear(G.DEPTH_BUFFER_BIT) }, Wf: function() { G.viewport(0, 0, r, n) }, o: function() { s !== j.K && (G.bindFramebuffer(F, i), j.K = s) }, rtt: function(t) { e = t, j.K !== s && (G.bindFramebuffer(G.FRAMEBUFFER, i), j.K = s), t.o() }, P: function() { G.bindFramebuffer(F, null), j.K = -1 }, resize: function(t, e) { r = t, n = e, a && (G.bindRenderbuffer(G.RENDERBUFFER, a), G.renderbufferStorage(G.RENDERBUFFER, G.DEPTH_COMPONENT16, r, n)) }, remove: function() { i === _ || u || (G.bindFramebuffer(F, i), G.framebufferTexture2D(F, G.COLOR_ATTACHMENT0, G.TEXTURE_2D, null, 0), a && G.framebufferRenderbuffer(F, G.DEPTH_ATTACHMENT, G.RENDERBUFFER, null), G.bindFramebuffer(F, null), G.deleteFramebuffer(i), a && G.deleteRenderbuffer(a)), u = !0 } };
                return t.Bd && f.qe(), M.push(f), f
            },
            P: function() { G.bindFramebuffer(F, null), j.K = -1 },
            fg: function() { G.bindFramebuffer(F, null), G.clear(G.COLOR_BUFFER_BIT | G.DEPTH_BUFFER_BIT), J.fe(), j.K = -1 },
            reset: function() { j.K = -2 },
            fa: function() { 0 !== j.K && (G.bindFramebuffer(F, _), j.K = 0) },
            clear: function() { J.fe(), G.clear(G.COLOR_BUFFER_BIT) },
            m: function() { S.P(), M.forEach(function(t) { t.remove() }), null !== _ && (G.deleteFramebuffer(_), _ = null), S.reset(), D = !1, M.splice(0), j.pd = 1 }
        }),
        J = function() {
            function t() { o = void 0 === X ? JEContext : X, u = !0 }

            function e(t, e) { for (var r = 0; r < t.length; ++r) { var n = e.getExtension(t[r]); if (n) return n } return null }

            function r() { null !== g.Hb && (clearTimeout(g.Hb), g.Hb = null), g.Ca = !1 }

            function n() { G.bindBuffer(g.Y, null) }

            function i() { g.Ba.forEach(function(t) { G.deleteSync(t) }), g.Ba.splice(0) }

            function a() { g.ga = (g.ga + 1) % g.Pa, ++g.wc }
            var o = null,
                u = !1,
                s = { Fd: !1, Jc: null, Kc: null, Id: !1, uf: !1, Lc: null, Jd: !1, Mc: null, Gd: !1, Ob: null, mf: !1, Pb: null, pf: !1 },
                f = null,
                c = { ha: !0, ja: !0, Yb: !0, Ud: !1 },
                l = null,
                v = !0,
                h = null,
                z = null,
                g = { Fe: 1, Pa: -1, ga: 0, wc: 0, Ca: !1, ua: [], Ba: [], mb: [], Y: null, Hb: null },
                d = "undefined" == typeof window ? {} : window,
                m = {
                    v: function() {
                        if (u) return !0;
                        m.reset(), u || t();
                        var e = G;
                        return f.Fd || (f.Jc = m.md(e), d.GL_EXT_FLOAT = f.Jc, f.Id = !!f.Jc, (f.Id || m.ka()) && (f.Kc = m.nd(e), f.uf = !!f.Kc, d.GL_EXT_FLOATLINEAR = f.Kc), f.Fd = !0), f.Gd || (f.Lc = m.gb(e), f.Lc && (f.Jd = !0, d.GL_EXT_HALFFLOAT = f.Lc), (f.Jd || m.ka()) && (f.Mc = m.od(e), d.GL_EXT_HALFFLOATLINEAR = f.Mc), f.rh = !!f.Mc, f.Gd = !0), f.Ob = m.kd(e), f.mf = !!f.Ob, d.GL_EXT_COLORBUFFERFLOAT = f.Ob, f.Pb = m.ld(e), f.pf = !!f.Pb, d.GL_EXT_COLORBUFFERHALFFLOAT = f.Pb, V.v(), H.v(), !!m.Ie() && (q.v(), H.lf(), !0)
                    },
                    reset: function() { f = Object.assign({}, s), l = Object.assign({}, c) },
                    F: function() { return u || t(), o.F() },
                    X: function() { return u || t(), o.X() },
                    ka: function() { return u || t(), o.ka() },
                    jd: function(t) { m.kd(t), m.ld(t), m.md(t), m.nd(t), m.gb(t), m.od(t) },
                    kd: e.bind(null, ["EXT_color_buffer_float", "WEBGL_color_buffer_float", "OES_color_buffer_float"]),
                    ld: e.bind(null, ["EXT_color_buffer_half_float", "WEBGL_color_buffer_half_float", "OES_color_buffer_half_float"]),
                    md: e.bind(null, ["OES_texture_float", "MOZ_OES_texture_float", "WEBKIT_OES_texture_float"]),
                    nd: e.bind(null, ["OES_texture_float_linear", "MOZ_OES_texture_float_linear", "WEBKIT_OES_texture_float_linear"]),
                    gb: e.bind(null, ["OES_texture_half_float", "MOZ_OES_texture_half_float", "WEBKIT_OES_texture_half_float"]),
                    od: e.bind(null, ["OES_texture_half_float_linear", "MOZ_OES_texture_half_float_linear", "WEBKIT_OES_texture_half_float_linear"]),
                    ac: function(t) { var e = m.gb(t); return e && e.HALF_FLOAT_OES ? e.HALF_FLOAT_OES : t.HALF_FLOAT || t.FLOAT },
                    Ye: function() { return z || G.RGBA32F || G.RGBA },
                    Ze: function() { return h || G.RGBA16F || G.RGBA },
                    Ue: function() { return l },
                    Yc: function() { return l.ha },
                    qg: function() { return l.ja },
                    pg: function() { return l.Yb },
                    ze: function() { return l.Ud && v },
                    ke: function(t) { v = t, !t && g.Ca && (i(), G.bindBuffer(g.Y, null), g.Ca = !1) },
                    xh: function() { return g.Ca },
                    Fb: function(t, e, r) {
                        function n() { t.bindTexture(t.TEXTURE_2D, null), t.bindFramebuffer(i, null), t.deleteTexture(u), t.deleteFramebuffer(o) }
                        var i = t.FRAMEBUFFER,
                            a = t.NEAREST,
                            o = t.createFramebuffer();
                        t.bindFramebuffer(i, o);
                        var u = t.createTexture();
                        if (t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, u), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !1), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, a), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, a), t.texImage2D(t.TEXTURE_2D, 0, e, 3, 3, 0, t.RGBA, r, null), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, u, 0), t.checkFramebufferStatus(t.READ_FRAMEBUFFER || t.FRAMEBUFFER) !== t.FRAMEBUFFER_COMPLETE) return n(), !1;
                        for (Y.Fc(t), t.clearColor(0, 0, 0, 0), t.viewport(0, 0, 3, 3), t.disable(t.DEPTH_TEST), t.clear(t.COLOR_BUFFER_BIT), q.ib(t), t.bindFramebuffer(i, null), Y.Wa(t), t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, u), q.ib(t), e = new Uint8Array(36), t.readPixels(0, 0, 3, 3, t.RGBA, t.UNSIGNED_BYTE, e), n(), r = 0; 36 > r; ++r)
                            if (3 != r % 4 && 3 < Math.abs(e[r] - 127)) return !1;
                        return !0
                    },
                    Rb: function(t) {
                        var e = { ha: !1, ja: !1 };
                        t.disable(t.BLEND), t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT), t.RGBA32F && m.Fb(t, t.RGBA32F, t.FLOAT) && (e.ha = !0, z = t.RGBA32F), !e.ha && m.Fb(t, t.RGBA, t.FLOAT) && (e.ha = !0, z = t.RGBA);
                        var r = m.ac(t);
                        return h = null, t.RGBA16F && m.Fb(t, t.RGBA16F, r) && (e.ja = !0, h = t.RGBA16F), !e.ja && m.Fb(t, t.RGBA, r) && (e.ja = !0, h = t.RGBA), e
                    },
                    Je: function() {
                        var t = V.instance({ width: 2 });
                        t.be();
                        var e = H.instance({ width: 2, isFloat: !0, wb: 3 });
                        t.o(), e.o(), m.flush(), G.checkFramebufferStatus(V.af()) !== G.FRAMEBUFFER_COMPLETE ? (H.Qf(), l.Yb = !1) : l.Yb = !0, t.remove(), e.remove()
                    },
                    Ke: function() {
                        var t = !1;
                        m.ka() && (t = "PIXEL_PACK_BUFFER STREAM_READ SYNC_GPU_COMMANDS_COMPLETE WAIT_FAILED fenceSync deleteSync createBuffer".split(" ").every(function(t) { return void 0 !== G[t] })), l.Ud = t
                    },
                    Ie: function() { var t = m.Rb(G); return Object.assign(l, t), !(!l.ha && !l.ja || (m.Je(), m.Ke(), 0)) },
                    Wd: function(t, e, r, n, i) { return G.readPixels(t, e, r, n, G.RGBA, G.UNSIGNED_BYTE, i), Promise.resolve(i, !1) },
                    Bb: function(t, e, i, o, u, s, f) {
                        if (!m.ze()) return m.Wd(t, e, i, o, u);
                        g.Pa = f || g.Fe,
                            function(t) {
                                if (0 === g.ua.length) {
                                    g.Y = G.PIXEL_PACK_BUFFER, g.ua.splice(0), g.mb.splice(0);
                                    for (var e = 0; e < g.Pa; ++e) g.ua.push(G.createBuffer()), g.mb.push(-1);
                                    g.ga = 0, g.wc = 0
                                }
                                G.bindBuffer(g.Y, g.ua[g.ga]), t.byteLength !== g.mb[g.ga] && (G.bufferData(g.Y, t.byteLength, G.STREAM_READ), g.mb[g.ga] = t.byteLength), g.qh = !0
                            }(u), G.readPixels(t, e, i, o, G.RGBA, G.UNSIGNED_BYTE, 0), g.Ba[g.ga] = G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE, 0), m.flush();
                        var c = !1;
                        return new Promise(function(t, e) {
                            r(), g.wc + 1 < g.Pa ? (n(), a(), t(u, !1)) : (g.Ca = !0, function i() {
                                if (!g.Ca) return r(), n(), a(), e(), !1;
                                var o = (g.ga + 1) % g.Pa;
                                switch (G.clientWaitSync(g.Ba[o], 0, 0)) {
                                    case G.TIMEOUT_EXPIRED:
                                    case G.WAIT_FAILED:
                                        break;
                                    default:
                                        return r(), G.deleteSync(g.Ba[o]), g.Ba[o] = null, G.bindBuffer(g.Y, g.ua[o]), G.getBufferSubData(g.Y, 0, u), n(), a(), t(u, c), !0
                                }
                                return g.Hb = setTimeout(i, 0), !1
                            }() || !s || c || (c = !0, s()))
                        })
                    },
                    fe: function() { G.viewport(0, 0, m.F(), m.X()) },
                    flush: function() { G.flush() },
                    m: function() { r(), i(), H.m(), V.m(), q.m(), g.ua.forEach(function(t) { G.deleteBuffer(t) }), g.ua.splice(0), Y.reset(), u = !1 }
                };
            return m
        }(),
        K = q,
        Q = V,
        Z = H,
        $ = function() {
            function t(t, e, r, n) {
                d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MIN_FILTER, n ? d.NEAREST_MIPMAP_NEAREST : d.LINEAR);
                var i = null;
                if (null !== r) try { if ("FUCKING_BIG_ERROR" === (i = d.getError())) return !1; if (d.texImage2D(d.TEXTURE_2D, 0, t, 4, 4, 0, d.RGBA, e, r), (i = d.getError()) !== d.NO_ERROR) return !1 } catch (t) { return !1 }
                if (n && d.generateMipmap(d.TEXTURE_2D), d.clear(d.COLOR_BUFFER_BIT), K.ib(d), "FUCKING_BIG_ERROR" === (i = d.getError())) return !1;
                if (d.readPixels(0, 0, 2, 2, d.RGBA, d.UNSIGNED_BYTE, c), (i = d.getError()) === d.INVALID_OPERATION && void 0 !== d.PIXEL_PACK_BUFFER && (d.bindBuffer(d.PIXEL_PACK_BUFFER, null), d.readPixels(0, 0, 2, 2, d.RGBA, d.UNSIGNED_BYTE, c), i = d.getError()), i !== d.NO_ERROR) return !1;
                for (r = !0, n = 0; 16 > n; ++n) r = r && 4 > Math.abs(c[n] - 127);
                return r && (s.Sd = e, s.Ad = t), r
            }

            function e(e, r) { return !(!m.ha || !t(e, d.FLOAT, new Float32Array(l), r) || (u = o.Sc, 0)) }

            function r(e, r, n) {
                if (!m.ja) return !1;
                var i = H.Ee(l),
                    a = J.gb(d);
                return a && a.HALF_FLOAT_OES && t(e, a.HALF_FLOAT_OES, i, r) || d.HALF_FLOAT && t(e, d.HALF_FLOAT, i, r) ? (u = o.Ja, !0) : (i = new Float32Array(l), t(e, d.FLOAT, i, r) ? (u = o.Ja, !0) : (d.bindTexture(d.TEXTURE_2D, n), d.texImage2D(d.TEXTURE_2D, 0, d.RGBA, 2, 2, 0, d.RGBA, d.UNSIGNED_BYTE, null), d.bindFramebuffer(s.cb, E), H.qd(d, n, 2, 2, i, !1, !1), d.bindFramebuffer(s.cb, null), d.bindTexture(d.TEXTURE_2D, n), !!t(e, null, null, r) && (u = o.Ja, !0)))
            }

            function n(t, n, i) { return f = !0, !!(r(t, !0, i) || e(n, !0) || (f = !1, r(t, !1, i) || e(n, !1))) }

            function i(t) {
                if (u === o.M) {
                    d = t || G, u = o.RGBA8, f = !0, J.jd(d), m || (m = J.Rb(d)), Q.reset(), E = d.createFramebuffer(), s.cb = d.DRAW_FRAMEBUFFER || d.FRAMEBUFFER, d.bindFramebuffer(s.cb, null), d.clearColor(0, 0, 0, 0), d.viewport(0, 0, 2, 2), C.M(), p = C.Wa(d), t = d.createTexture(), d.activeTexture(d.TEXTURE0), d.bindTexture(d.TEXTURE_2D, t), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_S, d.REPEAT), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_T, d.REPEAT), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MAG_FILTER, d.NEAREST), b = t;
                    var e = t = d.RGBA,
                        r = d.RGBA16F,
                        i = d.RGBA32F;
                    return i && (t = i), r && (e = r), (r || i) && n(e, t, b) ? (a(), !0) : (t = e = d.RGBA, n(e, t, b) ? (a(), !0) : (u = o.RGBA8, a(), !1))
                }
            }

            function a() { d.deleteProgram(p.ya), d.deleteTexture(b), b = p = null }
            for (var o = { M: -1, Sc: 3, Ja: 2, RGBA8: 0 }, u = o.M, s = { Sd: null, Ad: null, cb: null }, f = !0, c = new Uint8Array(16), l = Array(64), v = 0; 4 > v; ++v)
                for (var h = 0; 4 > h; ++h) {
                    var z = 0 == (h + v) % 2 ? 1 : 0,
                        g = 4 * v + h;
                    l[4 * g] = z, l[4 * g + 1] = z, l[4 * g + 2] = z, l[4 * g + 3] = z
                }
            var d = null,
                m = null,
                p = null,
                b = null,
                E = null;
            return { ye: function(t) { return i(t), f }, Xc: function(t, e) { return u === o.M && (typeof("undefined" !== e) && (m = e), i(t)), u !== o.RGBA8 }, uh: function(t) { return i(t), u === o.Sc }, vf: function(t) { return i(t), u === o.Ja }, bh: function(t) { return i(t), s.Sd }, $e: function(t) { return i(t), s.Ad }, m: function() { d = null, f = !0, u = o.M, m = null } }
        }(),
        tt = {
            instance: function(t) {
                var e = Z.instance(t.alpha),
                    r = Z.instance(t.beta);
                return { Me: function() { e.g(1), r.g(2) } }
            }
        },
        et = {
            instance: function(t) {
                var e = null,
                    r = !1,
                    n = !1,
                    i = null,
                    a = !1,
                    o = !1,
                    u = null,
                    s = void 0 !== t.preprocessing && t.preprocessing,
                    f = void 0 === t.preprocessingSize ? t.size : t.preprocessingSize;
                t.mask && (r = !0, gt && void 0 !== gt.te && (t.mask = gt.te + t.mask), e = Z.instance({ isFloat: !1, url: t.mask }));
                var c = !1;
                switch (t.customInputShader && (c = "s45", C.Uc({ name: "_", id: c, h: t.customInputShader, Xh: ["uSource"], precision: "lowp" }), C.N(c, [{ type: "1i", name: "_", value: 0 }])), s) {
                    case "sobel":
                        u = "s32", a = !0;
                        break;
                    case "meanNormalization":
                        u = "s33", a = !0;
                        break;
                    case "grayScale":
                        u = "s29", a = !1;
                        break;
                    case "grayScaleTilt":
                        u = "s30", o = !0, a = !1;
                        break;
                    case "rgbGrayTilt":
                        u = "s31", o = !0, a = !1;
                        break;
                    case "copy":
                        u = c || "s0";
                        break;
                    case "inputLightRegulation":
                        u = c || "s29", i = st.instance({ zd: f, Rd: t.size, Pd: t.nBlurPass, qb: !1 }), n = !0;
                        break;
                    case "inputMix0":
                        u = "none", i = ft.instance({ B: f, oe: t.varianceMin, Wc: t.blurKernelSizePx, gain: t.gain || 1, qb: !1 }), n = !0;
                        break;
                    case "direct":
                    case "none":
                        u = "abort";
                        break;
                    default:
                        u = "s4"
                }
                o && C.N(u, [{ name: "u27", type: "1f", value: t.tilt }]), r && (u += "Mask");
                var l = Z.instance({ isFloat: !1, isPot: !1, width: t.size }),
                    v = { F: function() { return f }, bc: function() { return v.F() }, ef: function() { return n ? i.cc() : l }, U: function(o) { Q.fa(), "abort" !== u && ("none" !== u && (C.set(u), a && C.H("u28", 1 / t.size), l.aa(), r && e.g(1), K.l(!1, !1), l.g(0), o = l), n && i.process(o)) }, m: function() { l.remove(), r && e.remove() } };
                return v
            }
        },
        rt = {
            instance: function(t) {
                function e(t) { return i.forEach(function(e, r) { a[r][0] = t[0][e], a[r][1] = t[1][e], a[r][2] = t[2][e], a[r][3] = t[3][e] }), a }
                t.normalize = t.normalize || !1;
                var r = { input: null, bias: null, hc: null, $: null, xb: null, Ac: null, Bc: null },
                    n = null,
                    i = [],
                    a = [],
                    o = !1,
                    u = null,
                    s = !0,
                    f = -1,
                    c = !!t.isReorganize && t.isReorganize,
                    l = !!t.kernelsCount,
                    v = !!t.dynPelu && tt.instance(t.dynPelu),
                    h = !!v,
                    z = { isEnabled: !1 };
                t.sf ? (t.sparsity = void 0 !== t.sparsity ? t.sparsity : t.zb.bc(), s = !1) : "full" === t.connectivityUp && (t.sparsity = t.zb.bc());
                var g = { elu: "s16", elu01: "s17", relu: "s15", arctan: "s19", sigmoid: "s14", copy: "s0", softplus: "s20", dynPelu: "s18" }[t.activation],
                    d = t.sparsity * t.sparsity,
                    m = !1,
                    p = t.size,
                    b = "";
                if (t.maxPooling) {
                    switch (t.maxPooling.size) {
                        case 2:
                            b = "s34";
                            break;
                        case 4:
                            b = "s35"
                    }
                    m = !0, p /= t.maxPooling.size, r.Ac = Z.instance({ isFloat: !0, isPot: !1, width: p })
                }
                var E = !!t.normalization,
                    y = null,
                    w = null,
                    R = null;
                if (E) {
                    y = "s46" + t.index.toString(), C.yd("s46", y, [((t.normalization.n - 1) / 2).toFixed(1)]), C.N(y, [{ type: "1i", name: "u1", value: 0 }, { type: "2f", name: "u8", value: [1 / t.size, 1 / t.size] }, { type: "1f", name: "u7", value: t.normalization.alpha }, { type: "1f", name: "u10", value: t.normalization.beta }, { type: "1f", name: "u31", value: t.normalization.k }]);
                    var A = { isFloat: !0, isPot: !0, width: t.size };
                    w = Z.instance(A), R = Z.instance(A)
                }
                var T = -1,
                    x = null;
                s && (r.$ = Z.instance({ isFloat: !0, isPot: !1, width: t.size })), r.bias = Z.instance(t.bias);
                var _ = {
                    F: function() { return t.size },
                    bc: function() { return p },
                    sd: function() { return t.classesCount },
                    ve: function(t) { n.g(t) },
                    Gf: function() { t.remap && t.remap.isEnabled && (z = { isEnabled: !0, zf: Z.instance({ isFloat: !1, isFlipY: !1, array: new Uint8Array(t.remap.maskTexture.data), width: t.remap.maskTexture.width, isPot: !1 }), tb: t.remap.layers.map(function(e) { return t.parent.cf(e) }), depth: t.remap.depth }) },
                    Rf: function() {
                        switch (t.connectivityUp) {
                            case "direct":
                                x = nt.instance(t.connectivity);
                                break;
                            case "square":
                                x = at.instance(t.connectivity);
                                break;
                            case "squareFast":
                                x = ut.instance(t.connectivity, t.activation);
                                break;
                            case "full":
                                x = it.instance(t.connectivity);
                                break;
                            case "conv":
                                f = t.kernelsCount, x = ot.instance(t.connectivity), c && (r.xb = Z.instance({ width: p, isFloat: !0, isFlipY: !1, isPot: !1 }))
                        }
                        if (x.Ga) {
                            var e = t.size * t.sparsity;
                            T = Math.log(e / t.size) / Math.log(2), r.input = Z.instance({ isMipmap: !0, isFloat: !0, isPot: !0, width: e, rc: T }), r.hc = Z.instance({ isFloat: !0, isPot: !0, width: t.size })
                        }
                    },
                    U: function(e, i) {
                        if (n = e, x.Ga ? (r.input.aa(), l && r.bias.g(2), x.U(z), r.input.g(0), r.input.Re(T), r.hc.aa(), l ? C.set("s0") : (C.set("s28"), C.H("u26", d), r.bias.g(1)), r.input.we(T, 0), K.l(!1, !1), C.set(g), E ? w.o() : r.$.o(), r.hc.g(0), h && v.Me(), K.l(!1, !1)) : (r.$.aa(), r.bias.g(1), x.U()), E && (C.set(y), R.o(), w.g(0), K.l(!1, !1), C.set("s47"), C.H("u7", 1), r.$.o(), R.g(1), K.l(!1, !1)), s) return m ? (r.Ac.aa(), r.$.g(0), C.set(b), C.ba("u8", 1 / t.size, 1 / t.size), K.l(!1, !1), i = r.Ac) : i = r.$, i.g(0), c && (r.xb.o(), C.set("s22"), C.ba("u13", f, p / f), K.l(!1, !1), i = r.xb, r.xb.g(0)), i;
                        var a = r.$;
                        switch (t.normalize && (C.set("gpuRawAvg" === o ? "s9" : "s8"), C.H("u4", 1 / t.size), r.Bc.aa(), r.$.g(0), K.l(!1, !1), a = r.Bc), e = null, o) {
                            case "cpuRGBA2Float":
                                a.fd(!1), i ? e = _.Hf(a).then(u) : (a = _.If(a), u(a));
                                break;
                            case "cpuMeanFloat":
                                if (a.fd(!0), i) e = a.Kf().then(u);
                                else {
                                    a = a.Lf();
                                    for (var A = 0; A < a.length; ++A);
                                    u(a)
                                }
                                break;
                            case "gpuRawAvg":
                            case "gpuRaw":
                                a.g(0);
                            case "none":
                                null !== u && u(a)
                        }
                        return i && null === e && (e = Promise.resolve()), e
                    },
                    He: function(e) {
                        e && (o = e.Cc || "none", u = e.zc || null), r.$ = Z.instance({ isFloat: !0, isPot: !0, isMipmap: !1, width: t.size }), e = void 0 !== t.classesCount && t.classesCount ? t.classesCount : t.size * t.size;
                        for (var n = 0, s = 0, f = 0; n < e; ++n) i.push(s + (t.size - 1 - f) * t.size), a.push([-1, -1, -1, -1]), ++s === t.size && (s = 0, ++f);
                        t.normalize && (r.Bc = Z.instance({ isFloat: !0, isPot: !0, width: t.size }))
                    },
                    Hf: function(t) { return t.Jf().then(e) },
                    If: function(t) { return e(t = t.Vd()), a },
                    m: function() {
                        for (var t in r) {
                            var e = r[t];
                            e && e.remove()
                        }
                        x && (x.m(), x = null)
                    }
                };
                return t.zb && _.Rf(t.zb), _
            }
        },
        nt = { instance: function(t) { var e = Z.instance(t.weights); return { Ga: !0, kb: function() { return 1 }, m: function() { e.remove() }, jf: function() { return e }, U: function() { C.set("s27"), e.g(1), K.l(!1, !1) } } } },
        it = {
            instance: function(t) {
                var e = t.fromLayerSize,
                    r = Z.instance(t.weights);
                return {
                    Ga: !0,
                    kb: function() { return e },
                    m: function() { r.remove() },
                    U: function(e) {
                        if (e.isEnabled) { C.set("s25"), e.zf.g(3); var n, i = Math.min(e.tb.length, e.depth); for (n = 0; n < i; ++n) e.tb[n].ve(4 + n) } else C.set("s24");
                        C.H("u17", t.toLayerSize), C.H("u18", t.fromLayerSize), r.g(1), K.l(!1, !1)
                    }
                }
            }
        },
        at = {
            instance: function(t) {
                for (var e = t.fromLayerSize, r = t.toLayerSize, n = t.toSparsity, i = n * r, a = i / e, o = e / r, u = 0, s = 0, f = Array(n * r * n * r * 4), c = Array(n * r * n * r * 4), l = Array(e * e), v = 0; v < l.length; ++v) l[v] = 0;
                v = Math.floor(n / 2);
                for (var h = .5 / r, z = .5 / e, g = .5 / i, d = 0; d < r; ++d)
                    for (var m = Math.round(d * o), p = 0; p < r; ++p) {
                        var b = Math.round(p * o),
                            E = d / r,
                            y = p / r;
                        E += h, y += h;
                        for (var w = 0; w < n; ++w) {
                            var R = m + w - v;
                            0 > R && (R += e), R >= e && (R -= e);
                            for (var A = 0; A < n; ++A) {
                                var T = u / i,
                                    x = s / i,
                                    _ = b + A - v;
                                0 > _ && (_ += e), _ >= e && (_ -= e);
                                var F = R / e,
                                    k = _ / e;
                                x = 1 - x - 1 / i, F += z, k += z, T += g, x += g;
                                var D = d * n + w,
                                    M = p * n + A;
                                f[4 * (D = (M = r * n - M - 1) * r * n + D)] = T, f[4 * D + 1] = x, f[4 * D + 2] = F, f[4 * D + 3] = k, k = l[_ * e + R]++, c[4 * (_ = (_ = e * a - 1 - (_ = _ * a + (k - (D = k % a)) / a)) * e * a + (F = R * a + D))] = T, c[4 * _ + 1] = x, c[4 * _ + 2] = E, c[4 * _ + 3] = y, ++u >= i && (u = 0, ++s)
                            }
                        }
                    }
                l = null;
                var j = Z.instance(t.weights);
                delete t.weights.data;
                var S = Z.instance({ width: i, isFloat: !0, array: new Float32Array(c), isPot: !0 });
                c = null;
                var L = Z.instance({ width: i, isFloat: !0, array: new Float32Array(f), isPot: !0 });
                return f = null, { Ga: !0, kb: function() { return a }, m: function() { S.remove(), L.remove(), j.remove() }, U: function() { C.set("s23"), j.g(1), L.g(2), K.l(!1, !1) } }
            }
        },
        ot = {
            instance: function(t) {
                var e = t.kernelsCount,
                    r = t.toSparsity,
                    n = r * t.toLayerSize / t.fromLayerSize,
                    i = Z.instance(t.weights);
                return { Ga: !0, kb: function() { return n }, nh: function() { return r }, jf: function() { return i }, m: function() { i.remove() }, U: function() { C.set("s26"), C.H("u24", e), C.H("u25", r), C.H("u17", t.toLayerSize), C.H("u18", t.fromLayerSize), i.g(1), K.l(!1, !1) } }
            }
        },
        ut = {
            instance: function(t, e) {
                var r = t.fromLayerSize,
                    n = t.toLayerSize,
                    i = t.toSparsity,
                    a = t.stride ? t.stride : 1,
                    o = i * n / r,
                    u = n < r,
                    s = r / n,
                    f = Z.instance(t.weights),
                    c = "s48" + [r.toString(), n.toString(), i.toString(), a.toString(), e].join("_");
                return C.Qe(c) || (t = I(e, "gl_FragColor", "gl_FragColor"), n = [{ type: "1f", name: "u17", value: n }, { type: "1f", name: "u30", value: a }], u && n.push({ type: "1f", name: "u18", value: r }), r = [(u ? o : i).toFixed(1), t], u && r.push(s.toFixed(1)), C.yd(u ? "s40" : "s39", c, r), C.N(c, n.concat([{ type: "1i", name: "u15", value: 0 }, { type: "1i", name: "u23", value: 1 }, { type: "1i", name: "u14", value: 3 }]))), { Ga: !1, kb: function() { return o }, m: function() { f.remove() }, U: function() { C.set(c), f.g(3), K.l(!1, !1) } }
            }
        },
        st = {
            instance: function(t) {
                var e = t.Pd ? t.Pd : 3,
                    r = t.zd ? t.zd : 64,
                    n = t.Rd ? t.Rd : 64,
                    i = !!t.qb;
                t = { isFloat: !1, width: r, isPot: !1, isFlipY: !1 };
                var a = Z.instance(t),
                    o = Z.instance(t),
                    u = Z.instance(t),
                    s = Z.instance(t),
                    f = Z.instance({ isFloat: !0, width: n, isPot: !1, isFlipY: !1 }),
                    c = 1 / r;
                return {
                    process: function(t) {
                        C.set("s36"), s.o(), K.l(i, !1), C.set("s37");
                        for (var r = 0; r < e; ++r) a.o(), C.ba("u8", c, 0), K.l(i, !1), u.o(), s.g(0), K.l(i, !1), o.o(), a.g(0), C.ba("u8", 0, c), K.l(i, !1), s.o(), u.g(0), K.l(i, !1), r !== e - 1 && o.g(0);
                        C.set("s38"), f.o(), t.g(0), o.g(1), s.g(2), K.l(i, !1), f.g(0)
                    },
                    cc: function() { return f }
                }
            }
        },
        ft = {
            instance: function(t) {
                function e(t) { return Z.instance({ isFloat: t, width: r.B, isPot: !1, isFlipY: !1 }) }
                var r = Object.assign({ oe: .1, Wc: 9, B: 128, gain: 1, qb: !1 }, t),
                    n = e(!1),
                    i = [e(!1), e(!1), e(!1)],
                    a = [e(!1), e(!1), e(!1)],
                    o = e(!0),
                    u = [n, a[0], a[1]];
                t = "uniform sampler2D u1;const float e=1.1111,g=2.2222;uniform vec2 u32;varying vec2 vv0;void main(){float b=0.,c=0.;for(float a=-e;a<=e;a+=1.){vec2 i=u32*a,j=vv0+i*g;float d=1.2*a/e,f=exp(-d*d);b+=f*texture2D(u1,j).r,c+=f;}b/=c,gl_FragColor=vec4(b,0.,0.,1.);}".replace("1.1111", Math.round((r.Wc - 1) / 2).toFixed(2)).replace("2.2222", (1 / r.B).toFixed(6));
                var s = "uniform sampler2D u33,u34,u35,u36;const float f=1.1111;const vec3 g=vec3(1.,1.,1.);const float h=2.2222;varying vec2 vv0;void main(){vec3 a=texture2D(u33,vv0).rgb;float c=texture2D(u34,vv0).r,d=texture2D(u35,vv0).r,i=texture2D(u36,vv0).r,j=a.r*a.r;vec3 b=vec3(c,d,i),k=max(g*f,abs(j-b*b)),l=sqrt(k);gl_FragColor=vec4(a.r,h*(a-b)/l);}".replace("1.1111", r.oe.toFixed(4)).replace("2.2222", r.gain.toFixed(4)),
                    f = { u1: 0 };
                return C.Vc([{ id: "s50", name: "_", h: "uniform sampler2D u1;varying vec2 vv0;const vec3 f=vec3(.2126,.7152,.0722),g=vec3(1.,1.,1.);void main(){vec3 b=texture2D(u1,vv0).rgb;float a=dot(b,f);gl_FragColor=vec4(a,a,a,a);}", j: f, i: ["u1"], precision: "lowp" }, { id: "s51", name: "_", h: t, j: f, i: ["u1", "u32"], precision: "lowp" }, { id: "s52", name: "_", h: s, j: { u33: 0, u34: 1, u35: 2, u36: 3 }, i: ["u33", "u34", "u35", "u36"], precision: "highp" }]), {
                    process: function() {
                        C.set("s50"), n.aa(), K.l(r.qb, !1), C.set("s51");
                        for (var t = 0; 3 > t; ++t) C.ba("u32", 1, 0), i[t].o(), u[t].g(0), K.l(!1, !1), C.ba("u32", 0, 1), a[t].o(), i[t].g(0), K.l(!1, !1);
                        C.set("s52"), o.o(), n.g(0), a[0].g(1), a[1].g(2), a[2].g(3), K.l(!1, !1), o.g(0)
                    },
                    cc: function() { return o }
                }
            }
        },
        ct = {
            wd: function() { return !!ct.cd() && document.createElement("video") },
            Ra: function(t, e) { t[e] = !0, t.setAttribute(e, "true") },
            Ce: function() {
                var t = !1,
                    e = navigator.userAgent || navigator.vendor || window.opera;
                return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0), t
            },
            $c: function() { return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream },
            Te: function() { var t = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/); return t && t.length && 2 < t.length ? [parseInt(t[1], 10), parseInt(t[2], 10), parseInt(t[3] || 0, 10)] : [0, 0, 0] },
            Md: function() { try { return !!window.matchMedia("(orientation: portrait)").matches } catch (t) { return window.innerHeight > window.innerWidth } },
            Be: function() { return ct.ad() || ct.$c() },
            ad: function() { var t = navigator.userAgent.toLowerCase(); return -1 !== t.indexOf("safari") && -1 === t.indexOf("chrome") },
            Rg: function() { return ct.Ce() && ct.Md() ? window.innerHeight / window.innerWidth * 45 : 45 },
            cd: function() { return !(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) },
            pause: function(t) { t.pause() },
            Mh: function(t) { t.play() },
            release: function(t) { t.pause(), t.videoStream && t.videoStream.stop(), t.videoStream = null },
            bd: function(t) {
                if (!t) return t;
                var e = null;
                if (t.video) {
                    var r = function(t) { return t && "object" == typeof t ? Object.assign({}, t) : t };
                    e = {}, void 0 !== t.video.width && (e.width = r(t.video.width)), void 0 !== t.video.height && (e.height = r(t.video.height)), void 0 !== t.video.facingMode && (e.facingMode = r(t.video.facingMode))
                }
                return e = { audio: t.audio, video: e }, void 0 !== t.deviceId && ct.Tc(e, t.deviceId), e
            },
            Tc: function(t, e) { e && (t.video = t.video || {}, t.video.deviceId = { exact: e }, t.video.facingMode && delete t.video.facingMode) },
            ie: function(t) { var e = t.video.width; return t.video.width = t.video.height, t.video.height = e, t },
            Ge: function(t) {
                function e(t) { return [480, 576, 640, 648, 720, 768, 800, 960, 1080, 1152, 1280, 1366, 1920].sort(function(e, r) { return Math.abs(e - t) - Math.abs(r - t) }) }

                function r(e) { e = e(ct.bd(t)), i.push(e), n(e) }

                function n(t) {
                    if (t.video && t.video.facingMode && t.video.facingMode.exact) {
                        var e = t.video.facingMode.exact;
                        delete(t = ct.bd(t)).video.facingMode.exact, t.video.facingMode.ideal = e, i.push(t)
                    }
                }
                var i = [];
                if (!t || !t.video) return i;
                if (n(t), t.video.width && t.video.height) {
                    if (t.video.width.ideal && t.video.height.ideal) {
                        var a = e(t.video.width.ideal).slice(0, 3),
                            o = e(t.video.height.ideal).slice(0, 3),
                            u = {},
                            s = 0;
                        for (u.oa = void 0; s < a.length; u = { oa: u.oa }, ++s) {
                            u.oa = a[s];
                            var f = {},
                                c = 0;
                            for (f.na = void 0; c < o.length; f = { na: f.na }, ++c)
                                if (f.na = o[c], u.oa !== t.video.width.ideal || f.na !== t.video.height.ideal) {
                                    var l = Math.max(u.oa, f.na) / Math.min(u.oa, f.na);
                                    l < 4 / 3 - .1 || l > 16 / 9 + .1 || r(function(t, e) { return function(r) { return r.video.width.ideal = t.oa, r.video.height.ideal = e.na, r } }(u, f))
                                }
                        }
                    }
                    r(function(t) { return ct.ie(t) })
                }
                return t.video.width && t.video.height && (t.video.width.ideal && t.video.height.ideal && r(function(t) { return delete t.video.width.ideal, delete t.video.height.ideal, t }), r(function(t) { return delete t.video.width, delete t.video.height, t })), t.video.facingMode && (r(function(t) { return delete t.video.facingMode, t }), t.video.width && t.video.height && r(function(t) { return ct.ie(t), delete t.video.facingMode, t })), i.push({ audio: t.audio, video: !0 }), i
            },
            bg: function(t) {
                if (ct.Md()) {
                    if (!t || !t.video) return !1;
                    var e = t.video.width,
                        r = t.video.height;
                    if (!e || !r) return !1;
                    if (e.ideal && r.ideal && e.ideal > r.ideal) return t.video.height = e, t.video.width = r, !0
                }
                return !1
            },
            vb: function(t) {
                if (t.volume = 0, ct.Ra(t, "muted"), ct.ad()) {
                    if (1 === t.volume) {
                        var e = function() { t.volume = 0, window.removeEventListener("mousemove", e, !1), window.removeEventListener("touchstart", e, !1) };
                        window.addEventListener("mousemove", e, !1), window.addEventListener("touchstart", e, !1)
                    }
                    setTimeout(function() { t.volume = 0, ct.Ra(t, "muted") }, 5)
                }
            },
            le: function(t, e, r) {
                return null === t ? Promise.resolve() : new Promise(function(n, i) {
                    if (t.srcObject && t.srcObject.getVideoTracks) {
                        var a = t.srcObject.getVideoTracks();
                        1 !== a.length ? i("INVALID_TRACKNUMBER") : (a = a[0], e ? ct.get(t, n, i, r) : (a.stop(), n()))
                    } else i("BAD_IMPLEMENTATION")
                })
            },
            vd: function(t, e, r, n) {
                function i(t) { a || (a = !0, r(t)) }
                var a = !1;
                return navigator.mediaDevices.getUserMedia(n).then(function(r) {
                    function n() {
                        setTimeout(function() {
                            if (t.currentTime) {
                                var n = t.videoWidth,
                                    o = t.videoHeight;
                                if (0 === n || 0 === o) i("VIDEO_NULLSIZE");
                                else {
                                    n && (t.style.width = n.toString() + "px"), o && (t.style.height = o.toString() + "px");
                                    var u = { Ae: null, Xf: null, Af: null };
                                    try {
                                        var s = r.getVideoTracks()[0];
                                        s && (u.Af = s, u.Ae = s.getCapabilities(), u.Xf = s.getSettings())
                                    } catch (t) {}
                                    ct.Be() ? t.parentNode && null !== t.parentNode ? (a || e(t, r, u), setTimeout(function() { t.play() }, 100)) : (document.body.appendChild(t), ct.vb(t), setTimeout(function() { t.style.transform = "scale(0.0001,0.0001)", t.style.position = "fixed", t.style.bottom = "0px", t.style.right = "0px", ct.vb(t), setTimeout(function() { t.play(), a || e(t, r, u) }, 100) }, 80)) : a || e(t, r, u)
                                }
                            } else i("VIDEO_NOTSTARTED")
                        }, 700)
                    }
                    void 0 !== t.srcObject ? t.srcObject = r : (t.src = window.URL.createObjectURL(r), t.videoStream = r), ct.vb(t), t.addEventListener("loadeddata", function e() {
                        t.removeEventListener("loadeddata", e, !1);
                        var r = t.play();
                        ct.vb(t), void 0 === r ? n() : r.then(function() { n() }).catch(function() { i("VIDEO_PLAYPROMISEREJECTED") })
                    }, !1)
                }).catch(function(t) { i(t) })
            },
            gf: function(t, e) { var r = e || ct.wd(); return new Promise(function(e, n) { ct.get(r, e, n, t) }) },
            get: function(t, e, r, n) {
                if (!t) return r && r("VIDEO_NOTPROVIDED"), !1;
                if (!ct.cd()) return r && r("MEDIASTREAMAPI_NOTFOUND"), !1;
                if (n && n.video) {
                    if (ct.$c()) {
                        var i = ct.Te();
                        0 !== i[0] && (12 > i[0] || 12 === i[0] && 2 > i[1]) && ct.bg(n)
                    }
                    n.video.width && n.video.width.ideal && (t.style.width = n.video.width.ideal + "px"), n.video.height && n.video.height.ideal && (t.style.height = n.video.height.ideal + "px")
                }
                ct.Ra(t, "autoplay"), ct.Ra(t, "playsinline"), n && n.audio ? t.volume = 0 : ct.Ra(t, "muted"), ct.vd(t, e, function() {
                    ! function n(i) {
                        if (0 === i.length) r("INVALID_FALLBACKCONSTRAINTS");
                        else {
                            var a = i.shift();
                            ct.vd(t, e, function() { n(i) }, a)
                        }
                    }(ct.Ge(n))
                }, n)
            },
            hf: function(t) {
                if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) return t(!1, "NOTSUPPORTED"), !1;
                navigator.mediaDevices.enumerateDevices().then(function(e) {
                    (e = e.filter(function(t) { return t.kind && -1 !== t.kind.toLowerCase().indexOf("video") && t.label && t.deviceId })) && e.length && 0 < e.length ? t(e, !1) : t(!1, "NODEVICESFOUND")
                }).catch(function() { t(!1, "PROMISEREJECTED") })
            },
            rg: function(t, e, r) {
                var n = {};
                n[e] = r, (e = []).push(n), t.applyConstraints({ advanced: e }).catch(function() {})
            }
        },
        lt = function() {
            var t = { n: 5, uc: 1, Od: 0, jb: [35, 49], eb: [2, 200], k: .7, gg: 200, Ff: .05 },
                e = -1,
                r = null,
                n = -1,
                i = -1,
                a = 0,
                o = -1,
                u = -1,
                s = 0,
                f = 0,
                c = t.eb[1],
                l = !0,
                v = {
                    df: function() {
                        switch (e) {
                            case -1:
                                return -1;
                            case 0:
                                return u + r.Od;
                            case 1:
                                return s
                        }
                    },
                    Wg: function(t) { return Math.pow(Math.min(Math.max(o, 0), r.n - 1) / (r.n - 1), t || 1) },
                    v: function(n) { r = Object.assign({}, t, n), o = u = r.uc, e = 0, v.reset() },
                    Gb: function(t) {
                        t = (void 0 === t ? Date.now() : t) || 0;
                        var e = Math.min(Math.max(t - f, r.eb[0]), r.eb[1]);
                        c = e, f = t;
                        var s = -1 === n ? 0 : r.k;
                        n = Math.min(Math.max(1e3 / e, 5), 120) * (1 - s) + n * s, t - i > r.gg && 5 < ++a && (e = r.k, o = o * (1 - e) + (n < r.jb[0] ? u - 1 : n > r.jb[1] ? u + 1 : u) * e, Math.abs(o - u) > 1 - r.Ff && (e = Math.min(Math.max(Math.round(o), 0), r.n - 1)) !== u && (o = u = e, n = (r.jb[1] - r.jb[0]) / 2), i = t)
                    },
                    Dc: function(t, e, r, n, i, a) {
                        l = !1,
                            function t(e, r, n, i, a, o, u) {
                                if (!l)
                                    if (u === o.length) a();
                                    else {
                                        switch (o[u]) {
                                            case "A":
                                                n();
                                                break;
                                            case "D":
                                                e();
                                                break;
                                            case "S":
                                                return void r().then(function(s, f) { v.Gb(), t(e, r, n, f ? null : i, a, o, ++u) }).catch(function(t) { console.log("An error occurred in the WebAR loop: ", t), a() });
                                            case "R":
                                                i && i()
                                        }
                                        t(e, r, n, i, a, o, ++u)
                                    }
                            }(t, e, r, n, i, a, 0)
                    },
                    stop: function() { l = !0 },
                    Ec: function(t) { s = t, e = 1 },
                    Oc: function() { e = 0, v.reset() },
                    reset: function() { c = t.eb[1], i = n = -1, a = 0 },
                    Xe: function() { return c }
                };
            return v
        }(),
        vt = function() {
            function t() { r(v + c.tc), h.port.postMessage("DONE") }

            function e() { m.$a = 0 === c.Za ? g(r) : g(n) }

            function r(t) {
                d.Da && null !== l && (t -= v, t = Math.min(Math.max(t, c.gd[0]), c.gd[1]), v += t, a(), p.isEnabled && p.Sa && d.Z && v - p.nc > c.Rc && (function() {
                    p.Sa = !1;
                    var t = p.ia,
                        e = p.nb,
                        r = p.ob,
                        n = p.Y;
                    t.uniform1f(p.xd, Math.random()), p.Ea ? e.beginQueryEXT(n, r) : t.beginQuery(n, r), t.drawElements(t.POINTS, 1, t.UNSIGNED_SHORT, 0), p.Ea ? e.endQueryEXT(n) : t.endQuery(n), J.flush(), new Promise(function(t, e) {
                        ! function t(e) {
                            var r = p.ia,
                                n = p.nb,
                                i = p.ob;
                            i = p.Ea ? n.Tg(i, n.QUERY_RESULT_AVAILABLE_EXT) : r.getQueryParameter(i, r.QUERY_RESULT_AVAILABLE), r = r.getParameter(n.GPU_DISJOINT_EXT), i ? e(!r) : setTimeout(t.bind(null, e), .1)
                        }(function(r) {
                            if (r) {
                                r = p.ia;
                                var n = p.nb,
                                    i = p.ob;
                                r = p.Ea ? n.getQueryObjectEXT(i, n.QUERY_RESULT_EXT) : r.getQueryParameter(i, r.QUERY_RESULT), t(r)
                            } else e()
                        })
                    }).then(function(t) { t = c.pe * c.Qc * 1e3 / t, p.Ib = (p.Ib + 1) % c.Ia, p.oc[p.Ib] = t, ++p.Nd > c.Ia && (p.sb.set(p.oc), p.sb.sort(function(t, e) { return t - e }), t = p.sb[Math.floor(c.Ia / 2)], p.hb = Math.max(p.hb, t), c.Jb(t / p.hb)), p.Sa = !0 }).catch(function() { p.Sa = !0 })
                }(), p.nc = v), l(v))
            }

            function n(t) { d.Da && (m.timeout = setTimeout(r.bind(null, t), c.Za)) }

            function i() { l = null, d.Da = !1, a() }

            function a() { m.$a && (window.cancelAnimationFrame(m.$a), m.$a = null), m.timeout && (window.clearTimeout(m.timeout), m.timeout = null) }

            function o(t) { t && !d.Z ? (d.Z = !0, z && lt.Oc(), h.port.postMessage("STOP"), J.ke(!0), e()) : !t && d.Z && (d.Z = !1, z && lt.Ec(1), J.ke(!1), h.port.postMessage("START")) }

            function u(t) { t.target.hidden ? E() : b() }

            function s(t, e, r) { return e = t.createShader(e), t.shaderSource(e, r), t.compileShader(e), e }
            var f = { Hd: !0, gd: [1, 200], tc: 20, Za: 0, Qc: 50, pe: 240, Rc: 3e3, Ia: 3, Jb: null },
                c = null,
                l = null,
                v = 0,
                h = null,
                z = !1,
                g = null,
                d = { wa: !1, Z: !0, lc: !1, jc: !1, ic: !1, Da: !1 },
                m = { $a: null, timeout: null },
                p = { isEnabled: !1, Sa: !1, ia: null, nb: null, ob: null, Y: null, xd: null, Ea: !0, nc: 0, Nd: 0, oc: null, sb: null, Ib: 0, hb: 0 },
                b = o.bind(null, !0),
                E = o.bind(null, !1),
                y = {
                    v: function(e) {
                        if (c = Object.assign(f, e), Object.assign(d, { Z: !0, wa: !0, Da: !1 }), g = window.requestPostAnimationFrame || window.requestAnimationFrame, null !== c.Jb) {
                            (e = document.createElement("canvas")).setAttribute("width", "1"), e.setAttribute("height", "1");
                            var r = { antialias: !1 };
                            if (r = (e = e.getContext("webgl2", r) || e.getContext("webgl", r)).getExtension("EXT_disjoint_timer_query") || e.getExtension("EXT_disjoint_timer_query_webgl2")) {
                                p.ia = e, p.nb = r, p.isEnabled = !0, p.Ea = !!r.beginQueryEXT;
                                var n = s(e, e.VERTEX_SHADER, "attribute vec4 a0;void main(){gl_Position=a0;}"),
                                    i = s(e, e.FRAGMENT_SHADER, "precision lowp float;uniform float u37;void main(){vec4 a=u37*vec4(1.,2.,3.,4.);for(int b=0;b<666;b+=1)a=cos(a);gl_FragColor=a;}".replace("666", c.Qc.toString())),
                                    a = e.createProgram();
                                e.attachShader(a, n), e.attachShader(a, i), e.linkProgram(a), n = e.getAttribLocation(a, "a0"), p.xd = e.getUniformLocation(a, "u37"), e.useProgram(a), e.enableVertexAttribArray(n), a = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, a), e.bufferData(e.ARRAY_BUFFER, new Float32Array([.5, .5, 0, 1]), e.STATIC_DRAW), e.vertexAttribPointer(n, 4, e.FLOAT, !1, 16, 0), a = e.createBuffer(), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, a), e.bufferData(e.ELEMENT_ARRAY_BUFFER, new Uint16Array([0]), e.STATIC_DRAW), e.disable(e.DEPTH_TEST), e.disable(e.DITHER), e.disable(e.STENCIL_TEST), e.viewport(0, 0, 1, 1), a = p.Ea ? r.createQueryEXT() : e.createQuery(), p.ob = a, p.Y = r.TIME_ELAPSED_EXT || e.TIME_ELAPSED, p.nc = -c.Rc, p.oc = new Float32Array(c.Ia), p.sb = new Float32Array(c.Ia), p.hb = 0, p.Ib = 0, p.Nd = 0, p.Sa = !0
                            }
                        }
                        if (c.Hd) {
                            e = !1;
                            try {
                                if ("undefined" == typeof SharedWorker) {
                                    var o = URL.createObjectURL(new Blob(["let handler = null;\n      self.addEventListener('message', function(e){\n        if (handler !== null){\n          clearTimeout(handler);\n          handler = null;\n        }\n        switch (e.data) {\n          case 'START':\n          case 'DONE':\n            handler = setTimeout(function(){\n              self.postMessage('TICK');\n            }, " + c.tc.toString() + ");\n            break;\n          case 'STOP':\n            break;\n        };\n      }, false);"], { type: "text/javascript" })),
                                        l = new Worker(o);
                                    l.addEventListener("message", t), h = { Td: l, port: l }, d.lc = !0
                                } else {
                                    var v = URL.createObjectURL(new Blob(["let handler = null;\n      onconnect = function(e) {\n        const port = e.ports[0];\n        port.addEventListener('message', function(e) {\n          \n          if (handler !== null){\n            clearTimeout(handler);\n            handler = null;\n          }\n          switch (e.data) {\n            case 'START':\n            case 'DONE':\n              handler = setTimeout(function(){\n                port.postMessage('TICK');\n              }, " + c.tc.toString() + ");\n              break;\n            case 'STOP':\n              break;\n          };\n          \n        });\n        \n        port.start();\n      } // end onconnect()"], { type: "text/javascript" })),
                                        m = new SharedWorker(v);
                                    m.port.start(), m.port.addEventListener("message", t), h = { Td: m, port: m.port }, d.jc = !0
                                }
                                e = !0
                            } catch (t) {}
                            e && ("onvisibilitychange" in document ? document.addEventListener("visibilitychange", u) : (window.addEventListener("blur", E), window.addEventListener("focus", b)), d.ic = !0)
                        }
                        z = void 0 !== lt
                    },
                    m: function() { i(), d.ic && ("onvisibilitychange" in document ? document.removeEventListener("visibilitychange", u) : (window.removeEventListener("blur", E), window.removeEventListener("focus", b)), d.ic = !1), d.jc ? (h.port.close(), d.jc = !1) : d.lc && (h.Td.terminate(), d.lc = !1), Object.assign(d, { Z: !0, wa: !1, Da: !1 }), l = null },
                    xf: function() { return d.Z },
                    update: function(t) { Object.assign(c, t) },
                    Dc: function(t) { d.wa || y.v({}), a(), d.Da = !0, l = t, d.Z && e() },
                    stop: i
                };
            return y
        }(),
        ht = function() {
            var t = { Qd: 4, yb: [1.5, 1.5, 2], V: [.1, .1, .1], Yd: 1, B: -1, G: -1, ag: 2, Ef: 1, Zd: !0, Oe: .8 },
                e = null,
                r = [],
                n = [0],
                i = [.5, .5, 1];
            return {
                v: function(n) {
                    e = Object.assign({}, t, n), r.splice(0), n = e.yb[0] * e.V[0];
                    var i = e.yb[1] * e.V[1],
                        a = 1 / (1 + e.yb[2] * e.V[2]),
                        o = e.Yd * Math.min(e.B, e.G),
                        u = o / e.B;
                    o /= e.G;
                    var s = .5 * e.Oe;
                    s *= s;
                    for (var f = 0; f < e.Qd; ++f) {
                        var c = Math.pow(a, f),
                            l = u * c,
                            v = o * c;
                        c = l * e.Ef;
                        for (var h = l * n, z = v * i, g = 1 + (1 - (l /= 2) - l) / h, d = 1 + (1 - (v /= 2) - v) / z, m = 0; m < d; ++m)
                            for (var p = v + m * z, b = p - .5, E = 0; E < g; ++E) {
                                var y = l + E * h,
                                    w = y - .5;
                                w * w + b * b > s || r.push([y, p, c])
                            }
                    }
                    e.Zd && r.sort(function(t, e) {
                        var r = t[0] - .5;
                        t = t[1] - .5;
                        var n = e[0] - .5;
                        return r * r + t * t - (n * n + (e = e[1] - .5) * e)
                    })
                },
                get: function(t) {
                    var a = r.length;
                    if (0 === a) return i;
                    for (; t >= n.length;) n.push(0);
                    n[t] >= a && (n[t] = 0);
                    var o = r[Math.floor(n[t])];
                    return n[t] = (n[t] + 1 / e.ag) % a, o
                },
                reset: function() { for (var t = r.length / n.length, e = 0; e < n.length; ++e) n[e] = Math.floor(e * t) }
            }
        }(),
        zt = function() {
            function t(t, e, r, n) { return r > t ? Math.max(0, t + e / 2 - (r - n / 2)) : Math.max(0, r + n / 2 - (t - e / 2)) }

            function e(t) { return !n.Dd(t) }
            var r = { O: 1, sc: .3, $d: .3, Dd: null, tf: !0 },
                n = null,
                i = 0,
                a = null,
                o = !1,
                u = 0,
                s = 0;
            return {
                v: function(t) { n = Object.assign({}, r, t), a = [0] },
                Ld: function() { return 1 !== n.O },
                td: function() { return i },
                Kd: function() { return o },
                ta: function() { return n.O },
                lh: function() { return a },
                wf: function(t) { return a.includes(t) },
                update: function(t, r) {
                    var i = a;
                    if (i.length > t) i.splice(0, i.length - t);
                    else
                        for (; i.length < t;) i.push(0);
                    if (1 !== n.O)
                        if (r.every(e)) {
                            r = u;
                            for (var o = 0; o < t; ++o) i[o] = r, r = (r + 1) % n.O;
                            u = r
                        } else {
                            o = Math.round(n.$d * t), o = Math.max(1, o);
                            for (var s = u, f = 0, c = 0; f < t; ++f) {
                                if (e(r[s]) && ++c > o)
                                    do {++s === n.O && (s = 0) } while (e(r[s]));
                                i[f] = s, s = (s + 1) % n.O
                            }
                            u = s
                        }
                },
                Gb: function(t) { return i = a[t], s = (.5 + i) / n.O, o = a.lastIndexOf(i) === t, i },
                Yf: function(e, r) { return 1 !== n.O && function(e, r, i) { return e.some(function(a, o) { return o !== r && !((o = e[r]).xa > a.xa || 3 > a.xa || t(o.x, o.T, a.x, a.T) < n.sc * o.T) && t(o.y, o.T * i, a.y, a.T * i) > n.sc * o.T * i }) }(e, i, r) },
                je: function(t) { n.tf && 1 === n.O || C.H(t, s) },
                Ne: function(t) {
                    for (var e, r = new Float32Array(t.length * n.O), i = 0; i < n.O; ++i)
                        for (e = 0; e < t.length; ++e) r[i * t.length + e] = t[e];
                    return r
                },
                Wb: function(t) { for (var e = [], r = 0; r < n.O; ++r) e.push(JSON.parse(JSON.stringify(t))); return e }
            }
        }(),
        gt = { neuralNetworkPath: "NN_FACE_0.json", pa: 0, Mf: { threshold: .75, nDetectsPerLoop: 0, nDetectsPerLoopRange: [1, 5], nScaleLevels: 3, scale0Factor: .8, overlapFactors: [2, 2, 4], scanCenterFirst: !0, translationScalingFactors: [.07, .07, .15], antialias: !1, isCleanGLStateAtEachIteration: !0, enableAsyncReadPixels: !1, readPixelsAsyncDelay: 1, animateProcessOrder: "SADR" }, dg: 50, Cf: .4, Bf: 8, Df: .25, $f: { translationFactorRange: [.0015, .005], rotationFactorRange: [.12, .25], qualityFactorRange: [.85, .95], alphaRange: [.05, .9], followZRotAlphaFactor: .01 }, re: .2, se: 2, ig: 20, Zf: 8 },
        dt = { facingMode: "user", idealWidth: 800, idealHeight: 600, minWidth: 480, maxWidth: 1920, minHeight: 480, maxHeight: 1920, rotate: 0 },
        mt = { qc: -1, error: -2, Ua: 0, ge: 1, play: 2, pause: 3 },
        pt = mt.Ua,
        bt = !1,
        Et = !1,
        yt = null,
        wt = { Ta: !1, Ed: !1, Ic: null, element: null, D: null, I: [0, 0], u: [.5, 0, 0, .5], da: [.5, 0, 0, .5], Ab: 0, Oa: null, pb: !1 },
        Rt = null,
        At = { Na: null, Nb: null, Kb: "./", Ya: null, W: null, pa: gt.pa, Gh: gt.pa, sa: !0, kc: !0 },
        Tt = null,
        xt = [-1, -1],
        _t = null,
        Ft = null,
        kt = null,
        Dt = null,
        Mt = { B: 0, G: 0, Mb: 1, I: [0, 0], va: null },
        jt = { size: 0, ca: null, Xa: null, buffer: null, ma: null, V: null, Hc: null },
        St = null,
        Lt = null,
        Ot = null,
        Pt = null,
        Bt = { labels: [], vc: 0, xc: 0, Xb: 1, Zc: !1 },
        Ut = { ub: { Dh: 3, Eb: 1, ai: 0 }, mode: 3, ed: 0, ra: { fb: 1, Zb: 0 } },
        Nt = {
            VERSION: "1.8.2",
            init: function(t) {
                function e() { Et || pt === mt.Ua || pt === mt.error || 2 != ++i || (E(), null !== yt.element && (w(), y()), bt = !0, Rt.Na && Rt.Na(!1, { GL: G, canvasElement: Rt.W, video: yt.element, videoTexture: yt.D ? yt.D.get() : null, videoTransformMat2: yt.u, maxFacesDetected: zt.ta(), landmarksLabels: Bt.labels }), r()) }
                if (pt !== mt.Ua) return t.callbackReady && t.callbackReady("ALREADY_INITIALIZED"), !1;
                pt = mt.qc, yt = Object.assign({}, wt), Rt = Object.assign({}, At), Dt = Object.assign({}, Mt), jt.ma = [0, 0, 0],
                    function(t) {
                        ("undefined" != typeof window ? window : "undefined" != typeof self ? self : this).zyp = t()
                    }(function() {
                        return function t(e, r, n) {
                            function i(o, u) {
                                if (!r[o]) {
                                    if (!e[o]) { if (a) return a(o, !0); var s = new Error("Cannot find module '" + o + "'"); throw s.code = "MODULE_NOT_FOUND", s }
                                    var f = r[o] = { exports: {} };
                                    e[o][0].call(f.exports, function(t) { return i(e[o][1][t] || t) }, f, f.exports, t, e, r, n)
                                }
                                return r[o].exports
                            }
                            for (var a = !1, o = 0; o < n.length; o++) i(n[o]);
                            return i
                        }({
                            1: [function(t, e, r) {
                                Object.defineProperty(r, "zzB", { value: !0 }), r.default = r.zzZ3 = void 0;
                                var n = t("./zzz3/zz04"),
                                    i = t("zz14");

                                function a(t, e) {
                                    for (var r = 0; r < e.length; r++) {
                                        var n = e[r];
                                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                                    }
                                }
                                var o = function t(e) { var r = e.shift(); if (0 === e.length) return new Float32Array(r); for (var n = Array(r), i = 0; i < r; ++i) n[i] = t(e.slice(0)); return n },
                                    u = function(t, e) {
                                        var r = t[0][0] + t[1][1] + t[2][2],
                                            n = t[0][0],
                                            i = t[1][0],
                                            a = t[2][0],
                                            o = t[0][1],
                                            u = t[1][1],
                                            s = t[2][1],
                                            f = t[0][2],
                                            c = t[1][2],
                                            l = t[2][2],
                                            v = 0,
                                            h = 0,
                                            z = 0,
                                            g = 0;
                                        if (r > 0) {
                                            var d = .5 / Math.sqrt(r + 1);
                                            v = .25 / d, h = (c - s) * d, z = (a - f) * d, g = (o - i) * d
                                        } else if (n > u && n > l) {
                                            var m = 2 * Math.sqrt(1 + n - u - l);
                                            v = (c - s) / m, h = .25 * m, z = (i + o) / m, g = (a + f) / m
                                        } else if (u > l) {
                                            var p = 2 * Math.sqrt(1 + u - n - l);
                                            v = (a - f) / p, h = (i + o) / p, z = .25 * p, g = (s + c) / p
                                        } else {
                                            var b = 2 * Math.sqrt(1 + l - n - u);
                                            v = (o - i) / b, h = (a + f) / b, z = (s + c) / b, g = .25 * b
                                        }
                                        e[0] = h, e[1] = z, e[2] = g, e[3] = v
                                    };
                                r.zzZ3 = u;
                                var s = function() {
                                    function t(e) {
                                        var r = e.cameraFocals,
                                            i = void 0 === r ? [1, 1] : r,
                                            a = e.zz32,
                                            u = void 0 === a ? 9 : a;
                                        ! function(t, e) { if (!(t instanceof e)) throw new Error }(this, t), this.rMat = n.Matrix.zzJ1(3, 3), this.tVec = [0, 0, 0], this.zyp14(i), this.zz32 = u, this.zz42 = new Float32Array, this.us = new Float32Array, this.zz52 = new Float32Array, this.zz62 = new Float32Array, this.zz72 = 0, this.zz82 = 0, this.zz92 = n.Matrix.zzG1(4, 3), this.zzA2 = n.Matrix.zzG1(4, 3), this.zzk3 = 0, this.mem = { dv: o([4, 6, 3]), v: new Uint8Array([11, 10, 9, 8]), zzX3: o([4, 4]), zzW3Dets: o([4, 2]), Rs: o([4, 3, 3]), ts: o([4, 3]), CC: n.Matrix.zzG1(3, 3), L6x4: n.Matrix.zzG1(6, 4), L6x3: n.Matrix.zzG1(6, 3), L6x5: n.Matrix.zzG1(6, 5), A: n.Matrix.zzG1(6, 4), B: n.Matrix.zzG1(6, 1), zzG141: n.Matrix.zzG1(4, 1), pc0: new Float32Array(3), pw0: new Float32Array(3), ABt: n.Matrix.zzG1(3, 3), L6x10: n.Matrix.zzG1(6, 10), zzY3: n.Matrix.zzG1(6, 1), zzm3: null, U3: n.Matrix.zzG1(3, 3), U12: n.Matrix.zzG1(12, 12) }, this.zzB2 = { PW0: null, tPW0: null, M: null, tM: null }, this.zzV3 = { zzl3: -1, zyp13: !1, R: null, t: null, repError: -1, q: new Float32Array(4) }
                                    }
                                    var e, r;
                                    return e = t, (r = [{
                                        key: "solve",
                                        value: function(t, e) {
                                            this.zzV3.zyp13 = !1;
                                            var r = t.length;
                                            if (r !== e.length || r < 4) throw new Error;
                                            this.zzk1(r);
                                            for (var n = 0; n < r; ++n) this.zzl1(t[n], e[n], n);
                                            return this.zzj1(), this.zzV3
                                        }
                                    }, { key: "zyp14", value: function(t) { this.fu = t[0], this.fv = t[1] } }, { key: "zzk1", value: function(t) { this.zz82 !== t && (this.zzB2.PW0 = n.Matrix.zzG1(t, 3), this.zzB2.tPW0 = n.Matrix.zzG1(3, t), this.zzB2.M = n.Matrix.zzG1(2 * t, 12), this.zzB2.tM = n.Matrix.zzG1(12, 2 * t), this.zz82 = t), this.zz72 < t && (this.zz42 = new Float32Array(3 * t), this.us = new Float32Array(2 * t), this.zz52 = new Float32Array(4 * t), this.zz62 = new Float32Array(3 * t), this.zz72 = t) } }, {
                                        key: "zzl1",
                                        value: function(t, e, r) {
                                            var n = this.zz42,
                                                i = this.us;
                                            n[3 * r] = t[0], n[3 * r + 1] = t[1], n[3 * r + 2] = t[2], i[2 * r] = e[0], i[2 * r + 1] = e[1]
                                        }
                                    }, {
                                        key: "zzm1",
                                        value: function() {
                                            var t = this.zz92,
                                                e = this.zz82,
                                                r = this.zz42,
                                                a = this.zzB2,
                                                o = a.PW0,
                                                u = a.tPW0,
                                                s = this.mem.U3;
                                            t.set(0, 0, 0), t.set(0, 1, 0), t.set(0, 2, 0);
                                            for (var f = 0; f < e; ++f)
                                                for (var c = 0; c < 3; ++c) t.zzn3(0, c, r[3 * f + c]);
                                            for (var l = 0; l < 3; ++l) t.mulComponent(0, l, 1 / e);
                                            for (var v = 0; v < e; ++v)
                                                for (var h = 0; h < 3; ++h) o.set(v, h, r[3 * v + h] - t.get(0, h));
                                            o.zz012(u), u.zzr2(o, s);
                                            var z = s,
                                                g = (0, n.zz92)(z, { zzZ2: !1, zzj3: 0 });
                                            g.U.zz012(s);
                                            for (var d = s, m = g.s, p = 1; p < 4; ++p)
                                                for (var b = (0, i.zzr3)(m[p - 1] / e), E = 0; E < 3; ++E) t.set(p, E, t.get(0, E) + b * d.get(p - 1, E))
                                        }
                                    }, {
                                        key: "zzn1",
                                        value: function() {
                                            for (var t = this.zz42, e = this.zz52, r = this.zz92, i = this.zz82, a = this.mem.CC, o = 0; o < 3; ++o)
                                                for (var u = 1; u < 4; ++u) a.set(o, u - 1, r.get(u, o) - r.get(0, o));
                                            for (var s = (0, n.inverse2)(a, !0, 20), f = 0; f < i; ++f) {
                                                for (var c = 3 * f, l = 4 * f, v = 0; v < 3; ++v) e[l + 1 + v] = s.get(v, 0) * (t[c] - r.get(0, 0)) + s.get(v, 1) * (t[c + 1] - r.get(0, 1)) + s.get(v, 2) * (t[c + 2] - r.get(0, 2));
                                                e[l] = 1 - e[l + 1] - e[l + 2] - e[l + 3]
                                            }
                                        }
                                    }, {
                                        key: "zzLM",
                                        value: function(t, e, r, n, i) {
                                            for (var a = this.zz52, o = this.fu, u = this.fv, s = 0; s < 4; ++s) {
                                                var f = a[r + s];
                                                t.set(e, 3 * s, f * o), t.set(e, 3 * s + 1, 0), t.set(e, 3 * s + 2, -n * f), t.set(e + 1, 3 * s, 0), t.set(e + 1, 3 * s + 1, f * u), t.set(e + 1, 3 * s + 2, -i * f)
                                            }
                                        }
                                    }, {
                                        key: "zzp1",
                                        value: function(t, e) {
                                            for (var r = this.mem, n = r.dv, a = r.v, o = 0; o < 4; ++o)
                                                for (var u = 0, s = 1, f = 0; f < 6; ++f) n[o][f][0] = t.get(a[o], 3 * u) - t.get(a[o], 3 * s), n[o][f][1] = t.get(a[o], 3 * u + 1) - t.get(a[o], 3 * s + 1), n[o][f][2] = t.get(a[o], 3 * u + 2) - t.get(a[o], 3 * s + 2), ++s > 3 && (s = ++u + 1);
                                            for (var c = 0; c < 6; ++c) e.set(c, 0, (0, i.zzs3)(n[0][c], n[0][c])), e.set(c, 1, 2 * (0, i.zzs3)(n[0][c], n[1][c])), e.set(c, 2, (0, i.zzs3)(n[1][c], n[1][c])), e.set(c, 3, 2 * (0, i.zzs3)(n[0][c], n[2][c])), e.set(c, 4, 2 * (0, i.zzs3)(n[1][c], n[2][c])), e.set(c, 5, (0, i.zzs3)(n[2][c], n[2][c])), e.set(c, 6, 2 * (0, i.zzs3)(n[0][c], n[3][c])), e.set(c, 7, 2 * (0, i.zzs3)(n[1][c], n[3][c])), e.set(c, 8, 2 * (0, i.zzs3)(n[2][c], n[3][c])), e.set(c, 9, (0, i.zzs3)(n[3][c], n[3][c]))
                                        }
                                    }, {
                                        key: "zzq1",
                                        value: function(t) {
                                            var e = this.zz92;
                                            t.set(0, 0, (0, i.zzq3)(e, 0, 1)), t.set(1, 0, (0, i.zzq3)(e, 0, 2)), t.set(2, 0, (0, i.zzq3)(e, 0, 3)), t.set(3, 0, (0, i.zzq3)(e, 1, 2)), t.set(4, 0, (0, i.zzq3)(e, 1, 3)), t.set(5, 0, (0, i.zzq3)(e, 2, 3))
                                        }
                                    }, {
                                        key: "zzr1",
                                        value: function(t, e, r) {
                                            for (var a = this.mem.L6x4, o = 0; o < 6; ++o) a.set(o, 0, t.get(o, 0)), a.set(o, 1, t.get(o, 1)), a.set(o, 2, t.get(o, 3)), a.set(o, 3, t.get(o, 6));
                                            var u = (0, n.zzp3)(a, e, !0, 10),
                                                s = (0, i.SIGN)(u.get(0, 0));
                                            r[0] = (0, i.zzr3)(s * u.get(0, 0)), r[1] = s * u.get(1, 0) / r[0], r[2] = s * u.get(2, 0) / r[0], r[3] = s * u.get(3, 0) / r[0]
                                        }
                                    }, {
                                        key: "zzs1",
                                        value: function(t, e, r) {
                                            for (var a = this.mem.L6x3, o = 0; o < 6; ++o) a.set(o, 0, t.get(o, 0)), a.set(o, 1, t.get(o, 1)), a.set(o, 2, t.get(o, 2));
                                            var u = (0, n.zzp3)(a, e, !0, 11),
                                                s = (0, i.SIGN)(u.get(0, 0));
                                            r[0] = (0, i.zzr3)(s * u.get(0, 0)), r[1] = s * u.get(2, 0) > 0 ? (0, i.zzr3)(s * u.get(2, 0)) : 0, r[0] *= (0, i.SIGN)(u.get(1, 0)), r[2] = 0, r[3] = 0
                                        }
                                    }, {
                                        key: "zzt1",
                                        value: function(t, e, r) {
                                            for (var a = this.mem.L6x5, o = 0; o < 6; ++o) a.set(o, 0, t.get(o, 0)), a.set(o, 1, t.get(o, 1)), a.set(o, 2, t.get(o, 2)), a.set(o, 3, t.get(o, 3)), a.set(o, 4, t.get(o, 4));
                                            var u = (0, n.zzp3)(a, e, !0, 12),
                                                s = (0, i.SIGN)(u.get(0, 0));
                                            r[0] = (0, i.zzr3)(s * u.get(0, 0)), r[1] = s * u.get(2, 0) > 0 ? (0, i.zzr3)(s * u.get(2, 0)) : 0, u.get(1, 0) < 0 && (r[0] *= -1), r[2] = u.get(3, 0) / r[0], r[3] = 0
                                        }
                                    }, { key: "zzu1", value: function(t, e, r) { for (var n = this.mem, i = n.A, a = n.B, o = 0; o < this.zz32; ++o) { this.zzv1(t, e, r, i, a); for (var u = this.zzw1(i, a), s = 0; s < 4; ++s) r[s] += u.get(s, 0) } } }, { key: "zzv1", value: function(t, e, r, n, i) { for (var a = 0; a < 6; ++a) n.set(a, 0, 2 * t.get(a, 0) * r[0] + t.get(a, 1) * r[1] + t.get(a, 3) * r[2] + t.get(a, 6) * r[3]), n.set(a, 1, t.get(a, 1) * r[0] + 2 * t.get(a, 2) * r[1] + t.get(a, 4) * r[2] + t.get(a, 7) * r[3]), n.set(a, 2, t.get(a, 3) * r[0] + t.get(a, 4) * r[1] + 2 * t.get(a, 5) * r[2] + t.get(a, 8) * r[3]), n.set(a, 3, t.get(a, 6) * r[0] + t.get(a, 7) * r[1] + t.get(a, 8) * r[2] + 2 * t.get(a, 9) * r[3]), i.set(a, 0, e.get(a, 0) - (t.get(a, 0) * r[0] * r[0] + t.get(a, 1) * r[0] * r[1] + t.get(a, 2) * r[1] * r[1] + t.get(a, 3) * r[0] * r[2] + t.get(a, 4) * r[1] * r[2] + t.get(a, 5) * r[2] * r[2] + t.get(a, 6) * r[0] * r[3] + t.get(a, 7) * r[1] * r[3] + t.get(a, 8) * r[2] * r[3] + t.get(a, 9) * r[3] * r[3])) } }, { key: "zzw1", value: function(t, e) { var r = null; return this.mem.zzm3 ? (r = this.mem.zzm3).update(t) : (r = new n.zzT2(t), this.mem.zzm3 = r), r.zzY1() ? r.solve(e) : this.mem.zzG141 } }, {
                                        key: "zzx1",
                                        value: function(t, e) {
                                            for (var r = this.zzA2, n = 0; n < 4; ++n) r.set(n, 0, 0), r.set(n, 1, 0), r.set(n, 2, 0);
                                            for (var i = 0; i < 4; ++i)
                                                for (var a = 0; a < 4; ++a)
                                                    for (var o = 0; o < 3; ++o) r.zzn3(a, o, t[i] * e.get(11 - i, 3 * a + o))
                                        }
                                    }, {
                                        key: "zzy1",
                                        value: function() {
                                            for (var t = this.zzA2, e = this.zz82, r = this.zz52, n = this.zz62, i = 0; i < e; ++i)
                                                for (var a = 4 * i, o = 3 * i, u = 0; u < 3; ++u) n[o + u] = r[a] * t.get(0, u) + r[a + 1] * t.get(1, u) + r[a + 2] * t.get(2, u) + r[a + 3] * t.get(3, u)
                                        }
                                    }, {
                                        key: "zzz1",
                                        value: function() {
                                            var t = this.zz62,
                                                e = this.zz82,
                                                r = this.zzA2;
                                            if (t[2] < 0) {
                                                for (var n = 0; n < 4; ++n)
                                                    for (var i = 0; i < 3; ++i) r.mulComponent(n, i, -1);
                                                for (var a = 0; a < e; ++a) t[3 * a] = -t[3 * a], t[3 * a + 1] = -t[3 * a + 1], t[3 * a + 2] = -t[3 * a + 2]
                                            }
                                        }
                                    }, {
                                        key: "zz02",
                                        value: function(t, e) {
                                            var r = this.zz62,
                                                a = this.zz42,
                                                o = this.zz82,
                                                u = this.mem,
                                                s = u.pc0,
                                                f = u.pw0,
                                                c = u.ABt;
                                            c.zzi3();
                                            for (var l = 0; l < o; ++l)
                                                for (var v = 0; v < 3; ++v) s[v] += r[3 * l + v], f[v] += a[3 * l + v];
                                            for (var h = 0; h < 3; ++h) s[h] /= o, f[h] /= o;
                                            for (var z = 0; z < o; ++z)
                                                for (var g = 0; g < 3; ++g) c.zzn3(g, 0, (r[3 * z + g] - s[g]) * (a[3 * z] - f[0])), c.zzn3(g, 1, (r[3 * z + g] - s[g]) * (a[3 * z + 1] - f[1])), c.zzn3(g, 2, (r[3 * z + g] - s[g]) * (a[3 * z + 2] - f[2]));
                                            for (var d = (0, n.zz92)(c, { zzj3: 2 }), m = d.U, p = d.V, b = 0; b < 3; ++b)
                                                for (var E = 0; E < 3; ++E) t[b][E] = (0, i.zzs3)(m.zzM(b), p.zzM(E));
                                            var y = new n.Matrix(t),
                                                w = (0, n.zzU1)(y);
                                            return w <= 0 && (t[2][0] *= -1, t[2][1] *= -1, t[2][2] *= -1), e[0] = s[0] - (0, i.zzs3)(t[0], f), e[1] = s[1] - (0, i.zzs3)(t[1], f), e[2] = s[2] - (0, i.zzs3)(t[2], f), w
                                        }
                                    }, {
                                        key: "zz12",
                                        value: function(t, e) {
                                            for (var r = 0, n = this.zz82, a = this.fu, o = this.fv, u = this.zz42, s = this.us, f = 0; f < n; ++f) {
                                                var c = u.slice(3 * f, 3 * f + 3),
                                                    l = (0, i.zzs3)(t[0], c) + e[0],
                                                    v = (0, i.zzs3)(t[1], c) + e[1],
                                                    h = 1 / ((0, i.zzs3)(t[2], c) + e[2]),
                                                    z = a * l * h,
                                                    g = o * v * h,
                                                    d = s[2 * f],
                                                    m = s[2 * f + 1];
                                                r += (0, i.zzr3)((d - z) * (d - z) + (m - g) * (m - g))
                                            }
                                            return r / n
                                        }
                                    }, { key: "zz22", value: function(t, e, r, n, i) { this.zzx1(e, t), this.zzy1(), this.zzz1(), i[1] = this.zz02(r, n), i[0] = this.zz12(r, n) } }, {
                                        key: "zzj1",
                                        value: function() {
                                            var t = this.zz82,
                                                e = this.us,
                                                r = this.mem,
                                                i = this.zzV3,
                                                a = this.zzk3,
                                                o = r.L6x10,
                                                s = r.zzY3,
                                                f = r.zzX3,
                                                c = r.zzW3Dets,
                                                l = r.Rs,
                                                v = r.ts,
                                                h = r.U12,
                                                z = this.zzB2,
                                                g = z.M,
                                                d = z.tM;
                                            this.zzm1(), this.zzn1();
                                            for (var m = 0; m < t; ++m) this.zzLM(g, 2 * m, 4 * m, e[2 * m], e[2 * m + 1]);
                                            g.zz012(d), d.zzr2(g, h);
                                            var p = h;
                                            (0, n.zz92)(p, { zzZ2: !1, zzj3: 1 }).U.zz012(h);
                                            var b = h;
                                            this.zzp1(b, o), this.zzq1(s), this.zzr1(o, s, f[0]), this.zzu1(o, s, f[0]), this.zz22(b, f[0], l[0], v[0], c[0]), this.zzs1(o, s, f[1]), this.zzu1(o, s, f[1]), this.zz22(b, f[1], l[1], v[1], c[1]), this.zzt1(o, s, f[2]), this.zzu1(o, s, f[2]), this.zz22(b, f[2], l[2], v[2], c[2]), this.zzu1(o, s, f[3]), this.zz22(b, f[3], l[3], v[3], c[3]), c[3][0] /= 1.02;
                                            var E = -1;
                                            c[0][1] * a >= 0 && (E = 0), (-1 === E || c[1][0] < c[E][0]) && c[1][1] * a >= 0 && (E = 1), (-1 === E || c[2][0] < c[E][0]) && c[2][1] * a >= 0 && (E = 2), (-1 === E || c[3][0] < c[E][0]) && c[3][1] * a >= 0 && (E = 3), -1 === E && (E = 0, c[1][0] < c[E][0] && (E = 1), c[2][0] < c[E][0] && (E = 2), c[3][0] < c[E][0] && (E = 3)), this.zzk3 = c[E][1], f[3].set(f[E]);
                                            var y = l[E];
                                            y[0][2] *= -1, y[1][2] *= -1, y[2][0] *= -1, y[2][1] *= -1, u(y, i.q), i.zzl3 = E, i.zyp13 = !0, i.repError = c[E][0], i.R = y, i.t = v[E]
                                        }
                                    }]) && a(e.prototype, r), t
                                }();
                                r.default = s
                            }, { zz14: 3, "./zzz3/zz04": 4 }],
                            2: [function(t, e, r) {
                                var n, i = (n = t("./zypSolver")) && n.zzB ? n : { default: n };
                                e.exports = { zypSolver: i.default }
                            }, { "./zypSolver": 1 }],
                            3: [function(t, e, r) {
                                Object.defineProperty(r, "zzB", { value: !0 }), r.zzq3 = r.zzs3 = r.SIGN = r.zzr3 = void 0;
                                var n = Math.sqrt;
                                r.zzr3 = n;
                                var i = Math.sign;
                                r.SIGN = i, r.zzs3 = function(t, e) { return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] }, r.zzq3 = function(t, e, r) {
                                    var n = t.get(e, 0),
                                        i = t.get(e, 1),
                                        a = t.get(e, 2),
                                        o = t.get(r, 0),
                                        u = t.get(r, 1),
                                        s = t.get(r, 2);
                                    return (n - o) * (n - o) + (i - u) * (i - u) + (a - s) * (a - s)
                                }
                            }, {}],
                            4: [function(t, e, r) {
                                function n(t, e) {
                                    if ("function" != typeof e && null !== e) throw new Error;
                                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && function(t, e) {
                                        (Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e)
                                    }(t, e)
                                }

                                function i(t) {
                                    var e = function() { if ("undefined" == typeof zzt3 || !zzt3.construct) return !1; if (zzt3.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(zzt3.construct(Date, [], function() {})), !0 } catch (t) { return !1 } }();
                                    return function() {
                                        var r, n = o(t);
                                        if (e) {
                                            var i = o(this).constructor;
                                            r = zzt3.construct(n, arguments, i)
                                        } else r = n.apply(this, arguments);
                                        return a(this, r)
                                    }
                                }

                                function a(t, e) { return !e || "object" !== c(e) && "function" != typeof e ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e }

                                function o(t) { return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) }

                                function u(t, e) { if (!(t instanceof e)) throw new Error }

                                function s(t, e) {
                                    for (var r = 0; r < e.length; r++) {
                                        var n = e[r];
                                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                                    }
                                }

                                function f(t, e, r) { return e && s(t.prototype, e), r && s(t, r), t }

                                function c(t) { return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }
                                var l, v;
                                l = void 0, v = function(t) {
                                    var e = Object.prototype.toString;

                                    function r(t) { return e.call(t).endsWith("Array]") }

                                    function o(t) {
                                        var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                        if (!r(t)) throw new Error;
                                        if (0 === t.length) throw new Error;
                                        if (void 0 !== n.output) {
                                            if (!r(n.output)) throw new Error;
                                            e = n.output
                                        } else e = new Array(t.length);
                                        var i = function(t) {
                                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                                if (!r(t)) throw new Error;
                                                if (0 === t.length) throw new Error;
                                                var n = e.fromIndex,
                                                    i = void 0 === n ? 0 : n,
                                                    a = e.toIndex,
                                                    o = void 0 === a ? t.length : a;
                                                if (i < 0 || i >= t.length || !Number.isInteger(i)) throw new Error;
                                                if (o <= i || o > t.length || !Number.isInteger(o)) throw new Error;
                                                for (var u = t[i], s = i + 1; s < o; s++) t[s] < u && (u = t[s]);
                                                return u
                                            }(t),
                                            a = function(t) {
                                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                                if (!r(t)) throw new Error;
                                                if (0 === t.length) throw new Error;
                                                var n = e.fromIndex,
                                                    i = void 0 === n ? 0 : n,
                                                    a = e.toIndex,
                                                    o = void 0 === a ? t.length : a;
                                                if (i < 0 || i >= t.length || !Number.isInteger(i)) throw new Error;
                                                if (o <= i || o > t.length || !Number.isInteger(o)) throw new Error;
                                                for (var u = t[i], s = i + 1; s < o; s++) t[s] > u && (u = t[s]);
                                                return u
                                            }(t);
                                        if (i === a) throw new Error;
                                        var o = n.min,
                                            u = void 0 === o ? n.autoMinMax ? i : 0 : o,
                                            s = n.max,
                                            f = void 0 === s ? n.autoMinMax ? a : 1 : s;
                                        if (u >= f) throw new Error;
                                        for (var c = (f - u) / (a - i), l = 0; l < t.length; l++) e[l] = (t[l] - i) * c + u;
                                        return e
                                    }
                                    var s = " ".repeat(2),
                                        l = " ".repeat(4);

                                    function v(t) {
                                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                            r = e.zzgs,
                                            n = void 0 === r ? 15 : r,
                                            i = e.zzks,
                                            a = void 0 === i ? 10 : i,
                                            o = e.zzo3,
                                            u = void 0 === o ? 8 : o;
                                        return "".concat(t.constructor.name, " {\\n").concat(s, "[\\n").concat(l).concat(function(t, e, r, n) {
                                            for (var i = t.zzk2, a = t.zzj2, o = Math.min(i, e), u = Math.min(a, r), s = [], f = 0; f < o; f++) {
                                                for (var c = [], v = 0; v < u; v++) c.push(h(t.get(f, v), n));
                                                s.push("".concat(c.join(" ")))
                                            }
                                            return u !== a && (s[s.length - 1] += " ... ".concat(a - r, " more zzj2")), o !== i && s.push("... ".concat(i - e, " more zzk2")), s.join("\\n".concat(l))
                                        }(t, n, a, u), "\\n").concat(s, "]\\n").concat(s, "zzk2: ").concat(t.zzk2, "\\n").concat(s, "zzj2: ").concat(t.zzj2, "\\n}")
                                    }

                                    function h(t, e) {
                                        var r = String(t);
                                        if (r.length <= e) return r.padEnd(e, " ");
                                        var n = t.toPrecision(e - 2);
                                        if (n.length <= e) return n;
                                        var i = t.zzP3(e - 2),
                                            a = i.indexOf("e"),
                                            o = i.slice(a);
                                        return i.slice(0, e - o.length) + o
                                    }

                                    function z(t, e, r) { var n = r ? t.zzk2 : t.zzk2 - 1; if (e < 0 || e > n) throw new Error }

                                    function g(t, e, r) { var n = r ? t.zzj2 : t.zzj2 - 1; if (e < 0 || e > n) throw new Error }

                                    function d(t, e) { if (e.zzC && (e = e.zzC()), e.length !== t.zzj2) throw new Error; return e }

                                    function m(t, e) { if (e.zzC && (e = e.zzC()), e.length !== t.zzk2) throw new Error; return e }

                                    function p(t, e, r) { return { row: function(t, e) { if ("object" != c(e)) throw new Error; if (e.some(function(e) { return e < 0 || e >= t.zzk2 })) throw new Error; return Array.isArray(e) || (e = Array.from(e)), e }(t, e), zz23: function(t, e) { if ("object" != c(e)) throw new Error; if (e.some(function(e) { return e < 0 || e >= t.zzj2 })) throw new Error; return Array.isArray(e) || (e = Array.from(e)), e }(t, r) } }

                                    function b(t, e, r, n, i) { if (5 !== arguments.length) throw new Error; if (y("zz0", e), y("zz1", r), y("zz2", n), y("zz3", i), e > r || n > i || e < 0 || e >= t.zzk2 || r < 0 || r >= t.zzk2 || n < 0 || n >= t.zzj2 || i < 0 || i >= t.zzj2) throw new Error }

                                    function E(t) { for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, r = [], n = 0; n < t; n++) r.push(e); return r }

                                    function y(t, e) { if ("number" != typeof e) throw new Error("".concat(t, " must be a number")) }

                                    function w(t) { if (t.zzu3()) throw new Error }
                                    var R = function() {
                                        function t() { u(this, t) }
                                        return f(t, [{
                                            key: "apply",
                                            value: function(t) {
                                                if ("function" != typeof t) throw new Error;
                                                for (var e = 0; e < this.zzk2; e++)
                                                    for (var r = 0; r < this.zzj2; r++) t.call(this, e, r);
                                                return this
                                            }
                                        }, {
                                            key: "zzC",
                                            value: function() {
                                                for (var t = [], e = 0; e < this.zzk2; e++)
                                                    for (var r = 0; r < this.zzj2; r++) t.push(this.get(e, r));
                                                return t
                                            }
                                        }, { key: "zzD", value: function() { for (var t = [], e = 0; e < this.zzk2; e++) { t.push([]); for (var r = 0; r < this.zzj2; r++) t[e].push(this.get(e, r)) } return t } }, { key: "toJSON", value: function() { return this.zzD() } }, { key: "zzE", value: function() { return 1 === this.zzk2 } }, { key: "zzF", value: function() { return 1 === this.zzj2 } }, { key: "zzG", value: function() { return 1 === this.zzk2 || 1 === this.zzj2 } }, { key: "zzH", value: function() { return this.zzk2 === this.zzj2 } }, { key: "zzu3", value: function() { return 0 === this.zzk2 || 0 === this.zzj2 } }, {
                                            key: "zzI",
                                            value: function() {
                                                if (this.zzH()) {
                                                    for (var t = 0; t < this.zzk2; t++)
                                                        for (var e = 0; e <= t; e++)
                                                            if (this.get(t, e) !== this.get(e, t)) return !1;
                                                    return !0
                                                }
                                                return !1
                                            }
                                        }, {
                                            key: "zzJ",
                                            value: function() {
                                                for (var t = 0, e = 0, r = -1, n = !0, i = !1; t < this.zzk2 && n;) {
                                                    for (e = 0, i = !1; e < this.zzj2 && !1 === i;) 0 === this.get(t, e) ? e++ : 1 === this.get(t, e) && e > r ? (i = !0, r = e) : (n = !1, i = !0);
                                                    t++
                                                }
                                                return n
                                            }
                                        }, {
                                            key: "zzK",
                                            value: function() {
                                                for (var t = 0, e = 0, r = -1, n = !0, i = !1; t < this.zzk2 && n;) {
                                                    for (e = 0, i = !1; e < this.zzj2 && !1 === i;) 0 === this.get(t, e) ? e++ : 1 === this.get(t, e) && e > r ? (i = !0, r = e) : (n = !1, i = !0);
                                                    for (var a = e + 1; a < this.zzk2; a++) 0 !== this.get(t, a) && (n = !1);
                                                    t++
                                                }
                                                return n
                                            }
                                        }, {
                                            key: "zzv3",
                                            value: function() {
                                                for (var t = this.clone(), e = 0, r = 0; e < t.zzk2 && r < t.zzj2;) {
                                                    for (var n = e, i = e; i < t.zzk2; i++) t.get(i, r) > t.get(n, r) && (n = i);
                                                    if (0 === t.get(n, r)) r++;
                                                    else {
                                                        t.zzP(e, n);
                                                        for (var a = t.get(e, r), o = r; o < t.zzj2; o++) t.set(e, o, t.get(e, o) / a);
                                                        for (var u = e + 1; u < t.zzk2; u++) {
                                                            var s = t.get(u, r) / t.get(e, r);
                                                            t.set(u, r, 0);
                                                            for (var f = r + 1; f < t.zzj2; f++) t.set(u, f, t.get(u, f) - t.get(e, f) * s)
                                                        }
                                                        e++, r++
                                                    }
                                                }
                                                return t
                                            }
                                        }, {
                                            key: "reducedEchelonForm",
                                            value: function() {
                                                for (var t = this.zzv3(), e = t.zzj2, r = t.zzk2, n = r - 1; n >= 0;)
                                                    if (0 === t.zzg(n)) n--;
                                                    else {
                                                        for (var i = 0, a = !1; i < r && !1 === a;) 1 === t.get(n, i) ? a = !0 : i++;
                                                        for (var o = 0; o < n; o++)
                                                            for (var u = t.get(o, i), s = i; s < e; s++) {
                                                                var f = t.get(o, s) - u * t.get(n, s);
                                                                t.set(o, s, f)
                                                            }
                                                        n--
                                                    }
                                                return t
                                            }
                                        }, { key: "set", value: function() { throw new Error } }, { key: "get", value: function() { throw new Error } }, {
                                            key: "repeat",
                                            value: function() {
                                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                                if ("object" != c(t)) throw new Error;
                                                var e = t.zzk2,
                                                    r = void 0 === e ? 1 : e,
                                                    n = t.zzj2,
                                                    i = void 0 === n ? 1 : n;
                                                if (!Number.isInteger(r) || r <= 0) throw new Error;
                                                if (!Number.isInteger(i) || i <= 0) throw new Error;
                                                for (var a = new T(this.zzk2 * r, this.zzj2 * i), o = 0; o < r; o++)
                                                    for (var u = 0; u < i; u++) a.zz61(this, this.zzk2 * o, this.zzj2 * u);
                                                return a
                                            }
                                        }, {
                                            key: "zzL",
                                            value: function(t) {
                                                for (var e = 0; e < this.zzk2; e++)
                                                    for (var r = 0; r < this.zzj2; r++) this.set(e, r, t);
                                                return this
                                            }
                                        }, { key: "neg", value: function() { return this.mulS(-1) } }, { key: "zzM", value: function(t) { z(this, t); for (var e = [], r = 0; r < this.zzj2; r++) e.push(this.get(t, r)); return e } }, { key: "zzMVector", value: function(t) { return T.zzE1(this.zzM(t)) } }, { key: "zzO", value: function(t, e) { z(this, t), e = d(this, e); for (var r = 0; r < this.zzj2; r++) this.set(t, r, e[r]); return this } }, {
                                            key: "zzP",
                                            value: function(t, e) {
                                                z(this, t), z(this, e);
                                                for (var r = 0; r < this.zzj2; r++) {
                                                    var n = this.get(t, r);
                                                    this.set(t, r, this.get(e, r)), this.set(e, r, n)
                                                }
                                                return this
                                            }
                                        }, { key: "zzQ", value: function(t) { g(this, t); for (var e = [], r = 0; r < this.zzk2; r++) e.push(this.get(r, t)); return e } }, { key: "zzQVector", value: function(t) { return T.zzF1(this.zzQ(t)) } }, { key: "zzS", value: function(t, e) { g(this, t), e = m(this, e); for (var r = 0; r < this.zzk2; r++) this.set(r, t, e[r]); return this } }, {
                                            key: "zzT",
                                            value: function(t, e) {
                                                g(this, t), g(this, e);
                                                for (var r = 0; r < this.zzk2; r++) {
                                                    var n = this.get(r, t);
                                                    this.set(r, t, this.get(r, e)), this.set(r, e, n)
                                                }
                                                return this
                                            }
                                        }, {
                                            key: "zzU",
                                            value: function(t) {
                                                t = d(this, t);
                                                for (var e = 0; e < this.zzk2; e++)
                                                    for (var r = 0; r < this.zzj2; r++) this.set(e, r, this.get(e, r) + t[r]);
                                                return this
                                            }
                                        }, {
                                            key: "zzV",
                                            value: function(t) {
                                                t = d(this, t);
                                                for (var e = 0; e < this.zzk2; e++)
                                                    for (var r = 0; r < this.zzj2; r++) this.set(e, r, this.get(e, r) - t[r]);
                                                return this
                                            }
                                        }, {
                                            key: "zzW",
                                            value: function(t) {
                                                t = d(this, t);
                                                for (var e = 0; e < this.zzk2; e++)
                                                    for (var r = 0; r < this.zzj2; r++) this.set(e, r, this.get(e, r) * t[r]);
                                                return this
                                            }
                                        }, {
                                            key: "zzX",
                                            value: function(t) {
                                                t = d(this, t);
                                                for (var e = 0; e < this.zzk2; e++)
                                                    for (var r = 0; r < this.zzj2; r++) this.set(e, r, this.get(e, r) / t[r]);
                                                return this
                                            }
                                        }, {
                                            key: "zzY",
                                            value: function(t) {
                                                t = m(this, t);
                                                for (var e = 0; e < this.zzk2; e++)
                                                    for (var r = 0; r < this.zzj2; r++) this.set(e, r, this.get(e, r) + t[e]);
                                                return this
                                            }
                                        }, {
                                            key: "zzZ",
                                            value: function(t) {
                                                t = m(this, t);
                                                for (var e = 0; e < this.zzk2; e++)
                                                    for (var r = 0; r < this.zzj2; r++) this.set(e, r, this.get(e, r) - t[e]);
                                                return this
                                            }
                                        }, {
                                            key: "zza",
                                            value: function(t) {
                                                t = m(this, t);
                                                for (var e = 0; e < this.zzk2; e++)
                                                    for (var r = 0; r < this.zzj2; r++) this.set(e, r, this.get(e, r) * t[e]);
                                                return this
                                            }
                                        }, {
                                            key: "zzb",
                                            value: function(t) {
                                                t = m(this, t);
                                                for (var e = 0; e < this.zzk2; e++)
                                                    for (var r = 0; r < this.zzj2; r++) this.set(e, r, this.get(e, r) / t[e]);
                                                return this
                                            }
                                        }, { key: "zzc", value: function(t, e) { z(this, t); for (var r = 0; r < this.zzj2; r++) this.set(t, r, this.get(t, r) * e); return this } }, { key: "zzd", value: function(t, e) { g(this, t); for (var r = 0; r < this.zzk2; r++) this.set(r, t, this.get(r, t) * e); return this } }, {
                                            key: "max",
                                            value: function() {
                                                if (this.zzu3()) return NaN;
                                                for (var t = this.get(0, 0), e = 0; e < this.zzk2; e++)
                                                    for (var r = 0; r < this.zzj2; r++) this.get(e, r) > t && (t = this.get(e, r));
                                                return t
                                            }
                                        }, {
                                            key: "zze",
                                            value: function() {
                                                w(this);
                                                for (var t = this.get(0, 0), e = [0, 0], r = 0; r < this.zzk2; r++)
                                                    for (var n = 0; n < this.zzj2; n++) this.get(r, n) > t && (t = this.get(r, n), e[0] = r, e[1] = n);
                                                return e
                                            }
                                        }, {
                                            key: "min",
                                            value: function() {
                                                if (this.zzu3()) return NaN;
                                                for (var t = this.get(0, 0), e = 0; e < this.zzk2; e++)
                                                    for (var r = 0; r < this.zzj2; r++) this.get(e, r) < t && (t = this.get(e, r));
                                                return t
                                            }
                                        }, {
                                            key: "zzf",
                                            value: function() {
                                                w(this);
                                                for (var t = this.get(0, 0), e = [0, 0], r = 0; r < this.zzk2; r++)
                                                    for (var n = 0; n < this.zzj2; n++) this.get(r, n) < t && (t = this.get(r, n), e[0] = r, e[1] = n);
                                                return e
                                            }
                                        }, { key: "zzg", value: function(t) { if (z(this, t), this.zzu3()) return NaN; for (var e = this.get(t, 0), r = 1; r < this.zzj2; r++) this.get(t, r) > e && (e = this.get(t, r)); return e } }, { key: "zzgIndex", value: function(t) { z(this, t), w(this); for (var e = this.get(t, 0), r = [t, 0], n = 1; n < this.zzj2; n++) this.get(t, n) > e && (e = this.get(t, n), r[1] = n); return r } }, { key: "zzi", value: function(t) { if (z(this, t), this.zzu3()) return NaN; for (var e = this.get(t, 0), r = 1; r < this.zzj2; r++) this.get(t, r) < e && (e = this.get(t, r)); return e } }, { key: "zziIndex", value: function(t) { z(this, t), w(this); for (var e = this.get(t, 0), r = [t, 0], n = 1; n < this.zzj2; n++) this.get(t, n) < e && (e = this.get(t, n), r[1] = n); return r } }, { key: "zzk", value: function(t) { if (g(this, t), this.zzu3()) return NaN; for (var e = this.get(0, t), r = 1; r < this.zzk2; r++) this.get(r, t) > e && (e = this.get(r, t)); return e } }, { key: "zzkIndex", value: function(t) { g(this, t), w(this); for (var e = this.get(0, t), r = [0, t], n = 1; n < this.zzk2; n++) this.get(n, t) > e && (e = this.get(n, t), r[0] = n); return r } }, { key: "zzm", value: function(t) { if (g(this, t), this.zzu3()) return NaN; for (var e = this.get(0, t), r = 1; r < this.zzk2; r++) this.get(r, t) < e && (e = this.get(r, t)); return e } }, { key: "zzmIndex", value: function(t) { g(this, t), w(this); for (var e = this.get(0, t), r = [0, t], n = 1; n < this.zzk2; n++) this.get(n, t) < e && (e = this.get(n, t), r[0] = n); return r } }, { key: "zzo", value: function() { for (var t = Math.min(this.zzk2, this.zzj2), e = [], r = 0; r < t; r++) e.push(this.get(r, r)); return e } }, {
                                            key: "zzp",
                                            value: function() {
                                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "zzw3",
                                                    e = 0;
                                                if ("max" === t) return this.max();
                                                if ("zzw3" === t) {
                                                    for (var r = 0; r < this.zzk2; r++)
                                                        for (var n = 0; n < this.zzj2; n++) e += this.get(r, n) * this.get(r, n);
                                                    return Math.sqrt(e)
                                                }
                                                throw new Error("unknown zzp type: ".concat(t))
                                            }
                                        }, {
                                            key: "zzq",
                                            value: function() {
                                                for (var t = 0, e = 0; e < this.zzk2; e++)
                                                    for (var r = 0; r < this.zzj2; r++) t += this.get(e, r), this.set(e, r, t);
                                                return this
                                            }
                                        }, { key: "dot", value: function(e) { t.zzM1(e) && (e = e.zzC()); var r = this.zzC(); if (r.length !== e.length) throw new Error; for (var n = 0, i = 0; i < r.length; i++) n += r[i] * e[i]; return n } }, { key: "zzr", value: function(t) { t = T.zzL1(t); var e = new T(this.zzk2, t.zzj2); return this.zzr2(t, e), e } }, {
                                            key: "zzr2",
                                            value: function(t, e) {
                                                var r = this.zzk2,
                                                    n = this.zzj2,
                                                    i = t.zzj2;
                                                this.Bcolj = this.Bcolj || new Float32Array(n);
                                                for (var a = this.Bcolj, o = 0; o < i; o++) {
                                                    for (var u = 0; u < n; u++) a[u] = t.get(u, o);
                                                    for (var s = 0; s < r; s++) {
                                                        for (var f = 0, c = 0; c < n; c++) f += this.get(s, c) * a[c];
                                                        e.set(s, o, f)
                                                    }
                                                }
                                            }
                                        }, {
                                            key: "zzs",
                                            value: function(t) {
                                                t = T.zzL1(t);
                                                var e = new T(2, 2),
                                                    r = this.get(0, 0),
                                                    n = t.get(0, 0),
                                                    i = this.get(0, 1),
                                                    a = t.get(0, 1),
                                                    o = this.get(1, 0),
                                                    u = t.get(1, 0),
                                                    s = this.get(1, 1),
                                                    f = t.get(1, 1),
                                                    c = (r + s) * (n + f),
                                                    l = (o + s) * n,
                                                    v = r * (a - f),
                                                    h = s * (u - n),
                                                    z = (r + i) * f,
                                                    g = c + h - z + (i - s) * (u + f),
                                                    d = v + z,
                                                    m = l + h,
                                                    p = c - l + v + (o - r) * (n + a);
                                                return e.set(0, 0, g), e.set(0, 1, d), e.set(1, 0, m), e.set(1, 1, p), e
                                            }
                                        }, {
                                            key: "zzt",
                                            value: function(t) {
                                                t = T.zzL1(t);
                                                var e = new T(3, 3),
                                                    r = this.get(0, 0),
                                                    n = this.get(0, 1),
                                                    i = this.get(0, 2),
                                                    a = this.get(1, 0),
                                                    o = this.get(1, 1),
                                                    u = this.get(1, 2),
                                                    s = this.get(2, 0),
                                                    f = this.get(2, 1),
                                                    c = this.get(2, 2),
                                                    l = t.get(0, 0),
                                                    v = t.get(0, 1),
                                                    h = t.get(0, 2),
                                                    z = t.get(1, 0),
                                                    g = t.get(1, 1),
                                                    d = t.get(1, 2),
                                                    m = t.get(2, 0),
                                                    p = t.get(2, 1),
                                                    b = t.get(2, 2),
                                                    E = (r - a) * (-v + g),
                                                    y = (-r + a + o) * (l - v + g),
                                                    w = (a + o) * (-l + v),
                                                    R = r * l,
                                                    A = (-r + s + f) * (l - h + d),
                                                    x = (-r + s) * (h - d),
                                                    _ = (s + f) * (-l + h),
                                                    F = (-i + f + c) * (g + m - p),
                                                    k = (i - c) * (g - p),
                                                    D = i * m,
                                                    M = (f + c) * (-m + p),
                                                    j = (-i + o + u) * (d + m - b),
                                                    S = (i - u) * (d - b),
                                                    L = (o + u) * (-m + b),
                                                    O = R + D + n * z,
                                                    P = (r + n + i - a - o - f - c) * g + y + w + R + F + D + M,
                                                    B = R + A + _ + (r + n + i - o - u - s - f) * d + D + j + L,
                                                    U = E + o * (-l + v + z - g - d - m + b) + y + R + D + j + S,
                                                    N = E + y + w + R + u * p,
                                                    I = D + j + S + L + a * h,
                                                    C = R + A + x + f * (-l + h + z - g - d - m + p) + F + k + D,
                                                    G = F + k + D + M + s * v,
                                                    X = R + A + x + _ + c * b;
                                                return e.set(0, 0, O), e.set(0, 1, P), e.set(0, 2, B), e.set(1, 0, U), e.set(1, 1, N), e.set(1, 2, I), e.set(2, 0, C), e.set(2, 1, G), e.set(2, 2, X), e
                                            }
                                        }, {
                                            key: "zzrStrassen",
                                            value: function(e) {
                                                e = T.zzL1(e);
                                                var r = this.clone(),
                                                    n = r.zzk2,
                                                    i = r.zzj2,
                                                    a = e.zzk2,
                                                    o = e.zzj2;

                                                function u(e, r, n) {
                                                    var i = e.zzk2,
                                                        a = e.zzj2;
                                                    if (i === r && a === n) return e;
                                                    var o = t.zzG1(r, n);
                                                    return o.zz61(e, 0, 0)
                                                }
                                                var s = Math.max(n, a),
                                                    f = Math.max(i, o);
                                                return function e(r, n, i, a) {
                                                    if (i <= 512 || a <= 512) return r.zzr(n);
                                                    i % 2 == 1 && a % 2 == 1 ? (r = u(r, i + 1, a + 1), n = u(n, i + 1, a + 1)) : i % 2 == 1 ? (r = u(r, i + 1, a), n = u(n, i + 1, a)) : a % 2 == 1 && (r = u(r, i, a + 1), n = u(n, i, a + 1));
                                                    var o = parseInt(r.zzk2 / 2, 10),
                                                        s = parseInt(r.zzj2 / 2, 10),
                                                        f = r.zz31(0, o - 1, 0, s - 1),
                                                        c = n.zz31(0, o - 1, 0, s - 1),
                                                        l = r.zz31(0, o - 1, s, r.zzj2 - 1),
                                                        v = n.zz31(0, o - 1, s, n.zzj2 - 1),
                                                        h = r.zz31(o, r.zzk2 - 1, 0, s - 1),
                                                        z = n.zz31(o, n.zzk2 - 1, 0, s - 1),
                                                        g = r.zz31(o, r.zzk2 - 1, s, r.zzj2 - 1),
                                                        d = n.zz31(o, n.zzk2 - 1, s, n.zzj2 - 1),
                                                        m = e(t.add(f, g), t.add(c, d), o, s),
                                                        p = e(t.add(h, g), c, o, s),
                                                        b = e(f, t.sub(v, d), o, s),
                                                        E = e(g, t.sub(z, c), o, s),
                                                        y = e(t.add(f, l), d, o, s),
                                                        w = e(t.sub(h, f), t.add(c, v), o, s),
                                                        R = e(t.sub(l, g), t.add(z, d), o, s),
                                                        A = t.add(m, E);
                                                    A.sub(y), A.add(R);
                                                    var T = t.add(b, y),
                                                        x = t.add(p, E),
                                                        _ = t.sub(m, p);
                                                    _.add(b), _.add(w);
                                                    var F = t.zzG1(2 * A.zzk2, 2 * A.zzj2);
                                                    return (F = (F = (F = (F = F.zz61(A, 0, 0)).zz61(T, A.zzk2, 0)).zz61(x, 0, A.zzj2)).zz61(_, A.zzk2, A.zzj2)).zz31(0, i - 1, 0, a - 1)
                                                }(r = u(r, s, f), e = u(e, s, f), s, f)
                                            }
                                        }, {
                                            key: "zzv",
                                            value: function() {
                                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                                if ("object" != c(t)) throw new Error;
                                                var e = t.min,
                                                    r = void 0 === e ? 0 : e,
                                                    n = t.max,
                                                    i = void 0 === n ? 1 : n;
                                                if (!Number.isFinite(r)) throw new Error;
                                                if (!Number.isFinite(i)) throw new Error;
                                                if (r >= i) throw new Error;
                                                for (var a = new T(this.zzk2, this.zzj2), u = 0; u < this.zzk2; u++) {
                                                    var s = this.zzM(u);
                                                    s.length > 0 && o(s, { min: r, max: i, output: s }), a.zzO(u, s)
                                                }
                                                return a
                                            }
                                        }, {
                                            key: "zzw",
                                            value: function() {
                                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                                if ("object" != c(t)) throw new Error;
                                                var e = t.min,
                                                    r = void 0 === e ? 0 : e,
                                                    n = t.max,
                                                    i = void 0 === n ? 1 : n;
                                                if (!Number.isFinite(r)) throw new Error;
                                                if (!Number.isFinite(i)) throw new Error;
                                                if (r >= i) throw new Error;
                                                for (var a = new T(this.zzk2, this.zzj2), u = 0; u < this.zzj2; u++) {
                                                    var s = this.zzQ(u);
                                                    s.length && o(s, { min: r, max: i, output: s }), a.zzS(u, s)
                                                }
                                                return a
                                            }
                                        }, {
                                            key: "zzx",
                                            value: function() {
                                                for (var t = Math.ceil(this.zzj2 / 2), e = 0; e < this.zzk2; e++)
                                                    for (var r = 0; r < t; r++) {
                                                        var n = this.get(e, r),
                                                            i = this.get(e, this.zzj2 - 1 - r);
                                                        this.set(e, r, i), this.set(e, this.zzj2 - 1 - r, n)
                                                    }
                                                return this
                                            }
                                        }, {
                                            key: "zzy",
                                            value: function() {
                                                for (var t = Math.ceil(this.zzk2 / 2), e = 0; e < this.zzj2; e++)
                                                    for (var r = 0; r < t; r++) {
                                                        var n = this.get(r, e),
                                                            i = this.get(this.zzk2 - 1 - r, e);
                                                        this.set(r, e, i), this.set(this.zzk2 - 1 - r, e, n)
                                                    }
                                                return this
                                            }
                                        }, {
                                            key: "zzz",
                                            value: function(t) {
                                                t = T.zzL1(t);
                                                for (var e = this.zzk2, r = this.zzj2, n = t.zzk2, i = t.zzj2, a = new T(e * n, r * i), o = 0; o < e; o++)
                                                    for (var u = 0; u < r; u++)
                                                        for (var s = 0; s < n; s++)
                                                            for (var f = 0; f < i; f++) a.set(n * o + s, i * u + f, this.get(o, u) * t.get(s, f));
                                                return a
                                            }
                                        }, {
                                            key: "kroneckerSum",
                                            value: function(t) {
                                                if (t = T.zzL1(t), !this.zzH() || !t.zzH()) throw new Error;
                                                var e = this.zzk2,
                                                    r = t.zzk2,
                                                    n = this.zzz(T.zzJ1(r, r)),
                                                    i = T.zzJ1(e, e).zzz(t);
                                                return n.add(i)
                                            }
                                        }, { key: "zz01", value: function() { var t = new T(this.zzj2, this.zzk2); return this.zz012(t), t } }, {
                                            key: "zz012",
                                            value: function(t) {
                                                for (var e = 0; e < this.zzk2; e++)
                                                    for (var r = 0; r < this.zzj2; r++) t.set(r, e, this.get(e, r))
                                            }
                                        }, { key: "zz11", value: function() { for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A, e = 0; e < this.zzk2; e++) this.zzO(e, this.zzM(e).sort(t)); return this } }, { key: "zz21", value: function() { for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A, e = 0; e < this.zzj2; e++) this.zzS(e, this.zzQ(e).sort(t)); return this } }, {
                                            key: "zz31",
                                            value: function(t, e, r, n) {
                                                b(this, t, e, r, n);
                                                for (var i = new T(e - t + 1, n - r + 1), a = t; a <= e; a++)
                                                    for (var o = r; o <= n; o++) i.set(a - t, o - r, this.get(a, o));
                                                return i
                                            }
                                        }, {
                                            key: "zz31Row",
                                            value: function(t, e, r) {
                                                if (void 0 === e && (e = 0), void 0 === r && (r = this.zzj2 - 1), e > r || e < 0 || e >= this.zzj2 || r < 0 || r >= this.zzj2) throw new Error;
                                                for (var n = new T(t.length, r - e + 1), i = 0; i < t.length; i++)
                                                    for (var a = e; a <= r; a++) {
                                                        if (t[i] < 0 || t[i] >= this.zzk2) throw new Error("Row index out of range: ".concat(t[i]));
                                                        n.set(i, a - e, this.get(t[i], a))
                                                    }
                                                return n
                                            }
                                        }, {
                                            key: "zz31Column",
                                            value: function(t, e, r) {
                                                if (void 0 === e && (e = 0), void 0 === r && (r = this.zzk2 - 1), e > r || e < 0 || e >= this.zzk2 || r < 0 || r >= this.zzk2) throw new Error;
                                                for (var n = new T(r - e + 1, t.length), i = 0; i < t.length; i++)
                                                    for (var a = e; a <= r; a++) {
                                                        if (t[i] < 0 || t[i] >= this.zzj2) throw new Error("Column index out of range: ".concat(t[i]));
                                                        n.set(a - e, i, this.get(a, t[i]))
                                                    }
                                                return n
                                            }
                                        }, {
                                            key: "zz61",
                                            value: function(t, e, r) {
                                                if ((t = T.zzL1(t)).zzu3()) return this;
                                                b(this, e, e + t.zzk2 - 1, r, r + t.zzj2 - 1);
                                                for (var n = 0; n < t.zzk2; n++)
                                                    for (var i = 0; i < t.zzj2; i++) this.set(e + n, r + i, t.get(n, i));
                                                return this
                                            }
                                        }, {
                                            key: "zz71",
                                            value: function(t, e) {
                                                for (var r = p(this, t, e), n = new T(t.length, e.length), i = 0; i < r.row.length; i++)
                                                    for (var a = r.row[i], o = 0; o < r.zz23.length; o++) {
                                                        var u = r.zz23[o];
                                                        n.set(i, o, this.get(a, u))
                                                    }
                                                return n
                                            }
                                        }, { key: "trace", value: function() { for (var t = Math.min(this.zzk2, this.zzj2), e = 0, r = 0; r < t; r++) e += this.get(r, r); return e } }, {
                                            key: "copy",
                                            value: function(t) {
                                                for (var e = 0; e < this.zzk2; e++)
                                                    for (var r = 0; r < this.zzj2; r++) this.set(e, r, t.get(e, r))
                                            }
                                        }, {
                                            key: "reset",
                                            value: function() {
                                                for (var t = 0; t < this.zzk2; t++)
                                                    for (var e = 0; e < this.zzj2; e++) this.set(t, e, 0)
                                            }
                                        }, { key: "clone", value: function() { var t = new T(this.zzk2, this.zzj2); return t.copy(this), t } }, {
                                            key: "sum",
                                            value: function(t) {
                                                switch (t) {
                                                    case "row":
                                                        return function(t) {
                                                            for (var e = E(t.zzk2), r = 0; r < t.zzk2; ++r)
                                                                for (var n = 0; n < t.zzj2; ++n) e[r] += t.get(r, n);
                                                            return e
                                                        }(this);
                                                    case "zz23":
                                                        return function(t) {
                                                            for (var e = E(t.zzj2), r = 0; r < t.zzk2; ++r)
                                                                for (var n = 0; n < t.zzj2; ++n) e[n] += t.get(r, n);
                                                            return e
                                                        }(this);
                                                    case void 0:
                                                        return function(t) {
                                                            for (var e = 0, r = 0; r < t.zzk2; r++)
                                                                for (var n = 0; n < t.zzj2; n++) e += t.get(r, n);
                                                            return e
                                                        }(this);
                                                    default:
                                                        throw new Error("inzyp13 option: ".concat(t))
                                                }
                                            }
                                        }, {
                                            key: "zz81",
                                            value: function(t) {
                                                switch (t) {
                                                    case "row":
                                                        return function(t) {
                                                            for (var e = E(t.zzk2, 1), r = 0; r < t.zzk2; ++r)
                                                                for (var n = 0; n < t.zzj2; ++n) e[r] *= t.get(r, n);
                                                            return e
                                                        }(this);
                                                    case "zz23":
                                                        return function(t) {
                                                            for (var e = E(t.zzj2, 1), r = 0; r < t.zzk2; ++r)
                                                                for (var n = 0; n < t.zzj2; ++n) e[n] *= t.get(r, n);
                                                            return e
                                                        }(this);
                                                    case void 0:
                                                        return function(t) {
                                                            for (var e = 1, r = 0; r < t.zzk2; r++)
                                                                for (var n = 0; n < t.zzj2; n++) e *= t.get(r, n);
                                                            return e
                                                        }(this);
                                                    default:
                                                        throw new Error("inzyp13 option: ".concat(t))
                                                }
                                            }
                                        }, {
                                            key: "zz91",
                                            value: function(t) {
                                                var e = this.sum(t);
                                                switch (t) {
                                                    case "row":
                                                        for (var r = 0; r < this.zzk2; r++) e[r] /= this.zzj2;
                                                        return e;
                                                    case "zz23":
                                                        for (var n = 0; n < this.zzj2; n++) e[n] /= this.zzk2;
                                                        return e;
                                                    case void 0:
                                                        return e / this.zzC1;
                                                    default:
                                                        throw new Error("inzyp13 option: ".concat(t))
                                                }
                                            }
                                        }, {
                                            key: "zzA1",
                                            value: function(t) {
                                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                                if ("object" == c(t) && (e = t, t = void 0), "object" != c(e)) throw new Error;
                                                var r = e,
                                                    n = r.unbiased,
                                                    i = void 0 === n || n,
                                                    a = r.zz91,
                                                    o = void 0 === a ? this.zz91(t) : a;
                                                if ("boolean" != typeof i) throw new Error;
                                                switch (t) {
                                                    case "row":
                                                        if (!Array.isArray(o)) throw new Error;
                                                        return function(t, e, r) {
                                                            for (var n = t.zzk2, i = t.zzj2, a = [], o = 0; o < n; o++) {
                                                                for (var u = 0, s = 0, f = 0, c = 0; c < i; c++) u += f = t.get(o, c) - r[o], s += f * f;
                                                                e ? a.push((s - u * u / i) / (i - 1)) : a.push((s - u * u / i) / i)
                                                            }
                                                            return a
                                                        }(this, i, o);
                                                    case "zz23":
                                                        if (!Array.isArray(o)) throw new Error;
                                                        return function(t, e, r) {
                                                            for (var n = t.zzk2, i = t.zzj2, a = [], o = 0; o < i; o++) {
                                                                for (var u = 0, s = 0, f = 0, c = 0; c < n; c++) u += f = t.get(c, o) - r[o], s += f * f;
                                                                e ? a.push((s - u * u / n) / (n - 1)) : a.push((s - u * u / n) / n)
                                                            }
                                                            return a
                                                        }(this, i, o);
                                                    case void 0:
                                                        if ("number" != typeof o) throw new Error;
                                                        return function(t, e, r) {
                                                            for (var n = t.zzk2, i = t.zzj2, a = n * i, o = 0, u = 0, s = 0, f = 0; f < n; f++)
                                                                for (var c = 0; c < i; c++) o += s = t.get(f, c) - r, u += s * s;
                                                            return e ? (u - o * o / a) / (a - 1) : (u - o * o / a) / a
                                                        }(this, i, o);
                                                    default:
                                                        throw new Error("inzyp13 option: ".concat(t))
                                                }
                                            }
                                        }, { key: "zzB1", value: function(t, e) { "object" == c(t) && (e = t, t = void 0); var r = this.zzA1(t, e); if (void 0 === t) return Math.sqrt(r); for (var n = 0; n < r.length; n++) r[n] = Math.sqrt(r[n]); return r } }, {
                                            key: "center",
                                            value: function(t) {
                                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                                if ("object" == c(t) && (e = t, t = void 0), "object" != c(e)) throw new Error;
                                                var r = e.center,
                                                    n = void 0 === r ? this.zz91(t) : r;
                                                switch (t) {
                                                    case "row":
                                                        if (!Array.isArray(n)) throw new Error;
                                                        return function(t, e) {
                                                            for (var r = 0; r < t.zzk2; r++)
                                                                for (var n = 0; n < t.zzj2; n++) t.set(r, n, t.get(r, n) - e[r])
                                                        }(this, n), this;
                                                    case "zz23":
                                                        if (!Array.isArray(n)) throw new Error;
                                                        return function(t, e) {
                                                            for (var r = 0; r < t.zzk2; r++)
                                                                for (var n = 0; n < t.zzj2; n++) t.set(r, n, t.get(r, n) - e[n])
                                                        }(this, n), this;
                                                    case void 0:
                                                        if ("number" != typeof n) throw new Error;
                                                        return function(t, e) {
                                                            for (var r = 0; r < t.zzk2; r++)
                                                                for (var n = 0; n < t.zzj2; n++) t.set(r, n, t.get(r, n) - e)
                                                        }(this, n), this;
                                                    default:
                                                        throw new Error("inzyp13 option: ".concat(t))
                                                }
                                            }
                                        }, {
                                            key: "scale",
                                            value: function(t) {
                                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                                if ("object" == c(t) && (e = t, t = void 0), "object" != c(e)) throw new Error;
                                                var r = e.scale;
                                                switch (t) {
                                                    case "row":
                                                        if (void 0 === r) r = function(t) {
                                                            for (var e = [], r = 0; r < t.zzk2; r++) {
                                                                for (var n = 0, i = 0; i < t.zzj2; i++) n += Math.pow(t.get(r, i), 2) / (t.zzj2 - 1);
                                                                e.push(Math.sqrt(n))
                                                            }
                                                            return e
                                                        }(this);
                                                        else if (!Array.isArray(r)) throw new Error;
                                                        return function(t, e) {
                                                            for (var r = 0; r < t.zzk2; r++)
                                                                for (var n = 0; n < t.zzj2; n++) t.set(r, n, t.get(r, n) / e[r])
                                                        }(this, r), this;
                                                    case "zz23":
                                                        if (void 0 === r) r = function(t) {
                                                            for (var e = [], r = 0; r < t.zzj2; r++) {
                                                                for (var n = 0, i = 0; i < t.zzk2; i++) n += Math.pow(t.get(i, r), 2) / (t.zzk2 - 1);
                                                                e.push(Math.sqrt(n))
                                                            }
                                                            return e
                                                        }(this);
                                                        else if (!Array.isArray(r)) throw new Error;
                                                        return function(t, e) {
                                                            for (var r = 0; r < t.zzk2; r++)
                                                                for (var n = 0; n < t.zzj2; n++) t.set(r, n, t.get(r, n) / e[n])
                                                        }(this, r), this;
                                                    case void 0:
                                                        if (void 0 === r) r = function(t) {
                                                            for (var e = t.zzC1 - 1, r = 0, n = 0; n < t.zzj2; n++)
                                                                for (var i = 0; i < t.zzk2; i++) r += Math.pow(t.get(i, n), 2) / e;
                                                            return Math.sqrt(r)
                                                        }(this);
                                                        else if ("number" != typeof r) throw new Error;
                                                        return function(t, e) {
                                                            for (var r = 0; r < t.zzk2; r++)
                                                                for (var n = 0; n < t.zzj2; n++) t.set(r, n, t.get(r, n) / e)
                                                        }(this, r), this;
                                                    default:
                                                        throw new Error("inzyp13 option: ".concat(t))
                                                }
                                            }
                                        }, { key: "toString", value: function(t) { return v(this, t) } }, { key: "zzC1", get: function() { return this.zzk2 * this.zzj2 } }], [{
                                            key: "zzD1",
                                            value: function(t, e, r) {
                                                if (t * e !== r.length) throw new Error;
                                                for (var n = new T(t, e), i = 0; i < t; i++)
                                                    for (var a = 0; a < e; a++) n.set(i, a, r[i * e + a]);
                                                return n
                                            }
                                        }, { key: "zzE1", value: function(t) { for (var e = new T(1, t.length), r = 0; r < t.length; r++) e.set(0, r, t[r]); return e } }, { key: "zzF1", value: function(t) { for (var e = new T(t.length, 1), r = 0; r < t.length; r++) e.set(r, 0, t[r]); return e } }, { key: "zzG1", value: function(t, e) { return new T(t, e) } }, { key: "zzH1", value: function(t, e) { return new T(t, e).zzL(1) } }, {
                                            key: "rand",
                                            value: function(t, e) {
                                                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                                if ("object" != c(r)) throw new Error;
                                                for (var n = r.random, i = void 0 === n ? Math.random : n, a = new T(t, e), o = 0; o < t; o++)
                                                    for (var u = 0; u < e; u++) a.set(o, u, i());
                                                return a
                                            }
                                        }, {
                                            key: "zzI1",
                                            value: function(t, e) {
                                                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                                if ("object" != c(r)) throw new Error;
                                                var n = r.min,
                                                    i = void 0 === n ? 0 : n,
                                                    a = r.max,
                                                    o = void 0 === a ? 1e3 : a,
                                                    u = r.random,
                                                    s = void 0 === u ? Math.random : u;
                                                if (!Number.isInteger(i)) throw new Error;
                                                if (!Number.isInteger(o)) throw new Error;
                                                if (i >= o) throw new Error;
                                                for (var f = o - i, l = new T(t, e), v = 0; v < t; v++)
                                                    for (var h = 0; h < e; h++) {
                                                        var z = i + Math.round(s() * f);
                                                        l.set(v, h, z)
                                                    }
                                                return l
                                            }
                                        }, { key: "zzJ1", value: function(t, e, r) { void 0 === e && (e = t), void 0 === r && (r = 1); for (var n = Math.min(t, e), i = this.zzG1(t, e), a = 0; a < n; a++) i.set(a, a, r); return i } }, {
                                            key: "zzo",
                                            value: function(t, e, r) {
                                                var n = t.length;
                                                void 0 === e && (e = n), void 0 === r && (r = e);
                                                for (var i = Math.min(n, e, r), a = this.zzG1(e, r), o = 0; o < i; o++) a.set(o, o, t[o]);
                                                return a
                                            }
                                        }, {
                                            key: "min",
                                            value: function(t, e) {
                                                t = this.zzL1(t), e = this.zzL1(e);
                                                for (var r = t.zzk2, n = t.zzj2, i = new T(r, n), a = 0; a < r; a++)
                                                    for (var o = 0; o < n; o++) i.set(a, o, Math.min(t.get(a, o), e.get(a, o)));
                                                return i
                                            }
                                        }, {
                                            key: "max",
                                            value: function(t, e) {
                                                t = this.zzL1(t), e = this.zzL1(e);
                                                for (var r = t.zzk2, n = t.zzj2, i = new this(r, n), a = 0; a < r; a++)
                                                    for (var o = 0; o < n; o++) i.set(a, o, Math.max(t.get(a, o), e.get(a, o)));
                                                return i
                                            }
                                        }, { key: "zzL1", value: function(e) { return t.zzM1(e) ? e : new T(e) } }, { key: "zzM1", value: function(t) { return null != t && "Matrix" === t.klass } }]), t
                                    }();

                                    function A(t, e) { return t - e }
                                    R.prototype.klass = "Matrix", "undefined" != typeof Symbol && (R.prototype[Symbol.for("zze3")] = function() { return v(this) }), R.random = R.rand, R.randomInt = R.zzI1, R.zzoonal = R.zzo, R.prototype.zzoonal = R.prototype.zzo, R.zzo2 = R.zzJ1, R.prototype.negate = R.prototype.neg, R.prototype.zzI3 = R.prototype.zzz;
                                    var T = function(t) {
                                        n(r, R);
                                        var e = i(r);

                                        function r(t, n) {
                                            var i;
                                            if (u(this, r), i = e.call(this), r.zzM1(t)) return a(i, t.clone());
                                            if (Number.isInteger(t) && t >= 0) i.dataFlatten = new Float32Array(n * t);
                                            else {
                                                if (!Array.isArray(t)) throw new Error;
                                                var o = t;
                                                if ("number" != typeof(n = (t = o.length) ? o[0].length : 0)) i.dataFlatten = new Float32Array(o);
                                                else {
                                                    i.dataFlatten = new Float32Array(n * t);
                                                    for (var s = 0; s < t; s++)
                                                        for (var f = 0; f < n; f++) i.dataFlatten[s * n + f] = o[s][f]
                                                }
                                            }
                                            return i.zzk2 = t, i.zzj2 = n, a(i)
                                        }
                                        return f(r, [{ key: "set", value: function(t, e, r) { return this.dataFlatten[t * this.zzj2 + e] = r, this } }, { key: "get", value: function(t, e) { return this.dataFlatten[t * this.zzj2 + e] } }, { key: "zzn3", value: function(t, e, r) { this.dataFlatten[t * this.zzj2 + e] += r } }, { key: "mulComponent", value: function(t, e, r) { this.dataFlatten[t * this.zzj2 + e] *= r } }]), r
                                    }();
                                    ! function(t, e) {
                                        t.prototype.add = function(t) { return "number" == typeof t ? this.addS(t) : this.addM(t) }, t.prototype.addS = function(t) {
                                            for (var e = 0; e < this.zzk2; e++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(e, r, this.get(e, r) + t);
                                            return this
                                        }, t.prototype.addM = function(t) {
                                            if (t = e.zzL1(t), this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2) throw new Error;
                                            for (var r = 0; r < this.zzk2; r++)
                                                for (var n = 0; n < this.zzj2; n++) this.set(r, n, this.get(r, n) + t.get(r, n));
                                            return this
                                        }, t.add = function(t, r) { return new e(t).add(r) }, t.prototype.sub = function(t) { return "number" == typeof t ? this.subS(t) : this.subM(t) }, t.prototype.subS = function(t) {
                                            for (var e = 0; e < this.zzk2; e++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(e, r, this.get(e, r) - t);
                                            return this
                                        }, t.prototype.subM = function(t) {
                                            if (t = e.zzL1(t), this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2) throw new Error;
                                            for (var r = 0; r < this.zzk2; r++)
                                                for (var n = 0; n < this.zzj2; n++) this.set(r, n, this.get(r, n) - t.get(r, n));
                                            return this
                                        }, t.sub = function(t, r) { return new e(t).sub(r) }, t.prototype.subtract = t.prototype.sub, t.prototype.subtractS = t.prototype.subS, t.prototype.subtractM = t.prototype.subM, t.subtract = t.sub, t.prototype.zzi3 = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(t, e, 0)
                                        }, t.prototype.mul = function(t) { return "number" == typeof t ? this.mulS(t) : this.mulM(t) }, t.prototype.mulS = function(t) {
                                            for (var e = 0; e < this.zzk2; e++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(e, r, this.get(e, r) * t);
                                            return this
                                        }, t.prototype.mulM = function(t) {
                                            if (t = e.zzL1(t), this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2) throw new Error;
                                            for (var r = 0; r < this.zzk2; r++)
                                                for (var n = 0; n < this.zzj2; n++) this.set(r, n, this.get(r, n) * t.get(r, n));
                                            return this
                                        }, t.mul = function(t, r) { return new e(t).mul(r) }, t.prototype.multiply = t.prototype.mul, t.prototype.multiplyS = t.prototype.mulS, t.prototype.multiplyM = t.prototype.mulM, t.multiply = t.mul, t.prototype.div = function(t) { return "number" == typeof t ? this.divS(t) : this.divM(t) }, t.prototype.divS = function(t) {
                                            for (var e = 0; e < this.zzk2; e++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(e, r, this.get(e, r) / t);
                                            return this
                                        }, t.prototype.divM = function(t) {
                                            if (t = e.zzL1(t), this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2) throw new Error;
                                            for (var r = 0; r < this.zzk2; r++)
                                                for (var n = 0; n < this.zzj2; n++) this.set(r, n, this.get(r, n) / t.get(r, n));
                                            return this
                                        }, t.div = function(t, r) { return new e(t).div(r) }, t.prototype.divide = t.prototype.div, t.prototype.divideS = t.prototype.divS, t.prototype.divideM = t.prototype.divM, t.divide = t.div, t.prototype.mod = function(t) { return "number" == typeof t ? this.modS(t) : this.modM(t) }, t.prototype.modS = function(t) {
                                            for (var e = 0; e < this.zzk2; e++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(e, r, this.get(e, r) % t);
                                            return this
                                        }, t.prototype.modM = function(t) {
                                            if (t = e.zzL1(t), this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2) throw new Error;
                                            for (var r = 0; r < this.zzk2; r++)
                                                for (var n = 0; n < this.zzj2; n++) this.set(r, n, this.get(r, n) % t.get(r, n));
                                            return this
                                        }, t.mod = function(t, r) { return new e(t).mod(r) }, t.prototype.zzO3 = t.prototype.mod, t.prototype.zzO3S = t.prototype.modS, t.prototype.zzO3M = t.prototype.modM, t.zzO3 = t.mod, t.prototype.and = function(t) { return "number" == typeof t ? this.andS(t) : this.andM(t) }, t.prototype.andS = function(t) {
                                            for (var e = 0; e < this.zzk2; e++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(e, r, this.get(e, r) & t);
                                            return this
                                        }, t.prototype.andM = function(t) {
                                            if (t = e.zzL1(t), this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2) throw new Error;
                                            for (var r = 0; r < this.zzk2; r++)
                                                for (var n = 0; n < this.zzj2; n++) this.set(r, n, this.get(r, n) & t.get(r, n));
                                            return this
                                        }, t.and = function(t, r) { return new e(t).and(r) }, t.prototype.or = function(t) { return "number" == typeof t ? this.orS(t) : this.orM(t) }, t.prototype.orS = function(t) {
                                            for (var e = 0; e < this.zzk2; e++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(e, r, this.get(e, r) | t);
                                            return this
                                        }, t.prototype.orM = function(t) {
                                            if (t = e.zzL1(t), this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2) throw new Error;
                                            for (var r = 0; r < this.zzk2; r++)
                                                for (var n = 0; n < this.zzj2; n++) this.set(r, n, this.get(r, n) | t.get(r, n));
                                            return this
                                        }, t.or = function(t, r) { return new e(t).or(r) }, t.prototype.xor = function(t) { return "number" == typeof t ? this.xorS(t) : this.xorM(t) }, t.prototype.xorS = function(t) {
                                            for (var e = 0; e < this.zzk2; e++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(e, r, this.get(e, r) ^ t);
                                            return this
                                        }, t.prototype.xorM = function(t) {
                                            if (t = e.zzL1(t), this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2) throw new Error;
                                            for (var r = 0; r < this.zzk2; r++)
                                                for (var n = 0; n < this.zzj2; n++) this.set(r, n, this.get(r, n) ^ t.get(r, n));
                                            return this
                                        }, t.xor = function(t, r) { return new e(t).xor(r) }, t.prototype.zzQ3 = function(t) { return "number" == typeof t ? this.zzQ3S(t) : this.zzQ3M(t) }, t.prototype.zzQ3S = function(t) {
                                            for (var e = 0; e < this.zzk2; e++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(e, r, this.get(e, r) << t);
                                            return this
                                        }, t.prototype.zzQ3M = function(t) {
                                            if (t = e.zzL1(t), this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2) throw new Error;
                                            for (var r = 0; r < this.zzk2; r++)
                                                for (var n = 0; n < this.zzj2; n++) this.set(r, n, this.get(r, n) << t.get(r, n));
                                            return this
                                        }, t.zzQ3 = function(t, r) { return new e(t).zzQ3(r) }, t.prototype.zzJ3 = function(t) { return "number" == typeof t ? this.zzJ3S(t) : this.zzJ3M(t) }, t.prototype.zzJ3S = function(t) {
                                            for (var e = 0; e < this.zzk2; e++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(e, r, this.get(e, r) >> t);
                                            return this
                                        }, t.prototype.zzJ3M = function(t) {
                                            if (t = e.zzL1(t), this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2) throw new Error;
                                            for (var r = 0; r < this.zzk2; r++)
                                                for (var n = 0; n < this.zzj2; n++) this.set(r, n, this.get(r, n) >> t.get(r, n));
                                            return this
                                        }, t.zzJ3 = function(t, r) { return new e(t).zzJ3(r) }, t.prototype.zzL3 = function(t) { return "number" == typeof t ? this.zzL3S(t) : this.zzL3M(t) }, t.prototype.zzL3S = function(t) {
                                            for (var e = 0; e < this.zzk2; e++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(e, r, this.get(e, r) >>> t);
                                            return this
                                        }, t.prototype.zzL3M = function(t) {
                                            if (t = e.zzL1(t), this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2) throw new Error;
                                            for (var r = 0; r < this.zzk2; r++)
                                                for (var n = 0; n < this.zzj2; n++) this.set(r, n, this.get(r, n) >>> t.get(r, n));
                                            return this
                                        }, t.zzL3 = function(t, r) { return new e(t).zzL3(r) }, t.prototype.zzK3 = t.prototype.zzL3, t.prototype.zzK3S = t.prototype.zzL3S, t.prototype.zzK3M = t.prototype.zzL3M, t.zzK3 = t.zzL3, t.prototype.not = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(t, e, ~this.get(t, e));
                                            return this
                                        }, t.not = function(t) { return new e(t).not() }, t.prototype.abs = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(t, e, Math.abs(this.get(t, e)));
                                            return this
                                        }, t.abs = function(t) { return new e(t).abs() }, t.prototype.acos = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(t, e, Math.acos(this.get(t, e)));
                                            return this
                                        }, t.acos = function(t) { return new e(t).acos() }, t.prototype.zzM3 = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(t, e, Math.zzM3(this.get(t, e)));
                                            return this
                                        }, t.zzM3 = function(t) { return new e(t).zzM3() }, t.prototype.asin = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(t, e, Math.asin(this.get(t, e)));
                                            return this
                                        }, t.asin = function(t) { return new e(t).asin() }, t.prototype.zzN3 = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(t, e, Math.zzN3(this.get(t, e)));
                                            return this
                                        }, t.zzN3 = function(t) { return new e(t).zzN3() }, t.prototype.atan = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(t, e, Math.atan(this.get(t, e)));
                                            return this
                                        }, t.atan = function(t) { return new e(t).atan() }, t.prototype.atanh = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(t, e, Math.atanh(this.get(t, e)));
                                            return this
                                        }, t.atanh = function(t) { return new e(t).atanh() }, t.prototype.cbrt = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(t, e, Math.cbrt(this.get(t, e)));
                                            return this
                                        }, t.cbrt = function(t) { return new e(t).cbrt() }, t.prototype.ceil = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(t, e, Math.ceil(this.get(t, e)));
                                            return this
                                        }, t.ceil = function(t) { return new e(t).ceil() }, t.prototype.clz32 = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(t, e, Math.clz32(this.get(t, e)));
                                            return this
                                        }, t.clz32 = function(t) { return new e(t).clz32() }, t.prototype.cos = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(t, e, Math.cos(this.get(t, e)));
                                            return this
                                        }, t.cos = function(t) { return new e(t).cos() }, t.prototype.cosh = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(t, e, Math.cosh(this.get(t, e)));
                                            return this
                                        }, t.cosh = function(t) { return new e(t).cosh() }, t.prototype.exp = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(t, e, Math.exp(this.get(t, e)));
                                            return this
                                        }, t.exp = function(t) { return new e(t).exp() }, t.prototype.expm1 = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(t, e, Math.expm1(this.get(t, e)));
                                            return this
                                        }, t.expm1 = function(t) { return new e(t).expm1() }, t.prototype.floor = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(t, e, Math.floor(this.get(t, e)));
                                            return this
                                        }, t.floor = function(t) { return new e(t).floor() }, t.prototype.fround = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(t, e, Math.fround(this.get(t, e)));
                                            return this
                                        }, t.fround = function(t) { return new e(t).fround() }, t.prototype.log = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(t, e, Math.log(this.get(t, e)));
                                            return this
                                        }, t.log = function(t) { return new e(t).log() }, t.prototype.log1p = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(t, e, Math.log1p(this.get(t, e)));
                                            return this
                                        }, t.log1p = function(t) { return new e(t).log1p() }, t.prototype.log10 = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(t, e, Math.log10(this.get(t, e)));
                                            return this
                                        }, t.log10 = function(t) { return new e(t).log10() }, t.prototype.log2 = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(t, e, Math.log2(this.get(t, e)));
                                            return this
                                        }, t.log2 = function(t) { return new e(t).log2() }, t.prototype.round = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(t, e, Math.round(this.get(t, e)));
                                            return this
                                        }, t.round = function(t) { return new e(t).round() }, t.prototype.sign = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(t, e, Math.sign(this.get(t, e)));
                                            return this
                                        }, t.sign = function(t) { return new e(t).sign() }, t.prototype.sin = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(t, e, Math.sin(this.get(t, e)));
                                            return this
                                        }, t.sin = function(t) { return new e(t).sin() }, t.prototype.sinh = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(t, e, Math.sinh(this.get(t, e)));
                                            return this
                                        }, t.sinh = function(t) { return new e(t).sinh() }, t.prototype.sqrt = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(t, e, Math.sqrt(this.get(t, e)));
                                            return this
                                        }, t.sqrt = function(t) { return new e(t).sqrt() }, t.prototype.tan = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(t, e, Math.tan(this.get(t, e)));
                                            return this
                                        }, t.tan = function(t) { return new e(t).tan() }, t.prototype.tanh = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(t, e, Math.tanh(this.get(t, e)));
                                            return this
                                        }, t.tanh = function(t) { return new e(t).tanh() }, t.prototype.trunc = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(t, e, Math.trunc(this.get(t, e)));
                                            return this
                                        }, t.trunc = function(t) { return new e(t).trunc() }, t.pow = function(t, r) { return new e(t).pow(r) }, t.prototype.pow = function(t) { return "number" == typeof t ? this.powS(t) : this.powM(t) }, t.prototype.powS = function(t) {
                                            for (var e = 0; e < this.zzk2; e++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(e, r, Math.pow(this.get(e, r), t));
                                            return this
                                        }, t.prototype.powM = function(t) {
                                            if (t = e.zzL1(t), this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2) throw new Error;
                                            for (var r = 0; r < this.zzk2; r++)
                                                for (var n = 0; n < this.zzj2; n++) this.set(r, n, Math.pow(this.get(r, n), t.get(r, n)));
                                            return this
                                        }
                                    }(R, T);
                                    var x = function(t) {
                                        n(r, R);
                                        var e = i(r);

                                        function r(t) {
                                            var n;
                                            u(this, r), (n = e.call(this)).zzk2 = t.length, n.zzj2 = t[0].length, n.dataFlatten = new Float32Array(n.zzk2 * n.zzj2);
                                            for (var i = 0; i < n.zzk2; i++)
                                                for (var a = 0; a < n.zzj2; a++) n.dataFlatten[i * n.zzj2 + a] = t[i][a];
                                            return n
                                        }
                                        return f(r, [{ key: "set", value: function(t, e, r) { return this.dataFlatten[t * this.zzj2 + e] = r, this } }, { key: "get", value: function(t, e) { return this.dataFlatten[t * this.zzj2 + e] } }]), r
                                    }();

                                    function _(t, e) { var r = 0; return Math.abs(t) > Math.abs(e) ? (r = e / t, Math.abs(t) * Math.sqrt(1 + r * r)) : 0 !== e ? (r = t / e, Math.abs(e) * Math.sqrt(1 + r * r)) : 0 }
                                    var F = function() {
                                            function t(e) {
                                                u(this, t);
                                                var r = (e = x.zzL1(e)).zzk2,
                                                    n = e.zzj2;
                                                this.QR = e.clone(), this.X = e.clone(), this.Rzzo = new Float32Array(n), this.m = r, this.n = n, this.update(e)
                                            }
                                            return f(t, [{
                                                key: "update",
                                                value: function(t) {
                                                    var e, r, n, i, a = this.QR,
                                                        o = this.m,
                                                        u = this.n,
                                                        s = this.Rzzo;
                                                    for (a.copy(t), n = 0; n < u; n++) {
                                                        var f = 0;
                                                        for (e = n; e < o; e++) f = _(f, a.get(e, n));
                                                        if (0 !== f) { for (a.get(n, n) < 0 && (f = -f), e = n; e < o; e++) a.set(e, n, a.get(e, n) / f); for (a.set(n, n, a.get(n, n) + 1), r = n + 1; r < u; r++) { for (i = 0, e = n; e < o; e++) i += a.get(e, n) * a.get(e, r); for (i = -i / a.get(n, n), e = n; e < o; e++) a.set(e, r, a.get(e, r) + i * a.get(e, n)) } }
                                                        s[n] = -f
                                                    }
                                                }
                                            }, {
                                                key: "solve",
                                                value: function(t) {
                                                    var e = this.QR,
                                                        r = e.zzk2,
                                                        n = t.zzj2,
                                                        i = this.X;
                                                    i.copy(t);
                                                    var a, o, u, s, f = e.zzj2;
                                                    for (u = 0; u < f; u++)
                                                        for (o = 0; o < n; o++) { for (s = 0, a = u; a < r; a++) s += e.get(a, u) * i.get(a, o); for (s = -s / e.get(u, u), a = u; a < r; a++) i.set(a, o, i.get(a, o) + s * e.get(a, u)) }
                                                    for (u = f - 1; u >= 0; u--) {
                                                        for (o = 0; o < n; o++) i.set(u, o, i.get(u, o) / this.Rzzo[u]);
                                                        for (a = 0; a < u; a++)
                                                            for (o = 0; o < n; o++) i.set(a, o, i.get(a, o) - i.get(u, o) * e.get(a, u))
                                                    }
                                                    return i.zz31(0, f - 1, 0, n - 1)
                                                }
                                            }, {
                                                key: "zzY1",
                                                value: function() {
                                                    for (var t = this.QR.zzj2, e = 0; e < t; e++)
                                                        if (0 === this.Rzzo[e]) return !1;
                                                    return !0
                                                }
                                            }, {
                                                key: "zzW1",
                                                get: function() {
                                                    var t, e, r = this.QR,
                                                        n = r.zzj2,
                                                        i = new T(n, n);
                                                    for (t = 0; t < n; t++)
                                                        for (e = 0; e < n; e++) t < e ? i.set(t, e, r.get(t, e)) : t === e ? i.set(t, e, this.Rzzo[t]) : i.set(t, e, 0);
                                                    return i
                                                }
                                            }, {
                                                key: "zzZ1",
                                                get: function() {
                                                    var t, e, r, n, i = this.QR,
                                                        a = i.zzk2,
                                                        o = i.zzj2,
                                                        u = new T(a, o);
                                                    for (r = o - 1; r >= 0; r--) {
                                                        for (t = 0; t < a; t++) u.set(t, r, 0);
                                                        for (u.set(r, r, 1), e = r; e < o; e++)
                                                            if (0 !== i.get(r, r)) { for (n = 0, t = r; t < a; t++) n += i.get(t, r) * u.get(t, e); for (n = -n / i.get(r, r), t = r; t < a; t++) u.set(t, e, u.get(t, e) + n * i.get(t, r)) }
                                                    }
                                                    return u
                                                }
                                            }]), t
                                        }(),
                                        k = function() {
                                            function t(e, r) {
                                                u(this, t);
                                                var n = e.zzk2,
                                                    i = e.zzj2,
                                                    a = Boolean(r.zzx3),
                                                    o = Boolean(r.zzZ2),
                                                    s = e.clone(),
                                                    f = Math.min(n + 1, i),
                                                    c = Math.min(n, i),
                                                    l = new Float32Array(f),
                                                    v = new T(n, c),
                                                    h = new T(i, i),
                                                    z = new Float32Array(i),
                                                    g = new Float32Array(n),
                                                    d = new Float32Array(f),
                                                    m = T.zzG1(f, f),
                                                    p = T.zzG1(h.zzk2, v.zzk2),
                                                    b = new T(h.zzk2, f),
                                                    E = new T(h.zzk2, v.zzk2);
                                                this.m = n, this.n = i, this.ni = f, this.nu = c, this.s = l, this.si = d, this.work = g, this.e = z, this.U = v, this.V = h, this.wantu = a, this.wantv = o, this.a = s, this.Ls = m, this.VLU = p, this.X = b, this.Y = E, this.compute()
                                            }
                                            return f(t, [{ key: "zz24", value: function(t) { this.a.copy(t), this.U.reset(), this.V.reset(), this.compute() } }, {
                                                key: "compute",
                                                value: function() {
                                                    for (var t = this.m, e = this.n, r = this.ni, n = this.nu, i = this.s, a = this.si, o = this.work, u = this.e, s = this.U, f = this.V, c = this.wantu, l = this.wantv, v = this.a, h = 0; h < r; h++) a[h] = h;
                                                    for (var z = Math.min(t - 1, e), g = Math.max(0, Math.min(e - 2, t)), d = Math.max(z, g), m = 0; m < d; m++) {
                                                        if (m < z) {
                                                            i[m] = 0;
                                                            for (var p = m; p < t; p++) i[m] = _(i[m], v.get(p, m));
                                                            if (0 !== i[m]) {
                                                                v.get(m, m) < 0 && (i[m] = -i[m]);
                                                                for (var b = m; b < t; b++) v.set(b, m, v.get(b, m) / i[m]);
                                                                v.set(m, m, v.get(m, m) + 1)
                                                            }
                                                            i[m] = -i[m]
                                                        }
                                                        for (var E = m + 1; E < e; E++) {
                                                            if (m < z && 0 !== i[m]) {
                                                                for (var y = 0, w = m; w < t; w++) y += v.get(w, m) * v.get(w, E);
                                                                y = -y / v.get(m, m);
                                                                for (var R = m; R < t; R++) v.set(R, E, v.get(R, E) + y * v.get(R, m))
                                                            }
                                                            u[E] = v.get(m, E)
                                                        }
                                                        if (c && m < z)
                                                            for (var A = m; A < t; A++) s.set(A, m, v.get(A, m));
                                                        if (m < g) {
                                                            u[m] = 0;
                                                            for (var T = m + 1; T < e; T++) u[m] = _(u[m], u[T]);
                                                            if (0 !== u[m]) {
                                                                u[m + 1] < 0 && (u[m] = 0 - u[m]);
                                                                for (var x = m + 1; x < e; x++) u[x] /= u[m];
                                                                u[m + 1] += 1
                                                            }
                                                            if (u[m] = -u[m], m + 1 < t && 0 !== u[m]) {
                                                                for (var F = m + 1; F < t; F++) o[F] = 0;
                                                                for (var k = m + 1; k < t; k++)
                                                                    for (var D = m + 1; D < e; D++) o[k] += u[D] * v.get(k, D);
                                                                for (var M = m + 1; M < e; M++)
                                                                    for (var j = -u[M] / u[m + 1], S = m + 1; S < t; S++) v.set(S, M, v.get(S, M) + j * o[S])
                                                            }
                                                            if (l)
                                                                for (var L = m + 1; L < e; L++) f.set(L, m, u[L])
                                                        }
                                                    }
                                                    var O = Math.min(e, t + 1);
                                                    if (z < e && (i[z] = v.get(z, z)), t < O && (i[O - 1] = 0), g + 1 < O && (u[g] = v.get(g, O - 1)), u[O - 1] = 0, c) {
                                                        for (var P = z; P < n; P++) {
                                                            for (var B = 0; B < t; B++) s.set(B, P, 0);
                                                            s.set(P, P, 1)
                                                        }
                                                        for (var U = z - 1; U >= 0; U--)
                                                            if (0 !== i[U]) {
                                                                for (var N = U + 1; N < n; N++) {
                                                                    for (var I = 0, C = U; C < t; C++) I += s.get(C, U) * s.get(C, N);
                                                                    I = -I / s.get(U, U);
                                                                    for (var G = U; G < t; G++) s.set(G, N, s.get(G, N) + I * s.get(G, U))
                                                                }
                                                                for (var X = U; X < t; X++) s.set(X, U, -s.get(X, U));
                                                                s.set(U, U, 1 + s.get(U, U));
                                                                for (var Y = 0; Y < U - 1; Y++) s.set(Y, U, 0)
                                                            } else {
                                                                for (var H = 0; H < t; H++) s.set(H, U, 0);
                                                                s.set(U, U, 1)
                                                            }
                                                    }
                                                    if (l)
                                                        for (var W = e - 1; W >= 0; W--) {
                                                            if (W < g && 0 !== u[W])
                                                                for (var q = W + 1; q < e; q++) {
                                                                    for (var V = 0, J = W + 1; J < e; J++) V += f.get(J, W) * f.get(J, q);
                                                                    V = -V / f.get(W + 1, W);
                                                                    for (var K = W + 1; K < e; K++) f.set(K, q, f.get(K, q) + V * f.get(K, W))
                                                                }
                                                            for (var Q = 0; Q < e; Q++) f.set(Q, W, 0);
                                                            f.set(W, W, 1)
                                                        }
                                                    for (var Z = O - 1, $ = Number.EPSILON; O > 0;) {
                                                        var tt = void 0,
                                                            et = void 0;
                                                        for (tt = O - 2; tt >= -1 && -1 !== tt; tt--) { var rt = Number.MIN_VALUE + $ * Math.abs(i[tt] + Math.abs(i[tt + 1])); if (Math.abs(u[tt]) <= rt || Number.isNaN(u[tt])) { u[tt] = 0; break } }
                                                        if (tt === O - 2) et = 4;
                                                        else {
                                                            var nt = void 0;
                                                            for (nt = O - 1; nt >= tt && nt !== tt; nt--) { var it = (nt !== O ? Math.abs(u[nt]) : 0) + (nt !== tt + 1 ? Math.abs(u[nt - 1]) : 0); if (Math.abs(i[nt]) <= $ * it) { i[nt] = 0; break } }
                                                            nt === tt ? et = 3 : nt === O - 1 ? et = 1 : (et = 2, tt = nt)
                                                        }
                                                        switch (tt++, et) {
                                                            case 1:
                                                                var at = u[O - 2];
                                                                u[O - 2] = 0;
                                                                for (var ot = O - 2; ot >= tt; ot--) {
                                                                    var ut = _(i[ot], at),
                                                                        st = i[ot] / ut,
                                                                        ft = at / ut;
                                                                    if (i[ot] = ut, ot !== tt && (at = -ft * u[ot - 1], u[ot - 1] = st * u[ot - 1]), l)
                                                                        for (var ct = 0; ct < e; ct++) ut = st * f.get(ct, ot) + ft * f.get(ct, O - 1), f.set(ct, O - 1, -ft * f.get(ct, ot) + st * f.get(ct, O - 1)), f.set(ct, ot, ut)
                                                                }
                                                                break;
                                                            case 2:
                                                                var lt = u[tt - 1];
                                                                u[tt - 1] = 0;
                                                                for (var vt = tt; vt < O; vt++) {
                                                                    var ht = _(i[vt], lt),
                                                                        zt = i[vt] / ht,
                                                                        gt = lt / ht;
                                                                    if (i[vt] = ht, lt = -gt * u[vt], u[vt] = zt * u[vt], c)
                                                                        for (var dt = 0; dt < t; dt++) ht = zt * s.get(dt, vt) + gt * s.get(dt, tt - 1), s.set(dt, tt - 1, -gt * s.get(dt, vt) + zt * s.get(dt, tt - 1)), s.set(dt, vt, ht)
                                                                }
                                                                break;
                                                            case 3:
                                                                var mt = Math.max(Math.abs(i[O - 1]), Math.abs(i[O - 2]), Math.abs(u[O - 2]), Math.abs(i[tt]), Math.abs(u[tt])),
                                                                    pt = i[O - 1] / mt,
                                                                    bt = i[O - 2] / mt,
                                                                    Et = u[O - 2] / mt,
                                                                    yt = i[tt] / mt,
                                                                    wt = u[tt] / mt,
                                                                    Rt = ((bt + pt) * (bt - pt) + Et * Et) / 2,
                                                                    At = pt * Et * (pt * Et),
                                                                    Tt = 0;
                                                                0 === Rt && 0 === At || (Tt = At / (Rt + (Tt = Rt < 0 ? 0 - Math.sqrt(Rt * Rt + At) : Math.sqrt(Rt * Rt + At))));
                                                                for (var xt = (yt + pt) * (yt - pt) + Tt, _t = yt * wt, Ft = tt; Ft < O - 1; Ft++) {
                                                                    var kt = _(xt, _t);
                                                                    0 === kt && (kt = Number.MIN_VALUE);
                                                                    var Dt = xt / kt,
                                                                        Mt = _t / kt;
                                                                    if (Ft !== tt && (u[Ft - 1] = kt), xt = Dt * i[Ft] + Mt * u[Ft], u[Ft] = Dt * u[Ft] - Mt * i[Ft], _t = Mt * i[Ft + 1], i[Ft + 1] = Dt * i[Ft + 1], l)
                                                                        for (var jt = 0; jt < e; jt++) kt = Dt * f.get(jt, Ft) + Mt * f.get(jt, Ft + 1), f.set(jt, Ft + 1, -Mt * f.get(jt, Ft) + Dt * f.get(jt, Ft + 1)), f.set(jt, Ft, kt);
                                                                    if (0 === (kt = _(xt, _t)) && (kt = Number.MIN_VALUE), Dt = xt / kt, Mt = _t / kt, i[Ft] = kt, xt = Dt * u[Ft] + Mt * i[Ft + 1], i[Ft + 1] = -Mt * u[Ft] + Dt * i[Ft + 1], _t = Mt * u[Ft + 1], u[Ft + 1] = Dt * u[Ft + 1], c && Ft < t - 1)
                                                                        for (var St = 0; St < t; St++) kt = Dt * s.get(St, Ft) + Mt * s.get(St, Ft + 1), s.set(St, Ft + 1, -Mt * s.get(St, Ft) + Dt * s.get(St, Ft + 1)), s.set(St, Ft, kt)
                                                                }
                                                                u[O - 2] = xt;
                                                                break;
                                                            case 4:
                                                                if (i[tt] <= 0 && (i[tt] = i[tt] < 0 ? -i[tt] : 0, l))
                                                                    for (var Lt = 0; Lt <= Z; Lt++) f.set(Lt, tt, -f.get(Lt, tt));
                                                                for (; tt < Z && !(i[tt] >= i[tt + 1]);) {
                                                                    var Ot = i[tt];
                                                                    if (i[tt] = i[tt + 1], i[tt + 1] = Ot, l && tt < e - 1)
                                                                        for (var Pt = 0; Pt < e; Pt++) Ot = f.get(Pt, tt + 1), f.set(Pt, tt + 1, f.get(Pt, tt)), f.set(Pt, tt, Ot);
                                                                    if (c && tt < t - 1)
                                                                        for (var Bt = 0; Bt < t; Bt++) Ot = s.get(Bt, tt + 1), s.set(Bt, tt + 1, s.get(Bt, tt)), s.set(Bt, tt, Ot);
                                                                    tt++
                                                                }
                                                                O--
                                                        }
                                                    }
                                                }
                                            }, {
                                                key: "solve",
                                                value: function(t) {
                                                    for (var e = t, r = this.zzf1, n = this.s.length, i = this.Ls, a = this.VLU, o = 0; o < n; o++) Math.abs(this.s[o]) <= r ? i.set(o, o, 0) : i.set(o, o, 1 / this.s[o]);
                                                    for (var u = this.U, s = this.zzh1, f = s.zzr(i), c = s.zzk2, l = u.zzk2, v = 0; v < c; v++)
                                                        for (var h = 0; h < l; h++) {
                                                            for (var z = 0, g = 0; g < n; g++) z += f.get(v, g) * u.get(h, g);
                                                            a.set(v, h, z)
                                                        }
                                                    return a.zzr(e)
                                                }
                                            }, { key: "zza1", value: function(t) { return this.solve(T.zzo(t)) } }, {
                                                key: "inverse",
                                                value: function() {
                                                    for (var t = this.V, e = this.zzf1, r = t.zzk2, n = t.zzj2, i = this.X, a = this.Y, o = 0; o < r; o++)
                                                        for (var u = 0; u < n; u++) Math.abs(this.s[u]) > e && i.set(o, u, t.get(o, u) / this.s[u]);
                                                    for (var s = this.U, f = s.zzk2, c = s.zzj2, l = 0; l < r; l++)
                                                        for (var v = 0; v < f; v++) {
                                                            for (var h = 0, z = 0; z < c; z++) h += i.get(l, z) * s.get(v, z);
                                                            a.set(l, v, h)
                                                        }
                                                    return a
                                                }
                                            }, { key: "zzb1", get: function() { return this.s[0] / this.s[Math.min(this.m, this.n) - 1] } }, { key: "zzp2", get: function() { return this.s[0] } }, { key: "zzd1", get: function() { for (var t = Math.max(this.m, this.n) * this.s[0] * Number.EPSILON, e = 0, r = this.s, n = 0, i = r.length; n < i; n++) r[n] > t && e++; return e } }, { key: "zzoonal", get: function() { return Array.from(this.s) } }, { key: "zzf1", get: function() { return Number.EPSILON / 2 * Math.max(this.m, this.n) * this.s[0] } }, { key: "zzg1", get: function() { return this.U } }, { key: "zzh1", get: function() { return this.V } }, { key: "zzoonalMatrix", get: function() { return T.zzo(this.s) } }]), t
                                        }(),
                                        D = [],
                                        M = function(t) {
                                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { zzj3: -1 },
                                                r = e.zzj3;
                                            if (-1 !== r && D[r]) { var n = D[r]; return n.zz24(t), n }
                                            var i = new k(t, Object.assign({ zzx3: !0, zzZ2: !0 }, e));
                                            return -1 !== r && (D[r] = i), i
                                        };

                                    function j(t, e) {
                                        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                            n = arguments.length > 3 ? arguments[3] : void 0;
                                        return r ? M(t, { zzj3: n }).solve(e) : new F(t).solve(e)
                                    }
                                    var S = function(t) {
                                            n(r, R);
                                            var e = i(r);

                                            function r(t, n, i) { var a; return u(this, r), (a = e.call(this)).matrix = t, a.zzk2 = n, a.zzj2 = i, a }
                                            return r
                                        }(),
                                        L = function(t) {
                                            n(r, S);
                                            var e = i(r);

                                            function r(t, n, i) {
                                                var a;
                                                u(this, r);
                                                var o = p(t, n, i);
                                                return (a = e.call(this, t, o.row.length, o.zz23.length)).zzy3 = o.row, a.zzl2 = o.zz23, a
                                            }
                                            return f(r, [{ key: "set", value: function(t, e, r) { return this.matrix.set(this.zzy3[t], this.zzl2[e], r), this } }, { key: "get", value: function(t, e) { return this.matrix.get(this.zzy3[t], this.zzl2[e]) } }]), r
                                        }();
                                    t.Matrix = T, t.QR = F, t.zzT2 = F, t.zz92 = M, t.default = T, t.zzU1 = function t(e) { if (0 === e.zzj2) return 1; var r, n, i, a, o, u; if (2 === e.zzj2) return r = e.get(0, 0), n = e.get(0, 1), i = e.get(1, 0), r * e.get(1, 1) - n * i; if (3 === e.zzj2) return a = new L(e, [1, 2], [1, 2]), o = new L(e, [1, 2], [0, 2]), u = new L(e, [1, 2], [0, 1]), r = e.get(0, 0), n = e.get(0, 1), i = e.get(0, 2), r * t(a) - n * t(o) + i * t(u); throw new Error }, t.inverse2 = function(t) {
                                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                            r = arguments.length > 2 ? arguments[2] : void 0;
                                        return e ? M(t, { zzj3: r }).inverse() : j(t, T.zzJ1(t.zzk2))
                                    }, t.zzp3 = j, Object.defineProperty(t, "zzB", { value: !0 })
                                }, "object" == (void 0 === r ? "undefined" : c(r)) && void 0 !== e ? v(r) : v((l = falseThis ? globalThis : l || self).mlMatrix = {})
                            }, {}]
                        }, {}, [2])(2)
                    }), L = window.zyp, t.callbackReady && (Rt.Na = t.callbackReady), t.callbackTrack && (Rt.Nb = t.callbackTrack), void 0 !== t.animateDelay && (Rt.pa = t.animateDelay), void 0 !== t.NNCPath && (Rt.Kb = t.NNCPath), void 0 !== t.NN && (Rt.Ya = t.NN), void 0 !== t.followZRot && (Rt.sa = !!t.followZRot), void 0 !== t.isTrackingEnabled && (Rt.kc = !!t.isTrackingEnabled), Ft = Object.create(gt.Mf), t.scanSettings && Object.assign(Ft, t.scanSettings), jt.V = Ft.translationScalingFactors.slice(0), kt = Object.create(gt.$f), t.stabilizationSettings && Object.assign(kt, t.stabilizationSettings);
                var n = 1;
                if (void 0 !== t.maxFacesDetected && (n = Math.max(1, t.maxFacesDetected)), n > gt.Bf) return x("MAXFACES_TOOHIGH"), !1;
                if (zt.v({ O: n, sc: gt.Cf, $d: gt.Df, Dd: function(t) { return t.isDetected } }), t.canvas) Rt.W = t.canvas;
                else { if (!t.canvasId) return x("NO_CANVASID"), !1; if (Rt.W = document.getElementById(t.canvasId), !Rt.W) return x("INVALID_CANVASID"), !1 }
                if (Dt.B = Rt.W.width, Dt.G = Rt.W.height, !Dt.B || !Dt.G) return x("INVALID_CANVASDIMENSIONS"), !1;
                Dt.Mb = Dt.B / Dt.G, vt.v({ Hd: t.isKeepRunningOnWinFocusLost || !1, Jb: t.GPUBenchmarkerCallback || null, Za: Rt.pa }), lt.v({ uc: 0, n: Ft.nDetectsPerLoopRange[1] - Ft.nDetectsPerLoopRange[0] + 1, Od: Ft.nDetectsPerLoopRange[0] }), 0 !== Ft.nDetectsPerLoop ? lt.Ec(Ft.nDetectsPerLoop) : lt.Oc();
                var i = 0;
                return t.videoSettings && t.videoSettings.videoElement ? A(t.videoSettings.videoElement, e) : null === t.videoSettings ? e() : (t.videoSettings && Object.assign(dt, t.videoSettings), T(t.onWebcamAsk, t.onWebcamGet, function(t) { A(t, e) })), d(function(t) {
                    if (!X.v({ bb: Rt.W, width: Dt.B, height: Dt.G, Cd: !1, debug: !1, yc: function() { x("GLCONTEXT_LOST") }, antialias: Ft.antialias, premultipliedAlpha: !0 }) && (x("GL_INCOMPATIBLE"), 1)) return !1;
                    C.Vc([{ id: "s56", name: "_", za: "attribute vec2 a0;uniform mat2 u39;varying vec2 vv0;void main(){gl_Position=vec4(a0,0.,1.),vv0=vec2(.5,.5)+u39*a0*vec2(1.,-1.);}", ab: ["a0"], Ka: [2], h: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}", i: ["u1", "u39"], precision: "lowp" }, { id: "s55", name: "_", h: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}", za: "attribute vec2 a0;uniform sampler2D u40;uniform mat2 u39;uniform vec2 u41;uniform float u42,u38,u43,u44;varying vec2 vv0;void main(){vec2 f=a0;vec4 a=texture2D(u40,vec2(u38,u42));vec2 g=a.gb,b=a.a*u41;b.x*=u44;float c=cos(u43),d=sin(u43);vec2 h=mat2(c,d,-d,c)*f,i=g+.5*h*b;vv0=.5+2.*u39*(i-.5),gl_Position=vec4(a0,0.,1.);}", ab: ["a0"], Ka: [2], i: "u1 u40 u41 u42 u38 u43 u44 u39".split(" "), precision: "lowp" }, { id: "s54", name: "_", h: "uniform sampler2D u45,u40;uniform vec3 u46,u47;uniform float u48,u49,u42,u38,u50,u51,u43,u52;const vec4 e=vec4(.25,.25,.25,.25);void main(){float b=(u51-.5)/u51;vec4 f=texture2D(u45,vec2(3.5/u51,b));bool g=dot(f,e)>u49;vec4 a=texture2D(u40,vec2(u38,u42));a.r<-.5?a.r+=1.:g?a.r=2.:a.r>u48?a.r=0.:a.r>1.9?a.r+=1.:0.,a.r=mix(-2.,a.r,u50);if(a.r<.9)a=vec4(1.,u46);else{a.r*=step(1.9,a.r);float h=dot(e,texture2D(u45,vec2(.5/u51,b))),i=dot(e,texture2D(u45,vec2(1.5/u51,b))),j=dot(e,texture2D(u45,vec2(2.5/u51,b))),c=cos(u43),d=sin(u43);vec2 k=mat2(c,d*u52,-d/u52,c)*vec2(h,i);a.gba+=vec3(k,j)*u47*a.a;}gl_FragColor=a;}", za: "attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}", i: "u45 u40 u46 u48 u47 u50 u49 u42 u38 u51 u43 u52".split(" ") }, { id: "s57", name: "_", za: "attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}", h: "uniform sampler2D u45;uniform float u51,u50;const vec4 e=vec4(.25,.25,.25,.25);void main(){float a=(u51-.5)/u51,b=dot(e,texture2D(u45,vec2(5.5/u51,a))),c=dot(e,texture2D(u45,vec2(6.5/u51,a))),d=dot(e,texture2D(u45,vec2(7.5/u51,a))),f=dot(e,texture2D(u45,vec2(3.5/u51,a)));vec3 g=vec3(b,c,d);gl_FragColor=vec4(g,f*u50);}", i: ["u45", "u51", "u50"] }, { id: "s58", name: "_", za: "attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}", h: "uniform sampler2D u45;uniform float u51;const vec4 e=vec4(.25,.25,.25,.25),h=vec4(.5,.5,.5,.5);vec2 f(float a){float b=floor(a/u51),c=a-b*u51;return vec2(c,u51-.5-b)/u51;}vec2 g(float a){vec2 b=f(a*2.),c=f(a*2.+1.);float d=dot(e,texture2D(u45,b)),i=dot(e,texture2D(u45,c));return vec2(d,i);}void main(){float a=2.*gl_FragCoord.x;vec2 b=g(a-1.),c=g(a);gl_FragColor=h+.5*vec4(b,c)/1.2;}", i: ["u45", "u51"] }, { id: "s53", name: "_", h: "uniform sampler2D u40,u53;uniform vec2 u54;uniform float u55,u38;varying vec2 vv0;void main(){float f=step(.5,mod(gl_FragCoord.y+1.5,2.)),a=step(u38,vv0.x);vec2 d=vv0+u54;vec4 b=mix(texture2D(u53,d),texture2D(u40,d),vec4(1.,a,a,a));b.a*=mix(u55,1.,a);vec4 g=floor(255.*b),h=255.*fract(255.*b),c=mix(g,h,f)/255.;c.x=mix(step(b.x,1.5),c.x,a),gl_FragColor=c;}", i: ["u40", "u53", "u55", "u54", "u38"] }]), p(t), e()
                }), !0
            },
            update: function(t) {
                if (!bt) return Promise.reject("NOT_READY");
                t.scanSettings && Nt.set_scanSettings(t.scanSettings), t.stabilizationSettings && Nt.set_stabilizationSettings(t.stabilizationSettings);
                var e = Promise.resolve();
                if (t.NNCPath || t.NN) {
                    for (n(), pt = mt.qc, _t && _t.m(), _t = null, e = 0; e < zt.ta(); ++e) Lt[e].detected = 0, Lt.isDetected = !1, Lt[e].detectedRaw = 0, St[e].Qa = 0;
                    t.NNCPath ? Rt.Kb = t.NNCPath : t.NN && (Rt.Ya = t.NN), e = new Promise(function(t) { d(function(e) { p(e), r(), t() }) })
                }
                return e
            },
            destroy: function() { return Et ? Promise.reject("ALREADY_DESTROYING") : (Tt = null, bt = !1, Et = !0, vt.m(), new Promise(function(t) { Nt.toggle_pause(!0, !0).finally(function() { _t && _t.m(), X.m(), _t = Ot = Lt = St = null, Dt.va = null, jt.ca = null, jt.Xa = null, yt.D = null, pt = mt.Ua, Et = !1, t() }).catch(function() {}) })) },
            toggle_videoStream: function(t) { return yt.pb || !yt.element ? Promise.resolve() : ct.le(yt.element, t, yt.Oa) },
            toggle_pause: function(t, e) { return -1 === [mt.play, mt.pause].indexOf(pt) ? Promise.reject("NOT_READY") : (e = e ? Nt.toggle_videoStream(!t) : Promise.resolve(), t ? n() : e.then(function() { r() }), e) },
            toggle_tracking: function(t) {-1 !== [mt.play, mt.pause].indexOf(pt) && (Rt.kc = t) },
            reset_GLState: a,
            update_videoSettings: function(t) { return pt === mt.qc || pt === pt.Ua ? Promise.reject("NOT_READY") : (n(), null === t && null === yt.element ? Promise.resolve(null) : new Promise(function(e, n) { ct.le(yt.element, !1, yt.Oa).then(function() { null === t ? e(null) : (Object.assign(dt, t), T(null, null, function(t) { A(t, function() { yt.D.Tf(t), w(), y(), r(), e(yt.element) }) })) }).catch(n) })) },
            set_animateDelay: function(t) { Rt.pa = t, vt.update({ Za: Rt.pa }) },
            resize: function() {
                if (!(yt && yt.element && Rt && Rt.W)) return !1;
                var t = Rt.W.width,
                    e = Rt.W.height;
                return !(!R() && t === Dt.B && e === Dt.G || (Dt.B = t, Dt.G = e, Dt.Mb = Dt.B / Dt.G, C.M(), g(), z(), w(), y(), 0))
            },
            set_inputTexture: function(t, e, r, n) { yt.I[0] = e, yt.I[1] = r, yt.Ed = n || !1, yt.D = Z.instance({ width: e, height: r, dc: t }), yt.Ta = !0, w(), a(), y() },
            reset_inputTexture: function() { yt.Ta = !1, yt.D = yt.Ic, R(), w(), y() },
            render_video: function() { Q.P(), C.M(), C.set("s56"), C.ee("u39", yt.da), G.viewport(0, 0, Dt.B, Dt.G), yt.D.g(0), K.l(!0, !0), C.ee("u39", yt.u) },
            get_videoDevices: function(t) { return ct.hf(t) },
            get_videoUVScaleMat2: function() { return yt.u },
            is_winFocus: function() { return vt.xf() },
            set_scanSettings: function(t) { Object.assign(Ft, t), 0 !== Ft.nDetectsPerLoop ? lt.Ec(Ft.nDetectsPerLoop) : lt.Oc(), g(), z() },
            set_stabilizationSettings: function(t) { Object.assign(kt, t) },
            update_videoElement: function(t, e) { A(t, function() { E(), w(), y(), e && e(yt.D.get()), pt === mt.ge && r() }) },
            bind_croppedTextureToSampler: function(t) { Dt.va.Ma(t) },
            capture_image: function(t) { return X.Ve(t) },
            get_LMLabels: function() { return Bt.labels },
            get_widthPx: function() { return Dt ? Dt.B : -1 },
            get_heightPx: function() { return Dt ? Dt.G : -1 },
            force_animate: function() { a(), f(), o(), l(), c() },
            reset: function() { Lt.forEach(function(t) { Object.assign(t, { detected: 0, detectedRaw: 0, isDetected: !1, x: 0, y: 0, s: 1, rx: 0, ry: 0, rz: 0 }) }), jt.ca.Ha(jt.Hc), jt.Xa.Ha(jt.Hc), ht.reset() },
            compute_pose: function(t, e, r, n) { return null === Tt && (xt[0] = r, xt[1] = n, Tt = new L.zypSolver({ cameraFocals: xt, zyp15: gt.Zf })), xt[0] === r && xt[1] === n || (xt[0] = r, xt[1] = n, Tt.zyp14(xt)), { ok: (t = Tt.solve(t, e, !1)).zyp13, repError: t.repError, rotation: t.R, translation: t.t } }
        };
    return Nt
}(), TRYONBOOTHDRAW || window.TRYONBOOTHDRAW);