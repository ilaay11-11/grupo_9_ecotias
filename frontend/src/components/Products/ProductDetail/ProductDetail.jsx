import styles from './ProductDetail.module.css';

function ProductDetail() {
    return (
        <main>
            <div className= {styles.descripcion}>
                <div className={styles.imagenes}>      
                    <img src="/images/productImages/default.jpg" alt="imgproduct" className={styles.imagenprincipal}/>
                    <img src="/images/productImages/default.jpg" alt="imgproduct" className={styles.imagen2}/>
                    {/* <img src="/images/productImages/<%= productSelected.image ? productSelected.image : 'default.jpg' %>" id="imagen-principal">
                    <img src="/images/productImages/<%= productSelected.image ? productSelected.image : 'default.jpg' %>" id="imagen2"> */}
                </div>
                
                <div>
                    <h2 className={styles.descripcionproducto}>Nombre del producto</h2>
                    <h2 className={styles.descripcionproducto}>$123.12</h2>
                    {/* <h2 className="{styles.descripcionproducto}"><%= productSelected.name %></h2>
                    <h2 className="{styles.descripcionproducto}">$<%= productSelected.price %></h2> */}

                    <div className={styles.inputgroup}>
                        <input type="button" value="-" className={styles.buttonminus} data-field="quantity"/>
                        <input type="number" step="1" max="" value="1" name="quantity" className={styles.quantity_field}/>
                        <input type="button" value="+" className={styles.buttonplus} data-field="quantity"/>
                    </div>
                    <div className={styles.agregarCart}>
                        <input type="button" value="AGREGAR AL CARRITO" className={styles.agregar}/>
                    </div>
                    

                <h3 className={styles.descripcionproducto}>Categoria:</h3>
                    <p className={styles.descripcionproducto}>
                        Nombre de la categoría
                    </p>
                    {/* <p className="{styles.descripcionproducto}">
                        <%= productSelected.category.name %>
                    </p> */}
                <h3 className={styles.descripcionproducto}>Fabricante:</h3>
                    <p className={styles.descripcionproducto}>
                        Nombre del fabricante
                    </p>
                    {/* <p className="{styles.descripcionproducto}">
                        <%= productSelected.maker.name %>
                    </p> */}
                <h3 className={styles.descripcionproducto}>Descripción:</h3>
                    <p className={styles.descripcionproducto}>
                        Descripción del producto
                    </p>
                    {/* <p className="{styles.descripcionproducto}">
                        <%= productSelected.description %>
                    </p> */}
                <h3 className={styles.descripcionproducto}>Ingredientes:</h3>
                    <p className={styles.descripcionproducto}>SCI (Sodium Cocoyl Isethionate), Harina de Avena, Proteína de Chícharo,
                        Manteca de Cacao, Agua de Rosas, Aceite de Almendras, y Cacao en Polvo.
                    </p>
                <h3 className={styles.descripcionproducto}>Contenido: 100g</h3>

                <h3 className={styles.descripcionproducto}>Modo de uso:</h3>
                    <p className={styles.descripcionproducto}>
                        Humedece tu cabello y aplica directamente. Masajea, y luego enjuaga.
                        Tras su uso, enjuaga tu sólido y colócalo en un lugar seco, fresco, y lejos del sol.
                    </p>
                </div>

                            
            </div>
            <div className={styles.reviews}>
                <h3>CUSTOMER REVIEWS</h3>
                <p className={styles.t_reviews}>
                    "Realmente hidrata el cabello y su aroma es delicioso.
                    Lo recomiendo ampliamente."
                </p>
                <input type="button" value="Write a Review" className={styles.write_r}/>

            </div>

            <div className={styles.ttpi}>
                <h2>TAMBIÉN TE PUEDE INTERESAR</h2>
            </div>
            <section className={styles.section_slider_pd}>
                <img className={styles.img_slider_pd} src="/images/sliderimg.jpg" alt="slider-imgage"/>
            </section>
            
            <div className={styles.b_regresar}>
            <input type="button" value=" ⇦ REGRESAR"/>
            </div>
        </main>
    );
}

export default ProductDetail;