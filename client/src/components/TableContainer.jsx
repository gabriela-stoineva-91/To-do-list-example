import Item from "./Item";
import Loader from "./Loader";
import styles from "./TableContainer.module.css"

import { useState, useEffect } from "react";

export default function TableContainer() {
    const [items, setItems] = useState([]);

    const baseUrl = 'http://localhost:3030/jsonstore/todos';


    const changeStatusHandler = (itemId) => {
        setItems(state => state.map(item => item._id === itemId ? { ...item, isCompleted: !item.isCompleted } : item));
    }
    useEffect(() => {
        fetch(baseUrl)
            .then(res => res.json())
            .then((data) => {
                setItems(Object.values(data))
            })
            .catch(err => console.log(err))
    }, [])



    return (
        <main className={styles["main"]}>
            <section className={styles["todo-list-container"]}>
                <h1>Todo List</h1>

                <div className={styles["add-btn-container"]}>

                    <button className="btn">
                        + Add new Todo</button>
                </div>

                <div className={styles["table-wrapper"]}>
                    <table className={styles["table"]}>

                        <thead>
                            <tr>
                                <th className={styles["table-header-task"]}>Task</th>
                                <th className={styles["table-header-status"]}>Status</th>
                                <th className={styles["table-header-action"]}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.length < 1
                             ? <Loader /> 
                             : items.map(item => (
                                <Item
                                    key={item._id}
                                    _id={item._id}
                                    text={item.text}
                                    isCompleted={item.isCompleted}
                                    changeStatusHandler={changeStatusHandler}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

        </main>

    )
}