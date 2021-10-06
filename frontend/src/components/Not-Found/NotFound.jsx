import styles from './NotFound.module.css'

function NotFound() {
    return(
        <main className={styles.mainNotFound}>
            <h1>Oops!</h1>
            <p><i class={`${styles.triangleIcon} fas fa-exclamation-triangle`}></i></p>
            <h2>Error 404</h2>
            <h2>Página no encontrada</h2>
        </main>
    );
}

export default NotFound;