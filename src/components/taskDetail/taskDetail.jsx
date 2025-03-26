import styles from "./taskDetail.module.css"
import { useParams, Link} from "react-router-dom"

export default function TaskDetail (props) {
    const {taskId} = useParams()
    const {tasks, setTasks} = props

    const task = tasks.find(task => task.id === taskId)

    const handleChange = (e) => {
        const newDescription = e.target.value
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                return {...task, description : newDescription}
            }
            return task
        })
        setTasks(updatedTasks)
    }

    return (
        <div className={styles.wrapper}>
            <Link to='/' className={styles.backLink}>&#x2715;</Link>
            {task ? (
                <>
                    <div className={styles.header}>
                        <h2 className={styles.title}>{task.title}</h2>
                    </div>

                    <textarea className={styles.description} onChange={handleChange}>{task.description || 'No description'}</textarea>
                </>
            ) : (
                <h2>Task with id "{taskId}" not found</h2>
            )}    
        </div>
    )
}