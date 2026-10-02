'use client';

import dynamic from 'next/dynamic';
import CircularText from '@/components/ui/circular-text/circular-text';
import SplitText from '@/components/ui/split-text/split-text';
import styles from './hero.module.css';

// Carrega o Lanyard apenas no navegador (sem SSR)
const Lanyard = dynamic(() => import('@/components/widgets/lanyard/lanyard'), {
  ssr: false,
});

export default function Hero() {
  return (
    <section id="hero" className={styles.heroSection}>
      {/* O Canvas do Lanyard ocupa 100% da tela para não cortar ao ser arrastado */}
      <Lanyard
        position={[0, 0, 20]}
        gravity={[0, -40, 0]}
        anchorX={3.5}
        frontImage="/assets/lanyard/minha-foto.png"
        backImage="/assets/lanyard/meu-verso.jpg"
        lanyardImage="/assets/lanyard/images.jpg"
        imageFit="cover"
        lanyardWidth={0.7}
      />

      {/* Container de texto posicionado no lado direito */}
      <div className={styles.contentContainer}>
        <div className={styles.textCol}>
          <SplitText
            text="SISTEMAS QUE FAZEM SEU NEGÓCIO CRESCER"
            tag="h1"
            className={styles.nameHome}
            delay={50}
            duration={0.8}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            textAlign="left"
          />

          <SplitText
            text="Do design ao backend, eu desenvolvo produtos digitais que passam confiança, geram contatos e fazem a concorrência parecer ultrapassada."
            tag="h1"
            className={styles.bio}
            delay={50}
            duration={0.8}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            textAlign="left"
          />

          <div className={styles.circularTextWrapper}>
            <CircularText
              text="FULL STACK • DEV •"
              onHover="pause"
              spinDuration={20}
              className={styles.heroCircularText}
            />
          </div>
        </div>
      </div>
    </section>
  );
}


