document.addEventListener("DOMContentLoaded", () => {
  let container = document.querySelector(".support-p5");
  let size = {
    w: container.getBoundingClientRect().width,
    h: container.getBoundingClientRect().height
  };
  function sketch(sk) {
    sk.pause = false;

    let canvas, dim;
    let t = 0;
    let amt = [];
    let maxH;

    sk.setup = () => {
      canvas = sk.createCanvas(size.w, size.h);
      density = sk.displayDensity();
      sk.pixelDensity(density);

      dim = sk.min(sk.width, sk.height);

      for (let i = 0; i <= 8; i++) {
        amt.push({ s: dim * 0.1 * i, o: 0 });
        maxH = dim * 0.78;
      }

      sk.clear();
      sk.noFill();
      sk.stroke(22, 22, 30);
      sk.strokeWeight(dim * 0.001);
    };

    sk.draw = () => {
      if (sk.pause) sk.noLoop();
      else sk.loop();

      sk.clear();
      t += 0.02;

      sk.translate(sk.width * 0.5, sk.height * 0.5);
      sk.rotate(sk.PI / 2);

      let count = 0;
      for (let i = 1; i <= 8; i++) {
        amt[count].s += 1;

        if (amt[count].s > maxH) {
          amt[count].o -= 20;

          if (amt[count].o <= 0) {
            amt[count].s = 0;
            amt[count].o = 0;
          }
        } else {
          amt[count].o += 20;

          if (amt[count].o >= 255) {
            amt[count].o = 255;
          }
        }

        sk.stroke(22, 22, 30, amt[count].o);

        sk.ellipse(0, dim * 0.4 - amt[count].s * 0.5, dim * 0.8, amt[count].s);
        count++;
      }
    };

    sk.windowResized = () => {
      size = {
        w: container.getBoundingClientRect().width,
        h: container.getBoundingClientRect().height
      };
      sk.resizeCanvas(size.w, size.h);

      dim = sk.min(sk.width, sk.height);

      amt = [];

      for (let i = 0; i <= 8; i++) {
        amt.push({ s: dim * 0.1 * i, o: 0 });
        maxH = dim * 0.78;
      }

      sk.strokeWeight(dim * 0.00075);
    };
  }

  let p5sketch = new p5(sketch, container);

  checkRun();
  window.addEventListener("scroll", () => {
    checkRun();
  });

  function checkRun() {
    if (visibleY(container)) {
      if (p5sketch.pause) {
        p5sketch.pause = false;
        p5sketch.loop();
      }
    } else {
      p5sketch.pause = true;
    }
  }
});
