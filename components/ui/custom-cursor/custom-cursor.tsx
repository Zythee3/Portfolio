'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import styles from './custom-cursor.module.css';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Desativa em dispositivos touch/mobile
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Configura posicionamento ultra suave com GSAP quickTo
    const setX = gsap.quickTo(cursor, 'x', { duration: 0.18, ease: 'power3.out' });
    const setY = gsap.quickTo(cursor, 'y', { duration: 0.18, ease: 'power3.out' });

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      setX(e.clientX);
      setY(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('[data-cursor-text]');
      if (target) {
        const text = target.getAttribute('data-cursor-text');
        setCursorText(text);
      } else {
        setCursorText(null);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <div
      ref={cursorRef}
      className={`${styles.cursor} ${cursorText ? styles.expanded : ''} ${
        isVisible ? styles.visible : ''
      }`}
    >
      <span className={styles.label}>{cursorText}</span>
    </div>
  );
}
