import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import styles from './CountDown.module.css';

export function CountDown() {
  const { state } = useTaskContext();

  return (
    <div className={styles.container}>{state.formattedSecondsRemaining}</div>
  );
}
