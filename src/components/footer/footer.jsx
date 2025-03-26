import styles from "./footer.module.css"

export default function Footer (props) {
    const {activeTasks, finishedTasks} = props

    return (
        <footer className={styles.footer}>
            <div className={styles.counters}>
                <p className={styles.counter}>Active tasks: {activeTasks}</p>
                <p className={styles.counter}>Finished tasks: {finishedTasks}</p>
            </div>
            <div className={styles.copy}>Kanban board by Vlada Vorobyeva, 2025 </div>
        </footer>
    )
}