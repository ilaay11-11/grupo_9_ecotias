import styles from './Home.module.css';
import { Link } from "react-router-dom";
// import { useState, useEffect } from 'react'
import IndividualProductbyCategory from '../Products/IndividualProductbyCategory/IndividualProductbyCategory';

function Home() {
    return (
        <main className={styles.principalHome}>
        <section className={styles.section_slider_home}>
            <div className={styles.sliderText}>
                <h1>BIENVENIDOS A ECO-TÍAS</h1>
                <h2 className={styles.section_title}>La mejor tienda ecológica</h2>
            </div>
        </section>
        <section className={styles.section_features_home}>
            <div className={styles.featureHome}>
                <i className={`fas fa-truck`}></i>
                <h3>Envío a todo México y USA</h3>
                <p>Envíos gratis a partir de $599 con tiempos de entrega menor a 24 hrs.</p>
            </div>
            <div className={styles.featureHome}>
                <i className={`fas fa-user-shield`}></i>
                <h3>Compra protegida</h3>
                <p>Datos personales protegidos, entrega de producto garantizada.</p>
            </div>
            <div className={styles.featureHome}>
                <i className={`far fa-life-ring`}></i>
                <h3>Increíble servicio al cliente</h3>
                <p>Dispuestos a ayudarte las 24 horas todos los días.</p>
            </div>
        </section>
        <hr className={styles.separator_dots}/>
        <section className={styles.product_category}>
            <h2 className={styles.section_title}>PRODUCTOS DE LATÓN</h2>
            <IndividualProductbyCategory id='4' />
        </section>
        <br/>
        <hr className={styles.separator_dots}/>
        <section className={styles.product_category}>
            <h2 className={styles.section_title}>PRODUCTOS DE ACERO</h2>
            <IndividualProductbyCategory id='6' />
        </section>
        <section className={styles.section_newsletter_home}>
            <div className={styles.newsletter_img}>
                <img src="/images/deal-hero.png" alt="newsletter"/>
            </div>
            <div className={styles.newsletter_info}>
                <p className={styles.suscribe_text}>Suscríbete a nuestro newsletter y recibe ofertas exclusivas en tu email</p>
                <input className={styles.enterEmail} type="text" placeholder="Escribe tu email" required/>
                <p>
                    <button className={styles.buttonNewsletter} type="submit">Enviar</button>
                </p>
            </div>
        </section>
        <section className={styles.product_category}>
            <h2 className={styles.section_title}>PRODUCTOS DE GRANITO</h2>
            <IndividualProductbyCategory id='1' />
        </section>
        <hr className={styles.separator_dots}/>
        <br/>
        <section className={styles.section_blog_home}>            
            <h2 className={styles.section_title}>¡VISITA NUESTRO BLOG!</h2>
            <div className={styles.latest_blogposts}>
                <div className={styles.entradaBlog}>
                    <Link to="#"><img src="/images/blogimg_example.jpg" alt="producto"/></Link>
                    <h3>Entrada del blog</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices montes vitae <Link to="#" className={styles.blogLink}>[Leer más...]</Link></p>
                </div>
                <div className={styles.entradaBlog}>
                    <Link to="#"><img src="/images/blogimg_example.jpg" alt="producto"/></Link>
                    <h3>Entrada del blog</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices montes vitae <Link to="#" className={styles.blogLink}>[Leer más...]</Link></p>
                </div>
                <div className={styles.entradaBlog}>
                    <Link to="#"><img src="/images/blogimg_example.jpg" alt="producto"/></Link>
                    <h3>Entrada del blog</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices montes vitae <Link to="#" className={styles.blogLink}>[Leer más...]</Link></p>
                </div>
            </div>
        </section>
    </main>
    );
}

export default Home;