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
),
  document.addEventListener("DOMContentLoaded", function () {
    var t, a;
    let s = new WeakSet(),
      i = document.getElementById("textureContainer");
    i &&
      (function e(t, a, s = {}) {
        let i = Object.assign({ childList: !0, subtree: !0 }, s),
          n = new MutationObserver((e) => {
            n.disconnect(),
              e.forEach((e) => {
                if ("childList" === e.type && e.addedNodes.length) {
                  let t = Array.from(e.addedNodes);
                  a(t);
                }
              }),
              n.observe(t, i);
          });
        return n.observe(t, i), n;
      })(i, function e(t) {
        let a = [];
        t.forEach((e) => {
          e.nodeType === Node.ELEMENT_NODE &&
            (e.matches("img") && !s.has(e) && (a.push(e), s.add(e)),
            e.querySelectorAll("img").forEach((e) => {
              s.has(e) || (a.push(e), s.add(e));
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
    let n,
      o,
      r,
      l,
      c,
      d = {},
      p = 1,
      m = {
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
      u,
      g,
      h,
      _,
      y = [],
      b = [],
      k = [],
      v = {},
      f,
      E = document.getElementById("embroideryLocationsContainer"),
      C = {
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
      L = {};
    for (let w in C) L[w] = {};
    let x = {},
      A = document.getElementById("renderCanvas"),
      M = new BABYLON.Engine(A, !0, { preserveDrawingBuffer: !0, stencil: !0 }),
      I = document.getElementById("tooltip"),
      P = !1,
      T = !1,
      N = !1,
      B = !1,
      S = 0,
      j = 0,
      O = "front",
      z = () => {
        ((g = new BABYLON.Scene(M)).clearColor = new BABYLON.Color3(
          0.937,
          0.937,
          0.937
        )),
          (_ = new BABYLON.ArcRotateCamera(
            "camera",
            0,
            Math.PI / 2,
            5,
            new BABYLON.Vector3(0, 1, 0),
            g
          )).attachControl(A, !0),
          M.setHardwareScalingLevel(1 / (window.devicePixelRatio || 1));
        let e = new BABYLON.FxaaPostProcess(
          "fxaa",
          1,
          null,
          BABYLON.Texture.BILINEAR_SAMPLINGMODE,
          M
        );
        g.postProcesses.push(e),
          _.inputs.attached.touch &&
            ((_.inputs.attached.touch.pinchPrecision = 30),
            (_.inputs.attached.touch.touchAngularSensibility = 1e4)),
          (_.panningSensibility = 0),
          (_.lowerRadiusLimit = 2.5),
          (_.upperRadiusLimit = 20),
          (_.wheelPrecision = 100),
          new BABYLON.HemisphericLight(
            "light",
            new BABYLON.Vector3(0, 1, 0),
            g
          );
        let t = new BABYLON.DirectionalLight(
          "dirLight",
          new BABYLON.Vector3(-1, -2, -1),
          g
        );
        (t.position = new BABYLON.Vector3(20, 40, 20)),
          (g.useRightHandedSystem = !0),
          (u = new BABYLON.StandardMaterial("material", g)),
          (h = new BABYLON.TransformNode("parent", g)),
          (f = new BABYLON.HighlightLayer("hl1", g));
        let a = 0,
          s = () => {
            4 == ++a &&
              ((h.rotation.y = Math.PI / 2),
              (j = S = h.rotation.y),
              (O = "front"),
              es("./assets/fabric_optimized/All Fabrics/A52024006- $850.webp"),
              (function e() {
                h.computeWorldMatrix(!0);
                let t = h.getChildMeshes(),
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
                    i = t.boundingBox.minimumWorld,
                    n = t.boundingBox.maximumWorld;
                  (a = BABYLON.Vector3.Minimize(a, i)),
                    (s = BABYLON.Vector3.Maximize(s, n));
                });
                let i = a.add(s).scale(0.5);
                (h.position = h.position.subtract(i)),
                  _.setTarget(BABYLON.Vector3.Zero());
                let n = s.subtract(a).length();
                (_.radius = 1.5 * n),
                  (o = _.radius),
                  (r = _.target.clone()),
                  (l = _.alpha),
                  (c = _.beta),
                  (_.upperRadiusLimit = o);
              })(),
              (function e() {
                let t = F;
                if (
                  ((F = function (e) {
                    console.log(
                      "Camera zoom disabled for default jacket parts."
                    );
                  }),
                  m.design.jacket.Back ||
                    ((m.design.jacket.Back = C.Back[0]), e$("Back", C.Back[0])),
                  m.design.jacket.Lapels ||
                    ((m.design.jacket.Lapels = C.Lapels[0]),
                    e$("Lapels", C.Lapels[0])),
                  window.matchMedia("(max-width: 1024.9px)").matches)
                )
                  m.design.jacket.PocketsTop ||
                    ((m.design.jacket.PocketsTop = el[0]),
                    e$("Pockets", el[0], "top")),
                    m.design.jacket.PocketsBottom ||
                      ((m.design.jacket.PocketsBottom = ec[0]),
                      e$("Pockets", ec[0], "bottom"));
                else {
                  if (!m.design.jacket.PocketsTop) {
                    m.design.jacket.PocketsTop = el[0];
                    let a = L.Pockets[el[0]];
                    a &&
                      (a.setEnabled(!0),
                      (a.renderingGroupId = 2),
                      f.addMesh(a, BABYLON.Color3.White()));
                  }
                  if (!m.design.jacket.PocketsBottom) {
                    m.design.jacket.PocketsBottom = ec[0];
                    let s = L.Pockets[ec[0]];
                    s &&
                      (s.setEnabled(!0),
                      (s.renderingGroupId = 2),
                      f.addMesh(s, BABYLON.Color3.White()));
                  }
                }
                F = t;
              })(),
              J(p));
          };
        function i(e) {
          return e.startsWith("4on2_Back")
            ? "Back"
            : e.startsWith("4on2_Lapels")
            ? "Lapels"
            : e.startsWith("4on2_pocket")
            ? "Pockets"
            : null;
        }
        BABYLON.SceneLoader.ImportMesh("", "./", "jacket.glb", g, (e) => {
          e.forEach((e) => {
            (e.material = u),
              (e.parent = h),
              y.push(e),
              (e.renderingGroupId = 2),
              (v[e.name] = e);
            let t = i(e.name);
            t && ((x[t] = e), (L[t][e.name] = e)),
              (e.actionManager = new BABYLON.ActionManager(g)),
              e.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(
                  BABYLON.ActionManager.OnPointerOverTrigger,
                  function (t) {
                    let a = i(e.name);
                    if (a && x[a]) {
                      let s = x[a];
                      f.addMesh(s, BABYLON.Color3.White()),
                        (A.style.cursor = "pointer"),
                        (I.style.display = "block"),
                        (I.innerHTML = a);
                    }
                  }
                )
              ),
              e.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(
                  BABYLON.ActionManager.OnPointerOutTrigger,
                  function (t) {
                    let a = i(e.name);
                    if (a && x[a]) {
                      let s = x[a];
                      f.removeMesh(s),
                        (A.style.cursor = "default"),
                        (I.style.display = "none");
                    }
                  }
                )
              ),
              e.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(
                  BABYLON.ActionManager.OnPickDownTrigger,
                  function (a) {
                    var s, i;
                    (s = t), (i = e.name), e$(s, i);
                  }
                )
              );
          }),
            s();
        }),
          BABYLON.SceneLoader.ImportMesh("", "./", "pants.glb", g, (e) => {
            e.forEach((e) => {
              (e.renderingGroupId = 2),
                (e.material = u),
                (e.parent = h),
                b.push(e),
                (v[e.name] = e);
            }),
              s();
          });
        let d = new BABYLON.PBRMaterial("mannequinMaterial", g);
        (d.albedoColor = new BABYLON.Color3(0.08, 0.08, 0.08)),
          (d.metallic = 0),
          (d.roughness = 1);
        let E = new BABYLON.PBRMaterial("shoeMaterial", g);
        for (let w in ((E.albedoColor = new BABYLON.Color3(0, 0, 0)),
        (E.metallic = 0.5),
        (E.roughness = 0.5),
        BABYLON.SceneLoader.ImportMesh("", "./", "Mannequin.glb", g, (e) => {
          (n = new BABYLON.TransformNode("mannequinRoot", g)),
            e.forEach((e) => {
              (e.renderingGroupId = 1),
                console.log("Mesh Name:", e.name),
                (e.parent = n),
                k.push(e),
                (e.actionManager = null),
                (e.useVertexColors = !1),
                e.material && e.material.dispose(),
                (e.material = null),
                e.name.includes("unamed_unamedmesh_1") ||
                e.name.includes("Posed__mask_")
                  ? (e.material = d)
                  : ("shoe_L" === e.name || "shoe_R" === e.name) &&
                    (e.material = E);
            }),
            (n.parent = h),
            (n.scaling = new BABYLON.Vector3(0.01, 0.01, 0.01)),
            (n.position = new BABYLON.Vector3(0, 0, 0)),
            s(),
            $
              ? ($.setEnabled(!0),
                console.log("Shirt already loaded. Ensured it is visible."))
              : BABYLON.SceneLoader.ImportMesh(
                  "",
                  "./",
                  "shirt.glb",
                  g,
                  (e) => {
                    let t = new BABYLON.StandardMaterial("shirtMaterial", g);
                    (t.diffuseColor = new BABYLON.Color3(1, 1, 1)),
                      (t.backFaceCulling = !1),
                      ($ = new BABYLON.TransformNode("shirtRoot", g));
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
                      ($.parent = n),
                      ($.scaling = new BABYLON.Vector3(1, 1, 0.9)),
                      ($.position = new BABYLON.Vector3(0, 0, 0)),
                      (j = S = $.rotation.y),
                      (O = "front");
                    let i = [
                      "1_pleat",
                      "2_Button",
                      "Round_Cuffs",
                      "Front_1",
                      "Sleeves",
                    ];
                    a.forEach((e) => {
                      i.includes(e.name)
                        ? (e.setEnabled(!0),
                          f.addMesh(e, BABYLON.Color3.White()))
                        : e.setEnabled(!1);
                    }),
                      s();
                  }
                );
        }),
        C))
          C[w].forEach((e) => {
            if (L[w][e]) return;
            let t = e + ".glb";
            BABYLON.SceneLoader.ImportMesh(
              "",
              "./jacket-seperate-pieces/",
              t,
              g,
              (t) => {
                t.forEach((t) => {
                  (t.material = u),
                    (t.parent = h),
                    (L[w][e] = t),
                    (v[t.name] = t),
                    t.setEnabled(!1),
                    (t.actionManager = new BABYLON.ActionManager(g)),
                    t.actionManager.registerAction(
                      new BABYLON.ExecuteCodeAction(
                        BABYLON.ActionManager.OnPickDownTrigger,
                        function (e) {
                          var a, s;
                          (a = w), (s = t.name), e$(a, s);
                        }
                      )
                    );
                });
              }
            );
          });
        return (
          (g.onPointerDown = function (e, t) {
            t.hit ||
              (f.removeAllMeshes(),
              document
                .querySelectorAll(".part-item")
                .forEach((e) => e.classList.remove("selected")));
          }),
          (g.onPointerMove = function (e, t) {
            "block" === I.style.display &&
              ((I.style.left = e.clientX + 10 + "px"),
              (I.style.top = e.clientY + 10 + "px"),
              (I.style.zIndex = 999));
          }),
          g.registerBeforeRender(() => {
            var e;
            let t = (e = _.alpha) % (2 * Math.PI);
            t < Math.PI / 4 || t > (7 * Math.PI) / 4
              ? "front" !== O &&
                ((O = "front"), console.log("Orientation changed to Front"))
              : t > (3 * Math.PI) / 4 &&
                t < (5 * Math.PI) / 4 &&
                "back" !== O &&
                ((O = "back"), console.log("Orientation changed to Back"));
          }),
          g
        );
      };
    function H() {
      let e = document.querySelectorAll(".part-option"),
        t = document.querySelectorAll(".part-item");
      e.forEach((e) => {
        e.addEventListener("mouseenter", function () {
          let e = this.getAttribute("data-part-name"),
            t = this.getAttribute("data-mesh-name"),
            a = L[e][t];
          a && f.addMesh(a, BABYLON.Color3.White());
        }),
          e.addEventListener("mouseleave", function () {
            let e = this.getAttribute("data-part-name"),
              t = this.getAttribute("data-mesh-name"),
              a = L[e][t];
            a && f.removeMesh(a);
          });
      }),
        t.forEach((e) => {
          e.addEventListener("mouseenter", function () {
            let e = this.getAttribute("data-part"),
              t = x[e];
            t && f.addMesh(t, BABYLON.Color3.White());
          }),
            e.addEventListener("mouseleave", function () {
              let e = this.getAttribute("data-part"),
                t = x[e];
              t && f.removeMesh(t);
            });
        });
    }
    function F(e) {
      if (!e) {
        console.error("zoomToMesh called with undefined mesh");
        return;
      }
      console.log(`Zooming to mesh: ${e.name}`);
      let t = e.getBoundingInfo(),
        a = t.boundingBox.centerWorld,
        s = 1.5 * t.boundingSphere.radiusWorld;
      g.stopAnimation(_);
      let i = new BABYLON.Animation(
          "cameraRadiusAnim",
          "radius",
          60,
          BABYLON.Animation.ANIMATIONTYPE_FLOAT,
          BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
        ),
        n = [
          { frame: 0, value: _.radius },
          { frame: 240, value: s },
        ];
      i.setKeys(n),
        i.setEasingFunction(new BABYLON.CubicEase()),
        i
          .getEasingFunction()
          .setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEOUT);
      let o = new BABYLON.Animation(
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
        l = new BABYLON.Animation(
          "cameraTargetZAnim",
          "target.z",
          60,
          BABYLON.Animation.ANIMATIONTYPE_FLOAT,
          BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
        ),
        c = [
          { frame: 0, value: _.target.x },
          { frame: 240, value: a.x },
        ],
        d = [
          { frame: 0, value: _.target.y },
          { frame: 240, value: a.y },
        ],
        p = [
          { frame: 0, value: _.target.z },
          { frame: 240, value: a.z },
        ];
      o.setKeys(c), r.setKeys(d), l.setKeys(p);
      let m = new BABYLON.CubicEase();
      m.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEOUT),
        o.setEasingFunction(m),
        r.setEasingFunction(m),
        l.setEasingFunction(m),
        (_.animations = []),
        _.animations.push(i, o, r, l),
        g.beginAnimation(_, 0, 240, !1, 1, () => {
          console.log(`Camera smoothly zoomed to mesh: ${e.name}`);
        });
    }
    function D(e, t) {
      e$(e, t);
    }
    function q(e) {
      return "Back" === e
        ? `
    <div class="card_cardContainer" data-test-id="${e}" tabindex="0">
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
    <div class="card_cardContainer" data-test-id="${e}" tabindex="0">
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
    <div class="card_cardContainer" data-test-id="${e}" tabindex="0">
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
    <div class="card_cardContainer" data-test-id="${e}" tabindex="0">
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
    <div class="card_cardContainer" data-test-id="${e}" tabindex="0">
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
  <div class="card_cardContainer" data-test-id="${e}" tabindex="0">
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
    function R() {
      if (void 0 === o || void 0 === r || void 0 === l || void 0 === c) {
        console.error("Initial camera parameters are not set.");
        return;
      }
      let e = (l - (h.rotation.y - S)) % (2 * Math.PI);
      BABYLON.Animation.CreateAndStartAnimation(
        "cameraRadiusReset",
        _,
        "radius",
        60,
        120,
        _.radius,
        o,
        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
      ),
        BABYLON.Animation.CreateAndStartAnimation(
          "cameraTargetReset",
          _,
          "target",
          60,
          120,
          _.target,
          r,
          BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
        ),
        BABYLON.Animation.CreateAndStartAnimation(
          "cameraAlphaReset",
          _,
          "alpha",
          60,
          120,
          _.alpha,
          e,
          BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
        ),
        BABYLON.Animation.CreateAndStartAnimation(
          "cameraBetaReset",
          _,
          "beta",
          60,
          120,
          _.beta,
          c,
          BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
        ),
        console.log(
          "Camera reset to initial relative view (adjusted for model rotation)."
        );
    }
    function W() {
      let e = document.querySelector("#sidePanel .back-button");
      if (!e) {
        (e = document.createElement("button")).classList.add("back-button"),
          (e.style.marginBottom = "20px"),
          (e.innerHTML = `
      Garment 
    `),
          e.addEventListener("click", () => {
            R(), J((p = 2)), e.remove();
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
    function V() {
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
            X();
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
            m.design.jacket.Lapels === e.meshName &&
              t.classList.add("selected");
          let a = document.createElement("div");
          a.classList.add("img-wrapper"), (a.style.touchAction = "pan-y");
          let i = document.createElement("img");
          (i.src = e.src),
            (i.alt = e.label),
            (i.style.touchAction = "pan-y"),
            (i.style.width = "100%"),
            (i.style.height = "auto"),
            a.appendChild(i);
          let n = document.createElement("p");
          (n.textContent = e.label),
            (n.style.touchAction = "pan-y"),
            t.appendChild(a),
            t.appendChild(n),
            t.addEventListener("click", () => {
              console.log(
                "[showMobileLapelsOptions] Chosen lapels option:",
                e.label
              ),
                s.querySelectorAll(".part-option").forEach((e) => {
                  e.classList.remove("selected");
                }),
                t.classList.add("selected"),
                (m.design.jacket.Lapels = e.meshName),
                e$("Lapels", e.meshName),
                R();
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
            X();
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
            m.design.jacket.Back === e.meshName && t.classList.add("selected");
          let s = document.createElement("div");
          s.classList.add("img-wrapper"), (s.style.touchAction = "pan-y");
          let i = document.createElement("img");
          (i.src = e.src),
            (i.alt = e.label),
            (i.style.touchAction = "pan-y"),
            (i.style.width = "100%"),
            (i.style.height = "auto"),
            s.appendChild(i);
          let n = document.createElement("p");
          (n.textContent = e.label),
            (n.style.touchAction = "pan-y"),
            t.appendChild(s),
            t.appendChild(n),
            t.addEventListener("click", () => {
              console.log(
                "[showMobileBackOptions] Chosen back option:",
                e.label
              ),
                a.querySelectorAll(".part-option").forEach((e) => {
                  e.classList.remove("selected");
                }),
                t.classList.add("selected"),
                (m.design.jacket.Back = e.meshName),
                e$("Back", e.meshName);
            }),
            a.appendChild(t);
        }),
        e.appendChild(a),
        Z(".part-option.card_cardContainer ");
    }
    function Z(e) {
      let t = document.querySelector(e);
      if (!t) {
        console.error(`Slider container "${e}" not found.`);
        return;
      }
      t.classList.contains("flickity-enabled") ||
        new Flickity(t, {
          cellAlign: "left",
          contain: !0,
          draggable: !0,
          prevNextButtons: !1,
          pageDots: !1,
        });
    }
    function U() {
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
            X();
        }),
        e.appendChild(t);
      let a = document.createElement("div");
      a.classList.add("top-bottom-pockets-wrapper");
      let s = document.createElement("button");
      (s.textContent = "Top Pockets"),
        s.classList.add("top-bottom-btns"),
        s.addEventListener("click", () => {
          console.log("Top pockets button clicked"), ed("top");
        });
      let i = document.createElement("button");
      (i.textContent = "Bottom Pockets"),
        i.classList.add("top-bottom-btns"),
        i.addEventListener("click", () => {
          console.log("Bottom pockets button clicked"), ed("bottom");
        }),
        a.appendChild(s),
        a.appendChild(i),
        e.appendChild(a);
      let n = document.getElementById("mobilePocketsContainer");
      n
        ? (n.innerHTML = "")
        : (((n = document.createElement("div")).id = "mobilePocketsContainer"),
          e.appendChild(n)),
        ed("top");
    }
    function X() {
      let e = document.getElementById("textureContainer");
      if (
        ((e.innerHTML = ""),
        W(),
        window.matchMedia("(max-width: 1024.9px)").matches)
      ) {
        let t = "";
        ["Back", "Lapels", "Pockets"].forEach((e) => {
          t += q(e);
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
              "Back" === t
                ? G()
                : "Lapels" === t
                ? V()
                : "Pockets" === t && U();
          });
        });
      } else {
        let s = "";
        ["Back", "Lapels", "Pockets"].forEach((e) => {
          s += q(e);
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
        let i = e.querySelectorAll(".design-options .card_cardContainer");
        i.forEach((e) => {
          e.addEventListener("click", () => {
            let t = e.getAttribute("data-test-id");
            console.log(`Clicked on jacket part: ${t}`),
              "Back" === t
                ? G()
                : "Lapels" === t
                ? V()
                : "Pockets" === t && U();
          });
        });
      }
    }
    function Y() {
      let e = document.getElementById("textureContainer");
      if (
        ((e.innerHTML = ""),
        W(),
        window.matchMedia("(max-width: 1024.9px)").matches)
      ) {
        let t = "";
        ["Cut", "Pleat"].forEach((e) => {
          t += q(e);
        }),
          (e.innerHTML += `
      <div class="design-options">${t}</div>
    `);
        let a = document.querySelectorAll(
          ".design-options .card_cardContainer"
        );
        a.forEach((e) => {
          e.addEventListener("click", () => {
            let t = e.getAttribute("data-test-id");
            console.log("Clicked Pants Part (mobile):", t),
              "Cut" === t
                ? ei()
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
                          Y();
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
                        let i = document.createElement("img");
                        (i.src = e.src),
                          (i.alt = e.label),
                          (i.style.touchAction = "pan-y"),
                          (i.style.width = "100%"),
                          (i.style.height = "auto"),
                          a.appendChild(i);
                        let n = document.createElement("p");
                        (n.textContent = e.label),
                          (n.style.touchAction = "pan-y"),
                          t.appendChild(a),
                          t.appendChild(n),
                          t.addEventListener("click", () => {
                            console.log(
                              "[showMobilePleatOptions] Chosen pleat:",
                              e.label
                            ),
                              s
                                .querySelectorAll(".part-option")
                                .forEach((e) => {
                                  e.classList.remove("selected");
                                }),
                              t.classList.add("selected"),
                              (m.design.pants.pleat = e.label),
                              e$("Pleat", e.label);
                          }),
                          s.appendChild(t);
                      }),
                      t.appendChild(s),
                      Z("#mobilePleatSlider");
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
          H();
    }
    function J(e) {
      let t = document.getElementById("sidePanel");
      if (window.matchMedia("(max-width: 1024.9px)").matches) {
        let a = t.querySelector(".widescreen-step");
        a
          ? gsap.to(a, {
              y: window.innerHeight,
              duration: 0.5,
              ease: "power2.in",
              onComplete() {
                K(e);
                let a = t.querySelector(".widescreen-step");
                a &&
                  (gsap.set(a, { y: -window.innerHeight }),
                  gsap.to(a, { y: 0, duration: 0.8, ease: "power2.out" }));
              },
            })
          : K(e);
      } else {
        let s = t.querySelector(".widescreen-step");
        s
          ? gsap.to(s, {
              x: window.innerWidth,
              duration: 0.5,
              ease: "power2.in",
              onComplete() {
                K(e);
                let a = t.querySelector(".widescreen-step");
                a &&
                  (gsap.set(a, { x: window.innerWidth }),
                  gsap.to(a, { x: 0, duration: 0.8, ease: "power2.out" }));
              },
            })
          : K(e);
      }
    }
    function K(e) {
      !(function e(t) {
        let a = window.matchMedia("(max-width: 1024.9px)").matches;
        if (!a) return;
        let s = document.getElementById("textureContainer");
        if (!s) {
          console.error("Element with ID 'textureContainer' not found.");
          return;
        }
        s.classList.remove(
          ...["step-1", "step-2", "step-3", "step-4", "step-5"]
        ),
          t >= 1 && t <= 5
            ? (s.classList.add(`step-${t}`),
              console.log(`Added class: step-${t}`))
            : console.warn(
                `Invalid step number: ${t}. Must be between 1 and 5.`
              );
      })(e);
      let t = document.getElementById("stepTitle"),
        a = document.getElementById("textureContainer"),
        s = document.getElementById("batchSelector"),
        i = document.querySelector("#sidePanel .back-button");
      switch (
        (i &&
          (i.remove(),
          console.log("[initializeStep] Existing back button removed.")),
        (t.innerHTML = ""),
        p)
      ) {
        case 1:
          (t.innerHTML = `
        <p>Here we’ve curated a selection of fabrics that best suits you.</p>
        <p>Please choose your preferred fabric group from the options below to proceed to the next step.</p>
      `),
            (s.style.display = "none"),
            eo(),
            et(),
            (a.style.display = "flex");
          break;
        case 2:
          if (
            ((t.innerHTML = `
          <p>Great choice!</br>Now, let’s move on to designing your garment.</p>
        `),
            (s.style.display = "none"),
            (a.style.display = "flex"),
            a.classList.add("texture-container"),
            window.matchMedia("(max-width: 1024.9px)").matches)
          ) {
            (t.innerHTML += `
            <p>Please choose which garment to design first:</p>
          `),
              (a.innerHTML = `
            <div id="chooseGarmentContainer" style="display: flex; gap: 20px;">
              <div class="card_cardContainer" data-test-id="chooseJacket" tabindex="0">
                <div class="card_cardImageContainer">
                  <img loading="lazy" class="card_cardImage"  src="./assets/jacketandpants/jacket.png" alt="Jacket">
                  <div class="card_itemAmountContainer" data-test-id="item-amount">Jacket</div>
                </div>
                <div class="card_cardDetails">
                  <p class="card_cardText" data-test-id="card-text">Design Jacket</p>
                </div>
              </div>
              <div class="card_cardContainer" data-test-id="choosePants" tabindex="0">
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
              o = document.querySelector('[data-test-id="choosePants"]');
            n &&
              n.addEventListener("click", () => {
                X();
              }),
              o &&
                o.addEventListener("click", () => {
                  Y();
                });
          } else {
            var r;
            (t.innerHTML += `
            <p>Choose from the available options for each key design feature. Let’s start creating your perfect look!</p>
          `),
              (a.innerHTML = `
            <button class="accordion" data-category="jacket">
              Jacket <span class="sign-acc">+</span>
            </button>
            <div class="panel" style="max-height: 0px;">
              ${
                ((r = [
                  { partName: "Back", options: C.Back },
                  { partName: "Lapels", options: C.Lapels },
                  { partName: "Pockets", options: C.Pockets },
                ]),
                r
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
              H();
          }
          break;
        case 3:
          t.innerHTML = `
        <p>Now it’s time to add a personal touch to your garment!</p>
        <p>You can customize your suit with embroidery. Please select your preferred locations for the embroidery or choose "No Embroidery" to skip.</p>
      `;
          let l = window.matchMedia("(max-width: 1024.9px)").matches,
            c = `
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
            (l &&
              (c += `
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
            (c += "</div>"),
            l &&
              (c += `
          <div class="mobile-embroidery-buttons">
            <button id="locationButton" class="embroidery-button">Location</button>
            <button id="colorButton" class="embroidery-button">Color</button>
            <button id="charactersButton" class="embroidery-button">Characters</button>
          </div>
        `),
            (a.innerHTML = c),
            m.embroidery.jacket.length > 0)
          )
            m.embroidery.jacket.forEach((e) => {
              let t = Array.from(
                document.querySelectorAll(".jacket-embroidery-choice")
              ).find(
                (t) => t.querySelector("p").innerText.trim() === e.location
              );
              t && t.classList.add("selected");
            });
          else {
            let d = document.querySelector(
              ".jacket-embroidery-choice.no-embroidery"
            );
            d && d.classList.add("selected");
          }
          window.matchMedia("(max-width: 1024.9px)").matches &&
            (function e() {
              let t = document.getElementById("locationButton"),
                a = document.getElementById("colorButton"),
                s = document.getElementById("charactersButton"),
                i = document.getElementById("embroideryChoices"),
                n = [t, a, s];
              function o(e) {
                n.forEach((e) => e?.classList.remove("active")),
                  e.classList.add("active");
              }
              t &&
                t.addEventListener("click", () => {
                  o(t);
                  let e = document.getElementById("colorChoices"),
                    a = document.querySelector(".characters-inputs");
                  i && i.classList.remove("hidden"),
                    e && e.classList.add("hidden"),
                    a && (a.style.display = "none"),
                    event.stopPropagation();
                }),
                a &&
                  a.addEventListener("click", () => {
                    o(a);
                    let e = document.getElementById("colorChoices"),
                      t = document.querySelector(".characters-inputs");
                    i && i.classList.add("hidden"),
                      e && e.classList.remove("hidden"),
                      t && (t.style.display = "none"),
                      event.stopPropagation();
                  }),
                s &&
                  s.addEventListener("click", () => {
                    o(s), i && i.classList.add("hidden");
                    let e = document.getElementById("colorChoices");
                    e && e.classList.add("hidden");
                    let t = m.embroidery.jacket;
                    if (0 === t.length) {
                      alert("No embroidery locations chosen.");
                      return;
                    }
                    e0();
                    let a = document.querySelector(".characters-inputs");
                    a && (a.style.display = "block"), event.stopPropagation();
                  });
              let r = document.getElementById("colorChoices");
              if (r) {
                let l = r.querySelectorAll(".color-option");
                l.forEach((e) => {
                  e.addEventListener("click", (t) => {
                    l.forEach((e) => e.classList.remove("selected")),
                      e.classList.add("selected");
                    let a = e.getAttribute("data-color");
                    (m.embroidery.threadColor = a),
                      m.embroidery.jacket &&
                        m.embroidery.jacket.length > 0 &&
                        m.embroidery.jacket.forEach((e) => {
                          e.color = a;
                        }),
                      console.log(
                        "Mobile embroidery thread color selected:",
                        a
                      ),
                      t.stopPropagation();
                  });
                });
              }
              window.matchMedia("(max-width: 1024.9px)").matches ||
                document.addEventListener("click", (e) => {
                  let n = document.getElementById(
                    "embroideryLocationsContainer"
                  );
                  if (!n) {
                    console.error(
                      "Element with ID 'embroideryLocationsContainer' not found."
                    );
                    return;
                  }
                  let o =
                    n.contains(e.target) ||
                    (t && t.contains(e.target)) ||
                    (a && a.contains(e.target)) ||
                    (s && s.contains(e.target));
                  if (!o) {
                    i.classList.add("hidden");
                    let r = document.getElementById("colorChoices");
                    r && r.classList.add("hidden");
                  }
                });
            })(),
            eo(!1),
            b.forEach((e) => e.setEnabled(!0)),
            f.removeAllMeshes();
          break;
        case 4:
          if (
            window.matchMedia("(max-width: 1024.9px)").matches ||
            !m.embroidery.jacket ||
            0 === m.embroidery.jacket.length
          ) {
            J((p = 5));
            return;
          }
          (t.innerHTML = `
        <p>Customize your jacket embroidery!</p>
        <p>Please enter your desired text and select your preferred color for each embroidery location.</p>
      `),
            (s.style.display = "none"),
            (a.style.display = "flex"),
            (a.style.padding = "0 20px"),
            (a.style.justifyContent = "start"),
            (a.innerHTML = `
        <h2 class="text-step3 step4 embroidery">Jacket Embroidery Customization</h2>
        <div id="embroideryCustomizationContainer"></div>
      `);
          let $ = document.getElementById("embroideryCustomizationContainer");
          m.embroidery.jacket.forEach((e, t) => {
            $.innerHTML += `
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
        m.embroidery.threadColor === e ? "selected" : ""
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
            m.embroidery.jacket.forEach((e, t) => {
              let a = document.getElementById(
                `embroidery-thread-colors-picker-jacket-${t}`
              );
              if (a) {
                let s = a.querySelectorAll(".color-circle");
                s.forEach((a) => {
                  a.addEventListener("click", () => {
                    s.forEach((e) => e.classList.remove("selected")),
                      a.classList.add("selected"),
                      (m.embroidery.jacket[t].color =
                        a.getAttribute("data-color"));
                  }),
                    e.color &&
                      e.color === a.getAttribute("data-color") &&
                      a.classList.add("selected");
                });
              }
              let i = document.getElementById(`embroideryTextInput${t}`);
              i &&
                i.addEventListener("input", () => {
                  m.embroidery.jacket[t].text = i.value.trim();
                });
              let n = document.querySelector(
                `.remove-embroidery-button[data-index="${t}"]`
              );
              n &&
                n.addEventListener("click", () => {
                  m.embroidery.jacket.splice(t, 1), K(4);
                });
            });
          break;
        case 5:
          (document.querySelector(
            "body > main > div > div.canvas-container"
          ).style.display = "none"),
            (t.innerHTML = `
        <p>Please provide your measurements for the pants.</p>
        <p>Enter your measurements in the fields provided. If you need assistance, refer to the diagram.</p>
      `),
            (s.style.display = "none"),
            (a.style.display = "flex"),
            (a.style.padding = "0 20px"),
            (a.style.justifyContent = "center"),
            (a.innerHTML = `
        <div id="pantsMeasurementWrapper">
          <img loading="lazy" id="pantsMeasurementImage" src="assets/pants/pants.png" alt="Pants Diagram">
          ${[
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
            .join("")}
        </div>
      `);
          let u = document.getElementById("pantsMeasurementWrapper");
          (u.style.position = "relative"),
            (u.style.display = "inline-block"),
            [
              "Waist",
              "Crotch Depth",
              "Seat",
              "Knee",
              "Inseam",
              "Hips",
              "Thigh",
              "Outseam",
              "Ankle",
            ].forEach((e) => {
              let t = document.getElementById(`${e}Input`);
              t.addEventListener("input", () => {
                m.measurements[e] = t.value;
              });
            }),
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
          let i = document.createElement("div");
          i.classList.add(`step-${t}-ws`, "widescreen-step"),
            Array.from(a.children).forEach((e) => {
              e.classList.contains("next-back-btns") || i.appendChild(e);
            }),
            a.insertBefore(i, a.firstChild);
        } else {
          let n = document.createElement("div");
          for (
            n.classList.add(`step-${t}-ws`, "widescreen-step");
            a.firstChild;

          )
            n.appendChild(a.firstChild);
          a.appendChild(n);
        }
      })(e);
    }
    function Q(e, t, a, s) {
      let i = document.getElementById("textureContainer");
      i.innerHTML = "";
      let n = document.createElement("button");
      (n.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="9" fill="#EFEFEF"></circle>
        <path d="M4.64645 8.64645C4.45118 8.84171 4.45118 9.15829 4.64645 9.35355L7.82843 12.5355C8.02369 12.7308 8.34027 12.7308 8.53553 12.5355C8.7308 12.3403 8.7308 12.0237 8.53553 11.8284L5.70711 9L8.53553 6.17157C8.7308 5.97631 8.7308 5.65973 8.53553 5.46447C8.34027 5.2692 8.02369 5.2692 7.82843 5.46447L4.64645 8.64645ZM13 8.5L5 8.5L5 9.5L13 9.5L13 8.5Z" fill="black"></path>
      </svg>`),
        n.classList.add("back-to-cat"),
        n.addEventListener("click", () => {
          t ? ee(e) : et();
        }),
        i.appendChild(n);
      let o = document.createElement("div");
      (o.className = "cards-wrapper"),
        s.forEach((t, s) => {
          let i = (function e(t, a, s, i) {
            let n = i.replace("/fabric_optimized/", "/fabric_optimized_2048/"),
              o = document.createElement("div");
            (o.className = "card_cardContainer card_small"),
              (o.dataset.testId = s),
              (o.tabIndex = s + 1),
              o.setAttribute("data-original-url", i + a);
            let r = document.createElement("div");
            r.className = "card_cardImageContainer";
            let l = document.createElement("img");
            (l.className = "card_cardImage"),
              (l.loading = "lazy"),
              (l.src = n + a),
              (l.alt = a),
              r.appendChild(l);
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
              (p.textContent = ea(a));
            let $ = document.createElement("div");
            return (
              ($.className = "card_cardSubText"),
              ($.dataset.testId = "card-subtext"),
              ($.textContent = (function e(t) {
                let a = t.replace(/\.[^.]+$/, ""),
                  s = a.match(/-\s*(\$[\d.]+)/);
                return s ? s[1] : "$0.00";
              })(a)),
              d.appendChild(p),
              d.appendChild($),
              o.appendChild(r),
              o.appendChild(d),
              o.addEventListener("click", (e) => {
                e.stopPropagation(),
                  (function e(t, a, s, i) {
                    console.log("Texture clicked:", a),
                      document
                        .querySelectorAll(".card_small.selected")
                        .forEach((e) => {
                          e.classList.remove("selected");
                        }),
                      s.classList.add("selected");
                    let n = s.getAttribute("data-original-url") || i + a;
                    es(n),
                      (m.texture = a),
                      console.log("userChoices.texture updated to:", m.texture);
                  })(t, a, o, i);
              }),
              o
            );
          })(e, t, s, a);
          o.appendChild(i);
        }),
        i.appendChild(o),
        window.matchMedia("(max-width: 1024.9px)").matches && ey();
    }
    function ee(e) {
      let t = document.getElementById("textureContainer");
      t.innerHTML = "";
      let a = document.createElement("button");
      (a.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="9" fill="#EFEFEF"></circle>
        <path d="M4.64645 8.64645C4.45118 8.84171 4.45118 9.15829 4.64645 9.35355L7.82843 12.5355C8.02369 12.7308 8.34027 12.7308 8.53553 12.5355C8.7308 12.3403 8.7308 12.0237 8.53553 11.8284L5.70711 9L8.53553 6.17157C8.7308 5.97631 8.7308 5.65973 8.53553 5.46447C8.34027 5.2692 8.02369 5.2692 7.82843 5.46447L4.64645 8.64645ZM13 8.5L5 8.5L5 9.5L13 9.5L13 8.5Z" fill="black"></path>
      </svg>`),
        a.classList.add("back-to-cat"),
        a.addEventListener("click", () => {
          et();
        }),
        t.appendChild(a);
      let s = d[e];
      if (Array.isArray(s))
        Q(e, null, "./assets/fabric_optimized/All Fabrics/", s);
      else {
        let i;
        if (
          window.matchMedia("(max-width: 1024.9px)").matches &&
          ("Colour" === e || "Design" === e)
        ) {
          let n = document.createElement("div");
          n.classList.add("cards-wrapper"),
            (i = document.createElement("div")).classList.add("cards-wrapper"),
            n.appendChild(i),
            t.appendChild(n);
        } else
          ((i = document.createElement("div")).className = "cards-wrapper"),
            t.appendChild(i);
        Object.keys(s).forEach((t, a) => {
          let n = s[t],
            o = (function e(t, a, s, i) {
              let n = document.createElement("div");
              (n.className = "card_cardContainer"),
                (n.dataset.testId = a),
                (n.tabIndex = i + 1),
                (n.style.cssText =
                  "translate: none; rotate: none; scale: none; transform: translate(0px, 0px); touch-action: pan-y;");
              let o = document.createElement("div");
              (o.className = "card_cardImageContainer"),
                (o.style.touchAction = "pan-y;");
              let r = `./assets/fabric_optimized/${t}/${a}/`,
                l = r.replace("/fabric_optimized/", "/fabric_optimized_2048/"),
                c = s.slice(0, 4);
              c.forEach((e) => {
                let t = document.createElement("img");
                (t.className = "card_cardImage"),
                  (t.loading = "lazy"),
                  (t.src = l + e),
                  (t.alt = e),
                  (t.style.touchAction = "pan-y;"),
                  o.appendChild(t);
              });
              let d = document.createElement("div");
              (d.className = "card_itemAmountContainer"),
                (d.dataset.testId = "item-amount"),
                (d.style.touchAction = "pan-y;"),
                (d.textContent = s.length),
                o.appendChild(d),
                n.appendChild(o);
              let p = document.createElement("div");
              (p.className = "card_cardDetails"),
                (p.style.touchAction = "pan-y;");
              let m = document.createElement("p");
              (m.className = "card_cardText"),
                (m.dataset.testId = "card-text"),
                (m.style.touchAction = "pan-y;"),
                (m.textContent = a),
                p.appendChild(m),
                n.appendChild(p);
              let $ = document.createElement("div");
              return (
                ($.className = "card_arrowIcon"),
                ($.style.touchAction = "pan-y;"),
                ($.innerHTML = `<svg class="arrow-right" xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 330 330" width="30" height="30" style="touch-action: pan-y;">
    <path d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  
       c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394
       c-5.857,5.858-5.857,15.355,0.001,21.213  
       C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394  
       l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  
       C255,161.018,253.42,157.202,250.606,154.389z" style="touch-action: pan-y;"></path>
  </svg>`),
                n.appendChild($),
                n.addEventListener("click", () => {
                  Q(t, a, r, s);
                }),
                n
              );
            })(e, t, n, a);
          i.appendChild(o);
        }),
          window.matchMedia("(max-width: 1024.9px)").matches &&
            ("Colour" === e || "Design" === e) &&
            ey();
      }
    }
    function et() {
      let e = document.getElementById("textureContainer");
      e.innerHTML = "";
      let t = document.createElement("div");
      (t.className = "cards-wrapper"),
        Object.keys(d).forEach((e, a) => {
          let s = (function e(t, a) {
            let s = document.createElement("div");
            (s.className = "card_cardContainer"),
              (s.dataset.testId = t),
              (s.tabIndex = a + 1),
              (s.style.cssText =
                "translate: none; rotate: none; scale: none; transform: translate(0px, 0px); touch-action: pan-y;");
            let i = document.createElement("div");
            (i.className = "card_cardImageContainer"),
              (i.style.touchAction = "pan-y;");
            let n = [],
              o = 0,
              r = d[t];
            if (Array.isArray(r)) (n = r.slice(0, 4)), (o = r.length);
            else {
              let l = Object.keys(r);
              l.length > 0 && ((n = r[l[0]].slice(0, 4)), (o = r[l[0]].length));
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
            let p = c.replace("/fabric_optimized/", "/fabric_optimized_2048/");
            n.forEach((e) => {
              let t = document.createElement("img");
              (t.className = "card_cardImage"),
                (t.loading = "lazy"),
                (t.src = p + e),
                (t.alt = e),
                (t.style.touchAction = "pan-y;"),
                i.appendChild(t);
            });
            let m = document.createElement("div");
            (m.className = "card_itemAmountContainer"),
              (m.dataset.testId = "item-amount"),
              (m.style.touchAction = "pan-y;"),
              (m.textContent = o),
              i.appendChild(m),
              s.appendChild(i);
            let $ = document.createElement("div");
            ($.className = "card_cardDetails"),
              ($.style.touchAction = "pan-y;");
            let u = document.createElement("p");
            (u.className = "card_cardText"),
              (u.dataset.testId = "card-text"),
              (u.style.touchAction = "pan-y;"),
              (u.textContent = t),
              $.appendChild(u),
              s.appendChild($);
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
                ee(t);
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
    function ea(e) {
      return e.replace(/\.[^.]+$/, "").replace(/-\s*\$[\d.]+$/, "");
    }
    function es(e) {
      if (!u || (u.diffuseTexture && u.diffuseTexture.name === e)) return;
      let t = document.getElementById("renderCanvas");
      gsap.to(t, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        onComplete() {
          let a = new BABYLON.Texture(
            e,
            g,
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
                (u.diffuseTexture = a),
                (u.diffuseTexture.name = e),
                (a.uScale = 5),
                (a.vScale = 5),
                (u.backFaceCulling = !1),
                (u.specularColor = new BABYLON.Color3(0, 0, 0)),
                (u.ambientColor = new BABYLON.Color3(1, 1, 1)),
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
    function ei() {
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
          console.log("[showMobileCutOptions] Confirm clicked => returning"),
            Y();
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
          let i = document.createElement("img");
          (i.src = e.src),
            (i.alt = e.label),
            (i.style.touchAction = "pan-y"),
            (i.style.width = "83px"),
            (i.style.height = "174px"),
            (i.style.objectFit = "contain"),
            s.appendChild(i);
          let n = document.createElement("p");
          (n.textContent = e.label),
            (n.style.touchAction = "pan-y"),
            t.appendChild(s),
            t.appendChild(n),
            t.addEventListener("click", () => {
              console.log("[showMobileCutOptions] Chosen cut:", e.label),
                a.querySelectorAll(".part-option").forEach((e) => {
                  e.classList.remove("selected");
                }),
                t.classList.add("selected"),
                (m.design.pants.cut = e.meshName),
                e$("Cut", e.meshName);
            }),
            a.appendChild(t);
        }),
        e.appendChild(a),
        Z("#mobileCutSlider");
    }
    function en(e) {
      let t = e.target.closest(".accordion"),
        a = e.target.closest(".sub_accordion");
      if (t) {
        console.log("[accordionClickHandler] Top-level accordion clicked:", t),
          t.classList.toggle("active");
        let s = t.querySelector(".sign-acc"),
          i = t.nextElementSibling;
        i.style.maxHeight && "0px" !== i.style.maxHeight
          ? ((i.style.maxHeight = "0px"),
            (s.innerHTML = "+"),
            console.log("[accordionClickHandler] Collapsing panel"))
          : ((i.style.maxHeight = "300px"),
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
          f.removeAllMeshes();
        let n = t.getAttribute("data-category");
        console.log("[accordionClickHandler] Category is:", n),
          "jacket" === n
            ? (console.log("[accordionClickHandler] Loading Jacket options..."),
              eo(),
              y.length > 0 ||
                console.warn("No jacket meshes available to zoom."))
            : "pants" === n
            ? console.log("[accordionClickHandler] Loading Pants options...")
            : "vest" === n
            ? (console.log(
                "[accordionClickHandler] Vest option clicked. (Example only)"
              ),
              y.forEach((e) => e.setEnabled(!1)),
              b.forEach((e) => e.setEnabled(!1)),
              f.removeAllMeshes())
            : (console.log("[accordionClickHandler] Show all (fallback case)."),
              y.forEach((e) => e.setEnabled(!0)),
              b.forEach((e) => e.setEnabled(!0)),
              Object.keys(L).forEach((e) => {
                Object.keys(L[e]).forEach((t) => {
                  let a = L[e][t];
                  a && a.setEnabled(!0);
                });
              }),
              f.removeAllMeshes());
      } else if (a) {
        console.log("[accordionClickHandler] Sub-accordion clicked:", a),
          a.classList.toggle("active");
        let o = a.querySelector(".sign-acc"),
          r = a.nextElementSibling;
        r.style.maxHeight && "0px" !== r.style.maxHeight
          ? ((r.style.maxHeight = "0px"),
            (o.innerHTML = "+"),
            console.log("[accordionClickHandler] Collapsing sub-panel"))
          : ((r.style.maxHeight = r.scrollHeight + "px"),
            (o.innerHTML = "-"),
            console.log(
              "[accordionClickHandler] Expanding sub-panel to:",
              r.style.maxHeight
            ));
        let l = a.getAttribute("data-category");
        console.log("[accordionClickHandler] Sub-category is:", l),
          "cut" === l &&
            window.matchMedia("(max-width: 1024.9px)").matches &&
            (console.log(
              "[accordionClickHandler] 'Cut' was clicked on MOBILE -> Show mobile cut function"
            ),
            ei());
      }
    }
    function eo() {
      Object.keys(L).forEach((e) => {
        let t = m.design.jacket[e];
        t &&
          Object.keys(L[e]).forEach((a) => {
            let s = L[e][a];
            s &&
              (s.setEnabled(a === t),
              a === t &&
                ((s.renderingGroupId = 2),
                (x[e] = s),
                f.addMesh(s, BABYLON.Color3.White())));
          });
      }),
        e1(),
        Object.entries(m.design.jacket).forEach(([e, t]) => {
          if (!t) return;
          let a = document.querySelector(
            `.part-option[data-part-name="${e}"][data-mesh-name="${t}"]`
          );
          a && a.classList.add(eb(e, t));
        });
      let e = m.design.jacket.PocketsTop;
      if (e) {
        let t = document.querySelector(
          `.part-option[data-part-name="Pockets"][data-mesh-name="${e}"]`
        );
        t && t.classList.add("selected-top-pocket");
      }
      let a = m.design.jacket.PocketsBottom;
      if (a) {
        let s = document.querySelector(
          `.part-option[data-part-name="Pockets"][data-mesh-name="${a}"]`
        );
        s && s.classList.add("selected-bottom-pocket");
      }
      let i = m.design.jacket.Pockets;
      if (i) {
        Object.keys(L.Pockets).forEach((e) => {
          L.Pockets[e].setEnabled(!1);
        });
        let n = L.Pockets[i];
        n &&
          (n.setEnabled(!0),
          (x.Pockets = n),
          f.addMesh(n, BABYLON.Color3.White()));
      }
    }
    function er(e) {
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
          let i = eb(a, s);
          if (t.classList.contains(i)) {
            t.classList.remove(i),
              (m.design.jacket.Pockets = void 0),
              el.includes(s)
                ? (m.design.jacket.PocketsTop = void 0)
                : ec.includes(s) && (m.design.jacket.PocketsBottom = void 0),
              ep(s);
            return;
          }
        }
        if ((e$(a, s), "Pockets" === a)) {
          let n = el.includes(s),
            d = ec.includes(s);
          n
            ? el.forEach((e) => {
                let t = document.querySelector(
                  `.part-option[data-mesh-name="${e}"]`
                );
                t && e !== s && t.classList.remove("selected-top-pocket");
              })
            : d &&
              ec.forEach((e) => {
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
          (t.classList.add(eb(a, s)),
          "Back" === a
            ? (function e() {
                if (
                  void 0 === o ||
                  void 0 === r ||
                  void 0 === l ||
                  void 0 === c
                ) {
                  console.error("Initial camera parameters are not set.");
                  return;
                }
                let t = l + Math.PI - (h.rotation.y - S);
                (t %= 2 * Math.PI),
                  BABYLON.Animation.CreateAndStartAnimation(
                    "cameraRadiusResetBack",
                    _,
                    "radius",
                    60,
                    120,
                    _.radius,
                    o,
                    BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
                  ),
                  BABYLON.Animation.CreateAndStartAnimation(
                    "cameraTargetResetBack",
                    _,
                    "target",
                    60,
                    120,
                    _.target,
                    r,
                    BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
                  ),
                  BABYLON.Animation.CreateAndStartAnimation(
                    "cameraAlphaResetBack",
                    _,
                    "alpha",
                    60,
                    120,
                    _.alpha,
                    t,
                    BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
                  ),
                  BABYLON.Animation.CreateAndStartAnimation(
                    "cameraBetaResetBack",
                    _,
                    "beta",
                    60,
                    120,
                    _.beta,
                    c,
                    BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
                  ),
                  console.log(
                    "Camera reset to back view (with model rotation offset)."
                  );
              })()
            : ("Lapels" === a || "Pockets" === a) && R(),
          ["Pockets"].includes(a))
        ) {
          let p = document.querySelector('.accordion[data-category="jacket"]');
          p && !p.classList.contains("active") ? p.click() : eo();
        }
      }
    }
    (g = z()),
      M.runRenderLoop(() => g && g.render()),
      window.addEventListener("resize", () => M.resize());
    let el = ["4on2_pocket_4", "4on2_pocket_5", "4on2_pocket_6"],
      ec = [
        "4on2_pocket_1",
        "4on2_pocket_2",
        "4on2_pocket_3",
        "4on2_pocket_7",
        "4on2_pocket_8",
      ];
    function ed(e) {
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
        ],
        a;
      if (
        ("top" === e
          ? (a = t.filter((e) => el.includes(e.meshName)))
          : "bottom" === e && (a = t.filter((e) => ec.includes(e.meshName))),
        "top" === e)
      ) {
        let s = document.getElementById("mobilePocketsContainer");
        if ((s.classList.add("cards-wrapper"), !s)) return;
        (s.innerHTML = ""),
          a.forEach((e) => {
            let t = document.createElement("div");
            function a(a) {
              if (
                (a.preventDefault(),
                a.stopPropagation(),
                t.classList.contains("selected") &&
                  t.classList.contains("selected-top-pocket"))
              ) {
                console.log(
                  "[renderMobilePocketsOptions] Toggling off top pocket option:",
                  e.label
                ),
                  t.classList.remove("selected", "selected-top-pocket"),
                  (m.design.jacket.PocketsTop = void 0),
                  ep(e.meshName),
                  R();
                return;
              }
              s.querySelectorAll(".part-option").forEach((e) => {
                e.classList.remove("selected", "selected-top-pocket");
              }),
                t.classList.add("selected", "selected-top-pocket"),
                (m.design.jacket.PocketsTop = e.meshName),
                e$("Pockets", e.meshName, "top"),
                R();
            }
            t.classList.add("part-option", "card_cardContainer"),
              t.setAttribute("data-part-name", "Pockets"),
              t.setAttribute("data-mesh-name", e.meshName),
              (t.style.touchAction = "pan-y"),
              (t.style.cursor = "pointer"),
              t.addEventListener("click", a),
              t.addEventListener("touchend", a);
            let i = document.createElement("div");
            i.classList.add("img-wrapper"), (i.style.touchAction = "pan-y");
            let n = document.createElement("img");
            (n.src = e.src),
              (n.alt = e.label),
              (n.style.touchAction = "pan-y"),
              (n.style.width = "100%"),
              (n.style.height = "auto"),
              i.appendChild(n);
            let o = document.createElement("p");
            (o.textContent = e.label),
              (o.style.touchAction = "pan-y"),
              t.appendChild(i),
              t.appendChild(o),
              s.appendChild(t);
          });
      } else if ("bottom" === e) {
        let i = document.getElementById("mobilePocketsSlider");
        if (i) i.innerHTML = "";
        else {
          ((i = document.createElement("div")).id = "mobilePocketsSlider"),
            i.classList.add("cards-wrapper");
          let n = document.getElementById("mobilePocketsContainer");
          n && ((n.innerHTML = ""), n.appendChild(i));
        }
        a.forEach((e) => {
          let t = document.createElement("div");
          function a(a) {
            if (
              (a.preventDefault(),
              a.stopPropagation(),
              t.classList.contains("selected") &&
                t.classList.contains("selected-bottom-pocket"))
            ) {
              console.log(
                "[renderMobilePocketsOptions] Toggling off bottom pocket option:",
                e.label
              ),
                t.classList.remove("selected", "selected-bottom-pocket"),
                (m.design.jacket.PocketsBottom = void 0),
                ep(e.meshName),
                R();
              return;
            }
            document
              .querySelectorAll("#mobilePocketsSlider .part-option")
              .forEach((e) => {
                e.classList.remove("selected", "selected-bottom-pocket");
              }),
              t.classList.add("selected", "selected-bottom-pocket"),
              (m.design.jacket.PocketsBottom = e.meshName),
              e$("Pockets", e.meshName, "bottom"),
              R();
          }
          t.classList.add("part-option", "card_cardContainer"),
            t.setAttribute("data-part-name", "Pockets"),
            t.setAttribute("data-mesh-name", e.meshName),
            (t.style.touchAction = "pan-y"),
            (t.style.cursor = "pointer"),
            t.addEventListener("click", a),
            t.addEventListener("touchend", a);
          let s = document.createElement("div");
          s.classList.add("img-wrapper"), (s.style.touchAction = "pan-y");
          let n = document.createElement("img");
          (n.src = e.src),
            (n.alt = e.label),
            (n.style.touchAction = "pan-y"),
            (n.style.width = "100%"),
            (n.style.height = "auto"),
            s.appendChild(n);
          let o = document.createElement("p");
          (o.textContent = e.label),
            (o.style.touchAction = "pan-y"),
            t.appendChild(s),
            t.appendChild(o),
            i.appendChild(t);
        }),
          Z("#mobilePocketsSlider");
      }
    }
    function ep(e) {
      let t = document.querySelector(`.part-option[data-mesh-name="${e}"]`);
      t &&
        t.classList.remove(
          "selected-top-pocket",
          "selected-bottom-pocket",
          "selected-pockets",
          "selected-back",
          "selected-lapel"
        );
      let a = L.Pockets[e];
      a && a.setEnabled(!1);
    }
    function em(e) {
      let t = L.Pockets[e];
      t &&
        (t.setEnabled(!0),
        (t.renderingGroupId = 2),
        f.removeAllMeshes(),
        f.addMesh(t, BABYLON.Color3.White()));
      let a = document.querySelector(`.part-option[data-mesh-name="${e}"]`);
      if (a) {
        let s = "selected-pockets";
        el.includes(e)
          ? (s = "selected-top-pocket")
          : ec.includes(e) && (s = "selected-bottom-pocket"),
          a.classList.remove(
            "selected-back",
            "selected-lapel",
            "selected-top-pocket",
            "selected-bottom-pocket"
          ),
          a.classList.add(s);
      }
    }
    function e$(e, t, a) {
      if (!L[e]) {
        console.warn(
          `switchPartMesh: No mesh options available for part "${e}".`
        );
        return;
      }
      if ("Pockets" !== e) {
        Object.keys(L[e]).forEach((t) => {
          let a = L[e][t];
          a && a.setEnabled(!1);
        });
        let s = L[e][t];
        s
          ? (s.setEnabled(!0),
            (s.renderingGroupId = 2),
            (x[e] = s),
            (m.design.jacket[e] = t),
            Object.keys(L[e]).forEach((t) => {
              let a = L[e][t];
              a && f.removeMesh(a);
            }),
            f.addMesh(s, BABYLON.Color3.White()))
          : console.warn(
              `switchPartMesh: No mesh found for "${t}" in part "${e}".`
            );
        let i = document.querySelector(`.part-option[data-mesh-name="${t}"]`);
        i &&
          (i.classList.remove(
            "selected-back",
            "selected-lapel",
            "selected-top-pocket",
            "selected-bottom-pocket"
          ),
          i.classList.add(eb(e, t)));
        return;
      }
      if (window.matchMedia("(max-width: 1024.9px)").matches) {
        if ("top" === a) {
          el.forEach((e) => {
            let t = L.Pockets[e];
            t && (t.setEnabled(!1), f.removeMesh(t));
          });
          let n = L.Pockets[t];
          n
            ? (n.setEnabled(!0),
              (n.renderingGroupId = 2),
              (x.PocketsTop = n),
              (m.design.jacket.PocketsTop = t),
              el.forEach((e) => {
                let t = L.Pockets[e];
                t && f.removeMesh(t);
              }),
              f.addMesh(n, BABYLON.Color3.White()))
            : console.warn(
                `switchPartMesh: No top pocket mesh found for "${t}".`
              );
        } else if ("bottom" === a) {
          ec.forEach((e) => {
            let t = L.Pockets[e];
            t && (t.setEnabled(!1), f.removeMesh(t));
          });
          let o = L.Pockets[t];
          o
            ? (o.setEnabled(!0),
              (o.renderingGroupId = 2),
              (x.PocketsBottom = o),
              (m.design.jacket.PocketsBottom = t),
              ec.forEach((e) => {
                let t = L.Pockets[e];
                t && f.removeMesh(t);
              }),
              f.addMesh(o, BABYLON.Color3.White()))
            : console.warn(
                `switchPartMesh: No bottom pocket mesh found for "${t}".`
              );
        } else
          console.warn(
            "switchPartMesh (mobile): No mobileSelection provided for Pockets."
          );
      } else {
        let r = el.includes(t),
          l = ec.includes(t);
        if (r) {
          if (m.design.jacket.PocketsTop === t) return;
          el.forEach((e) => ep(e)), em(t), (m.design.jacket.PocketsTop = t);
        } else if (l) {
          if (m.design.jacket.PocketsBottom === t) return;
          ec.forEach((e) => ep(e)), em(t), (m.design.jacket.PocketsBottom = t);
        }
      }
    }
    function eu(e) {}
    function eg(e) {
      let t = e.target.closest(".jacket-embroidery-choice");
      if (!t) return;
      let a = t.querySelector("p").innerText.trim();
      if ("No Embroidery" === a)
        (m.embroidery.jacket = []),
          document
            .querySelectorAll(".jacket-embroidery-choice")
            .forEach((e) => e.classList.remove("selected")),
          t.classList.add("selected");
      else {
        let s = m.embroidery.jacket.findIndex((e) => e.location === a);
        if (
          (-1 === s
            ? (m.embroidery.jacket.push({ location: a, text: "", color: null }),
              t.classList.add("selected"))
            : (m.embroidery.jacket.splice(s, 1),
              t.classList.remove("selected")),
          m.embroidery.jacket.length > 0)
        ) {
          let i = document.querySelector(
            ".jacket-embroidery-choice.no-embroidery"
          );
          i && i.classList.remove("selected");
        } else {
          let n = document.querySelector(
            ".jacket-embroidery-choice.no-embroidery"
          );
          n && n.classList.add("selected");
        }
      }
      m.embroidery.hasEmbroidery = m.embroidery.jacket.length > 0;
      let o = document.querySelector(".characters-inputs");
      o && "none" !== o.style.display && (e0(), (o.style.display = "block"));
    }
    function ea(e) {
      return e.replace(/\.[^.]+$/, "").replace(/-\s*\$[\d.]+$/, "");
    }
    function eh(e, t) {
      (e = gsap.utils.toArray(e)), (t = t || {});
      let a = gsap.timeline({
          repeat: t.repeat,
          paused: t.paused,
          defaults: { ease: "none" },
          onReverseComplete: () =>
            a.totalTime(a.rawTime() + 100 * a.duration()),
        }),
        s = e.length,
        i = e[0].offsetLeft,
        n = [],
        o = [],
        r = [],
        l = 0,
        c = 100 * (t.speed || 1),
        d = !1 === t.snap ? (e) => e : gsap.utils.snap(t.snap || 1),
        p = () =>
          e.forEach((e, t) => {
            (o[t] = parseFloat(gsap.getProperty(e, "width", "px"))),
              (r[t] = d(
                (parseFloat(gsap.getProperty(e, "x", "px")) / o[t]) * 100 +
                  gsap.getProperty(e, "xPercent")
              ));
          }),
        m = () =>
          e[s - 1].offsetLeft +
          (r[s - 1] / 100) * o[s - 1] -
          i +
          e[s - 1].offsetWidth * gsap.getProperty(e[s - 1], "scaleX") +
          (parseFloat(t.paddingRight) || 0),
        $,
        u,
        g,
        h,
        _,
        y;
      for (
        p(),
          gsap.set(e, { xPercent: (e) => r[e] }),
          gsap.set(e, { x: 0 }),
          $ = m(),
          y = 0;
        y < s;
        y++
      )
        (_ = e[y]),
          (u = (r[y] / 100) * o[y]),
          (h =
            (g = _.offsetLeft + u - i) + o[y] * gsap.getProperty(_, "scaleX")),
          a
            .to(_, { xPercent: d(((u - h) / o[y]) * 100), duration: h / c }, 0)
            .fromTo(
              _,
              { xPercent: d(((u - h + $) / o[y]) * 100) },
              {
                xPercent: r[y],
                duration: (u - h + $ - u) / c,
                immediateRender: !1,
              },
              h / c
            )
            .add("label" + y, g / c),
          (n[y] = g / c);
      function b(e, t) {
        (t = t || {}), Math.abs(e - l) > s / 2 && (e += e > l ? -s : s);
        let i = gsap.utils.wrap(0, s, e),
          o = n[i];
        return (
          o > a.time() != e > l &&
            ((t.modifiers = { time: gsap.utils.wrap(0, a.duration()) }),
            (o += a.duration() * (e > l ? 1 : -1))),
          (l = i),
          (t.overwrite = !0),
          a.tweenTo(o, t)
        );
      }
      if (
        ((a.next = (e) => b(l + 1, e)),
        (a.previous = (e) => b(l - 1, e)),
        (a.current = () => l),
        (a.toIndex = (e, t) => b(e, t)),
        (a.updateIndex = () => (l = Math.round(a.progress() * e.length))),
        (a.times = n),
        (a.items = e),
        a.progress(1, !0).progress(0, !0),
        t.reversed && (a.vars.onReverseComplete(), a.reverse()),
        t.draggable && "function" == typeof Draggable)
      ) {
        let k = document.createElement("div"),
          v = gsap.utils.wrap(0, 1),
          f,
          E,
          C,
          L,
          w,
          x = () => a.progress(v(E + (C.startX - C.x) * f)),
          A = () => a.updateIndex();
        "undefined" == typeof InertiaPlugin &&
          console.warn(
            "InertiaPlugin required for momentum-based scrolling and snapping. https://greensock.com/club"
          ),
          (C = Draggable.create(k, {
            trigger: e[0].parentNode,
            type: "x",
            onPress() {
              (E = a.progress()),
                a.progress(0),
                p(),
                (f = 1 / ($ = m())),
                (w = Math.pow(
                  10,
                  (((L = $ / e.length) + "").split(".")[1] || "").length
                )),
                a.progress(E);
            },
            onDrag: x,
            onThrowUpdate: x,
            inertia: !0,
            snap(e) {
              let t = Math.round(parseFloat(e) / L) * L * w;
              return (t - (t % 1)) / w;
            },
            onRelease: A,
            onThrowComplete: () => gsap.set(k, { x: 0 }) && A(),
          })[0]);
      }
      return a;
    }
    function e3(e, t = 1) {
      let a = document.querySelector(e);
      if (!a) return;
      let s = Array.from(a.children);
      for (let i = 0; i < t; i++)
        s.forEach((e) => {
          let t = e.cloneNode(!0);
          a.appendChild(t);
        });
    }
    function e_(e) {
      return new Promise((t) => {
        let a = 0,
          s = e.length;
        e.forEach((e) => {
          let i = new Image();
          (i.onload = i.onerror =
            () => {
              ++a === s && t();
            }),
            (i.src = e);
        });
      });
    }
    function e1() {
      _.inputs.attached.keyboard || _.attachControl(A, !0),
        console.log("Camera controls enabled.");
    }
    function ey() {
      let e = document.querySelectorAll(".cards-wrapper"),
        t = window.innerWidth;
      e.forEach((e) => {
        if ("mobilePocketsSliderWrapper" === e.id) {
          e.classList.contains("flickity-enabled") ||
            new Flickity(e, {
              cellAlign: "left",
              contain: !0,
              draggable: !0,
              prevNextButtons: !1,
              pageDots: !1,
            });
          return;
        }
        let a = e.scrollWidth;
        if (a <= t - 30) {
          e.classList.contains("flickity-enabled") &&
            Flickity.data(e).destroy();
          return;
        }
        a >= t - 100 &&
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
    function e0() {
      let e = document.querySelector(".characters-inputs");
      if ((e && e.remove(), 0 === m.embroidery.jacket.length)) return;
      if (
        !E &&
        !(E = document.getElementById("embroideryLocationsContainer"))
      ) {
        console.error(
          "Element with ID 'embroideryLocationsContainer' not found."
        );
        return;
      }
      let t = document.createElement("div");
      t.classList.add("characters-inputs");
      let a = '<h3 class="embroidery-text">Embroidery Text:</h3>';
      m.embroidery.jacket.forEach((e, t) => {
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
        m.embroidery.jacket.forEach((e, t) => {
          let a = document.getElementById(`embroideryTextInput${t}`);
          a &&
            a.addEventListener("input", () => {
              e.text = a.value.trim();
            });
        });
    }
    function eb(e, t) {
      switch (e) {
        case "Back":
          return "selected-back";
        case "Lapels":
          return "selected-lapel";
        case "Pockets":
          if (el.includes(t)) return "selected-top-pocket";
          if (ec.includes(t)) return "selected-bottom-pocket";
          return "selected-pockets";
        default:
          return "selected";
      }
    }
    document
      .getElementById("backButton")
      .addEventListener("click", function () {
        R(),
          e1(),
          p > 1 &&
            (5 === p ? (p = 0 === m.embroidery.jacket.length ? 3 : 4) : p--,
            J(p),
            e1()),
          (document.querySelector(
            "body > main > div > div.canvas-container"
          ).style.display = "block");
      }),
      document
        .getElementById("nextButton")
        .addEventListener("click", function () {
          e1(), R();
          let t = null;
          if (1 === p) {
            if (m.texture) {
              let a = ea(m.texture);
              (t = { texture: a }), (m.texture = a);
            } else
              (t = { texture: "E5102-38.webp" }), (m.texture = "E5102-38.webp");
          } else if (2 === p) t = { design: m.design };
          else if (3 === p) t = { jacketEmbroidery: m.embroidery.jacket };
          else if (4 === p)
            t = { jacketEmbroideryCustomizations: m.embroidery.jacket };
          else if (5 === p) {
            (function e() {
              for (let t of [
                "Waist",
                "Crotch Depth",
                "Seat",
                "Knee",
                "Inseam",
                "Hips",
                "Thigh",
                "Outseam",
                "Ankle",
              ])
                if (
                  !m.measurements ||
                  !m.measurements[t] ||
                  "" === m.measurements[t]
                )
                  return !1;
              return !0;
            })()
              ? J(++p)
              : alert("Please fill in all measurements before proceeding.");
            return;
          }
          console.log("Current Step: ", p),
            console.log("Selected Choice: ", t),
            console.log("User Choices: ", m),
            p < 5
              ? (3 === p && 0 === m.embroidery.jacket.length ? (p = 5) : p++,
                J(p))
              : 5 === p ||
                (function t() {
                  let a =
                    "Configuration Complete! Thank you for customizing your suit.\n\n";
                  for (let s in ((a += `Texture: ${m.texture}
`),
                  (a += "Design Selections:\n"),
                  m.design.jacket))
                    a += `  ${s}: ${m.design.jacket[s]}
`;
                  for (let i in m.design.pants)
                    a += `  ${i}: ${m.design.pants[i]}
`;
                  if (
                    (m.embroidery.hasEmbroidery &&
                    m.embroidery.jacket.length > 0
                      ? ((a += "Embroidery Locations:\n"),
                        m.embroidery.jacket.forEach((e, t) => {
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
                    m.embroidery.threadColor &&
                      (a += `Thread Color (Mobile): ${m.embroidery.threadColor}
`),
                    m.measurements)
                  )
                    for (let n in ((a += "Measurements:\n"), m.measurements))
                      a += `  ${n}: ${m.measurements[n]}
`;
                  alert(a),
                    e.sendUserChoicesEmail(m),
                    window.parent.postMessage(
                      { type: "userChoices", data: m },
                      "*"
                    );
                })();
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
            m.design.pants.Pockets = t;
          }
        }),
      fetch("textures.json")
        .then((e) => e.json())
        .then((e) => {
          d = e;
          let t = (function e(t) {
            let a = [];
            for (let s in t) {
              let i = t[s];
              if (Array.isArray(i))
                i.forEach((e) => {
                  a.push(`./assets/fabric_optimized/${s}/${e}`);
                });
              else if ("object" == typeof i)
                for (let n in i)
                  i[n].forEach((e) => {
                    a.push(`./assets/fabric_optimized/${s}/${n}/${e}`);
                  });
            }
            return a;
          })(d);
          console.log(`Preloading ${t.length} images...`),
            (function e() {
              if (P) return;
              P = !0;
              let t = document.getElementById("textureContainer");
              t.addEventListener("click", en);
            })(),
            (function e() {
              if (T) return;
              T = !0;
              let t = document.getElementById("textureContainer");
              t.addEventListener("click", er);
            })(),
            (function e() {
              if (N) return;
              N = !0;
              let t = document.getElementById("textureContainer");
              t.addEventListener("click", eu);
            })(),
            (function e() {
              if (B) return;
              B = !0;
              let t = document.getElementById("textureContainer");
              t.addEventListener("click", eg);
            })(),
            ey();
        })
        .catch((e) => console.error("Error loading textures.json:", e)),
      (t = !0),
      (a = !0),
      y.forEach((e) => e.setEnabled(t)),
      b.forEach((e) => e.setEnabled(a));
    let e6 = document.getElementById("arrow");
    e6
      ? e6.addEventListener("click", () => {
          !(function e(t) {
            let a = h.rotation.y + t,
              s = new BABYLON.Animation(
                "rotateAnimation",
                "rotation.y",
                60,
                BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
              ),
              i = [
                { frame: 0, value: h.rotation.y },
                { frame: 120, value: a },
              ];
            s.setKeys(i),
              (h.animations = []),
              h.animations.push(s),
              g.beginAnimation(h, 0, 120, !1, 1, () => {}),
              (h.rotation.y = a),
              console.log(`Model rotated to Y=${a}`);
          })(Math.PI / 2);
        })
      : console.warn('Arrow element with id "arrow" not found.'),
      document.getElementById("resetCameraButton").addEventListener("click", R),
      ey(),
      window.addEventListener("resize", ey);
  });
