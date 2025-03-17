function loadScript(url, callback) {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;

  script.onload = () => {
    if (callback) callback();
  };

  document.head.appendChild(script);
}

document.addEventListener("DOMContentLoaded", () => {
  loadScript(
    "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js",
    () => {
      if (typeof neonCursor !== "undefined") {
        neonCursor({
          el: document.getElementById("app"),
          shaderPoints: 16,
          curvePoints: 80,
          curveLerp: 0.5,
          radius1: 5,
          radius2: 30,
          velocityTreshold: 10,
          sleepRadiusX: 100,
          sleepRadiusY: 100,
          sleepTimeCoefX: 0.0025,
          sleepTimeCoefY: 0.0025,
        });
      }
    }
  );
});
