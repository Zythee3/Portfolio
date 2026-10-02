'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './trackingImage.module.css';
import SplitText from '@/components/ui/split-text/split-text';
import FoldText from '../../ui/fold-text/fold-text';

export interface TrackingImageItem {
  title: string;
  image: string;
  subtitle?: string;
  link?: string;
  alt?: string;
  time?: number;
}

export interface TrackingImageProps {
  items?: TrackingImageItem[];
  duration?: number;
  ease?: string;
  className?: string;
  imageWidth?: number | string;
  imageHeight?: number | string;
}

const DEFAULT_ITEMS: TrackingImageItem[] = [
  {
    image: '/assets/imgs-projects/img/Lincepet.png',
    title: 'LincePet',
    time: 1.2
  },
  {
    image: '/assets/imgs-projects/img/Dayasclean.png',
    title: 'DayasClean',
    time: 1.2
  },
  {
    image: '/assets/imgs-projects/img/Moneytinder.png',
    title: 'MoneyTinder',
    time: 1.2
  },
  {
    image: '/assets/imgs-projects/img/BichoCapiba.png',
    title: 'Bicho Capiba',
    time: 1.2
  }
];

export const TrackingImage = ({
  items = DEFAULT_ITEMS,
  duration = 0.4,
  ease = 'power3',
  className = '',
  imageWidth,
  imageHeight
}: TrackingImageProps) => {
  const containerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const listEl = containerRef.current;
    if (!listEl) return;

    const ctx = gsap.context(() => {
      const itemElements = listEl.querySelectorAll<HTMLElement>(`.${styles.item}`);

      itemElements.forEach((el) => {
        const image = el.querySelector<HTMLImageElement>(`.${styles.swipeImage}`);
        if (!image) return;

        gsap.set(image, {
          xPercent: -50,
          yPercent: -50,
          transformOrigin: 'center center',
          scaleX: 1,
          scaleY: 0.01,
          autoAlpha: 0
        });

        const setX = gsap.quickTo(image, 'x', { duration, ease });
        const setY = gsap.quickTo(image, 'y', { duration, ease });

        let firstEnter = true;

        const align = (e: MouseEvent) => {
          if (firstEnter) {
            setX(e.clientX, e.clientX);
            setY(e.clientY, e.clientY);
            firstEnter = false;
          } else {
            setX(e.clientX);
            setY(e.clientY);
          }
        };

        const startFollow = () => {
          window.addEventListener('mousemove', align);
        };

        const stopFollow = () => {
          window.removeEventListener('mousemove', align);
        };

        const handleMouseEnter = (e: MouseEvent) => {
          firstEnter = true;
          startFollow();
          align(e);

          gsap.to(image, {
            scaleY: 1,
            scaleX: 1,
            autoAlpha: 1,
            duration: 0.25,
            ease: 'power3.out',
            overwrite: 'auto'
          });
        };

        const handleMouseLeave = () => {
          gsap.to(image, {
            scaleY: 0.01,
            autoAlpha: 0,
            duration: 0.2,
            ease: 'power3.in',
            overwrite: 'auto',
            onComplete: stopFollow
          });
        };

        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);

        // Armazena handlers para limpeza se o item for destruído
        (el as unknown as { _cleanupEvents?: () => void })._cleanupEvents = () => {
          el.removeEventListener('mouseenter', handleMouseEnter);
          el.removeEventListener('mouseleave', handleMouseLeave);
          stopFollow();
          gsap.killTweensOf(image);
        };
      });
    }, containerRef);

    return () => {
      const itemElements = listEl.querySelectorAll<HTMLElement>(`.${styles.item}`);
      itemElements.forEach((el) => {
        const cleanup = (el as unknown as { _cleanupEvents?: () => void })._cleanupEvents;
        if (cleanup) cleanup();
      });
      ctx.revert();
    };
  }, [items, duration, ease]);

  const imgStyle: React.CSSProperties = {
    ...(imageWidth ? { width: typeof imageWidth === 'number' ? `${imageWidth}px` : imageWidth } : {}),
    ...(imageHeight ? { height: typeof imageHeight === 'number' ? `${imageHeight}px` : imageHeight } : {})
  };

  return (
    <ul
      ref={containerRef}
      role="list"
      className={`${styles.list} ${className}`.trim()}
    >
      {items.map((item, index) => {
        const Wrapper = (item.link ? 'a' : 'div') as 'a';
        const formattedIndex = index + 1 < 10 ? `0${index + 1}.` : `${index + 1}.`;

        return (
          <li key={index} className={styles.item}>
            <Wrapper href={item.link} className={styles.textContent}>
              <img
                className={styles.swipeImage}
                src={item.image}
                alt={item.alt || item.title}
                style={imgStyle}
              />

              <div className={styles.numberTitle}>
                <FoldText
                  text={formattedIndex}
                  splitBy="word"
                  hinge="left"
                  trigger="mount"
                  duration={0.65}
                  stagger={5.0}
                  ease="power3.out"
                  // creaseShading={0.55}
                  fontSize={18}
                />
              
              </div>
              
              <div className={styles.text}>
                <SplitText
                  text={item.title}
                  tag="h3"
                  className={styles.title}
                  delay={50}
                  duration={item.time ?? 0.8}
                  ease="elastic.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  textAlign="left"
                />
                {item.subtitle && <p className="text-sm opacity-60 mt-1">{item.subtitle}</p>}
              </div>
            </Wrapper>
          </li>
        );
      })}
    </ul>
  );
};

export default TrackingImage;
