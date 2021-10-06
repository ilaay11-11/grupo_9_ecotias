import './Profile.css'

function Profile() {
    return(
        <main className="mainProfile">
        <section className="glass">
            <div>
                <img src="/images/userImages/default.png" alt="usuario" classNameName="user-image"/>
            </div>
            <div>
                <h2>Mi perfil</h2>
            </div>
            <div className="datos">
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
            <div className="editar">
                <a href="/usuarios/edit">Editar Perfil</a>
            </div>
        </section>
    </main>
    );
}

export default Profile;