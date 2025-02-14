import React, { useEffect, useRef } from "react";
import p5 from "p5";

const HeartAnimation = ({ speed }) => {
  const sketchRef = useRef();
  const p5Instance = useRef(null);

  useEffect(() => {
    if (p5Instance.current) {
      p5Instance.current.remove();
    }

    const sketch = (p) => {
      let k = 0;

      p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight).parent(sketchRef.current);
        p.noFill();
      };

      p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight);
      };

      p.draw = () => {
        p.clear();
        p.background(0);
        p.stroke(255, 0, 0);
        p.translate(p.width / 2, p.height / 2 + 30);

        k += speed / 100; 

        let beat = 1 + 0.05 * Math.sin(p.frameCount * 0.1); // Heartbeat effect
        let scaleFactor = Math.min(p.width, p.height) / 5 * beat; // 🔥 **Reduced heart size**

        p.beginShape();
        for (let x = -1.5; x <= 1.5; x += 0.01) {
          let y = Math.pow(Math.abs(x), 2 / 3) + 0.9 * Math.sin(k * x) * Math.sqrt(3 - x * x);
          p.vertex(x * scaleFactor, -y * scaleFactor);
        }
        for (let x = 1.5; x >= -1.5; x -= 0.01) {
          let y = Math.pow(Math.abs(x), 2 / 3) + 0.9 * Math.sin(k * x) * Math.sqrt(3 - x * x);
          p.vertex(-x * scaleFactor, -y * scaleFactor);
        }
        p.endShape();
      };
    };

    p5Instance.current = new p5(sketch, sketchRef.current);

    return () => {
      if (p5Instance.current) {
        p5Instance.current.remove();
      }
    };
  }, [speed]);

  return <div ref={sketchRef} />;
};

export default HeartAnimation;
