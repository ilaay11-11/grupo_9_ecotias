import styles from './BaseStyles.module.css';
import {Link} from "react-router-dom";

function Header() {
    return (
        <header>
            <div className={styles.topbar_header}>
                <p className={styles.textSlider}>Envíos gratis a partir de $599</p>
                <div className={styles.content__header_follow_icons}>
                    <Link to="#"><i className={`${styles.head_icon_follow} ${styles.headerFacebookicon} fab fa-facebook-square`}></i></Link>
                    <Link to="#"><i className={`${styles.head_icon_follow} ${styles.headerInstagramicon} fab fa-instagram-square`}></i></Link>
                    <Link to="#"><i className={`${styles.head_icon_follow} ${styles.headerTwittericon} fab fa-twitter-square`}></i></Link>
                </div>
            </div>
    {/* <!-- ---------------- Navegación mobile ---------------- --> */}
            <div className={styles.nav_mobile}>
                <div className={styles.main_nav_mobile}>
                    <div className={styles.menu_icon}>
                        <label for="show-nav">
                            <i className={`fas fa-bars`}></i>
                        </label>
                    </div>
                    <div>
                        <Link to="/">
                            <img className={styles.logo_header} src="/images/logo.png" alt="logo" />
                        </Link>
                    </div>
                    <div className={styles.cart_status}>
                        <Link to="/carrito"><i className={`fas fa-shopping-cart`}></i></Link>
                        <p>40</p>
                    </div>
                </div>
            <input className={styles.checkboxNav} type="checkbox" id="show-nav" hidden />
                <ul className={styles.menu_items}>
                    {/* <% if(locals.isLogged) {%>
                    <li type="none"> <Link id="loging_option" className="{styles.linkEffect}" to="/usuarios/profile"> <img src="/images/userImages/<%= locals.userLogged.image ? locals.userLogged.image : 'default.png' %>" width="25" height="25" style="border-radius: 100%;"> ¡Bienvenidx!, <%= locals.userLogged.first_name%></Link></li />
                    <li type="none"> <Link id="loging_option" className="{styles.linkEffect}" to="/usuarios/logout">Salir<i className="fas fa-sign-in-alt"></i></Link></li></li>
                        <%} else {%>
                        <%}%> */}
                    <li type="none"><Link id={styles.loging_option} to="/usuarios/login"><i className={`fas fa-sign-in-alt`}></i> Registrate / Inicia sesión</Link></li>
                    <li type="none" className={styles.buscarNav}>
                        <input type="text" placeholder="Buscar..." />
                        <Link className={styles.botonBuscarNav} to="#"><i className={`fas fa-search`}></i></Link>
                    </li>
                    <li type="none"><Link to="/">INICIO</Link></li>
                    <li type="none"><Link to="/productos">TIENDA</Link></li>
                    <li type="none"><Link to="/productos/crear">CREAR</Link></li>
                    <li type="none"><Link to="#Blog">BLOG</Link></li>
                    <li type="none"><Link to="#Contact">CONTACTO</Link></li>
                </ul>
            </div>
    {/* <!-- ---------------- Navegación normal ---------------- --> */}
            <div className={styles.nav_normal}>
                <nav className={styles.menu_normal}>
                    <ul className={styles.menu_items_normal}>
                        <li type="none"><Link className={styles.linkEffect} to="/">INICIO</Link></li>
                        <li type="none"><Link className={styles.linkEffect} to="/productos">TIENDA</Link></li>
                        <li type="none"><Link className={styles.linkEffect} to="/productos/crear">CREAR</Link></li>
                        <li type="none"><Link className={styles.linkEffect} to="/usuarios/edituser">BLOG</Link></li>
                        <li type="none"><Link className={styles.linkEffect} to="/usuarios/profile">CONTACTO</Link></li>
                    </ul>
                </nav>
                <div>
                    <Link to="/">
                        <img className={styles.logo_header} src="/images/logo.png" alt="logo" />
                    </Link>
                </div>
                <div className={styles.login_search}>
                    {/* <% if(locals.isLogged) {%>
                    <Link id="loging_option_normal" className="{styles.linkEffect}" className="nueva" to="/usuarios/profile"> <img src="/images/userImages/<%= locals.userLogged.image ? locals.userLogged.image : 'default.png' %>" width="30" height="30" style="border-radius: 100%;"> !Bienvenido! <%= locals.userLogged.first_name%></a />
                    <%} else {%>
                    <%}%> */}
                    <Link id={styles.loging_option_normal} className={styles.linkEffect} to="/usuarios/login">Registrate / Inicia sesión <i className={`fas fa-sign-in-alt`}></i></Link>
                    <div className={styles.searchBar}>
                        <input type="text" placeholder="Buscar..." />
                        <Link className={styles.botonBuscarNav} to="#"><i className={`fas fa-search`}></i></Link>
                    </div>
                </div>

                <div className={styles.cart_status}>
                    <Link to="/carrito"><i className={`fas fa-shopping-cart`}></i></Link>
                    <p>40</p>
                </div>
                {/* <% if(locals.isLogged) {%>
                    <Link id="loging_option_normal" className="{styles.linkEffect}" to="/usuarios/logout">Salir<i className="fas fa-sign-in-alt"></i></Link>
                <%}%> */}
            </div>

        </header>
    );
}

export default Header;