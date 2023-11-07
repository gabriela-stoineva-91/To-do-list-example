import styles from './Item.module.css'

export default function Item({
    _id,
    text,
    isCompleted,
    changeStatusHandler,
}) {
    const onClickChange = () => {
        changeStatusHandler(_id)
    }
    
    return (
        <tr className={isCompleted? styles["is-completed"] : styles["todo"]}>
            <td>{text}</td>
            <td>{isCompleted ? 'Completed' : 'Incomplete'}</td>
            <td className={styles["todo-action"]}>
                <button onClick={onClickChange} className={styles["btn", "todo-btn"]}>Change status</button>
            </td>
        </tr>
    )
}