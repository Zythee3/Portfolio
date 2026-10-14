// components/BoardItem.tsx
import type { CSSProperties, ReactNode } from 'react'
import styles from './boardItem.module.css'

type Props = {
  x: number          // % da largura (0 a 100)
  y: number          // % da altura (0 a 100)
  rotate?: number    // graus
  z?: number         // camada
  children: ReactNode
}

export default function BoardItem({ x, y, rotate = 0, z = 1, children }: Props) {
  const style = {
    '--x': `${x}%`,
    '--y': `${y}%`,
    '--r': `${rotate}deg`,
    zIndex: z,
  } as CSSProperties

  return <div className={styles.item} style={style}>{children}</div>
}