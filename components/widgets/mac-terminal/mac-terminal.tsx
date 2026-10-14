'use client'
import { useEffect, useState } from 'react'
// import frames from '@/data/cat-frames.json'
import styles from './mac-terminal.module.css'

export default function MacTerminal() {
  const [hover, setHover] = useState(false)
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    if (!hover) {
      setFrame(0)
      return
    }
    const id = setInterval(() => {
      setFrame((n) => (n + 1) % frames.length)
    }, 90) // ms por quadro: menor = mais rápido
    return () => clearInterval(id)
  }, [hover])

  return (
    <div
      className={styles.window}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={styles.titlebar}>
        <span className={`${styles.dot} ${styles.red}`} />
        <span className={`${styles.dot} ${styles.yellow}`} />
        <span className={`${styles.dot} ${styles.green}`} />
        <span className={styles.title}>guilherme — zsh</span>
      </div>

      <div className={styles.body}>
        <p><span className={styles.prompt}>~ $</span> whoami</p>
        <p className={styles.out}>Desenvolvedor · direito, software e automação</p>
        <p><span className={styles.prompt}>~ $</span> ls stack/</p>
        <p className={styles.out}>node/ adonis/ n8n/ next/</p>

        <pre className={`${styles.ascii} ${hover ? styles.visible : ''}`}>
          {/* {frames[frame]} */}
        </pre>
      </div>
    </div>
  )
}