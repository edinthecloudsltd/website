import { FaMoon, FaSun } from 'react-icons/fa';

import styles from './theme-switch.module.css';

export const ThemeToggle: React.FC = () => {
  return (
    <section className={styles.container}>
      <input className={styles.checkbox} type="checkbox" id="checkbox" />
      <label className={styles.label} htmlFor="checkbox">
        <FaMoon className={styles.faMoon} />
        <FaSun className={styles.faSun} />
        <div className={styles.ball}></div>
      </label>
    </section>
  );
};
