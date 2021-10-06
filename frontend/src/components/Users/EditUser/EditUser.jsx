import './EditUser.css';

function EditUser() {
    return (
        <main className="mainEditUser">
        <section className="errores">
            <ul></ul>

        </section>
        <div id="main-container">
            <div id="editUser">
                <h2>Editar usuario</h2>
            </div>
            
            <form action="/usuarios/userToEdit?_method=PUT" method="POST" enctype="multipart/form-data">
                <div className="m-info">
                    <label for="first_name">Nombre</label>
                    <input type="text" name="first_name" id="nombre" />
                    {/* <input type="text" value="<%= userToEdit.name %>" name="first_name" id="nombre" > */}
                </div>
                <div className="m-info">
                    <label for="last_name">Apellido</label>
                    <input type="text" name="last_name" id="apellido"/>
                    {/* <input type="text" value="<%= userToEdit.last_name %>" name="last_name" id="apellido"> */}
                </div>
                <div className="m-info">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email"/>
                    {/* <input type="email" value="<%= userToEdit.email %>" name="email" id="email"> */}
                </div>
                <div className="m-info">
                    <label for="password">Contraseña nueva</label>
                    <input type="password"  name="password" id="password" minlenght="8" required/>
                    <span id="caract8">Mínimo 8 caracteres</span>
                </div>
                <div className="m-info">
                    <label for="newUserimage">Subir nueva imagen</label>
                    <input type="file" name="newUserimage" id="newUserImage"/>
                </div>
                
                <div className="buttonAction_save">
                    <div className="control">
                        <button type="submit">Guardar usuario</button>
                    </div>
                </div>
            
        
            </form>
        <div className="buttonAction_delete">
            <div className="control">
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