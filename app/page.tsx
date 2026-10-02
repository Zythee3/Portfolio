import Hero from '@/components/sections/hero/hero';
import Work from '@/components/sections/work/work';
import styles from './page.module.css';
import CurveTransition from '@/components/widgets/curve-transition/curve-transition';
import About from '@/components/sections/about/about';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <CurveTransition />
      <Work />
      <About />

    </main>
  );
}
