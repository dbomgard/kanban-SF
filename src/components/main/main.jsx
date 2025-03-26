import styles from "./main.module.css"
import Board from "../board/board"
import TaskDetail from "../taskDetail/taskDetail"
import { Routes, Route } from "react-router-dom"

export default function Main (props) {
    return (
        <main className={styles.main}>
            <Routes>
                <Route exact path={"/"} element={ <Board {...props}/>}/>
                    
                <Route path={"/tasks/:taskId"} element={ <TaskDetail {...props}/>}/>
            </Routes>
        </main>
    )
}