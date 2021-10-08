import styles from './Login.module.css';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <main>
        <div className={styles.login_content_full}>
            <div className={styles.login_banner}>
                <img src="/images/banner_login.jpg" alt="banner"/>
            </div>
            <div className={styles.login_content_essential}>
                <div className={styles.login_tittle}>
                    <h2>Ingresa a tu cuenta</h2>
                </div>
                <div className={styles.login_forms}>
                    <form action="/usuarios/login" method="POST">
                        <p className={styles.login_email_p}>Email: *
                            <input className={styles.login_input} type="email" name="email" placeholder="Ingrese su e-mail" required/>
                            {/* <input className="login_input" type="email" name="email" value="<%= locals.oldData ? oldData.email : null %>" placeholder="Ingrese su e-mail" required>
                            <% if (locals.errors && errors.email) { %>
                                <div className="text-danger">
                                    <%= errors.email.msg %>
                                </div>
                                <% } %> */}
                        </p>
                        <p className={styles.login_password_p}>
                            Password: *
                            <input className={styles.login_input} type="password" name="password" placeholder="Ingrese su contraseña" required/>
                        </p>
                        <p className={styles.login_recuerdame}>
                            <input type="checkbox" name="recuerdame"/>
                            Recuerdame
                        </p>
                        <p className={styles.login_ingresar_boton}>
                            <input type="submit" value="Ingresar"/>
                        </p>
                        <p className={styles.login_forgotpwd}>
                            <i className="far fa-question-circle"></i> <Link to="#">¿Olvidaste tu contraseña?</Link>
                        </p>
                        <p className={styles.login_noaccount}>
                            <i className={`far fa-user-circle`}></i> <Link to="/usuarios/register">¿No tienes una cuenta? Regístrate</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </main>
    );
}

export default Login;