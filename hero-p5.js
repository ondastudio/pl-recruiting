document.addEventListener("DOMContentLoaded", () => {
  let container = document.querySelector(".home-header-visual");
  let size = {
    w: container.getBoundingClientRect().width,
    h: container.getBoundingClientRect().height
  };
  function sketch(sk) {
    sk.pause = false;

    let canvas, dim, dim1, dim2;
    let t = 0;

    sk.setup = () => {
      canvas = sk.createCanvas(size.w, size.h);
      density = sk.displayDensity();
      sk.pixelDensity(density);

      dim = sk.min(sk.width, sk.height);
      dim1 = sk.width;
      dim2 = sk.height;

      sk.clear();
      sk.noFill();
      sk.stroke(21, 111, 247);
    };

    sk.draw = () => {
      if (sk.pause) sk.noLoop();
      else sk.loop();

      sk.clear();
      t += 0.01;

      sk.translate(sk.width * 0.5, sk.height * 0.5);

      let c = (sk.cos(t) + 1) * 0.4 + 0.1;
      let s = (sk.sin(t) + 1) * 0.4 + 0.1;
      let c1 = (sk.cos(t * 1.5) + 1) * 0.4 + 0.1;
      let s1 = (sk.sin(t * 1.5) + 1) * 0.4 + 0.1;

      let radX1 = dim1 * 0.9 * s;
      let radY1 = dim2 * 0.9 * c;
      let x1 = radX1 * 0.5 * sk.cos(t * 0.8);
      let y1 = radY1 * 0.5 * sk.sin(t * 0.8);

      let radX2 = dim2 * 0.9 * c;
      let radY2 = dim1 * 0.9 * s;
      let x2 = radX2 * 0.5 * sk.cos(t * 1.1);
      let y2 = radY2 * 0.5 * sk.sin(t * 1.1);

      let radX3 = dim2 * 0.9 * s1;
      let radY3 = dim1 * 0.9 * c1;
      let x3 = radX3 * 0.5 * -sk.cos(t * 0.9);
      let y3 = radY3 * 0.5 * sk.sin(t * 0.9);

      let radX4 = dim2 * 0.9 * c1;
      let radY4 = dim1 * 0.9 * s1;
      let x4 = radX4 * 0.5 * -sk.cos(t);
      let y4 = radY4 * 0.5 * sk.sin(t);

      sk.rotate(sk.PI / 6);
      sk.bigCircle(radX1, radY1);
      sk.smallCircle(x1, y1, 1);

      sk.rotate(sk.PI / 6);
      sk.bigCircle(radX2, radY2);
      sk.smallCircle(x2, y2, 0.6);

      sk.rotate(sk.PI / 6);
      sk.bigCircle(radX3, radY3);
      sk.smallCircle(x3, y3, 1);

      sk.rotate(sk.PI / 6);
      sk.bigCircle(radX4, radY4);
      sk.smallCircle(x4, y4, 0.6);
    };

    sk.windowResized = () => {
      size = {
        w: container.getBoundingClientRect().width,
        h: container.getBoundingClientRect().height
      };
      sk.resizeCanvas(size.w, size.h);

      dim = sk.min(sk.width, sk.height);
      dim1 = sk.width;
      dim2 = sk.height;
    };

    sk.bigCircle = (radX, radY) => {
      sk.setLineDash([2, 4]);
      sk.noFill();
      sk.ellipse(0, 0, radX, radY);
    };

    sk.smallCircle = (x, y, size) => {
      sk.setLineDash([0, 0]);
      sk.fill(210, 226, 249);
      sk.ellipse(x, y, dim * 0.0225 * size, dim * 0.0225 * size);
    };

    sk.setLineDash = (list) => {
      sk.drawingContext.setLineDash(list);
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
