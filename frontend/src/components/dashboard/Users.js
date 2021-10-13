import {useState,useEffect, useLayoutEffect} from "react";


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
            <div className="TotalU">
                <h3>Total de usuarios</h3>
                <p>{usuarios.count}</p>

            </div>
            <div className="LastU">
                <h3>Último usuario creado</h3>
                <p>{}</p>
                

            </div>

            
        </main>
    )
}

export default Dashboard;