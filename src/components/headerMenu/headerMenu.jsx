import styles from "./headerMenu.module.css"


export default function HeaderMenu () {

    return (
        <nav className={styles.menu}>
            <ul className={styles.menuList}>
                <li className={styles.menuItem}>Profile</li>
                <li className={styles.menuItem}>Log Out</li>
            </ul>
        </nav>
    )
}