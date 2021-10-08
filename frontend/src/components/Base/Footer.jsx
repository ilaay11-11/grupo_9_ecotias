import styles from './BaseStyles.module.css';
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer className={styles.principalFooter}>
            <div className={styles.section1}>
                <h3 className={styles.headH3}>Síguenos</h3>
                <div className={styles.content__footer_follow_icons}>
                    <Link to="#"><i className={`${styles.foot_icon_follow} ${styles.footerFacebookicon} fab fa-facebook-f`}></i></Link>
                    <Link to="#"><i className={`${styles.foot_icon_follow} ${styles.footerInstagramicon} fab fa-instagram`}></i></Link>
                    <Link to="#"><i className={`${styles.foot_icon_follow} ${styles.footerTwittericon} fab fa-twitter`}></i></Link>
                </div>
            </div>
            <div className={styles.section2}>
                <h3 className={styles.headH3}>Formas de pago</h3>
                <div className={styles.content__footer_payment_icons}>
                    <Link to="#"><i className={`${styles.foot_icon_payment} fab fa-cc-paypal`}></i></Link>
                    <Link to="#"><i className={`${styles.foot_icon_payment} fab fa-cc-visa`}></i></Link>
                    <Link to="#"><i className={`${styles.foot_icon_payment} fab fa-cc-mastercard`}></i></Link>
                    <Link to="#"><i className={`${styles.foot_icon_payment} fab fa-cc-stripe`}></i></Link>
                    <Link to="#"><i className={`${styles.foot_icon_payment} fab fa-cc-amex`}></i></Link>
                </div>
            </div>
            <div className={styles.section2a}>
                <Link to="/">Home</Link>
                <Link to="/productos">Tienda</Link>
                <Link to="#AboutUs">Nosotros</Link>
                <Link to="#Blog">Blog</Link>
                <Link to="#Contacto">Contacto</Link>
            </div>
            <div className={styles.section3}>
                <Link to="/"><img className={styles.logoFooter} src="/images/logo.png" alt="logo"/></Link>
                <p>© Eco-tías 2021 🌱</p>
            </div>
            <div className={styles.section4}>
                <h3 className={styles.headH3}>Enlaces rápidos</h3>
                <div className={styles.content__footer_links}>
                    <Link to="/productos" className={styles.linkEffect}>Tienda</Link>
                    <Link to="/productos/crear" className={styles.linkEffect}>Crear producto</Link>
                    <Link to="/usuarios/register" className={styles.linkEffect}>Regístrate</Link>
                </div>
            </div>
            <div className={styles.section5}>
                <h3 className={styles.headH3}>Información</h3>
                <div className={styles.content__footer_links}>
                    <Link to="#" className={styles.linkEffect}>Aviso de privacidad</Link>
                    <Link to="#" className={styles.linkEffect}>Formas de envío</Link>
                    <Link to="#" className={styles.linkEffect}>Políticas de compra</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;