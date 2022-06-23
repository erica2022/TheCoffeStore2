import {row, Col, Card} from "react-bootstrap"

export default function FinishOrder ({orderId, data}) {
  
    return(
        <>
        <h1 className="title">Datos de su compra: </h1>
        <div className="text">
        <li> <b>Número de orden:</b> {orderId}</li>
        <li> <b>Email del comprador:</b> {data?.email}</li>
        <li> <b> Nombe del comprador:</b> {data?.name}</li> 
        <li> <b>Teléfono del comprador:</b> {data?.phone}</li>
        </div>
        </>
    )
}