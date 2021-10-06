import styles from './BaseStyles.module.css';

function Footer() {
    return (
        <footer className={styles.principalFooter}>
            <div className={styles.section1}>
                <h3 className={styles.headH3}>Síguenos</h3>
                <div className={styles.content__footer_follow_icons}>
                    <a href="#"><i className={`${styles.foot_icon_follow} ${styles.footerFacebookicon} fab fa-facebook-f`}></i></a>
                    <a href="#"><i className={`${styles.foot_icon_follow} ${styles.footerInstagramicon} fab fa-instagram`}></i></a>
                    <a href="#"><i className={`${styles.foot_icon_follow} ${styles.footerTwittericon} fab fa-twitter`}></i></a>
                </div>
            </div>
            <div className={styles.section2}>
                <h3 className={styles.headH3}>Formas de pago</h3>
                <div className={styles.content__footer_payment_icons}>
                    <a href="#"><i className={`${styles.foot_icon_payment} fab fa-cc-paypal`}></i></a>
                    <a href="#"><i className={`${styles.foot_icon_payment} fab fa-cc-visa`}></i></a>
                    <a href="#"><i className={`${styles.foot_icon_payment} fab fa-cc-mastercard`}></i></a>
                    <a href="#"><i className={`${styles.foot_icon_payment} fab fa-cc-stripe`}></i></a>
                    <a href="#"><i className={`${styles.foot_icon_payment} fab fa-cc-amex`}></i></a>
                </div>
            </div>
            <div className={styles.section2a}>
                <a href="#">Home</a>
                <a href="#">Tienda</a>
                <a href="#">Nosotros</a>
                <a href="#">Blog</a>
                <a href="#">Contacto</a>
            </div>
            <div className={styles.section3}>
                <a href="#"><img className={styles.logoFooter} src="/images/logo.png" alt="logo"/></a>
                <p>© Eco-tías 2021 🌱</p>
            </div>
            <div className={styles.section4}>
                <h3 className={styles.headH3}>Enlaces rápidos</h3>
                <div className={styles.content__footer_links}>
                    <a href="#" className={styles.linkEffect}>Categoría uno</a>
                    <a href="#" className={styles.linkEffect}>Categoría dos</a>
                    <a href="#" className={styles.linkEffect}>Categoría tres</a>
                </div>
            </div>
            <div className={styles.section5}>
                <h3 className={styles.headH3}>Información</h3>
                <div className={styles.content__footer_links}>
                    <a href="#" className={styles.linkEffect}>Aviso de privacidad</a>
                    <a href="#" className={styles.linkEffect}>Formas de envío</a>
                    <a href="#" className={styles.linkEffect}>Políticas de compra</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;