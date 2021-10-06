import './Login.css'
function Login() {
    return (
        <main>
        <div className="login_content_full">
            <div className="login_banner">
                <img src="/images/banner_login.jpg" alt="banner"/>
            </div>
            <div className="login_content_essential">
                <div className="login_tittle">
                    <h2>Ingresa a tu cuenta</h2>
                </div>
                <div className="login_forms">
                    <form action="/usuarios/login" method="POST">
                        <p className="login_email_p">Email: *
                            <input className="login_input" type="email" name="email" placeholder="Ingrese su e-mail" required/>
                            {/* <input className="login_input" type="email" name="email" value="<%= locals.oldData ? oldData.email : null %>" placeholder="Ingrese su e-mail" required>
                            <% if (locals.errors && errors.email) { %>
                                <div className="text-danger">
                                    <%= errors.email.msg %>
                                </div>
                                <% } %> */}
                        </p>
                        <p className="login_password_p">
                            Password: *
                            <input className="login_input" type="password" name="password" placeholder="Ingrese su contraseña" required/>
                        </p>
                        <p className="login_recuerdame">
                            <input type="checkbox" name="recuerdame"/>
                            Recuerdame
                        </p>
                        <p className="login_ingresar_boton">
                            <input type="submit" value="Ingresar"/>
                        </p>
                        <p className="login_forgotpwd">
                            <i className="far fa-question-circle"></i> <a href="#">¿Olvidaste tu contraseña?</a>
                        </p>
                        <p className="login_noaccount">
                            <i className="far fa-user-circle"></i> <a href="/usuarios/register">¿No tienes una cuenta? Regístrate</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </main>
    );
}

export default Login;