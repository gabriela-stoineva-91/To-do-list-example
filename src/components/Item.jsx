import styles from './Item.module.css'

export default function Item() {
    return (
        <tr className={styles["todo"]}>
            <td>Vacuum floor</td>
            <td>Incomplete</td>
            <td className={styles["todo-action"]}>
                <button className={styles["btn todo-btn"]}>Change status</button>
            </td>
        </tr>
    )
}