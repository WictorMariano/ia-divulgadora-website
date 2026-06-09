"use client";

import { useEffect, useRef } from "react";

export function SiteFlowBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: false });
    if (!gl) return;

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const vertexShaderSource = `attribute vec2 aPosition; void main() { gl_Position = vec4(aPosition, 0.0, 1.0); }`;
    const fragmentShaderSource = `
      precision highp float;
      uniform float iTime;
      uniform vec2 iResolution;

      void main() {
        vec2 uv = gl_FragCoord.xy / iResolution.xy;
        vec2 p = uv * 2.0 - 1.0;
        p.x *= iResolution.x / iResolution.y;

        float t = iTime * 0.1;

        float stream1 = sin(p.x * 1.4 + p.y * 0.9 + t * 2.2 + sin(p.y * 2.5 - t) * 0.6) * 0.5 + 0.5;
        float stream2 = sin(p.x * -0.8 + p.y * 1.6 - t * 1.7 + cos(p.x * 1.8 + t * 0.5) * 0.5) * 0.5 + 0.5;
        float stream3 = sin((p.x + p.y) * 2.2 + t * 1.4) * 0.5 + 0.5;

        float flow = smoothstep(0.2, 0.85, stream1 * 0.45 + stream2 * 0.35 + stream3 * 0.2);

        float colorPos = fract(uv.x * 0.55 + uv.y * 0.35 + t * 0.06 + stream2 * 0.15);
        vec3 orange = vec3(0.98, 0.42, 0.12);
        vec3 amber = vec3(0.99, 0.62, 0.22);
        vec3 sky = vec3(0.30, 0.74, 0.98);
        vec3 blue = vec3(0.12, 0.42, 0.92);

        vec3 warm = mix(orange, amber, sin(t * 0.8 + uv.y * 3.0) * 0.5 + 0.5);
        vec3 cool = mix(sky, blue, cos(t * 0.6 + uv.x * 2.5) * 0.5 + 0.5);
        vec3 flowColor = mix(warm, cool, colorPos);

        float intensity = flow * 0.28 + stream3 * 0.06;
        float alpha = intensity * 0.9;

        gl_FragColor = vec4(flowColor * intensity, alpha);
      }`;

    const compileShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) throw new Error("Could not create shader");
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        throw new Error(gl.getShaderInfoLog(shader) || "Shader compilation error");
      }
      return shader;
    };

    const program = gl.createProgram();
    if (!program) return;

    const vertexShader = compileShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );

    const aPosition = gl.getAttribLocation(program, "aPosition");
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    const iTimeLoc = gl.getUniformLocation(program, "iTime");
    const iResLoc = gl.getUniformLocation(program, "iResolution");

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = Math.max(1, Math.floor(window.innerWidth * dpr));
      canvas.height = Math.max(1, Math.floor(window.innerHeight * dpr));
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    let animationFrameId = 0;
    const render = (time: number) => {
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(iTimeLoc, time * 0.001);
      gl.uniform2f(iResLoc, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    };

    resize();
    window.addEventListener("resize", resize);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <canvas ref={canvasRef} className="block h-full w-full" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_50%,transparent_40%,rgb(14_22_40/0.25)_75%,rgb(10_16_30/0.5))]" />
    </div>
  );
}
