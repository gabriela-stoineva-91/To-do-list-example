import styles from './Loader.module.css'

export default function Loader() {
    return (
        <div className={styles["loading-container"]}>
          <div className={styles["loading-spinner"]}>
            <span className={styles["loading-spinner-text"]}>Loading</span>
          </div>
        </div>
    )
}
