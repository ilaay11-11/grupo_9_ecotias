import styles from './EditUser.module.css';

function EditUser() {
    return (
        <main className={styles.mainEditUser}>
        <section className={styles.errores}>
            <ul></ul>

        </section>
        <div id={styles.main_container}>
            <div id={styles.editUser}>
                <h2>Editar usuario</h2>
            </div>
            
            <form action="/usuarios/userToEdit?_method=PUT" method="POST" enctype="multipart/form-data">
                <div className={styles.m_info}>
                    <label for="first_name">Nombre</label>
                    <input type="text" name="first_name" id={styles.nombre} />
                    {/* <input type="text" value="<%= userToEdit.name %>" name="first_name" id="{styles.nombre}" > */}
                </div>
                <div className={styles.m_info}>
                    <label for="last_name">Apellido</label>
                    <input type="text" name="last_name" id={styles.apellido}/>
                    {/* <input type="text" value="<%= userToEdit.last_name %>" name="last_name" id="{styles.apellido}"> */}
                </div>
                <div className={styles.m_info}>
                    <label for="email">Email</label>
                    <input type="email" name="email" id={styles.email}/>
                    {/* <input type="email" value="<%= userToEdit.email %>" name="email" id="{styles.email}"> */}
                </div>
                <div className={styles.m_info}>
                    <label for="password">Contraseña nueva</label>
                    <input type="password"  name="password" id={styles.password} minlenght="8" required/>
                    <span id={styles.caract8}>Mínimo 8 caracteres</span>
                </div>
                <div className={styles.m_info}>
                    <label for="newUserimage">Subir nueva imagen</label>
                    <input type="file" name="newUserimage" id={styles.newUserImage}/>
                </div>
                
                <div className={styles.buttonAction_save}>
                    <div className={styles.control}>
                        <button type="submit">Guardar usuario</button>
                    </div>
                </div>
            
        
            </form>
        <div className={styles.buttonAction_delete}>
            <div className={styles.control}>
                <form action="/usuarios/<%= userToEdit.id %>?_method=DELETE" method="POST">
                <button type="submit">Eliminar usuario</button>
                </form>
            </div>
        </div>

        </div>
        
    </main>
    );
}

export default EditUser;