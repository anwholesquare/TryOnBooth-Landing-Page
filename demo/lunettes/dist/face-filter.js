var TRYONBOOTHDRAW = (function() {
    window.TRYONBOOTHDRAW = function() {
        function Ob(a) {
            var c = null,
                d = null,
                e = null,
                l = 0;
            this.v = function(n) {
                this.Pf(n.tb);
                e.He({ Cc: n.Cc, zc: n.zc })
            };
            this.cf = function(n) { return c[n] };
            this.Pf = function(n) {
                var x = null;
                l = n.length;
                c = n.map(function(r, q) { r = Object.assign({}, r, { index: q, parent: this, zb: x, sf: q === l - 1 }); return x = q = 0 === q ? Pb.instance(r) : Qb.instance(r) });
                d = c[0];
                e = c[l - 1];
                c.forEach(function(r, q) { 0 !== q && r.Gf() })
            };
            this.U = function(n) {
                n.g(0);
                var x = n;
                c.forEach(function(r) { x = r.U(x, !1) });
                return x
            };
            this.bf = function() { return d.F() };
            this.ff = function() { return e.F() };
            this.cc = function() { return e.ef() };
            this.sd = function() { return e.sd() };
            this.m = function() { c && (c.forEach(function(n) { n.m() }), e = d = c = null, l = 0) };
            "undefined" !== typeof a && this.v(a)
        }

        function kb(a, c) { var d = c % 8; return a[(c - d) / 8] >> 7 - d & 1 }

        function Rb(a) {
            var c = JSON.parse(a);
            a = c.ne;
            var d = c.nf,
                e = c.n;
            var l = "undefined" === typeof btoa ? Buffer.from(c.data, "base64").toString("latin1") : atob(c.data);
            var n = l.length;
            c = new Uint8Array(n);
            for (var x = 0; x < n; ++x) c[x] = l.charCodeAt(x);
            l = new Float32Array(e);
            n = new Float32Array(d);
            x = a + d + 1;
            for (var r = 0; r < e; ++r) {
                for (var q = x * r, u = 0 === kb(c, q) ? 1 : -1, p = q + 1, y = 1, t = 0, m = p + a - 1; m >= p; --m) t += y * kb(c, m), y *= 2;
                p = t;
                q = q + 1 + a;
                y = n.length;
                t = 0;
                for (m = q; m < q + y; ++m) n[t] = kb(c, m, !0), ++t;
                for (y = q = 0; y < d; ++y) q += n[y] * Math.pow(2, -y - 1);
                l[r] = 0 === q && 0 === p ? 0 : u * (1 + q) * Math.pow(2, 1 + p - Math.pow(2, a - 1))
            }
            return l
        }

        function Va() {
            if (fa === ea.play) return !1;
            if (null === B.element) return fa = ea.ge, !1;
            fa = ea.play;
            ra.Gb();
            Na.stop();
            cb();
            yb(0);
            return !0
        }

        function lb() {
            if (fa !== ea.play) return !1;
            ra.stop();
            Na.stop();
            fa = ea.pause;
            return !0
        }

        function Ga(a, c, d, e, l) { a = 4 * (c * Ba + a) + d; return e + (V.buffer[a] / 255 + V.buffer[a + 4 * Ba] / 65025) * (l - e) }

        function cb() { Ka.kf() }

        function zb() {
            var a = ca.ta();
            ya.P();
            b.viewport(0, 0, Ba, 2 * a);
            D.set("s53");
            V.ca.g(0);
            V.Xa.g(1);
            U.l(!1, !1);
            return da.enableAsyncReadPixels ? aa.Bb(0, 0, Ba, 2 * a, V.buffer, db, da.readPixelsAsyncDelay) : aa.Wd(0, 0, Ba, 2 * a, V.buffer)
        }

        function Sb(a) {
            var c = Ra[a],
                d = mb[a],
                e = sa[a];
            a *= 2;
            c.Qa = Ga(1, a, 3, 0, 1);
            e.detectedRaw = c.Qa;
            e.detected = Ca.la(e.detected, c.Qa, pa.re);
            e.isDetected = e.detected > da.threshold;
            c.x = Ga(0, a, 1, -1, 1);
            c.y = Ga(0, a, 2, -1, 1);
            c.T = Ga(0, a, 3, 0, 1);
            if (e.isDetected) {
                c.rx = Ga(1, a, 0, -V.ma[0], V.ma[0]);
                c.ry = Ga(1, a, 1, -V.ma[1], V.ma[1]);
                c.Va = Ga(1, a, 2, -V.ma[2], V.ma[2]);
                for (var l = 0; l < ma.vc; ++l) {
                    var n = 2 + Math.floor(l / 2);
                    c.mc[l][0] = Ga(n, a, l % 2 * 2, -1.2, 1.2);
                    c.mc[l][1] = Ga(n, a, l % 2 * 2 + 1, -1.2, 1.2)
                }
                d.dx = c.x - e.x;
                d.dy = c.y - e.y;
                d.Vb = c.T - e.s;
                d.Sb = c.rx - e.rx;
                d.Tb = c.ry - e.ry;
                d.Ub = T.sa ? c.Va : c.Va - e.rz;
                a = ra.Xe();
                d = Ca.la(ta.alphaRange[1], ta.alphaRange[0], Math.pow((1 - nb.pc(ta.translationFactorRange[0], ta.translationFactorRange[1],
                    Math.sqrt(d.dx * d.dx + d.dy * d.dy + d.Vb * d.Vb) / a)) * (1 - nb.pc(ta.rotationFactorRange[0], ta.rotationFactorRange[1], Math.sqrt(d.Sb * d.Sb + d.Tb * d.Tb + d.Ub * d.Ub) / a)) * nb.pc(ta.qualityFactorRange[0], ta.qualityFactorRange[1], c.Qa), pa.se));
                ka.mode === ka.ub.Eb && (ka.ra.fb = Math.cos(Math.sqrt(Math.abs(e.ry))), ka.ra.Zb = ka.ed * Math.sin(e.ry));
                e.x = Ca.la(e.x, c.x, d);
                e.y = Ca.la(e.y, c.y, d);
                e.s = Ca.la(e.s, c.T, d);
                e.rx = Ca.la(e.rx, c.rx, d);
                e.ry = Ca.la(e.ry, c.ry, d);
                var x = 1,
                    r = 0;
                T.sa ? (x = Math.cos(e.rz), r = Math.sin(e.rz), e.rz += ta.followZRotAlphaFactor *
                    d * c.Va) : e.rz = Ca.la(e.rz, c.Va, d);
                e.landmarks.forEach(function(q, u) {
                    var p = ma.Zc[u],
                        y = c.mc[u];
                    u = c.yf[u];
                    var t = p[0] + y[0] / ma.Xb;
                    p = p[1] + y[1] / ma.Xb;
                    ka.mode === ka.ub.Eb && (t = t * ka.ra.fb + ka.ra.Zb * c.T);
                    T.sa && (y = p * x + t * r, t = t * x - p * r, p = y);
                    u[0] = c.x + t * c.T;
                    u[1] = c.y + p * c.T * Q.Mb;
                    q[0] = u[0];
                    q[1] = u[1]
                });
                ++c.xa
            } else T.sa && (e.rz = 0), ka.mode === ka.ub.Eb && (ka.ra.fb = 1, ka.ra.Zb = 0), c.xa = Math.floor(c.xa / 2)
        }

        function yb() {
            fa === ea.play && (da.isCleanGLStateAtEachIteration && (D.hd(), U.reset(), U.Aa(), b.disable(b.DEPTH_TEST), D.Fa()), T.kc ? ra.Dc(Ab,
                zb, Bb, db, Cb, da.animateProcessOrder) : (Db(), db(), Cb()))
        }

        function Ab() {
            ya.fa();
            B.Ta || Db();
            var a = ra.df();
            ca.update(a, sa);
            for (var c = 0; c < a; ++c) {
                ca.Gb(c);
                D.set("s55");
                ka.mode === ka.ub.Eb && D.H("u44", ka.ra.fb);
                var d = ca.ta(),
                    e = ca.td();
                T.sa && D.H("u43", sa[e].rz);
                ca.je("u42");
                Q.va.aa();
                B.D.g(1);
                V.ca.g(0);
                U.l(!1, !1);
                V.Xa.o();
                D.set("s3");
                b.viewport(0, e, Ba, 1);
                D.ba("u4", 1, 1 / d);
                D.ba("u5", 0, e / d);
                U.l(!1, !1);
                Da.U(Q.va)
            }
        }

        function db() {
            ya.fg();
            Y.reset();
            da.isCleanGLStateAtEachIteration && (ya.reset(), b.enable(b.DEPTH_TEST));
            T.Nb && T.Nb(ca.Ld() ? sa : sa[0]);
            da.isCleanGLStateAtEachIteration && (U.reset(), U.Aa(), b.disable(b.BLEND))
        }

        function Bb() { for (var a = 0; a < ca.ta(); ++a) ca.wf(a) && Sb(a) }

        function Cb() { fa === ea.play && Na.Dc(yb) }

        function Db() {
            if (B.pb) B.element.needsUpdate && (B.D.ce(B.element.videoWidth, B.element.videoHeight), B.D.Ha(B.element.arrayBuffer), B.element.needsUpdate = !1);
            else {
                var a = B.element.currentTime,
                    c = a - B.Ab;
                0 > c && (B.Ab = a);
                1E3 * c < pa.ig || (B.Ab += c, B.D.refresh())
            }
        }

        function Tb() {
            function a(l, n) {
                D.N(l, [{
                    name: "u38",
                    type: "1f",
                    value: n / Ba
                }])
            }

            function c() { return ma.labels.map(function() { return [0, 0] }) }
            var d = ca.ta();
            Ba = 2 + ma.xc;
            var e = new Float32Array(4 * Ba);
            e = { width: Ba, height: d, isFloat: !0, isPot: !1, array: ca.Ne(e) };
            V.ca && V.ca.remove();
            V.ca = Ub.instance(e);
            V.Xa = Y.instance(e);
            V.buffer = new Uint8Array(8 * e.width * d);
            V.Hc = e.array;
            a("s54", .5);
            a("s53", 1);
            a("s55", .5);
            Ra = ca.Wb({ Qa: 0, x: 0, y: 0, T: 1, rx: 0, ry: 0, Va: 0, mc: c(), yf: c(), xa: 0 });
            sa = ca.Wb({ detected: 0, detectedRaw: 0, isDetected: !1, x: 0, y: 0, s: 1, rx: 0, ry: 0, rz: 0, landmarks: c() });
            mb = ca.Wb({
                dx: 0,
                dy: 0,
                Vb: 0,
                Sb: 0,
                Tb: 0,
                Ub: 0
            })
        }

        function ob() {
            D.N("s55", [{ type: "1i", name: "u1", value: 1 }, { type: "1i", name: "u40", value: 0 }, { type: "2f", name: "u41", value: Q.I }, { type: "1f", name: "u42", value: .5 }, { type: "1f", name: "u43", value: 0 }, { type: "1f", name: "u44", value: 1 }]);
            var a = [{ type: "1i", name: "u45", value: 0 }, { type: "1f", name: "u51", value: V.size }];
            D.N("s54", [{ type: "1i", name: "u40", value: 1 }, { type: "1f", name: "u48", value: pa.dg }, { type: "1f", name: "u49", value: da.threshold }, { type: "3f", name: "u47", value: [V.V[0] * Q.I[0], V.V[1] * Q.I[1], V.V[2]] }, {
                type: "1f",
                name: "u42",
                value: .5
            }, { type: "1f", name: "u50", value: 1 }, { type: "1f", name: "u43", value: 0 }].concat(a));
            D.N("s57", [{ type: "1f", name: "u50", value: 1 }].concat(a));
            D.N("s58", a);
            D.N("s53", [{ type: "1i", name: "u40", value: 0 }, { type: "1i", name: "u53", value: 1 }, { type: "1f", name: "u55", value: Q.I[0] }, { type: "2f", name: "u54", value: [0, .5 / ca.ta()] }])
        }

        function pb() {
            V.size = Da.ff();
            Q.I[0] = 1;
            Q.I[1] = Q.B / Q.G;
            qb.v({ yb: da.overlapFactors, Qd: da.nScaleLevels, B: Q.B, G: Q.G, Yd: da.scale0Factor, V: V.V, Zd: da.scanCenterFirst })
        }

        function Eb(a) {
            if (null !==
                T.Ya) Fb(T.Ya, a);
            else {
                var c = T.Kb;
                "JSON" !== c.toUpperCase().split(".").pop() && (c += pa.neuralNetworkPath);
                eb.get(c, function(d) {
                    d = JSON.parse(d);
                    Fb(d, a)
                })
            }
        }

        function Fb(a, c) {
            if (a.exportData) {
                var d = a.exportData;
                d.rotationEulerAnglesFactors && (V.ma = d.rotationEulerAnglesFactors);
                d.translationScalingFactors && (V.V = d.translationScalingFactors);
                d.landmarksLabels && (ma.labels = d.landmarksLabels, ma.vc = ma.labels.length, ma.xc = Math.ceil(ma.vc / 2));
                ma.Zc = d.landmarksCenters ? d.landmarksCenters : ma.labels.map(function() {
                    return [0,
                        0
                    ]
                });
                d.landmarksFactor && (ma.Xb = d.landmarksFactor);
                d.facegenMode && (ka.mode = d.facegenMode, d.facegenDisplaceXFactor && (ka.ed = d.facegenDisplaceXFactor))
            }
            c(a)
        }

        function Gb(a) {
            Da = new Ob({ tb: a.layers, Cc: "gpuRawAvg", zc: Vb });
            Q.va && Q.va.remove();
            Q.va = Y.instance({ isPot: !0, isFloat: !1, width: Da.bf() });
            Tb();
            pb();
            ob()
        }

        function Wb() {
            if (Ka.v({ bb: T.W, width: Q.B, height: Q.G, Cd: !1, debug: !1, yc: function() { Oa("GLCONTEXT_LOST") }, antialias: da.antialias, premultipliedAlpha: !0 })) return !0;
            Oa("GL_INCOMPATIBLE");
            return !1
        }

        function Vb() {
            var a =
                ca.td(),
                c = sa[a];
            V.ca.Nf(1);
            b.viewport(0, a, 1, 1);
            D.set("s54");
            T.sa && D.H("u43", c.rz);
            ca.je("u42");
            var d = 1,
                e = ca.Yf(Ra, Q.B / Q.G);
            ca.Ld() && (e && (d = 0, Ra[a].xa = 0, c.isDetected = !1, c.detected = 0), D.H("u50", d));
            D.Uf("u46", qb.get(a));
            U.l(!1, !1);
            if (ca.Kd() || e) b.viewport(1, a, 1, 1), D.set("s57"), D.H("u50", d), U.l(!1, !1);
            ca.Kd() && (b.viewport(2, a, ma.xc, 1), D.set("s58"), U.l(!1, !1));
            V.ca.sync()
        }

        function Hb() {
            B.D && B.D.remove();
            B.pb = B.element && B.element.isFakeVideo ? !0 : !1;
            var a = null;
            B.pb ? a = {
                isFlipY: !1,
                array: B.element.arrayBuffer,
                width: B.element.videoWidth,
                height: B.element.videoHeight,
                isKeepArray: !0
            } : B.element && (a = { J: B.element });
            B.Ic = Y.instance(Object.assign({ isPot: !1, isLinear: !0, isFloat: !1 }, a));
            B.D = B.Ic
        }

        function Sa() {
            var a = [{ type: "mat2", name: "u39", value: B.u }];
            D.N("s56", [{ type: "1i", name: "u1", value: 0 }].concat(a));
            D.N("s55", a)
        }

        function Ta() {
            var a = [.5, .5],
                c = B.I[1] / B.I[0],
                d = Ka.X() / Ka.F();
            90 === Math.abs(ua.rotate) && (c = 1 / c);
            c > d ? a[1] *= d / c : a[0] *= c / d;
            D.N("s54", [{ name: "u52", type: "1f", value: d }]);
            B.u[0] = 0;
            B.u[1] = 0;
            B.u[2] = 0;
            B.u[3] = 0;
            switch (ua.rotate) {
                case 0:
                    B.u[0] =
                        a[0];
                    B.u[3] = a[1];
                    break;
                case 180:
                    B.u[0] = -a[0];
                    B.u[3] = -a[1];
                    break;
                case 90:
                    B.u[1] = a[0];
                    B.u[2] = -a[1];
                    break;
                case -90:
                    B.u[1] = -a[0], B.u[2] = a[1]
            }
            B.da[0] = B.u[0];
            B.da[1] = B.u[1];
            B.da[2] = B.u[2];
            B.da[3] = B.u[3];
            B.Ta || (B.u[1] *= -1, B.u[3] *= -1);
            B.Ta && B.Ed && (B.da[1] *= -1, B.da[3] *= -1)
        }

        function rb() {
            var a = B.element.videoWidth,
                c = B.element.videoHeight,
                d = B.I[0] !== a || B.I[1] !== c;
            d && (B.I[0] = a, B.I[1] = c);
            return d
        }

        function fb(a, c) {
            if (fa === ea.error) return !1;
            B.element = a;
            rb();
            c && c();
            return !0
        }

        function Ib(a, c, d) {
            a && a();
            B.Oa = {
                video: {
                    facingMode: { ideal: ua.facingMode },
                    width: { min: ua.minWidth, max: ua.maxWidth, ideal: ua.idealWidth },
                    height: { min: ua.minHeight, max: ua.maxHeight, ideal: ua.idealHeight }
                },
                audio: !1
            };
            W.Tc(B.Oa, ua.deviceId);
            W.get(B.element ? B.element : W.wd(), function(e) {
                c && c(e);
                d(e)
            }, function() { Oa("WEBCAM_UNAVAILABLE") }, B.Oa)
        }

        function Oa(a) { fa !== ea.error && (fa = ea.error, T.Na && T.Na(a)) }
        var sb = null,
            Ca = {
                gh: function(a) { return Math.ceil(Math.log2(a)) },
                Bh: function(a) { return Math.log2(a) },
                yh: function(a) { return 0 === Math.log2(a) % 1 },
                sg: function(a) {
                    var c = [0, 0, 0, 0];
                    a.forEach(function(d) {
                        c[0] +=
                            d[0];
                        c[1] += d[1];
                        c[2] += d[2];
                        c[3] += d[3]
                    });
                    return c
                },
                tg: function(a, c, d) { return Math.min(Math.max(a, c), d) },
                wg: function(a) { return a * Math.PI / 180 },
                Jh: function(a, c) { c = Math.pow(10, c); return Math.round(a * c) / c },
                Kh: function(a) { return Math.round(1E6 * a) / 1E6 },
                hh: function(a, c) { return (100 * a / c).toFixed(3) },
                la: function(a, c, d) { return a * (1 - d) + c * d },
                Ch: function(a, c) { return a[0] * (1 - c) + a[1] * c },
                Le: function(a, c) { return Ca.De(a - c) },
                De: function(a) { for (; a > Math.PI;) a -= 2 * Math.PI; for (; a <= -Math.PI;) a += 2 * Math.PI; return a },
                Bg: function(a,
                    c) { return Math.abs(Ca.Le(a, c)) },
                jg: function(a, c) { return Math.atan2(Math.sin(a) + Math.sin(c), Math.cos(a) + Math.cos(c)) }
            },
            eb = {
                get: function(a, c, d) {
                    var e = new XMLHttpRequest;
                    e.open("GET", a, !0);
                    e.withCredentials = !1;
                    e.onreadystatechange = function() { 4 === e.readyState && (200 === e.status || 0 === e.status ? c(e.responseText) : "undefined" !== typeof d && d(e.status)) };
                    e.send()
                },
                gf: function(a) { return new Promise(function(c, d) { eb.get(a, c, d) }) },
                dh: function(a, c, d) {
                    a += d ? "?" + eb.Pe(d) : "";
                    eb.get(a, function(e) { c(JSON.parse(e)) })
                },
                Fh: function(a,
                    c, d) {
                    var e = new XMLHttpRequest;
                    e.open("POST", a, !0);
                    e.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    e.onreadystatechange = function() { 4 !== e.readyState || 200 !== e.status && 0 !== e.status || d(e.responseText) };
                    e.send(c)
                },
                Pe: function(a) { return "string" === typeof a ? a : Object.keys(a).map(function(c) { return encodeURIComponent(c) + "=" + encodeURIComponent(a[c]) }).join("&") },
                Sg: function(a, c) {
                    var d = new XMLHttpRequest;
                    d.open("POST", a, !0);
                    d.responseType = "arraybuffer";
                    d.onload = function() { c(d.response) };
                    d.send()
                }
            },
            Xb = {
                create: function(a, c) { for (var d = Array(c), e = 0; e < c; ++e) d[e] = a; return d },
                xg: function(a, c) { for (var d = 0; d < a.length; ++d) c[d] = a[d] },
                clone: function(a) { for (var c = Array(a.length), d = 0; d < a.length; ++d) c[d] = a[d]; return c },
                Nh: function(a, c, d) { a.forEach(function(e, l) { c[l] = e * d }) },
                Uh: function(a) {
                    for (var c = a.length - 1; 0 < c; --c) {
                        var d = Math.floor(Math.random() * (c + 1)),
                            e = a[c];
                        a[c] = a[d];
                        a[d] = e
                    }
                },
                Wh: function(a) { return a.sort(function(c, d) { return c - d }) },
                cg: function(a) {
                    return Array.isArray(a) || a.constructor === Float32Array ||
                        a.constructor === Uint8Array
                }
            },
            tb = {
                Qb: function(a, c) {
                    if (0 === c || "object" !== typeof a) return a;
                    a = Object.assign({}, a);
                    c = void 0 === c || -1 === c ? -1 : c - 1;
                    for (var d in a) a[d] = tb.Qb(a[d], c);
                    return a
                },
                Ag: function(a) { return JSON.parse(JSON.stringify(a)) }
            },
            nb = {
                Vh: function(a, c, d) { a = Math.min(Math.max((d - a) / (c - a), 0), 1); return a * a * (3 - 2 * a) },
                pc: function(a, c, d) { return Math.min(Math.max((d - a) / (c - a), 0), 1) },
                Mg: function(a, c, d, e) { return Math.pow(Math.min(Math.max((e - a) / (c - a), 0), 1), d) },
                $h: function() { return 0 },
                Eh: function() { return 1 },
                Ah: function(a) { return a },
                Jg: function(a) { return a * a },
                Og: function(a) { return a * (2 - a) },
                Gg: function(a) { return .5 > a ? 2 * a * a : -1 + (4 - 2 * a) * a },
                Eg: function(a) { return a * a * a },
                Ng: function(a) { return --a * a * a + 1 },
                Fg: function(a) { return .5 > a ? 4 * a * a * a : (a - 1) * (2 * a - 2) * (2 * a - 2) + 1 },
                Kg: function(a) { return a * a * a * a },
                Pg: function(a) { return 1 - --a * a * a * a },
                Hg: function(a) { return .5 > a ? 8 * a * a * a * a : 1 - 8 * --a * a * a * a },
                Lg: function(a) { return a * a * a * a * a },
                Qg: function(a) { return 1 + --a * a * a * a * a },
                Ig: function(a) { return .5 > a ? 16 * a * a * a * a * a : 1 + 16 * --a * a * a * a * a }
            },
            Yb = {
                Se: function(a,
                    c, d) {
                    switch (a) {
                        case "relu":
                            return d + "=max(vec4(0.,0.,0.,0.)," + c + ");";
                        case "elu":
                            return d + "=mix(exp(-abs(" + c + "))-vec4(1.,1.,1.,1.)," + c + ",step(0.," + c + "));";
                        case "elu01":
                            return d + "=mix(0.1*exp(-abs(" + c + "))-vec4(0.1,0.1,0.1,0.1)," + c + ",step(0.," + c + "));";
                        case "arctan":
                            return d + "=atan(3.14159265359*texture2D(u0,vUV))/3.14159265359;";
                        case "copy":
                            return "";
                        default:
                            return !1
                    }
                }
            },
            D = function() {
                function a(w, f, A) {
                    f = w.createShader(f);
                    w.shaderSource(f, A);
                    w.compileShader(f);
                    return w.getShaderParameter(f, w.COMPILE_STATUS) ?
                        f : !1
                }

                function c(w, f, A) {
                    f = a(w, w.VERTEX_SHADER, f);
                    A = a(w, w.FRAGMENT_SHADER, A);
                    w === b && r.push(f, A);
                    var I = w.createProgram();
                    w.attachShader(I, f);
                    w.attachShader(I, A);
                    w.linkProgram(I);
                    return I
                }

                function d(w) { return ["float", "sampler2D", "int"].map(function(f) { return "precision " + w + " " + f + ";\n" }).join("") }

                function e(w, f) {
                    f.C = f.C ? !0 : !1;
                    if (!f.C) {
                        f.za = f.za || "precision lowp float;attribute vec2 a0;varying vec2 vv0;void main(){gl_Position=vec4(a0,0.,1.),vv0=a0*.5+vec2(.5,.5);}";
                        f.ab = f.ab || ["a0"];
                        f.Ka = f.Ka || [2];
                        f.precision =
                            f.precision || t;
                        f.id = p++;
                        void 0 !== f.ae && (f.ae.forEach(function(g, E) { f.h = f.h.replace(g, f.Cb[E]) }), f.ae.splice(0));
                        f.Pc = 0;
                        f.Ka.forEach(function(g) { f.Pc += 4 * g });
                        var A = d(f.precision);
                        f.ya = c(w, A + f.za, A + f.h);
                        f.A = {};
                        f.i.forEach(function(g) { f.A[g] = w.getUniformLocation(f.ya, g) });
                        f.attributes = {};
                        f.La = [];
                        f.ab.forEach(function(g) {
                            var E = w.getAttribLocation(f.ya, g);
                            f.attributes[g] = E;
                            f.La.push(E)
                        });
                        if (f.j) {
                            w.useProgram(f.ya);
                            u = f;
                            q = f.id;
                            for (var I in f.j) w.uniform1i(f.A[I], f.j[I])
                        }
                        f.wa = !0
                    }
                }

                function l(w) {
                    za.Sf(N);
                    q !==
                        w.id && (N.M(), q = w.id, u = w, b.useProgram(w.ya), w.La.forEach(function(f) { 0 !== f && b.enableVertexAttribArray(f) }))
                }

                function n(w, f, A) {
                    e(w, f, A);
                    w.useProgram(f.ya);
                    w.enableVertexAttribArray(f.attributes.a0);
                    q = -1;
                    return u = f
                }

                function x() { return { h: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}", i: ["u1"], j: { u1: 0 } } }
                var r = [],
                    q = -1,
                    u = null,
                    p = 0,
                    y = !1,
                    t = "highp",
                    m = ["u1"],
                    z = ["u0"],
                    F = { u1: 0 },
                    h = { u0: 0 },
                    M = { u1: 0, u2: 1 },
                    H = { u3: 0 },
                    k = {
                        s0: x(),
                        s1: {
                            h: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}",
                            i: m,
                            j: F,
                            precision: "lowp"
                        },
                        s2: { h: "uniform sampler2D u1,u2;varying vec2 vv0;void main(){vec4 a=texture2D(u2,vv0),b=texture2D(u1,vv0);gl_FragColor=a*b;}", i: ["u1", "u2"], j: M },
                        s3: { h: "uniform sampler2D u1;uniform vec2 u4,u5;varying vec2 vv0;void main(){vec2 a=vv0*u4+u5;gl_FragColor=texture2D(u1,a);}", i: ["u1", "u4", "u5"], j: F, C: !0 },
                        s4: { h: "uniform sampler2D u1;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=a.r*f;}", i: m, j: F },
                        s5: {
                            h: "uniform sampler2D u1,u2;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u2,vv0),b=texture2D(u1,vv0);gl_FragColor=a.a*b.r*f;}",
                            i: ["u1", "u2"],
                            j: M
                        },
                        s6: { h: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vec2(1.-vv0.x,vv0.y));}", i: m, j: F },
                        s7: { h: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vec2(vv0.x,1.-vv0.y));}", i: m, j: F },
                        s8: { h: "uniform sampler2D u0;uniform float u4;varying vec2 vv0;void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=a*u4;}", i: ["u0", "u4"], j: h },
                        s9: {
                            h: "uniform sampler2D u0;uniform float u4;varying vec2 vv0;const vec4 f=vec4(.25,.25,.25,.25),g=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0);float b=dot(a*u4,f);gl_FragColor=b*g;}",
                            i: ["u0", "u4"],
                            j: h
                        },
                        s10: { h: "uniform sampler2D u1;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.);void main(){float a=.25*dot(e,texture2D(u1,vv0));gl_FragColor=a*e;}", i: m, j: F },
                        s11: { h: "uniform sampler2D u1,u6;uniform float u7;const vec4 f=vec4(1.,1.,1.,1.);varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0),b=texture2D(u6,vv0);gl_FragColor=mix(b,a,u7*f);}", i: ["u1", "u6", "u7"], j: { u1: 0, u6: 1 } },
                        s12: {
                            h: "uniform sampler2D u1;uniform vec2 u8;varying vec2 vv0;void main(){gl_FragColor=.25*(texture2D(u1,vv0+u8)+texture2D(u1,vv0+u8*vec2(1.,-1.))+texture2D(u1,vv0+u8*vec2(-1.,-1.))+texture2D(u1,vv0+u8*vec2(-1.,1.)));}",
                            i: ["u1", "u8"],
                            j: F
                        },
                        s13: {
                            h: "uniform sampler2D u1;uniform vec4 u9;varying vec2 vv0;float g(float a,float b){a=floor(a)+.5;return floor(a/exp2(b));}float h(float a,float b){return floor(a*exp2(b)+.5);}float i(float a,float b){return mod(a,h(1.,b));}float e(float c,float a,float b){a=floor(a+.5),b=floor(b+.5);return i(g(c,a),b-a);}vec4 j(float a){if(a==0.)return vec4(0.,0.,0.,0.);float k=128.*step(a,0.);a=abs(a);float c=floor(log2(a)),l=c+127.,b=(a/exp2(c)-1.)*8388608.,d=l/2.,m=fract(d)*2.,n=floor(d),o=e(b,0.,8.),p=e(b,8.,16.),q=m*128.+e(b,16.,23.),r=k+n;return vec4(o,p,q,r)/255.;}void main(){float a=dot(texture2D(u1,vv0),u9);gl_FragColor=j(a);}",
                            i: ["u1", "u9"],
                            j: F
                        },
                        s14: { h: "uniform sampler2D u0;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),b=e/(e+exp(-a));gl_FragColor=b;}", i: z, j: h, C: !0 },
                        s15: { h: "uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(0.,0.,0.,0.);void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=max(f,a);}", i: z, j: h },
                        s16: { h: "uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=mix(exp(-abs(a))-f,a,step(0.,a));}", i: z, j: h },
                        s17: { h: "uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),b=exp(-abs(a))-f;gl_FragColor=mix(.1*b,a,step(0.,a));}", i: z, j: h },
                        s18: { h: "uniform sampler2D u0,u7,u10;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),c=texture2D(u7,vv0),d=texture2D(u10,vv0),b=a/d;gl_FragColor=c*mix(exp(-abs(b))-f,b,step(0.,a));}", i: ["u0", "u7", "u10"], j: { u0: 0, u7: 1, u10: 2 }, C: !0 },
                        s19: {
                            h: "uniform sampler2D u0;const float e=3.141593;varying vec2 vv0;void main(){gl_FragColor=atan(e*texture2D(u0,vv0))/e;}",
                            i: z,
                            j: h
                        },
                        s20: { h: "uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),b=log(f+a);gl_FragColor=b;}", i: z, j: h, C: !0 },
                        s21: { h: "uniform sampler2D u0,u11;uniform float u12;const vec2 e=vec2(.5,.5);const float f=1e-5;const vec4 g=vec4(1.,1.,1.,1.),i=vec4(0.,0.,0.,0.);varying vec2 vv0;void main(){vec4 a=texture2D(u11,e);float b=u12*u12;vec4 c=max(b*a,f*g);gl_FragColor=texture2D(u0,vv0)/c;}", i: ["u0", "u11", "u12"], j: { u0: 0, u11: 1 }, C: !0 },
                        s22: {
                            h: "uniform sampler2D u1;uniform vec2 u13;varying vec2 vv0;void main(){float a=u13.x*u13.y;vec2 b=floor(vv0*a)/a,c=fract(vv0*a),d=floor(b*u13.y),f=floor(u13.x*fract(b*u13.y)),g=(f*u13.y+d)/a;gl_FragColor=texture2D(u1,g+c/a);}",
                            i: ["u1", "u13"],
                            j: F
                        },
                        s23: { h: "uniform sampler2D u14,u15,u16;varying vec2 vv0;void main(){vec4 a=texture2D(u16,vv0);vec2 b=a.rg,c=a.ba;vec4 d=texture2D(u14,b),f=texture2D(u15,c);gl_FragColor=d*f;}", i: ["u14", "u15", "u16"], j: { u15: 0, u14: 1, u16: 2 }, C: !0 },
                        s24: { h: "uniform float u17,u18;uniform sampler2D u14,u15;varying vec2 vv0;void main(){vec2 c=fract(vv0*u17),a=vv0;float b=u17*u18;a=(.5+floor(b*vv0))/b;vec4 d=texture2D(u14,a),f=texture2D(u15,c);gl_FragColor=d*f;}", i: ["u15", "u14", "u17", "u18"], j: { u15: 0, u14: 1 } },
                        s25: {
                            h: "uniform float u17,u18;uniform sampler2D u14,u15,u19,u20,u21,u22;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.),g=vec4(1e-3,1e-3,1e-3,1e-3);void main(){vec2 i=vv0*u17,n=floor(i),b=i-n,d=vv0;float j=u17*u18;d=(.5+floor(j*vv0))/j;vec4 o=texture2D(u14,d),h=texture2D(u15,b),c=texture2D(u22,d);c*=255.;vec4 p=texture2D(u19,b),q=texture2D(u20,b),r=texture2D(u21,b),k=step(-g,-c),a=e-k,l=a*step(-e-g,-c);a*=e-l;vec4 m=a*step(-2.*e-g,-c);a*=e-m;vec4 s=a;h=k*h+l*p+m*q+s*r,gl_FragColor=o*h;}",
                            i: "u14 u15 u17 u18 u22 u19 u20 u21".split(" "),
                            j: { u15: 0, u14: 1, u22: 3, u19: 4, u20: 5, u21: 6 },
                            C: !0
                        },
                        s26: {
                            h: "uniform sampler2D u14,u15,u23;uniform float u17,u24,u25,u18;varying vec2 vv0;const vec2 j=vec2(1.,1.),k=vec2(0.,0.);void main(){vec2 b=floor(u24*vv0),c=u24*vv0-b;float d=u17/u24;vec2 f=floor(c*d),g=c*d-f,h=(b+g)/u24;float l=u24*u18/u17;vec2 m=l*f,a=(m+g*u25)/u18;a+=.25/u18;vec2 i=step(a,j)*step(k,a);vec4 n=texture2D(u14,h),o=texture2D(u15,a),p=n*o,q=texture2D(u23,h);gl_FragColor=(p*u25*u25+q)*i.x*i.y;}",
                            i: "u14 u15 u17 u24 u25 u18 u23".split(" "),
                            j: { u15: 0, u14: 1, u23: 2 }
                        },
                        s27: { h: "uniform sampler2D u14,u15;varying vec2 vv0;void main(){vec4 a=texture2D(u14,vv0),b=texture2D(u15,vv0);gl_FragColor=a*b;}", i: ["u14", "u15"], j: { u15: 0, u14: 1 }, C: !0 },
                        s28: { h: "uniform sampler2D u1,u23;uniform float u26;varying vec2 vv0;void main(){gl_FragColor=texture2D(u23,vv0)+u26*texture2D(u1,vv0);}", i: ["u1", "u23", "u26"], j: { u1: 0, u23: 1 } },
                        s29: {
                            h: "varying vec2 vv0;uniform sampler2D u1;const vec4 f=vec4(1.,1.,1.,1.),g=vec4(.299,.587,.114,0.);void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=dot(a,g)*f;}",
                            i: m,
                            j: F,
                            precision: "lowp"
                        },
                        s30: { h: "varying vec2 vv0;uniform sampler2D u1;uniform float u27;const vec3 f=vec3(.299,.587,.114);void main(){vec3 a=texture2D(u1,vv0).rgb,b=texture2D(u1,vv0+vec2(0.,u27)).rgb,c=texture2D(u1,vv0+vec2(u27,u27)).rgb,d=texture2D(u1,vv0+vec2(u27,0.)).rgb;gl_FragColor=vec4(dot(a,f),dot(b,f),dot(c,f),dot(d,f));}", i: ["u1", "u27"], j: F, precision: "lowp" },
                        s31: {
                            h: "varying vec2 vv0;uniform sampler2D u1;uniform float u27;const vec3 f=vec3(.299,.587,.114);void main(){vec3 a=texture2D(u1,vv0).rgb,b=texture2D(u1,vv0+vec2(0.,u27)).rgb,c=texture2D(u1,vv0+vec2(u27,u27)).rgb,d=texture2D(u1,vv0+vec2(u27,0.)).rgb;gl_FragColor=vec4(a.r,b.g,c.b,dot(d,f));}",
                            i: ["u1", "u27"],
                            j: F,
                            precision: "lowp"
                        },
                        s32: {
                            h: "varying vec2 vv0;uniform sampler2D u1,u2;uniform float u28;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=vec4(0.);a-=texture2D(u1,vec2(vv0.x-u28,vv0.y-u28))*1.,a-=texture2D(u1,vec2(vv0.x-u28,vv0.y))*2.,a-=texture2D(u1,vec2(vv0.x-u28,vv0.y+u28))*1.,a+=texture2D(u1,vec2(vv0.x+u28,vv0.y-u28))*1.,a+=texture2D(u1,vec2(vv0.x+u28,vv0.y))*2.,a+=texture2D(u1,vec2(vv0.x+u28,vv0.y+u28))*1.;vec4 b=vec4(0.);b-=texture2D(u1,vec2(vv0.x-u28,vv0.y-u28))*1.,b-=texture2D(u1,vec2(vv0.x,vv0.y-u28))*2.,b-=texture2D(u1,vec2(vv0.x+u28,vv0.y-u28))*1.,b+=texture2D(u1,vec2(vv0.x-u28,vv0.y+u28))*1.,b+=texture2D(u1,vec2(vv0.x,vv0.y+u28))*2.,b+=texture2D(u1,vec2(vv0.x+u28,vv0.y+u28))*1.;vec3 c=sqrt(a.rgb*a.rgb+b.rgb*b.rgb);vec4 e=vec4(c,texture2D(u1,vv0).a),g=texture2D(u2,vv0);gl_FragColor=g.a*e.r*f;}",
                            i: ["u1", "u2", "u28"],
                            j: M,
                            C: !0
                        },
                        s33: { h: "varying vec2 vv0;uniform sampler2D u1,u2;uniform float u28;const vec4 j=vec4(1.,1.,1.,1.);const vec2 k=vec2(1.,1.);void main(){float h=0.;vec2 l=k*u28,a,b;float c,d,i=0.;for(float e=-4.;e<=4.;e+=1.)for(float f=-4.;f<=4.;f+=1.)a=vec2(e,f),c=length(a)/2.,d=exp(-c*c),b=vv0+l*a,h+=d*texture2D(u1,b).r,i+=d;vec4 m=texture2D(u2,vv0);gl_FragColor=m.a*(texture2D(u1,b).r-h/i)*j;}", i: ["u1", "u2", "u28"], j: M, C: !0 },
                        s34: {
                            h: "uniform sampler2D u3;uniform vec2 u8;varying vec2 vv0;vec4 e(vec4 a,vec4 b){vec4 c=step(a,b);return mix(a,b,c);}const vec2 g=vec2(.5,.5),h=vec2(1.,0.),i=vec2(0.,1.);void main(){vec2 a=vv0-u8*g;vec4 b=texture2D(u3,a),c=texture2D(u3,a+u8*h),d=texture2D(u3,a+u8*i),j=texture2D(u3,a+u8),k=e(b,c),l=e(d,j);gl_FragColor=e(k,l);}",
                            i: ["u3", "u8"],
                            j: H
                        },
                        s35: { h: "uniform sampler2D u3;uniform vec2 u8;varying vec2 vv0;const vec2 k=vec2(1.,0.),l=vec2(0.,1.),m=vec2(2.,0.),n=vec2(0.,2.);vec4 e(vec4 a,vec4 b){vec4 c=step(a,b);return mix(a,b,c);}vec4 f(vec2 a){vec4 b=texture2D(u3,a),c=texture2D(u3,a+u8*k),d=texture2D(u3,a+u8*l),g=texture2D(u3,a+u8),h=e(b,c),i=e(d,g);return e(h,i);}void main(){vec2 a=vv0+u8*vec2(-.55,-1.05);vec4 b=f(a),c=f(a+u8*m),d=f(a+u8*2.),g=f(a+u8*n),h=e(b,c),i=e(d,g);gl_FragColor=e(h,i);}", i: ["u3", "u8"], j: H, C: !0 },
                        s36: { h: "uniform sampler2D u1;varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=a*a;}", i: ["u1"], j: F, precision: "lowp", C: !0 },
                        s37: {
                            h: "uniform sampler2D u1;uniform vec2 u8;varying vec2 vv0;const float e=15444.;void main(){vec4 a=1001./e*texture2D(u1,vv0-3.*u8)+2002./e*texture2D(u1,vv0-2.*u8)+3003./e*texture2D(u1,vv0-u8)+3432./e*texture2D(u1,vv0)+3003./e*texture2D(u1,vv0+u8)+2002./e*texture2D(u1,vv0+2.*u8)+1001./e*texture2D(u1,vv0+3.*u8);gl_FragColor=a;}",
                            i: ["u8", "u1"],
                            j: F,
                            precision: "lowp",
                            C: !0
                        },
                        s38: { h: "uniform sampler2D u1,u11,u29;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);const float g=.1;void main(){vec4 a=texture2D(u11,vv0),b=texture2D(u29,vv0),c=texture2D(u1,vv0),d=max(f*g,b-a*a),h=sqrt(d);gl_FragColor=(c-a)/h;}", i: ["u1", "u11", "u29"], j: { u1: 0, u11: 1, u29: 2 }, C: !0 }
                    },
                    J = {
                        s39: {
                            h: "uniform float u17,u30;uniform sampler2D u14,u15,u23;varying vec2 vv0;const vec2 ZERO2=vec2(0.,0.),ONE2=vec2(1.,1.),HALF2=vec2(.5,.5),EPS2=vec2(1e-5,1e-5);void main(){vec4 sum=texture2D(u23,vv0);float toSparsity=1.1111;vec2 uvFrom,uvWeight,xyPatch=ZERO2,eps2=EPS2/u17,xyTo=floor(vv0*u17+eps2);float weightSize=toSparsity*u17;vec2 halfFromSparsity=ONE2*(toSparsity-1.)/2.;for(float patch_x=0.;patch_x<1.1111;patch_x+=1.){xyPatch.x=patch_x;for(float patch_y=0.;patch_y<1.1111;patch_y+=1.)xyPatch.y=patch_y,uvFrom=(xyTo+HALF2+u30*(xyPatch-halfFromSparsity))/u17,uvFrom+=step(uvFrom,-eps2),uvFrom-=step(ONE2-eps2,uvFrom),uvWeight=(xyTo*toSparsity+xyPatch+HALF2)/weightSize,sum+=texture2D(u14,uvWeight)*texture2D(u15,uvFrom);}gl_FragColor=sum,gl_FragColor*=2.2222;}",
                            i: ["u17", "u14", "u15", "u23", "u30"],
                            Cb: ["1.1111", "gl_FragColor\\*=2.2222;"]
                        },
                        s40: {
                            h: "uniform float u17,u30,u18;uniform sampler2D u14,u15,u23;varying vec2 vv0;const vec2 ZERO2=vec2(0.,0.),ONE2=vec2(1.,1.),HALF2=vec2(.5,.5),EPS2=vec2(1e-4,1e-4);void main(){vec4 sum=texture2D(u23,vv0);float fromSparsity=1.1111,shrinkFactor=3.3333;vec2 uvFrom,uvWeight,xyFrom,xyPatchTo,xyPatch=ZERO2,xyShrink=ZERO2,eps2=EPS2/u18,xyTo=floor(vv0*u17+eps2);float weightSize=fromSparsity*u18;vec2 halfFromSparsity=ONE2*(fromSparsity-1.)/2.;float toSparsity=weightSize/u17;vec2 xyFrom0=xyTo*shrinkFactor;for(float patch_x=0.;patch_x<1.1111;patch_x+=1.){xyPatch.x=patch_x;for(float patch_y=0.;patch_y<1.1111;patch_y+=1.){xyPatch.y=patch_y;for(float shrink_x=0.;shrink_x<3.3333;shrink_x+=1.){xyShrink.x=shrink_x;for(float shrink_y=0.;shrink_y<3.3333;shrink_y+=1.)xyShrink.y=shrink_y,xyFrom=xyFrom0+xyShrink+shrinkFactor*u30*(xyPatch-halfFromSparsity),uvFrom=(xyFrom+HALF2)/u18,uvFrom+=step(uvFrom,-eps2),uvFrom-=step(ONE2-eps2,uvFrom),xyPatchTo=xyPatch*shrinkFactor+xyShrink,uvWeight=(xyTo*toSparsity+xyPatchTo+HALF2)/weightSize,sum+=texture2D(u14,uvWeight)*texture2D(u15,uvFrom);}}}gl_FragColor=sum,gl_FragColor*=2.2222;}",
                            i: "u17 u18 u14 u15 u23 u30".split(" "),
                            Cb: ["1.1111", "gl_FragColor\\*=2.2222;", "3.3333"]
                        }
                    },
                    v = null,
                    L = null,
                    N = {
                        rb: function() { return y },
                        v: function() {
                            if (!y) {
                                v = tb.Qb(k, 2);
                                L = tb.Qb(J, 2);
                                t = "highp";
                                b.getShaderPrecisionFormat && (b.getShaderPrecisionFormat(b.FRAGMENT_SHADER, b.MEDIUM_FLOAT), b.getShaderPrecisionFormat(b.FRAGMENT_SHADER, b.LOW_FLOAT));
                                for (var w in v) e(b, v[w], w);
                                D.set("s0");
                                b.enableVertexAttribArray(0);
                                y = !0
                            }
                        },
                        Vc: function(w) { w.forEach(function(f) { N.Uc(f) }) },
                        Uc: function(w) {
                            v[w.id] = w;
                            e(b, w, w.id)
                        },
                        yd: function(w,
                            f, A) {
                            f || (f = w);
                            v[f] = Object.create(L[w]);
                            v[f].rf = !0;
                            L[w].Cb && L[w].Cb.forEach(function(I, g) { v[f].h = v[f].h.replace(new RegExp(I, "g"), A[g]) });
                            e(b, v[f], f)
                        },
                        set: function(w) {
                            var f = v[w];
                            f.C && (f.C = !1, e(b, f, w));
                            l(f)
                        },
                        Wa: function(w) { return n(w, x(), "s41") },
                        Fc: function(w) { return n(w, { h: "void main(){gl_FragColor=vec4(.5,.5,.5,.5);}", i: [], precision: t }, "s42") },
                        Qe: function(w) { return "undefined" === typeof v[w] ? !1 : v[w].wa },
                        M: function() {-1 !== q && (q = -1, u.La.forEach(function(w) { 0 !== w && b.disableVertexAttribArray(w) })) },
                        Gc: function() {
                            var w =
                                0;
                            u.La.forEach(function(f, A) {
                                A = u.Ka[A];
                                b.vertexAttribPointer(f, A, b.FLOAT, !1, u.Pc, w);
                                w += 4 * A
                            })
                        },
                        hd: function() { b.enableVertexAttribArray(0) },
                        Fa: function() { N.Db(b) },
                        Db: function(w) { w.vertexAttribPointer(u.La[0], 2, w.FLOAT, !1, 8, 0) },
                        Ph: function(w, f) { b.uniform1i(u.A[w], f) },
                        H: function(w, f) { b.uniform1f(u.A[w], f) },
                        ba: function(w, f, A) { b.uniform2f(u.A[w], f, A) },
                        Qh: function(w, f) { b.uniform2fv(u.A[w], f) },
                        Uf: function(w, f) { b.uniform3fv(u.A[w], f) },
                        Rh: function(w, f, A, I) { b.uniform3f(u.A[w], f, A, I) },
                        Vf: function(w, f, A, I, g) {
                            b.uniform4f(u.A[w],
                                f, A, I, g)
                        },
                        de: function(w, f) { b.uniform4fv(u.A[w], f) },
                        ee: function(w, f) { b.uniformMatrix2fv(u.A[w], !1, f) },
                        Sh: function(w, f) { b.uniformMatrix3fv(u.A[w], !1, f) },
                        Th: function(w, f) { b.uniformMatrix4fv(u.A[w], !1, f) },
                        N: function(w, f) {
                            N.set(w);
                            f.forEach(function(A) {
                                switch (A.type) {
                                    case "4f":
                                        b.uniform4fv(u.A[A.name], A.value);
                                        break;
                                    case "3f":
                                        b.uniform3fv(u.A[A.name], A.value);
                                        break;
                                    case "2f":
                                        b.uniform2fv(u.A[A.name], A.value);
                                        break;
                                    case "1f":
                                        b.uniform1f(u.A[A.name], A.value);
                                        break;
                                    case "1i":
                                        b.uniform1i(u.A[A.name], A.value);
                                        break;
                                    case "mat2":
                                        b.uniformMatrix2fv(u.A[A.name], !1, A.value);
                                        break;
                                    case "mat3":
                                        b.uniformMatrix3fv(u.A[A.name], !1, A.value);
                                        break;
                                    case "mat4":
                                        b.uniformMatrix4fv(u.A[A.name], !1, A.value)
                                }
                            })
                        },
                        fh: function() { return "lowp" },
                        m: function() {
                            N.M();
                            b.disableVertexAttribArray(0);
                            for (var w in v) {
                                var f = v[w];
                                f.wa && (f.wa = !1, b.deleteProgram(f.ya));
                                f.rf && delete v[w]
                            }
                            r.forEach(function(A) { b.deleteShader(A) });
                            r.splice(0);
                            p = 0;
                            y = !1;
                            u = null;
                            q = -1
                        }
                    };
                return N
            }(),
            b = null,
            Ka = function() {
                function a(m) {
                    console.log("ERROR in ContextFF: ",
                        m);
                    return !1
                }

                function c() { return navigator.userAgent && -1 !== navigator.userAgent.indexOf("forceWebGL1") }

                function d(m) {
                    function z() {
                        Ha.m();
                        aa.reset();
                        h.getExtension("WEBGL_lose_context").loseContext()
                    }
                    if (c()) return !1;
                    var F = document.createElement("canvas");
                    F.setAttribute("width", 5);
                    F.setAttribute("height", 5);
                    var h = null;
                    try { h = F.getContext("webgl2", m) } catch (M) { return !1 }
                    if (!h) return !1;
                    e(h);
                    aa.jd(h);
                    m = aa.Rb(h);
                    if (!m.ha && !m.ja) return z(), !1;
                    m = Ha.Xc(h, m);
                    z();
                    return m ? !0 : !1
                }

                function e(m) {
                    m.clearColor(0, 0, 0, 0);
                    m.disable(m.DEPTH_TEST);
                    m.disable(m.BLEND);
                    m.disable(m.DITHER);
                    m.disable(m.STENCIL_TEST);
                    m.disable(m.CULL_FACE);
                    m.GENERATE_MIPMAP_HINT && m.hint(m.GENERATE_MIPMAP_HINT, m.FASTEST);
                    m.disable(m.SAMPLE_ALPHA_TO_COVERAGE);
                    m.disable(m.SAMPLE_COVERAGE);
                    m.depthFunc(m.LEQUAL);
                    m.clearDepth(1)
                }
                var l = null,
                    n = null,
                    x = null,
                    r = null,
                    q = !0,
                    u = null,
                    p = null,
                    y = [],
                    t = {
                        F: function() { return l.width },
                        X: function() { return l.height },
                        Xg: function() { return l },
                        Vg: function() { return b },
                        ka: function() { return q },
                        flush: function() { b.flush() },
                        kf: function() {
                            ya.fa();
                            Y.reset();
                            U.reset();
                            D.M();
                            D.hd();
                            b.disable(b.DEPTH_TEST);
                            b.disable(b.BLEND);
                            U.Aa();
                            D.Fa()
                        },
                        We: function() {
                            u || (u = new Uint8Array(l.width * l.height * 4));
                            b.readPixels(0, 0, l.width, l.height, b.RGBA, b.UNSIGNED_BYTE, u);
                            return u
                        },
                        Yg: function() { return l.toDataURL("image/jpeg") },
                        Zg: function() {
                            ya.P();
                            n || (n = document.createElement("canvas"), x = n.getContext("2d"));
                            n.width = l.width;
                            n.height = l.height;
                            for (var m = t.We(), z = x.createImageData(n.width, n.height), F = n.width, h = n.height, M = z.data, H = 0; H < h; ++H)
                                for (var k = h - H - 1, J = 0; J < F; ++J) {
                                    var v =
                                        4 * (H * F + J),
                                        L = 4 * (k * F + J);
                                    M[v] = m[L];
                                    M[v + 1] = m[L + 1];
                                    M[v + 2] = m[L + 2];
                                    M[v + 3] = m[L + 3]
                                }
                            x.putImageData(z, 0, 0);
                            return n.toDataURL("image/png")
                        },
                        Ve: function(m) {
                            !n && m && (n = document.createElement("canvas"), x = n.getContext("2d"));
                            var z = m ? n : document.createElement("canvas");
                            z.width = l.width;
                            z.height = l.height;
                            (m ? x : z.getContext("2d")).drawImage(l, 0, 0);
                            return z
                        },
                        v: function(m) {
                            m = Object.assign({ ia: null, yc: null, bb: null, dd: null, width: 512, height: 512, premultipliedAlpha: !1, Cd: !0, antialias: !1, debug: !1, zg: !1 }, m);
                            m.ia ? (b = m.ia, l = m.ia.canvas) :
                                m.dd && !m.bb ? l = document.getElementById(m.dd) : m.bb && (l = m.bb);
                            l || (l = document.createElement("canvas"));
                            l.width = m.width;
                            l.height = m.height;
                            if (b) q = b instanceof WebGL2RenderingContext;
                            else {
                                q = !0;
                                var z = { antialias: m.antialias, alpha: !0, preserveDrawingBuffer: !0, premultipliedAlpha: m.premultipliedAlpha, stencil: !1, depth: m.Cd, failIfMajorPerformanceCaveat: !0, powerPreference: "high-performance" };
                                navigator && navigator.userAgent && -1 !== navigator.userAgent.indexOf("noAntialiasing") && (z.antialias = !1);
                                var F = d(z);
                                F || !z.antialias ||
                                    c() || (z.antialias = !1, F = d(z));
                                F && (b = l.getContext("webgl2", z));
                                b ? q = !0 : ((b = l.getContext("webgl", z)) || (b = l.getContext("experimental-webgl", z)), q = !1)
                            }
                            if (!b) return a("WebGL1 and 2 are not enabled");
                            m.yc && l.addEventListener && (r = b.getExtension("WEBGL_lose_context")) && (p = m.yc, l.addEventListener("webglcontextlost", p, !1));
                            if (!aa.v()) return a("Not enough GL capabilities");
                            e(b);
                            D.v();
                            U.v();
                            Ha.Xc(b, aa.Ue());
                            y.forEach(function(h) { h(b) });
                            y.splice(0);
                            return !0
                        },
                        og: function() { return new Promise(function(m) { b ? m(b) : y.push(m) }) },
                        m: function() {
                            b && (aa.m(), D.m(), Ha.m());
                            r && p && (l.removeEventListener("webglcontextlost", p, !1), r = p = null);
                            b = u = x = n = l = null;
                            y.splice(0)
                        }
                    };
                return t
            }(),
            za = function() {
                function a() { null === c && ("undefined" !== typeof D ? c = D : "undefined" !== typeof JEShaders && (c = JEShaders)) }
                var c = null;
                return {
                    reset: function() { c = null },
                    Sf: function(d) { c !== d && (c && c.M(), c = d) },
                    rb: function() { return c.rb() },
                    Fa: function() { return c.Fa() },
                    Db: function(d) { return c.Db(d) },
                    Gc: function() { return c.Gc() },
                    M: function() { return c.M() },
                    set: function(d) {
                        a();
                        return c.set(d)
                    },
                    Wa: function(d) { a(); return c.Wa(d) },
                    Fc: function(d) { a(); return c.Fc(d) }
                }
            }(),
            Fa = function() {
                function a(g) { b.bindTexture(b.TEXTURE_2D, g) }

                function c(g) {
                    w[0] = g;
                    g = f[0];
                    var E = g >> 16 & 32768,
                        K = g >> 12 & 2047,
                        O = g >> 23 & 255;
                    return 103 > O ? E : 142 < O ? E | 31744 | ((255 == O ? 0 : 1) && g & 8388607) : 113 > O ? (K |= 2048, E | (K >> 114 - O) + (K >> 113 - O & 1)) : E = (E | O - 112 << 10 | K >> 1) + (K & 1)
                }

                function d(g) {
                    var E = new Uint16Array(g.length);
                    g.forEach(function(K, O) { E[O] = c(K) });
                    return E
                }

                function e() {
                    if (null !== A.ec) return A.ec;
                    var g = n(d([.5, .5, .5, .5]), !0);
                    return null === g ? !0 : A.ec = g
                }

                function l() { if (null !== A.fc) return A.fc; var g = n(new Uint8Array([127, 127, 127, 127]), !1); return null === g ? !0 : A.fc = g }

                function n(g, E) {
                    if (!za.rb() || !F) return null;
                    var K = null,
                        O = Math.sqrt(g.length / 4);
                    try {
                        var Z = b.getError();
                        if ("FUCKING_BIG_ERROR" === Z) return !1;
                        K = I.instance({ isFloat: !1, S: E, array: g, width: O });
                        Z = b.getError();
                        if (Z !== b.NO_ERROR) return !1
                    } catch (qa) { return !1 }
                    na.P();
                    b.viewport(0, 0, O, O);
                    b.clearColor(0, 0, 0, 0);
                    b.clear(b.COLOR_BUFFER_BIT);
                    za.set("s0");
                    K.Ma(0);
                    oa.l(!0, !0);
                    g = 4 * O * O;
                    E = new Uint8Array(g);
                    b.readPixels(0, 0, O, O, b.RGBA, b.UNSIGNED_BYTE, E);
                    O = !0;
                    for (Z = 0; Z < g; ++Z) O = O && 3 > Math.abs(E[Z] - 127);
                    K.remove();
                    na.fa();
                    return O
                }
                var x = 0,
                    r = null,
                    q = 0,
                    u = null,
                    p = null,
                    y = null,
                    t = null,
                    m = null,
                    z = null,
                    F = !1,
                    h = [],
                    M = { isFloat: !1, isPot: !0, isLinear: !1, isMipmap: !1, isAnisotropicFiltering: !1, isMirrorX: !1, isMirrorY: !1, isSrgb: !1, isKeepArray: !1, isFlipY: null, width: 0, height: 0, url: null, array: null, data: null, J: null, dc: null, qf: !1, S: !1, qa: null, wb: 4, rc: 0 },
                    H = !1,
                    k = null,
                    J = null,
                    v = [
                        [1, 0, 0, 0],
                        [0, 1, 0, 0],
                        [0, 0, 1, 0],
                        [0, 0, 0,
                            1
                        ]
                    ],
                    L = !1,
                    N = !1,
                    w = new Float32Array(1),
                    f = new Int32Array(w.buffer),
                    A = { ec: null, fc: null },
                    I = {
                        v: function() { F || (m = [b.RGBA, null, b.RGBA, b.RGBA], z = [b.RGBA, null, b.RGBA, b.RGBA], r = [b.TEXTURE0, b.TEXTURE1, b.TEXTURE2, b.TEXTURE3, b.TEXTURE4, b.TEXTURE5, b.TEXTURE6, b.TEXTURE7], L = "undefined" !== typeof JEContext, N = "undefined" !== typeof aa, L && JEContext.zh() && r.push(b.TEXTURE8, b.TEXTURE9), u = [-1, -1, -1, -1, -1, -1, -1, -1], t = [b.UNSIGNED_BYTE, b.FLOAT, b.FLOAT], F = !0) },
                        lf: function() {
                            if (!p) {
                                for (var g = new Float32Array(16384), E = 0; 16384 > E; ++E) g[E] =
                                    2 * Math.random() - 1;
                                p = { random: I.instance({ isFloat: !0, isPot: !0, array: g, width: 64 }), me: I.instance({ isFloat: !1, isPot: !0, width: 1, array: new Uint8Array([0, 0, 0, 0]) }) }
                            }
                            I.hg()
                        },
                        oh: function() { return p.me },
                        hg: function() { t[1] = aa.ac(b) },
                        Qf: function() { z = m = [b.RGBA, b.RGBA, b.RGBA, b.RGBA] },
                        Xd: function(g) {
                            D.set("s1");
                            na.P();
                            var E = g.F(),
                                K = g.X();
                            b.viewport(0, 0, E, K);
                            g.g(0);
                            oa.l(!1, !1)
                        },
                        Hh: function(g, E) {
                            I.Xd(g);
                            b.readPixels(0, 0, g.F(), g.X(), b.RGBA, b.UNSIGNED_BYTE, E)
                        },
                        Ih: function(g, E) { I.Xd(g); return aa.Bb(0, 0, g.F(), g.X(), E) },
                        qd: function(g, E, K, O, Z, qa, va) {
                            g.activeTexture(g.TEXTURE0);
                            var Ia = g.createTexture();
                            g.bindTexture(g.TEXTURE_2D, Ia);
                            Z = Z instanceof Float32Array ? Z : new Float32Array(Z);
                            g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_S, g.CLAMP_TO_EDGE);
                            g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_T, g.CLAMP_TO_EDGE);
                            g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MAG_FILTER, g.NEAREST);
                            g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, g.NEAREST);
                            g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL, qa);
                            g.texImage2D(g.TEXTURE_2D, 0, g.RGBA, K, O, 0, g.RGBA, g.FLOAT,
                                Z);
                            g.bindTexture(g.TEXTURE_2D, null);
                            g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL, !1);
                            va && (na.fa(), D.Wa(g));
                            g.viewport(0, 0, K, O);
                            g.framebufferTexture2D(g.FRAMEBUFFER, g.COLOR_ATTACHMENT0, g.TEXTURE_2D, E, 0);
                            g.bindTexture(g.TEXTURE_2D, Ia);
                            va ? oa.l(!0, !0) : U.ib(g);
                            g.deleteTexture(Ia);
                            F && (u[0] = -1, y = null, x = 0)
                        },
                        Lb: function(g) { g !== x && (b.activeTexture(r[g]), x = g) },
                        instance: function(g) {
                            var E;

                            function K() {
                                R = void 0 !== C.J.videoWidth ? C.J.videoWidth : C.J.width;
                                S = void 0 !== C.J.videoHeight ? C.J.videoHeight : C.J.height
                            }

                            function O(G) {
                                var P =
                                    b.getError();
                                if ("FUCKING_BIG_ERROR" === P) return !1;
                                b.texImage2D(b.TEXTURE_2D, 0, ja, ha, ia, G);
                                P = b.getError();
                                P !== b.NO_ERROR && ha !== b.RGBA && (ha = b.RGBA, b.texImage2D(b.TEXTURE_2D, 0, ja, ha, ia, G));
                                return !0
                            }

                            function Z() {
                                if (!Jb) {
                                    a(wa);
                                    Ea && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, Ea);
                                    C.isPot ? (b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, C.isMirrorX ? b.MIRRORED_REPEAT : b.REPEAT), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, C.isMirrorY ? b.MIRRORED_REPEAT : b.REPEAT)) : (b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE),
                                        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE));
                                    C.isAnisotropicFiltering && "undefined" !== typeof JESETTINGS && b.texParameterf(b.TEXTURE_2D, JEContext.$g().TEXTURE_MAX_ANISOTROPY_EXT, JESETTINGS.kg);
                                    b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, C.isLinear ? b.LINEAR : b.NEAREST);
                                    C.isLinear ? b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, C.isMipmap && !Pa ? b.NEAREST_MIPMAP_LINEAR : b.LINEAR) : b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, C.isMipmap && !Pa ? b.NEAREST_MIPMAP_NEAREST : b.NEAREST);
                                    ha = m[C.wb - 1];
                                    ja = z[C.wb - 1];
                                    ia = t[ub];
                                    if (aa.ka()) {
                                        var G = aa.Ye();
                                        ha === b.RGBA && ia === b.FLOAT ? C.isMipmap || C.isLinear ? ja = Ha.$e(b) : aa.Yc() ? G && (ja = G) : ja = b.RGBA16F || b.RGBA : ha === b.RGB && ia === b.FLOAT && G && (ja = G, ha = b.RGBA)
                                    }
                                    if (C.S && !C.isFloat || C.isFloat && C.isMipmap && Ha.vf()) ja = aa.Ze(), ia = aa.ac(b);
                                    C.rc && (gb = C.rc);
                                    C.isSrgb && 4 === C.wb && (ha = JEContext.mh());
                                    if (C.J) O(C.J);
                                    else if (C.url) O(La);
                                    else if (xa) {
                                        G = xa;
                                        try {
                                            "FUCKING_BIG_ERROR" !== b.getError() && (b.texImage2D(b.TEXTURE_2D, 0, ja, R, S, 0, ha, ia, G), b.getError() !== b.NO_ERROR &&
                                                (b.texImage2D(b.TEXTURE_2D, 0, ja, R, S, 0, ha, ia, null), b.getError() !== b.NO_ERROR && b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, R, S, 0, b.RGBA, b.UNSIGNED_BYTE, null)))
                                        } catch (kc) { b.texImage2D(b.TEXTURE_2D, 0, ja, R, S, 0, ha, ia, null) }
                                        C.isKeepArray || (xa = null)
                                    } else G = b.getError(), "FUCKING_BIG_ERROR" !== G && (b.texImage2D(b.TEXTURE_2D, 0, ja, R, S, 0, ha, ia, null), G = b.getError(), G !== b.NO_ERROR && (ha = b.RGBA, C.S && ia !== b.FLOAT && (ia = b.FLOAT, b.texImage2D(b.TEXTURE_2D, 0, ja, R, S, 0, ha, ia, null))));
                                    if (C.isMipmap)
                                        if (!Pa && ba) ba.$b(), hb = !0;
                                        else if (Pa) {
                                        G =
                                            Math.log2(Math.min(R, S));
                                        Ua = Array(1 + G);
                                        Ua[0] = wa;
                                        for (var P = 1; P <= G; ++P) {
                                            var la = Math.pow(2, P),
                                                X = R / la;
                                            la = S / la;
                                            var Qa = b.createTexture();
                                            a(Qa);
                                            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.NEAREST);
                                            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.NEAREST);
                                            b.texImage2D(b.TEXTURE_2D, 0, ja, X, la, 0, ha, ia, null);
                                            a(null);
                                            Ua[P] = Qa
                                        }
                                        hb = !0
                                    }
                                    a(null);
                                    u[x] = -1;
                                    Ea && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !1);
                                    Wa = !0;
                                    C.qa && ba && (C.qa(ba), C.qa = null)
                                }
                            }

                            function qa() {
                                for (var G = R * S, P = 2 * G, la = 3 * G, X = 0; X < G; ++X) Aa[0][X] = Xa[X], Aa[1][X] =
                                    Xa[X + G], Aa[2][X] = Xa[X + P], Aa[3][X] = Xa[X + la]
                            }

                            function va() {
                                var G = R * S * 4;
                                Ja = [new Uint8Array(G), new Uint8Array(G), new Uint8Array(G), new Uint8Array(G)];
                                Aa = [new Float32Array(Ja[0].buffer), new Float32Array(Ja[1].buffer), new Float32Array(Ja[2].buffer), new Float32Array(Ja[3].buffer)];
                                ib = new Uint8Array(4 * G);
                                Xa = new Float32Array(ib.buffer);
                                Ya = !0
                            }

                            function Ia() {
                                E = new Uint8Array(R * S * 4);
                                Kb = new Float32Array(E.buffer);
                                vb = !0
                            }
                            var C = Object.assign({}, M, g),
                                Za = q++;
                            null === C.isFlipY && (C.isFlipY = C.url ? !0 : !1);
                            C.data && (C.array =
                                "string" === typeof C.data ? Rb(C.data) : C.isFloat ? new Float32Array(C.data) : new Uint8Array(C.data), C.isFlipY = !1);
                            var ub = 0,
                                Lb = C.J ? !0 : !1,
                                $a = null,
                                wb = null,
                                Mb = !1;
                            C.S = C.S || C.isFloat;
                            C.S && (ub = 1);
                            !C.qf && C.isFloat && N && !aa.Yc() && (C.isFloat = !1);
                            C.isFloat && (ub = 2);
                            C.isAnisotropicFiltering && L && !JEContext.sh() && (C.isAnisotropicFiltering = !1);
                            var wa = C.dc || b.createTexture(),
                                La = null,
                                xa = !1,
                                R = 0,
                                S = 0,
                                Wa = !1,
                                Jb = !1,
                                Ya = !1,
                                Aa = null,
                                Ja = null,
                                ib = null,
                                Xa = null,
                                ja = null,
                                ha = null,
                                ia = null,
                                Ea = C.isFlipY,
                                Zb = (g = C.S && C.isMipmap) && Ha.ye(),
                                Pa = g &&
                                Zb ? !0 : !1,
                                Ua = null,
                                gb = -1,
                                hb = !1;
                            var vb = !1;
                            var Kb = E = null;
                            C.width && (R = C.width, S = C.height ? C.height : R);
                            var ba = {
                                get: function() { return wa },
                                F: function() { return R },
                                X: function() { return S },
                                ph: function() { return C.url },
                                th: function() { return C.isFloat },
                                vh: function() { return C.S },
                                wh: function() { return C.isLinear },
                                $b: function() { b.generateMipmap(b.TEXTURE_2D) },
                                we: function(G, P) { Pa ? (G || (G = ba.ud()), I.Lb(P), a(Ua[G]), u[P] = -1) : ba.g(P) },
                                ud: function() {-1 === gb && (gb = Math.log(R) / Math.log(2)); return gb },
                                Re: function(G) {
                                    if (Pa) {
                                        G || (G =
                                            ba.ud());
                                        D.set("s12");
                                        I.Lb(0);
                                        for (var P = R, la = S, X = 1; X <= G; ++X) P /= 2, la /= 2, D.ba("u8", .25 / P, .25 / la), b.viewport(0, 0, P, la), a(Ua[X - 1]), b.framebufferTexture2D(na.lb(), b.COLOR_ATTACHMENT0, b.TEXTURE_2D, Ua[X], 0), oa.l(!1, 1 === X);
                                        u[0] = -1
                                    } else ba.$b()
                                },
                                Tf: function(G) {
                                    (Lb = !Xb.cg(G)) ? (xa = null, C.J = G, K()) : xa = G
                                },
                                g: function(G) {
                                    if (!Wa) return !1;
                                    I.Lb(G);
                                    if (u[G] === Za) return !1;
                                    a(wa);
                                    u[G] = Za;
                                    return !0
                                },
                                Ma: function(G) {
                                    b.activeTexture(r[G]);
                                    x = G;
                                    a(wa);
                                    u[G] = Za
                                },
                                o: function() {
                                    y = ba;
                                    b.framebufferTexture2D(na.lb(), b.COLOR_ATTACHMENT0,
                                        b.TEXTURE_2D, wa, 0)
                                },
                                aa: function() {
                                    y = ba;
                                    b.viewport(0, 0, R, S);
                                    b.framebufferTexture2D(na.lb(), b.COLOR_ATTACHMENT0, b.TEXTURE_2D, wa, 0)
                                },
                                Nc: I.Nc,
                                ce: function(G, P) {
                                    R = G;
                                    S = P
                                },
                                resize: function(G, P) {
                                    ba.ce(G, P);
                                    Z()
                                },
                                clone: function(G) {
                                    G = I.instance({ width: R, height: S, S: C.S, isFloat: C.isFloat, isLinear: C.isLinear, isMirrorY: C.isMirrorY, isFlipY: G ? !Ea : Ea, isPot: C.isPot });
                                    za.set("s0");
                                    na.fa();
                                    G.o();
                                    b.viewport(0, 0, R, S);
                                    ba.g(0);
                                    oa.l(!0, !0);
                                    return G
                                },
                                Wf: function() { b.viewport(0, 0, R, S) },
                                remove: function() {
                                    b.deleteTexture(wa);
                                    Jb = !0;
                                    h.splice(h.indexOf(ba), 1);
                                    ba = null
                                },
                                refresh: function() {
                                    ba.Ma(0);
                                    Ea && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !0);
                                    Lb ? b.texImage2D(b.TEXTURE_2D, 0, ja, ha, ia, C.J) : b.texImage2D(b.TEXTURE_2D, 0, ja, R, S, 0, ha, ia, xa);
                                    Ea && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !1)
                                },
                                Vd: function() {
                                    Ya || va();
                                    b.readPixels(0, 0, R, 4 * S, b.RGBA, b.UNSIGNED_BYTE, ib);
                                    qa();
                                    return Aa
                                },
                                Jf: function() { Ya || va(); return aa.Bb(0, 0, R, 4 * S, ib).then(function() { qa(); return Aa }) },
                                Lf: function() {
                                    vb || Ia();
                                    b.readPixels(0, 0, R, S, b.RGBA, b.UNSIGNED_BYTE, E);
                                    return Kb
                                },
                                Kf: function() { vb || Ia(); return aa.Bb(0, 0, R, S, E) },
                                fd: function(G) {
                                    na.P();
                                    D.set("s13");
                                    ba.g(0);
                                    if (G) b.viewport(0, 0, R, S), D.Vf("u9", .25, .25, .25, .25), oa.l(!1, !0);
                                    else
                                        for (G = 0; 4 > G; ++G) b.viewport(0, S * G, R, S), D.de("u9", v[G]), oa.l(!1, 0 === G)
                                },
                                Ha: function(G) {
                                    var P = ia === t[0] && !l();
                                    a(wa);
                                    Ea && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !0);
                                    P ? (Mb || ($a = document.createElement("canvas"), $a.width = R, $a.height = S, wb = $a.getContext("2d"), wb.createImageData(R, S), Mb = !0), null.data.set(G), wb.putImageData(null, 0, 0), b.texImage2D(b.TEXTURE_2D,
                                        0, ja, ha, ia, $a)) : b.texImage2D(b.TEXTURE_2D, 0, ja, R, S, 0, ha, ia, G);
                                    u[x] = Za;
                                    Ea && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !1)
                                },
                                Zh: function(G, P) {
                                    a(wa);
                                    P && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !0);
                                    b.texImage2D(b.TEXTURE_2D, 0, ja, ha, ia, G);
                                    u[x] = Za;
                                    P && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !1)
                                },
                                Oh: function(G, P) {
                                    var la = R * S,
                                        X = 4 * la;
                                    G = C.S ? G ? "RGBE" : "JSON" : "RGBA";
                                    P && (G = P);
                                    P = aa.ka() && !1;
                                    var Qa = null;
                                    switch (G) {
                                        case "RGBE":
                                            Qa = "s43";
                                            break;
                                        case "JSON":
                                            Qa = P ? "s0" : "s13";
                                            break;
                                        case "RGBA":
                                        case "RGBAARRAY":
                                            Qa = "s7"
                                    }
                                    Ya || ("RGBA" === G || "RGBE" ===
                                        G || "RGBAARRAY" === G ? (Ja = new Uint8Array(X), Ya = !0) : "JSON" !== G || P || va());
                                    na.P();
                                    D.set(Qa);
                                    ba.g(0);
                                    X = null;
                                    if ("RGBA" === G || "RGBE" === G || "RGBAARRAY" === G) {
                                        b.viewport(0, 0, R, S);
                                        oa.l(!0, !0);
                                        b.readPixels(0, 0, R, S, b.RGBA, b.UNSIGNED_BYTE, Ja);
                                        if ("RGBAARRAY" === G) return { data: Ja };
                                        H || (k = document.createElement("canvas"), J = k.getContext("2d"), H = !0);
                                        k.width = R;
                                        k.height = S;
                                        la = J.createImageData(R, S);
                                        la.data.set(Ja);
                                        J.putImageData(la, 0, 0);
                                        X = k.toDataURL("image/png")
                                    } else if ("JSON" === G)
                                        if (P) X = new Float32Array(la), b.viewport(0, 0,
                                            R, S), oa.l(!0, !0), b.readPixels(0, 0, R, S, b.RGBA, b.FLOAT, X);
                                        else {
                                            for (X = 0; 4 > X; ++X) b.viewport(0, S * X, R, S), D.de("u9", v[X]), oa.l(!X, !X);
                                            ba.Vd();
                                            X = Array(la);
                                            for (P = 0; P < la; ++P) X[4 * P] = Aa[0][P], X[4 * P + 1] = Aa[1][P], X[4 * P + 2] = Aa[2][P], X[4 * P + 3] = Aa[3][P]
                                        }
                                    return { format: G, data: X, width: R, height: S, isMirrorY: C.isMirrorY, isFlipY: "RGBA" === G ? C.isFlipY : !C.isFlipY }
                                }
                            };
                            C.isMipmap && !Pa && Wa && !hb && (ba.$b(), hb = !0);
                            if (C.url) a(wa), b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, 1, 1, 0, b.RGBA, b.UNSIGNED_BYTE, null), La = new Image, La.yg = "Anonymous", La.crossOrigin =
                                "Anonymous", La.src = C.url, La.onload = function() {
                                    R = La.width;
                                    S = La.height;
                                    Z()
                                };
                            else if (C.J) {
                                var Nb = function() {
                                    K();
                                    R ? Z() : setTimeout(Nb, 1)
                                };
                                Nb()
                            } else C.array ? (C.S && !C.isFloat ? C.array instanceof Uint16Array ? (xa = C.array, Z()) : e() ? (xa = d(C.array), Z()) : (Z(), I.qd(b, wa, ba.F(), ba.X(), C.array, Ea, !0)) : (xa = C.isFloat ? C.array instanceof Float32Array ? C.array : new Float32Array(C.array) : C.array instanceof Uint8Array ? C.array : new Uint8Array(C.array), Z()), C.isKeepArray || (xa && xa !== C.array && (xa = null), delete C.array)) : C.dc ? Wa = !0 : Z();
                            ba.kh = ba.F;
                            C.qa && Wa && (C.qa(ba), C.qa = null);
                            h.push(ba);
                            return ba
                        },
                        P: function(g) {
                            g !== x && (b.activeTexture(r[g]), x = g);
                            u[g] = -1;
                            a(null)
                        },
                        ng: function(g) { p.random.g(g) },
                        Nc: function() {
                            y = null;
                            b.framebufferTexture2D(na.lb(), b.COLOR_ATTACHMENT0, b.TEXTURE_2D, null, 0)
                        },
                        reset: function() {
                            0 !== x && b.activeTexture(r[0]);
                            for (var g = 0; g < r.length; ++g) u[g] = -1;
                            x = -1
                        },
                        Lh: function() { x = -1 },
                        eg: function() { for (var g = 0; g < r.length; ++g) I.P(g) },
                        rd: function() { p && (p.random.remove(), p.me.remove()) },
                        Yh: function(g, E) {
                            if ("RGBA" === g.format ||
                                "RGBE" === g.format) {
                                var K = new Image;
                                K.src = g.data;
                                K.onload = function() {
                                    I.instance({
                                        isMirrorY: g.isMirrorY,
                                        isFlipY: g.isFlipY,
                                        isFloat: !1,
                                        J: K,
                                        qa: function(O) {
                                            if ("RGBA" === g.format) E(O);
                                            else {
                                                var Z = g.width,
                                                    qa = g.height,
                                                    va = I.instance({ isMirrorY: g.isMirrorY, isFloat: !0, width: Z, height: qa, isFlipY: g.isFlipY });
                                                na.fa();
                                                b.viewport(0, 0, Z, qa);
                                                D.set("s44");
                                                va.o();
                                                O.g(0);
                                                oa.l(!0, !0);
                                                I.P(0);
                                                E(va);
                                                aa.flush();
                                                setTimeout(O.remove, 50)
                                            }
                                        }
                                    })
                                }
                            } else "JSON" === g.format ? E(I.instance({
                                isFloat: !0,
                                isFlipY: g.isFlipY,
                                width: g.width,
                                height: g.height,
                                array: new Float32Array(g.data)
                            })) : E(!1)
                        },
                        Ee: d,
                        m: function() {
                            y && (ya.fa(), I.Nc(), ya.P());
                            I.eg();
                            h.slice(0).forEach(function(g) { g.remove() });
                            h.splice(0);
                            F = !1;
                            q = 0;
                            "undefined" !== typeof Ha && Ha.m();
                            p = null
                        }
                    };
                return I
            }(),
            Ub = function() {
                return {
                    instance: function(a) {
                        var c = [Fa.instance(a), Fa.instance(a)],
                            d = [c[1], c[0]],
                            e = d,
                            l = {
                                Nf: function(n) {
                                    e[1].o();
                                    e[0].g(n);
                                    l.he()
                                },
                                Of: function(n) {
                                    e[1].aa();
                                    e[0].g(n);
                                    l.he()
                                },
                                he: function() { e = e === c ? d : c },
                                refresh: function() {
                                    e[0].refresh();
                                    e[1].refresh()
                                },
                                g: function(n) { e[0].g(n) },
                                Ma: function(n) { e[0].Ma(n) },
                                mg: function(n) { e[1].g(n) },
                                eh: function() { return e[0] },
                                ih: function() { return e[1] },
                                Ha: function(n) {
                                    e[0].Ha(n);
                                    e[1].Ha(n)
                                },
                                remove: function() {
                                    e[0].remove();
                                    e[1].remove();
                                    e = null
                                },
                                sync: function() {
                                    l.Of(0);
                                    D.set("s0");
                                    U.l(!1, !1)
                                }
                            };
                        return l
                    }
                }
            }(),
            oa = function() {
                function a(q) {
                    var u = { ea: null, L: null };
                    u.ea = q.createBuffer();
                    q.bindBuffer(q.ARRAY_BUFFER, u.ea);
                    q.bufferData(q.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), q.STATIC_DRAW);
                    u.L = q.createBuffer();
                    q.bindBuffer(q.ELEMENT_ARRAY_BUFFER, u.L);
                    q.bufferData(q.ELEMENT_ARRAY_BUFFER,
                        new Uint16Array([0, 1, 2]), q.STATIC_DRAW);
                    return u
                }
                var c = null,
                    d = 0,
                    e = !1,
                    l = [],
                    n = -2,
                    x = -2,
                    r = {
                        reset: function() { x = n = -2 },
                        v: function() { e || (c = a(b), r.Aa(), e = !0) },
                        instance: function(q) {
                            var u = d++,
                                p = q.L ? q.L.length : 0,
                                y = "undefined" === typeof q.mode ? b.STATIC_DRAW : q.mode,
                                t = b.createBuffer();
                            b.bindBuffer(b.ARRAY_BUFFER, t);
                            b.bufferData(b.ARRAY_BUFFER, q.ea instanceof Float32Array ? q.ea : new Float32Array(q.ea), y);
                            n = u;
                            var m = null,
                                z = null,
                                F = null;
                            if (q.L) {
                                m = b.createBuffer();
                                b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, m);
                                var h = null;
                                65536 >
                                    q.L.length ? (h = Uint16Array, z = b.UNSIGNED_SHORT, F = 2) : (h = Uint32Array, z = b.UNSIGNED_INT, F = 4);
                                h = q.L instanceof h ? q.L : new h(q.L);
                                b.bufferData(b.ELEMENT_ARRAY_BUFFER, h, y);
                                x = u
                            }
                            var M = {
                                xe: function(H) {
                                    n !== u && (b.bindBuffer(b.ARRAY_BUFFER, t), n = u);
                                    H && za.Gc()
                                },
                                ue: function() { x !== u && (b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, m), x = u) },
                                bind: function(H) {
                                    M.xe(H);
                                    M.ue()
                                },
                                Cg: function() { b.drawElements(b.TRIANGLES, p, z, 0) },
                                Dg: function(H, k) { b.drawElements(b.TRIANGLES, H, z, k * F) },
                                remove: function() {
                                    b.deleteBuffer(t);
                                    q.L && b.deleteBuffer(m);
                                    M = null
                                }
                            };
                            l.push(M);
                            return M
                        },
                        Aa: function() {-1 !== n && (b.bindBuffer(b.ARRAY_BUFFER, c.ea), n = -1); - 1 !== x && (b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, c.L), x = -1) },
                        l: function(q, u) {
                            q && oa.Aa();
                            u && za.Fa();
                            b.drawElements(b.TRIANGLES, 3, b.UNSIGNED_SHORT, 0)
                        },
                        ib: function(q) {
                            q = q || b;
                            var u = a(q);
                            q.bindBuffer(q.ARRAY_BUFFER, u.ea);
                            q.bindBuffer(q.ELEMENT_ARRAY_BUFFER, u.L);
                            za.Db(q);
                            q.clear(q.COLOR_BUFFER_BIT);
                            q.drawElements(q.TRIANGLES, 3, q.UNSIGNED_SHORT, 0);
                            q.flush();
                            q.bindBuffer(q.ARRAY_BUFFER, null);
                            q.bindBuffer(q.ELEMENT_ARRAY_BUFFER,
                                null);
                            q.deleteBuffer(u.ea);
                            q.deleteBuffer(u.L);
                            r.reset();
                            e && (r.Aa(), za.Fa())
                        },
                        rd: function() {
                            var q = b,
                                u = c;
                            q.deleteBuffer(u.ea);
                            q.deleteBuffer(u.L)
                        },
                        m: function() {
                            r.rd();
                            l.forEach(function(q) { q.remove() });
                            b.bindBuffer(b.ARRAY_BUFFER, null);
                            b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, null);
                            r.reset();
                            e = !1;
                            l.splice(0);
                            d = 0
                        }
                    };
                return r
            }(),
            na = function() {
                var a = null,
                    c = null,
                    d = null,
                    e = !1,
                    l = [],
                    n = { K: -2, pd: 1 },
                    x = {
                        rb: function() { return e },
                        v: function() {
                            if (!e) {
                                a = b.createFramebuffer();
                                var r = aa.ka();
                                c = r && b.DRAW_FRAMEBUFFER ? b.DRAW_FRAMEBUFFER :
                                    b.FRAMEBUFFER;
                                d = r && b.READ_FRAMEBUFFER ? b.READ_FRAMEBUFFER : b.FRAMEBUFFER;
                                e = !0
                            }
                        },
                        ah: function() { return c },
                        af: function() { return d },
                        lb: function() { return b.FRAMEBUFFER },
                        jh: function() { return n },
                        Ug: function() { return a },
                        instance: function(r) {
                            void 0 === r.Bd && (r.Bd = !1);
                            var q = r.D ? r.D : null,
                                u = r.width,
                                p = void 0 !== r.height ? r.height : r.width,
                                y = a,
                                t = null,
                                m = !1,
                                z = !1,
                                F = 0;
                            q && (u = u ? u : q.F(), p = p ? p : q.X());
                            var h = {
                                be: function() { m || (y = b.createFramebuffer(), m = !0, F = n.pd++) },
                                qe: function() {
                                    h.be();
                                    h.o();
                                    t = b.createRenderbuffer();
                                    b.bindRenderbuffer(b.RENDERBUFFER,
                                        t);
                                    b.renderbufferStorage(b.RENDERBUFFER, b.DEPTH_COMPONENT16, u, p);
                                    b.framebufferRenderbuffer(c, b.DEPTH_ATTACHMENT, b.RENDERBUFFER, t);
                                    b.clearDepth(1)
                                },
                                bind: function(M, H) {
                                    F !== n.K && (b.bindFramebuffer(c, y), n.K = F);
                                    q && q.o();
                                    H && b.viewport(0, 0, u, p);
                                    M && b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT)
                                },
                                lg: function() { F !== n.K && (b.bindFramebuffer(c, y), n.K = F) },
                                clear: function() { b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT) },
                                ug: function() { b.clear(b.COLOR_BUFFER_BIT) },
                                vg: function() { b.clear(b.DEPTH_BUFFER_BIT) },
                                Wf: function() {
                                    b.viewport(0,
                                        0, u, p)
                                },
                                o: function() { F !== n.K && (b.bindFramebuffer(c, y), n.K = F) },
                                rtt: function(M) {
                                    q = M;
                                    n.K !== F && (b.bindFramebuffer(b.FRAMEBUFFER, y), n.K = F);
                                    M.o()
                                },
                                P: function() {
                                    b.bindFramebuffer(c, null);
                                    n.K = -1
                                },
                                resize: function(M, H) {
                                    u = M;
                                    p = H;
                                    t && (b.bindRenderbuffer(b.RENDERBUFFER, t), b.renderbufferStorage(b.RENDERBUFFER, b.DEPTH_COMPONENT16, u, p))
                                },
                                remove: function() {
                                    y === a || z || (b.bindFramebuffer(c, y), b.framebufferTexture2D(c, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, null, 0), t && b.framebufferRenderbuffer(c, b.DEPTH_ATTACHMENT, b.RENDERBUFFER,
                                        null), b.bindFramebuffer(c, null), b.deleteFramebuffer(y), t && b.deleteRenderbuffer(t));
                                    z = !0
                                }
                            };
                            r.Bd && h.qe();
                            l.push(h);
                            return h
                        },
                        P: function() {
                            b.bindFramebuffer(c, null);
                            n.K = -1
                        },
                        fg: function() {
                            b.bindFramebuffer(c, null);
                            b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT);
                            aa.fe();
                            n.K = -1
                        },
                        reset: function() { n.K = -2 },
                        fa: function() { 0 !== n.K && (b.bindFramebuffer(c, a), n.K = 0) },
                        clear: function() {
                            aa.fe();
                            b.clear(b.COLOR_BUFFER_BIT)
                        },
                        m: function() {
                            x.P();
                            l.forEach(function(r) { r.remove() });
                            null !== a && (b.deleteFramebuffer(a), a = null);
                            x.reset();
                            e = !1;
                            l.splice(0);
                            n.pd = 1
                        }
                    };
                return x
            }(),
            aa = function() {
                function a() {
                    r = "undefined" === typeof Ka ? JEContext : Ka;
                    q = !0
                }

                function c(k, J) { for (var v = 0; v < k.length; ++v) { var L = J.getExtension(k[v]); if (L) return L } return null }

                function d() {
                    null !== h.Hb && (clearTimeout(h.Hb), h.Hb = null);
                    h.Ca = !1
                }

                function e(k) {
                    if (0 === h.ua.length) {
                        h.Y = b.PIXEL_PACK_BUFFER;
                        h.ua.splice(0);
                        h.mb.splice(0);
                        for (var J = 0; J < h.Pa; ++J) h.ua.push(b.createBuffer()), h.mb.push(-1);
                        h.ga = 0;
                        h.wc = 0
                    }
                    b.bindBuffer(h.Y, h.ua[h.ga]);
                    k.byteLength !== h.mb[h.ga] &&
                        (b.bufferData(h.Y, k.byteLength, b.STREAM_READ), h.mb[h.ga] = k.byteLength);
                    h.qh = !0
                }

                function l() { b.bindBuffer(h.Y, null) }

                function n() {
                    h.Ba.forEach(function(k) { b.deleteSync(k) });
                    h.Ba.splice(0)
                }

                function x() { h.ga = (h.ga + 1) % h.Pa;++h.wc }
                var r = null,
                    q = !1,
                    u = { Fd: !1, Jc: null, Kc: null, Id: !1, uf: !1, Lc: null, Jd: !1, Mc: null, Gd: !1, Ob: null, mf: !1, Pb: null, pf: !1 },
                    p = null,
                    y = { ha: !0, ja: !0, Yb: !0, Ud: !1 },
                    t = null,
                    m = !0,
                    z = null,
                    F = null,
                    h = { Fe: 1, Pa: -1, ga: 0, wc: 0, Ca: !1, ua: [], Ba: [], mb: [], Y: null, Hb: null },
                    M = "undefined" === typeof window ? {} : window,
                    H = {
                        v: function() {
                            if (q) return !0;
                            H.reset();
                            q || a();
                            var k = b;
                            if (!p.Fd) {
                                p.Jc = H.md(k);
                                M.GL_EXT_FLOAT = p.Jc;
                                p.Id = p.Jc ? !0 : !1;
                                if (p.Id || H.ka()) p.Kc = H.nd(k), p.uf = p.Kc ? !0 : !1, M.GL_EXT_FLOATLINEAR = p.Kc;
                                p.Fd = !0
                            }
                            if (!p.Gd) {
                                p.Lc = H.gb(k);
                                p.Lc && (p.Jd = !0, M.GL_EXT_HALFFLOAT = p.Lc);
                                if (p.Jd || H.ka()) p.Mc = H.od(k), M.GL_EXT_HALFFLOATLINEAR = p.Mc;
                                p.rh = p.Mc ? !0 : !1;
                                p.Gd = !0
                            }
                            p.Ob = H.kd(k);
                            p.mf = p.Ob ? !0 : !1;
                            M.GL_EXT_COLORBUFFERFLOAT = p.Ob;
                            p.Pb = H.ld(k);
                            p.pf = p.Pb ? !0 : !1;
                            M.GL_EXT_COLORBUFFERHALFFLOAT = p.Pb;
                            na.v();
                            Fa.v();
                            if (!H.Ie()) return !1;
                            oa.v();
                            Fa.lf();
                            return !0
                        },
                        reset: function() {
                            p = Object.assign({}, u);
                            t = Object.assign({}, y)
                        },
                        F: function() { q || a(); return r.F() },
                        X: function() { q || a(); return r.X() },
                        ka: function() { q || a(); return r.ka() },
                        jd: function(k) {
                            H.kd(k);
                            H.ld(k);
                            H.md(k);
                            H.nd(k);
                            H.gb(k);
                            H.od(k)
                        },
                        kd: c.bind(null, ["EXT_color_buffer_float", "WEBGL_color_buffer_float", "OES_color_buffer_float"]),
                        ld: c.bind(null, ["EXT_color_buffer_half_float", "WEBGL_color_buffer_half_float", "OES_color_buffer_half_float"]),
                        md: c.bind(null, ["OES_texture_float", "MOZ_OES_texture_float",
                            "WEBKIT_OES_texture_float"
                        ]),
                        nd: c.bind(null, ["OES_texture_float_linear", "MOZ_OES_texture_float_linear", "WEBKIT_OES_texture_float_linear"]),
                        gb: c.bind(null, ["OES_texture_half_float", "MOZ_OES_texture_half_float", "WEBKIT_OES_texture_half_float"]),
                        od: c.bind(null, ["OES_texture_half_float_linear", "MOZ_OES_texture_half_float_linear", "WEBKIT_OES_texture_half_float_linear"]),
                        ac: function(k) { var J = H.gb(k); return J && J.HALF_FLOAT_OES ? J.HALF_FLOAT_OES : k.HALF_FLOAT || k.FLOAT },
                        Ye: function() { return F || b.RGBA32F || b.RGBA },
                        Ze: function() { return z || b.RGBA16F || b.RGBA },
                        Ue: function() { return t },
                        Yc: function() { return t.ha },
                        qg: function() { return t.ja },
                        pg: function() { return t.Yb },
                        ze: function() { return t.Ud && m },
                        ke: function(k) { m = k;!k && h.Ca && (n(), b.bindBuffer(h.Y, null), h.Ca = !1) },
                        xh: function() { return h.Ca },
                        Fb: function(k, J, v) {
                            function L() {
                                k.bindTexture(k.TEXTURE_2D, null);
                                k.bindFramebuffer(N, null);
                                k.deleteTexture(A);
                                k.deleteFramebuffer(f)
                            }
                            var N = k.FRAMEBUFFER,
                                w = k.NEAREST,
                                f = k.createFramebuffer();
                            k.bindFramebuffer(N, f);
                            var A = k.createTexture();
                            k.activeTexture(k.TEXTURE0);
                            k.bindTexture(k.TEXTURE_2D, A);
                            k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL, !1);
                            k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_S, k.CLAMP_TO_EDGE);
                            k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_T, k.CLAMP_TO_EDGE);
                            k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MAG_FILTER, w);
                            k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MIN_FILTER, w);
                            k.texImage2D(k.TEXTURE_2D, 0, J, 3, 3, 0, k.RGBA, v, null);
                            k.framebufferTexture2D(k.FRAMEBUFFER, k.COLOR_ATTACHMENT0, k.TEXTURE_2D, A, 0);
                            if (k.checkFramebufferStatus(k.READ_FRAMEBUFFER ||
                                    k.FRAMEBUFFER) !== k.FRAMEBUFFER_COMPLETE) return L(), !1;
                            za.Fc(k);
                            k.clearColor(0, 0, 0, 0);
                            k.viewport(0, 0, 3, 3);
                            k.disable(k.DEPTH_TEST);
                            k.clear(k.COLOR_BUFFER_BIT);
                            oa.ib(k);
                            k.bindFramebuffer(N, null);
                            za.Wa(k);
                            k.activeTexture(k.TEXTURE0);
                            k.bindTexture(k.TEXTURE_2D, A);
                            oa.ib(k);
                            J = new Uint8Array(36);
                            k.readPixels(0, 0, 3, 3, k.RGBA, k.UNSIGNED_BYTE, J);
                            L();
                            for (v = 0; 36 > v; ++v)
                                if (3 !== v % 4 && 3 < Math.abs(J[v] - 127)) return !1;
                            return !0
                        },
                        Rb: function(k) {
                            var J = { ha: !1, ja: !1 };
                            k.disable(k.BLEND);
                            k.clearColor(0, 0, 0, 0);
                            k.clear(k.COLOR_BUFFER_BIT);
                            k.RGBA32F && H.Fb(k, k.RGBA32F, k.FLOAT) && (J.ha = !0, F = k.RGBA32F);
                            !J.ha && H.Fb(k, k.RGBA, k.FLOAT) && (J.ha = !0, F = k.RGBA);
                            var v = H.ac(k);
                            z = null;
                            k.RGBA16F && H.Fb(k, k.RGBA16F, v) && (J.ja = !0, z = k.RGBA16F);
                            !J.ja && H.Fb(k, k.RGBA, v) && (J.ja = !0, z = k.RGBA);
                            return J
                        },
                        Je: function() {
                            var k = na.instance({ width: 2 });
                            k.be();
                            var J = Fa.instance({ width: 2, isFloat: !0, wb: 3 });
                            k.o();
                            J.o();
                            H.flush();
                            b.checkFramebufferStatus(na.af()) !== b.FRAMEBUFFER_COMPLETE ? (Fa.Qf(), t.Yb = !1) : t.Yb = !0;
                            k.remove();
                            J.remove()
                        },
                        Ke: function() {
                            var k = !1;
                            H.ka() && (k = "PIXEL_PACK_BUFFER STREAM_READ SYNC_GPU_COMMANDS_COMPLETE WAIT_FAILED fenceSync deleteSync createBuffer".split(" ").every(function(J) {
                                return "undefined" !==
                                    typeof b[J]
                            }));
                            t.Ud = k
                        },
                        Ie: function() {
                            var k = H.Rb(b);
                            Object.assign(t, k);
                            if (!t.ha && !t.ja) return !1;
                            H.Je();
                            H.Ke();
                            return !0
                        },
                        Wd: function(k, J, v, L, N) { b.readPixels(k, J, v, L, b.RGBA, b.UNSIGNED_BYTE, N); return Promise.resolve(N, !1) },
                        Bb: function(k, J, v, L, N, w, f) {
                            if (!H.ze()) return H.Wd(k, J, v, L, N);
                            h.Pa = f || h.Fe;
                            e(N);
                            b.readPixels(k, J, v, L, b.RGBA, b.UNSIGNED_BYTE, 0);
                            h.Ba[h.ga] = b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE, 0);
                            H.flush();
                            var A = !1;
                            return new Promise(function(I, g) {
                                function E() {
                                    if (!h.Ca) return d(), l(), x(), g(), !1;
                                    var K =
                                        (h.ga + 1) % h.Pa;
                                    switch (b.clientWaitSync(h.Ba[K], 0, 0)) {
                                        case b.TIMEOUT_EXPIRED:
                                        case b.WAIT_FAILED:
                                            break;
                                        default:
                                            return d(), b.deleteSync(h.Ba[K]), h.Ba[K] = null, b.bindBuffer(h.Y, h.ua[K]), b.getBufferSubData(h.Y, 0, N), l(), x(), I(N, A), !0
                                    }
                                    h.Hb = setTimeout(E, 0);
                                    return !1
                                }
                                d();
                                h.wc + 1 < h.Pa ? (l(), x(), I(N, !1)) : (h.Ca = !0, E() || !w || A || (A = !0, w()))
                            })
                        },
                        fe: function() { b.viewport(0, 0, H.F(), H.X()) },
                        flush: function() { b.flush() },
                        m: function() {
                            d();
                            n();
                            Fa.m();
                            na.m();
                            oa.m();
                            h.ua.forEach(function(k) { b.deleteBuffer(k) });
                            h.ua.splice(0);
                            za.reset();
                            q = !1
                        }
                    };
                return H
            }(),
            U = oa,
            ya = na,
            Y = Fa,
            Ha = function() {
                function a(v, L, N, w) {
                    h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, w ? h.NEAREST_MIPMAP_NEAREST : h.LINEAR);
                    var f = null;
                    if (null !== N) try {
                        f = h.getError();
                        if ("FUCKING_BIG_ERROR" === f) return !1;
                        h.texImage2D(h.TEXTURE_2D, 0, v, 4, 4, 0, h.RGBA, L, N);
                        f = h.getError();
                        if (f !== h.NO_ERROR) return !1
                    } catch (A) { return !1 }
                    w && h.generateMipmap(h.TEXTURE_2D);
                    h.clear(h.COLOR_BUFFER_BIT);
                    U.ib(h);
                    f = h.getError();
                    if ("FUCKING_BIG_ERROR" === f) return !1;
                    h.readPixels(0, 0, 2, 2, h.RGBA, h.UNSIGNED_BYTE,
                        p);
                    f = h.getError();
                    f === h.INVALID_OPERATION && "undefined" !== typeof h.PIXEL_PACK_BUFFER && (h.bindBuffer(h.PIXEL_PACK_BUFFER, null), h.readPixels(0, 0, 2, 2, h.RGBA, h.UNSIGNED_BYTE, p), f = h.getError());
                    if (f !== h.NO_ERROR) return !1;
                    N = !0;
                    for (w = 0; 16 > w; ++w) N = N && 4 > Math.abs(p[w] - 127);
                    N && (q.Sd = L, q.Ad = v);
                    return N
                }

                function c(v, L) { return M.ha && a(v, h.FLOAT, new Float32Array(y), L) ? (r = x.Sc, !0) : !1 }

                function d(v, L, N) {
                    if (!M.ja) return !1;
                    var w = Fa.Ee(y),
                        f = aa.gb(h);
                    if (f && f.HALF_FLOAT_OES && a(v, f.HALF_FLOAT_OES, w, L) || h.HALF_FLOAT && a(v,
                            h.HALF_FLOAT, w, L)) return r = x.Ja, !0;
                    w = new Float32Array(y);
                    if (a(v, h.FLOAT, w, L)) return r = x.Ja, !0;
                    h.bindTexture(h.TEXTURE_2D, N);
                    h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, 2, 2, 0, h.RGBA, h.UNSIGNED_BYTE, null);
                    h.bindFramebuffer(q.cb, J);
                    Fa.qd(h, N, 2, 2, w, !1, !1);
                    h.bindFramebuffer(q.cb, null);
                    h.bindTexture(h.TEXTURE_2D, N);
                    return a(v, null, null, L) ? (r = x.Ja, !0) : !1
                }

                function e(v, L, N) {
                    u = !0;
                    if (d(v, !0, N) || c(L, !0)) return !0;
                    u = !1;
                    return d(v, !1, N) || c(L, !1) ? !0 : !1
                }

                function l(v) {
                    if (r === x.M) {
                        h = v || b;
                        r = x.RGBA8;
                        u = !0;
                        aa.jd(h);
                        M || (M = aa.Rb(h));
                        ya.reset();
                        J = h.createFramebuffer();
                        q.cb = h.DRAW_FRAMEBUFFER || h.FRAMEBUFFER;
                        h.bindFramebuffer(q.cb, null);
                        h.clearColor(0, 0, 0, 0);
                        h.viewport(0, 0, 2, 2);
                        D.M();
                        H = D.Wa(h);
                        v = h.createTexture();
                        h.activeTexture(h.TEXTURE0);
                        h.bindTexture(h.TEXTURE_2D, v);
                        h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.REPEAT);
                        h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.REPEAT);
                        h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, h.NEAREST);
                        k = v;
                        var L = v = h.RGBA,
                            N = h.RGBA16F,
                            w = h.RGBA32F;
                        w && (v = w);
                        N && (L = N);
                        if ((N || w) && e(L, v, k)) return n(), !0;
                        v = L = h.RGBA;
                        if (e(L, v, k)) return n(), !0;
                        r = x.RGBA8;
                        n();
                        return !1
                    }
                }

                function n() {
                    h.deleteProgram(H.ya);
                    h.deleteTexture(k);
                    k = H = null
                }
                for (var x = { M: -1, Sc: 3, Ja: 2, RGBA8: 0 }, r = x.M, q = { Sd: null, Ad: null, cb: null }, u = !0, p = new Uint8Array(16), y = Array(64), t = 0; 4 > t; ++t)
                    for (var m = 0; 4 > m; ++m) {
                        var z = 0 === (m + t) % 2 ? 1 : 0,
                            F = 4 * t + m;
                        y[4 * F] = z;
                        y[4 * F + 1] = z;
                        y[4 * F + 2] = z;
                        y[4 * F + 3] = z
                    }
                var h = null,
                    M = null,
                    H = null,
                    k = null,
                    J = null;
                return {
                    ye: function(v) { l(v); return u },
                    Xc: function(v, L) { r === x.M && (typeof("undefined" !== L) && (M = L), l(v)); return r !== x.RGBA8 },
                    uh: function(v) {
                        l(v);
                        return r === x.Sc
                    },
                    vf: function(v) { l(v); return r === x.Ja },
                    bh: function(v) { l(v); return q.Sd },
                    $e: function(v) { l(v); return q.Ad },
                    m: function() {
                        h = null;
                        u = !0;
                        r = x.M;
                        M = null
                    }
                }
            }(),
            $b = function() {
                return {
                    instance: function(a) {
                        var c = Y.instance(a.alpha),
                            d = Y.instance(a.beta);
                        return {
                            Me: function() {
                                c.g(1);
                                d.g(2)
                            }
                        }
                    }
                }
            }(),
            Pb = function() {
                return {
                    instance: function(a) {
                        var c = null,
                            d = !1,
                            e = !1,
                            l = null,
                            n = !1,
                            x = !1,
                            r = null,
                            q = "undefined" === typeof a.preprocessing ? !1 : a.preprocessing,
                            u = "undefined" === typeof a.preprocessingSize ? a.size : a.preprocessingSize;
                        a.mask && (d = !0, pa && void 0 !== pa.te && (a.mask = pa.te + a.mask), c = Y.instance({ isFloat: !1, url: a.mask }));
                        var p = !1;
                        a.customInputShader && (p = "s45", D.Uc({ name: "_", id: p, h: a.customInputShader, Xh: ["uSource"], precision: "lowp" }), D.N(p, [{ type: "1i", name: "_", value: 0 }]));
                        switch (q) {
                            case "sobel":
                                r = "s32";
                                n = !0;
                                break;
                            case "meanNormalization":
                                r = "s33";
                                n = !0;
                                break;
                            case "grayScale":
                                r = "s29";
                                n = !1;
                                break;
                            case "grayScaleTilt":
                                r = "s30";
                                x = !0;
                                n = !1;
                                break;
                            case "rgbGrayTilt":
                                r = "s31";
                                x = !0;
                                n = !1;
                                break;
                            case "copy":
                                r = p ? p : "s0";
                                break;
                            case "inputLightRegulation":
                                r =
                                    p ? p : "s29";
                                l = ac.instance({ zd: u, Rd: a.size, Pd: a.nBlurPass, qb: !1 });
                                e = !0;
                                break;
                            case "inputMix0":
                                r = "none";
                                l = bc.instance({ B: u, oe: a.varianceMin, Wc: a.blurKernelSizePx, gain: a.gain || 1, qb: !1 });
                                e = !0;
                                break;
                            case "direct":
                            case "none":
                                r = "abort";
                                break;
                            default:
                                r = "s4"
                        }
                        x && D.N(r, [{ name: "u27", type: "1f", value: a.tilt }]);
                        d && (r += "Mask");
                        var y = Y.instance({ isFloat: !1, isPot: !1, width: a.size }),
                            t = {
                                F: function() { return u },
                                bc: function() { return t.F() },
                                ef: function() { return e ? l.cc() : y },
                                U: function(m) {
                                    ya.fa();
                                    "abort" !== r && ("none" !== r && (D.set(r),
                                        n && D.H("u28", 1 / a.size), y.aa(), d && c.g(1), U.l(!1, !1), y.g(0), m = y), e && l.process(m))
                                },
                                m: function() {
                                    y.remove();
                                    d && c.remove()
                                }
                            };
                        return t
                    }
                }
            }(),
            Qb = function() {
                return {
                    instance: function(a) {
                        function c(g) {
                            l.forEach(function(E, K) {
                                n[K][0] = g[0][E];
                                n[K][1] = g[1][E];
                                n[K][2] = g[2][E];
                                n[K][3] = g[3][E]
                            });
                            return n
                        }
                        a.normalize = a.normalize || !1;
                        var d = { input: null, bias: null, hc: null, $: null, xb: null, Ac: null, Bc: null },
                            e = null,
                            l = [],
                            n = [],
                            x = !1,
                            r = null,
                            q = !0,
                            u = -1,
                            p = a.isReorganize ? a.isReorganize : !1,
                            y = a.kernelsCount ? !0 : !1,
                            t = a.dynPelu ? $b.instance(a.dynPelu) :
                            !1,
                            m = t ? !0 : !1,
                            z = { isEnabled: !1 };
                        a.sf ? (a.sparsity = "undefined" !== typeof a.sparsity ? a.sparsity : a.zb.bc(), q = !1) : "full" === a.connectivityUp && (a.sparsity = a.zb.bc());
                        var F = { elu: "s16", elu01: "s17", relu: "s15", arctan: "s19", sigmoid: "s14", copy: "s0", softplus: "s20", dynPelu: "s18" }[a.activation],
                            h = a.sparsity * a.sparsity,
                            M = !1,
                            H = a.size,
                            k = "";
                        if (a.maxPooling) {
                            switch (a.maxPooling.size) {
                                case 2:
                                    k = "s34";
                                    break;
                                case 4:
                                    k = "s35"
                            }
                            M = !0;
                            H /= a.maxPooling.size;
                            d.Ac = Y.instance({ isFloat: !0, isPot: !1, width: H })
                        }
                        var J = a.normalization ? !0 : !1,
                            v =
                            null,
                            L = null,
                            N = null;
                        if (J) {
                            v = "s46" + a.index.toString();
                            D.yd("s46", v, [((a.normalization.n - 1) / 2).toFixed(1)]);
                            D.N(v, [{ type: "1i", name: "u1", value: 0 }, { type: "2f", name: "u8", value: [1 / a.size, 1 / a.size] }, { type: "1f", name: "u7", value: a.normalization.alpha }, { type: "1f", name: "u10", value: a.normalization.beta }, { type: "1f", name: "u31", value: a.normalization.k }]);
                            var w = { isFloat: !0, isPot: !0, width: a.size };
                            L = Y.instance(w);
                            N = Y.instance(w)
                        }
                        var f = -1,
                            A = null;
                        q && (d.$ = Y.instance({ isFloat: !0, isPot: !1, width: a.size }));
                        d.bias = Y.instance(a.bias);
                        var I = {
                            F: function() { return a.size },
                            bc: function() { return H },
                            sd: function() { return a.classesCount },
                            ve: function(g) { e.g(g) },
                            Gf: function() { a.remap && a.remap.isEnabled && (z = { isEnabled: !0, zf: Y.instance({ isFloat: !1, isFlipY: !1, array: new Uint8Array(a.remap.maskTexture.data), width: a.remap.maskTexture.width, isPot: !1 }), tb: a.remap.layers.map(function(g) { return a.parent.cf(g) }), depth: a.remap.depth }) },
                            Rf: function() {
                                switch (a.connectivityUp) {
                                    case "direct":
                                        A = cc.instance(a.connectivity);
                                        break;
                                    case "square":
                                        A = dc.instance(a.connectivity);
                                        break;
                                    case "squareFast":
                                        A = ec.instance(a.connectivity, a.activation);
                                        break;
                                    case "full":
                                        A = fc.instance(a.connectivity);
                                        break;
                                    case "conv":
                                        u = a.kernelsCount, A = gc.instance(a.connectivity), p && (d.xb = Y.instance({ width: H, isFloat: !0, isFlipY: !1, isPot: !1 }))
                                }
                                if (A.Ga) {
                                    var g = a.size * a.sparsity;
                                    f = Math.log(g / a.size) / Math.log(2);
                                    d.input = Y.instance({ isMipmap: !0, isFloat: !0, isPot: !0, width: g, rc: f });
                                    d.hc = Y.instance({ isFloat: !0, isPot: !0, width: a.size })
                                }
                            },
                            U: function(g, E) {
                                e = g;
                                A.Ga ? (d.input.aa(), y && d.bias.g(2), A.U(z), d.input.g(0),
                                    d.input.Re(f), d.hc.aa(), y ? D.set("s0") : (D.set("s28"), D.H("u26", h), d.bias.g(1)), d.input.we(f, 0), U.l(!1, !1), D.set(F), J ? L.o() : d.$.o(), d.hc.g(0), m && t.Me(), U.l(!1, !1)) : (d.$.aa(), d.bias.g(1), A.U());
                                J && (D.set(v), N.o(), L.g(0), U.l(!1, !1), D.set("s47"), D.H("u7", 1), d.$.o(), N.g(1), U.l(!1, !1));
                                if (q) return M ? (d.Ac.aa(), d.$.g(0), D.set(k), D.ba("u8", 1 / a.size, 1 / a.size), U.l(!1, !1), E = d.Ac) : E = d.$, E.g(0), p && (d.xb.o(), D.set("s22"), D.ba("u13", u, H / u), U.l(!1, !1), E = d.xb, d.xb.g(0)), E;
                                var K = d.$;
                                a.normalize && (D.set("gpuRawAvg" ===
                                    x ? "s9" : "s8"), D.H("u4", 1 / a.size), d.Bc.aa(), d.$.g(0), U.l(!1, !1), K = d.Bc);
                                g = null;
                                switch (x) {
                                    case "cpuRGBA2Float":
                                        K.fd(!1);
                                        E ? g = I.Hf(K).then(r) : (K = I.If(K), r(K));
                                        break;
                                    case "cpuMeanFloat":
                                        K.fd(!0);
                                        if (E) g = K.Kf().then(r);
                                        else {
                                            K = K.Lf();
                                            for (var O = 0; O < K.length; ++O);
                                            r(K)
                                        }
                                        break;
                                    case "gpuRawAvg":
                                    case "gpuRaw":
                                        K.g(0);
                                    case "none":
                                        null !== r && r(K)
                                }
                                E && null === g && (g = Promise.resolve());
                                return g
                            },
                            He: function(g) {
                                g && (x = g.Cc || "none", r = g.zc || null);
                                d.$ = Y.instance({ isFloat: !0, isPot: !0, isMipmap: !1, width: a.size });
                                g = "undefined" !==
                                    typeof a.classesCount && a.classesCount ? a.classesCount : a.size * a.size;
                                for (var E = 0, K = 0, O = 0; E < g; ++E) l.push(K + (a.size - 1 - O) * a.size), n.push([-1, -1, -1, -1]), ++K, K === a.size && (K = 0, ++O);
                                a.normalize && (d.Bc = Y.instance({ isFloat: !0, isPot: !0, width: a.size }))
                            },
                            Hf: function(g) { return g.Jf().then(c) },
                            If: function(g) {
                                g = g.Vd();
                                c(g);
                                return n
                            },
                            m: function() {
                                for (var g in d) {
                                    var E = d[g];
                                    E && E.remove()
                                }
                                A && (A.m(), A = null)
                            }
                        };
                        a.zb && I.Rf(a.zb);
                        return I
                    }
                }
            }(),
            cc = function() {
                return {
                    instance: function(a) {
                        var c = Y.instance(a.weights);
                        return {
                            Ga: !0,
                            kb: function() { return 1 },
                            m: function() { c.remove() },
                            jf: function() { return c },
                            U: function() {
                                D.set("s27");
                                c.g(1);
                                U.l(!1, !1)
                            }
                        }
                    }
                }
            }(),
            fc = function() {
                return {
                    instance: function(a) {
                        var c = a.fromLayerSize,
                            d = Y.instance(a.weights);
                        return {
                            Ga: !0,
                            kb: function() { return c },
                            m: function() { d.remove() },
                            U: function(e) {
                                if (e.isEnabled) {
                                    D.set("s25");
                                    e.zf.g(3);
                                    var l, n = Math.min(e.tb.length, e.depth);
                                    for (l = 0; l < n; ++l) e.tb[l].ve(4 + l)
                                } else D.set("s24");
                                D.H("u17", a.toLayerSize);
                                D.H("u18", a.fromLayerSize);
                                d.g(1);
                                U.l(!1, !1)
                            }
                        }
                    }
                }
            }(),
            dc = function() {
                return {
                    instance: function(a) {
                        for (var c =
                                a.fromLayerSize, d = a.toLayerSize, e = a.toSparsity, l = e * d, n = l / c, x = c / d, r = 0, q = 0, u = 0, p = Array(e * d * e * d * 4), y = Array(e * d * e * d * 4), t = Array(c * c), m = 0; m < t.length; ++m) t[m] = 0;
                        m = Math.floor(e / 2);
                        for (var z = .5 / d, F = .5 / c, h = .5 / l, M = 0; M < d; ++M)
                            for (var H = Math.round(M * x), k = 0; k < d; ++k) {
                                var J = Math.round(k * x),
                                    v = M / d,
                                    L = k / d;
                                v += z;
                                L += z;
                                for (var N = 0; N < e; ++N) {
                                    var w = H + N - m;
                                    0 > w && (w += c);
                                    w >= c && (w -= c);
                                    for (var f = 0; f < e; ++f) {
                                        var A = r / l,
                                            I = q / l,
                                            g = J + f - m;
                                        0 > g && (g += c);
                                        g >= c && (g -= c);
                                        var E = w / c,
                                            K = g / c;
                                        I = 1 - I - 1 / l;
                                        E += F;
                                        K += F;
                                        A += h;
                                        I += h;
                                        var O = M * e + N,
                                            Z = k * e + f;
                                        Z = d * e - Z - 1;
                                        O =
                                            Z * d * e + O;
                                        p[4 * O] = A;
                                        p[4 * O + 1] = I;
                                        p[4 * O + 2] = E;
                                        p[4 * O + 3] = K;
                                        K = t[g * c + w]++;
                                        O = K % n;
                                        E = w * n + O;
                                        g = g * n + (K - O) / n;
                                        g = c * n - 1 - g;
                                        g = g * c * n + E;
                                        y[4 * g] = A;
                                        y[4 * g + 1] = I;
                                        y[4 * g + 2] = v;
                                        y[4 * g + 3] = L;
                                        ++r >= l && (r = 0, ++q);
                                        ++u
                                    }
                                }
                            }
                        t = null;
                        var qa = Y.instance(a.weights);
                        delete a.weights.data;
                        var va = Y.instance({ width: l, isFloat: !0, array: new Float32Array(y), isPot: !0 });
                        y = null;
                        var Ia = Y.instance({ width: l, isFloat: !0, array: new Float32Array(p), isPot: !0 });
                        p = null;
                        return {
                            Ga: !0,
                            kb: function() { return n },
                            m: function() {
                                va.remove();
                                Ia.remove();
                                qa.remove()
                            },
                            U: function() {
                                D.set("s23");
                                qa.g(1);
                                Ia.g(2);
                                U.l(!1, !1)
                            }
                        }
                    }
                }
            }(),
            gc = function() {
                return {
                    instance: function(a) {
                        var c = a.kernelsCount,
                            d = a.toSparsity,
                            e = d * a.toLayerSize / a.fromLayerSize,
                            l = Y.instance(a.weights);
                        return {
                            Ga: !0,
                            kb: function() { return e },
                            nh: function() { return d },
                            jf: function() { return l },
                            m: function() { l.remove() },
                            U: function() {
                                D.set("s26");
                                D.H("u24", c);
                                D.H("u25", d);
                                D.H("u17", a.toLayerSize);
                                D.H("u18", a.fromLayerSize);
                                l.g(1);
                                U.l(!1, !1)
                            }
                        }
                    }
                }
            }(),
            ec = function() {
                return {
                    instance: function(a, c) {
                        var d = a.fromLayerSize,
                            e = a.toLayerSize,
                            l = a.toSparsity,
                            n = a.stride ? a.stride : 1,
                            x = l * e / d,
                            r = e < d,
                            q = d / e,
                            u = Y.instance(a.weights),
                            p = "s48" + [d.toString(), e.toString(), l.toString(), n.toString(), c].join("_");
                        D.Qe(p) || (a = Yb.Se(c, "gl_FragColor", "gl_FragColor"), e = [{ type: "1f", name: "u17", value: e }, { type: "1f", name: "u30", value: n }], r && e.push({ type: "1f", name: "u18", value: d }), d = [(r ? x : l).toFixed(1), a], r && d.push(q.toFixed(1)), D.yd(r ? "s40" : "s39", p, d), D.N(p, e.concat([{ type: "1i", name: "u15", value: 0 }, { type: "1i", name: "u23", value: 1 }, { type: "1i", name: "u14", value: 3 }])));
                        return {
                            Ga: !1,
                            kb: function() { return x },
                            m: function() { u.remove() },
                            U: function() {
                                D.set(p);
                                u.g(3);
                                U.l(!1, !1)
                            }
                        }
                    }
                }
            }(),
            ac = function() {
                return {
                    instance: function(a) {
                        var c = a.Pd ? a.Pd : 3,
                            d = a.zd ? a.zd : 64,
                            e = a.Rd ? a.Rd : 64,
                            l = a.qb ? !0 : !1;
                        a = { isFloat: !1, width: d, isPot: !1, isFlipY: !1 };
                        var n = Y.instance(a),
                            x = Y.instance(a),
                            r = Y.instance(a),
                            q = Y.instance(a),
                            u = Y.instance({ isFloat: !0, width: e, isPot: !1, isFlipY: !1 }),
                            p = 1 / d;
                        return {
                            process: function(y) {
                                D.set("s36");
                                q.o();
                                U.l(l, !1);
                                D.set("s37");
                                for (var t = 0; t < c; ++t) n.o(), D.ba("u8", p, 0), U.l(l, !1), r.o(), q.g(0), U.l(l, !1), x.o(), n.g(0),
                                    D.ba("u8", 0, p), U.l(l, !1), q.o(), r.g(0), U.l(l, !1), t !== c - 1 && x.g(0);
                                D.set("s38");
                                u.o();
                                y.g(0);
                                x.g(1);
                                q.g(2);
                                U.l(l, !1);
                                u.g(0)
                            },
                            cc: function() { return u }
                        }
                    }
                }
            }(),
            bc = function() {
                return {
                    instance: function(a) {
                        function c(p) { return Y.instance({ isFloat: p, width: d.B, isPot: !1, isFlipY: !1 }) }
                        var d = Object.assign({ oe: .1, Wc: 9, B: 128, gain: 1, qb: !1 }, a),
                            e = c(!1),
                            l = [c(!1), c(!1), c(!1)],
                            n = [c(!1), c(!1), c(!1)],
                            x = c(!0),
                            r = [e, n[0], n[1]];
                        a = "uniform sampler2D u1;const float e=1.1111,g=2.2222;uniform vec2 u32;varying vec2 vv0;void main(){float b=0.,c=0.;for(float a=-e;a<=e;a+=1.){vec2 i=u32*a,j=vv0+i*g;float d=1.2*a/e,f=exp(-d*d);b+=f*texture2D(u1,j).r,c+=f;}b/=c,gl_FragColor=vec4(b,0.,0.,1.);}".replace("1.1111",
                            Math.round((d.Wc - 1) / 2).toFixed(2)).replace("2.2222", (1 / d.B).toFixed(6));
                        var q = "uniform sampler2D u33,u34,u35,u36;const float f=1.1111;const vec3 g=vec3(1.,1.,1.);const float h=2.2222;varying vec2 vv0;void main(){vec3 a=texture2D(u33,vv0).rgb;float c=texture2D(u34,vv0).r,d=texture2D(u35,vv0).r,i=texture2D(u36,vv0).r,j=a.r*a.r;vec3 b=vec3(c,d,i),k=max(g*f,abs(j-b*b)),l=sqrt(k);gl_FragColor=vec4(a.r,h*(a-b)/l);}".replace("1.1111", d.oe.toFixed(4)).replace("2.2222", d.gain.toFixed(4)),
                            u = { u1: 0 };
                        D.Vc([{
                            id: "s50",
                            name: "_",
                            h: "uniform sampler2D u1;varying vec2 vv0;const vec3 f=vec3(.2126,.7152,.0722),g=vec3(1.,1.,1.);void main(){vec3 b=texture2D(u1,vv0).rgb;float a=dot(b,f);gl_FragColor=vec4(a,a,a,a);}",
                            j: u,
                            i: ["u1"],
                            precision: "lowp"
                        }, { id: "s51", name: "_", h: a, j: u, i: ["u1", "u32"], precision: "lowp" }, { id: "s52", name: "_", h: q, j: { u33: 0, u34: 1, u35: 2, u36: 3 }, i: ["u33", "u34", "u35", "u36"], precision: "highp" }]);
                        return {
                            process: function() {
                                D.set("s50");
                                e.aa();
                                U.l(d.qb, !1);
                                D.set("s51");
                                for (var p = 0; 3 > p; ++p) D.ba("u32", 1, 0), l[p].o(), r[p].g(0),
                                    U.l(!1, !1), D.ba("u32", 0, 1), n[p].o(), l[p].g(0), U.l(!1, !1);
                                D.set("s52");
                                x.o();
                                e.g(0);
                                n[0].g(1);
                                n[1].g(2);
                                n[2].g(3);
                                U.l(!1, !1);
                                x.g(0)
                            },
                            cc: function() { return x }
                        }
                    }
                }
            }(),
            W = {
                wd: function() { return W.cd() ? document.createElement("video") : !1 },
                Ra: function(a, c) {
                    a[c] = !0;
                    a.setAttribute(c, "true")
                },
                Ce: function() {
                    var a = !1,
                        c = navigator.userAgent || navigator.vendor || window.opera;
                    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(c) ||
                        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(c.substr(0,
                            4))) a = !0;
                    return a
                },
                $c: function() { return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream },
                Te: function() { var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/); return a && a.length && 2 < a.length ? [parseInt(a[1], 10), parseInt(a[2], 10), parseInt(a[3] || 0, 10)] : [0, 0, 0] },
                Md: function() { try { return window.matchMedia("(orientation: portrait)").matches ? !0 : !1 } catch (a) { return window.innerHeight > window.innerWidth } },
                Be: function() { return W.ad() || W.$c() },
                ad: function() {
                    var a = navigator.userAgent.toLowerCase();
                    return -1 !== a.indexOf("safari") && -1 === a.indexOf("chrome") ? !0 : !1
                },
                Rg: function() { return W.Ce() ? W.Md() ? window.innerHeight / window.innerWidth * 45 : 45 : 45 },
                cd: function() { return navigator.mediaDevices && navigator.mediaDevices.getUserMedia ? !0 : !1 },
                pause: function(a) { a.pause() },
                Mh: function(a) { a.play() },
                release: function(a) {
                    a.pause();
                    a.videoStream && a.videoStream.stop();
                    a.videoStream = null
                },
                bd: function(a) {
                    if (!a) return a;
                    var c = null;
                    if (a.video) {
                        var d = function(e) { return e && "object" === typeof e ? Object.assign({}, e) : e };
                        c = {};
                        "undefined" !== typeof a.video.width && (c.width = d(a.video.width));
                        "undefined" !== typeof a.video.height && (c.height = d(a.video.height));
                        "undefined" !== typeof a.video.facingMode && (c.facingMode = d(a.video.facingMode))
                    }
                    c = { audio: a.audio, video: c };
                    "undefined" !== typeof a.deviceId && W.Tc(c, a.deviceId);
                    return c
                },
                Tc: function(a, c) { c && (a.video = a.video || {}, a.video.deviceId = { exact: c }, a.video.facingMode && delete a.video.facingMode) },
                ie: function(a) {
                    var c = a.video.width;
                    a.video.width = a.video.height;
                    a.video.height = c;
                    return a
                },
                Ge: function(a) {
                    function c(t) { return [480, 576, 640, 648, 720, 768, 800, 960, 1080, 1152, 1280, 1366, 1920].sort(function(m, z) { return Math.abs(m - t) - Math.abs(z - t) }) }

                    function d(t) {
                        var m = W.bd(a);
                        t = t(m);
                        l.push(t);
                        e(t)
                    }

                    function e(t) {
                        if (t.video && t.video.facingMode && t.video.facingMode.exact) {
                            var m = t.video.facingMode.exact;
                            t = W.bd(t);
                            delete t.video.facingMode.exact;
                            t.video.facingMode.ideal = m;
                            l.push(t)
                        }
                    }
                    var l = [];
                    if (!a || !a.video) return l;
                    e(a);
                    if (a.video.width && a.video.height) {
                        if (a.video.width.ideal && a.video.height.ideal) {
                            var n =
                                c(a.video.width.ideal).slice(0, 3),
                                x = c(a.video.height.ideal).slice(0, 3),
                                r = {},
                                q = 0;
                            for (r.oa = void 0; q < n.length; r = { oa: r.oa }, ++q) {
                                r.oa = n[q];
                                var u = {},
                                    p = 0;
                                for (u.na = void 0; p < x.length; u = { na: u.na }, ++p)
                                    if (u.na = x[p], r.oa !== a.video.width.ideal || u.na !== a.video.height.ideal) {
                                        var y = Math.max(r.oa, u.na) / Math.min(r.oa, u.na);
                                        y < 4 / 3 - .1 || y > 16 / 9 + .1 || d(function(t, m) {
                                            return function(z) {
                                                z.video.width.ideal = t.oa;
                                                z.video.height.ideal = m.na;
                                                return z
                                            }
                                        }(r, u))
                                    }
                            }
                        }
                        d(function(t) { return W.ie(t) })
                    }
                    a.video.width && a.video.height && (a.video.width.ideal &&
                        a.video.height.ideal && d(function(t) {
                            delete t.video.width.ideal;
                            delete t.video.height.ideal;
                            return t
                        }), d(function(t) {
                            delete t.video.width;
                            delete t.video.height;
                            return t
                        }));
                    a.video.facingMode && (d(function(t) { delete t.video.facingMode; return t }), a.video.width && a.video.height && d(function(t) {
                        W.ie(t);
                        delete t.video.facingMode;
                        return t
                    }));
                    l.push({ audio: a.audio, video: !0 });
                    return l
                },
                bg: function(a) {
                    if (W.Md()) {
                        if (!a || !a.video) return !1;
                        var c = a.video.width,
                            d = a.video.height;
                        if (!c || !d) return !1;
                        if (c.ideal && d.ideal &&
                            c.ideal > d.ideal) return a.video.height = c, a.video.width = d, !0
                    }
                    return !1
                },
                vb: function(a) {
                    a.volume = 0;
                    W.Ra(a, "muted");
                    if (W.ad()) {
                        if (1 === a.volume) {
                            var c = function() {
                                a.volume = 0;
                                window.removeEventListener("mousemove", c, !1);
                                window.removeEventListener("touchstart", c, !1)
                            };
                            window.addEventListener("mousemove", c, !1);
                            window.addEventListener("touchstart", c, !1)
                        }
                        setTimeout(function() {
                            a.volume = 0;
                            W.Ra(a, "muted")
                        }, 5)
                    }
                },
                le: function(a, c, d) {
                    return null === a ? Promise.resolve() : new Promise(function(e, l) {
                        if (a.srcObject && a.srcObject.getVideoTracks) {
                            var n =
                                a.srcObject.getVideoTracks();
                            1 !== n.length ? l("INVALID_TRACKNUMBER") : (n = n[0], c ? W.get(a, e, l, d) : (n.stop(), e()))
                        } else l("BAD_IMPLEMENTATION")
                    })
                },
                vd: function(a, c, d, e) {
                    function l(x) { n || (n = !0, d(x)) }
                    var n = !1;
                    return navigator.mediaDevices.getUserMedia(e).then(function(x) {
                        function r() {
                            setTimeout(function() {
                                if (a.currentTime) {
                                    var u = a.videoWidth,
                                        p = a.videoHeight;
                                    if (0 === u || 0 === p) l("VIDEO_NULLSIZE");
                                    else {
                                        u && (a.style.width = u.toString() + "px");
                                        p && (a.style.height = p.toString() + "px");
                                        var y = { Ae: null, Xf: null, Af: null };
                                        try {
                                            var t =
                                                x.getVideoTracks()[0];
                                            t && (y.Af = t, y.Ae = t.getCapabilities(), y.Xf = t.getSettings())
                                        } catch (m) {}
                                        W.Be() ? a.parentNode && null !== a.parentNode ? (n || c(a, x, y), setTimeout(function() { a.play() }, 100)) : (document.body.appendChild(a), W.vb(a), setTimeout(function() {
                                            a.style.transform = "scale(0.0001,0.0001)";
                                            a.style.position = "fixed";
                                            a.style.bottom = "0px";
                                            a.style.right = "0px";
                                            W.vb(a);
                                            setTimeout(function() {
                                                a.play();
                                                n || c(a, x, y)
                                            }, 100)
                                        }, 80)) : n || c(a, x, y)
                                    }
                                } else l("VIDEO_NOTSTARTED")
                            }, 700)
                        }

                        function q() {
                            a.removeEventListener("loadeddata",
                                q, !1);
                            var u = a.play();
                            W.vb(a);
                            "undefined" === typeof u ? r() : u.then(function() { r() }).catch(function() { l("VIDEO_PLAYPROMISEREJECTED") })
                        }
                        "undefined" !== typeof a.srcObject ? a.srcObject = x : (a.src = window.URL.createObjectURL(x), a.videoStream = x);
                        W.vb(a);
                        a.addEventListener("loadeddata", q, !1)
                    }).catch(function(x) { l(x) })
                },
                gf: function(a, c) { var d = c || W.wd(); return new Promise(function(e, l) { W.get(d, e, l, a) }) },
                get: function(a, c, d, e) {
                    if (!a) return d && d("VIDEO_NOTPROVIDED"), !1;
                    if (!W.cd()) return d && d("MEDIASTREAMAPI_NOTFOUND"), !1;
                    if (e && e.video) {
                        if (W.$c()) {
                            var l = W.Te();
                            0 !== l[0] && (12 > l[0] || 12 === l[0] && 2 > l[1]) && W.bg(e)
                        }
                        e.video.width && e.video.width.ideal && (a.style.width = e.video.width.ideal + "px");
                        e.video.height && e.video.height.ideal && (a.style.height = e.video.height.ideal + "px")
                    }
                    W.Ra(a, "autoplay");
                    W.Ra(a, "playsinline");
                    e && e.audio ? a.volume = 0 : W.Ra(a, "muted");
                    W.vd(a, c, function() {
                        function n(r) {
                            if (0 === r.length) d("INVALID_FALLBACKCONSTRAINTS");
                            else {
                                var q = r.shift();
                                W.vd(a, c, function() { n(r) }, q)
                            }
                        }
                        var x = W.Ge(e);
                        n(x)
                    }, e)
                },
                hf: function(a) {
                    if (!navigator.mediaDevices ||
                        !navigator.mediaDevices.enumerateDevices) return a(!1, "NOTSUPPORTED"), !1;
                    navigator.mediaDevices.enumerateDevices().then(function(c) {
                        (c = c.filter(function(d) { return d.kind && -1 !== d.kind.toLowerCase().indexOf("video") && d.label && d.deviceId })) && c.length && 0 < c.length ? a(c, !1) : a(!1, "NODEVICESFOUND")
                    }).catch(function() { a(!1, "PROMISEREJECTED") })
                },
                rg: function(a, c, d) {
                    var e = {};
                    e[c] = d;
                    c = [];
                    c.push(e);
                    a.applyConstraints({ advanced: c }).catch(function() {})
                }
            },
            ra = function() {
                function a(z, F, h, M, H, k, J) {
                    if (!t)
                        if (J === k.length) H();
                        else {
                            switch (k[J]) {
                                case "A":
                                    h();
                                    break;
                                case "D":
                                    z();
                                    break;
                                case "S":
                                    F().then(function(v, L) {
                                        m.Gb();
                                        a(z, F, h, L ? null : M, H, k, ++J)
                                    }).catch(function(v) {
                                        console.log("An error occurred in the WebAR loop: ", v);
                                        H()
                                    });
                                    return;
                                case "R":
                                    M && M()
                            }
                            a(z, F, h, M, H, k, ++J)
                        }
                }
                var c = { n: 5, uc: 1, Od: 0, jb: [35, 49], eb: [2, 200], k: .7, gg: 200, Ff: .05 },
                    d = -1,
                    e = null,
                    l = -1,
                    n = -1,
                    x = 0,
                    r = -1,
                    q = -1,
                    u = 0,
                    p = 0,
                    y = c.eb[1],
                    t = !0,
                    m = {
                        df: function() {
                            switch (d) {
                                case -1:
                                    return -1;
                                case 0:
                                    return q + e.Od;
                                case 1:
                                    return u
                            }
                        },
                        Wg: function(z) {
                            return Math.pow(Math.min(Math.max(r,
                                0), e.n - 1) / (e.n - 1), z || 1)
                        },
                        v: function(z) {
                            e = Object.assign({}, c, z);
                            r = q = e.uc;
                            d = 0;
                            m.reset()
                        },
                        Gb: function(z) {
                            z = ("undefined" === typeof z ? Date.now() : z) || 0;
                            var F = Math.min(Math.max(z - p, e.eb[0]), e.eb[1]);
                            y = F;
                            p = z;
                            var h = -1 === l ? 0 : e.k;
                            l = Math.min(Math.max(1E3 / F, 5), 120) * (1 - h) + l * h;
                            z - n > e.gg && 5 < ++x && (F = e.k, r = r * (1 - F) + (l < e.jb[0] ? q - 1 : l > e.jb[1] ? q + 1 : q) * F, Math.abs(r - q) > 1 - e.Ff && (F = Math.min(Math.max(Math.round(r), 0), e.n - 1), F !== q && (r = q = F, l = (e.jb[1] - e.jb[0]) / 2)), n = z)
                        },
                        Dc: function(z, F, h, M, H, k) {
                            t = !1;
                            a(z, F, h, M, H, k, 0)
                        },
                        stop: function() {
                            t = !0
                        },
                        Ec: function(z) {
                            u = z;
                            d = 1
                        },
                        Oc: function() {
                            d = 0;
                            m.reset()
                        },
                        reset: function() {
                            y = c.eb[1];
                            n = l = -1;
                            x = 0
                        },
                        Xe: function() { return y }
                    };
                return m
            }(),
            Na = function() {
                function a() {
                    d(F + m.tc);
                    h.port.postMessage("DONE")
                }

                function c() { J.$a = 0 === m.Za ? H(d) : H(e) }

                function d(f) { k.Da && null !== z && (f -= F, f = Math.min(Math.max(f, m.gd[0]), m.gd[1]), F += f, n(), v.isEnabled && v.Sa && k.Z && F - v.nc > m.Rc && (u(), v.nc = F), z(F)) }

                function e(f) { k.Da && (J.timeout = setTimeout(d.bind(null, f), m.Za)) }

                function l() {
                    z = null;
                    k.Da = !1;
                    n()
                }

                function n() {
                    J.$a && (window.cancelAnimationFrame(J.$a),
                        J.$a = null);
                    J.timeout && (window.clearTimeout(J.timeout), J.timeout = null)
                }

                function x(f) { f && !k.Z ? (k.Z = !0, M && ra.Oc(), h.port.postMessage("STOP"), aa.ke(!0), c()) : !f && k.Z && (k.Z = !1, M && ra.Ec(1), aa.ke(!1), h.port.postMessage("START")) }

                function r(f) { f.target.hidden ? N() : L() }

                function q(f, A, I) {
                    A = f.createShader(A);
                    f.shaderSource(A, I);
                    f.compileShader(A);
                    return A
                }

                function u() {
                    v.Sa = !1;
                    var f = v.ia,
                        A = v.nb,
                        I = v.ob,
                        g = v.Y;
                    f.uniform1f(v.xd, Math.random());
                    v.Ea ? A.beginQueryEXT(g, I) : f.beginQuery(g, I);
                    f.drawElements(f.POINTS, 1, f.UNSIGNED_SHORT,
                        0);
                    v.Ea ? A.endQueryEXT(g) : f.endQuery(g);
                    aa.flush();
                    y().then(function(E) {
                        E = m.pe * m.Qc * 1E3 / E;
                        v.Ib = (v.Ib + 1) % m.Ia;
                        v.oc[v.Ib] = E;
                        ++v.Nd > m.Ia && (v.sb.set(v.oc), v.sb.sort(function(K, O) { return K - O }), E = v.sb[Math.floor(m.Ia / 2)], v.hb = Math.max(v.hb, E), m.Jb(E / v.hb));
                        v.Sa = !0
                    }).catch(function() { v.Sa = !0 })
                }

                function p(f) {
                    var A = v.ia,
                        I = v.nb,
                        g = v.ob;
                    g = v.Ea ? I.Tg(g, I.QUERY_RESULT_AVAILABLE_EXT) : A.getQueryParameter(g, A.QUERY_RESULT_AVAILABLE);
                    A = A.getParameter(I.GPU_DISJOINT_EXT);
                    g ? f(!A) : setTimeout(p.bind(null, f), .1)
                }

                function y() {
                    return new Promise(function(f,
                        A) {
                        p(function(I) {
                            if (I) {
                                I = v.ia;
                                var g = v.nb,
                                    E = v.ob;
                                I = v.Ea ? g.getQueryObjectEXT(E, g.QUERY_RESULT_EXT) : I.getQueryParameter(E, I.QUERY_RESULT);
                                f(I)
                            } else A()
                        })
                    })
                }
                var t = { Hd: !0, gd: [1, 200], tc: 20, Za: 0, Qc: 50, pe: 240, Rc: 3E3, Ia: 3, Jb: null },
                    m = null,
                    z = null,
                    F = 0,
                    h = null,
                    M = !1,
                    H = null,
                    k = { wa: !1, Z: !0, lc: !1, jc: !1, ic: !1, Da: !1 },
                    J = { $a: null, timeout: null },
                    v = { isEnabled: !1, Sa: !1, ia: null, nb: null, ob: null, Y: null, xd: null, Ea: !0, nc: 0, Nd: 0, oc: null, sb: null, Ib: 0, hb: 0 },
                    L = x.bind(null, !0),
                    N = x.bind(null, !1),
                    w = {
                        v: function(f) {
                            m = Object.assign(t, f);
                            Object.assign(k, { Z: !0, wa: !0, Da: !1 });
                            H = window.requestPostAnimationFrame || window.requestAnimationFrame;
                            if (null !== m.Jb) {
                                f = document.createElement("canvas");
                                f.setAttribute("width", "1");
                                f.setAttribute("height", "1");
                                var A = { antialias: !1 };
                                f = f.getContext("webgl2", A) || f.getContext("webgl", A);
                                if (A = f.getExtension("EXT_disjoint_timer_query") || f.getExtension("EXT_disjoint_timer_query_webgl2")) {
                                    v.ia = f;
                                    v.nb = A;
                                    v.isEnabled = !0;
                                    v.Ea = A.beginQueryEXT ? !0 : !1;
                                    var I = q(f, f.VERTEX_SHADER, "attribute vec4 a0;void main(){gl_Position=a0;}"),
                                        g = q(f, f.FRAGMENT_SHADER, "precision lowp float;uniform float u37;void main(){vec4 a=u37*vec4(1.,2.,3.,4.);for(int b=0;b<666;b+=1)a=cos(a);gl_FragColor=a;}".replace("666", m.Qc.toString())),
                                        E = f.createProgram();
                                    f.attachShader(E, I);
                                    f.attachShader(E, g);
                                    f.linkProgram(E);
                                    I = f.getAttribLocation(E, "a0");
                                    v.xd = f.getUniformLocation(E, "u37");
                                    f.useProgram(E);
                                    f.enableVertexAttribArray(I);
                                    E = f.createBuffer();
                                    f.bindBuffer(f.ARRAY_BUFFER, E);
                                    f.bufferData(f.ARRAY_BUFFER, new Float32Array([.5, .5, 0, 1]), f.STATIC_DRAW);
                                    f.vertexAttribPointer(I,
                                        4, f.FLOAT, !1, 16, 0);
                                    E = f.createBuffer();
                                    f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, E);
                                    f.bufferData(f.ELEMENT_ARRAY_BUFFER, new Uint16Array([0]), f.STATIC_DRAW);
                                    f.disable(f.DEPTH_TEST);
                                    f.disable(f.DITHER);
                                    f.disable(f.STENCIL_TEST);
                                    f.viewport(0, 0, 1, 1);
                                    E = v.Ea ? A.createQueryEXT() : f.createQuery();
                                    v.ob = E;
                                    v.Y = A.TIME_ELAPSED_EXT || f.TIME_ELAPSED;
                                    v.nc = -m.Rc;
                                    v.oc = new Float32Array(m.Ia);
                                    v.sb = new Float32Array(m.Ia);
                                    v.hb = 0;
                                    v.Ib = 0;
                                    v.Nd = 0;
                                    v.Sa = !0
                                }
                            }
                            if (m.Hd) {
                                f = !1;
                                try {
                                    if ("undefined" === typeof SharedWorker) {
                                        var K = URL.createObjectURL(new Blob(["let handler = null;\n      self.addEventListener('message', function(e){\n        if (handler !== null){\n          clearTimeout(handler);\n          handler = null;\n        }\n        switch (e.data) {\n          case 'START':\n          case 'DONE':\n            handler = setTimeout(function(){\n              self.postMessage('TICK');\n            }, " +
                                                m.tc.toString() + ");\n            break;\n          case 'STOP':\n            break;\n        };\n      }, false);"
                                            ], { type: "text/javascript" })),
                                            O = new Worker(K);
                                        O.addEventListener("message", a);
                                        h = { Td: O, port: O };
                                        k.lc = !0
                                    } else {
                                        var Z = URL.createObjectURL(new Blob(["let handler = null;\n      onconnect = function(e) {\n        const port = e.ports[0];\n        port.addEventListener('message', function(e) {\n          \n          if (handler !== null){\n            clearTimeout(handler);\n            handler = null;\n          }\n          switch (e.data) {\n            case 'START':\n            case 'DONE':\n              handler = setTimeout(function(){\n                port.postMessage('TICK');\n              }, " +
                                                m.tc.toString() + ");\n              break;\n            case 'STOP':\n              break;\n          };\n          \n        });\n        \n        port.start();\n      } // end onconnect()"
                                            ], { type: "text/javascript" })),
                                            qa = new SharedWorker(Z);
                                        qa.port.start();
                                        qa.port.addEventListener("message", a);
                                        h = { Td: qa, port: qa.port };
                                        k.jc = !0
                                    }
                                    f = !0
                                } catch (va) {}
                                f && ("onvisibilitychange" in document ? document.addEventListener("visibilitychange", r) : (window.addEventListener("blur", N), window.addEventListener("focus", L)), k.ic = !0)
                            }
                            M = "undefined" !== typeof ra
                        },
                        m: function() {
                            l();
                            k.ic && ("onvisibilitychange" in document ? document.removeEventListener("visibilitychange", r) : (window.removeEventListener("blur", N), window.removeEventListener("focus", L)), k.ic = !1);
                            k.jc ? (h.port.close(), k.jc = !1) : k.lc && (h.Td.terminate(), k.lc = !1);
                            Object.assign(k, { Z: !0, wa: !1, Da: !1 });
                            z = null
                        },
                        xf: function() { return k.Z },
                        update: function(f) { Object.assign(m, f) },
                        Dc: function(f) {
                            k.wa || w.v({});
                            n();
                            k.Da = !0;
                            z = f;
                            k.Z && c()
                        },
                        stop: l
                    };
                return w
            }(),
            qb = function() {
                var a = {
                        Qd: 4,
                        yb: [1.5,
                            1.5, 2
                        ],
                        V: [.1, .1, .1],
                        Yd: 1,
                        B: -1,
                        G: -1,
                        ag: 2,
                        Ef: 1,
                        Zd: !0,
                        Oe: .8
                    },
                    c = null,
                    d = [],
                    e = [0],
                    l = [.5, .5, 1];
                return {
                    v: function(n) {
                        c = Object.assign({}, a, n);
                        d.splice(0);
                        n = c.yb[0] * c.V[0];
                        var x = c.yb[1] * c.V[1],
                            r = 1 / (1 + c.yb[2] * c.V[2]),
                            q = c.Yd * Math.min(c.B, c.G),
                            u = q / c.B;
                        q /= c.G;
                        var p = .5 * c.Oe;
                        p *= p;
                        for (var y = 0; y < c.Qd; ++y) {
                            var t = Math.pow(r, y),
                                m = u * t,
                                z = q * t;
                            t = m * c.Ef;
                            var F = m * n,
                                h = z * x;
                            m /= 2;
                            z /= 2;
                            for (var M = 1 + (1 - m - m) / F, H = 1 + (1 - z - z) / h, k = 0; k < H; ++k)
                                for (var J = z + k * h, v = J - .5, L = 0; L < M; ++L) {
                                    var N = m + L * F,
                                        w = N - .5;
                                    w * w + v * v > p || d.push([N, J, t])
                                }
                        }
                        c.Zd && d.sort(function(f,
                            A) {
                            var I = f[0] - .5;
                            f = f[1] - .5;
                            var g = A[0] - .5;
                            A = A[1] - .5;
                            return I * I + f * f - (g * g + A * A)
                        })
                    },
                    get: function(n) {
                        var x = d.length;
                        if (0 === x) return l;
                        for (; n >= e.length;) e.push(0);
                        e[n] >= x && (e[n] = 0);
                        var r = d[Math.floor(e[n])];
                        e[n] = (e[n] + 1 / c.ag) % x;
                        return r
                    },
                    reset: function() { for (var n = d.length / e.length, x = 0; x < e.length; ++x) e[x] = Math.floor(x * n) }
                }
            }(),
            ca = function() {
                function a(p, y, t, m) { return t > p ? Math.max(0, p + y / 2 - (t - m / 2)) : Math.max(0, t + m / 2 - (p - y / 2)) }

                function c(p) { return !l.Dd(p) }

                function d(p, y, t) {
                    return p.some(function(m, z) {
                        if (z === y) return !1;
                        z = p[y];
                        return z.xa > m.xa || 3 > m.xa || a(z.x, z.T, m.x, m.T) < l.sc * z.T ? !1 : a(z.y, z.T * t, m.y, m.T * t) > l.sc * z.T * t
                    })
                }
                var e = { O: 1, sc: .3, $d: .3, Dd: null, tf: !0 },
                    l = null,
                    n = 0,
                    x = null,
                    r = !1,
                    q = 0,
                    u = 0;
                return {
                    v: function(p) {
                        l = Object.assign({}, e, p);
                        x = [0]
                    },
                    Ld: function() { return 1 !== l.O },
                    td: function() { return n },
                    Kd: function() { return r },
                    ta: function() { return l.O },
                    lh: function() { return x },
                    wf: function(p) { return x.includes(p) },
                    update: function(p, y) {
                        var t = x;
                        if (t.length > p) t.splice(0, t.length - p);
                        else
                            for (; t.length < p;) t.push(0);
                        if (1 !== l.O)
                            if (y.every(c)) {
                                y =
                                    q;
                                for (var m = 0; m < p; ++m) t[m] = y, y = (y + 1) % l.O;
                                q = y
                            } else {
                                m = Math.round(l.$d * p);
                                m = Math.max(1, m);
                                for (var z = q, F = 0, h = 0; F < p; ++F) {
                                    if (c(y[z]) && ++h > m) { do ++z === l.O && (z = 0); while (c(y[z])) }
                                    t[F] = z;
                                    z = (z + 1) % l.O
                                }
                                q = z
                            }
                    },
                    Gb: function(p) {
                        n = x[p];
                        u = (.5 + n) / l.O;
                        r = x.lastIndexOf(n) === p;
                        return n
                    },
                    Yf: function(p, y) { return 1 === l.O ? !1 : d(p, n, y) },
                    je: function(p) { l.tf && 1 === l.O || D.H(p, u) },
                    Ne: function(p) {
                        for (var y = new Float32Array(p.length * l.O), t = 0, m; t < l.O; ++t)
                            for (m = 0; m < p.length; ++m) y[t * p.length + m] = p[m];
                        return y
                    },
                    Wb: function(p) {
                        for (var y = [],
                                t = 0; t < l.O; ++t) y.push(JSON.parse(JSON.stringify(p)));
                        return y
                    }
                }
            }(),
            pa = {
                neuralNetworkPath: "NN_FACE_0.json",
                pa: 0,
                Mf: { threshold: .75, nDetectsPerLoop: 0, nDetectsPerLoopRange: [1, 5], nScaleLevels: 3, scale0Factor: .8, overlapFactors: [2, 2, 4], scanCenterFirst: !0, translationScalingFactors: [.07, .07, .15], antialias: !1, isCleanGLStateAtEachIteration: !0, enableAsyncReadPixels: !1, readPixelsAsyncDelay: 1, animateProcessOrder: "SADR" },
                dg: 50,
                Cf: .4,
                Bf: 8,
                Df: .25,
                $f: {
                    translationFactorRange: [.0015,
                        .005
                    ],
                    rotationFactorRange: [.12, .25],
                    qualityFactorRange: [.85, .95],
                    alphaRange: [.05, .9],
                    followZRotAlphaFactor: .01
                },
                re: .2,
                se: 2,
                ig: 20,
                Zf: 8
            },
            ua = { facingMode: "user", idealWidth: 800, idealHeight: 600, minWidth: 480, maxWidth: 1920, minHeight: 480, maxHeight: 1920, rotate: 0 },
            ea = { qc: -1, error: -2, Ua: 0, ge: 1, play: 2, pause: 3 },
            fa = ea.Ua,
            xb = !1,
            jb = !1,
            B = null,
            hc = { Ta: !1, Ed: !1, Ic: null, element: null, D: null, I: [0, 0], u: [.5, 0, 0, .5], da: [.5, 0, 0, .5], Ab: 0, Oa: null, pb: !1 },
            T = null,
            ic = {
                Na: null,
                Nb: null,
                Kb: "./",
                Ya: null,
                W: null,
                pa: pa.pa,
                Gh: pa.pa,
                sa: !0,
                kc: !0
            },
            ab = null,
            Ma = [-1, -1],
            Da = null,
            da = null,
            ta = null,
            Q = null,
            jc = { B: 0, G: 0, Mb: 1, I: [0, 0], va: null },
            V = { size: 0, ca: null, Xa: null, buffer: null, ma: null, V: null, Hc: null },
            Ra = null,
            sa = null,
            mb = null,
            Ba = null,
            ma = { labels: [], vc: 0, xc: 0, Xb: 1, Zc: !1 },
            ka = { ub: { Dh: 3, Eb: 1, ai: 0 }, mode: 3, ed: 0, ra: { fb: 1, Zb: 0 } },
            bb = {
                VERSION: "1.8.2",
                init: function(a) {
                    function c() {
                        jb || fa === ea.Ua || fa === ea.error || 2 !== ++e || (Hb(), null !== B.element && (Ta(), Sa()), xb = !0, T.Na && T.Na(!1, {
                            GL: b,
                            canvasElement: T.W,
                            video: B.element,
                            videoTexture: B.D ? B.D.get() : null,
                            videoTransformMat2: B.u,
                            maxFacesDetected: ca.ta(),
                            landmarksLabels: ma.labels
                        }), Va())
                    }
                    if (fa !== ea.Ua) return a.callbackReady && a.callbackReady("ALREADY_INITIALIZED"), !1;
                    fa = ea.qc;
                    B = Object.assign({}, hc);
                    T = Object.assign({}, ic);
                    Q = Object.assign({}, jc);
                    V.ma = [0, 0, 0];
                    ! function(t) {
                        if (false && false) module.exports = t();
                        else if (false && false) define([], t);
                        else {
                            ("undefined" != typeof window ? window : false ? global : "undefined" != typeof self ? self : this).zyp = t()
                        }
                    }(function() {
                        return function() {
                            return function t(r, e, o) {
                                function n(i, a) {
                                    if (!e[i]) {
                                        if (!r[i]) { var u = false; if (!a && u) return u(i, !0); if (s) return s(i, !0); var h = new Error("Cannot find module '" + i + "'"); throw h.code = "MODULE_NOT_FOUND", h }
                                        var f = e[i] = { exports: {} };
                                        r[i][0].call(f.exports, function(t) { return n(r[i][1][t] || t) }, f, f.exports, t, r, e, o)
                                    }
                                    return e[i].exports
                                }
                                for (var s = false, i = 0; i < o.length; i++) n(o[i]);
                                return n
                            }
                        }()({
                            1: [function(t, r, e) {
                                Object.defineProperty(e, "zzB", { value: !0 }), e.default = e.zzZ3 = void 0;
                                var o = t("./zzz3/zz04"),
                                    n = t("zz14");

                                function s(t, r) {
                                    for (var e = 0; e < r.length; e++) {
                                        var o = r[e];
                                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                    }
                                }
                                var i = function t(r) { var e = r.shift(); if (0 === r.length) return new Float32Array(e); for (var o = Array(e), n = 0; n < e; ++n) o[n] = t(r.slice(0)); return o },
                                    a = function(t, r) {
                                        var e = t[0][0] + t[1][1] + t[2][2],
                                            o = t[0][0],
                                            n = t[1][0],
                                            s = t[2][0],
                                            i = t[0][1],
                                            a = t[1][1],
                                            u = t[2][1],
                                            h = t[0][2],
                                            f = t[1][2],
                                            c = t[2][2],
                                            l = 0,
                                            v = 0,
                                            m = 0,
                                            g = 0;
                                        if (e > 0) {
                                            var w = .5 / Math.sqrt(e + 1);
                                            l = .25 / w, v = (f - u) * w, m = (s - h) * w, g = (i - n) * w
                                        } else if (o > a && o > c) {
                                            var p = 2 * Math.sqrt(1 + o - a - c);
                                            l = (f - u) / p, v = .25 * p, m = (n + i) / p, g = (s + h) / p
                                        } else if (a > c) {
                                            var y = 2 * Math.sqrt(1 + a - o - c);
                                            l = (s - h) / y, v = (n + i) / y, m = .25 * y, g = (u + f) / y
                                        } else {
                                            var d = 2 * Math.sqrt(1 + c - o - a);
                                            l = (i - n) / d, v = (s + h) / d, m = (u + f) / d, g = .25 * d
                                        }
                                        r[0] = v, r[1] = m, r[2] = g, r[3] = l
                                    };
                                e.zzZ3 = a;
                                var u = function() {
                                    function t(r) {
                                        var e = r.cameraFocals,
                                            n = void 0 === e ? [1, 1] : e,
                                            s = r.zz32,
                                            a = void 0 === s ? 9 : s;
                                        ! function(t, r) { if (!(t instanceof r)) throw new Error() }(this, t), this.rMat = o.Matrix.zzJ1(3, 3), this.tVec = [0, 0, 0], this.zyp14(n), this.zz32 = a, this.zz42 = new Float32Array, this.us = new Float32Array, this.zz52 = new Float32Array, this.zz62 = new Float32Array, this.zz72 = 0, this.zz82 = 0, this.zz92 = o.Matrix.zzG1(4, 3), this.zzA2 = o.Matrix.zzG1(4, 3), this.zzk3 = 0;
                                        this.mem = { dv: i([4, 6, 3]), v: new Uint8Array([11, 10, 9, 8]), zzX3: i([4, 4]), zzW3Dets: i([4, 2]), Rs: i([4, 3, 3]), ts: i([4, 3]), CC: o.Matrix.zzG1(3, 3), L6x4: o.Matrix.zzG1(6, 4), L6x3: o.Matrix.zzG1(6, 3), L6x5: o.Matrix.zzG1(6, 5), A: o.Matrix.zzG1(6, 4), B: o.Matrix.zzG1(6, 1), zzG141: o.Matrix.zzG1(4, 1), pc0: new Float32Array(3), pw0: new Float32Array(3), ABt: o.Matrix.zzG1(3, 3), L6x10: o.Matrix.zzG1(6, 10), zzY3: o.Matrix.zzG1(6, 1), zzm3: null, U3: o.Matrix.zzG1(3, 3), U12: o.Matrix.zzG1(12, 12) }, this.zzB2 = { PW0: null, tPW0: null, M: null, tM: null }, this.zzV3 = { zzl3: -1, zyp13: !1, R: null, t: null, repError: -1, q: new Float32Array(4) }
                                    }
                                    var r, e, u;
                                    return r = t, (e = [{
                                        key: "solve",
                                        value: function(t, r) {
                                            this.zzV3.zyp13 = !1;
                                            var e = t.length;
                                            if (e !== r.length || e < 4) throw new Error();
                                            this.zzk1(e);
                                            for (var o = 0; o < e; ++o) this.zzl1(t[o], r[o], o);
                                            return this.zzj1(), this.zzV3
                                        }
                                    }, { key: "zyp14", value: function(t) { this.fu = t[0], this.fv = t[1] } }, { key: "zzk1", value: function(t) { this.zz82 !== t && (this.zzB2.PW0 = o.Matrix.zzG1(t, 3), this.zzB2.tPW0 = o.Matrix.zzG1(3, t), this.zzB2.M = o.Matrix.zzG1(2 * t, 12), this.zzB2.tM = o.Matrix.zzG1(12, 2 * t), this.zz82 = t), this.zz72 < t && (this.zz42 = new Float32Array(3 * t), this.us = new Float32Array(2 * t), this.zz52 = new Float32Array(4 * t), this.zz62 = new Float32Array(3 * t), this.zz72 = t) } }, {
                                        key: "zzl1",
                                        value: function(t, r, e) {
                                            var o = this.zz42,
                                                n = this.us;
                                            o[3 * e] = t[0], o[3 * e + 1] = t[1], o[3 * e + 2] = t[2], n[2 * e] = r[0], n[2 * e + 1] = r[1]
                                        }
                                    }, {
                                        key: "zzm1",
                                        value: function() {
                                            var t = this.zz92,
                                                r = this.zz82,
                                                e = this.zz42,
                                                s = this.zzB2,
                                                i = s.PW0,
                                                a = s.tPW0,
                                                u = this.mem.U3;
                                            t.set(0, 0, 0), t.set(0, 1, 0), t.set(0, 2, 0);
                                            for (var h = 0; h < r; ++h)
                                                for (var f = 0; f < 3; ++f) t.zzn3(0, f, e[3 * h + f]);
                                            for (var c = 0; c < 3; ++c) t.mulComponent(0, c, 1 / r);
                                            for (var l = 0; l < r; ++l)
                                                for (var v = 0; v < 3; ++v) i.set(l, v, e[3 * l + v] - t.get(0, v));
                                            i.zz012(a), a.zzr2(i, u);
                                            var m = u,
                                                g = (0, o.zz92)(m, { zzZ2: !1, zzj3: 0 });
                                            g.U.zz012(u);
                                            for (var w = u, p = g.s, y = 1; y < 4; ++y)
                                                for (var d = (0, n.zzr3)(p[y - 1] / r), b = 0; b < 3; ++b) t.set(y, b, t.get(0, b) + d * w.get(y - 1, b))
                                        }
                                    }, {
                                        key: "zzn1",
                                        value: function() {
                                            for (var t = this.zz42, r = this.zz52, e = this.zz92, n = this.zz82, s = this.mem.CC, i = 0; i < 3; ++i)
                                                for (var a = 1; a < 4; ++a) s.set(i, a - 1, e.get(a, i) - e.get(0, i));
                                            for (var u = (0, o.inverse2)(s, !0, 20), h = 0; h < n; ++h) {
                                                for (var f = 3 * h, c = 4 * h, l = 0; l < 3; ++l) r[c + 1 + l] = u.get(l, 0) * (t[f] - e.get(0, 0)) + u.get(l, 1) * (t[f + 1] - e.get(0, 1)) + u.get(l, 2) * (t[f + 2] - e.get(0, 2));
                                                r[c] = 1 - r[c + 1] - r[c + 2] - r[c + 3]
                                            }
                                        }
                                    }, {
                                        key: "zzLM",
                                        value: function(t, r, e, o, n) {
                                            for (var s = this.zz52, i = this.fu, a = this.fv, u = 0; u < 4; ++u) {
                                                var h = s[e + u];
                                                t.set(r, 3 * u, h * i), t.set(r, 3 * u + 1, 0), t.set(r, 3 * u + 2, -o * h), t.set(r + 1, 3 * u, 0), t.set(r + 1, 3 * u + 1, h * a), t.set(r + 1, 3 * u + 2, -n * h)
                                            }
                                        }
                                    }, {
                                        key: "zzp1",
                                        value: function(t, r) {
                                            for (var e = this.mem, o = e.dv, s = e.v, i = 0; i < 4; ++i)
                                                for (var a = 0, u = 1, h = 0; h < 6; ++h) o[i][h][0] = t.get(s[i], 3 * a) - t.get(s[i], 3 * u), o[i][h][1] = t.get(s[i], 3 * a + 1) - t.get(s[i], 3 * u + 1), o[i][h][2] = t.get(s[i], 3 * a + 2) - t.get(s[i], 3 * u + 2), ++u > 3 && (u = ++a + 1);
                                            for (var f = 0; f < 6; ++f) r.set(f, 0, (0, n.zzs3)(o[0][f], o[0][f])), r.set(f, 1, 2 * (0, n.zzs3)(o[0][f], o[1][f])), r.set(f, 2, (0, n.zzs3)(o[1][f], o[1][f])), r.set(f, 3, 2 * (0, n.zzs3)(o[0][f], o[2][f])), r.set(f, 4, 2 * (0, n.zzs3)(o[1][f], o[2][f])), r.set(f, 5, (0, n.zzs3)(o[2][f], o[2][f])), r.set(f, 6, 2 * (0, n.zzs3)(o[0][f], o[3][f])), r.set(f, 7, 2 * (0, n.zzs3)(o[1][f], o[3][f])), r.set(f, 8, 2 * (0, n.zzs3)(o[2][f], o[3][f])), r.set(f, 9, (0, n.zzs3)(o[3][f], o[3][f]))
                                        }
                                    }, {
                                        key: "zzq1",
                                        value: function(t) {
                                            var r = this.zz92;
                                            t.set(0, 0, (0, n.zzq3)(r, 0, 1)), t.set(1, 0, (0, n.zzq3)(r, 0, 2)), t.set(2, 0, (0, n.zzq3)(r, 0, 3)), t.set(3, 0, (0, n.zzq3)(r, 1, 2)), t.set(4, 0, (0, n.zzq3)(r, 1, 3)), t.set(5, 0, (0, n.zzq3)(r, 2, 3))
                                        }
                                    }, {
                                        key: "zzr1",
                                        value: function(t, r, e) {
                                            for (var s = this.mem.L6x4, i = 0; i < 6; ++i) s.set(i, 0, t.get(i, 0)), s.set(i, 1, t.get(i, 1)), s.set(i, 2, t.get(i, 3)), s.set(i, 3, t.get(i, 6));
                                            var a = (0, o.zzp3)(s, r, !0, 10),
                                                u = (0, n.SIGN)(a.get(0, 0));
                                            e[0] = (0, n.zzr3)(u * a.get(0, 0)), e[1] = u * a.get(1, 0) / e[0], e[2] = u * a.get(2, 0) / e[0], e[3] = u * a.get(3, 0) / e[0]
                                        }
                                    }, {
                                        key: "zzs1",
                                        value: function(t, r, e) {
                                            for (var s = this.mem.L6x3, i = 0; i < 6; ++i) s.set(i, 0, t.get(i, 0)), s.set(i, 1, t.get(i, 1)), s.set(i, 2, t.get(i, 2));
                                            var a = (0, o.zzp3)(s, r, !0, 11),
                                                u = (0, n.SIGN)(a.get(0, 0));
                                            e[0] = (0, n.zzr3)(u * a.get(0, 0)), e[1] = u * a.get(2, 0) > 0 ? (0, n.zzr3)(u * a.get(2, 0)) : 0, e[0] *= (0, n.SIGN)(a.get(1, 0)), e[2] = 0, e[3] = 0
                                        }
                                    }, {
                                        key: "zzt1",
                                        value: function(t, r, e) {
                                            for (var s = this.mem.L6x5, i = 0; i < 6; ++i) s.set(i, 0, t.get(i, 0)), s.set(i, 1, t.get(i, 1)), s.set(i, 2, t.get(i, 2)), s.set(i, 3, t.get(i, 3)), s.set(i, 4, t.get(i, 4));
                                            var a = (0, o.zzp3)(s, r, !0, 12),
                                                u = (0, n.SIGN)(a.get(0, 0));
                                            e[0] = (0, n.zzr3)(u * a.get(0, 0)), e[1] = u * a.get(2, 0) > 0 ? (0, n.zzr3)(u * a.get(2, 0)) : 0, a.get(1, 0) < 0 && (e[0] *= -1), e[2] = a.get(3, 0) / e[0], e[3] = 0
                                        }
                                    }, { key: "zzu1", value: function(t, r, e) { for (var o = this.mem, n = o.A, s = o.B, i = 0; i < this.zz32; ++i) { this.zzv1(t, r, e, n, s); for (var a = this.zzw1(n, s), u = 0; u < 4; ++u) e[u] += a.get(u, 0) } } }, { key: "zzv1", value: function(t, r, e, o, n) { for (var s = 0; s < 6; ++s) o.set(s, 0, 2 * t.get(s, 0) * e[0] + t.get(s, 1) * e[1] + t.get(s, 3) * e[2] + t.get(s, 6) * e[3]), o.set(s, 1, t.get(s, 1) * e[0] + 2 * t.get(s, 2) * e[1] + t.get(s, 4) * e[2] + t.get(s, 7) * e[3]), o.set(s, 2, t.get(s, 3) * e[0] + t.get(s, 4) * e[1] + 2 * t.get(s, 5) * e[2] + t.get(s, 8) * e[3]), o.set(s, 3, t.get(s, 6) * e[0] + t.get(s, 7) * e[1] + t.get(s, 8) * e[2] + 2 * t.get(s, 9) * e[3]), n.set(s, 0, r.get(s, 0) - (t.get(s, 0) * e[0] * e[0] + t.get(s, 1) * e[0] * e[1] + t.get(s, 2) * e[1] * e[1] + t.get(s, 3) * e[0] * e[2] + t.get(s, 4) * e[1] * e[2] + t.get(s, 5) * e[2] * e[2] + t.get(s, 6) * e[0] * e[3] + t.get(s, 7) * e[1] * e[3] + t.get(s, 8) * e[2] * e[3] + t.get(s, 9) * e[3] * e[3])) } }, { key: "zzw1", value: function(t, r) { var e = null; return this.mem.zzm3 ? (e = this.mem.zzm3).update(t) : (e = new o.zzT2(t), this.mem.zzm3 = e), e.zzY1() ? e.solve(r) : this.mem.zzG141 } }, {
                                        key: "zzx1",
                                        value: function(t, r) {
                                            for (var e = this.zzA2, o = 0; o < 4; ++o) e.set(o, 0, 0), e.set(o, 1, 0), e.set(o, 2, 0);
                                            for (var n = 0; n < 4; ++n)
                                                for (var s = 0; s < 4; ++s)
                                                    for (var i = 0; i < 3; ++i) e.zzn3(s, i, t[n] * r.get(11 - n, 3 * s + i))
                                        }
                                    }, {
                                        key: "zzy1",
                                        value: function() {
                                            for (var t = this.zzA2, r = this.zz82, e = this.zz52, o = this.zz62, n = 0; n < r; ++n)
                                                for (var s = 4 * n, i = 3 * n, a = 0; a < 3; ++a) o[i + a] = e[s] * t.get(0, a) + e[s + 1] * t.get(1, a) + e[s + 2] * t.get(2, a) + e[s + 3] * t.get(3, a)
                                        }
                                    }, {
                                        key: "zzz1",
                                        value: function() {
                                            var t = this.zz62,
                                                r = this.zz82,
                                                e = this.zzA2;
                                            if (t[2] < 0) {
                                                for (var o = 0; o < 4; ++o)
                                                    for (var n = 0; n < 3; ++n) e.mulComponent(o, n, -1);
                                                for (var s = 0; s < r; ++s) t[3 * s] = -t[3 * s], t[3 * s + 1] = -t[3 * s + 1], t[3 * s + 2] = -t[3 * s + 2]
                                            }
                                        }
                                    }, {
                                        key: "zz02",
                                        value: function(t, r) {
                                            var e = this.zz62,
                                                s = this.zz42,
                                                i = this.zz82,
                                                a = this.mem,
                                                u = a.pc0,
                                                h = a.pw0,
                                                f = a.ABt;
                                            f.zzi3();
                                            for (var c = 0; c < i; ++c)
                                                for (var l = 0; l < 3; ++l) u[l] += e[3 * c + l], h[l] += s[3 * c + l];
                                            for (var v = 0; v < 3; ++v) u[v] /= i, h[v] /= i;
                                            for (var m = 0; m < i; ++m)
                                                for (var g = 0; g < 3; ++g) f.zzn3(g, 0, (e[3 * m + g] - u[g]) * (s[3 * m] - h[0])), f.zzn3(g, 1, (e[3 * m + g] - u[g]) * (s[3 * m + 1] - h[1])), f.zzn3(g, 2, (e[3 * m + g] - u[g]) * (s[3 * m + 2] - h[2]));
                                            for (var w = (0, o.zz92)(f, { zzj3: 2 }), p = w.U, y = w.V, d = 0; d < 3; ++d)
                                                for (var b = 0; b < 3; ++b) t[d][b] = (0, n.zzs3)(p.zzM(d), y.zzM(b));
                                            var M = new o.Matrix(t),
                                                x = (0, o.zzU1)(M);
                                            return x <= 0 && (t[2][0] *= -1, t[2][1] *= -1, t[2][2] *= -1), r[0] = u[0] - (0, n.zzs3)(t[0], h), r[1] = u[1] - (0, n.zzs3)(t[1], h), r[2] = u[2] - (0, n.zzs3)(t[2], h), x
                                        }
                                    }, {
                                        key: "zz12",
                                        value: function(t, r) {
                                            for (var e = 0, o = this.zz82, s = this.fu, i = this.fv, a = this.zz42, u = this.us, h = 0; h < o; ++h) {
                                                var f = a.slice(3 * h, 3 * h + 3),
                                                    c = (0, n.zzs3)(t[0], f) + r[0],
                                                    l = (0, n.zzs3)(t[1], f) + r[1],
                                                    v = 1 / ((0, n.zzs3)(t[2], f) + r[2]),
                                                    m = s * c * v,
                                                    g = i * l * v,
                                                    w = u[2 * h],
                                                    p = u[2 * h + 1];
                                                e += (0, n.zzr3)((w - m) * (w - m) + (p - g) * (p - g))
                                            }
                                            return e / o
                                        }
                                    }, { key: "zz22", value: function(t, r, e, o, n) { this.zzx1(r, t), this.zzy1(), this.zzz1(), n[1] = this.zz02(e, o), n[0] = this.zz12(e, o) } }, {
                                        key: "zzj1",
                                        value: function() {
                                            var t = this.zz82,
                                                r = this.us,
                                                e = this.mem,
                                                n = this.zzV3,
                                                s = this.zzk3,
                                                i = e.L6x10,
                                                u = e.zzY3,
                                                h = e.zzX3,
                                                f = e.zzW3Dets,
                                                c = e.Rs,
                                                l = e.ts,
                                                v = e.U12,
                                                m = this.zzB2,
                                                g = m.M,
                                                w = m.tM;
                                            this.zzm1(), this.zzn1();
                                            for (var p = 0; p < t; ++p) this.zzLM(g, 2 * p, 4 * p, r[2 * p], r[2 * p + 1]);
                                            g.zz012(w), w.zzr2(g, v);
                                            var y = v;
                                            (0, o.zz92)(y, { zzZ2: !1, zzj3: 1 }).U.zz012(v);
                                            var d = v;
                                            this.zzp1(d, i), this.zzq1(u), this.zzr1(i, u, h[0]), this.zzu1(i, u, h[0]), this.zz22(d, h[0], c[0], l[0], f[0]), this.zzs1(i, u, h[1]), this.zzu1(i, u, h[1]), this.zz22(d, h[1], c[1], l[1], f[1]), this.zzt1(i, u, h[2]), this.zzu1(i, u, h[2]), this.zz22(d, h[2], c[2], l[2], f[2]), this.zzu1(i, u, h[3]), this.zz22(d, h[3], c[3], l[3], f[3]), f[3][0] /= 1.02;
                                            var b = -1;
                                            f[0][1] * s >= 0 && (b = 0), (-1 === b || f[1][0] < f[b][0]) && f[1][1] * s >= 0 && (b = 1), (-1 === b || f[2][0] < f[b][0]) && f[2][1] * s >= 0 && (b = 2), (-1 === b || f[3][0] < f[b][0]) && f[3][1] * s >= 0 && (b = 3), -1 === b && (b = 0, f[1][0] < f[b][0] && (b = 1), f[2][0] < f[b][0] && (b = 2), f[3][0] < f[b][0] && (b = 3)), this.zzk3 = f[b][1], h[3].set(h[b]);
                                            var M = c[b];
                                            M[0][2] *= -1, M[1][2] *= -1, M[2][0] *= -1, M[2][1] *= -1, a(M, n.q), n.zzl3 = b, n.zyp13 = !0, n.repError = f[b][0], n.R = M, n.t = l[b]
                                        }
                                    }]) && s(r.prototype, e), u && s(r, u), t
                                }();
                                e.default = u
                            }, { "zz14": 3, "./zzz3/zz04": 4 }],
                            2: [function(t, r, e) {
                                var o, n = (o = t("./zypSolver")) && o.zzB ? o : { default: o };
                                r.exports = { zypSolver: n.default }
                            }, { "./zypSolver": 1 }],
                            3: [function(t, r, e) {
                                Object.defineProperty(e, "zzB", { value: !0 }), e.zzq3 = e.zzs3 = e.SIGN = e.zzr3 = void 0;
                                var o = Math.sqrt;
                                e.zzr3 = o;
                                var n = Math.sign;
                                e.SIGN = n;
                                e.zzs3 = function(t, r) { return t[0] * r[0] + t[1] * r[1] + t[2] * r[2] };
                                e.zzq3 = function(t, r, e) {
                                    var o = t.get(r, 0),
                                        n = t.get(r, 1),
                                        s = t.get(r, 2),
                                        i = t.get(e, 0),
                                        a = t.get(e, 1),
                                        u = t.get(e, 2);
                                    return (o - i) * (o - i) + (n - a) * (n - a) + (s - u) * (s - u)
                                }
                            }, {}],
                            4: [function(t, r, e) {
                                function o(t, r) {
                                    if ("function" != typeof r && null !== r) throw new Error();
                                    t.prototype = Object.create(r && r.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), r && n(t, r)
                                }

                                function n(t, r) { return (n = Object.setPrototypeOf || function(t, r) { return t.__proto__ = r, t })(t, r) }

                                function s(t) {
                                    var r = function() { if ("undefined" == typeof zzt3 || !zzt3.construct) return !1; if (zzt3.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(zzt3.construct(Date, [], function() {})), !0 } catch (t) { return !1 } }();
                                    return function() {
                                        var e, o = a(t);
                                        if (r) {
                                            var n = a(this).constructor;
                                            e = zzt3.construct(o, arguments, n)
                                        } else e = o.apply(this, arguments);
                                        return i(this, e)
                                    }
                                }

                                function i(t, r) { return !r || "object" !== c(r) && "function" != typeof r ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : r }

                                function a(t) { return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) }

                                function u(t, r) { if (!(t instanceof r)) throw new Error() }

                                function h(t, r) {
                                    for (var e = 0; e < r.length; e++) {
                                        var o = r[e];
                                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                    }
                                }

                                function f(t, r, e) { return r && h(t.prototype, r), e && h(t, e), t }

                                function c(t) { "@babel/helpers - typeof"; return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }
                                var l, v;
                                l = void 0, v = function(t) {
                                    var r = Object.prototype.toString;

                                    function e(t) { return r.call(t).endsWith("Array]") }

                                    function n(t) {
                                        var r, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                        if (!e(t)) throw new Error();
                                        if (0 === t.length) throw new Error();
                                        if (void 0 !== o.output) {
                                            if (!e(o.output)) throw new Error();
                                            r = o.output
                                        } else r = new Array(t.length);
                                        var n = function(t) {
                                                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                                if (!e(t)) throw new Error();
                                                if (0 === t.length) throw new Error();
                                                var o = r.fromIndex,
                                                    n = void 0 === o ? 0 : o,
                                                    s = r.toIndex,
                                                    i = void 0 === s ? t.length : s;
                                                if (n < 0 || n >= t.length || !Number.isInteger(n)) throw new Error();
                                                if (i <= n || i > t.length || !Number.isInteger(i)) throw new Error();
                                                for (var a = t[n], u = n + 1; u < i; u++) t[u] < a && (a = t[u]);
                                                return a
                                            }(t),
                                            s = function(t) {
                                                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                                if (!e(t)) throw new Error();
                                                if (0 === t.length) throw new Error();
                                                var o = r.fromIndex,
                                                    n = void 0 === o ? 0 : o,
                                                    s = r.toIndex,
                                                    i = void 0 === s ? t.length : s;
                                                if (n < 0 || n >= t.length || !Number.isInteger(n)) throw new Error();
                                                if (i <= n || i > t.length || !Number.isInteger(i)) throw new Error();
                                                for (var a = t[n], u = n + 1; u < i; u++) t[u] > a && (a = t[u]);
                                                return a
                                            }(t);
                                        if (n === s) throw new Error();
                                        var i = o.min,
                                            a = void 0 === i ? o.autoMinMax ? n : 0 : i,
                                            u = o.max,
                                            h = void 0 === u ? o.autoMinMax ? s : 1 : u;
                                        if (a >= h) throw new Error();
                                        for (var f = (h - a) / (s - n), c = 0; c < t.length; c++) r[c] = (t[c] - n) * f + a;
                                        return r
                                    }
                                    var a = " ".repeat(2),
                                        h = " ".repeat(4);

                                    function l(t) {
                                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                            e = r.zzgs,
                                            o = void 0 === e ? 15 : e,
                                            n = r.zzks,
                                            s = void 0 === n ? 10 : n,
                                            i = r.zzo3,
                                            u = void 0 === i ? 8 : i;
                                        return "".concat(t.constructor.name, " {\\n").concat(a, "[\\n").concat(h).concat(function(t, r, e, o) {
                                            for (var n = t.zzk2, s = t.zzj2, i = Math.min(n, r), a = Math.min(s, e), u = [], f = 0; f < i; f++) {
                                                for (var c = [], l = 0; l < a; l++) c.push(v(t.get(f, l), o));
                                                u.push("".concat(c.join(" ")))
                                            }
                                            return a !== s && (u[u.length - 1] += " ... ".concat(s - e, " more zzj2")), i !== n && u.push("... ".concat(n - r, " more zzk2")), u.join("\\n".concat(h))
                                        }(t, o, s, u), "\\n").concat(a, "]\\n").concat(a, "zzk2: ").concat(t.zzk2, "\\n").concat(a, "zzj2: ").concat(t.zzj2, "\\n}")
                                    }

                                    function v(t, r) {
                                        var e = String(t);
                                        if (e.length <= r) return e.padEnd(r, " ");
                                        var o = t.toPrecision(r - 2);
                                        if (o.length <= r) return o;
                                        var n = t.zzP3(r - 2),
                                            s = n.indexOf("e"),
                                            i = n.slice(s);
                                        return n.slice(0, r - i.length) + i
                                    }

                                    function m(t, r, e) { var o = e ? t.zzk2 : t.zzk2 - 1; if (r < 0 || r > o) throw new Error() }

                                    function g(t, r, e) { var o = e ? t.zzj2 : t.zzj2 - 1; if (r < 0 || r > o) throw new Error() }

                                    function w(t, r) { if (r.zzC && (r = r.zzC()), r.length !== t.zzj2) throw new Error(); return r }

                                    function p(t, r) { if (r.zzC && (r = r.zzC()), r.length !== t.zzk2) throw new Error(); return r }

                                    function y(t, r, e) { return { row: function(t, r) { if ("object" != c(r)) throw new Error(); if (r.some(function(r) { return r < 0 || r >= t.zzk2 })) throw new Error(); return Array.isArray(r) || (r = Array.from(r)), r }(t, r), zz23: function(t, r) { if ("object" != c(r)) throw new Error(); if (r.some(function(r) { return r < 0 || r >= t.zzj2 })) throw new Error(); return Array.isArray(r) || (r = Array.from(r)), r }(t, e) } }

                                    function d(t, r, e, o, n) { if (5 !== arguments.length) throw new Error(); if (M("zz0", r), M("zz1", e), M("zz2", o), M("zz3", n), r > e || o > n || r < 0 || r >= t.zzk2 || e < 0 || e >= t.zzk2 || o < 0 || o >= t.zzj2 || n < 0 || n >= t.zzj2) throw new Error() }

                                    function b(t) { for (var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, e = [], o = 0; o < t; o++) e.push(r); return e }

                                    function M(t, r) { if ("number" != typeof r) throw new Error("".concat(t, " must be a number")) }

                                    function x(t) { if (t.zzu3()) throw new Error() }
                                    var k = function() {
                                        function t() { u(this, t) }
                                        return f(t, [{
                                            key: "apply",
                                            value: function(t) {
                                                if ("function" != typeof t) throw new Error();
                                                for (var r = 0; r < this.zzk2; r++)
                                                    for (var e = 0; e < this.zzj2; e++) t.call(this, r, e);
                                                return this
                                            }
                                        }, {
                                            key: "zzC",
                                            value: function() {
                                                for (var t = [], r = 0; r < this.zzk2; r++)
                                                    for (var e = 0; e < this.zzj2; e++) t.push(this.get(r, e));
                                                return t
                                            }
                                        }, { key: "zzD", value: function() { for (var t = [], r = 0; r < this.zzk2; r++) { t.push([]); for (var e = 0; e < this.zzj2; e++) t[r].push(this.get(r, e)) } return t } }, { key: "toJSON", value: function() { return this.zzD() } }, { key: "zzE", value: function() { return 1 === this.zzk2 } }, { key: "zzF", value: function() { return 1 === this.zzj2 } }, { key: "zzG", value: function() { return 1 === this.zzk2 || 1 === this.zzj2 } }, { key: "zzH", value: function() { return this.zzk2 === this.zzj2 } }, { key: "zzu3", value: function() { return 0 === this.zzk2 || 0 === this.zzj2 } }, {
                                            key: "zzI",
                                            value: function() {
                                                if (this.zzH()) {
                                                    for (var t = 0; t < this.zzk2; t++)
                                                        for (var r = 0; r <= t; r++)
                                                            if (this.get(t, r) !== this.get(r, t)) return !1;
                                                    return !0
                                                }
                                                return !1
                                            }
                                        }, {
                                            key: "zzJ",
                                            value: function() {
                                                for (var t = 0, r = 0, e = -1, o = !0, n = !1; t < this.zzk2 && o;) {
                                                    for (r = 0, n = !1; r < this.zzj2 && !1 === n;) 0 === this.get(t, r) ? r++ : 1 === this.get(t, r) && r > e ? (n = !0, e = r) : (o = !1, n = !0);
                                                    t++
                                                }
                                                return o
                                            }
                                        }, {
                                            key: "zzK",
                                            value: function() {
                                                for (var t = 0, r = 0, e = -1, o = !0, n = !1; t < this.zzk2 && o;) {
                                                    for (r = 0, n = !1; r < this.zzj2 && !1 === n;) 0 === this.get(t, r) ? r++ : 1 === this.get(t, r) && r > e ? (n = !0, e = r) : (o = !1, n = !0);
                                                    for (var s = r + 1; s < this.zzk2; s++) 0 !== this.get(t, s) && (o = !1);
                                                    t++
                                                }
                                                return o
                                            }
                                        }, {
                                            key: "zzv3",
                                            value: function() {
                                                for (var t = this.clone(), r = 0, e = 0; r < t.zzk2 && e < t.zzj2;) {
                                                    for (var o = r, n = r; n < t.zzk2; n++) t.get(n, e) > t.get(o, e) && (o = n);
                                                    if (0 === t.get(o, e)) e++;
                                                    else {
                                                        t.zzP(r, o);
                                                        for (var s = t.get(r, e), i = e; i < t.zzj2; i++) t.set(r, i, t.get(r, i) / s);
                                                        for (var a = r + 1; a < t.zzk2; a++) {
                                                            var u = t.get(a, e) / t.get(r, e);
                                                            t.set(a, e, 0);
                                                            for (var h = e + 1; h < t.zzj2; h++) t.set(a, h, t.get(a, h) - t.get(r, h) * u)
                                                        }
                                                        r++, e++
                                                    }
                                                }
                                                return t
                                            }
                                        }, {
                                            key: "reducedEchelonForm",
                                            value: function() {
                                                for (var t = this.zzv3(), r = t.zzj2, e = t.zzk2, o = e - 1; o >= 0;)
                                                    if (0 === t.zzg(o)) o--;
                                                    else {
                                                        for (var n = 0, s = !1; n < e && !1 === s;) 1 === t.get(o, n) ? s = !0 : n++;
                                                        for (var i = 0; i < o; i++)
                                                            for (var a = t.get(i, n), u = n; u < r; u++) {
                                                                var h = t.get(i, u) - a * t.get(o, u);
                                                                t.set(i, u, h)
                                                            }
                                                        o--
                                                    }
                                                return t
                                            }
                                        }, { key: "set", value: function() { throw new Error() } }, { key: "get", value: function() { throw new Error() } }, {
                                            key: "repeat",
                                            value: function() {
                                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                                if ("object" != c(t)) throw new Error();
                                                var r = t.zzk2,
                                                    e = void 0 === r ? 1 : r,
                                                    o = t.zzj2,
                                                    n = void 0 === o ? 1 : o;
                                                if (!Number.isInteger(e) || e <= 0) throw new Error();
                                                if (!Number.isInteger(n) || n <= 0) throw new Error();
                                                for (var s = new R(this.zzk2 * e, this.zzj2 * n), i = 0; i < e; i++)
                                                    for (var a = 0; a < n; a++) s.zz61(this, this.zzk2 * i, this.zzj2 * a);
                                                return s
                                            }
                                        }, {
                                            key: "zzL",
                                            value: function(t) {
                                                for (var r = 0; r < this.zzk2; r++)
                                                    for (var e = 0; e < this.zzj2; e++) this.set(r, e, t);
                                                return this
                                            }
                                        }, { key: "neg", value: function() { return this.mulS(-1) } }, { key: "zzM", value: function(t) { m(this, t); for (var r = [], e = 0; e < this.zzj2; e++) r.push(this.get(t, e)); return r } }, { key: "zzMVector", value: function(t) { return R.zzE1(this.zzM(t)) } }, { key: "zzO", value: function(t, r) { m(this, t), r = w(this, r); for (var e = 0; e < this.zzj2; e++) this.set(t, e, r[e]); return this } }, {
                                            key: "zzP",
                                            value: function(t, r) {
                                                m(this, t), m(this, r);
                                                for (var e = 0; e < this.zzj2; e++) {
                                                    var o = this.get(t, e);
                                                    this.set(t, e, this.get(r, e)), this.set(r, e, o)
                                                }
                                                return this
                                            }
                                        }, { key: "zzQ", value: function(t) { g(this, t); for (var r = [], e = 0; e < this.zzk2; e++) r.push(this.get(e, t)); return r } }, { key: "zzQVector", value: function(t) { return R.zzF1(this.zzQ(t)) } }, { key: "zzS", value: function(t, r) { g(this, t), r = p(this, r); for (var e = 0; e < this.zzk2; e++) this.set(e, t, r[e]); return this } }, {
                                            key: "zzT",
                                            value: function(t, r) {
                                                g(this, t), g(this, r);
                                                for (var e = 0; e < this.zzk2; e++) {
                                                    var o = this.get(e, t);
                                                    this.set(e, t, this.get(e, r)), this.set(e, r, o)
                                                }
                                                return this
                                            }
                                        }, {
                                            key: "zzU",
                                            value: function(t) {
                                                t = w(this, t);
                                                for (var r = 0; r < this.zzk2; r++)
                                                    for (var e = 0; e < this.zzj2; e++) this.set(r, e, this.get(r, e) + t[e]);
                                                return this
                                            }
                                        }, {
                                            key: "zzV",
                                            value: function(t) {
                                                t = w(this, t);
                                                for (var r = 0; r < this.zzk2; r++)
                                                    for (var e = 0; e < this.zzj2; e++) this.set(r, e, this.get(r, e) - t[e]);
                                                return this
                                            }
                                        }, {
                                            key: "zzW",
                                            value: function(t) {
                                                t = w(this, t);
                                                for (var r = 0; r < this.zzk2; r++)
                                                    for (var e = 0; e < this.zzj2; e++) this.set(r, e, this.get(r, e) * t[e]);
                                                return this
                                            }
                                        }, {
                                            key: "zzX",
                                            value: function(t) {
                                                t = w(this, t);
                                                for (var r = 0; r < this.zzk2; r++)
                                                    for (var e = 0; e < this.zzj2; e++) this.set(r, e, this.get(r, e) / t[e]);
                                                return this
                                            }
                                        }, {
                                            key: "zzY",
                                            value: function(t) {
                                                t = p(this, t);
                                                for (var r = 0; r < this.zzk2; r++)
                                                    for (var e = 0; e < this.zzj2; e++) this.set(r, e, this.get(r, e) + t[r]);
                                                return this
                                            }
                                        }, {
                                            key: "zzZ",
                                            value: function(t) {
                                                t = p(this, t);
                                                for (var r = 0; r < this.zzk2; r++)
                                                    for (var e = 0; e < this.zzj2; e++) this.set(r, e, this.get(r, e) - t[r]);
                                                return this
                                            }
                                        }, {
                                            key: "zza",
                                            value: function(t) {
                                                t = p(this, t);
                                                for (var r = 0; r < this.zzk2; r++)
                                                    for (var e = 0; e < this.zzj2; e++) this.set(r, e, this.get(r, e) * t[r]);
                                                return this
                                            }
                                        }, {
                                            key: "zzb",
                                            value: function(t) {
                                                t = p(this, t);
                                                for (var r = 0; r < this.zzk2; r++)
                                                    for (var e = 0; e < this.zzj2; e++) this.set(r, e, this.get(r, e) / t[r]);
                                                return this
                                            }
                                        }, { key: "zzc", value: function(t, r) { m(this, t); for (var e = 0; e < this.zzj2; e++) this.set(t, e, this.get(t, e) * r); return this } }, { key: "zzd", value: function(t, r) { g(this, t); for (var e = 0; e < this.zzk2; e++) this.set(e, t, this.get(e, t) * r); return this } }, {
                                            key: "max",
                                            value: function() {
                                                if (this.zzu3()) return NaN;
                                                for (var t = this.get(0, 0), r = 0; r < this.zzk2; r++)
                                                    for (var e = 0; e < this.zzj2; e++) this.get(r, e) > t && (t = this.get(r, e));
                                                return t
                                            }
                                        }, {
                                            key: "zze",
                                            value: function() {
                                                x(this);
                                                for (var t = this.get(0, 0), r = [0, 0], e = 0; e < this.zzk2; e++)
                                                    for (var o = 0; o < this.zzj2; o++) this.get(e, o) > t && (t = this.get(e, o), r[0] = e, r[1] = o);
                                                return r
                                            }
                                        }, {
                                            key: "min",
                                            value: function() {
                                                if (this.zzu3()) return NaN;
                                                for (var t = this.get(0, 0), r = 0; r < this.zzk2; r++)
                                                    for (var e = 0; e < this.zzj2; e++) this.get(r, e) < t && (t = this.get(r, e));
                                                return t
                                            }
                                        }, {
                                            key: "zzf",
                                            value: function() {
                                                x(this);
                                                for (var t = this.get(0, 0), r = [0, 0], e = 0; e < this.zzk2; e++)
                                                    for (var o = 0; o < this.zzj2; o++) this.get(e, o) < t && (t = this.get(e, o), r[0] = e, r[1] = o);
                                                return r
                                            }
                                        }, { key: "zzg", value: function(t) { if (m(this, t), this.zzu3()) return NaN; for (var r = this.get(t, 0), e = 1; e < this.zzj2; e++) this.get(t, e) > r && (r = this.get(t, e)); return r } }, { key: "zzgIndex", value: function(t) { m(this, t), x(this); for (var r = this.get(t, 0), e = [t, 0], o = 1; o < this.zzj2; o++) this.get(t, o) > r && (r = this.get(t, o), e[1] = o); return e } }, { key: "zzi", value: function(t) { if (m(this, t), this.zzu3()) return NaN; for (var r = this.get(t, 0), e = 1; e < this.zzj2; e++) this.get(t, e) < r && (r = this.get(t, e)); return r } }, { key: "zziIndex", value: function(t) { m(this, t), x(this); for (var r = this.get(t, 0), e = [t, 0], o = 1; o < this.zzj2; o++) this.get(t, o) < r && (r = this.get(t, o), e[1] = o); return e } }, { key: "zzk", value: function(t) { if (g(this, t), this.zzu3()) return NaN; for (var r = this.get(0, t), e = 1; e < this.zzk2; e++) this.get(e, t) > r && (r = this.get(e, t)); return r } }, { key: "zzkIndex", value: function(t) { g(this, t), x(this); for (var r = this.get(0, t), e = [0, t], o = 1; o < this.zzk2; o++) this.get(o, t) > r && (r = this.get(o, t), e[0] = o); return e } }, { key: "zzm", value: function(t) { if (g(this, t), this.zzu3()) return NaN; for (var r = this.get(0, t), e = 1; e < this.zzk2; e++) this.get(e, t) < r && (r = this.get(e, t)); return r } }, { key: "zzmIndex", value: function(t) { g(this, t), x(this); for (var r = this.get(0, t), e = [0, t], o = 1; o < this.zzk2; o++) this.get(o, t) < r && (r = this.get(o, t), e[0] = o); return e } }, { key: "zzo", value: function() { for (var t = Math.min(this.zzk2, this.zzj2), r = [], e = 0; e < t; e++) r.push(this.get(e, e)); return r } }, {
                                            key: "zzp",
                                            value: function() {
                                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "zzw3",
                                                    r = 0;
                                                if ("max" === t) return this.max();
                                                if ("zzw3" === t) {
                                                    for (var e = 0; e < this.zzk2; e++)
                                                        for (var o = 0; o < this.zzj2; o++) r += this.get(e, o) * this.get(e, o);
                                                    return Math.sqrt(r)
                                                }
                                                throw new Error("unknown zzp type: ".concat(t))
                                            }
                                        }, {
                                            key: "zzq",
                                            value: function() {
                                                for (var t = 0, r = 0; r < this.zzk2; r++)
                                                    for (var e = 0; e < this.zzj2; e++) t += this.get(r, e), this.set(r, e, t);
                                                return this
                                            }
                                        }, { key: "dot", value: function(r) { t.zzM1(r) && (r = r.zzC()); var e = this.zzC(); if (e.length !== r.length) throw new Error(); for (var o = 0, n = 0; n < e.length; n++) o += e[n] * r[n]; return o } }, { key: "zzr", value: function(t) { t = R.zzL1(t); var r = new R(this.zzk2, t.zzj2); return this.zzr2(t, r), r } }, {
                                            key: "zzr2",
                                            value: function(t, r) {
                                                var e = this.zzk2,
                                                    o = this.zzj2,
                                                    n = t.zzj2;
                                                this.Bcolj = this.Bcolj || new Float32Array(o);
                                                for (var s = this.Bcolj, i = 0; i < n; i++) {
                                                    for (var a = 0; a < o; a++) s[a] = t.get(a, i);
                                                    for (var u = 0; u < e; u++) {
                                                        for (var h = 0, f = 0; f < o; f++) h += this.get(u, f) * s[f];
                                                        r.set(u, i, h)
                                                    }
                                                }
                                            }
                                        }, {
                                            key: "zzs",
                                            value: function(t) {
                                                t = R.zzL1(t);
                                                var r = new R(2, 2),
                                                    e = this.get(0, 0),
                                                    o = t.get(0, 0),
                                                    n = this.get(0, 1),
                                                    s = t.get(0, 1),
                                                    i = this.get(1, 0),
                                                    a = t.get(1, 0),
                                                    u = this.get(1, 1),
                                                    h = t.get(1, 1),
                                                    f = (e + u) * (o + h),
                                                    c = (i + u) * o,
                                                    l = e * (s - h),
                                                    v = u * (a - o),
                                                    m = (e + n) * h,
                                                    g = f + v - m + (n - u) * (a + h),
                                                    w = l + m,
                                                    p = c + v,
                                                    y = f - c + l + (i - e) * (o + s);
                                                return r.set(0, 0, g), r.set(0, 1, w), r.set(1, 0, p), r.set(1, 1, y), r
                                            }
                                        }, {
                                            key: "zzt",
                                            value: function(t) {
                                                t = R.zzL1(t);
                                                var r = new R(3, 3),
                                                    e = this.get(0, 0),
                                                    o = this.get(0, 1),
                                                    n = this.get(0, 2),
                                                    s = this.get(1, 0),
                                                    i = this.get(1, 1),
                                                    a = this.get(1, 2),
                                                    u = this.get(2, 0),
                                                    h = this.get(2, 1),
                                                    f = this.get(2, 2),
                                                    c = t.get(0, 0),
                                                    l = t.get(0, 1),
                                                    v = t.get(0, 2),
                                                    m = t.get(1, 0),
                                                    g = t.get(1, 1),
                                                    w = t.get(1, 2),
                                                    p = t.get(2, 0),
                                                    y = t.get(2, 1),
                                                    d = t.get(2, 2),
                                                    b = (e - s) * (-l + g),
                                                    M = (-e + s + i) * (c - l + g),
                                                    x = (s + i) * (-c + l),
                                                    k = e * c,
                                                    S = (-e + u + h) * (c - v + w),
                                                    E = (-e + u) * (v - w),
                                                    T = (u + h) * (-c + v),
                                                    A = (-n + h + f) * (g + p - y),
                                                    C = (n - f) * (g - y),
                                                    I = n * p,
                                                    D = (h + f) * (-p + y),
                                                    N = (-n + i + a) * (w + p - d),
                                                    O = (n - a) * (w - d),
                                                    F = (i + a) * (-p + d),
                                                    P = k + I + o * m,
                                                    j = (e + o + n - s - i - h - f) * g + M + x + k + A + I + D,
                                                    q = k + S + T + (e + o + n - i - a - u - h) * w + I + N + F,
                                                    V = b + i * (-c + l + m - g - w - p + d) + M + k + I + N + O,
                                                    z = b + M + x + k + a * y,
                                                    Q = I + N + O + F + s * v,
                                                    L = k + S + E + h * (-c + v + m - g - w - p + y) + A + C + I,
                                                    B = A + C + I + D + u * l,
                                                    U = k + S + E + T + f * d;
                                                return r.set(0, 0, P), r.set(0, 1, j), r.set(0, 2, q), r.set(1, 0, V), r.set(1, 1, z), r.set(1, 2, Q), r.set(2, 0, L), r.set(2, 1, B), r.set(2, 2, U), r
                                            }
                                        }, {
                                            key: "zzrStrassen",
                                            value: function(r) {
                                                r = R.zzL1(r);
                                                var e = this.clone(),
                                                    o = e.zzk2,
                                                    n = e.zzj2,
                                                    s = r.zzk2,
                                                    i = r.zzj2;

                                                function a(r, e, o) {
                                                    var n = r.zzk2,
                                                        s = r.zzj2;
                                                    if (n === e && s === o) return r;
                                                    var i = t.zzG1(e, o);
                                                    return i = i.zz61(r, 0, 0)
                                                }
                                                n !== s && 1;
                                                var u = Math.max(o, s),
                                                    h = Math.max(n, i);
                                                return function r(e, o, n, s) {
                                                    if (n <= 512 || s <= 512) return e.zzr(o);
                                                    n % 2 == 1 && s % 2 == 1 ? (e = a(e, n + 1, s + 1), o = a(o, n + 1, s + 1)) : n % 2 == 1 ? (e = a(e, n + 1, s), o = a(o, n + 1, s)) : s % 2 == 1 && (e = a(e, n, s + 1), o = a(o, n, s + 1));
                                                    var i = parseInt(e.zzk2 / 2, 10),
                                                        u = parseInt(e.zzj2 / 2, 10),
                                                        h = e.zz31(0, i - 1, 0, u - 1),
                                                        f = o.zz31(0, i - 1, 0, u - 1),
                                                        c = e.zz31(0, i - 1, u, e.zzj2 - 1),
                                                        l = o.zz31(0, i - 1, u, o.zzj2 - 1),
                                                        v = e.zz31(i, e.zzk2 - 1, 0, u - 1),
                                                        m = o.zz31(i, o.zzk2 - 1, 0, u - 1),
                                                        g = e.zz31(i, e.zzk2 - 1, u, e.zzj2 - 1),
                                                        w = o.zz31(i, o.zzk2 - 1, u, o.zzj2 - 1),
                                                        p = r(t.add(h, g), t.add(f, w), i, u),
                                                        y = r(t.add(v, g), f, i, u),
                                                        d = r(h, t.sub(l, w), i, u),
                                                        b = r(g, t.sub(m, f), i, u),
                                                        M = r(t.add(h, c), w, i, u),
                                                        x = r(t.sub(v, h), t.add(f, l), i, u),
                                                        k = r(t.sub(c, g), t.add(m, w), i, u),
                                                        S = t.add(p, b);
                                                    S.sub(M), S.add(k);
                                                    var R = t.add(d, M),
                                                        E = t.add(y, b),
                                                        T = t.sub(p, y);
                                                    T.add(d), T.add(x);
                                                    var A = t.zzG1(2 * S.zzk2, 2 * S.zzj2);
                                                    return (A = (A = (A = (A = A.zz61(S, 0, 0)).zz61(R, S.zzk2, 0)).zz61(E, 0, S.zzj2)).zz61(T, S.zzk2, S.zzj2)).zz31(0, n - 1, 0, s - 1)
                                                }(e = a(e, u, h), r = a(r, u, h), u, h)
                                            }
                                        }, {
                                            key: "zzv",
                                            value: function() {
                                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                                if ("object" != c(t)) throw new Error();
                                                var r = t.min,
                                                    e = void 0 === r ? 0 : r,
                                                    o = t.max,
                                                    s = void 0 === o ? 1 : o;
                                                if (!Number.isFinite(e)) throw new Error();
                                                if (!Number.isFinite(s)) throw new Error();
                                                if (e >= s) throw new Error();
                                                for (var i = new R(this.zzk2, this.zzj2), a = 0; a < this.zzk2; a++) {
                                                    var u = this.zzM(a);
                                                    u.length > 0 && n(u, { min: e, max: s, output: u }), i.zzO(a, u)
                                                }
                                                return i
                                            }
                                        }, {
                                            key: "zzw",
                                            value: function() {
                                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                                if ("object" != c(t)) throw new Error();
                                                var r = t.min,
                                                    e = void 0 === r ? 0 : r,
                                                    o = t.max,
                                                    s = void 0 === o ? 1 : o;
                                                if (!Number.isFinite(e)) throw new Error();
                                                if (!Number.isFinite(s)) throw new Error();
                                                if (e >= s) throw new Error();
                                                for (var i = new R(this.zzk2, this.zzj2), a = 0; a < this.zzj2; a++) {
                                                    var u = this.zzQ(a);
                                                    u.length && n(u, { min: e, max: s, output: u }), i.zzS(a, u)
                                                }
                                                return i
                                            }
                                        }, {
                                            key: "zzx",
                                            value: function() {
                                                for (var t = Math.ceil(this.zzj2 / 2), r = 0; r < this.zzk2; r++)
                                                    for (var e = 0; e < t; e++) {
                                                        var o = this.get(r, e),
                                                            n = this.get(r, this.zzj2 - 1 - e);
                                                        this.set(r, e, n), this.set(r, this.zzj2 - 1 - e, o)
                                                    }
                                                return this
                                            }
                                        }, {
                                            key: "zzy",
                                            value: function() {
                                                for (var t = Math.ceil(this.zzk2 / 2), r = 0; r < this.zzj2; r++)
                                                    for (var e = 0; e < t; e++) {
                                                        var o = this.get(e, r),
                                                            n = this.get(this.zzk2 - 1 - e, r);
                                                        this.set(e, r, n), this.set(this.zzk2 - 1 - e, r, o)
                                                    }
                                                return this
                                            }
                                        }, {
                                            key: "zzz",
                                            value: function(t) {
                                                t = R.zzL1(t);
                                                for (var r = this.zzk2, e = this.zzj2, o = t.zzk2, n = t.zzj2, s = new R(r * o, e * n), i = 0; i < r; i++)
                                                    for (var a = 0; a < e; a++)
                                                        for (var u = 0; u < o; u++)
                                                            for (var h = 0; h < n; h++) s.set(o * i + u, n * a + h, this.get(i, a) * t.get(u, h));
                                                return s
                                            }
                                        }, {
                                            key: "kroneckerSum",
                                            value: function(t) {
                                                if (t = R.zzL1(t), !this.zzH() || !t.zzH()) throw new Error();
                                                var r = this.zzk2,
                                                    e = t.zzk2,
                                                    o = this.zzz(R.zzJ1(e, e)),
                                                    n = R.zzJ1(r, r).zzz(t);
                                                return o.add(n)
                                            }
                                        }, { key: "zz01", value: function() { var t = new R(this.zzj2, this.zzk2); return this.zz012(t), t } }, {
                                            key: "zz012",
                                            value: function(t) {
                                                for (var r = 0; r < this.zzk2; r++)
                                                    for (var e = 0; e < this.zzj2; e++) t.set(e, r, this.get(r, e))
                                            }
                                        }, { key: "zz11", value: function() { for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S, r = 0; r < this.zzk2; r++) this.zzO(r, this.zzM(r).sort(t)); return this } }, { key: "zz21", value: function() { for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S, r = 0; r < this.zzj2; r++) this.zzS(r, this.zzQ(r).sort(t)); return this } }, {
                                            key: "zz31",
                                            value: function(t, r, e, o) {
                                                d(this, t, r, e, o);
                                                for (var n = new R(r - t + 1, o - e + 1), s = t; s <= r; s++)
                                                    for (var i = e; i <= o; i++) n.set(s - t, i - e, this.get(s, i));
                                                return n
                                            }
                                        }, {
                                            key: "zz31Row",
                                            value: function(t, r, e) {
                                                if (void 0 === r && (r = 0), void 0 === e && (e = this.zzj2 - 1), r > e || r < 0 || r >= this.zzj2 || e < 0 || e >= this.zzj2) throw new Error();
                                                for (var o = new R(t.length, e - r + 1), n = 0; n < t.length; n++)
                                                    for (var s = r; s <= e; s++) {
                                                        if (t[n] < 0 || t[n] >= this.zzk2) throw new Error("Row index out of range: ".concat(t[n]));
                                                        o.set(n, s - r, this.get(t[n], s))
                                                    }
                                                return o
                                            }
                                        }, {
                                            key: "zz31Column",
                                            value: function(t, r, e) {
                                                if (void 0 === r && (r = 0), void 0 === e && (e = this.zzk2 - 1), r > e || r < 0 || r >= this.zzk2 || e < 0 || e >= this.zzk2) throw new Error();
                                                for (var o = new R(e - r + 1, t.length), n = 0; n < t.length; n++)
                                                    for (var s = r; s <= e; s++) {
                                                        if (t[n] < 0 || t[n] >= this.zzj2) throw new Error("Column index out of range: ".concat(t[n]));
                                                        o.set(s - r, n, this.get(s, t[n]))
                                                    }
                                                return o
                                            }
                                        }, {
                                            key: "zz61",
                                            value: function(t, r, e) {
                                                if ((t = R.zzL1(t)).zzu3()) return this;
                                                d(this, r, r + t.zzk2 - 1, e, e + t.zzj2 - 1);
                                                for (var o = 0; o < t.zzk2; o++)
                                                    for (var n = 0; n < t.zzj2; n++) this.set(r + o, e + n, t.get(o, n));
                                                return this
                                            }
                                        }, {
                                            key: "zz71",
                                            value: function(t, r) {
                                                for (var e = y(this, t, r), o = new R(t.length, r.length), n = 0; n < e.row.length; n++)
                                                    for (var s = e.row[n], i = 0; i < e.zz23.length; i++) {
                                                        var a = e.zz23[i];
                                                        o.set(n, i, this.get(s, a))
                                                    }
                                                return o
                                            }
                                        }, { key: "trace", value: function() { for (var t = Math.min(this.zzk2, this.zzj2), r = 0, e = 0; e < t; e++) r += this.get(e, e); return r } }, {
                                            key: "copy",
                                            value: function(t) {
                                                for (var r = 0; r < this.zzk2; r++)
                                                    for (var e = 0; e < this.zzj2; e++) this.set(r, e, t.get(r, e))
                                            }
                                        }, {
                                            key: "reset",
                                            value: function() {
                                                for (var t = 0; t < this.zzk2; t++)
                                                    for (var r = 0; r < this.zzj2; r++) this.set(t, r, 0)
                                            }
                                        }, { key: "clone", value: function() { var t = new R(this.zzk2, this.zzj2); return t.copy(this), t } }, {
                                            key: "sum",
                                            value: function(t) {
                                                switch (t) {
                                                    case "row":
                                                        return function(t) {
                                                            for (var r = b(t.zzk2), e = 0; e < t.zzk2; ++e)
                                                                for (var o = 0; o < t.zzj2; ++o) r[e] += t.get(e, o);
                                                            return r
                                                        }(this);
                                                    case "zz23":
                                                        return function(t) {
                                                            for (var r = b(t.zzj2), e = 0; e < t.zzk2; ++e)
                                                                for (var o = 0; o < t.zzj2; ++o) r[o] += t.get(e, o);
                                                            return r
                                                        }(this);
                                                    case void 0:
                                                        return function(t) {
                                                            for (var r = 0, e = 0; e < t.zzk2; e++)
                                                                for (var o = 0; o < t.zzj2; o++) r += t.get(e, o);
                                                            return r
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
                                                            for (var r = b(t.zzk2, 1), e = 0; e < t.zzk2; ++e)
                                                                for (var o = 0; o < t.zzj2; ++o) r[e] *= t.get(e, o);
                                                            return r
                                                        }(this);
                                                    case "zz23":
                                                        return function(t) {
                                                            for (var r = b(t.zzj2, 1), e = 0; e < t.zzk2; ++e)
                                                                for (var o = 0; o < t.zzj2; ++o) r[o] *= t.get(e, o);
                                                            return r
                                                        }(this);
                                                    case void 0:
                                                        return function(t) {
                                                            for (var r = 1, e = 0; e < t.zzk2; e++)
                                                                for (var o = 0; o < t.zzj2; o++) r *= t.get(e, o);
                                                            return r
                                                        }(this);
                                                    default:
                                                        throw new Error("inzyp13 option: ".concat(t))
                                                }
                                            }
                                        }, {
                                            key: "zz91",
                                            value: function(t) {
                                                var r = this.sum(t);
                                                switch (t) {
                                                    case "row":
                                                        for (var e = 0; e < this.zzk2; e++) r[e] /= this.zzj2;
                                                        return r;
                                                    case "zz23":
                                                        for (var o = 0; o < this.zzj2; o++) r[o] /= this.zzk2;
                                                        return r;
                                                    case void 0:
                                                        return r / this.zzC1;
                                                    default:
                                                        throw new Error("inzyp13 option: ".concat(t))
                                                }
                                            }
                                        }, {
                                            key: "zzA1",
                                            value: function(t) {
                                                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                                if ("object" == c(t) && (r = t, t = void 0), "object" != c(r)) throw new Error();
                                                var e = r,
                                                    o = e.unbiased,
                                                    n = void 0 === o || o,
                                                    s = e.zz91,
                                                    i = void 0 === s ? this.zz91(t) : s;
                                                if ("boolean" != typeof n) throw new Error();
                                                switch (t) {
                                                    case "row":
                                                        if (!Array.isArray(i)) throw new Error();
                                                        return function(t, r, e) {
                                                            for (var o = t.zzk2, n = t.zzj2, s = [], i = 0; i < o; i++) {
                                                                for (var a = 0, u = 0, h = 0, f = 0; f < n; f++) a += h = t.get(i, f) - e[i], u += h * h;
                                                                r ? s.push((u - a * a / n) / (n - 1)) : s.push((u - a * a / n) / n)
                                                            }
                                                            return s
                                                        }(this, n, i);
                                                    case "zz23":
                                                        if (!Array.isArray(i)) throw new Error();
                                                        return function(t, r, e) {
                                                            for (var o = t.zzk2, n = t.zzj2, s = [], i = 0; i < n; i++) {
                                                                for (var a = 0, u = 0, h = 0, f = 0; f < o; f++) a += h = t.get(f, i) - e[i], u += h * h;
                                                                r ? s.push((u - a * a / o) / (o - 1)) : s.push((u - a * a / o) / o)
                                                            }
                                                            return s
                                                        }(this, n, i);
                                                    case void 0:
                                                        if ("number" != typeof i) throw new Error();
                                                        return function(t, r, e) {
                                                            for (var o = t.zzk2, n = t.zzj2, s = o * n, i = 0, a = 0, u = 0, h = 0; h < o; h++)
                                                                for (var f = 0; f < n; f++) i += u = t.get(h, f) - e, a += u * u;
                                                            return r ? (a - i * i / s) / (s - 1) : (a - i * i / s) / s
                                                        }(this, n, i);
                                                    default:
                                                        throw new Error("inzyp13 option: ".concat(t))
                                                }
                                            }
                                        }, { key: "zzB1", value: function(t, r) { "object" == c(t) && (r = t, t = void 0); var e = this.zzA1(t, r); if (void 0 === t) return Math.sqrt(e); for (var o = 0; o < e.length; o++) e[o] = Math.sqrt(e[o]); return e } }, {
                                            key: "center",
                                            value: function(t) {
                                                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                                if ("object" == c(t) && (r = t, t = void 0), "object" != c(r)) throw new Error();
                                                var e = r.center,
                                                    o = void 0 === e ? this.zz91(t) : e;
                                                switch (t) {
                                                    case "row":
                                                        if (!Array.isArray(o)) throw new Error();
                                                        return function(t, r) {
                                                            for (var e = 0; e < t.zzk2; e++)
                                                                for (var o = 0; o < t.zzj2; o++) t.set(e, o, t.get(e, o) - r[e])
                                                        }(this, o), this;
                                                    case "zz23":
                                                        if (!Array.isArray(o)) throw new Error();
                                                        return function(t, r) {
                                                            for (var e = 0; e < t.zzk2; e++)
                                                                for (var o = 0; o < t.zzj2; o++) t.set(e, o, t.get(e, o) - r[o])
                                                        }(this, o), this;
                                                    case void 0:
                                                        if ("number" != typeof o) throw new Error();
                                                        return function(t, r) {
                                                            for (var e = 0; e < t.zzk2; e++)
                                                                for (var o = 0; o < t.zzj2; o++) t.set(e, o, t.get(e, o) - r)
                                                        }(this, o), this;
                                                    default:
                                                        throw new Error("inzyp13 option: ".concat(t))
                                                }
                                            }
                                        }, {
                                            key: "scale",
                                            value: function(t) {
                                                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                                if ("object" == c(t) && (r = t, t = void 0), "object" != c(r)) throw new Error();
                                                var e = r.scale;
                                                switch (t) {
                                                    case "row":
                                                        if (void 0 === e) e = function(t) {
                                                            for (var r = [], e = 0; e < t.zzk2; e++) {
                                                                for (var o = 0, n = 0; n < t.zzj2; n++) o += Math.pow(t.get(e, n), 2) / (t.zzj2 - 1);
                                                                r.push(Math.sqrt(o))
                                                            }
                                                            return r
                                                        }(this);
                                                        else if (!Array.isArray(e)) throw new Error();
                                                        return function(t, r) {
                                                            for (var e = 0; e < t.zzk2; e++)
                                                                for (var o = 0; o < t.zzj2; o++) t.set(e, o, t.get(e, o) / r[e])
                                                        }(this, e), this;
                                                    case "zz23":
                                                        if (void 0 === e) e = function(t) {
                                                            for (var r = [], e = 0; e < t.zzj2; e++) {
                                                                for (var o = 0, n = 0; n < t.zzk2; n++) o += Math.pow(t.get(n, e), 2) / (t.zzk2 - 1);
                                                                r.push(Math.sqrt(o))
                                                            }
                                                            return r
                                                        }(this);
                                                        else if (!Array.isArray(e)) throw new Error();
                                                        return function(t, r) {
                                                            for (var e = 0; e < t.zzk2; e++)
                                                                for (var o = 0; o < t.zzj2; o++) t.set(e, o, t.get(e, o) / r[o])
                                                        }(this, e), this;
                                                    case void 0:
                                                        if (void 0 === e) e = function(t) {
                                                            for (var r = t.zzC1 - 1, e = 0, o = 0; o < t.zzj2; o++)
                                                                for (var n = 0; n < t.zzk2; n++) e += Math.pow(t.get(n, o), 2) / r;
                                                            return Math.sqrt(e)
                                                        }(this);
                                                        else if ("number" != typeof e) throw new Error();
                                                        return function(t, r) {
                                                            for (var e = 0; e < t.zzk2; e++)
                                                                for (var o = 0; o < t.zzj2; o++) t.set(e, o, t.get(e, o) / r)
                                                        }(this, e), this;
                                                    default:
                                                        throw new Error("inzyp13 option: ".concat(t))
                                                }
                                            }
                                        }, { key: "toString", value: function(t) { return l(this, t) } }, { key: "zzC1", get: function() { return this.zzk2 * this.zzj2 } }], [{
                                            key: "zzD1",
                                            value: function(t, r, e) {
                                                if (t * r !== e.length) throw new Error();
                                                for (var o = new R(t, r), n = 0; n < t; n++)
                                                    for (var s = 0; s < r; s++) o.set(n, s, e[n * r + s]);
                                                return o
                                            }
                                        }, { key: "zzE1", value: function(t) { for (var r = new R(1, t.length), e = 0; e < t.length; e++) r.set(0, e, t[e]); return r } }, { key: "zzF1", value: function(t) { for (var r = new R(t.length, 1), e = 0; e < t.length; e++) r.set(e, 0, t[e]); return r } }, { key: "zzG1", value: function(t, r) { return new R(t, r) } }, { key: "zzH1", value: function(t, r) { return new R(t, r).zzL(1) } }, {
                                            key: "rand",
                                            value: function(t, r) {
                                                var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                                if ("object" != c(e)) throw new Error();
                                                for (var o = e.random, n = void 0 === o ? Math.random : o, s = new R(t, r), i = 0; i < t; i++)
                                                    for (var a = 0; a < r; a++) s.set(i, a, n());
                                                return s
                                            }
                                        }, {
                                            key: "zzI1",
                                            value: function(t, r) {
                                                var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                                if ("object" != c(e)) throw new Error();
                                                var o = e.min,
                                                    n = void 0 === o ? 0 : o,
                                                    s = e.max,
                                                    i = void 0 === s ? 1e3 : s,
                                                    a = e.random,
                                                    u = void 0 === a ? Math.random : a;
                                                if (!Number.isInteger(n)) throw new Error();
                                                if (!Number.isInteger(i)) throw new Error();
                                                if (n >= i) throw new Error();
                                                for (var h = i - n, f = new R(t, r), l = 0; l < t; l++)
                                                    for (var v = 0; v < r; v++) {
                                                        var m = n + Math.round(u() * h);
                                                        f.set(l, v, m)
                                                    }
                                                return f
                                            }
                                        }, { key: "zzJ1", value: function(t, r, e) { void 0 === r && (r = t), void 0 === e && (e = 1); for (var o = Math.min(t, r), n = this.zzG1(t, r), s = 0; s < o; s++) n.set(s, s, e); return n } }, {
                                            key: "zzo",
                                            value: function(t, r, e) {
                                                var o = t.length;
                                                void 0 === r && (r = o), void 0 === e && (e = r);
                                                for (var n = Math.min(o, r, e), s = this.zzG1(r, e), i = 0; i < n; i++) s.set(i, i, t[i]);
                                                return s
                                            }
                                        }, {
                                            key: "min",
                                            value: function(t, r) {
                                                t = this.zzL1(t), r = this.zzL1(r);
                                                for (var e = t.zzk2, o = t.zzj2, n = new R(e, o), s = 0; s < e; s++)
                                                    for (var i = 0; i < o; i++) n.set(s, i, Math.min(t.get(s, i), r.get(s, i)));
                                                return n
                                            }
                                        }, {
                                            key: "max",
                                            value: function(t, r) {
                                                t = this.zzL1(t), r = this.zzL1(r);
                                                for (var e = t.zzk2, o = t.zzj2, n = new this(e, o), s = 0; s < e; s++)
                                                    for (var i = 0; i < o; i++) n.set(s, i, Math.max(t.get(s, i), r.get(s, i)));
                                                return n
                                            }
                                        }, { key: "zzL1", value: function(r) { return t.zzM1(r) ? r : new R(r) } }, { key: "zzM1", value: function(t) { return null != t && "Matrix" === t.klass } }]), t
                                    }();

                                    function S(t, r) { return t - r }
                                    k.prototype.klass = "Matrix", "undefined" != typeof Symbol && (k.prototype[Symbol.for("zze3")] = function() { return l(this) }), k.random = k.rand, k.randomInt = k.zzI1, k.zzoonal = k.zzo, k.prototype.zzoonal = k.prototype.zzo, k.zzo2 = k.zzJ1, k.prototype.negate = k.prototype.neg, k.prototype.zzI3 = k.prototype.zzz;
                                    var R = function(t) {
                                        o(e, k);
                                        var r = s(e);

                                        function e(t, o) {
                                            var n;
                                            if (u(this, e), n = r.call(this), e.zzM1(t)) return i(n, t.clone());
                                            if (Number.isInteger(t) && t >= 0) n.dataFlatten = new Float32Array(o * t);
                                            else {
                                                if (!Array.isArray(t)) throw new Error();
                                                var s = t;
                                                if ("number" != typeof(o = (t = s.length) ? s[0].length : 0)) n.dataFlatten = new Float32Array(s);
                                                else {
                                                    n.dataFlatten = new Float32Array(o * t);
                                                    for (var a = 0; a < t; a++)
                                                        for (var h = 0; h < o; h++) n.dataFlatten[a * o + h] = s[a][h]
                                                }
                                            }
                                            return n.zzk2 = t, n.zzj2 = o, i(n)
                                        }
                                        return f(e, [{ key: "set", value: function(t, r, e) { return this.dataFlatten[t * this.zzj2 + r] = e, this } }, { key: "get", value: function(t, r) { return this.dataFlatten[t * this.zzj2 + r] } }, { key: "zzn3", value: function(t, r, e) { this.dataFlatten[t * this.zzj2 + r] += e } }, { key: "mulComponent", value: function(t, r, e) { this.dataFlatten[t * this.zzj2 + r] *= e } }]), e
                                    }();
                                    ! function(t, r) {
                                        t.prototype.add = function(t) { return "number" == typeof t ? this.addS(t) : this.addM(t) }, t.prototype.addS = function(t) {
                                            for (var r = 0; r < this.zzk2; r++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(r, e, this.get(r, e) + t);
                                            return this
                                        }, t.prototype.addM = function(t) {
                                            if (t = r.zzL1(t), this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2) throw new Error();
                                            for (var e = 0; e < this.zzk2; e++)
                                                for (var o = 0; o < this.zzj2; o++) this.set(e, o, this.get(e, o) + t.get(e, o));
                                            return this
                                        }, t.add = function(t, e) { return new r(t).add(e) }, t.prototype.sub = function(t) { return "number" == typeof t ? this.subS(t) : this.subM(t) }, t.prototype.subS = function(t) {
                                            for (var r = 0; r < this.zzk2; r++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(r, e, this.get(r, e) - t);
                                            return this
                                        }, t.prototype.subM = function(t) {
                                            if (t = r.zzL1(t), this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2) throw new Error();
                                            for (var e = 0; e < this.zzk2; e++)
                                                for (var o = 0; o < this.zzj2; o++) this.set(e, o, this.get(e, o) - t.get(e, o));
                                            return this
                                        }, t.sub = function(t, e) { return new r(t).sub(e) }, t.prototype.subtract = t.prototype.sub, t.prototype.subtractS = t.prototype.subS, t.prototype.subtractM = t.prototype.subM, t.subtract = t.sub, t.prototype.zzi3 = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(t, r, 0)
                                        }, t.prototype.mul = function(t) { return "number" == typeof t ? this.mulS(t) : this.mulM(t) }, t.prototype.mulS = function(t) {
                                            for (var r = 0; r < this.zzk2; r++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(r, e, this.get(r, e) * t);
                                            return this
                                        }, t.prototype.mulM = function(t) {
                                            if (t = r.zzL1(t), this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2) throw new Error();
                                            for (var e = 0; e < this.zzk2; e++)
                                                for (var o = 0; o < this.zzj2; o++) this.set(e, o, this.get(e, o) * t.get(e, o));
                                            return this
                                        }, t.mul = function(t, e) { return new r(t).mul(e) }, t.prototype.multiply = t.prototype.mul, t.prototype.multiplyS = t.prototype.mulS, t.prototype.multiplyM = t.prototype.mulM, t.multiply = t.mul, t.prototype.div = function(t) { return "number" == typeof t ? this.divS(t) : this.divM(t) }, t.prototype.divS = function(t) {
                                            for (var r = 0; r < this.zzk2; r++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(r, e, this.get(r, e) / t);
                                            return this
                                        }, t.prototype.divM = function(t) {
                                            if (t = r.zzL1(t), this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2) throw new Error();
                                            for (var e = 0; e < this.zzk2; e++)
                                                for (var o = 0; o < this.zzj2; o++) this.set(e, o, this.get(e, o) / t.get(e, o));
                                            return this
                                        }, t.div = function(t, e) { return new r(t).div(e) }, t.prototype.divide = t.prototype.div, t.prototype.divideS = t.prototype.divS, t.prototype.divideM = t.prototype.divM, t.divide = t.div, t.prototype.mod = function(t) { return "number" == typeof t ? this.modS(t) : this.modM(t) }, t.prototype.modS = function(t) {
                                            for (var r = 0; r < this.zzk2; r++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(r, e, this.get(r, e) % t);
                                            return this
                                        }, t.prototype.modM = function(t) {
                                            if (t = r.zzL1(t), this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2) throw new Error();
                                            for (var e = 0; e < this.zzk2; e++)
                                                for (var o = 0; o < this.zzj2; o++) this.set(e, o, this.get(e, o) % t.get(e, o));
                                            return this
                                        }, t.mod = function(t, e) { return new r(t).mod(e) }, t.prototype.zzO3 = t.prototype.mod, t.prototype.zzO3S = t.prototype.modS, t.prototype.zzO3M = t.prototype.modM, t.zzO3 = t.mod, t.prototype.and = function(t) { return "number" == typeof t ? this.andS(t) : this.andM(t) }, t.prototype.andS = function(t) {
                                            for (var r = 0; r < this.zzk2; r++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(r, e, this.get(r, e) & t);
                                            return this
                                        }, t.prototype.andM = function(t) {
                                            if (t = r.zzL1(t), this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2) throw new Error();
                                            for (var e = 0; e < this.zzk2; e++)
                                                for (var o = 0; o < this.zzj2; o++) this.set(e, o, this.get(e, o) & t.get(e, o));
                                            return this
                                        }, t.and = function(t, e) { return new r(t).and(e) }, t.prototype.or = function(t) { return "number" == typeof t ? this.orS(t) : this.orM(t) }, t.prototype.orS = function(t) {
                                            for (var r = 0; r < this.zzk2; r++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(r, e, this.get(r, e) | t);
                                            return this
                                        }, t.prototype.orM = function(t) {
                                            if (t = r.zzL1(t), this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2) throw new Error();
                                            for (var e = 0; e < this.zzk2; e++)
                                                for (var o = 0; o < this.zzj2; o++) this.set(e, o, this.get(e, o) | t.get(e, o));
                                            return this
                                        }, t.or = function(t, e) { return new r(t).or(e) }, t.prototype.xor = function(t) { return "number" == typeof t ? this.xorS(t) : this.xorM(t) }, t.prototype.xorS = function(t) {
                                            for (var r = 0; r < this.zzk2; r++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(r, e, this.get(r, e) ^ t);
                                            return this
                                        }, t.prototype.xorM = function(t) {
                                            if (t = r.zzL1(t), this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2) throw new Error();
                                            for (var e = 0; e < this.zzk2; e++)
                                                for (var o = 0; o < this.zzj2; o++) this.set(e, o, this.get(e, o) ^ t.get(e, o));
                                            return this
                                        }, t.xor = function(t, e) { return new r(t).xor(e) }, t.prototype.zzQ3 = function(t) { return "number" == typeof t ? this.zzQ3S(t) : this.zzQ3M(t) }, t.prototype.zzQ3S = function(t) {
                                            for (var r = 0; r < this.zzk2; r++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(r, e, this.get(r, e) << t);
                                            return this
                                        }, t.prototype.zzQ3M = function(t) {
                                            if (t = r.zzL1(t), this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2) throw new Error();
                                            for (var e = 0; e < this.zzk2; e++)
                                                for (var o = 0; o < this.zzj2; o++) this.set(e, o, this.get(e, o) << t.get(e, o));
                                            return this
                                        }, t.zzQ3 = function(t, e) { return new r(t).zzQ3(e) }, t.prototype.zzJ3 = function(t) { return "number" == typeof t ? this.zzJ3S(t) : this.zzJ3M(t) }, t.prototype.zzJ3S = function(t) {
                                            for (var r = 0; r < this.zzk2; r++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(r, e, this.get(r, e) >> t);
                                            return this
                                        }, t.prototype.zzJ3M = function(t) {
                                            if (t = r.zzL1(t), this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2) throw new Error();
                                            for (var e = 0; e < this.zzk2; e++)
                                                for (var o = 0; o < this.zzj2; o++) this.set(e, o, this.get(e, o) >> t.get(e, o));
                                            return this
                                        }, t.zzJ3 = function(t, e) { return new r(t).zzJ3(e) }, t.prototype.zzL3 = function(t) { return "number" == typeof t ? this.zzL3S(t) : this.zzL3M(t) }, t.prototype.zzL3S = function(t) {
                                            for (var r = 0; r < this.zzk2; r++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(r, e, this.get(r, e) >>> t);
                                            return this
                                        }, t.prototype.zzL3M = function(t) {
                                            if (t = r.zzL1(t), this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2) throw new Error();
                                            for (var e = 0; e < this.zzk2; e++)
                                                for (var o = 0; o < this.zzj2; o++) this.set(e, o, this.get(e, o) >>> t.get(e, o));
                                            return this
                                        }, t.zzL3 = function(t, e) { return new r(t).zzL3(e) }, t.prototype.zzK3 = t.prototype.zzL3, t.prototype.zzK3S = t.prototype.zzL3S, t.prototype.zzK3M = t.prototype.zzL3M, t.zzK3 = t.zzL3, t.prototype.not = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(t, r, ~this.get(t, r));
                                            return this
                                        }, t.not = function(t) { return new r(t).not() }, t.prototype.abs = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(t, r, Math.abs(this.get(t, r)));
                                            return this
                                        }, t.abs = function(t) { return new r(t).abs() }, t.prototype.acos = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(t, r, Math.acos(this.get(t, r)));
                                            return this
                                        }, t.acos = function(t) { return new r(t).acos() }, t.prototype.zzM3 = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(t, r, Math.zzM3(this.get(t, r)));
                                            return this
                                        }, t.zzM3 = function(t) { return new r(t).zzM3() }, t.prototype.asin = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(t, r, Math.asin(this.get(t, r)));
                                            return this
                                        }, t.asin = function(t) { return new r(t).asin() }, t.prototype.zzN3 = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(t, r, Math.zzN3(this.get(t, r)));
                                            return this
                                        }, t.zzN3 = function(t) { return new r(t).zzN3() }, t.prototype.atan = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(t, r, Math.atan(this.get(t, r)));
                                            return this
                                        }, t.atan = function(t) { return new r(t).atan() }, t.prototype.atanh = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(t, r, Math.atanh(this.get(t, r)));
                                            return this
                                        }, t.atanh = function(t) { return new r(t).atanh() }, t.prototype.cbrt = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(t, r, Math.cbrt(this.get(t, r)));
                                            return this
                                        }, t.cbrt = function(t) { return new r(t).cbrt() }, t.prototype.ceil = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(t, r, Math.ceil(this.get(t, r)));
                                            return this
                                        }, t.ceil = function(t) { return new r(t).ceil() }, t.prototype.clz32 = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(t, r, Math.clz32(this.get(t, r)));
                                            return this
                                        }, t.clz32 = function(t) { return new r(t).clz32() }, t.prototype.cos = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(t, r, Math.cos(this.get(t, r)));
                                            return this
                                        }, t.cos = function(t) { return new r(t).cos() }, t.prototype.cosh = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(t, r, Math.cosh(this.get(t, r)));
                                            return this
                                        }, t.cosh = function(t) { return new r(t).cosh() }, t.prototype.exp = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(t, r, Math.exp(this.get(t, r)));
                                            return this
                                        }, t.exp = function(t) { return new r(t).exp() }, t.prototype.expm1 = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(t, r, Math.expm1(this.get(t, r)));
                                            return this
                                        }, t.expm1 = function(t) { return new r(t).expm1() }, t.prototype.floor = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(t, r, Math.floor(this.get(t, r)));
                                            return this
                                        }, t.floor = function(t) { return new r(t).floor() }, t.prototype.fround = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(t, r, Math.fround(this.get(t, r)));
                                            return this
                                        }, t.fround = function(t) { return new r(t).fround() }, t.prototype.log = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(t, r, Math.log(this.get(t, r)));
                                            return this
                                        }, t.log = function(t) { return new r(t).log() }, t.prototype.log1p = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(t, r, Math.log1p(this.get(t, r)));
                                            return this
                                        }, t.log1p = function(t) { return new r(t).log1p() }, t.prototype.log10 = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(t, r, Math.log10(this.get(t, r)));
                                            return this
                                        }, t.log10 = function(t) { return new r(t).log10() }, t.prototype.log2 = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(t, r, Math.log2(this.get(t, r)));
                                            return this
                                        }, t.log2 = function(t) { return new r(t).log2() }, t.prototype.round = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(t, r, Math.round(this.get(t, r)));
                                            return this
                                        }, t.round = function(t) { return new r(t).round() }, t.prototype.sign = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(t, r, Math.sign(this.get(t, r)));
                                            return this
                                        }, t.sign = function(t) { return new r(t).sign() }, t.prototype.sin = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(t, r, Math.sin(this.get(t, r)));
                                            return this
                                        }, t.sin = function(t) { return new r(t).sin() }, t.prototype.sinh = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(t, r, Math.sinh(this.get(t, r)));
                                            return this
                                        }, t.sinh = function(t) { return new r(t).sinh() }, t.prototype.sqrt = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(t, r, Math.sqrt(this.get(t, r)));
                                            return this
                                        }, t.sqrt = function(t) { return new r(t).sqrt() }, t.prototype.tan = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(t, r, Math.tan(this.get(t, r)));
                                            return this
                                        }, t.tan = function(t) { return new r(t).tan() }, t.prototype.tanh = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(t, r, Math.tanh(this.get(t, r)));
                                            return this
                                        }, t.tanh = function(t) { return new r(t).tanh() }, t.prototype.trunc = function() {
                                            for (var t = 0; t < this.zzk2; t++)
                                                for (var r = 0; r < this.zzj2; r++) this.set(t, r, Math.trunc(this.get(t, r)));
                                            return this
                                        }, t.trunc = function(t) { return new r(t).trunc() }, t.pow = function(t, e) { return new r(t).pow(e) }, t.prototype.pow = function(t) { return "number" == typeof t ? this.powS(t) : this.powM(t) }, t.prototype.powS = function(t) {
                                            for (var r = 0; r < this.zzk2; r++)
                                                for (var e = 0; e < this.zzj2; e++) this.set(r, e, Math.pow(this.get(r, e), t));
                                            return this
                                        }, t.prototype.powM = function(t) {
                                            if (t = r.zzL1(t), this.zzk2 !== t.zzk2 || this.zzj2 !== t.zzj2) throw new Error();
                                            for (var e = 0; e < this.zzk2; e++)
                                                for (var o = 0; o < this.zzj2; o++) this.set(e, o, Math.pow(this.get(e, o), t.get(e, o)));
                                            return this
                                        }
                                    }(k, R);
                                    var E = function(t) {
                                        o(e, k);
                                        var r = s(e);

                                        function e(t) {
                                            var o;
                                            u(this, e), (o = r.call(this)).zzk2 = t.length, o.zzj2 = t[0].length, o.dataFlatten = new Float32Array(o.zzk2 * o.zzj2);
                                            for (var n = 0; n < o.zzk2; n++)
                                                for (var s = 0; s < o.zzj2; s++) o.dataFlatten[n * o.zzj2 + s] = t[n][s];
                                            return o
                                        }
                                        return f(e, [{ key: "set", value: function(t, r, e) { return this.dataFlatten[t * this.zzj2 + r] = e, this } }, { key: "get", value: function(t, r) { return this.dataFlatten[t * this.zzj2 + r] } }]), e
                                    }();

                                    function T(t, r) { var e = 0; return Math.abs(t) > Math.abs(r) ? (e = r / t, Math.abs(t) * Math.sqrt(1 + e * e)) : 0 !== r ? (e = t / r, Math.abs(r) * Math.sqrt(1 + e * e)) : 0 }
                                    var A = function() {
                                            function t(r) {
                                                u(this, t);
                                                var e = (r = E.zzL1(r)).zzk2,
                                                    o = r.zzj2;
                                                this.QR = r.clone(), this.X = r.clone(), this.Rzzo = new Float32Array(o), this.m = e, this.n = o, this.update(r)
                                            }
                                            return f(t, [{
                                                key: "update",
                                                value: function(t) {
                                                    var r, e, o, n, s = this.QR,
                                                        i = this.m,
                                                        a = this.n,
                                                        u = this.Rzzo;
                                                    for (s.copy(t), o = 0; o < a; o++) {
                                                        var h = 0;
                                                        for (r = o; r < i; r++) h = T(h, s.get(r, o));
                                                        if (0 !== h) { for (s.get(o, o) < 0 && (h = -h), r = o; r < i; r++) s.set(r, o, s.get(r, o) / h); for (s.set(o, o, s.get(o, o) + 1), e = o + 1; e < a; e++) { for (n = 0, r = o; r < i; r++) n += s.get(r, o) * s.get(r, e); for (n = -n / s.get(o, o), r = o; r < i; r++) s.set(r, e, s.get(r, e) + n * s.get(r, o)) } }
                                                        u[o] = -h
                                                    }
                                                }
                                            }, {
                                                key: "solve",
                                                value: function(t) {
                                                    var r = this.QR,
                                                        e = r.zzk2,
                                                        o = t.zzj2,
                                                        n = this.X;
                                                    n.copy(t);
                                                    var s, i, a, u, h = r.zzj2;
                                                    for (a = 0; a < h; a++)
                                                        for (i = 0; i < o; i++) { for (u = 0, s = a; s < e; s++) u += r.get(s, a) * n.get(s, i); for (u = -u / r.get(a, a), s = a; s < e; s++) n.set(s, i, n.get(s, i) + u * r.get(s, a)) }
                                                    for (a = h - 1; a >= 0; a--) {
                                                        for (i = 0; i < o; i++) n.set(a, i, n.get(a, i) / this.Rzzo[a]);
                                                        for (s = 0; s < a; s++)
                                                            for (i = 0; i < o; i++) n.set(s, i, n.get(s, i) - n.get(a, i) * r.get(s, a))
                                                    }
                                                    return n.zz31(0, h - 1, 0, o - 1)
                                                }
                                            }, {
                                                key: "zzY1",
                                                value: function() {
                                                    for (var t = this.QR.zzj2, r = 0; r < t; r++)
                                                        if (0 === this.Rzzo[r]) return !1;
                                                    return !0
                                                }
                                            }, {
                                                key: "zzW1",
                                                get: function() {
                                                    var t, r, e = this.QR,
                                                        o = e.zzj2,
                                                        n = new R(o, o);
                                                    for (t = 0; t < o; t++)
                                                        for (r = 0; r < o; r++) t < r ? n.set(t, r, e.get(t, r)) : t === r ? n.set(t, r, this.Rzzo[t]) : n.set(t, r, 0);
                                                    return n
                                                }
                                            }, {
                                                key: "zzZ1",
                                                get: function() {
                                                    var t, r, e, o, n = this.QR,
                                                        s = n.zzk2,
                                                        i = n.zzj2,
                                                        a = new R(s, i);
                                                    for (e = i - 1; e >= 0; e--) {
                                                        for (t = 0; t < s; t++) a.set(t, e, 0);
                                                        for (a.set(e, e, 1), r = e; r < i; r++)
                                                            if (0 !== n.get(e, e)) { for (o = 0, t = e; t < s; t++) o += n.get(t, e) * a.get(t, r); for (o = -o / n.get(e, e), t = e; t < s; t++) a.set(t, r, a.get(t, r) + o * n.get(t, e)) }
                                                    }
                                                    return a
                                                }
                                            }]), t
                                        }(),
                                        C = function() {
                                            function t(r, e) {
                                                u(this, t);
                                                var o = r.zzk2,
                                                    n = r.zzj2,
                                                    s = Boolean(e.zzx3),
                                                    i = Boolean(e.zzZ2),
                                                    a = r.clone(),
                                                    h = Math.min(o + 1, n),
                                                    f = Math.min(o, n),
                                                    c = new Float32Array(h),
                                                    l = new R(o, f),
                                                    v = new R(n, n),
                                                    m = new Float32Array(n),
                                                    g = new Float32Array(o),
                                                    w = new Float32Array(h),
                                                    p = R.zzG1(h, h),
                                                    y = R.zzG1(v.zzk2, l.zzk2),
                                                    d = new R(v.zzk2, h),
                                                    b = new R(v.zzk2, l.zzk2);
                                                this.m = o, this.n = n, this.ni = h, this.nu = f, this.s = c, this.si = w, this.work = g, this.e = m, this.U = l, this.V = v, this.wantu = s, this.wantv = i, this.a = a, this.Ls = p, this.VLU = y, this.X = d, this.Y = b, this.compute()
                                            }
                                            return f(t, [{ key: "zz24", value: function(t) { this.a.copy(t), this.U.reset(), this.V.reset(), this.compute() } }, {
                                                key: "compute",
                                                value: function() {
                                                    for (var t = this.m, r = this.n, e = this.ni, o = this.nu, n = this.s, s = this.si, i = this.work, a = this.e, u = this.U, h = this.V, f = this.wantu, c = this.wantv, l = this.a, v = 0; v < e; v++) s[v] = v;
                                                    for (var m = Math.min(t - 1, r), g = Math.max(0, Math.min(r - 2, t)), w = Math.max(m, g), p = 0; p < w; p++) {
                                                        if (p < m) {
                                                            n[p] = 0;
                                                            for (var y = p; y < t; y++) n[p] = T(n[p], l.get(y, p));
                                                            if (0 !== n[p]) {
                                                                l.get(p, p) < 0 && (n[p] = -n[p]);
                                                                for (var d = p; d < t; d++) l.set(d, p, l.get(d, p) / n[p]);
                                                                l.set(p, p, l.get(p, p) + 1)
                                                            }
                                                            n[p] = -n[p]
                                                        }
                                                        for (var b = p + 1; b < r; b++) {
                                                            if (p < m && 0 !== n[p]) {
                                                                for (var M = 0, x = p; x < t; x++) M += l.get(x, p) * l.get(x, b);
                                                                M = -M / l.get(p, p);
                                                                for (var k = p; k < t; k++) l.set(k, b, l.get(k, b) + M * l.get(k, p))
                                                            }
                                                            a[b] = l.get(p, b)
                                                        }
                                                        if (f && p < m)
                                                            for (var S = p; S < t; S++) u.set(S, p, l.get(S, p));
                                                        if (p < g) {
                                                            a[p] = 0;
                                                            for (var R = p + 1; R < r; R++) a[p] = T(a[p], a[R]);
                                                            if (0 !== a[p]) {
                                                                a[p + 1] < 0 && (a[p] = 0 - a[p]);
                                                                for (var E = p + 1; E < r; E++) a[E] /= a[p];
                                                                a[p + 1] += 1
                                                            }
                                                            if (a[p] = -a[p], p + 1 < t && 0 !== a[p]) {
                                                                for (var A = p + 1; A < t; A++) i[A] = 0;
                                                                for (var C = p + 1; C < t; C++)
                                                                    for (var I = p + 1; I < r; I++) i[C] += a[I] * l.get(C, I);
                                                                for (var D = p + 1; D < r; D++)
                                                                    for (var N = -a[D] / a[p + 1], O = p + 1; O < t; O++) l.set(O, D, l.get(O, D) + N * i[O])
                                                            }
                                                            if (c)
                                                                for (var F = p + 1; F < r; F++) h.set(F, p, a[F])
                                                        }
                                                    }
                                                    var P = Math.min(r, t + 1);
                                                    if (m < r && (n[m] = l.get(m, m)), t < P && (n[P - 1] = 0), g + 1 < P && (a[g] = l.get(g, P - 1)), a[P - 1] = 0, f) {
                                                        for (var j = m; j < o; j++) {
                                                            for (var q = 0; q < t; q++) u.set(q, j, 0);
                                                            u.set(j, j, 1)
                                                        }
                                                        for (var V = m - 1; V >= 0; V--)
                                                            if (0 !== n[V]) {
                                                                for (var z = V + 1; z < o; z++) {
                                                                    for (var Q = 0, L = V; L < t; L++) Q += u.get(L, V) * u.get(L, z);
                                                                    Q = -Q / u.get(V, V);
                                                                    for (var B = V; B < t; B++) u.set(B, z, u.get(B, z) + Q * u.get(B, V))
                                                                }
                                                                for (var U = V; U < t; U++) u.set(U, V, -u.get(U, V));
                                                                u.set(V, V, 1 + u.get(V, V));
                                                                for (var _ = 0; _ < V - 1; _++) u.set(_, V, 0)
                                                            } else {
                                                                for (var G = 0; G < t; G++) u.set(G, V, 0);
                                                                u.set(V, V, 1)
                                                            }
                                                    }
                                                    if (c)
                                                        for (var W = r - 1; W >= 0; W--) {
                                                            if (W < g && 0 !== a[W])
                                                                for (var X = W + 1; X < r; X++) {
                                                                    for (var Y = 0, J = W + 1; J < r; J++) Y += h.get(J, W) * h.get(J, X);
                                                                    Y = -Y / h.get(W + 1, W);
                                                                    for (var K = W + 1; K < r; K++) h.set(K, X, h.get(K, X) + Y * h.get(K, W))
                                                                }
                                                            for (var H = 0; H < r; H++) h.set(H, W, 0);
                                                            h.set(W, W, 1)
                                                        }
                                                    for (var Z = P - 1, $ = Number.EPSILON; P > 0;) {
                                                        var tt = void 0,
                                                            rt = void 0;
                                                        for (tt = P - 2; tt >= -1 && -1 !== tt; tt--) { var et = Number.MIN_VALUE + $ * Math.abs(n[tt] + Math.abs(n[tt + 1])); if (Math.abs(a[tt]) <= et || Number.isNaN(a[tt])) { a[tt] = 0; break } }
                                                        if (tt === P - 2) rt = 4;
                                                        else {
                                                            var ot = void 0;
                                                            for (ot = P - 1; ot >= tt && ot !== tt; ot--) { var nt = (ot !== P ? Math.abs(a[ot]) : 0) + (ot !== tt + 1 ? Math.abs(a[ot - 1]) : 0); if (Math.abs(n[ot]) <= $ * nt) { n[ot] = 0; break } }
                                                            ot === tt ? rt = 3 : ot === P - 1 ? rt = 1 : (rt = 2, tt = ot)
                                                        }
                                                        switch (tt++, rt) {
                                                            case 1:
                                                                var st = a[P - 2];
                                                                a[P - 2] = 0;
                                                                for (var it = P - 2; it >= tt; it--) {
                                                                    var at = T(n[it], st),
                                                                        ut = n[it] / at,
                                                                        ht = st / at;
                                                                    if (n[it] = at, it !== tt && (st = -ht * a[it - 1], a[it - 1] = ut * a[it - 1]), c)
                                                                        for (var ft = 0; ft < r; ft++) at = ut * h.get(ft, it) + ht * h.get(ft, P - 1), h.set(ft, P - 1, -ht * h.get(ft, it) + ut * h.get(ft, P - 1)), h.set(ft, it, at)
                                                                }
                                                                break;
                                                            case 2:
                                                                var ct = a[tt - 1];
                                                                a[tt - 1] = 0;
                                                                for (var lt = tt; lt < P; lt++) {
                                                                    var vt = T(n[lt], ct),
                                                                        mt = n[lt] / vt,
                                                                        gt = ct / vt;
                                                                    if (n[lt] = vt, ct = -gt * a[lt], a[lt] = mt * a[lt], f)
                                                                        for (var wt = 0; wt < t; wt++) vt = mt * u.get(wt, lt) + gt * u.get(wt, tt - 1), u.set(wt, tt - 1, -gt * u.get(wt, lt) + mt * u.get(wt, tt - 1)), u.set(wt, lt, vt)
                                                                }
                                                                break;
                                                            case 3:
                                                                var pt = Math.max(Math.abs(n[P - 1]), Math.abs(n[P - 2]), Math.abs(a[P - 2]), Math.abs(n[tt]), Math.abs(a[tt])),
                                                                    yt = n[P - 1] / pt,
                                                                    dt = n[P - 2] / pt,
                                                                    bt = a[P - 2] / pt,
                                                                    Mt = n[tt] / pt,
                                                                    xt = a[tt] / pt,
                                                                    kt = ((dt + yt) * (dt - yt) + bt * bt) / 2,
                                                                    St = yt * bt * (yt * bt),
                                                                    Rt = 0;
                                                                0 === kt && 0 === St || (Rt = St / (kt + (Rt = kt < 0 ? 0 - Math.sqrt(kt * kt + St) : Math.sqrt(kt * kt + St))));
                                                                for (var Et = (Mt + yt) * (Mt - yt) + Rt, Tt = Mt * xt, At = tt; At < P - 1; At++) {
                                                                    var Ct = T(Et, Tt);
                                                                    0 === Ct && (Ct = Number.MIN_VALUE);
                                                                    var It = Et / Ct,
                                                                        Dt = Tt / Ct;
                                                                    if (At !== tt && (a[At - 1] = Ct), Et = It * n[At] + Dt * a[At], a[At] = It * a[At] - Dt * n[At], Tt = Dt * n[At + 1], n[At + 1] = It * n[At + 1], c)
                                                                        for (var Nt = 0; Nt < r; Nt++) Ct = It * h.get(Nt, At) + Dt * h.get(Nt, At + 1), h.set(Nt, At + 1, -Dt * h.get(Nt, At) + It * h.get(Nt, At + 1)), h.set(Nt, At, Ct);
                                                                    if (0 === (Ct = T(Et, Tt)) && (Ct = Number.MIN_VALUE), It = Et / Ct, Dt = Tt / Ct, n[At] = Ct, Et = It * a[At] + Dt * n[At + 1], n[At + 1] = -Dt * a[At] + It * n[At + 1], Tt = Dt * a[At + 1], a[At + 1] = It * a[At + 1], f && At < t - 1)
                                                                        for (var Ot = 0; Ot < t; Ot++) Ct = It * u.get(Ot, At) + Dt * u.get(Ot, At + 1), u.set(Ot, At + 1, -Dt * u.get(Ot, At) + It * u.get(Ot, At + 1)), u.set(Ot, At, Ct)
                                                                }
                                                                a[P - 2] = Et;
                                                                break;
                                                            case 4:
                                                                if (n[tt] <= 0 && (n[tt] = n[tt] < 0 ? -n[tt] : 0, c))
                                                                    for (var Ft = 0; Ft <= Z; Ft++) h.set(Ft, tt, -h.get(Ft, tt));
                                                                for (; tt < Z && !(n[tt] >= n[tt + 1]);) {
                                                                    var Pt = n[tt];
                                                                    if (n[tt] = n[tt + 1], n[tt + 1] = Pt, c && tt < r - 1)
                                                                        for (var jt = 0; jt < r; jt++) Pt = h.get(jt, tt + 1), h.set(jt, tt + 1, h.get(jt, tt)), h.set(jt, tt, Pt);
                                                                    if (f && tt < t - 1)
                                                                        for (var qt = 0; qt < t; qt++) Pt = u.get(qt, tt + 1), u.set(qt, tt + 1, u.get(qt, tt)), u.set(qt, tt, Pt);
                                                                    tt++
                                                                }
                                                                P--
                                                        }
                                                    }
                                                }
                                            }, {
                                                key: "solve",
                                                value: function(t) {
                                                    for (var r = t, e = this.zzf1, o = this.s.length, n = this.Ls, s = this.VLU, i = 0; i < o; i++) Math.abs(this.s[i]) <= e ? n.set(i, i, 0) : n.set(i, i, 1 / this.s[i]);
                                                    for (var a = this.U, u = this.zzh1, h = u.zzr(n), f = u.zzk2, c = a.zzk2, l = 0; l < f; l++)
                                                        for (var v = 0; v < c; v++) {
                                                            for (var m = 0, g = 0; g < o; g++) m += h.get(l, g) * a.get(v, g);
                                                            s.set(l, v, m)
                                                        }
                                                    return s.zzr(r)
                                                }
                                            }, { key: "zza1", value: function(t) { return this.solve(R.zzo(t)) } }, {
                                                key: "inverse",
                                                value: function() {
                                                    for (var t = this.V, r = this.zzf1, e = t.zzk2, o = t.zzj2, n = this.X, s = this.Y, i = 0; i < e; i++)
                                                        for (var a = 0; a < o; a++) Math.abs(this.s[a]) > r && n.set(i, a, t.get(i, a) / this.s[a]);
                                                    for (var u = this.U, h = u.zzk2, f = u.zzj2, c = 0; c < e; c++)
                                                        for (var l = 0; l < h; l++) {
                                                            for (var v = 0, m = 0; m < f; m++) v += n.get(c, m) * u.get(l, m);
                                                            s.set(c, l, v)
                                                        }
                                                    return s
                                                }
                                            }, { key: "zzb1", get: function() { return this.s[0] / this.s[Math.min(this.m, this.n) - 1] } }, { key: "zzp2", get: function() { return this.s[0] } }, { key: "zzd1", get: function() { for (var t = Math.max(this.m, this.n) * this.s[0] * Number.EPSILON, r = 0, e = this.s, o = 0, n = e.length; o < n; o++) e[o] > t && r++; return r } }, { key: "zzoonal", get: function() { return Array.from(this.s) } }, { key: "zzf1", get: function() { return Number.EPSILON / 2 * Math.max(this.m, this.n) * this.s[0] } }, { key: "zzg1", get: function() { return this.U } }, { key: "zzh1", get: function() { return this.V } }, { key: "zzoonalMatrix", get: function() { return R.zzo(this.s) } }]), t
                                        }(),
                                        I = [],
                                        D = function(t) {
                                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { zzj3: -1 },
                                                e = r.zzj3;
                                            if (-1 !== e && I[e]) { var o = I[e]; return o.zz24(t), o }
                                            var n = new C(t, Object.assign({ zzx3: !0, zzZ2: !0 }, r));
                                            return -1 !== e && (I[e] = n), n
                                        };

                                    function N(t, r) {
                                        var e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                            o = arguments.length > 3 ? arguments[3] : void 0;
                                        return e ? D(t, { zzj3: o }).solve(r) : new A(t).solve(r)
                                    }
                                    var O = function(t) {
                                            o(e, k);
                                            var r = s(e);

                                            function e(t, o, n) { var s; return u(this, e), (s = r.call(this)).matrix = t, s.zzk2 = o, s.zzj2 = n, s }
                                            return e
                                        }(),
                                        F = function(t) {
                                            o(e, O);
                                            var r = s(e);

                                            function e(t, o, n) {
                                                var s;
                                                u(this, e);
                                                var i = y(t, o, n);
                                                return (s = r.call(this, t, i.row.length, i.zz23.length)).zzy3 = i.row, s.zzl2 = i.zz23, s
                                            }
                                            return f(e, [{ key: "set", value: function(t, r, e) { return this.matrix.set(this.zzy3[t], this.zzl2[r], e), this } }, { key: "get", value: function(t, r) { return this.matrix.get(this.zzy3[t], this.zzl2[r]) } }]), e
                                        }();
                                    t.Matrix = R, t.QR = A, t.zzT2 = A, t.zz92 = D, t.default = R, t.zzU1 = function t(r) { if (0 === r.zzj2) return 1; var e, o, n, s, i, a; if (2 === r.zzj2) return e = r.get(0, 0), o = r.get(0, 1), n = r.get(1, 0), e * r.get(1, 1) - o * n; if (3 === r.zzj2) return s = new F(r, [1, 2], [1, 2]), i = new F(r, [1, 2], [0, 2]), a = new F(r, [1, 2], [0, 1]), e = r.get(0, 0), o = r.get(0, 1), n = r.get(0, 2), e * t(s) - o * t(i) + n * t(a); throw new Error() }, t.inverse2 = function(t) {
                                        var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                            e = arguments.length > 2 ? arguments[2] : void 0;
                                        return r ? D(t, { zzj3: e }).inverse() : N(t, R.zzJ1(t.zzk2))
                                    }, t.zzp3 = N, Object.defineProperty(t, "zzB", { value: !0 })
                                }, "object" == (void 0 === e ? "undefined" : c(e)) && void 0 !== r ? v(e) : v((l = falseThis ? globalThis : l || self).mlMatrix = {})
                            }, {}]
                        }, {}, [2])(2)
                    });;
                    sb = window.zyp;
                    a.callbackReady && (T.Na = a.callbackReady);
                    a.callbackTrack && (T.Nb = a.callbackTrack);
                    "undefined" !== typeof a.animateDelay && (T.pa = a.animateDelay);
                    "undefined" !== typeof a.NNCPath && (T.Kb = a.NNCPath);
                    "undefined" !== typeof a.NN && (T.Ya = a.NN);
                    "undefined" !== typeof a.followZRot &&
                        (T.sa = a.followZRot ? !0 : !1);
                    "undefined" !== typeof a.isTrackingEnabled && (T.kc = a.isTrackingEnabled ? !0 : !1);
                    da = Object.create(pa.Mf);
                    a.scanSettings && Object.assign(da, a.scanSettings);
                    V.V = da.translationScalingFactors.slice(0);
                    ta = Object.create(pa.$f);
                    a.stabilizationSettings && Object.assign(ta, a.stabilizationSettings);
                    var d = 1;
                    "undefined" !== typeof a.maxFacesDetected && (d = Math.max(1, a.maxFacesDetected));
                    if (d > pa.Bf) return Oa("MAXFACES_TOOHIGH"), !1;
                    ca.v({ O: d, sc: pa.Cf, $d: pa.Df, Dd: function(l) { return l.isDetected } });
                    if (a.canvas) T.W = a.canvas;
                    else {
                        if (!a.canvasId) return Oa("NO_CANVASID"), !1;
                        T.W = document.getElementById(a.canvasId);
                        if (!T.W) return Oa("INVALID_CANVASID"), !1
                    }
                    Q.B = T.W.width;
                    Q.G = T.W.height;
                    if (!Q.B || !Q.G) return Oa("INVALID_CANVASDIMENSIONS"), !1;
                    Q.Mb = Q.B / Q.G;
                    Na.v({ Hd: a.isKeepRunningOnWinFocusLost || !1, Jb: a.GPUBenchmarkerCallback || null, Za: T.pa });
                    ra.v({ uc: 0, n: da.nDetectsPerLoopRange[1] - da.nDetectsPerLoopRange[0] + 1, Od: da.nDetectsPerLoopRange[0] });
                    0 !== da.nDetectsPerLoop ? ra.Ec(da.nDetectsPerLoop) : ra.Oc();
                    var e =
                        0;
                    a.videoSettings && a.videoSettings.videoElement ? fb(a.videoSettings.videoElement, c) : null === a.videoSettings ? c() : (a.videoSettings && Object.assign(ua, a.videoSettings), Ib(a.onWebcamAsk, a.onWebcamGet, function(l) { fb(l, c) }));
                    Eb(function(l) {
                        if (!Wb()) return !1;
                        D.Vc([{
                            id: "s56",
                            name: "_",
                            za: "attribute vec2 a0;uniform mat2 u39;varying vec2 vv0;void main(){gl_Position=vec4(a0,0.,1.),vv0=vec2(.5,.5)+u39*a0*vec2(1.,-1.);}",
                            ab: ["a0"],
                            Ka: [2],
                            h: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}",
                            i: ["u1", "u39"],
                            precision: "lowp"
                        }, {
                            id: "s55",
                            name: "_",
                            h: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}",
                            za: "attribute vec2 a0;uniform sampler2D u40;uniform mat2 u39;uniform vec2 u41;uniform float u42,u38,u43,u44;varying vec2 vv0;void main(){vec2 f=a0;vec4 a=texture2D(u40,vec2(u38,u42));vec2 g=a.gb,b=a.a*u41;b.x*=u44;float c=cos(u43),d=sin(u43);vec2 h=mat2(c,d,-d,c)*f,i=g+.5*h*b;vv0=.5+2.*u39*(i-.5),gl_Position=vec4(a0,0.,1.);}",
                            ab: ["a0"],
                            Ka: [2],
                            i: "u1 u40 u41 u42 u38 u43 u44 u39".split(" "),
                            precision: "lowp"
                        }, {
                            id: "s54",
                            name: "_",
                            h: "uniform sampler2D u45,u40;uniform vec3 u46,u47;uniform float u48,u49,u42,u38,u50,u51,u43,u52;const vec4 e=vec4(.25,.25,.25,.25);void main(){float b=(u51-.5)/u51;vec4 f=texture2D(u45,vec2(3.5/u51,b));bool g=dot(f,e)>u49;vec4 a=texture2D(u40,vec2(u38,u42));a.r<-.5?a.r+=1.:g?a.r=2.:a.r>u48?a.r=0.:a.r>1.9?a.r+=1.:0.,a.r=mix(-2.,a.r,u50);if(a.r<.9)a=vec4(1.,u46);else{a.r*=step(1.9,a.r);float h=dot(e,texture2D(u45,vec2(.5/u51,b))),i=dot(e,texture2D(u45,vec2(1.5/u51,b))),j=dot(e,texture2D(u45,vec2(2.5/u51,b))),c=cos(u43),d=sin(u43);vec2 k=mat2(c,d*u52,-d/u52,c)*vec2(h,i);a.gba+=vec3(k,j)*u47*a.a;}gl_FragColor=a;}",
                            za: "attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}",
                            i: "u45 u40 u46 u48 u47 u50 u49 u42 u38 u51 u43 u52".split(" ")
                        }, {
                            id: "s57",
                            name: "_",
                            za: "attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}",
                            h: "uniform sampler2D u45;uniform float u51,u50;const vec4 e=vec4(.25,.25,.25,.25);void main(){float a=(u51-.5)/u51,b=dot(e,texture2D(u45,vec2(5.5/u51,a))),c=dot(e,texture2D(u45,vec2(6.5/u51,a))),d=dot(e,texture2D(u45,vec2(7.5/u51,a))),f=dot(e,texture2D(u45,vec2(3.5/u51,a)));vec3 g=vec3(b,c,d);gl_FragColor=vec4(g,f*u50);}",
                            i: ["u45", "u51", "u50"]
                        }, {
                            id: "s58",
                            name: "_",
                            za: "attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}",
                            h: "uniform sampler2D u45;uniform float u51;const vec4 e=vec4(.25,.25,.25,.25),h=vec4(.5,.5,.5,.5);vec2 f(float a){float b=floor(a/u51),c=a-b*u51;return vec2(c,u51-.5-b)/u51;}vec2 g(float a){vec2 b=f(a*2.),c=f(a*2.+1.);float d=dot(e,texture2D(u45,b)),i=dot(e,texture2D(u45,c));return vec2(d,i);}void main(){float a=2.*gl_FragCoord.x;vec2 b=g(a-1.),c=g(a);gl_FragColor=h+.5*vec4(b,c)/1.2;}",
                            i: ["u45",
                                "u51"
                            ]
                        }, { id: "s53", name: "_", h: "uniform sampler2D u40,u53;uniform vec2 u54;uniform float u55,u38;varying vec2 vv0;void main(){float f=step(.5,mod(gl_FragCoord.y+1.5,2.)),a=step(u38,vv0.x);vec2 d=vv0+u54;vec4 b=mix(texture2D(u53,d),texture2D(u40,d),vec4(1.,a,a,a));b.a*=mix(u55,1.,a);vec4 g=floor(255.*b),h=255.*fract(255.*b),c=mix(g,h,f)/255.;c.x=mix(step(b.x,1.5),c.x,a),gl_FragColor=c;}", i: ["u40", "u53", "u55", "u54", "u38"] }]);
                        Gb(l);
                        c()
                    });
                    return !0
                },
                update: function(a) {
                    if (!xb) return Promise.reject("NOT_READY");
                    a.scanSettings && bb.set_scanSettings(a.scanSettings);
                    a.stabilizationSettings && bb.set_stabilizationSettings(a.stabilizationSettings);
                    var c = Promise.resolve();
                    if (a.NNCPath || a.NN) {
                        lb();
                        fa = ea.qc;
                        Da && Da.m();
                        Da = null;
                        for (c = 0; c < ca.ta(); ++c) sa[c].detected = 0, sa.isDetected = !1, sa[c].detectedRaw = 0, Ra[c].Qa = 0;
                        a.NNCPath ? T.Kb = a.NNCPath : a.NN && (T.Ya = a.NN);
                        c = new Promise(function(d) {
                            Eb(function(e) {
                                Gb(e);
                                Va();
                                d()
                            })
                        })
                    }
                    return c
                },
                destroy: function() {
                    if (jb) return Promise.reject("ALREADY_DESTROYING");
                    ab = null;
                    xb = !1;
                    jb = !0;
                    Na.m();
                    return new Promise(function(a) {
                        bb.toggle_pause(!0, !0).finally(function() {
                            Da && Da.m();
                            Ka.m();
                            Da = mb = sa = Ra = null;
                            Q.va = null;
                            V.ca = null;
                            V.Xa = null;
                            B.D = null;
                            fa = ea.Ua;
                            jb = !1;
                            a()
                        }).catch(function() {})
                    })
                },
                toggle_videoStream: function(a) { return B.pb || !B.element ? Promise.resolve() : W.le(B.element, a, B.Oa) },
                toggle_pause: function(a, c) {
                    if (-1 === [ea.play, ea.pause].indexOf(fa)) return Promise.reject("NOT_READY");
                    c = c ? bb.toggle_videoStream(!a) : Promise.resolve();
                    a ? lb() : c.then(function() { Va() });
                    return c
                },
                toggle_tracking: function(a) {
                    -1 !== [ea.play, ea.pause].indexOf(fa) && (T.kc = a)
                },
                reset_GLState: cb,
                update_videoSettings: function(a) {
                    if (fa === ea.qc || fa === fa.Ua) return Promise.reject("NOT_READY");
                    lb();
                    return null === a && null === B.element ? Promise.resolve(null) : new Promise(function(c, d) {
                        W.le(B.element, !1, B.Oa).then(function() {
                            null === a ? c(null) : (Object.assign(ua, a), Ib(null, null, function(e) {
                                fb(e, function() {
                                    B.D.Tf(e);
                                    Ta();
                                    Sa();
                                    Va();
                                    c(B.element)
                                })
                            }))
                        }).catch(d)
                    })
                },
                set_animateDelay: function(a) {
                    T.pa = a;
                    Na.update({ Za: T.pa })
                },
                resize: function() {
                    if (!(B && B.element &&
                            T && T.W)) return !1;
                    var a = T.W.width,
                        c = T.W.height;
                    if (!rb() && a === Q.B && c === Q.G) return !1;
                    Q.B = a;
                    Q.G = c;
                    Q.Mb = Q.B / Q.G;
                    D.M();
                    pb();
                    ob();
                    Ta();
                    Sa();
                    return !0
                },
                set_inputTexture: function(a, c, d, e) {
                    B.I[0] = c;
                    B.I[1] = d;
                    B.Ed = e || !1;
                    B.D = Y.instance({ width: c, height: d, dc: a });
                    B.Ta = !0;
                    Ta();
                    cb();
                    Sa()
                },
                reset_inputTexture: function() {
                    B.Ta = !1;
                    B.D = B.Ic;
                    rb();
                    Ta();
                    Sa()
                },
                render_video: function() {
                    ya.P();
                    D.M();
                    D.set("s56");
                    D.ee("u39", B.da);
                    b.viewport(0, 0, Q.B, Q.G);
                    B.D.g(0);
                    U.l(!0, !0);
                    D.ee("u39", B.u)
                },
                get_videoDevices: function(a) { return W.hf(a) },
                get_videoUVScaleMat2: function() { return B.u },
                is_winFocus: function() { return Na.xf() },
                set_scanSettings: function(a) {
                    Object.assign(da, a);
                    0 !== da.nDetectsPerLoop ? ra.Ec(da.nDetectsPerLoop) : ra.Oc();
                    pb();
                    ob()
                },
                set_stabilizationSettings: function(a) { Object.assign(ta, a) },
                update_videoElement: function(a, c) {
                    fb(a, function() {
                        Hb();
                        Ta();
                        Sa();
                        c && c(B.D.get());
                        fa === ea.ge && Va()
                    })
                },
                bind_croppedTextureToSampler: function(a) { Q.va.Ma(a) },
                capture_image: function(a) { return Ka.Ve(a) },
                get_LMLabels: function() { return ma.labels },
                get_widthPx: function() {
                    return Q ?
                        Q.B : -1
                },
                get_heightPx: function() { return Q ? Q.G : -1 },
                force_animate: function() {
                    cb();
                    Ab();
                    zb();
                    Bb();
                    db()
                },
                reset: function() {
                    sa.forEach(function(a) { Object.assign(a, { detected: 0, detectedRaw: 0, isDetected: !1, x: 0, y: 0, s: 1, rx: 0, ry: 0, rz: 0 }) });
                    V.ca.Ha(V.Hc);
                    V.Xa.Ha(V.Hc);
                    qb.reset()
                },
                compute_pose: function(a, c, d, e) {
                    null === ab && (Ma[0] = d, Ma[1] = e, ab = new sb.zypSolver({ cameraFocals: Ma, zyp15: pa.Zf }));
                    if (Ma[0] !== d || Ma[1] !== e) Ma[0] = d, Ma[1] = e, ab.zyp14(Ma);
                    a = ab.solve(a, c, !1);
                    return {
                        ok: a.zyp13,
                        repError: a.repError,
                        rotation: a.R,
                        translation: a.t
                    }
                }
            };
        return bb
    }();;
    return TRYONBOOTHDRAW || window.TRYONBOOTHDRAW;
})();