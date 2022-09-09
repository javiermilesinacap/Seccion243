import React from "react";
import Tarjeta from "./Tarjeta";
const conjunto = [
    {"id:":1,"nombre":"Tarjeta 1", "descripcion":"Descripcion 1", "imagen":"https://joeschmoe.io/api/v1/random", "precio":1000},
    {"id:":2,"nombre":"Tarjeta 2", "descripcion":"Descripcion 2", "imagen":"https://joeschmoe.io/api/v1/random", "precio":2000},
    {"id:":3,"nombre":"Tarjeta 3", "descripcion":"Descripcion 3", "imagen":"https://joeschmoe.io/api/v1/random", "precio":3000},
    {"id:":4,"nombre":"Tarjeta 4", "descripcion":"Descripcion 4", "imagen":"https://joeschmoe.io/api/v1/random", "precio":4000},
]
export default function TarjetaListar() {
    const [tarjetas, setTarjetas] = React.useState(conjunto);
    return (
        <div>
            {tarjetas.map((tarjeta) => (
        <Tarjeta data={tarjeta}/>
        ))}
        </div>
    );
    }
