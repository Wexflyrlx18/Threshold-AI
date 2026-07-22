import { useEffect, useRef } from "react";

/**
 * 3D Particle Sphere + constellation — pure canvas, no external libs.
 * Renders a rotating Fibonacci sphere of points connected by edges,
 * with a reactive dot grid background and cursor halo.
 */
export default function ParticleSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    let W = 0, H = 0, DPR = 1;
    let grid: { x: number; y: number; bx: number; by: number }[] = [];
    let mx = 0, my = 0;
    let tmx = 0, tmy = 0;
    let scrollT = 0;
    let ry3 = 0, rx3 = 0;
    let rafId = 0;

    const buildGrid = () => {
      grid = [];
      const gap = 46 * DPR;
      for (let y = gap; y < H; y += gap) {
        for (let x = gap; x < W; x += gap) {
          grid.push({ x, y, bx: x, by: y });
        }
      }
    };

    const size = () => {
      DPR = Math.min(1.6, window.devicePixelRatio || 1);
      W = cv.width = window.innerWidth * DPR;
      H = cv.height = window.innerHeight * DPR;
      cv.style.width = window.innerWidth + "px";
      cv.style.height = window.innerHeight + "px";
      buildGrid();
    };

    size();
    window.addEventListener("resize", size);

    // Fibonacci sphere
    const N = window.innerWidth < 760 ? 260 : 520;
    const P: number[][] = [];
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const th = i * 2.399963229728653;
      P.push([Math.cos(th) * r, y, Math.sin(th) * r]);
    }

    // Precompute 3 nearest neighbours
    const NB = P.map((a, i) => {
      const ds = P.map((b, j) => [
        (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2,
        j,
      ] as [number, number]).sort((x, y) => x[0] - y[0]);
      return [ds[1][1], ds[2][1], ds[3][1]];
    });

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      tmx = e.clientX / window.innerWidth - 0.5;
      tmy = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("mousemove", onMouseMove);

    const onScroll = () => {
      scrollT = window.scrollY / window.innerHeight;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const rot = (p: number[], ax: number, ay: number): number[] => {
      let [x, y, z] = p;
      let c = Math.cos(ay), s = Math.sin(ay);
      [x, z] = [x * c - z * s, x * s + z * c];
      c = Math.cos(ax); s = Math.sin(ax);
      [y, z] = [y * c - z * s, y * s + z * c];
      return [x, y, z];
    };

    const frame = () => {
      ctx.clearRect(0, 0, W, H);

      // Reactive dot grid
      const cmx = mx * DPR, cmy = my * DPR, GR = 180 * DPR;
      for (const p of grid) {
        const dx = cmx - p.bx, dy = cmy - p.by;
        const d = Math.hypot(dx, dy);
        const f = Math.max(0, 1 - d / GR);
        p.x += (p.bx - dx * f * 0.4 - p.x) * 0.12;
        p.y += (p.by - dy * f * 0.4 - p.y) * 0.12;
        const a = 0.05 + f * 0.6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, (f > 0.04 ? 1.8 : 1) * DPR, 0, 6.283);
        ctx.fillStyle = f > 0.3 ? `rgba(232,255,82,${a})` : `rgba(255,255,255,${a})`;
        ctx.fill();
      }

      ry3 += 0.0022 + tmx * 0.015;
      rx3 += 0.001 + tmy * 0.015;

      const cx = W * 0.72, cy = H * 0.5 - scrollT * H * 0.55;
      const R = Math.min(W, H) * 0.3;
      const pr = P.map((p) => {
        const [x, y, z] = rot(p, rx3, ry3);
        const persp = 1 / (2.7 - z);
        return { x: cx + x * R * persp, y: cy + y * R * persp, z, persp };
      });

      // Constellation edges
      ctx.lineWidth = DPR;
      for (let i = 0; i < pr.length; i++) {
        const A = pr[i];
        for (const j of NB[i]) {
          if (j < i) continue;
          const B = pr[j];
          const depth = (A.z + B.z) / 2;
          const al = 0.04 + ((depth + 1) / 2) * 0.22;
          ctx.strokeStyle = `rgba(255,255,255,${al})`;
          ctx.beginPath();
          ctx.moveTo(A.x, A.y);
          ctx.lineTo(B.x, B.y);
          ctx.stroke();
        }
      }

      // Points
      for (const v of pr) {
        const front = (v.z + 1) / 2;
        ctx.beginPath();
        ctx.arc(v.x, v.y, (0.8 + front * 2.2) * DPR, 0, 6.283);
        ctx.fillStyle =
          v.z > 0.62
            ? `rgba(232,255,82,${0.45 + front * 0.55})`
            : `rgba(255,255,255,${0.18 + front * 0.5})`;
        ctx.fill();
      }

      // Cursor halo
      const hx = mx * DPR, hy = my * DPR, HR = 150 * DPR;
      for (const v of pr) {
        const d = Math.hypot(hx - v.x, hy - v.y);
        if (d < HR) {
          const a = (1 - d / HR) * 0.6;
          ctx.beginPath();
          ctx.arc(v.x, v.y, 2.4 * DPR, 0, 6.283);
          ctx.fillStyle = `rgba(232,255,82,${a})`;
          ctx.fill();
        }
      }

      rafId = requestAnimationFrame(frame);
    };

    rafId = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("resize", size);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
