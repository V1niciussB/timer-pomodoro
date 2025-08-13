import { TimerIcon } from 'lucide-react';
import styles from './Logo.module.css';


export function Logo() {
  return (
    <div className={styles.logo}>
      <a className={styles.logoLink} href='#'>
        <TimerIcon />
        <span>TIMER</span>
      </a>
    </div>
  );
}
