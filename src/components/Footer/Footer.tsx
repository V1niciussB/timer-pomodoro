import styles from "./Footer.module.css";
import { RouterLink } from "../RouterLink/RouterLink";

export function Footer() {
    return(
        <footer className={styles.footer}>
            <RouterLink href="/about-pomodoro/"> Entenda como funciona a técnica pomodoro </RouterLink>
            <RouterLink href="/"> Timer Pomodoro &copy; {new Date().getUTCFullYear()} - Feito por Vinicius Barbosa </RouterLink>
        </footer>
    );
}