import styles from './EditProduct.module.css';

function EditProduct() {
    return (
        <main className={styles.mainEditProduct}>
        {/* <h2>Editar producto: <%= product.name %></h2> */}
        <h2>Editar producto: Nombre del producto</h2>
        <form action="/productos/<%= product.id %>?_method=PUT" method="POST" enctype="multipart/form-data">
            <div className={styles.crear_producto}>
                <div className={`${styles.field} ${styles.order1}`}>
                    <label for="name">Nombre</label>
                    <div className={styles.control}>
                        {/* <input type="text" name="name" className="input_info nombre" placeholder="Ej: Omeprazole" value="<%= product.name %>"> */}
                        <input type="text" name="name" className={`${styles.input_info} ${styles.nombre}`} placeholder="Ej: Omeprazole" value="product name"/>
                            <div className={`${styles.errores} ${styles.textdanger}`}>
                                <ul></ul>
                            </div>
                    </div>
                    {/* <% if (locals.errors && errors.name) { %>
                        <p className="textdanger">
                            <%= errors.name.msg %>
                        </p>
                        <% } %> */}
                </div>
                <div className={`${styles.field} ${styles.order2}`}>
                    <label for="category">Categoría</label>
                    <div className={styles.control}>
                        <select name="category">
                            <option value="categoria">Categoría uno</option>
                            {/* <% for( let i = 0; i < categories.length; i++ ) { %>
                                <% if (categories[i].id == product.category_id) { %>
                                    <option value="<%= categories[i].id %>" selected>
                                        <%= categories[i].name %>
                                    </option>
                                <% } else { %>
                                    <option value="<%= categories[i].id %>">
                                        <%= categories[i].name %>
                                    </option>
                                <% } %>
                            <% } %> */}
                        </select>
                    </div>
                </div>
                <div className={`${styles.field} ${styles.order3}`}>
                    <label for="maker">Fabricante</label>
                    <div className={styles.control}>
                        <select name="maker">
                        <option value="Facbricantee">Fabricante uno</option>
                            {/* <% for( let i = 0; i < makers.length; i++ ) { %>
                                <% if (makers[i].id == product.maker_id) { %>
                                    <option value="<%= makers[i].id %>" selected>
                                        <%= makers[i].name %> 
                                    </option>
                                <% } else { %>
                                    <option value="<%= makers[i].id %>">
                                        <%= makers[i].name %> 
                                    </option>
                                <% } %>
                            <% } %> */}
                        </select>
                    </div>
                </div>
                <div className={`${styles.field} ${styles.order4}`}>
                    <label for="price">Precio</label>
                    <div className={styles.control}>
                        <input type="number" name="price" className={`${styles.input_info} ${styles.precio}`} placeholder="Ej: 750" value="123.14"/>
                        {/* <input type="number" name="price" className="input_info precio" placeholder="Ej: 750" value="<%= product.price %>"> */}
                        <div className={`${styles.errores1} ${styles.textdanger}`}>
                            <ul></ul>
                        </div>
                    </div>
                    {/* <% if (locals.errors && errors.price) { %>
                        <p className="textdanger">
                            <%= errors.price.msg %>
                        </p>
                        <% } %> */}
                </div>
                <div className={`${styles.field} ${styles.order6}`}>
                    <label for="description">Descripción</label>
                    <div className={styles.control}>
                        <textarea name="description" id="descripcion" className={styles.input_info} value="Product description"></textarea>
                        {/* <textarea name="description" id="descripcion" className="input_info" value="<%= product.description %>"></textarea> */}
                        <div className={`${styles.errores2} ${styles.textdanger}`}>
                            <ul></ul>
                        </div>
                    </div>
                    {/* <% if (locals.errors && errors.description) { %>
                        <p className="textdanger">
                            <%= errors.description.msg %>
                        </p>
                        <% } %> */}
                </div>
                <div className={`${styles.field} ${styles.order5}`}>
                    <p>Imágen actual</p>
                    <div className={styles.control}>
                        <img src="/images/productImages/default.jpg" alt="producto"/>
                        {/* <img src="/images/productImages/<%= product.image ? product.image : 'default.jpg'%>" alt="producto"/> */}
                    </div>
                </div>
                <div className={`${styles.field} ${styles.order7}`}>
                    <label for="newProductImage">Subir nueva imágen</label>
                    <div className={styles.control}>
                        <input type="file" name="newProductImage" id={styles.newProductImage}  accept="image/gif,image/jpeg,image/jpg,image/png"/>
                        <div className={`${styles.errores3} ${styles.textdanger}`}>
                            <ul></ul>
                        </div>
                    </div>
                    {/* <% if (locals.errors && errors.newProductImage) { %>
                        <p className="textdanger">
                            <%= errors.newProductImage.msg %>
                        </p>
                        <% } %> */}
                </div>
            </div>
        </form>
            <div className={styles.botones}>
                <div className={styles.buttonAction_save}>
                    <div className={styles.control}>
                        <button type="submit">Guardar producto</button>
                    </div>
                </div>
                
                <div className={styles.buttonAction_delete}>
                    <div className={styles.control}>
                        <form action="/productos/<%= product.id %>?_method=DELETE" method="POST">
                            <button type="submit">Eliminar producto</button>
                        </form>
                    </div>
                </div>
            </div>
    </main>
    );
}

export default EditProduct;