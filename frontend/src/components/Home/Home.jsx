import styles from './Home.module.css';

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
            <div className={styles.productList_all}>
            <div className={styles.product_individual}>
                    <a href="/productos/<%= brassProducts[i].id %>" className={styles.productLink}>
                        <img src="/images/productImages/default.jpg" alt="producto"/>
                        <p className={styles.product_name}>Nombre del producto </p>
                    </a>
                        <p className={styles.price}>$123.12</p>
                    <button className={styles.addCartButton} type="submit">Agregar al carrito</button>
                </div>
            <div className={styles.product_individual}>
                    <a href="/productos/<%= brassProducts[i].id %>" className={styles.productLink}>
                        <img src="/images/productImages/default.jpg" alt="producto"/>
                        <p className={styles.product_name}>Nombre del producto </p>
                    </a>
                        <p className={styles.price}>$123.12</p>
                    <button className={styles.addCartButton} type="submit">Agregar al carrito</button>
                </div>
            <div className={styles.product_individual}>
                    <a href="/productos/<%= brassProducts[i].id %>" className={styles.productLink}>
                        <img src="/images/productImages/default.jpg" alt="producto"/>
                        <p className={styles.product_name}>Nombre del producto </p>
                    </a>
                        <p className={styles.price}>$123.12</p>
                    <button className={styles.addCartButton} type="submit">Agregar al carrito</button>
                </div>
            <div className={styles.product_individual}>
                    <a href="/productos/<%= brassProducts[i].id %>" className={styles.productLink}>
                        <img src="/images/productImages/default.jpg" alt="producto"/>
                        <p className={styles.product_name}>Nombre del producto </p>
                    </a>
                        <p className={styles.price}>$123.12</p>
                    <button className={styles.addCartButton} type="submit">Agregar al carrito</button>
                </div>
            <div className={styles.product_individual}>
                    <a href="/productos/<%= brassProducts[i].id %>" className={styles.productLink}>
                        <img src="/images/productImages/default.jpg" alt="producto"/>
                        <p className={styles.product_name}>Nombre del producto </p>
                    </a>
                        <p className={styles.price}>$123.12</p>
                    <button className={styles.addCartButton} type="submit">Agregar al carrito</button>
                </div>
                {/* <% for(i=0; i < brassProducts.length; i++) {%>
                <div className="product_individual">
                    <a href="/productos/<%= brassProducts[i].id %>" className="productLink">
                        <img src="/images/productImages/<%= brassProducts[i].image ? brassProducts[i].image : 'default.jpg' %> " alt="producto">
                        <p className="product_name"><%= brassProducts[i].name%> </p>
                    </a>
                        <p className="price">$<%= brassProducts[i].price%> </p>
                    <button className="addCartButton" type="submit">Agregar al carrito</button>
                </div>
                <% } %> */}
            </div>
        </section>
        <br/>
        <hr className={styles.separator_dots}/>
        <section className={styles.product_category}>
            <h2 className={styles.section_title}>PRODUCTOS DE ACERO</h2>
            <div className={styles.productList_all}>
                {/* <% for(i=0; i < steelProducts.length; i++) {%>
                <div className="product_individual">
                    <a href="/productos/<%= steelProducts[i].id %>" className="productLink">
                        <img src="/images/productImages/<%= steelProducts[i].image ? steelProducts[i].image : 'default.jpg' %>" alt="producto">
                        <p className="product_name"><%= steelProducts[i].name%> </p>
                    </a>
                        <p className="price">$<%= steelProducts[i].price%> </p>
                    <button className="addCartButton" type="submit">Agregar al carrito</button>
                </div>
                <% } %> */}
            </div>
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
            <div className={styles.productList_all}>
                {/* <% for(i=0; i < graniteProducts.length; i++) {%>
                <div className="product_individual">
                    <a href="/productos/<%= graniteProducts[i].id %>" className="productLink">
                        <img src="/images/productImages/<%= graniteProducts[i].image ? graniteProducts[i].image : 'default.jpg' %>" alt="producto">
                        <p className="product_name"><%= graniteProducts[i].name%> </p>
                    </a>
                        <p className="price">$<%= graniteProducts[i].price%> </p>
                    <button className="addCartButton" type="submit">Agregar al carrito</button>
                </div>
                <% } %> */}
            </div>
        </section>
        <hr className={styles.separator_dots}/>
        <br/>
        <section className={styles.section_blog_home}>            
            <h2 className={styles.section_title}>¡VISITA NUESTRO BLOG!</h2>
            <div className={styles.latest_blogposts}>
                <div className={styles.entradaBlog}>
                    <a href="#"><img src="/images/blogimg_example.jpg" alt="producto"/></a>
                    <h3>Entrada del blog</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices montes vitae <a href="#" className={styles.blogLink}>[Leer más...]</a></p>
                </div>
                <div className={styles.entradaBlog}>
                    <a href="#"><img src="/images/blogimg_example.jpg" alt="producto"/></a>
                    <h3>Entrada del blog</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices montes vitae <a href="#" className={styles.blogLink}>[Leer más...]</a></p>
                </div>
                <div className={styles.entradaBlog}>
                    <a href="#"><img src="/images/blogimg_example.jpg" alt="producto"/></a>
                    <h3>Entrada del blog</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices montes vitae <a href="#" className={styles.blogLink}>[Leer más...]</a></p>
                </div>
            </div>
        </section>
    </main>
    );
}

export default Home;