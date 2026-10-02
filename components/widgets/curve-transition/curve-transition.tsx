'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import styles from './curve-transition.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CurveTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const initialPath = "M 0 100 V 100 Q 50 100 100 100 V 100 z";
  const curvePath   = "M 0 100 V 50 Q 50 0 100 50 V 100 z";
  const endPath     = "M 0 100 V 0 Q 50 0 100 0 V 100 z";

  useGSAP(() => {
    if (!pathRef.current || !containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero", // Trava a Hero enquanto a curva sobe
        start: "top top",
        end: "+=100%",
        pin: true,
        scrub: 1,
      },
    });

    tl.to(pathRef.current, {
      attr: { d: curvePath },
      ease: "power1.in",
      duration: 1,
    }).to(pathRef.current, {
      attr: { d: endPath },
      ease: "power1.out",
      duration: 1,
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={styles.wrapper}>
      <svg
        className={styles.transitionSvg}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          fill="var(--foreground-color)"
          d={initialPath}
        />
      </svg>
    </div>
  );
}
