import {useState,useEffect, useLayoutEffect} from "react";


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

    let lastUser = usuarioslist.pop();

    return (
        <main>
            <div className="TotalU">
                <h3>Total de usuarios</h3>
                <p>{usuarios.count}</p>

            </div>
            <div className="LastU">
                <h3>Último usuario creado</h3>
                <p><div className="white">{lastUser.name}    </div>
                <div className="white">{lastUser.email}</div>
                <div className="white">{lastUser.detail}</div></p>
                

            </div>

            
        </main>
    )
}

export default Dashboard;