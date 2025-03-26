import { useState } from "react"
import styles from "./forms.module.css"
import clsx from "clsx"

export default function FormAddNewTask (props) {
    const {addNewTask, setFormVisible} = props
    const [values, setValues] = useState({
        title: " ",
        description: " "
    })

    const [error, setError] = useState('')

    const handleChange = (e) => {
        const fieldName = e.target.name
        setValues({...values, [fieldName]: e.target.value})

        if (error && fieldName === "title") {
            setError("")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (!values.title.trim()) {
            setError("Title is required")
            return;
        }
        addNewTask(values.title, values.description)
        setFormVisible(false)
    }
    

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input className={clsx(styles.input, {[styles.error]: error})}
            id = "taskTitle"
            name="title"
            type="text"
            placeholder="Enter task title"
            value={values.title}
            onChange={handleChange}
            />

            {error && <span className={styles.errorMessage}>{error}</span>}

            <textarea className={clsx(styles.input, styles.textarea)}
            id="taskDescription"
            name="description"
            placeholder="Enter task description"
            value={values.description}
            onChange={handleChange}
            />

            <button className={styles.submit} type="submit">Submit</button>
        </form>
    )
}