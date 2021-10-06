import './Home.css';

function Home() {
    return (
        <main className="principalHome">
        <section className="section_slider_home">
            <div className="sliderText">
                <h1>BIENVENIDOS A ECO-TÍAS</h1>
                <h2 className="section_title">La mejor tienda ecológica</h2>
            </div>
        </section>
        <section className="section_features_home">
            <div className="featureHome">
                <i className="fas fa-truck"></i>
                <h3>Envío a todo México y USA</h3>
                <p>Envíos gratis a partir de $599 con tiempos de entrega menor a 24 hrs.</p>
            </div>
            <div className="featureHome">
                <i className="fas fa-user-shield"></i>
                <h3>Compra protegida</h3>
                <p>Datos personales protegidos, entrega de producto garantizada.</p>
            </div>
            <div className="featureHome">
                <i className="far fa-life-ring"></i>
                <h3>Increíble servicio al cliente</h3>
                <p>Dispuestos a ayudarte las 24 horas todos los días.</p>
            </div>
        </section>
        <hr className="separator_dots"/>
        <section className="product_category">
            <h2 className="section_title">PRODUCTOS DE LATÓN</h2>
            <div className="productList_all">
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
        <hr className="separator_dots"/>
        <section className="product_category">
            <h2 className="section_title">PRODUCTOS DE ACERO</h2>
            <div className="productList_all">
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
        <section className="section_newsletter_home">
            <div className="newsletter_img">
                <img src="/images/deal-hero.png" alt="newsletter"/>
            </div>
            <div className="newsletter_info">
                <p className="suscribe_text">Suscríbete a nuestro newsletter y recibe ofertas exclusivas en tu email</p>
                <input className="enterEmail" type="text" placeholder="Escribe tu email" required/>
                <p>
                    <button className="buttonNewsletter" type="submit">Enviar</button>
                </p>
            </div>
        </section>
        <section className="product_category">
            <h2 className="section_title">PRODUCTOS DE GRANITO</h2>
            <div className="productList_all">
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
        <hr className="separator_dots"/>
        <br/>
        <section className="section_blog_home">            
            <h2 className="section_title">¡VISITA NUESTRO BLOG!</h2>
            <div className="latest_blogposts">
                <div className="entradaBlog">
                    <a href="#"><img src="/images/blogimg_example.jpg" alt="producto"/></a>
                    <h3>Entrada del blog</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices montes vitae <a href="#" className="blogLink">[Leer más...]</a></p>
                </div>
                <div className="entradaBlog">
                    <a href="#"><img src="/images/blogimg_example.jpg" alt="producto"/></a>
                    <h3>Entrada del blog</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices montes vitae <a href="#" className="blogLink">[Leer más...]</a></p>
                </div>
                <div className="entradaBlog">
                    <a href="#"><img src="/images/blogimg_example.jpg" alt="producto"/></a>
                    <h3>Entrada del blog</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices montes vitae <a href="#" className="blogLink">[Leer más...]</a></p>
                </div>
            </div>
        </section>
    </main>
    );
}

export default Home;