import e from "./emailSender.js";
gsap.registerPlugin(
  DrawSVGPlugin,
  ScrollSmoother,
  GSDevTools,
  InertiaPlugin,
  MorphSVGPlugin,
  MotionPathHelper,
  Physics2DPlugin,
  PhysicsPropsPlugin,
  ScrambleTextPlugin,
  SplitText,
  CustomEase,
  CustomBounce,
  CustomWiggle
);
let selectDropdownIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="6" height="4" viewBox="0 0 6 4" fill="none">
  <path d="M2.8596 3.93864L0.135858 0.895581C0.0645054 0.815824 0.0190453 0.718786 0.00480478 0.615837C-0.00943571 0.512889 0.00813298 0.408294 0.0554523 0.314308C0.102772 0.220323 0.177882 0.14084 0.271981 0.0851729C0.366081 0.029506 0.475271 -3.89017e-05 0.586759 3.84426e-08H5.41397C5.5254 9.07691e-05 5.63449 0.0297298 5.72848 0.0854476C5.82247 0.141165 5.89747 0.220656 5.9447 0.314617C5.99193 0.408578 6.00944 0.51312 5.99517 0.616007C5.9809 0.718894 5.93546 0.815869 5.86414 0.895581L3.14114 3.93864C3.12393 3.95785 3.10241 3.9733 3.07808 3.9839C3.05376 3.9945 3.02723 4 3.00037 4C2.97351 4 2.94698 3.9945 2.92265 3.9839C2.89832 3.9733 2.8768 3.95785 2.8596 3.93864Z" fill="black"/>
</svg>`;
document.addEventListener("DOMContentLoaded", function () {
  var t, a;
  let s = document.createElement("style");
  (s.textContent = `
  .measurement-select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-image: url("data:image/svg+xml;utf8,${encodeURIComponent(
      selectDropdownIconSVG
    )}");
    background-repeat: no-repeat;
    background-position: right 17px center;
    background-size: 6px 4px;
    /* Optionally, add padding to ensure text doesn't overlap the icon */
    padding-right: 20px;
  }
`),
    document.head.appendChild(s);
  let n = new WeakSet(),
    i = document.getElementById("textureContainer");
  i &&
    (function e(t, a, s = {}) {
      let n = Object.assign({ childList: !0, subtree: !0 }, s),
        i = new MutationObserver((e) => {
          i.disconnect(),
            e.forEach((e) => {
              if ("childList" === e.type && e.addedNodes.length) {
                let t = Array.from(e.addedNodes);
                a(t);
              }
            }),
            i.observe(t, n);
        });
      return i.observe(t, n), i;
    })(i, function e(t) {
      let a = [];
      t.forEach((e) => {
        e.nodeType === Node.ELEMENT_NODE &&
          (e.matches("img") && !n.has(e) && (a.push(e), n.add(e)),
          e.querySelectorAll("img").forEach((e) => {
            n.has(e) || (a.push(e), n.add(e));
          }));
      }),
        a.length > 0 &&
          gsap.fromTo(
            a,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
              stagger: 0.1,
            }
          );
    }),
    console.log("cards entrance update"),
    console.log("cards entrance update"),
    console.log("cart update new"),
    console.log("I hope plz");
  let l,
    r,
    o,
    c,
    d,
    p = {},
    m = 1,
    u = {
      texture: null,
      design: { jacket: {}, pants: {} },
      embroidery: {
        jacket: [],
        pants: { location: null, text: "" },
        threadColor: null,
      },
      measurements: {},
    },
    $,
    g,
    h,
    _,
    b,
    v = [],
    y = [],
    f = [],
    k = {},
    C,
    E = document.getElementById("embroideryLocationsContainer"),
    L = {
      Back: ["4on2_Back_1", "4on2_Back_2", "4on2_Back_3"],
      Lapels: ["4on2_Lapels_1", "4on2_Lapels_2", "4on2_Lapels_3"],
      Pockets: [
        "4on2_pocket_1",
        "4on2_pocket_2",
        "4on2_pocket_3",
        "4on2_pocket_4",
        "4on2_pocket_5",
        "4on2_pocket_6",
        "4on2_pocket_7",
        "4on2_pocket_8",
      ],
    },
    w = {};
  for (let x in L) w[x] = {};
  let I = {},
    A = document.getElementById("renderCanvas"),
    M = new BABYLON.Engine(A, !0, { preserveDrawingBuffer: !0, stencil: !0 }),
    P = document.getElementById("tooltip"),
    T = !1,
    N = !1,
    S = !1,
    B = !1,
    z = 0,
    j = 0,
    O = "front",
    H = () => {
      ((h = new BABYLON.Scene(M)).clearColor = new BABYLON.Color3(
        0.937,
        0.937,
        0.937
      )),
        (b = new BABYLON.ArcRotateCamera(
          "camera",
          0,
          Math.PI / 2,
          5,
          new BABYLON.Vector3(0, 1, 0),
          h
        )).attachControl(A, !0),
        M.setHardwareScalingLevel(1 / (window.devicePixelRatio || 1));
      let e = new BABYLON.FxaaPostProcess(
        "fxaa",
        1,
        null,
        BABYLON.Texture.BILINEAR_SAMPLINGMODE,
        M
      );
      h.postProcesses.push(e),
        b.inputs.attached.touch &&
          ((b.inputs.attached.touch.pinchPrecision = 30),
          (b.inputs.attached.touch.touchAngularSensibility = 1e4)),
        (b.panningSensibility = 0),
        (b.lowerRadiusLimit = 2.5),
        (b.upperRadiusLimit = 20),
        (b.wheelPrecision = 100),
        new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), h);
      let t = new BABYLON.DirectionalLight(
        "dirLight",
        new BABYLON.Vector3(-1, -2, -1),
        h
      );
      (t.position = new BABYLON.Vector3(20, 40, 20)),
        (h.useRightHandedSystem = !0),
        (g = new BABYLON.StandardMaterial("material", h)),
        (_ = new BABYLON.TransformNode("parent", h)),
        (C = new BABYLON.HighlightLayer("hl1", h));
      let a = 0,
        s = () => {
          4 == ++a &&
            ((_.rotation.y = Math.PI / 2),
            (j = z = _.rotation.y),
            (O = "front"),
            ed("./assets/fabric_optimized/All Fabrics/A52024006- $850.webp"),
            (function e() {
              _.computeWorldMatrix(!0);
              let t = _.getChildMeshes(),
                a = new BABYLON.Vector3(
                  Number.MAX_VALUE,
                  Number.MAX_VALUE,
                  Number.MAX_VALUE
                ),
                s = new BABYLON.Vector3(
                  -Number.MAX_VALUE,
                  -Number.MAX_VALUE,
                  -Number.MAX_VALUE
                );
              t.forEach((e) => {
                e.computeWorldMatrix(!0);
                let t = e.getBoundingInfo(),
                  n = t.boundingBox.minimumWorld,
                  i = t.boundingBox.maximumWorld;
                (a = BABYLON.Vector3.Minimize(a, n)),
                  (s = BABYLON.Vector3.Maximize(s, i));
              });
              let n = a.add(s).scale(0.5);
              (_.position = _.position.subtract(n)),
                b.setTarget(BABYLON.Vector3.Zero());
              let i = s.subtract(a).length();
              (b.radius = 1.5 * i),
                (r = b.radius),
                (o = b.target.clone()),
                (c = b.alpha),
                (d = b.beta),
                (b.upperRadiusLimit = r);
            })(),
            (function e() {
              let t = q;
              if (
                ((q = function (e) {
                  console.log("Camera zoom disabled for default jacket parts.");
                }),
                u.design.jacket.Back ||
                  ((u.design.jacket.Back = L.Back[0]), e0("Back", L.Back[0])),
                u.design.jacket.Lapels ||
                  ((u.design.jacket.Lapels = L.Lapels[0]),
                  e0("Lapels", L.Lapels[0])),
                window.matchMedia("(max-width: 1024.9px)").matches)
              )
                u.design.jacket.PocketsTop ||
                  ((u.design.jacket.PocketsTop = e3[0]),
                  e0("Pockets", e3[0], "top")),
                  u.design.jacket.PocketsBottom ||
                    ((u.design.jacket.PocketsBottom = eg[0]),
                    e0("Pockets", eg[0], "bottom"));
              else {
                if (!u.design.jacket.PocketsTop) {
                  u.design.jacket.PocketsTop = e3[0];
                  let a = w.Pockets[e3[0]];
                  a &&
                    (a.setEnabled(!0),
                    (a.renderingGroupId = 2),
                    C.addMesh(a, BABYLON.Color3.White()));
                }
                if (!u.design.jacket.PocketsBottom) {
                  u.design.jacket.PocketsBottom = eg[0];
                  let s = w.Pockets[eg[0]];
                  s &&
                    (s.setEnabled(!0),
                    (s.renderingGroupId = 2),
                    C.addMesh(s, BABYLON.Color3.White()));
                }
              }
              q = t;
            })(),
            ee(m));
        };
      function n(e) {
        return e.startsWith("4on2_Back")
          ? "Back"
          : e.startsWith("4on2_Lapels")
          ? "Lapels"
          : e.startsWith("4on2_pocket")
          ? "Pockets"
          : null;
      }
      BABYLON.SceneLoader.ImportMesh("", "./", "jacket.glb", h, (e) => {
        e.forEach((e) => {
          (e.material = g),
            (e.parent = _),
            v.push(e),
            (e.renderingGroupId = 2),
            (k[e.name] = e);
          let t = n(e.name);
          t && ((I[t] = e), (w[t][e.name] = e)),
            (e.actionManager = new BABYLON.ActionManager(h)),
            e.actionManager.registerAction(
              new BABYLON.ExecuteCodeAction(
                BABYLON.ActionManager.OnPointerOverTrigger,
                function (t) {
                  let a = n(e.name);
                  if (a && I[a]) {
                    let s = I[a];
                    C.addMesh(s, BABYLON.Color3.White()),
                      (A.style.cursor = "pointer"),
                      (P.style.display = "block"),
                      (P.innerHTML = a);
                  }
                }
              )
            ),
            e.actionManager.registerAction(
              new BABYLON.ExecuteCodeAction(
                BABYLON.ActionManager.OnPointerOutTrigger,
                function (t) {
                  let a = n(e.name);
                  if (a && I[a]) {
                    let s = I[a];
                    C.removeMesh(s),
                      (A.style.cursor = "default"),
                      (P.style.display = "none");
                  }
                }
              )
            ),
            e.actionManager.registerAction(
              new BABYLON.ExecuteCodeAction(
                BABYLON.ActionManager.OnPickDownTrigger,
                function (a) {
                  var s, n;
                  (s = t), (n = e.name), e0(s, n);
                }
              )
            );
        }),
          s();
      }),
        BABYLON.SceneLoader.ImportMesh("", "./", "pants.glb", h, (e) => {
          e.forEach((e) => {
            (e.renderingGroupId = 2),
              (e.material = g),
              (e.parent = _),
              y.push(e),
              (k[e.name] = e);
          }),
            s();
        });
      let i = new BABYLON.PBRMaterial("mannequinMaterial", h);
      (i.albedoColor = new BABYLON.Color3(0.08, 0.08, 0.08)),
        (i.metallic = 0),
        (i.roughness = 1);
      let p = new BABYLON.PBRMaterial("shoeMaterial", h);
      for (let E in ((p.albedoColor = new BABYLON.Color3(0, 0, 0)),
      (p.metallic = 0.5),
      (p.roughness = 0.5),
      BABYLON.SceneLoader.ImportMesh("", "./", "Mannequin.glb", h, (e) => {
        (l = new BABYLON.TransformNode("mannequinRoot", h)),
          e.forEach((e) => {
            (e.renderingGroupId = 1),
              console.log("Mesh Name:", e.name),
              (e.parent = l),
              f.push(e),
              (e.actionManager = null),
              (e.useVertexColors = !1),
              e.material && e.material.dispose(),
              (e.material = null),
              e.name.includes("unamed_unamedmesh_1") ||
              e.name.includes("Posed__mask_")
                ? (e.material = i)
                : ("shoe_L" === e.name || "shoe_R" === e.name) &&
                  (e.material = p);
          }),
          (l.parent = _),
          (l.scaling = new BABYLON.Vector3(0.01, 0.01, 0.01)),
          (l.position = new BABYLON.Vector3(0, 0, 0)),
          s(),
          $
            ? ($.setEnabled(!0),
              console.log("Shirt already loaded. Ensured it is visible."))
            : BABYLON.SceneLoader.ImportMesh("", "./", "shirt.glb", h, (e) => {
                let t = new BABYLON.StandardMaterial("shirtMaterial", h);
                (t.diffuseColor = new BABYLON.Color3(1, 1, 1)),
                  (t.backFaceCulling = !1),
                  ($ = new BABYLON.TransformNode("shirtRoot", h));
                let a = [];
                e.forEach((e) => {
                  e instanceof BABYLON.Mesh &&
                    (console.log("[SHIRT LOAD] Found shirt mesh:", e.name),
                    a.push(e),
                    (e.material = t),
                    (e.parent = $),
                    (e.scaling = new BABYLON.Vector3(1, 1, 1)),
                    (e.rotation = new BABYLON.Vector3(0, 0, 0)),
                    (e.position = new BABYLON.Vector3(0, 0, 0)),
                    "Front_1" === e.name
                      ? (e.renderingGroupId = 2)
                      : "2_Button" == e.name
                      ? (e.renderingGroupId = 2)
                      : (e.renderingGroupId = 1));
                }),
                  ($.parent = l),
                  ($.scaling = new BABYLON.Vector3(1, 1, 0.9)),
                  ($.position = new BABYLON.Vector3(0, 0, 0)),
                  (j = z = $.rotation.y),
                  (O = "front");
                let n = [
                  "1_pleat",
                  "2_Button",
                  "Round_Cuffs",
                  "Front_1",
                  "Sleeves",
                ];
                a.forEach((e) => {
                  n.includes(e.name)
                    ? (e.setEnabled(!0), C.addMesh(e, BABYLON.Color3.White()))
                    : e.setEnabled(!1);
                }),
                  s();
              });
      }),
      L))
        L[E].forEach((e) => {
          if (w[E][e]) return;
          let t = e + ".glb";
          BABYLON.SceneLoader.ImportMesh(
            "",
            "./jacket-seperate-pieces/",
            t,
            h,
            (t) => {
              t.forEach((t) => {
                (t.material = g),
                  (t.parent = _),
                  (w[E][e] = t),
                  (k[t.name] = t),
                  t.setEnabled(!1),
                  (t.actionManager = new BABYLON.ActionManager(h)),
                  t.actionManager.registerAction(
                    new BABYLON.ExecuteCodeAction(
                      BABYLON.ActionManager.OnPickDownTrigger,
                      function (e) {
                        var a, s;
                        (a = E), (s = t.name), e0(a, s);
                      }
                    )
                  );
              });
            }
          );
        });
      return (
        (h.onPointerDown = function (e, t) {
          t.hit ||
            (C.removeAllMeshes(),
            document
              .querySelectorAll(".part-item")
              .forEach((e) => e.classList.remove("selected")));
        }),
        (h.onPointerMove = function (e, t) {
          "block" === P.style.display &&
            ((P.style.left = e.clientX + 10 + "px"),
            (P.style.top = e.clientY + 10 + "px"),
            (P.style.zIndex = 999));
        }),
        h.registerBeforeRender(() => {
          var e;
          let t = (e = b.alpha) % (2 * Math.PI);
          t < Math.PI / 4 || t > (7 * Math.PI) / 4
            ? "front" !== O &&
              ((O = "front"), console.log("Orientation changed to Front"))
            : t > (3 * Math.PI) / 4 &&
              t < (5 * Math.PI) / 4 &&
              "back" !== O &&
              ((O = "back"), console.log("Orientation changed to Back"));
        }),
        h
      );
    };
  function F() {
    let e = document.querySelectorAll(".part-option"),
      t = document.querySelectorAll(".part-item");
    e.forEach((e) => {
      e.addEventListener("mouseenter", function () {
        let e = this.getAttribute("data-part-name"),
          t = this.getAttribute("data-mesh-name"),
          a = w[e][t];
        a && C.addMesh(a, BABYLON.Color3.White());
      }),
        e.addEventListener("mouseleave", function () {
          let e = this.getAttribute("data-part-name"),
            t = this.getAttribute("data-mesh-name"),
            a = w[e][t];
          a && C.removeMesh(a);
        });
    }),
      t.forEach((e) => {
        e.addEventListener("mouseenter", function () {
          let e = this.getAttribute("data-part"),
            t = I[e];
          t && C.addMesh(t, BABYLON.Color3.White());
        }),
          e.addEventListener("mouseleave", function () {
            let e = this.getAttribute("data-part"),
              t = I[e];
            t && C.removeMesh(t);
          });
      });
  }
  function q(e) {
    if (!e) {
      console.error("zoomToMesh called with undefined mesh");
      return;
    }
    console.log(`Zooming to mesh: ${e.name}`);
    let t = e.getBoundingInfo(),
      a = t.boundingBox.centerWorld,
      s = 1.5 * t.boundingSphere.radiusWorld;
    h.stopAnimation(b);
    let n = new BABYLON.Animation(
        "cameraRadiusAnim",
        "radius",
        60,
        BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
      ),
      i = [
        { frame: 0, value: b.radius },
        { frame: 240, value: s },
      ];
    n.setKeys(i),
      n.setEasingFunction(new BABYLON.CubicEase()),
      n
        .getEasingFunction()
        .setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEOUT);
    let l = new BABYLON.Animation(
        "cameraTargetXAnim",
        "target.x",
        60,
        BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
      ),
      r = new BABYLON.Animation(
        "cameraTargetYAnim",
        "target.y",
        60,
        BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
      ),
      o = new BABYLON.Animation(
        "cameraTargetZAnim",
        "target.z",
        60,
        BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
      ),
      c = [
        { frame: 0, value: b.target.x },
        { frame: 240, value: a.x },
      ],
      d = [
        { frame: 0, value: b.target.y },
        { frame: 240, value: a.y },
      ],
      p = [
        { frame: 0, value: b.target.z },
        { frame: 240, value: a.z },
      ];
    l.setKeys(c), r.setKeys(d), o.setKeys(p);
    let m = new BABYLON.CubicEase();
    m.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEOUT),
      l.setEasingFunction(m),
      r.setEasingFunction(m),
      o.setEasingFunction(m),
      (b.animations = []),
      b.animations.push(n, l, r, o),
      h.beginAnimation(b, 0, 240, !1, 1, () => {
        console.log(`Camera smoothly zoomed to mesh: ${e.name}`);
      });
  }
  function D(e, t) {
    e0(e, t);
  }
  function R(e) {
    return "Back" === e
      ? `
    <div class="card_cardContainer" data-test-id="${e}" >
      <div class="card_cardImageContainer">
        <!-- Back Design Images (Assuming 4 options) -->
        <img loading="lazy" class="card_cardImage image-jacket-back"  src="./assets/jacket/back/jacketback.png" alt="Classic Back">
        <!-- Show # of images if you like -->
        <div class="card_itemAmountContainer" data-test-id="item-amount">4</div>
      </div>
      <div class="card_cardDetails">
        <p class="card_cardText" data-test-id="card-text">${e}</p>
      </div>
      <div class="card_arrowIcon">
        <svg
          class="arrow-right"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          viewBox="0 0 330 330"
          width="30"
          height="30"
        >
          <path
            d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  
               c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394  
               c-5.857,5.858-5.857,15.355,0.001,21.213  
               C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394  
               l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  
               C255,161.018,253.42,157.202,250.606,154.389z"
          />
        </svg>
      </div>
    </div>
  `
      : "Lapels" === e
      ? `
    <div class="card_cardContainer" data-test-id="${e}" >
      <div class="card_cardImageContainer">
        <!-- Lapel Design Images (Assuming 3 options) -->
        <img loading="lazy" class="card_cardImage image-jacket-lapels"  src="./assets/jacket/lapel/jacketlapel.png" alt="Classic Lapel">
        <div class="card_itemAmountContainer" data-test-id="item-amount">3</div>
      </div>
      <div class="card_cardDetails">
        <p class="card_cardText" data-test-id="card-text">${e}</p>
      </div>
      <div class="card_arrowIcon">
        <svg
          class="arrow-right"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          viewBox="0 0 330 330"
          width="30"
          height="30"
        >
          <path
            d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  
               c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394  
               c-5.857,5.858-5.857,15.355,0.001,21.213  
               C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394  
               l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  
               C255,161.018,253.42,157.202,250.606,154.389z"
          />
        </svg>
      </div>
    </div>
  `
      : "Pockets" === e
      ? `
    <div class="card_cardContainer" data-test-id="${e}" >
      <div class="card_cardImageContainer">
        <!-- Pockets Design Images (Assuming 4 options) -->
        <img loading="lazy" class="card_cardImage image-jacket-pockets"  src="./assets/jacket/pockets/jacketpockets.png" alt="Single Pocket">
        <div class="card_itemAmountContainer" data-test-id="item-amount">8</div>
      </div>
      <div class="card_cardDetails">
        <p class="card_cardText" data-test-id="card-text">${e}</p>
      </div>
      <div class="card_arrowIcon">
        <svg
          class="arrow-right"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          viewBox="0 0 330 330"
          width="30"
          height="30"
        >
          <path
            d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  
               c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394  
               c-5.857,5.858-5.857,15.355,0.001,21.213  
               C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394  
               l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  
               C255,161.018,253.42,157.202,250.606,154.389z"
          />
        </svg>
      </div>
    </div>
  `
      : "Cut" === e
      ? `
    <div class="card_cardContainer" data-test-id="${e}" >
      <div class="card_cardImageContainer">
        <!-- 4 CUT IMAGES -->
        <img loading="lazy" class="card_cardImage image-pants-cut"  src="./assets/pants/cut/cut1.png" alt="Extra Slim">
        <img loading="lazy" class="card_cardImage image-pants-cut"  src="./assets/pants/cut/cut2.png" alt="Slim">
        <img loading="lazy" class="card_cardImage image-pants-cut"  src="./assets/pants/cut/cut3.png" alt="Straight">
        <img loading="lazy" class="card_cardImage image-pants-cut"  src="./assets/pants/cut/cut4.png" alt="Classic">
        <!-- Show # of images if you like -->
        <div class="card_itemAmountContainer" data-test-id="item-amount">4</div>
      </div>
      <div class="card_cardDetails">
        <p class="card_cardText" data-test-id="card-text">${e}</p>
      </div>
      <div class="card_arrowIcon">
        <svg
          class="arrow-right"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          viewBox="0 0 330 330"
          width="30"
          height="30"
        >
          <path
            d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  
               c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394  
               c-5.857,5.858-5.857,15.355,0.001,21.213  
               C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394  
               l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  
               C255,161.018,253.42,157.202,250.606,154.389z"
          />
        </svg>
      </div>
    </div>
  `
      : "Pleat" === e
      ? `
    <div class="card_cardContainer" data-test-id="${e}" >
      <div class="card_cardImageContainer">
        <!-- 5 PLEAT IMAGES -->
        <img loading="lazy" class="card_cardImage image-pants-pleat"  src="./assets/pants/pleat/pleat1.png" alt="Pleat 1">
        <img loading="lazy" class="card_cardImage image-pants-pleat"  src="./assets/pants/pleat/pleat2.png" alt="Pleat 2">
        <img loading="lazy" class="card_cardImage image-pants-pleat"  src="./assets/pants/pleat/pleat3.png" alt="Pleat 3">
        <img loading="lazy" class="card_cardImage image-pants-pleat"  src="./assets/pants/pleat/pleat4.png" alt="Pleat 4">
 
        <!-- Show # of images if you like -->
        <div class="card_itemAmountContainer" data-test-id="item-amount">5</div>
      </div>
      <div class="card_cardDetails">
        <p class="card_cardText" data-test-id="card-text">${e}</p>
      </div>
      <div class="card_arrowIcon">
        <svg
          class="arrow-right"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          viewBox="0 0 330 330"
          width="30"
          height="30"
        >
          <path
            d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  
               c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394  
               c-5.857,5.858-5.857,15.355,0.001,21.213  
               C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394  
               l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  
               C255,161.018,253.42,157.202,250.606,154.389z"
          />
        </svg>
      </div>
    </div>
  `
      : `
  <div class="card_cardContainer" data-test-id="${e}" >
    <div class="card_cardImageContainer">
      <!-- Default Images -->
      <img loading="lazy" class="card_cardImage"  src="./assets/fabric_optimized_2048/business/E5101-38.webp" alt="E5101-38">
      <img loading="lazy" class="card_cardImage"  src="./assets/fabric_optimized_2048/business/E5102-38.webp" alt="E5102-38">
      <img loading="lazy" class="card_cardImage"  src="./assets/fabric_optimized_2048/business/E5103-38.webp" alt="E5103-38">
      <img loading="lazy" class="card_cardImage"  src="./assets/fabric_optimized_2048/business/E5104-38.webp" alt="E5104-38">
      <div class="card_itemAmountContainer" data-test-id="item-amount">25</div>
    </div>
    <div class="card_cardDetails">
      <p class="card_cardText" data-test-id="card-text">${e}</p>
    </div>
    <div class="card_arrowIcon">
      <svg
        class="arrow-right"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        viewBox="0 0 330 330"
        width="30"
        height="30"
      >
        <path
          d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  
             c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394  
             c-5.857,5.858-5.857,15.355,0.001,21.213  
             C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394  
             l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  
             C255,161.018,253.42,157.202,250.606,154.389z"
        />
      </svg>
    </div>
  </div>
`;
  }
  function W() {
    if (void 0 === r || void 0 === o || void 0 === c || void 0 === d) {
      console.error("Initial camera parameters are not set.");
      return;
    }
    let e = (c - (_.rotation.y - z)) % (2 * Math.PI);
    BABYLON.Animation.CreateAndStartAnimation(
      "cameraRadiusReset",
      b,
      "radius",
      60,
      120,
      b.radius,
      r,
      BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
    ),
      BABYLON.Animation.CreateAndStartAnimation(
        "cameraTargetReset",
        b,
        "target",
        60,
        120,
        b.target,
        o,
        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
      ),
      BABYLON.Animation.CreateAndStartAnimation(
        "cameraAlphaReset",
        b,
        "alpha",
        60,
        120,
        b.alpha,
        e,
        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
      ),
      BABYLON.Animation.CreateAndStartAnimation(
        "cameraBetaReset",
        b,
        "beta",
        60,
        120,
        b.beta,
        d,
        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
      ),
      console.log(
        "Camera reset to initial relative view (adjusted for model rotation)."
      );
  }
  function V() {
    let e = document.querySelector("#sidePanel .back-button");
    if (!e) {
      (e = document.createElement("button")).classList.add("back-button"),
        (e.style.marginBottom = "20px"),
        (e.innerHTML = `
      Garment 
    `),
        e.addEventListener("click", () => {
          W(), ee((m = 2)), e.remove();
        });
      let t = document.getElementById("sidePanel");
      t
        ? t.appendChild(e)
        : (console.warn(
            "#sidePanel element not found. Appending to textureContainer instead."
          ),
          textureContainer.appendChild(e));
    }
  }
  function Z() {
    console.log(
      "[showMobileLapelsOptions] Displaying lapels design options..."
    );
    let e = document.getElementById("textureContainer");
    e.innerHTML = "";
    let t = document.createElement("button");
    (t.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="9" fill="#EFEFEF"></circle>
        <path d="M4.64645 8.64645C4.45118 8.84171 4.45118 9.15829 4.64645 9.35355L7.82843 12.5355C8.02369 12.7308 8.34027 12.7308 8.53553 12.5355C8.7308 12.3403 8.7308 12.0237 8.53553 11.8284L5.70711 9L8.53553 6.17157C8.7308 5.97631 8.7308 5.65973 8.53553 5.46447C8.34027 5.2692 8.02369 5.2692 7.82843 5.46447L4.64645 8.64645ZM13 8.5L5 8.5L5 9.5L13 9.5L13 8.5Z" fill="black"></path>
      </svg>`),
      t.classList.add("back-to-cat"),
      t.addEventListener("click", () => {
        console.log("[showMobileLapelsOptions] Confirm clicked => returning"),
          J();
      }),
      e.appendChild(t);
    let a = document.createElement("div");
    (a.id = "mobileLapelsSlider"), a.classList.add("cards-wrapper");
    let s = document.createElement("div");
    s.classList.add("cards-wrapper"),
      [
        {
          src: "./assets/jacket/lapel/jacketlapel.png",
          label: "Classic Lapel",
          meshName: "4on2_Lapels_1",
        },
        {
          src: "./assets/jacket/lapel/jacketlapel.png",
          label: "Slim Lapel",
          meshName: "4on2_Lapels_2",
        },
        {
          src: "./assets/jacket/lapel/jacketlapel.png",
          label: "Wide Lapel",
          meshName: "4on2_Lapels_3",
        },
      ].forEach((e) => {
        let t = document.createElement("div");
        t.classList.add("part-option", "card_cardContainer"),
          t.setAttribute("data-part-name", "Lapels"),
          t.setAttribute("data-mesh-name", e.meshName),
          (t.style.touchAction = "pan-y"),
          (t.style.cursor = "pointer"),
          u.design.jacket.Lapels === e.meshName && t.classList.add("selected");
        let a = document.createElement("div");
        a.classList.add("img-wrapper"), (a.style.touchAction = "pan-y");
        let n = document.createElement("img");
        (n.src = e.src),
          (n.alt = e.label),
          (n.style.touchAction = "pan-y"),
          (n.style.width = "100%"),
          (n.style.height = "auto"),
          a.appendChild(n);
        let i = document.createElement("p");
        (i.textContent = e.label),
          (i.style.touchAction = "pan-y"),
          t.appendChild(a),
          t.appendChild(i),
          t.addEventListener("click", () => {
            console.log(
              "[showMobileLapelsOptions] Chosen lapels option:",
              e.label
            ),
              s.querySelectorAll(".part-option").forEach((e) => {
                e.classList.remove("selected");
              }),
              t.classList.add("selected"),
              (u.design.jacket.Lapels = e.meshName),
              e0("Lapels", e.meshName),
              W();
          }),
          s.appendChild(t);
      }),
      a.appendChild(s),
      e.appendChild(a);
  }
  function G() {
    console.log("[showMobileBackOptions] Displaying back view options...");
    let e = document.getElementById("textureContainer");
    e.innerHTML = "";
    let t = document.createElement("button");
    (t.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="9" fill="#EFEFEF"></circle>
        <path d="M4.64645 8.64645C4.45118 8.84171 4.45118 9.15829 4.64645 9.35355L7.82843 12.5355C8.02369 12.7308 8.34027 12.7308 8.53553 12.5355C8.7308 12.3403 8.7308 12.0237 8.53553 11.8284L5.70711 9L8.53553 6.17157C8.7308 5.97631 8.7308 5.65973 8.53553 5.46447C8.34027 5.2692 8.02369 5.2692 7.82843 5.46447L4.64645 8.64645ZM13 8.5L5 8.5L5 9.5L13 9.5L13 8.5Z" fill="black"></path>
      </svg>`),
      t.classList.add("back-to-cat"),
      t.addEventListener("click", () => {
        console.log(
          "[showMobileBackOptions] Confirm button clicked => returning"
        ),
          J();
      }),
      e.appendChild(t);
    let a = document.createElement("div");
    (a.id = "mobileBackSlider"),
      a.classList.add("cards-wrapper"),
      [
        {
          src: "./assets/jacket/back/jacketback.png",
          label: "Back Option 1",
          meshName: "4on2_Back_1",
        },
        {
          src: "./assets/jacket/back/jacketback.png",
          label: "Back Option 2",
          meshName: "4on2_Back_2",
        },
        {
          src: "./assets/jacket/back/jacketback.png",
          label: "Back Option 3",
          meshName: "4on2_Back_3",
        },
      ].forEach((e) => {
        let t = document.createElement("div");
        t.classList.add("part-option"),
          t.setAttribute("data-part-name", "Back"),
          t.setAttribute("data-mesh-name", e.meshName),
          (t.style.touchAction = "pan-y"),
          (t.style.cursor = "pointer"),
          u.design.jacket.Back === e.meshName && t.classList.add("selected");
        let s = document.createElement("div");
        s.classList.add("img-wrapper"), (s.style.touchAction = "pan-y");
        let n = document.createElement("img");
        (n.src = e.src),
          (n.alt = e.label),
          (n.style.touchAction = "pan-y"),
          (n.style.width = "100%"),
          (n.style.height = "auto"),
          s.appendChild(n);
        let i = document.createElement("p");
        (i.textContent = e.label),
          (i.style.touchAction = "pan-y"),
          t.appendChild(s),
          t.appendChild(i),
          t.addEventListener("click", () => {
            console.log("[showMobileBackOptions] Chosen back option:", e.label),
              a.querySelectorAll(".part-option").forEach((e) => {
                e.classList.remove("selected");
              }),
              t.classList.add("selected"),
              (u.design.jacket.Back = e.meshName),
              e0("Back", e.meshName);
          }),
          a.appendChild(t);
      }),
      e.appendChild(a),
      X(".part-option.card_cardContainer ");
  }
  (h = H()),
    M.runRenderLoop(() => h && h.render()),
    window.addEventListener("resize", () => M.resize());
  let U = !1;
  function X(e) {
    let t = document.querySelector(e);
    if (!t) {
      console.error(`Slider container "${e}" not found.`);
      return;
    }
    t.flickityInstance && t.flickityInstance.destroy();
    let a = new Flickity(t, {
      cellAlign: "left",
      contain: !0,
      draggable: !0,
      prevNextButtons: !1,
      pageDots: !1,
      freeScroll: !1,
      wrapAround: !1,
    });
    (t.flickityInstance = a),
      a.on("dragStart", () => {
        U = !0;
      }),
      a.on("dragEnd", () => {
        U = !1;
      });
  }
  function Y() {
    console.log(
      "[showMobilePocketsOptions] Displaying pocket design options..."
    );
    let e = document.getElementById("textureContainer");
    e.innerHTML = "";
    let t = document.createElement("button");
    (t.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="9" fill="#EFEFEF"></circle>
      <path d="M4.64645 8.64645C4.45118 8.84171 4.45118 9.15829 4.64645 9.35355L7.82843 12.5355C8.02369 12.7308 8.34027 12.7308 8.53553 12.5355C8.7308 12.3403 8.7308 12.0237 8.53553 11.8284L5.70711 9L8.53553 6.17157C8.7308 5.97631 8.7308 5.65973 8.53553 5.46447C8.34027 5.2692 8.02369 5.2692 7.82843 5.46447L4.64645 8.64645ZM13 8.5L5 8.5L5 9.5L13 9.5L13 8.5Z" fill="black"></path>
    </svg>`),
      t.classList.add("back-to-cat"),
      t.addEventListener("click", () => {
        console.log(
          "[showMobilePocketsOptions] Confirm button clicked => returning"
        ),
          J();
      }),
      e.appendChild(t);
    let a = document.createElement("div");
    a.classList.add("top-bottom-pockets-wrapper");
    let s = document.createElement("button");
    (s.textContent = "Top Pockets"),
      s.classList.add("top-bottom-btns", "top-pockets-btn"),
      s.addEventListener("click", () => {
        console.log("Top pockets button clicked"),
          eh("top"),
          (s.disabled = !0),
          (n.disabled = !1);
      });
    let n = document.createElement("button");
    (n.textContent = "Bottom Pockets"),
      n.classList.add("top-bottom-btns", "bottom-pockets-btn"),
      n.addEventListener("click", () => {
        console.log("Bottom pockets button clicked"),
          eh("bottom"),
          (n.disabled = !0),
          (s.disabled = !1);
      }),
      a.appendChild(s),
      a.appendChild(n),
      e.appendChild(a);
    let i = document.getElementById("mobilePocketsContainer");
    i
      ? (i.innerHTML = "")
      : (((i = document.createElement("div")).id = "mobilePocketsContainer"),
        e.appendChild(i)),
      (s.disabled = !0),
      (n.disabled = !1),
      eh("top");
  }
  function J() {
    let e = document.getElementById("textureContainer");
    if (
      ((e.innerHTML = ""),
      V(),
      window.matchMedia("(max-width: 1024.9px)").matches)
    ) {
      let t = "";
      ["Back", "Lapels", "Pockets"].forEach((e) => {
        t += R(e);
      }),
        (e.innerHTML += `
      <div class="cards-wrapper design-options">
        ${t}
      </div>
    `);
      let a = e.querySelectorAll(".design-options .card_cardContainer");
      a.forEach((e) => {
        e.addEventListener("click", () => {
          let t = e.getAttribute("data-test-id");
          console.log(`Clicked on jacket part: ${t}`),
            "Back" === t ? G() : "Lapels" === t ? Z() : "Pockets" === t && Y();
        });
      });
    } else {
      let s = "";
      ["Back", "Lapels", "Pockets"].forEach((e) => {
        s += R(e);
      }),
        (e.innerHTML += `
      <div class="controls">
        <button class="prevButton">Prev</button>
        <button class="nextButton">Next</button>
      </div>
      <div class="cards-wrapper design-options">
        ${s}
      </div>
    `);
      let n = e.querySelectorAll(".design-options .card_cardContainer");
      n.forEach((e) => {
        e.addEventListener("click", () => {
          let t = e.getAttribute("data-test-id");
          console.log(`Clicked on jacket part: ${t}`),
            "Back" === t ? G() : "Lapels" === t ? Z() : "Pockets" === t && Y();
        });
      });
    }
  }
  function K() {
    let e = document.getElementById("textureContainer");
    if (
      ((e.innerHTML = ""),
      V(),
      window.matchMedia("(max-width: 1024.9px)").matches)
    ) {
      let t = "";
      ["Cut", "Pleat"].forEach((e) => {
        t += R(e);
      }),
        (e.innerHTML += `
      <div class="design-options">${t}</div>
    `);
      let a = document.querySelectorAll(".design-options .card_cardContainer");
      a.forEach((e) => {
        e.addEventListener("click", () => {
          let t = e.getAttribute("data-test-id");
          console.log("Clicked Pants Part (mobile):", t),
            "Cut" === t
              ? ep()
              : "Pleat" === t &&
                (function e() {
                  console.log(
                    "[showMobilePleatOptions] Displaying pleat options..."
                  );
                  let t = document.getElementById("textureContainer");
                  t.innerHTML = "";
                  let a = document.createElement("button");
                  (a.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="9" fill="#EFEFEF"></circle>
        <path d="M4.64645 8.64645C4.45118 8.84171 4.45118 9.15829 4.64645 9.35355L7.82843 12.5355C8.02369 12.7308 8.34027 12.7308 8.53553 12.5355C8.7308 12.3403 8.7308 12.0237 8.53553 11.8284L5.70711 9L8.53553 6.17157C8.7308 5.97631 8.7308 5.65973 8.53553 5.46447C8.34027 5.2692 8.02369 5.2692 7.82843 5.46447L4.64645 8.64645ZM13 8.5L5 8.5L5 9.5L13 9.5L13 8.5Z" fill="black"></path>
      </svg> `),
                    a.classList.add("back-to-cat"),
                    a.addEventListener("click", () => {
                      console.log(
                        "[showMobilePleatOptions] Confirm clicked => returning"
                      ),
                        K();
                    }),
                    t.appendChild(a);
                  let s = document.createElement("div");
                  (s.id = "mobilePleatSlider"),
                    s.classList.add("cards-wrapper"),
                    [
                      {
                        src: "./assets/pants/pleat/pleat1.png",
                        label: "Pleat 1",
                      },
                      {
                        src: "./assets/pants/pleat/pleat2.png",
                        label: "Pleat 2",
                      },
                      {
                        src: "./assets/pants/pleat/pleat3.png",
                        label: "Pleat 3",
                      },
                      {
                        src: "./assets/pants/pleat/pleat4.png",
                        label: "Pleat 4",
                      },
                      {
                        src: "./assets/pants/pleat/pleat5.png",
                        label: "Pleat 5",
                      },
                    ].forEach((e) => {
                      let t = document.createElement("div");
                      t.classList.add("card_cardContainer", "part-option"),
                        t.setAttribute("data-part-name", "Pleat"),
                        t.setAttribute("data-mesh-name", e.label),
                        (t.tabIndex = 0),
                        (t.style.touchAction = "pan-y"),
                        (t.style.cursor = "pointer");
                      let a = document.createElement("div");
                      a.classList.add("img-wrapper"),
                        (a.style.touchAction = "pan-y");
                      let n = document.createElement("img");
                      (n.src = e.src),
                        (n.alt = e.label),
                        (n.style.touchAction = "pan-y"),
                        (n.style.width = "100%"),
                        (n.style.height = "auto"),
                        a.appendChild(n);
                      let i = document.createElement("p");
                      (i.textContent = e.label),
                        (i.style.touchAction = "pan-y"),
                        t.appendChild(a),
                        t.appendChild(i),
                        t.addEventListener("click", () => {
                          console.log(
                            "[showMobilePleatOptions] Chosen pleat:",
                            e.label
                          ),
                            s.querySelectorAll(".part-option").forEach((e) => {
                              e.classList.remove("selected");
                            }),
                            t.classList.add("selected"),
                            (u.design.pants.pleat = e.label),
                            e0("Pleat", e.label);
                        }),
                        s.appendChild(t);
                    }),
                    t.appendChild(s),
                    X("#mobilePleatSlider");
                })();
        });
      });
    } else
      (e.innerHTML += `
      <button class="accordion" data-category="pants">
        Pants <span class="sign-acc">+</span>
      </button>
      <div class="panel" style="max-height: 0px;">
        <button class="sub_accordion" data-category="cut">
          Cut <span class="sign-acc">+</span>
        </button>
        <div class="sub_panel">
          <!-- your existing "cut" content -->
        </div>
        <button class="sub_accordion" data-category="pleat">
          Pleat <span class="sign-acc">+</span>
        </button>
        <div class="sub_panel">
          <!-- etc. -->
        </div>
        <!-- Add more sub-accordions if needed -->
      </div>
    `),
        F();
  }
  function Q(e) {
    let t = e.querySelectorAll(".measurement-input");
    t.forEach((e) => {
      e.addEventListener("input", () => {
        u.measurements[e.id] = e.value;
      });
    });
    let a = e.querySelectorAll("select.measurement-select");
    a.forEach((e) => {
      e.addEventListener("change", () => {
        u.measurements[e.id] = e.value;
      });
    });
    let s = e.querySelectorAll(".decrement-btn"),
      n = e.querySelectorAll(".increment-btn");
    s.forEach((e) => {
      e.addEventListener("click", () => {
        let t = e.parentElement.querySelector('input[type="number"]');
        t &&
          ((t.value = Math.max(0, parseInt(t.value, 10) - 1)),
          t.dispatchEvent(new Event("input")));
      });
    }),
      n.forEach((e) => {
        e.addEventListener("click", () => {
          let t = e.parentElement.querySelector('input[type="number"]');
          t &&
            ((t.value = parseInt(t.value, 10) + 1),
            t.dispatchEvent(new Event("input")));
        });
      });
  }
  function ee(e) {
    let t = document.getElementById("sidePanel");
    if (window.matchMedia("(max-width: 1024.9px)").matches) {
      let a = t.querySelector(".widescreen-step");
      a
        ? gsap.to(a, {
            y: window.innerHeight,
            duration: 0.5,
            ease: "power2.in",
            onComplete() {
              en(e);
              let a = t.querySelector(".widescreen-step");
              a &&
                (gsap.set(a, { y: -window.innerHeight }),
                gsap.to(a, { y: 0, duration: 0.8, ease: "power2.out" }));
            },
          })
        : en(e);
    } else {
      let s = t.querySelector(".widescreen-step");
      s
        ? gsap.to(s, {
            x: window.innerWidth,
            duration: 0.5,
            ease: "power2.in",
            onComplete() {
              en(e);
              let a = t.querySelector(".widescreen-step");
              a &&
                (gsap.set(a, { x: window.innerWidth }),
                gsap.to(a, { x: 0, duration: 0.8, ease: "power2.out" }));
            },
          })
        : en(e);
    }
  }
  let et = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 8 8" fill="none">
  <path d="M3.77778 6H4.22222V3.55556H3.77778V6ZM4 2.92311C4.07763 2.92311 4.14267 2.89689 4.19511 2.84444C4.24756 2.792 4.27363 2.72696 4.27333 2.64933C4.27304 2.5717 4.24681 2.50681 4.19467 2.45467C4.14252 2.40252 4.07763 2.3763 4 2.376C3.92237 2.3757 3.85748 2.40193 3.80533 2.45467C3.75319 2.50741 3.72696 2.57244 3.72667 2.64978C3.72637 2.72711 3.75259 2.792 3.80533 2.84444C3.85807 2.89689 3.92296 2.92311 4 2.92311ZM4.00133 8C3.44815 8 2.92815 7.89511 2.44133 7.68533C1.95452 7.47526 1.53096 7.19022 1.17067 6.83022C0.81037 6.47022 0.525185 6.04711 0.315111 5.56089C0.105037 5.07467 0 4.55481 0 4.00133C0 3.44785 0.105037 2.92785 0.315111 2.44133C0.524889 1.95452 0.809482 1.53096 1.16889 1.17067C1.5283 0.81037 1.95156 0.525185 2.43867 0.315111C2.92578 0.105037 3.44578 0 3.99867 0C4.55156 0 5.07156 0.105037 5.55867 0.315111C6.04548 0.524889 6.46904 0.80963 6.82933 1.16933C7.18963 1.52904 7.47481 1.9523 7.68489 2.43911C7.89496 2.92593 8 3.44578 8 3.99867C8 4.55155 7.89511 5.07156 7.68533 5.55867C7.47556 6.04578 7.19052 6.46933 6.83022 6.82933C6.46993 7.18933 6.04681 7.47452 5.56089 7.68489C5.07496 7.89526 4.55511 8.0003 4.00133 8ZM4 7.55555C4.99259 7.55555 5.83333 7.21111 6.52222 6.52222C7.21111 5.83333 7.55556 4.99259 7.55556 4C7.55556 3.00741 7.21111 2.16667 6.52222 1.47778C5.83333 0.788889 4.99259 0.444444 4 0.444444C3.00741 0.444444 2.16667 0.788889 1.47778 1.47778C0.788889 2.16667 0.444444 3.00741 0.444444 4C0.444444 4.99259 0.788889 5.83333 1.47778 6.52222C2.16667 7.21111 3.00741 7.55555 4 7.55555Z" fill="black"/>
</svg>`;
  function ea() {
    return `
    <div class="pants-size-inputs">
      <div class="blazer-pants-title">
        <h3 class="size-title">Pants Size Measurements</h3>
        <p class="size-subtitle">Adjust your pants measurements to get the perfect fit</p>
      </div>
            <div class="top-sizes-section">
      <div class="measurement-group">
        <div class="measurement-label">
          ${et}
          <label for="pantLengthInput">Pant Length</label>
        </div>
        <div class="measurement-input-group">
          <a class="decrement-btn">-</a>
          <input type="number" class="measurement-input" id="pantLengthInput" value="${
            u.measurements.pantLengthInput || 0
          }">
          <a class="increment-btn">+</a>
        </div>
      </div>
      <div class="measurement-group">
        <div class="measurement-label">
          ${et}
          <label for="waistInput">Waist</label>
        </div>
        <div class="measurement-input-group">
          <a class="decrement-btn">-</a>
          <input type="number" class="measurement-input" id="waistInput" value="${
            u.measurements.waistInput || 0
          }">
          <a class="increment-btn">+</a>
        </div>
      </div>
      <div class="measurement-group">
        <div class="measurement-label">
          ${et}
          <label for="hipsInput">Hips</label>
        </div>
        <div class="measurement-input-group">
          <a class="decrement-btn">-</a>
          <input type="number" class="measurement-input" id="hipsInput" value="${
            u.measurements.hipsInput || 0
          }">
          <a class="increment-btn">+</a>
        </div>
      </div>
      <div class="measurement-group">
        <div class="measurement-label">
          ${et}
          <label for="thighInput">Thigh</label>
        </div>
        <div class="measurement-input-group">
          <a class="decrement-btn">-</a>
          <input type="number" class="measurement-input" id="thighInput" value="${
            u.measurements.thighInput || 0
          }">
          <a class="increment-btn">+</a>
        </div>
      </div>
      <div class="measurement-group">
        <div class="measurement-label">
          ${et}
          <label for="kneeInput">Knee</label>
        </div>
        <div class="measurement-input-group">
          <a class="decrement-btn">-</a>
          <input type="number" class="measurement-input" id="kneeInput" value="${
            u.measurements.kneeInput || 0
          }">
          <a class="increment-btn">+</a>
        </div>
      </div>
      <div class="measurement-group">
        <div class="measurement-label">
          ${et}
          <label for="calfInput">Calf</label>
        </div>
        <div class="measurement-input-group">
          <a class="decrement-btn">-</a>
          <input type="number" class="measurement-input" id="calfInput" value="${
            u.measurements.calfInput || 0
          }">
          <a class="increment-btn">+</a>
        </div>
      </div>
      <div class="measurement-group">
        <div class="measurement-label">
          ${et}
          <label for="cuffInput">Cuff</label>
        </div>
        <div class="measurement-input-group">
          <a class="decrement-btn">-</a>
          <input type="number" class="measurement-input" id="cuffInput" value="${
            u.measurements.cuffInput || 0
          }">
          <a class="increment-btn">+</a>
        </div>
      </div>
      <div class="measurement-group">
        <div class="measurement-label">
          ${et}
          <label for="crotchInput">Crotch</label>
        </div>
        <div class="measurement-input-group">
          <a class="decrement-btn">-</a>
          <input type="number" class="measurement-input" id="crotchInput" value="${
            u.measurements.crotchInput || 0
          }">
          <a class="increment-btn">+</a>
        </div>
      </div>
      </div>
       <div class="bottom-sizes-section">
          <p class="size-message-almost">We’re almost there! </p>
          <p class="size-message-almostsub">Let’s make sure your garment fits you perfectly!</p>
           <div class="confirm-bottom">
              <p class="size-help">Need help? <a href="#">Finish in store</a></p>
             <a id="confirm-pants-sizes" class="confirm-size-btn">Confirm</a>
           </div>
      </div>
    </div>
  `;
  }
  function es() {
    return `
    <div class="blazer-size-inputs">
      <div class="blzer-pants-title">
        <h3 class="size-title">Blazer Size Measurements</h3>
        <p class="size-subtitle">Adjusting the size that fits you perfectly</p>
      </div>
      <div class="top-sizes-section">
        <div class="measurement-group">
          <div class="measurement-label">
            ${et}
            <label for="bodyTypeSelect">Body type</label>
          </div>
          <select class="measurement-select" id="bodyTypeSelect">
            <option value="slim" ${
              "slim" === u.measurements.bodyTypeSelect ? "selected" : ""
            }>Slim</option>
            <option value="regular" ${
              "regular" === u.measurements.bodyTypeSelect ? "selected" : ""
            }>Regular</option>
            <option value="athletic" ${
              "athletic" === u.measurements.bodyTypeSelect ? "selected" : ""
            }>Athletic</option>
          </select>
        </div>
        <div class="measurement-group">
          <div class="measurement-label">
            ${et}
            <label for="frontLengthInput">Front length</label>
          </div>
          <div class="measurement-input-group">
            <a class="decrement-btn">-</a>
            <input type="number" class="measurement-input" id="frontLengthInput" value="${
              u.measurements.frontLengthInput || 0
            }">
            <a class="increment-btn">+</a>
          </div>
        </div>
        <div class="measurement-group">
          <div class="measurement-label">
            ${et}
            <label for="backLengthInput">Back length</label>
          </div>
          <div class="measurement-input-group">
            <a class="decrement-btn">-</a>
            <input type="number" class="measurement-input" id="backLengthInput" value="${
              u.measurements.backLengthInput || 0
            }">
            <a class="increment-btn">+</a>
          </div>
        </div>
        <div class="measurement-group">
          <div class="measurement-label">
            ${et}
            <label for="shoulderInput">Shoulder</label>
          </div>
          <div class="measurement-input-group">
            <a class="decrement-btn">-</a>
            <input type="number" class="measurement-input" id="shoulderInput" value="${
              u.measurements.shoulderInput || 0
            }">
            <a class="increment-btn">+</a>
          </div>
        </div>
        <div class="measurement-group">
          <div class="measurement-label">
            ${et}
            <label for="chestInput">Chest</label>
          </div>
          <div class="measurement-input-group">
            <a class="decrement-btn">-</a>
            <input type="number" class="measurement-input" id="chestInput" value="${
              u.measurements.chestInput || 0
            }">
            <a class="increment-btn">+</a>
          </div>
        </div>
        <div class="measurement-group">
          <div class="measurement-label">
            ${et}
            <label for="stomachInput">Stomach</label>
          </div>
          <div class="measurement-input-group">
            <a class="decrement-btn">-</a>
            <input type="number" class="measurement-input" id="stomachInput" value="${
              u.measurements.stomachInput || 0
            }">
            <a class="increment-btn">+</a>
          </div>
        </div>
        <div class="measurement-group">
          <div class="measurement-label">
            ${et}
            <label for="steeveLengthInput">Steeve length</label>
          </div>
          <div class="measurement-input-group">
            <a class="decrement-btn">-</a>
            <input type="number" class="measurement-input" id="steeveLengthInput" value="${
              u.measurements.steeveLengthInput || 0
            }">
            <a class="increment-btn">+</a>
          </div>
        </div>
        <div class="measurement-group">
          <div class="measurement-label">
            ${et}
            <label for="bicepsInput">Biceps</label>
          </div>
          <div class="measurement-input-group">
            <a class="decrement-btn">-</a>
            <input type="number" class="measurement-input" id="bicepsInput" value="${
              u.measurements.bicepsInput || 0
            }">
            <a class="increment-btn">+</a>
          </div>
        </div>
        <div class="measurement-group">
          <div class="measurement-label">
            ${et}
            <label for="wristInput">Wrist</label>
          </div>
          <div class="measurement-input-group">
            <a class="decrement-btn">-</a>
            <input type="number" class="measurement-input" id="wristInput" value="${
              u.measurements.wristInput || 0
            }">
            <a class="increment-btn">+</a>
          </div>
        </div>
      </div>
      
       <div class="bottom-sizes-section">
          <p class="size-message-almost">We’re almost there! </p>
          <p class="size-message-almostsub">Let’s make sure your garment fits you perfectly!</p>
           <div class="confirm-bottom">
              <p class="size-help">Need help? <a href="#">Finish in store</a></p>
             <a id="confirm-pants-sizes" class="confirm-size-btn">Confirm</a>
           </div>
      </div>
    </div>
  `;
  }
  function en(e) {
    !(function e(t) {
      let a = window.matchMedia("(max-width: 1024.9px)").matches;
      if (!a) return;
      let s = document.getElementById("textureContainer");
      if (!s) {
        console.error("Element with ID 'textureContainer' not found.");
        return;
      }
      s.classList.remove(...["step-1", "step-2", "step-3", "step-4", "step-5"]),
        t >= 1 && t <= 5
          ? (s.classList.add(`step-${t}`),
            console.log(`Added class: step-${t}`))
          : console.warn(`Invalid step number: ${t}. Must be between 1 and 5.`);
    })(e);
    let t = document.getElementById("stepTitle"),
      a = document.getElementById("textureContainer"),
      s = document.querySelector("#sidePanel .back-button");
    switch (
      (s &&
        (s.remove(),
        console.log("[initializeStep] Existing back button removed.")),
      (t.innerHTML = ""),
      m)
    ) {
      case 1:
        (t.innerHTML = `
        <p>Here we’ve curated a selection of fabrics that best suits you.</p>
        <p>Please choose your preferred fabric group from the options below to proceed to the next step.</p>
      `),
          eu(),
          eo(),
          (a.style.display = "flex");
        break;
      case 2:
        if (
          ((t.innerHTML = `
          <p>Great choice!</br>Now, let’s move on to designing your garment.</p>
        `),
          (a.style.display = "flex"),
          a.classList.add("texture-container"),
          window.matchMedia("(max-width: 1024.9px)").matches)
        ) {
          (t.innerHTML += `
            <p>Please choose which garment to design first:</p>
          `),
            (a.innerHTML = `
  <div id="chooseGarmentContainer" class="cards-wrapper" style="display: flex; gap: 20px; overflow-x: auto;">
              <div class="card_cardContainer" data-test-id="chooseJacket" >
                <div class="card_cardImageContainer">
                  <img loading="lazy" class="card_cardImage"  src="./assets/jacketandpants/jacket.png" alt="Jacket">
                  <div class="card_itemAmountContainer" data-test-id="item-amount">Jacket</div>
                </div>
                <div class="card_cardDetails">
                  <p class="card_cardText" data-test-id="card-text">Design Jacket</p>
                </div>
              </div>
              <div class="card_cardContainer" data-test-id="choosePants" >
                <div class="card_cardImageContainer">
                  <img loading="lazy" class="card_cardImage"  src="assets/jacketandpants/pant.png" alt="Pants">
                  <div class="card_itemAmountContainer" data-test-id="item-amount">Pants</div>
                </div>
                <div class="card_cardDetails">
                  <p class="card_cardText" data-test-id="card-text">Design Pants</p>
                </div>
              </div>
            </div>
          `);
          let n = document.querySelector('[data-test-id="chooseJacket"]'),
            i = document.querySelector('[data-test-id="choosePants"]');
          n &&
            n.addEventListener("click", () => {
              J();
            }),
            i &&
              i.addEventListener("click", () => {
                K();
              }),
            ey();
        } else {
          var l;
          (t.innerHTML += `
            <p>Choose from the available options for each key design feature. Let’s start creating your perfect look!</p>
          `),
            (a.innerHTML = `
            <button class="accordion" data-category="jacket">
              Jacket <span class="sign-acc">+</span>
            </button>
            <div class="panel" style="max-height: 0px;">
              ${
                ((l = [
                  { partName: "Back", options: L.Back },
                  { partName: "Lapels", options: L.Lapels },
                  { partName: "Pockets", options: L.Pockets },
                ]),
                l
                  .map((e) => {
                    if ("Pockets" === e.partName) {
                      let t = e.options.filter((e) =>
                          [
                            "4on2_pocket_4",
                            "4on2_pocket_5",
                            "4on2_pocket_6",
                          ].includes(e)
                        ),
                        a = e.options.filter((e) =>
                          [
                            "4on2_pocket_1",
                            "4on2_pocket_2",
                            "4on2_pocket_3",
                            "4on2_pocket_7",
                            "4on2_pocket_8",
                          ].includes(e)
                        );
                      return `
          <div class="part-item" data-part="${e.partName}">
            ${e.partName}
            <div class="part-options">
              <!-- Top Pockets Section -->
              <div class="sub-part top-pockets">
                <h4>Top Pockets</h4>
                ${t
                  .map(
                    (
                      e,
                      t
                    ) => `<button class="part-option" data-part-name="Pockets" data-mesh-name="${e}">
                        Pockets Option ${t + 1}
                      </button>`
                  )
                  .join("")}
              </div>
              <!-- Bottom Pockets Section -->
              <div class="sub-part bottom-pockets">
                <h4>Bottom Pockets</h4>
                ${a
                  .map(
                    (
                      e,
                      t
                    ) => `<button class="part-option" data-part-name="Pockets" data-mesh-name="${e}">
                        Pockets Option ${t + 1}
                      </button>`
                  )
                  .join("")}
              </div>
            </div>
          </div>
        `;
                    }
                    return e.options && e.options.length > 1
                      ? `
          <div class="part-item" data-part="${e.partName}">
            ${e.partName}
            <div class="part-options">
              ${e.options
                .map(
                  (t, a) => `<button class="part-option" data-part-name="${
                    e.partName
                  }" data-mesh-name="${t}">
                      ${e.partName} Option ${a + 1}
                    </button>`
                )
                .join("")}
            </div>
          </div>
        `
                      : `<div class="part-item" data-part="${e.partName}">${e.partName}</div>`;
                  })
                  .join(""))
              }
            </div>

            <button class="accordion" data-category="pants">
              Pants <span class="sign-acc">+</span>
            </button>
            <div class="panel" style="max-height: 0px;">
              <button class="sub_accordion" data-category="cut">
                Cut <span class="sign-acc">+</span>
              </button>
              <div class="sub_panel">
                <!-- 8 images for Cut -->
                <div id="pantsCutContainer" style="display: flex; flex-wrap: wrap;">
                  <div class="pants-item">
                    <img loading="lazy" src="./assets/pants/cut/cut1.png" alt="Extra Slim">
                    <p>Extra Slim</p>
                  </div>
                  <div class="pants-item">
                    <img loading="lazy" src="./assets/pants/cut/cut2.png" alt="Slim">
                    <p>Slim</p>
                  </div>
                  <div class="pants-item">
                    <img loading="lazy" src="./assets/pants/cut/cut3.png" alt="Straight">
                    <p>Straight</p>
                  </div>
                  <div class="pants-item">
                    <img loading="lazy" src="./assets/pants/cut/cut4.png" alt="Classic">
                    <p>Classic</p>
                  </div>
                  <div class="pants-item">
                    <img loading="lazy" src="./assets/pants/cut/cut5.png" alt="Relaxed Fit">
                    <p>Relaxed Fit</p>
                  </div>
                  <div class="pants-item">
                    <img loading="lazy" src="./assets/pants/cut/cut6.png" alt="Tapered Leg">
                    <p>Tapered Leg</p>
                  </div>
                  <div class="pants-item">
                    <img loading="lazy" src="./assets/pants/cut/cut7.png" alt="Flat Front">
                    <p>Flat Front</p>
                  </div>
                  <div class="pants-item">
                    <img loading="lazy" src="./assets/pants/cut/cut8.png" alt="Pleated Front">
                    <p>Pleated Front</p>
                  </div>
                  <div class="pants-item">
                    <img loading="lazy" src="./assets/pants/cut/cut9.png" alt="High waist">
                    <p>High waist</p>
                  </div>
                  <div class="pants-item">
                    <img loading="lazy" src="./assets/pants/cut/cut10.png" alt="Low rise">
                    <p>Low rise</p>
                  </div>
                </div>
              </div>

              <button class="sub_accordion" data-category="pleat">
                Pleat <span class="sign-acc">+</span>
              </button>
              <div class="sub_panel">
                 <div id="pantsCutContainer" style="display: flex; flex-wrap: wrap;">
                  <div class="pants-item">
                    <img loading="lazy" src="./assets/pants/pleat/pleat1.png" alt="pleat">
                    <p>pleat</p>
                  </div>
                  <div class="pants-item">
                    <img loading="lazy" src="./assets/pants/pleat/pleat2.png" alt="pleat">
                    <p>pleat</p>
                  </div>
                  <div class="pants-item">
                    <img loading="lazy" src="./assets/pants/pleat/pleat3.png" alt="pleat">
                    <p>pleat</p>
                  </div>
                  <div class="pants-item">
                    <img loading="lazy" src="./assets/pants/pleat/pleat4.png" alt="pleat">
                    <p>pleat</p>
                  </div>
                  <div class="pants-item">
                    <img loading="lazy" src="./assets/pants/pleat/pleat5.png" alt="pleat">
                    <p>pleat</p>
                  </div>
                </div>
              </div>
            </div>
          `),
            F();
        }
        break;
      case 3:
        t.innerHTML = `
        <p>Now it’s time to add a personal touch to your garment!</p>
        <p>You can customize your suit with embroidery. Please select your preferred locations for the embroidery or choose "No Embroidery" to skip.</p>
      `;
        let r = window.matchMedia("(max-width: 1024.9px)").matches,
          o = `
        <h2 class="text-step3">Jacket Embroidery Locations</h2>
        <div id="embroideryLocationsContainer">
          <!-- Embroidery Choices -->
          <div class="choice-container-step3" id="embroideryChoices">
            <div class="jacket-embroidery-choice">
              <img loading="lazy" src="./assets/embroidery/behind-your-lapel.png" alt="Inner right chest pocket"/>
              <p>Inner right chest pocket</p>
            </div>
            <div class="jacket-embroidery-choice">
              <img loading="lazy" src="./assets/embroidery/inner-left-embroidery.png" alt="Inner left chest pocket"/>
              <p>Inner left chest pocket</p>
            </div>
            <div class="jacket-embroidery-choice">
              <img loading="lazy" src="./assets/embroidery/inner-right-embroidery.png" alt="Under the collar flap"/>
              <p>Under the collar flap</p>
            </div>
            <!-- "No Embroidery" Option -->
            <div class="jacket-embroidery-choice no-embroidery">
              <img loading="lazy" src="./assets/rectangle_115.webp" alt="No Embroidery"/>
              <p>No Embroidery</p>
            </div>
          </div>
      `;
        if (
          (r &&
            (o += `
          <!-- Color Choices (created only on mobile) -->
          <div class="color-options hidden" id="colorChoices">
          <span class="mobile-colors">
            <button class="color-option" data-color="#FF0000" style="background-color: #7A1313;"></button>
          </span>
          <span class="mobile-colors">
            <button class="color-option" data-color="#00FF00" style="background-color: #000000;"></button>
          </span>
          <span class="mobile-colors">
            <button class="color-option" data-color="#0000FF" style="background-color: #FFFFFF;"></button>
          </span>
          </div>
        `),
          (o += "</div>"),
          r &&
            (o += `
          <div class="mobile-embroidery-buttons">
            <button id="locationButton" class="embroidery-button">Location</button>
            <button id="colorButton" class="embroidery-button">Color</button>
            <button id="charactersButton" class="embroidery-button">Characters</button>
          </div>
        `),
          (a.innerHTML = o),
          r &&
            (function e() {
              let t = document.querySelector("#embroideryChoices");
              if (!t) {
                console.error("Embroidery choices container not found.");
                return;
              }
              t.flickityInstance && t.flickityInstance.destroy();
              let a = new Flickity(t, {
                cellAlign: "center",
                contain: !0,
                draggable: !0,
                prevNextButtons: !1,
                pageDots: !1,
                wrapAround: !1,
              });
              t.flickityInstance = a;
            })(),
          u.embroidery.jacket.length > 0)
        )
          u.embroidery.jacket.forEach((e) => {
            let t = Array.from(
              document.querySelectorAll(".jacket-embroidery-choice")
            ).find((t) => t.querySelector("p").innerText.trim() === e.location);
            t && t.classList.add("selected");
          });
        else {
          let c = document.querySelector(
            ".jacket-embroidery-choice.no-embroidery"
          );
          c && c.classList.add("selected");
        }
        window.matchMedia("(max-width: 1024.9px)").matches &&
          (function e() {
            let t = document.getElementById("locationButton"),
              a = document.getElementById("colorButton"),
              s = document.getElementById("charactersButton"),
              n = document.getElementById("embroideryChoices"),
              i = [t, a, s];
            function l(e) {
              i.forEach((e) => e?.classList.remove("active")),
                e.classList.add("active");
            }
            t &&
              t.addEventListener("click", () => {
                l(t);
                let e = document.getElementById("colorChoices"),
                  a = document.querySelector(".characters-inputs");
                n && n.classList.remove("hidden"),
                  e && e.classList.add("hidden"),
                  a && (a.style.display = "none"),
                  event.stopPropagation();
              }),
              a &&
                a.addEventListener("click", () => {
                  l(a);
                  let e = document.getElementById("colorChoices"),
                    t = document.querySelector(".characters-inputs");
                  n && n.classList.add("hidden"),
                    e && e.classList.remove("hidden"),
                    t && (t.style.display = "none"),
                    event.stopPropagation();
                }),
              s &&
                s.addEventListener("click", () => {
                  l(s), n && n.classList.add("hidden");
                  let e = document.getElementById("colorChoices");
                  e && e.classList.add("hidden");
                  let t = u.embroidery.jacket;
                  if (0 === t.length) {
                    alert("No embroidery locations chosen.");
                    return;
                  }
                  ef();
                  let a = document.querySelector(".characters-inputs");
                  a && (a.style.display = "block"), event.stopPropagation();
                });
            let r = document.getElementById("colorChoices");
            if (r) {
              let o = r.querySelectorAll(".color-option");
              o.forEach((e) => {
                e.addEventListener("click", (t) => {
                  o.forEach((e) => e.classList.remove("selected")),
                    e.classList.add("selected");
                  let a = e.getAttribute("data-color");
                  (u.embroidery.threadColor = a),
                    u.embroidery.jacket &&
                      u.embroidery.jacket.length > 0 &&
                      u.embroidery.jacket.forEach((e) => {
                        e.color = a;
                      }),
                    console.log("Mobile embroidery thread color selected:", a),
                    t.stopPropagation();
                });
              });
            }
            window.matchMedia("(max-width: 1024.9px)").matches ||
              document.addEventListener("click", (e) => {
                let i = document.getElementById("embroideryLocationsContainer");
                if (!i) {
                  console.error(
                    "Element with ID 'embroideryLocationsContainer' not found."
                  );
                  return;
                }
                let l =
                  i.contains(e.target) ||
                  (t && t.contains(e.target)) ||
                  (a && a.contains(e.target)) ||
                  (s && s.contains(e.target));
                if (!l) {
                  n.classList.add("hidden");
                  let r = document.getElementById("colorChoices");
                  r && r.classList.add("hidden");
                }
              });
          })(),
          eu(!1),
          y.forEach((e) => e.setEnabled(!0)),
          C.removeAllMeshes();
        break;
      case 4:
        if (
          window.matchMedia("(max-width: 1024.9px)").matches ||
          !u.embroidery.jacket ||
          0 === u.embroidery.jacket.length
        ) {
          ee((m = 5));
          return;
        }
        (t.innerHTML = `
        <p>Customize your jacket embroidery!</p>
        <p>Please enter your desired text and select your preferred color for each embroidery location.</p>
      `),
          (a.style.display = "flex"),
          (a.style.padding = "0 20px"),
          (a.style.justifyContent = "start"),
          (a.innerHTML = `
        <h2 class="text-step3 step4 embroidery">Jacket Embroidery Customization</h2>
        <div id="embroideryCustomizationContainer"></div>
      `);
        let d = document.getElementById("embroideryCustomizationContainer");
        u.embroidery.jacket.forEach((e, t) => {
          d.innerHTML += `
          <div class="embroidery-customization" data-index="${t}">
            <h3>Embroidery ${t + 1}: ${e.location}</h3>
            <button class="remove-embroidery-button" data-index="${t}"><svg class="remove-emb"xmlns="http://www.w3.org/2000/svg" fill="#000000" width="800px" height="800px" viewBox="0 0 256 256" id="Flat">
  <path d="M202.82861,197.17188a3.99991,3.99991,0,1,1-5.65722,5.65624L128,133.65723,58.82861,202.82812a3.99991,3.99991,0,0,1-5.65722-5.65624L122.343,128,53.17139,58.82812a3.99991,3.99991,0,0,1,5.65722-5.65624L128,122.34277l69.17139-69.17089a3.99991,3.99991,0,0,1,5.65722,5.65624L133.657,128Z"/>
</svg></button>
            <div class="embroidery-color-and-text">
              <div class="jacket-embroidery-choice">
                <img loading="lazy" class="embroidery-image" src="./assets/rectangle_115.webp" alt="${
                  e.location
                }">
                <p>${e.location}</p>
              </div>
              <div class="embroidery-color-and-text-input">
                <div class="embroidery-color-picker">
                  <label>Select Color:</label>
                  <div id="embroidery-thread-colors-picker-jacket-${t}" class="color-picker-container">
                    ${(function e(t) {
                      let a = ["#000000", "#FFFFFF", "#7A1313"];
                      return a
                        .map(
                          (e) => `
      <div class="color-circle ${
        u.embroidery.threadColor === e ? "selected" : ""
      }" 
           data-color="${e}" 
           style="background-color: ${e};">
      </div>
    `
                        )
                        .join("");
                    })(21)}
                  </div>
                </div>
                <div class="embroidery-text-input">
                  <label>Enter Text (max 20 characters):</label>
                  <input
                    type="text"
                    id="embroideryTextInput${t}"
                    maxlength="20"
                    placeholder="Your text here"
                    value="${e.text}"
                  />
                </div>
              </div>
            </div>
          </div>
        `;
        }),
          u.embroidery.jacket.forEach((e, t) => {
            let a = document.getElementById(
              `embroidery-thread-colors-picker-jacket-${t}`
            );
            if (a) {
              let s = a.querySelectorAll(".color-circle");
              s.forEach((a) => {
                a.addEventListener("click", () => {
                  s.forEach((e) => e.classList.remove("selected")),
                    a.classList.add("selected"),
                    (u.embroidery.jacket[t].color =
                      a.getAttribute("data-color"));
                }),
                  e.color &&
                    e.color === a.getAttribute("data-color") &&
                    a.classList.add("selected");
              });
            }
            let n = document.getElementById(`embroideryTextInput${t}`);
            n &&
              n.addEventListener("input", () => {
                u.embroidery.jacket[t].text = n.value.trim();
              });
            let i = document.querySelector(
              `.remove-embroidery-button[data-index="${t}"]`
            );
            i &&
              i.addEventListener("click", () => {
                u.embroidery.jacket.splice(t, 1), en(4);
              });
          });
        break;
      case 5:
        (u.currentMeasurementType = null),
          window.matchMedia("(max-width: 1024.9px)").matches &&
            (gsap.to(".canvas-container", { duration: 0.5, autoAlpha: 0 }),
            (document.querySelector("#arrow").style.display = "none")),
          (t.innerHTML =
            '<h2 class="measurement-header">Customize your suit size</h2>'),
          (a.style.display = "flex"),
          (a.style.flexDirection = "column"),
          (a.style.alignItems = "center"),
          (a.style.justifyContent = "center"),
          (a.innerHTML = `
    <div class="measurement-step-content">
      <div class="blazer-pants-sizes" id="sizeDetailsContainer"></div>
      <div class="size-type-buttons">
        <div class="blazerpants-size-trigger">
          <span>Blazer</span>
          <a id="blazerSizeBtn" class="size-btn">Add Blazer Size</a>
        </div>
        <div class="blazerpants-size-trigger">
          <span>Pants</span>
          <a id="pantsSizeBtn" class="size-btn">Add Pants Size</a>
        </div>
      </div>
            <div class="bottom-sizes-section outer">
          <p class="size-message-almost">We’re almost there! </p>
          <p class="size-message-almostsub">Let’s make sure your garment fits you perfectly!</p>
           <div class="confirm-bottom">
              <p class="size-help">Need help? <a href="#">Finish in store</a></p>
             
           </div>
      </div>
    </div>
  `);
        let p = document.getElementById("sizeDetailsContainer"),
          $ = document.getElementById("blazerSizeBtn"),
          g = document.getElementById("pantsSizeBtn"),
          h = u.currentMeasurementType || null;
        ($.onclick = function () {
          if ("blazer" === h && "hidden" !== p.style.visibility) {
            "hidden" === p.style.visibility &&
              ((p.style.visibility = "visible"),
              gsap.fromTo(
                p,
                { y: -50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
              ));
            return;
          }
          (h = "blazer"),
            (u.currentMeasurementType = "blazer"),
            p.innerHTML.trim() && "hidden" !== p.style.visibility
              ? gsap.to(p, {
                  x: 50,
                  opacity: 0,
                  duration: 0.3,
                  ease: "power2.in",
                  onComplete: function () {
                    (p.innerHTML = es()),
                      (p.style.visibility = "visible"),
                      gsap.fromTo(
                        p,
                        { x: -50, opacity: 0 },
                        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
                      ),
                      Q(p);
                  },
                })
              : ((p.innerHTML = es()),
                (p.style.visibility = "visible"),
                gsap.fromTo(
                  p,
                  { x: -50, opacity: 0 },
                  { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
                ),
                Q(p));
        }),
          (g.onclick = function () {
            if ("pants" === h && "hidden" !== p.style.visibility) {
              "hidden" === p.style.visibility &&
                ((p.style.visibility = "visible"),
                gsap.fromTo(
                  p,
                  { y: -50, opacity: 0 },
                  { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
                ));
              return;
            }
            (h = "pants"),
              (u.currentMeasurementType = "pants"),
              p.innerHTML.trim() && "hidden" !== p.style.visibility
                ? gsap.to(p, {
                    x: 50,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.in",
                    onComplete: function () {
                      (p.innerHTML = ea()),
                        (p.style.visibility = "visible"),
                        gsap.fromTo(
                          p,
                          { x: -50, opacity: 0 },
                          {
                            x: 0,
                            opacity: 1,
                            duration: 0.5,
                            ease: "power2.out",
                          }
                        ),
                        Q(p);
                    },
                  })
                : ((p.innerHTML = ea()),
                  (p.style.visibility = "visible"),
                  gsap.fromTo(
                    p,
                    { x: -50, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
                  ),
                  Q(p));
          }),
          p.addEventListener("click", function (e) {
            if (
              e.target &&
              ("confirm-blazer-sizes" === e.target.id ||
                "confirm-pants-sizes" === e.target.id)
            ) {
              e.stopPropagation();
              let t = p.querySelectorAll("select.measurement-select");
              t.forEach((e) => {
                u.measurements[e.id] = e.value;
              }),
                gsap.to(p, {
                  x: window.innerWidth + p.offsetWidth,
                  opacity: 0,
                  duration: 0.5,
                  ease: "power2.in",
                  onComplete: function () {
                    (p.style.visibility = "hidden"),
                      (p.style.transform = "translate(-30dvw, 0px)");
                  },
                });
            }
          });
        break;
      case 6:
        (a.innerHTML = `
        <div class="thank-you-message" style="font-size: 2em; text-align: center; padding: 40px;">
          Thank you for using our app!
        </div>
      `),
          (a.style.display = "flex"),
          (a.style.justifyContent = "center"),
          (a.style.alignItems = "center"),
          (document.getElementById("nextButton").textContent = "Finish");
        break;
      default:
        (A.style.display = "block"), console.log("Invalid step");
    }
    !(function e(t) {
      let a = document.getElementById("sidePanel");
      if (!a) return;
      let s = a.querySelector(".widescreen-step");
      if (s) {
        for (; s.firstChild; ) a.insertBefore(s.firstChild, s);
        s.remove();
      }
      if (window.matchMedia("(max-width: 1024.9px)").matches) {
        let n = document.createElement("div");
        n.classList.add(`step-${t}-ws`, "widescreen-step"),
          Array.from(a.children).forEach((e) => {
            e.classList.contains("next-back-btns") || n.appendChild(e);
          }),
          a.insertBefore(n, a.firstChild);
      } else {
        let i = document.createElement("div");
        for (i.classList.add(`step-${t}-ws`, "widescreen-step"); a.firstChild; )
          i.appendChild(a.firstChild);
        a.appendChild(i);
      }
    })(e);
  }
  function ei() {
    return [
      "Waist",
      "Crotch Depth",
      "Seat",
      "Knee",
      "Inseam",
      "Hips",
      "Thigh",
      "Outseam",
      "Ankle",
    ]
      .map(
        (e) => `
        <div class="measurement-input" id="${e.replace(/\s/g, "")}Measurement">
          <label for="${e}Input">${e}</label>
          <input type="number" id="${e}Input" />
          <div class="line"></div>
          <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 0.692308C2.39707 0.692308 0.692308 2.39707 0.692308 4.5C0.692308 6.60291 2.39707 8.30769 4.5 8.30769C6.60291 8.30769 8.30769 6.60291 8.30769 4.5C8.30769 2.39707 6.60291 0.692308 4.5 0.692308ZM0 4.5C0 2.01472 2.01472 0 4.5 0C6.98529 0 9 2.01472 9 4.5C9 6.98529 6.98529 9 4.5 9C2.01472 9 0 6.98529 0 4.5ZM4.5 4.15385C4.69117 4.15385 4.84615 4.30883 4.84615 4.5V6.11538C4.84615 6.30655 4.69117 6.46154 4.5 6.46154C4.30883 6.46154 4.15385 6.30655 4.15385 6.11538V4.5C4.15385 4.30883 4.30883 4.15385 4.5 4.15385ZM4.5 2.65385C4.24509 2.65385 4.03846 2.86049 4.03846 3.11538C4.03846 3.37028 4.24509 3.57692 4.5 3.57692H4.50462C4.75952 3.57692 4.96615 3.37028 4.96615 3.11538C4.96615 2.86049 4.75952 2.65385 4.50462 2.65385H4.5Z" fill="black"/>
          </svg>
        </div>
      `
      )
      .join("");
  }
  function el(e, t, a, s) {
    let n = document.getElementById("textureContainer");
    n.innerHTML = "";
    let i = document.createElement("button");
    (i.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="9" fill="#EFEFEF"></circle>
        <path d="M4.64645 8.64645C4.45118 8.84171 4.45118 9.15829 4.64645 9.35355L7.82843 12.5355C8.02369 12.7308 8.34027 12.7308 8.53553 12.5355C8.7308 12.3403 8.7308 12.0237 8.53553 11.8284L5.70711 9L8.53553 6.17157C8.7308 5.97631 8.7308 5.65973 8.53553 5.46447C8.34027 5.2692 8.02369 5.2692 7.82843 5.46447L4.64645 8.64645ZM13 8.5L5 8.5L5 9.5L13 9.5L13 8.5Z" fill="black"></path>
      </svg>`),
      i.classList.add("back-to-cat"),
      i.addEventListener("click", () => {
        t ? er(e) : eo();
      }),
      n.appendChild(i);
    let l = document.createElement("div");
    (l.className = "cards-wrapper"),
      s.forEach((t, s) => {
        let n = (function e(t, a, s, n) {
          let i = n.replace("/fabric_optimized/", "/fabric_optimized_2048/"),
            l = document.createElement("div");
          (l.className = "card_cardContainer card_small"),
            (l.dataset.testId = s),
            (l.tabIndex = s + 1),
            l.setAttribute("data-original-url", n + a);
          let r = document.createElement("div");
          r.className = "card_cardImageContainer";
          let o = document.createElement("img");
          (o.className = "card_cardImage"),
            (o.loading = "lazy"),
            (o.src = i + a),
            (o.alt = a),
            r.appendChild(o);
          let c = document.createElement("div");
          (c.className = "card_infoSpaceContainer card_dark"),
            (c.dataset.testId = "info-btn"),
            (c.innerHTML = '<p class="susu-pcons" translate="no">info</p>'),
            r.appendChild(c);
          let d = document.createElement("div");
          d.className = "card_cardDetails card_hideMobileInfoText";
          let p = document.createElement("div");
          (p.className = "card_cardText"),
            (p.dataset.testId = "card-text"),
            (p.textContent = ec(a));
          let m = document.createElement("div");
          return (
            (m.className = "card_cardSubText"),
            (m.dataset.testId = "card-subtext"),
            (m.textContent = (function e(t) {
              let a = t.replace(/\.[^.]+$/, ""),
                s = a.match(/-\s*(\$[\d.]+)/);
              return s ? s[1] : "$0.00";
            })(a)),
            d.appendChild(p),
            d.appendChild(m),
            l.appendChild(r),
            l.appendChild(d),
            l.addEventListener("click", (e) => {
              e.stopPropagation(),
                (function e(t, a, s, n) {
                  document
                    .querySelectorAll(".card_small.selected")
                    .forEach((e) => {
                      e.classList.remove("selected");
                    }),
                    s.classList.add("selected");
                  let i = s.getAttribute("data-original-url") || n + a;
                  ed(i),
                    (u.texture = a),
                    console.log("userChoices.texture updated to:", u.texture);
                })(t, a, l, n);
            }),
            l
          );
        })(e, t, s, a);
        l.appendChild(n);
      }),
      n.appendChild(l),
      window.matchMedia("(max-width: 1024.9px)").matches && ey();
  }
  function er(e) {
    let t = document.getElementById("textureContainer");
    t.innerHTML = "";
    let a = document.createElement("button");
    (a.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="9" fill="#EFEFEF"></circle>
        <path d="M4.64645 8.64645C4.45118 8.84171 4.45118 9.15829 4.64645 9.35355L7.82843 12.5355C8.02369 12.7308 8.34027 12.7308 8.53553 12.5355C8.7308 12.3403 8.7308 12.0237 8.53553 11.8284L5.70711 9L8.53553 6.17157C8.7308 5.97631 8.7308 5.65973 8.53553 5.46447C8.34027 5.2692 8.02369 5.2692 7.82843 5.46447L4.64645 8.64645ZM13 8.5L5 8.5L5 9.5L13 9.5L13 8.5Z" fill="black"></path>
      </svg>`),
      a.classList.add("back-to-cat"),
      a.addEventListener("click", () => {
        eo();
      }),
      t.appendChild(a);
    let s = p[e];
    if (Array.isArray(s))
      el(e, null, "./assets/fabric_optimized/All Fabrics/", s);
    else {
      let n;
      if (
        window.matchMedia("(max-width: 1024.9px)").matches &&
        ("Colour" === e || "Design" === e)
      ) {
        let i = document.createElement("div");
        i.classList.add("cards-wrapper"),
          (n = document.createElement("div")).classList.add("cards-wrapper"),
          i.appendChild(n),
          t.appendChild(i);
      } else
        ((n = document.createElement("div")).className = "cards-wrapper"),
          t.appendChild(n);
      Object.keys(s).forEach((t, a) => {
        let i = s[t],
          l = (function e(t, a, s, n) {
            let i = document.createElement("div");
            (i.className = "card_cardContainer"),
              (i.dataset.testId = a),
              (i.tabIndex = n + 1),
              (i.style.cssText =
                "translate: none; rotate: none; scale: none; transform: translate(0px, 0px); touch-action: pan-y;");
            let l = document.createElement("div");
            (l.className = "card_cardImageContainer"),
              (l.style.touchAction = "pan-y;");
            let r = `./assets/fabric_optimized/${t}/${a}/`,
              o = r.replace("/fabric_optimized/", "/fabric_optimized_2048/"),
              c = s.slice(0, 4);
            c.forEach((e) => {
              let t = document.createElement("img");
              (t.className = "card_cardImage"),
                (t.loading = "lazy"),
                (t.src = o + e),
                (t.alt = e),
                (t.style.touchAction = "pan-y;"),
                l.appendChild(t);
            });
            let d = document.createElement("div");
            (d.className = "card_itemAmountContainer"),
              (d.dataset.testId = "item-amount"),
              (d.style.touchAction = "pan-y;"),
              (d.textContent = s.length),
              l.appendChild(d),
              i.appendChild(l);
            let p = document.createElement("div");
            (p.className = "card_cardDetails"),
              (p.style.touchAction = "pan-y;");
            let m = document.createElement("p");
            (m.className = "card_cardText"),
              (m.dataset.testId = "card-text"),
              (m.style.touchAction = "pan-y;"),
              (m.textContent = a),
              p.appendChild(m),
              i.appendChild(p);
            let u = document.createElement("div");
            return (
              (u.className = "card_arrowIcon"),
              (u.style.touchAction = "pan-y;"),
              (u.innerHTML = `<svg class="arrow-right" xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 330 330" width="30" height="30" style="touch-action: pan-y;">
    <path d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  
       c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394
       c-5.857,5.858-5.857,15.355,0.001,21.213  
       C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394  
       l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  
       C255,161.018,253.42,157.202,250.606,154.389z" style="touch-action: pan-y;"></path>
  </svg>`),
              i.appendChild(u),
              i.addEventListener("click", () => {
                el(t, a, r, s);
              }),
              i
            );
          })(e, t, i, a);
        n.appendChild(l);
      }),
        window.matchMedia("(max-width: 1024.9px)").matches &&
          ("Colour" === e || "Design" === e) &&
          ey();
    }
  }
  function eo() {
    let e = document.getElementById("textureContainer");
    e.innerHTML = "";
    let t = document.createElement("div");
    (t.className = "cards-wrapper"),
      Object.keys(p).forEach((e, a) => {
        let s = (function e(t, a) {
          let s = document.createElement("div");
          (s.className = "card_cardContainer"),
            (s.dataset.testId = t),
            (s.tabIndex = a + 1),
            (s.style.cssText =
              "translate: none; rotate: none; scale: none; transform: translate(0px, 0px); touch-action: pan-y;");
          let n = document.createElement("div");
          (n.className = "card_cardImageContainer"),
            (n.style.touchAction = "pan-y;");
          let i = [],
            l = 0,
            r = p[t];
          if (Array.isArray(r)) (i = r.slice(0, 4)), (l = r.length);
          else {
            let o = Object.keys(r);
            o.length > 0 && ((i = r[o[0]].slice(0, 4)), (l = r[o[0]].length));
          }
          let c = "";
          c =
            "All Fabrics" === t
              ? "./assets/fabric_optimized/All Fabrics/"
              : "Colour" === t
              ? "./assets/fabric_optimized/Colour/Beige/"
              : "Design" === t
              ? "./assets/fabric_optimized/Design/Birdseye/"
              : "Event" === t
              ? "./assets/fabric_optimized/Event/Business/"
              : "./assets/fabric_optimized/All Fabrics/";
          let d = c.replace("/fabric_optimized/", "/fabric_optimized_2048/");
          i.forEach((e) => {
            let t = document.createElement("img");
            (t.className = "card_cardImage"),
              (t.loading = "lazy"),
              (t.src = d + e),
              (t.alt = e),
              (t.style.touchAction = "pan-y;"),
              n.appendChild(t);
          });
          let m = document.createElement("div");
          (m.className = "card_itemAmountContainer"),
            (m.dataset.testId = "item-amount"),
            (m.style.touchAction = "pan-y;"),
            (m.textContent = l),
            n.appendChild(m),
            s.appendChild(n);
          let u = document.createElement("div");
          (u.className = "card_cardDetails"), (u.style.touchAction = "pan-y;");
          let $ = document.createElement("p");
          ($.className = "card_cardText"),
            ($.dataset.testId = "card-text"),
            ($.style.touchAction = "pan-y;"),
            ($.textContent = t),
            u.appendChild($),
            s.appendChild(u);
          let g = document.createElement("div");
          return (
            (g.className = "card_arrowIcon"),
            (g.style.touchAction = "pan-y;"),
            (g.innerHTML = `<svg class="arrow-right" xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 330 330" width="30" height="30" style="touch-action: pan-y;">
    <path d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  
       c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394
       c-5.857,5.858-5.857,15.355,0.001,21.213  
       C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394  
       l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  
       C255,161.018,253.42,157.202,250.606,154.389z" style="touch-action: pan-y;"></path>
  </svg>`),
            s.appendChild(g),
            s.addEventListener("click", () => {
              er(t);
            }),
            s
          );
        })(e, a);
        t.appendChild(s);
      }),
      e.appendChild(t),
      window.matchMedia("(max-width: 1024.9px)").matches && ey(),
      gsap.fromTo(
        ".card_cardImage",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.1 }
      );
  }
  function ec(e) {
    return e.replace(/\.[^.]+$/, "").replace(/-\s*\$[\d.]+$/, "");
  }
  function ed(e) {
    if (!g || (g.diffuseTexture && g.diffuseTexture.name === e)) return;
    let t = document.getElementById("renderCanvas");
    gsap.to(t, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      onComplete() {
        let a = new BABYLON.Texture(
          e,
          h,
          !1,
          !0,
          BABYLON.Texture.TRILINEAR_SAMPLINGMODE,
          () => {
            console.log(`Texture loaded: ${e}`),
              gsap.to(".loader-tn", {
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                onComplete: function () {
                  let e = document.getElementById("loader-top-notch");
                  e && (e.style.zIndex = "-1");
                },
              }),
              (g.diffuseTexture = a),
              (g.diffuseTexture.name = e),
              (a.uScale = 5),
              (a.vScale = 5),
              (g.backFaceCulling = !1),
              (g.specularColor = new BABYLON.Color3(0, 0, 0)),
              (g.ambientColor = new BABYLON.Color3(1, 1, 1)),
              gsap.to(t, { opacity: 1, duration: 0.5, ease: "power2.in" });
          },
          (t, a) => {
            console.error(`Failed to load texture: ${e}`, t, a);
          }
        );
        console.log("Changing texture to:", e);
      },
    });
  }
  function ep() {
    console.log("[showMobileCutOptions] Displaying cut options...");
    let e = document.getElementById("textureContainer");
    e.innerHTML = "";
    let t = document.createElement("button");
    (t.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="9" fill="#EFEFEF"></circle>
        <path d="M4.64645 8.64645C4.45118 8.84171 4.45118 9.15829 4.64645 9.35355L7.82843 12.5355C8.02369 12.7308 8.34027 12.7308 8.53553 12.5355C8.7308 12.3403 8.7308 12.0237 8.53553 11.8284L5.70711 9L8.53553 6.17157C8.7308 5.97631 8.7308 5.65973 8.53553 5.46447C8.34027 5.2692 8.02369 5.2692 7.82843 5.46447L4.64645 8.64645ZM13 8.5L5 8.5L5 9.5L13 9.5L13 8.5Z" fill="black"></path>
      </svg>`),
      t.classList.add("back-to-cat"),
      t.addEventListener("click", () => {
        console.log("[showMobileCutOptions] Confirm clicked => returning"), K();
      }),
      e.appendChild(t);
    let a = document.createElement("div");
    (a.id = "mobileCutSlider"),
      a.classList.add("cards-wrapper"),
      [
        {
          src: "./assets/pants/cut/cut1.png",
          label: "Extra Slim",
          meshName: "cut1_mesh",
        },
        {
          src: "./assets/pants/cut/cut2.png",
          label: "Slim",
          meshName: "cut2_mesh",
        },
        {
          src: "./assets/pants/cut/cut3.png",
          label: "Straight",
          meshName: "cut3_mesh",
        },
        {
          src: "./assets/pants/cut/cut4.png",
          label: "Classic",
          meshName: "cut4_mesh",
        },
        {
          src: "./assets/pants/cut/cut5.png",
          label: "Relaxed Fit",
          meshName: "cut5_mesh",
        },
        {
          src: "./assets/pants/cut/cut6.png",
          label: "Tapered Leg",
          meshName: "cut6_mesh",
        },
        {
          src: "./assets/pants/cut/cut7.png",
          label: "Flat Front",
          meshName: "cut7_mesh",
        },
        {
          src: "./assets/pants/cut/cut8.png",
          label: "Pleated Front",
          meshName: "cut8_mesh",
        },
        {
          src: "./assets/pants/cut/cut9.png",
          label: "High waist",
          meshName: "cut9_mesh",
        },
        {
          src: "./assets/pants/cut/cut10.png",
          label: "Low rise",
          meshName: "cut10_mesh",
        },
      ].forEach((e) => {
        let t = document.createElement("div");
        t.classList.add("card_cardContainer", "part-option"),
          t.setAttribute("data-part-name", "Cut"),
          t.setAttribute("data-mesh-name", e.meshName),
          (t.tabIndex = 0),
          (t.style.touchAction = "pan-y"),
          (t.style.cursor = "pointer");
        let s = document.createElement("div");
        s.classList.add("img-wrapper"), (s.style.touchAction = "pan-y");
        let n = document.createElement("img");
        (n.src = e.src),
          (n.alt = e.label),
          (n.style.touchAction = "pan-y"),
          (n.style.width = "83px"),
          (n.style.height = "174px"),
          (n.style.objectFit = "contain"),
          s.appendChild(n);
        let i = document.createElement("p");
        (i.textContent = e.label),
          (i.style.touchAction = "pan-y"),
          t.appendChild(s),
          t.appendChild(i),
          t.addEventListener("click", () => {
            console.log("[showMobileCutOptions] Chosen cut:", e.label),
              a.querySelectorAll(".part-option").forEach((e) => {
                e.classList.remove("selected");
              }),
              t.classList.add("selected"),
              (u.design.pants.cut = e.meshName),
              e0("Cut", e.meshName);
          }),
          a.appendChild(t);
      }),
      e.appendChild(a),
      X("#mobileCutSlider");
  }
  function em(e) {
    let t = e.target.closest(".accordion"),
      a = e.target.closest(".sub_accordion");
    if (t) {
      console.log("[accordionClickHandler] Top-level accordion clicked:", t),
        t.classList.toggle("active");
      let s = t.querySelector(".sign-acc"),
        n = t.nextElementSibling;
      n.style.maxHeight && "0px" !== n.style.maxHeight
        ? ((n.style.maxHeight = "0px"),
          (s.innerHTML = "+"),
          console.log("[accordionClickHandler] Collapsing panel"))
        : ((n.style.maxHeight = "300px"),
          (s.innerHTML = "-"),
          console.log("[accordionClickHandler] Expanding panel")),
        document.querySelectorAll(".accordion").forEach((e) => {
          if (e !== t && e.classList.contains("active")) {
            e.classList.remove("active");
            let a = e.querySelector(".sign-acc"),
              s = e.nextElementSibling;
            s &&
              ((s.style.maxHeight = "0px"),
              (a.innerHTML = "+"),
              console.log(
                `[accordionClickHandler] Closing other accordion: ${e.getAttribute(
                  "data-category"
                )}`
              ));
          }
        }),
        C.removeAllMeshes();
      let i = t.getAttribute("data-category");
      console.log("[accordionClickHandler] Category is:", i),
        "jacket" === i
          ? (console.log("[accordionClickHandler] Loading Jacket options..."),
            eu(),
            v.length > 0 || console.warn("No jacket meshes available to zoom."))
          : "pants" === i
          ? console.log("[accordionClickHandler] Loading Pants options...")
          : "vest" === i
          ? (console.log(
              "[accordionClickHandler] Vest option clicked. (Example only)"
            ),
            v.forEach((e) => e.setEnabled(!1)),
            y.forEach((e) => e.setEnabled(!1)),
            C.removeAllMeshes())
          : (console.log("[accordionClickHandler] Show all (fallback case)."),
            v.forEach((e) => e.setEnabled(!0)),
            y.forEach((e) => e.setEnabled(!0)),
            Object.keys(w).forEach((e) => {
              Object.keys(w[e]).forEach((t) => {
                let a = w[e][t];
                a && a.setEnabled(!0);
              });
            }),
            C.removeAllMeshes());
    } else if (a) {
      console.log("[accordionClickHandler] Sub-accordion clicked:", a),
        a.classList.toggle("active");
      let l = a.querySelector(".sign-acc"),
        r = a.nextElementSibling;
      r.style.maxHeight && "0px" !== r.style.maxHeight
        ? ((r.style.maxHeight = "0px"),
          (l.innerHTML = "+"),
          console.log("[accordionClickHandler] Collapsing sub-panel"))
        : ((r.style.maxHeight = r.scrollHeight + "px"),
          (l.innerHTML = "-"),
          console.log(
            "[accordionClickHandler] Expanding sub-panel to:",
            r.style.maxHeight
          ));
      let o = a.getAttribute("data-category");
      console.log("[accordionClickHandler] Sub-category is:", o),
        "cut" === o &&
          window.matchMedia("(max-width: 1024.9px)").matches &&
          (console.log(
            "[accordionClickHandler] 'Cut' was clicked on MOBILE -> Show mobile cut function"
          ),
          ep());
    }
  }
  function eu() {
    Object.keys(w).forEach((e) => {
      let t = u.design.jacket[e];
      t &&
        Object.keys(w[e]).forEach((a) => {
          let s = w[e][a];
          s &&
            (s.setEnabled(a === t),
            a === t &&
              ((s.renderingGroupId = 2),
              (I[e] = s),
              C.addMesh(s, BABYLON.Color3.White())));
        });
    }),
      ev(),
      Object.entries(u.design.jacket).forEach(([e, t]) => {
        if (!t) return;
        let a = document.querySelector(
          `.part-option[data-part-name="${e}"][data-mesh-name="${t}"]`
        );
        a && a.classList.add(ek(e, t));
      });
    let e = u.design.jacket.PocketsTop;
    if (e) {
      let t = document.querySelector(
        `.part-option[data-part-name="Pockets"][data-mesh-name="${e}"]`
      );
      t && t.classList.add("selected-top-pocket");
    }
    let a = u.design.jacket.PocketsBottom;
    if (a) {
      let s = document.querySelector(
        `.part-option[data-part-name="Pockets"][data-mesh-name="${a}"]`
      );
      s && s.classList.add("selected-bottom-pocket");
    }
    let n = u.design.jacket.Pockets;
    if (n) {
      Object.keys(w.Pockets).forEach((e) => {
        w.Pockets[e].setEnabled(!1);
      });
      let i = w.Pockets[n];
      i &&
        (i.setEnabled(!0),
        (I.Pockets = i),
        C.addMesh(i, BABYLON.Color3.White()));
    }
  }
  function e$(e) {
    let t = e.target.closest(".part-option");
    if (!t) return;
    let a = t.getAttribute("data-part-name"),
      s = t.getAttribute("data-mesh-name");
    if (!a || !s) {
      console.warn("Missing data-part-name or data-mesh-name attributes.");
      return;
    }
    if (
      !window.matchMedia("(max-width: 1024.9px)").matches ||
      "Pockets" !== a
    ) {
      if ("Pockets" === a) {
        let n = ek(a, s);
        if (t.classList.contains(n)) {
          t.classList.remove(n),
            (u.design.jacket.Pockets = void 0),
            e3.includes(s)
              ? (u.design.jacket.PocketsTop = void 0)
              : eg.includes(s) && (u.design.jacket.PocketsBottom = void 0),
            e_(s);
          return;
        }
      }
      if ((e0(a, s), "Pockets" === a)) {
        let i = e3.includes(s),
          l = eg.includes(s);
        i
          ? e3.forEach((e) => {
              let t = document.querySelector(
                `.part-option[data-mesh-name="${e}"]`
              );
              t && e !== s && t.classList.remove("selected-top-pocket");
            })
          : l &&
            eg.forEach((e) => {
              let t = document.querySelector(
                `.part-option[data-mesh-name="${e}"]`
              );
              t && e !== s && t.classList.remove("selected-bottom-pocket");
            });
      } else
        document
          .querySelectorAll(`.part-option[data-part-name="${a}"]`)
          .forEach((e) => {
            e.classList.remove(
              "selected-back",
              "selected-lapel",
              "selected-top-pocket",
              "selected-bottom-pocket"
            );
          });
      if (
        (t.classList.add(ek(a, s)),
        "Back" === a
          ? (function e() {
              if (
                void 0 === r ||
                void 0 === o ||
                void 0 === c ||
                void 0 === d
              ) {
                console.error("Initial camera parameters are not set.");
                return;
              }
              let t = c + Math.PI - (_.rotation.y - z);
              (t %= 2 * Math.PI),
                BABYLON.Animation.CreateAndStartAnimation(
                  "cameraRadiusResetBack",
                  b,
                  "radius",
                  60,
                  120,
                  b.radius,
                  r,
                  BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
                ),
                BABYLON.Animation.CreateAndStartAnimation(
                  "cameraTargetResetBack",
                  b,
                  "target",
                  60,
                  120,
                  b.target,
                  o,
                  BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
                ),
                BABYLON.Animation.CreateAndStartAnimation(
                  "cameraAlphaResetBack",
                  b,
                  "alpha",
                  60,
                  120,
                  b.alpha,
                  t,
                  BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
                ),
                BABYLON.Animation.CreateAndStartAnimation(
                  "cameraBetaResetBack",
                  b,
                  "beta",
                  60,
                  120,
                  b.beta,
                  d,
                  BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
                ),
                console.log(
                  "Camera reset to back view (with model rotation offset)."
                );
            })()
          : ("Lapels" === a || "Pockets" === a) && W(),
        ["Pockets"].includes(a))
      ) {
        let p = document.querySelector('.accordion[data-category="jacket"]');
        p && !p.classList.contains("active") ? p.click() : eu();
      }
    }
  }
  let e3 = ["4on2_pocket_4", "4on2_pocket_5", "4on2_pocket_6"],
    eg = [
      "4on2_pocket_1",
      "4on2_pocket_2",
      "4on2_pocket_3",
      "4on2_pocket_7",
      "4on2_pocket_8",
    ];
  function eh(e) {
    let t = [
      {
        src: "assets/jacket/pockets/jacketpockets.png",
        label: "Single Pocket",
        meshName: "4on2_pocket_1",
      },
      {
        src: "assets/jacket/pockets/jacketpockets.png",
        label: "Double Pocket",
        meshName: "4on2_pocket_2",
      },
      {
        src: "assets/jacket/pockets/jacketpockets.png",
        label: "Patch Pocket",
        meshName: "4on2_pocket_3",
      },
      {
        src: "assets/jacket/pockets/jacketpockets.png",
        label: "Flap Pocket",
        meshName: "4on2_pocket_4",
      },
      {
        src: "assets/jacket/pockets/jacketpockets.png",
        label: "Ticket Pocket",
        meshName: "4on2_pocket_5",
      },
      {
        src: "assets/jacket/pockets/jacketpockets.png",
        label: "Slash Pocket",
        meshName: "4on2_pocket_6",
      },
      {
        src: "assets/jacket/pockets/jacketpockets.png",
        label: "Welt Pocket",
        meshName: "4on2_pocket_7",
      },
      {
        src: "assets/jacket/pockets/jacketpockets.png",
        label: "Jetted Pocket",
        meshName: "4on2_pocket_8",
      },
    ];
    if ("top" === e) {
      let a = document.getElementById("mobilePocketsContainer");
      if (!a) return;
      (a.className = "cards-wrapper"), (a.innerHTML = "");
      let s = t.filter((e) => e3.includes(e.meshName));
      s.forEach((e) => {
        let t = document.createElement("div");
        (t.className = "part-option card_cardContainer"),
          t.setAttribute("data-part-name", "Pockets"),
          t.setAttribute("data-mesh-name", e.meshName),
          (t.style.touchAction = "pan-y"),
          (t.style.cursor = "pointer"),
          u.design.jacket.PocketsTop === e.meshName &&
            t.classList.add("selected", "selected-top-pocket"),
          (t.innerHTML = `
        <div class="img-wrapper">
          <img src="${e.src}" alt="${e.label}" style="width:100%; height:auto;">
        </div>
        <p>${e.label}</p>
      `),
          t.addEventListener("click", (s) => {
            s.preventDefault(),
              s.stopPropagation(),
              a.querySelectorAll(".part-option").forEach((e) => {
                e.classList.remove("selected", "selected-top-pocket");
              }),
              t.classList.add("selected", "selected-top-pocket"),
              (u.design.jacket.PocketsTop = e.meshName),
              e0("Pockets", e.meshName, "top"),
              W();
          }),
          a.appendChild(t);
      });
    } else if ("bottom" === e) {
      let n = document.getElementById("mobilePocketsSlider");
      if (n) n.innerHTML = "";
      else {
        ((n = document.createElement("div")).id = "mobilePocketsSlider"),
          (n.className = "cards-wrapper");
        let i = document.getElementById("mobilePocketsContainer");
        i && ((i.innerHTML = ""), i.appendChild(n));
      }
      let l = t.filter((e) => eg.includes(e.meshName));
      l.forEach((e) => {
        let t = document.createElement("div");
        (t.className = "part-option card_cardContainer"),
          t.setAttribute("data-part-name", "Pockets"),
          t.setAttribute("data-mesh-name", e.meshName),
          (t.style.touchAction = "pan-y"),
          (t.style.cursor = "pointer"),
          u.design.jacket.PocketsBottom === e.meshName &&
            t.classList.add("selected", "selected-bottom-pocket"),
          (t.innerHTML = `
        <div class="img-wrapper">
          <img src="${e.src}" alt="${e.label}" style="width:100%; height:auto;">
        </div>
        <p>${e.label}</p>
      `),
          t.addEventListener("click", (a) => {
            U ||
              (a.preventDefault(),
              a.stopPropagation(),
              n.querySelectorAll(".part-option").forEach((e) => {
                e.classList.remove("selected", "selected-bottom-pocket");
              }),
              t.classList.add("selected", "selected-bottom-pocket"),
              (u.design.jacket.PocketsBottom = e.meshName),
              e0("Pockets", e.meshName, "bottom"),
              W());
          }),
          n.appendChild(t);
      }),
        X("#mobilePocketsSlider");
    }
  }
  function e_(e) {
    let t = document.querySelector(`.part-option[data-mesh-name="${e}"]`);
    t &&
      t.classList.remove(
        "selected-top-pocket",
        "selected-bottom-pocket",
        "selected-pockets",
        "selected-back",
        "selected-lapel"
      );
    let a = w.Pockets[e];
    a && a.setEnabled(!1);
  }
  function e1(e) {
    let t = w.Pockets[e];
    t &&
      (t.setEnabled(!0),
      (t.renderingGroupId = 2),
      C.removeAllMeshes(),
      C.addMesh(t, BABYLON.Color3.White()));
    let a = document.querySelector(`.part-option[data-mesh-name="${e}"]`);
    if (a) {
      let s = "selected-pockets";
      e3.includes(e)
        ? (s = "selected-top-pocket")
        : eg.includes(e) && (s = "selected-bottom-pocket"),
        a.classList.remove(
          "selected-back",
          "selected-lapel",
          "selected-top-pocket",
          "selected-bottom-pocket"
        ),
        a.classList.add(s);
    }
  }
  function e0(e, t, a) {
    if (!w[e]) {
      console.warn(
        `switchPartMesh: No mesh options available for part "${e}".`
      );
      return;
    }
    if ("Pockets" !== e) {
      Object.keys(w[e]).forEach((t) => {
        let a = w[e][t];
        a && a.setEnabled(!1);
      });
      let s = w[e][t];
      s
        ? (s.setEnabled(!0),
          (s.renderingGroupId = 2),
          (I[e] = s),
          (u.design.jacket[e] = t),
          Object.keys(w[e]).forEach((t) => {
            let a = w[e][t];
            a && C.removeMesh(a);
          }),
          C.addMesh(s, BABYLON.Color3.White()))
        : console.warn(
            `switchPartMesh: No mesh found for "${t}" in part "${e}".`
          );
      let n = document.querySelector(`.part-option[data-mesh-name="${t}"]`);
      n &&
        (n.classList.remove(
          "selected-back",
          "selected-lapel",
          "selected-top-pocket",
          "selected-bottom-pocket"
        ),
        n.classList.add(ek(e, t)));
      return;
    }
    if (window.matchMedia("(max-width: 1024.9px)").matches) {
      if ("top" === a) {
        e3.forEach((e) => {
          let t = w.Pockets[e];
          t && (t.setEnabled(!1), C.removeMesh(t));
        });
        let i = w.Pockets[t];
        i
          ? (i.setEnabled(!0),
            (i.renderingGroupId = 2),
            (I.PocketsTop = i),
            (u.design.jacket.PocketsTop = t),
            e3.forEach((e) => {
              let t = w.Pockets[e];
              t && C.removeMesh(t);
            }),
            C.addMesh(i, BABYLON.Color3.White()))
          : console.warn(
              `switchPartMesh: No top pocket mesh found for "${t}".`
            );
      } else if ("bottom" === a) {
        eg.forEach((e) => {
          let t = w.Pockets[e];
          t && (t.setEnabled(!1), C.removeMesh(t));
        });
        let l = w.Pockets[t];
        l
          ? (l.setEnabled(!0),
            (l.renderingGroupId = 2),
            (I.PocketsBottom = l),
            (u.design.jacket.PocketsBottom = t),
            eg.forEach((e) => {
              let t = w.Pockets[e];
              t && C.removeMesh(t);
            }),
            C.addMesh(l, BABYLON.Color3.White()))
          : console.warn(
              `switchPartMesh: No bottom pocket mesh found for "${t}".`
            );
      } else
        console.warn(
          "switchPartMesh (mobile): No mobileSelection provided for Pockets."
        );
    } else {
      let r = e3.includes(t),
        o = eg.includes(t);
      if (r) {
        if (u.design.jacket.PocketsTop === t) return;
        e3.forEach((e) => e_(e)), e1(t), (u.design.jacket.PocketsTop = t);
      } else if (o) {
        if (u.design.jacket.PocketsBottom === t) return;
        eg.forEach((e) => e_(e)), e1(t), (u.design.jacket.PocketsBottom = t);
      }
    }
  }
  function e2(e) {}
  function eb(e) {
    let t = e.target.closest(".jacket-embroidery-choice");
    if (!t) return;
    let a = t.querySelector("p").innerText.trim();
    if ("No Embroidery" === a)
      (u.embroidery.jacket = []),
        document
          .querySelectorAll(".jacket-embroidery-choice")
          .forEach((e) => e.classList.remove("selected")),
        t.classList.add("selected");
    else {
      let s = u.embroidery.jacket.findIndex((e) => e.location === a);
      if (
        (-1 === s
          ? (u.embroidery.jacket.push({ location: a, text: "", color: null }),
            t.classList.add("selected"))
          : (u.embroidery.jacket.splice(s, 1), t.classList.remove("selected")),
        u.embroidery.jacket.length > 0)
      ) {
        let n = document.querySelector(
          ".jacket-embroidery-choice.no-embroidery"
        );
        n && n.classList.remove("selected");
      } else {
        let i = document.querySelector(
          ".jacket-embroidery-choice.no-embroidery"
        );
        i && i.classList.add("selected");
      }
    }
    u.embroidery.hasEmbroidery = u.embroidery.jacket.length > 0;
    let l = document.querySelector(".characters-inputs");
    l && "none" !== l.style.display && (ef(), (l.style.display = "block"));
  }
  function e6(e, t) {
    (e = gsap.utils.toArray(e)), (t = t || {});
    let a = gsap.timeline({
        repeat: t.repeat,
        paused: t.paused,
        defaults: { ease: "none" },
        onReverseComplete: () => a.totalTime(a.rawTime() + 100 * a.duration()),
      }),
      s = e.length,
      n = e[0].offsetLeft,
      i = [],
      l = [],
      r = [],
      o = 0,
      c = 100 * (t.speed || 1),
      d = !1 === t.snap ? (e) => e : gsap.utils.snap(t.snap || 1),
      p = () =>
        e.forEach((e, t) => {
          (l[t] = parseFloat(gsap.getProperty(e, "width", "px"))),
            (r[t] = d(
              (parseFloat(gsap.getProperty(e, "x", "px")) / l[t]) * 100 +
                gsap.getProperty(e, "xPercent")
            ));
        }),
      m = () =>
        e[s - 1].offsetLeft +
        (r[s - 1] / 100) * l[s - 1] -
        n +
        e[s - 1].offsetWidth * gsap.getProperty(e[s - 1], "scaleX") +
        (parseFloat(t.paddingRight) || 0),
      u,
      $,
      g,
      h,
      _,
      b;
    for (
      p(),
        gsap.set(e, { xPercent: (e) => r[e] }),
        gsap.set(e, { x: 0 }),
        u = m(),
        b = 0;
      b < s;
      b++
    )
      (_ = e[b]),
        ($ = (r[b] / 100) * l[b]),
        (h = (g = _.offsetLeft + $ - n) + l[b] * gsap.getProperty(_, "scaleX")),
        a
          .to(_, { xPercent: d((($ - h) / l[b]) * 100), duration: h / c }, 0)
          .fromTo(
            _,
            { xPercent: d((($ - h + u) / l[b]) * 100) },
            {
              xPercent: r[b],
              duration: ($ - h + u - $) / c,
              immediateRender: !1,
            },
            h / c
          )
          .add("label" + b, g / c),
        (i[b] = g / c);
    function v(e, t) {
      (t = t || {}), Math.abs(e - o) > s / 2 && (e += e > o ? -s : s);
      let n = gsap.utils.wrap(0, s, e),
        l = i[n];
      return (
        l > a.time() != e > o &&
          ((t.modifiers = { time: gsap.utils.wrap(0, a.duration()) }),
          (l += a.duration() * (e > o ? 1 : -1))),
        (o = n),
        (t.overwrite = !0),
        a.tweenTo(l, t)
      );
    }
    if (
      ((a.next = (e) => v(o + 1, e)),
      (a.previous = (e) => v(o - 1, e)),
      (a.current = () => o),
      (a.toIndex = (e, t) => v(e, t)),
      (a.updateIndex = () => (o = Math.round(a.progress() * e.length))),
      (a.times = i),
      (a.items = e),
      a.progress(1, !0).progress(0, !0),
      t.reversed && (a.vars.onReverseComplete(), a.reverse()),
      t.draggable && "function" == typeof Draggable)
    ) {
      let y = document.createElement("div"),
        f = gsap.utils.wrap(0, 1),
        k,
        C,
        E,
        L,
        w,
        x = () => a.progress(f(C + (E.startX - E.x) * k)),
        I = () => a.updateIndex();
      "undefined" == typeof InertiaPlugin &&
        console.warn(
          "InertiaPlugin required for momentum-based scrolling and snapping. https://greensock.com/club"
        ),
        (E = Draggable.create(y, {
          trigger: e[0].parentNode,
          type: "x",
          onPress() {
            (C = a.progress()),
              a.progress(0),
              p(),
              (k = 1 / (u = m())),
              (w = Math.pow(
                10,
                (((L = u / e.length) + "").split(".")[1] || "").length
              )),
              a.progress(C);
          },
          onDrag: x,
          onThrowUpdate: x,
          inertia: !0,
          snap(e) {
            let t = Math.round(parseFloat(e) / L) * L * w;
            return (t - (t % 1)) / w;
          },
          onRelease: I,
          onThrowComplete: () => gsap.set(y, { x: 0 }) && I(),
        })[0]);
    }
    return a;
  }
  function ev() {
    b.inputs.attached.keyboard || b.attachControl(A, !0),
      console.log("Camera controls enabled.");
  }
  function ey() {
    let e = document.querySelectorAll(
      ".cards-wrapper:not(#chooseGarmentContainer)"
    );
    e.forEach((e) => {
      let t = e.closest("#textureContainer"),
        a = window.innerWidth;
      t &&
        t.classList.contains("texture-container") &&
        (a = window.innerWidth - 40);
      let s = e.scrollWidth;
      if (s <= a - 30) {
        e.classList.contains("flickity-enabled") && Flickity.data(e).destroy();
        return;
      }
      s >= a - 100 &&
        !e.classList.contains("flickity-enabled") &&
        new Flickity(e, {
          cellAlign: "left",
          contain: !0,
          draggable: !0,
          prevNextButtons: !1,
          pageDots: !1,
        });
    });
  }
  function ef() {
    let e = document.querySelector(".characters-inputs");
    if ((e && e.remove(), 0 === u.embroidery.jacket.length)) return;
    if (!E && !(E = document.getElementById("embroideryLocationsContainer"))) {
      console.error(
        "Element with ID 'embroideryLocationsContainer' not found."
      );
      return;
    }
    let t = document.createElement("div");
    t.classList.add("characters-inputs");
    let a = '<h3 class="embroidery-text">Embroidery Text:</h3>';
    u.embroidery.jacket.forEach((e, t) => {
      a += `
      <div class="embroidery-input-group">
        <input
          class="embroidery-input"
          placeholder="${e.location} Enter your initials"
          type="text"
          id="embroideryTextInput${t}"
          maxlength="20"
          value="${e.text || ""}"
        />
      </div>
    `;
    }),
      (t.innerHTML = a),
      E.appendChild(t),
      u.embroidery.jacket.forEach((e, t) => {
        let a = document.getElementById(`embroideryTextInput${t}`);
        a &&
          a.addEventListener("input", () => {
            e.text = a.value.trim();
          });
      });
  }
  function ek(e, t) {
    switch (e) {
      case "Back":
        return "selected-back";
      case "Lapels":
        return "selected-lapel";
      case "Pockets":
        if (e3.includes(t)) return "selected-top-pocket";
        if (eg.includes(t)) return "selected-bottom-pocket";
        return "selected-pockets";
      default:
        return "selected";
    }
  }
  document.getElementById("backButton").addEventListener("click", function () {
    W(),
      ev(),
      m > 1 &&
        (5 === m ? (m = 0 === u.embroidery.jacket.length ? 3 : 4) : m--,
        ee(m),
        ev()),
      gsap.to(".canvas-container", { autoAlpha: 1 }),
      (document.querySelector("#arrow").style.display = "block");
  }),
    document
      .getElementById("nextButton")
      .addEventListener("click", function () {
        ev(), W();
        let t = null;
        if (1 === m) {
          if (u.texture) {
            let a = ec(u.texture);
            (t = { texture: a }), (u.texture = a);
          } else
            (t = { texture: "E5102-38.webp" }), (u.texture = "E5102-38.webp");
        } else if (2 === m) t = { design: u.design };
        else if (3 === m) t = { jacketEmbroidery: u.embroidery.jacket };
        else if (4 === m)
          t = { jacketEmbroideryCustomizations: u.embroidery.jacket };
        else if (5 === m) {
          (function e() {
            for (let t of [
              "pantLengthInput",
              "waistInput",
              "hipsInput",
              "thighInput",
              "kneeInput",
              "calfInput",
              "cuffInput",
              "crotchInput",
              "bodyTypeSelect",
              "frontLengthInput",
              "backLengthInput",
              "shoulderInput",
              "chestInput",
              "stomachInput",
              "steeveLengthInput",
              "bicepsInput",
              "wristInput",
            ]) {
              let a = u.measurements[t];
              if ("bodyTypeSelect" === t) {
                if (!a || "" === a.trim()) return !1;
              } else if (!a || 0 >= parseFloat(a)) return !1;
            }
            return !0;
          })()
            ? ee(++m)
            : alert("Please fill in all measurements before proceeding.");
          return;
        } else if (6 === m) {
          (function t() {
            let a =
              "Configuration Complete! Thank you for customizing your suit.\n\n";
            for (let s in ((a += `Texture: ${u.texture}
`),
            (a += "Design Selections:\n"),
            u.design.jacket))
              a += `  ${s}: ${u.design.jacket[s]}
`;
            for (let n in u.design.pants)
              a += `  ${n}: ${u.design.pants[n]}
`;
            if (
              (u.embroidery.hasEmbroidery && u.embroidery.jacket.length > 0
                ? ((a += "Embroidery Locations:\n"),
                  u.embroidery.jacket.forEach((e, t) => {
                    (a += `  Embroidery ${t + 1}:
`),
                      (a += `    Location: ${e.location}
`),
                      (a += `    Text: ${e.text || "N/A"}
`),
                      (a += `    Color: ${e.color || "N/A"}
`);
                  }))
                : (a += "No Embroidery Selected.\n"),
              u.embroidery.threadColor &&
                (a += `Thread Color (Mobile): ${u.embroidery.threadColor}
`),
              u.measurements)
            )
              for (let i in ((a += "Measurements:\n"), u.measurements))
                a += `  ${i}: ${u.measurements[i]}
`;
            alert(a),
              e.sendUserChoicesEmail(u),
              window.parent.postMessage({ type: "userChoices", data: u }, "*");
          })();
          return;
        }
        console.log("Current Step: ", m),
          console.log("Selected Choice: ", t),
          console.log("User Choices: ", u),
          m < 5 &&
            (3 === m && 0 === u.embroidery.jacket.length ? (m = 5) : m++,
            ee(m));
      }),
    document
      .getElementById("textureContainer")
      .addEventListener("click", function (e) {
        if (e.target.classList.contains("card_cardImage"));
        else if (e.target.closest(".pants-item img")) {
          document
            .querySelectorAll(".pants-item img")
            .forEach((e) => e.classList.remove("selected")),
            e.target.closest(".pants-item img").classList.add("selected");
          let t = e.target.closest(".pants-item img").alt;
          u.design.pants.Pockets = t;
        }
      }),
    fetch("textures.json")
      .then((e) => e.json())
      .then((e) => {
        p = e;
        let t = (function e(t) {
          let a = [];
          for (let s in t) {
            let n = t[s];
            if (Array.isArray(n))
              n.forEach((e) => {
                a.push(`./assets/fabric_optimized/${s}/${e}`);
              });
            else if ("object" == typeof n)
              for (let i in n)
                n[i].forEach((e) => {
                  a.push(`./assets/fabric_optimized/${s}/${i}/${e}`);
                });
          }
          return a;
        })(p);
        console.log(`Preloading ${t.length} images...`),
          (function e() {
            if (T) return;
            T = !0;
            let t = document.getElementById("textureContainer");
            t.addEventListener("click", em);
          })(),
          (function e() {
            if (N) return;
            N = !0;
            let t = document.getElementById("textureContainer");
            t.addEventListener("click", e$);
          })(),
          (function e() {
            if (S) return;
            S = !0;
            let t = document.getElementById("textureContainer");
            t.addEventListener("click", e2);
          })(),
          (function e() {
            if (B) return;
            B = !0;
            let t = document.getElementById("textureContainer");
            t.addEventListener("click", eb);
          })(),
          ey();
      })
      .catch((e) => console.error("Error loading textures.json:", e)),
    (t = !0),
    (a = !0),
    v.forEach((e) => e.setEnabled(t)),
    y.forEach((e) => e.setEnabled(a));
  let e7 = document.getElementById("arrow");
  e7
    ? e7.addEventListener("click", () => {
        !(function e(t) {
          let a = _.rotation.y + t,
            s = new BABYLON.Animation(
              "rotateAnimation",
              "rotation.y",
              60,
              BABYLON.Animation.ANIMATIONTYPE_FLOAT,
              BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
            ),
            n = [
              { frame: 0, value: _.rotation.y },
              { frame: 120, value: a },
            ];
          s.setKeys(n),
            (_.animations = []),
            _.animations.push(s),
            h.beginAnimation(_, 0, 120, !1, 1, () => {}),
            (_.rotation.y = a),
            console.log(`Model rotated to Y=${a}`);
        })(Math.PI / 2);
      })
    : console.warn('Arrow element with id "arrow" not found.'),
    document.getElementById("resetCameraButton").addEventListener("click", W),
    ey(),
    window.addEventListener("resize", ey);
}),
  console.log("sliders good");
