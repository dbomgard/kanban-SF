import styles from "./list.module.css"
import { LIST_TYPES } from "../../config"
import { useState } from "react"
import FormAddNewTask from "../forms/FormAddNewTask"
import { Link } from "react-router-dom"

export default function List (props) {
    const {type, title, allTasks, listTasks, addNewTask, handleChange} = props
    const [isFormVisible, setFormVisible] = useState(false)

    const handleAddClick = () => {
        setFormVisible(!isFormVisible)
    }

    const isPreviousListEmpty = () => {
        const currentIndex = Object.values(LIST_TYPES).indexOf(type);
        for (let i = 0; i < currentIndex; i++) {
            const previousType = Object.values(LIST_TYPES)[i];
            const hasTasks = allTasks.some(task => task.status === previousType);
            if (hasTasks) {
                return false; 
            }
        }
        return true; 
    };

    const isDisabled = type !== LIST_TYPES.BACKLOG && isPreviousListEmpty();

    return (
        <div className={styles.list}>
            <h2 className={styles.listTitle}>{title}</h2>

            {listTasks.map(task => (
                <Link to={`/tasks/${task.id}`} key={task.id} className={styles.taskLink}>
                    <div className={styles.task}>{task.title}</div>
                </Link>
            ))}

            
            <button className={styles.addButton} onClick={handleAddClick} disabled = {isDisabled}>+ Add card</button>
            
            { isFormVisible && ( 
                <> 
                    { type === LIST_TYPES.BACKLOG && 
                <FormAddNewTask addNewTask = {addNewTask} setFormVisible = {setFormVisible}/> }
                </>
            )}


            <div className={styles.selectWrapper}>
                {isFormVisible && Object.values(LIST_TYPES).indexOf(type) > 0 && (
                        <select className={styles.select} onChange={handleChange}>
                            <option>Select task</option>
                            {allTasks
                            .filter(task => Object.values(LIST_TYPES).indexOf(task.status) < Object.values(LIST_TYPES).indexOf(type))
                            .map(task => (
                                <option className={styles.option} key={task.id} value={task.id}>{task.title}</option>
                            ))}
                        </select>
                    )}
            </div>
        </div>
    )
}