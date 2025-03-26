import styles from "./header.module.css"
import avatar from "../../assets/user-avatar.svg"
import arrowDown from "../../assets/arrow-down.svg"
import arrowUp from "../../assets/arrow-up.svg"
import { useState } from "react"
import HeaderMenu from "../headerMenu/headerMenu"

export default function Header () {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Awesome Kanban Board</h1>

            <div className="menu">
                <img className={styles.avatar} src={avatar} alt="avatar" />

                <button className = {styles.button} onClick = {handleMenuClick}>
                    {isMenuOpen && <img className = {styles.arrowUp} src={arrowUp} alt='arrow up' />}
                    {!isMenuOpen && <img className = {styles.arrowDown} src={arrowDown} alt='arrow down' />}
                </button>
                {isMenuOpen && <HeaderMenu />}
            </div>
        </header>
    )
}