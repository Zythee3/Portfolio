'use client';

import styles from './work.module.css';
import TrackingImage from '@/components/widgets/trackingImage/trackingImage';
import LogoLoop from '@/components/widgets/logo-loop/logo-loop';

import {
  SiReact, SiNextdotjs,
  SiTypescript, SiTailwindcss,
  SiDocker, SiNestjs,
  SiN8N
} from 'react-icons/si';

export default function Work() {

  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiDocker />, title: "Docker", href: "https://www.docker.com/" },
    { node: <SiNestjs />, title: "Nestjs", href: "https://nestjs.com/" },
    { node: <SiN8N />, title: "N8N", href: "https://n8n.io/" },

  ];


  return (
    <section id="work" className={styles.work}>

      <div className={styles.worksView}>
       
        <TrackingImage />
        {/* <div className={styles.techHeader}>
          <span className={styles.techBadge}>
            <span className={styles.techDot} />
            Tech Stack
          </span>
        </div> */}

        <LogoLoop
          logos={techLogos}
          speed={100}
          direction="left"
          logoHeight={60}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="var(--foreground-color)"
          ariaLabel="Technology partners"
          style={{ color: 'var(--background-color)' }}
        />
      </div>
    </section>
  );
}

