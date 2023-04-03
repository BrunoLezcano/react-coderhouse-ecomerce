import Cartwidget from "../CartWidget/Cartwidget";
import styles from "./Navbar.module.css";
import { LogoTitle } from "../LogoTitle/LogoTitle";
import { Button } from "@mui/material";

export const NavBar = () => {
    return (
        <nav className={styles.title}>
            <LogoTitle />
            <ul className={styles.ul}>
                <li>
                    <Button size="small" variant="text">
                        Cartucheras
                    </Button>
                </li>
                <li>
                    <Button size="small" variant="text">
                        Necessaire
                    </Button>
                </li>
                <li>
                    <Button size="small" variant="text">
                        Bolso
                    </Button>
                </li>
            </ul>
            <Cartwidget />
        </nav>
    );
};
