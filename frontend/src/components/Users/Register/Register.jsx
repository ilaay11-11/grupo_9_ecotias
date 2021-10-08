import styles from './Register.module.css'
import { Link } from 'react-router-dom';

function Register() {
    return (
        <main className={styles.mainRegister}>
    <div className={styles.errores}>
        <ul></ul>
    </div>

        <div className={styles.register_essential}>
            <section className={styles.errores}>
                <ul></ul>
            </section>
            
            <form action="/usuarios" method="POST" className={styles.campos} enctype="multipart/form-data" id={styles.form}>
                
                <div id={styles.user_img}>
                    <img id={styles.photo} alt="User avatar" src="https://i.pinimg.com/564x/74/88/22/7488228009d153e94a00427f674d54bb.jpg"/>
                    <input type="file" name="userImage" id={styles.user_image} accept="image/gif,image/jpeg,image/jpg,image/png" onchange="return fileValidation()"/>
                    <label for="user-image" id={styles.choose}>Elige una foto</label>
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
                <p className={styles.c}>
                    <input className={styles.nombre} type="text" name="first_name" placeholder="Nombre(s)*"/>
                </p>
                {/* <p className="c">
                    <input className="<%= locals.errors && errors.first_name ? 'is_invalid' : 'nombre' %>" value="<%= locals.oldData ? oldData.first_name : null %>"
                    type="text" name="first_name" placeholder="Nombre(s)*">
                </p> */}
                {/* <% if (locals.errors && errors.last_name) { %>
                    <div className="text-danger">
                        <%= errors.last_name.msg %>
                    </div>
                    <% } %> */}
                <p className={styles.c}>
                    <input className={styles.apellido} type="text" name="last_name" placeholder="Apellidos*"/>
                </p>
                {/* <p className="c">
                    <input className="<%= locals.errors && errors.last_name ? 'is_invalid' : 'apellido' %>" value="<%= locals.oldData ? oldData.last_name : null %>"
                    type="text" name="last_name" placeholder="Apellidos*">
                </p> */}
                {/* <% if (locals.errors && errors.email) { %>
                    <div className="text-danger">
                        <%= errors.email.msg %>
                    </div>
                    <% } %> */}
                <p className={styles.c}>
                    <input className={styles.email} type="email" name="email" placeholder="Ingrese su e-mail*"/>
                </p>
                {/* <p className="c">
                    <input className="<%= locals.errors && errors.email ? 'is_invalid' : 'email' %>" value="<%= locals.oldData ? oldData.email : null %>"
                    type="email" name="email" placeholder="Ingrese su e-mail*">
                    </p> */}
                    {/* <% if (locals.errors && errors.password) { %>
                        <div className="text-danger">
                            <%= errors.password.msg %>
                        </div>
                        <% } %> */}
                <p className={styles.c}>
                    <input className={styles.password} type="password" name="password" placeholder="Contraseña*" id={styles.psswrd}/>
                </p>
                {/* <p className="c">
                    <input className="<%= locals.errors && errors.password ? 'is_invalid' : 'password' %>"
                    type="password" name="password" placeholder="Contraseña*" id="{styles.psswrd}">
                </p> */}
                <div id={styles.p_caract}>
                <p>Mínimo 8 caracteres</p>
                </div>
                <div className={styles.aceptar}>
                    <input type="checkbox" />
                    <p>He leído y acepto los <Link className={styles.registerLink} to="#Terminos">Términos y condiciones</Link> y el <Link className={styles.registerLink} to="#Aviso">Aviso de privacidad</Link></p>
                </div>
                <div className={styles.aceptar}>
                    <input type="checkbox"/>
                    <p>Quiero recibir ofertas y promociones en mi correo electrónico</p>
                </div>
                <div id={styles.button_registrar}>
                    <button type="submit" id={styles.b_r}>REGISTRAR</button>
                </div>
                <div id={styles.IS}>
                    <p><Link className={styles.registerLink} to="./login">¿Ya tienes cuenta? Inicia Sesión</Link></p>
                </div>
            </form>
            
        </div>
        
    </main>
    );
}

export default Register;