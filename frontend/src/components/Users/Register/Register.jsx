import './Register.css'

function Register() {
    return (
        <main className="mainRegister">
    <div className="errores">
        <ul></ul>
    </div>

        <div className="register_essential">
            <section className="errores">
                <ul></ul>
            </section>
            
            <form action="/usuarios" method="POST" className="campos" enctype="multipart/form-data" id="form">
                
                <div id="user_img">
                    <img id="photo" alt="User avatar" src="https://i.pinimg.com/564x/74/88/22/7488228009d153e94a00427f674d54bb.jpg"/>
                    <input type="file" name="userImage" id="user-image" accept="image/gif,image/jpeg,image/jpg,image/png" onchange="return fileValidation()"/>
                    <label for="user-image" id="choose">Elige una foto</label>
                </div>
                {/* <% if (locals.errors && errors.userImage) { %>
                    <p className="text-danger">
                        <%= errors.userImage.msg %>
                    </p>
                    <% } %>
                <% if (locals.errors && errors.first_name) { %>
                    <p className="text-danger">
                        <%= errors.first_name.msg %>
                    </p>
                    <% } %> */}
                <p className="c">
                    <input className="nombre" type="text" name="first_name" placeholder="Nombre(s)*"/>
                </p>
                {/* <p className="c">
                    <input className="<%= locals.errors && errors.first_name ? 'is-invalid' : 'nombre' %>" value="<%= locals.oldData ? oldData.first_name : null %>"
                    type="text" name="first_name" placeholder="Nombre(s)*">
                </p> */}
                {/* <% if (locals.errors && errors.last_name) { %>
                    <div className="text-danger">
                        <%= errors.last_name.msg %>
                    </div>
                    <% } %> */}
                <p className="c">
                    <input className="apellido" type="text" name="last_name" placeholder="Apellidos*"/>
                </p>
                {/* <p className="c">
                    <input className="<%= locals.errors && errors.last_name ? 'is-invalid' : 'apellido' %>" value="<%= locals.oldData ? oldData.last_name : null %>"
                    type="text" name="last_name" placeholder="Apellidos*">
                </p> */}
                {/* <% if (locals.errors && errors.email) { %>
                    <div className="text-danger">
                        <%= errors.email.msg %>
                    </div>
                    <% } %> */}
                <p className="c">
                    <input className="email" type="email" name="email" placeholder="Ingrese su e-mail*"/>
                </p>
                {/* <p className="c">
                    <input className="<%= locals.errors && errors.email ? 'is-invalid' : 'email' %>" value="<%= locals.oldData ? oldData.email : null %>"
                    type="email" name="email" placeholder="Ingrese su e-mail*">
                    </p> */}
                    {/* <% if (locals.errors && errors.password) { %>
                        <div className="text-danger">
                            <%= errors.password.msg %>
                        </div>
                        <% } %> */}
                <p className="c">
                    <input className="password" type="password" name="password" placeholder="Contraseña*" id="psswrd"/>
                </p>
                {/* <p className="c">
                    <input className="<%= locals.errors && errors.password ? 'is-invalid' : 'password' %>"
                    type="password" name="password" placeholder="Contraseña*" id="psswrd">
                </p> */}
                <div id="p-caract">
                <p>Mínimo 8 caracteres</p>
                </div>
                <div className="aceptar">
                    <input type="checkbox" />
                    <p>He leído y acepto los <a href="#Terminos">Términos y condiciones</a> y el <a href="#Aviso">Aviso de privacidad</a></p>
                </div>
                <div className="aceptar">
                    <input type="checkbox"/>
                    <p>Quiero recibir ofertas y promociones en mi correo electrónico</p>
                </div>
                <div id="button-registrar">
                    <button type="submit" id="b-r">REGISTRAR</button>
                </div>
                <div id="IS">
                    <p><a href="./login">¿Ya tienes cuenta? Inicia Sesión</a></p>
                </div>
            </form>
            
        </div>
        
    </main>
    );
}

export default Register;