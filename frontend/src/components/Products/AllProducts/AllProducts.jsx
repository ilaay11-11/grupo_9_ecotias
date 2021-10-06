import styles from './ProductList.module.css';

function AllProducts() {
    return (
        <main className={styles.mainArea}>
        <h2>TODOS LOS PRODUCTOS</h2>
        <div className={styles.productList_all}>
            {/* <% for(i=0; i < products.length; i++) {%> */}
            <div className={styles.product_individual}>
                {/* <a href="/productos/<%= products[i].id %>" className={styles.productLink}> */}
                <a href="/productos/" className={styles.productLink}>
                    <img src="/images/productImages/default.jpg" alt="producto"/>
                    {/* <img src="/images/productImages/<%= products[i].image ? products[i].image : 'default.jpg' %>" alt="producto"> */}
                    <p className={styles.product_name}>Nombre del producto</p>
                    {/* <p className={styles.product_name}><%= products[i].name%> </p> */}
                </a>
                    <p className={styles.price}>$123.12</p>
                    {/* <p className={styles.price}>$<%= products[i].price%> </p> */}
                <button className={styles.addCartButton} type="submit">Agregar al carrito</button>
            </div>
            {/* <% } %> */}
        </div>
    </main>
    );
}

export default AllProducts;