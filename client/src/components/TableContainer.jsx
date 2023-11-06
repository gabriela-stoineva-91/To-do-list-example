import Item from "./Item";
import Loader from "./Loader";
import styles from "./TableContainer.module.css"

export default function TableContainer() {
    const []


    const baseUrl = 'http://localhost:3030/jsonstore';

    
    return (
        <main className={styles["main"]}>
                <section className={styles["todo-list-container"]}>
                    <h1>Todo List</h1>

                    <div className={styles["add-btn-container"]}>
                        <button className="btn">+ Add new Todo</button>
                    </div>

                    <div className={styles["table-wrapper"]}>

                        {/* <!-- Loading spinner - show the load spinner when fetching the data from the server--> */}
                        <Loader />

                        <table className={styles["table"]}>
                            <thead>
                                <tr>
                                    <th className={styles["table-header-task"]}>Task</th>
                                    <th className={styles["table-header-status"]}>Status</th>
                                    <th className={styles["table-header-action"]}>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                <Item />

                            </tbody>
                        </table>
                    </div>
                </section>

        </main>

    )
}