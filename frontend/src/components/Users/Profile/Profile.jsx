import styles from './Profile.module.css'

function Profile() {
    return(
        <main className={styles.mainProfile}>
        <section className={styles.glass}>
            <div>
                <img src="/images/userImages/default.png" alt="usuario" className={styles.user_image}/>
            </div>
            <div>
                <h2>Mi perfil</h2>
            </div>
            <div className={styles.datos}>
                <h4>Nombre</h4>
                <p>Nombre de usuario</p>
                {/* <p><%= userProfile.name %></p> */}

                <h4>Apellido(s)</h4>
                <p>Apellido de usuario</p>
                {/* <p><%= userProfile.last_name %></p> */}

                <h4>Email:</h4>
                <p>Email de usuario</p>
                {/* <p><%= userProfile.email %></p> */}
            </div>
            <div className={styles.editar}>
                <a href="/usuarios/edit">Editar Perfil</a>
            </div>
        </section>
    </main>
    );
}

export default Profile;