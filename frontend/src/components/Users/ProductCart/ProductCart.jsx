import styles from './ProductCart2.module.css'
import { Link } from 'react-router-dom';

function ProductCart() {
    return (
    <main>
            <div className={styles.titulopagina}>
                <h1>CARRITO DE COMPRA</h1>
                <Link to="/productos">SEGUIR COMPRANDO</Link>
            </div>
            <div className={styles.titulotabla}>
                <h4>PRODUCTO</h4>
                <h4 id={styles.precio}>PRECIO</h4>
                <h4>CANTIDAD</h4>
                <h4>TOTAL</h4>
            </div>
            <div className={styles.item}>
                <img src="/images/producto_muestra.jpg" alt="producto muestra" className={styles.imagenes}/>
                <div className={styles.componentes}>
                    <h5 className={styles.nombreitem}>Shampoo Romero</h5>
                    <h6 className={styles.preciounitario}>$180.00 MXN</h6>
                    <div className={styles.inputgroup}>
                        <input type="button" value="-" className={styles.buttonminus} data-field="quantity"/>
                        <input type="number" step="1" max="" value="1" name="quantity" className={styles.quantityfield}/>
                        <input type="button" value="+" className={styles.buttonplus} data-field="quantity"/>
                    </div>
                </div>
                
                <h5 className={styles.totalp}>$180.00</h5>

            </div>
            <div className={styles.item2}>
                <img src="/images/producto_muestra.jpg" alt="producto muestra" className={styles.imagenes}/>
                <div className={styles.componentes}>
                    <h5 className={styles.nombreitem} id={styles.mandarina}> Shampoo Mandarina</h5>
                    <h6 className={styles.preciounitario}>$180.00 MXN</h6>
                    <div className={styles.inputgroup}>
                        <input type="button" value="-" className={styles.buttonminus} data-field="quantity"/>
                        <input type="number" step="1" max="" value="1" name="quantity" className={styles.quantityfield}/>
                        <input type="button" value="+" className={styles.buttonplus} data-field="quantity"/>
                    </div>
                </div>
                <h5 className={styles.totalp}>$180.00</h5>

            </div>
            <div className={styles.item3}>
                <img src="/images/producto_muestra.jpg" alt="producto muestra" className={styles.imagenes}/>
                <div className={styles.componentes}>
                    <h5 className={styles.nombreitem}>Shampoo Rizos</h5>
                    <h6 className={styles.preciounitario}>$180.00 MXN</h6>
                    <div className={styles.inputgroup}>
                        <input type="button" value="-" className={styles.buttonminus} data-field="quantity"/>
                        <input type="number" step="1" max="" value="1" name="quantity" className={styles.quantityfield}/>
                        <input type="button" value="+" className={styles.buttonplus} data-field="quantity"/>
                    </div>
                </div>
                <h5 className={styles.totalp}>$180.00</h5>
            </div>
            <div className={styles.pietabla}>
                <div className={styles.agregarnota}>
                    <h6>AGREGAR UNA NOTA</h6>
                    <input className={styles.cartInput} type="text"/>
                    <input className={styles.cartInput} type="button" value="AGREGAR"/>
                </div>
                
                <div className={styles.subtotal}>
                    <h3>SUBTOTAL $720</h3>
                    
                    <input className={styles.cartInput} type="button" value="FINALIZAR COMPRA"/>
                </div>

            </div>
    </main>
    );
}

export default ProductCart;