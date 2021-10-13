import {useState,useEffect} from "react";

function Dashboard(){
    const [productos,setProductos] = useState([]);
    const [productoslist,setProductoslist] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/api/productos")
        .then(res=>res.json())
        .then(data=>{
            console.log(data.countByCategory)
            setProductos(data)
            setProductoslist(data.countByCategory.data)
        })
        
    },[]);

    useEffect(()=>{
        console.log("Se actualizó el componente")
    },[productos,productoslist])

    return (
        <main>
            <h1>PRODUCTOS</h1>
            <p>Total de productos: {productos.count}</p>
            <ul>
                {productoslist.map((product,i)=>{
                    return (
                    <li key={i}>
                        Cantidad: {product.total_products}, Categoría: {product.category_name}
                    </li>
                    )
                })
                }
            </ul>
        </main>
    )
}

export default Dashboard;