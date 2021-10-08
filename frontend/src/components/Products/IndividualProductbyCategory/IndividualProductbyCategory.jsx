import { useState, useEffect } from 'react'
import styles from '../../Home/Home.module.css';
import { Link } from "react-router-dom";

function IndividualProductbyCategory(props) {
    const [ productos, setProductos ] = useState([]);

    useEffect( () => {
        console.log('%cSe montó el componente', 'color: green');
        
        fetch('http://localhost:5000/productos')
        .then(res => res.json())
        .then(data => {
            setProductos(data.data)
        })
        .catch(err => console.log(err))
    }, []);

    useEffect( () => {
        console.log('%cSe acutalizó el componente', 'color: yellow');
    }, [productos]);

    useEffect( () => {
        return () => console.log('%cSe desmontó el componente', ' color: red');
    }, []);

    const categoryId = parseInt(props.id)
    return(
        <div className={styles.productList_all}>
            { productos.length === 0 && <p><i class={`fas fa-spinner`}></i><br/>Cargando productos... </p> }
            {
                productos.filter((p) => p.category_id === categoryId)
                .map(producto => {
                    return (
                    <div className={styles.product_individual}>
                        <Link to={"/productos/" + producto.id} className={styles.productLink}>
                            {producto.image ==='' && <img src="/images/productImages/default.jpg" alt="avatar" width="150" />}
                            {producto.image !=='' && <img src={"/images/productImages/"+producto.image} alt="avatar" width="150" />}
                            <p className={styles.product_name}>{producto.name}</p>
                        </Link>
                        <p className={styles.price}>$ {producto.price}</p>
                    <button className={styles.addCartButton} type="submit">Agregar al carrito</button>
                </div>
                    )
                })
            }
    </div>
    )
}

export default IndividualProductbyCategory;