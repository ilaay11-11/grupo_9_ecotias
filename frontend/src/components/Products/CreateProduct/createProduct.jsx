import styles from './CreateProduct.module.css';

function CreateProduct() {
    return (
        <main className={styles.mainCreateProduct}>
        <h2>Crear producto</h2>
        <form action="/productos/crear" method="POST" enctype="multipart/form-data">
            <div className={styles.crear_producto}>
                <div className={styles.field}>
                    <label for="name">Nombre</label>
                    <div className={styles.control}>
                        <input type="text" name="name" className={styles.input_info} placeholder="Ej: Omeprazole" id="nombre"required/>
                        <div className={styles.textdanger} id="errores">
                            <ul></ul>
                        </div>
                    </div>
                    {/* <% if (locals.errors && errors.name) { %>
                        <p className={styles.text}danger">
                            <%= errors.name.msg %>
                        </p>
                        <% } %> */}
                </div>
                <div className={styles.field}>
                    <label for="category">Categoría</label>
                    <div className={styles.control}>
                        <select name="category" id="category" className={styles.input_info} required>
                            <option value="uno">uno</option>
                            {/* <% for( let i = 0; i < categories.length; i++ ) { %>
                                <option value="<%= categories[i].id %> ">
                                    <%= categories[i].name %>
                                </option>
                            <% } %> */}
                        </select>
                    </div>
                </div>
                <div className={styles.field}>
                    <label for="category">Fabricante</label>
                    <div className={styles.control}>
                        <select name="maker" id="maker" className={styles.input_info} required>
                            <option value="uno">uno</option>
                            {/* <% for( let i = 0; i < makers.length; i++ ) { %>
                                <option value="<%= makers[i].id %> ">
                                    <%= makers[i].name %>
                                </option>
                            <% } %> */}
                        </select>
                    </div>
                </div>
                <div className={styles.field}>
                    <label for="price">Precio</label>
                    <div className={styles.control}>
                        <input type="number" name="price" className={styles.input_info} step="0.01" placeholder="Ej: 750" required/>
                    </div>
                    {/* <% if (locals.errors && errors.price) { %>
                        <p className={styles.text}danger">
                            <%= errors.price.msg %>
                        </p>
                        <% } %> */}
                </div>
                <div className={styles.field}>
                    <label for="description">Descripción</label>
                    <div className={styles.control}>
                        <textarea name="description" id={styles.description} className={`${styles.createTextarea}`} required></textarea>
                        <div className={styles.textdanger} id="errores1">
                            <ul></ul>
                        </div>
                    </div>
                    {/* <% if (locals.errors && errors.description) { %>
                        <p className={styles.text}danger">
                            <%= errors.description.msg %>
                        </p>
                        <% } %> */}
                </div>
                <div className={styles.field}>
                    <label for="product_image">Imagen</label>
                    <div className={styles.control}>
                        <input type="file" name="product_image" id="product_image"  accept="image/gif,image/jpeg,image/jpg,image/png"/>
                        <div className={styles.textdanger} id="errores2">
                            <ul></ul>
                        </div>
                    </div>
                    {/* <% if (locals.errors && errors.product_image) { %>
                        <p className={styles.textdanger}">
                            <%= errors.product_image.msg %>
                        </p>
                    <% } %> */}
                </div>
            </div>
            <div className={styles.buttonAction}>
                <div className={styles.control}>
                    <button type="submit">Crear producto</button>
                </div>
            </div>
        </form>
    </main>
    );
}

export default CreateProduct;