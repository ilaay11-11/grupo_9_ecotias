import {useState,useEffect} from "react";


function Dashboard(){
    const [usuarios,setUsuarios] = useState([]);
    const [usuarioslist,setUsuarioslist] = useState([]);
    const [ultimousuario, setUltimoUsuario] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/api/usuarios")
        .then(res=>res.json())
        .then(data=>{
            setUsuarios(data)
            setUsuarioslist(data.users)
            setUltimoUsuario(data.users[data.count-1])
        })
        
    },[]);

    useEffect(()=>{
        console.log("Se actualizó el componente")
    },[usuarios,usuarioslist, ultimousuario])

    return (
        <main>
            <div className="TotalU">
                <h3>Total de usuarios</h3>
                <p>{usuarios.count}</p>
            </div>
            <div className="LastU">
                <h3>Último usuario creado</h3>
                <div className="white"><p><strong>Nombre:</strong> {ultimousuario.name}</p></div>
                <div className="white"><p><strong>Email:</strong> {ultimousuario.email}</p></div>
                <div className="white"><p><strong>Detalle:</strong> <a href={ultimousuario.detail}>{ultimousuario.detail}</a></p></div>
            </div>
        </main>
    )
}

export default Dashboard;