import {useState,useEffect} from "react";

function Dashboard(){
    const [usuarios,setUsuarios] = useState([]);
    const [usuarioslist,setUsuarioslist] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/api/usuarios")
        .then(res=>res.json())
        .then(data=>{
            console.log(data.users)
            setUsuarios(data)
            setUsuarioslist(data.users)
        })
        
    },[]);

    useEffect(()=>{
        console.log("Se actualizó el componente")
    },[usuarios,usuarioslist])

    return (
        <main>
            <h1>USUARIOS</h1>
            <p>Total de usuarios: {usuarios.count}</p>
            <ul>
                {usuarioslist.map((usuario,i)=>{
                    return (<li key={i}>{usuario.name} {usuario.last_name}</li>)
                })}
            </ul>
        </main>
    )
}

export default Dashboard;