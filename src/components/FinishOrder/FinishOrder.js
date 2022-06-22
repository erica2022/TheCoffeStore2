import {row, col} from "react-bootstrap"

export default function FinishOrder ({orderId}, {data}) {
    return(
        <>
        <h1>EL REUMEN DE SU ORDEN ES:</h1>
        <col>
            <row> Número de orden: {orderId}</row>
            <row> Nombe del comprador: {data?.name}</row>
            <row> Email del comprador: {data?.email}</row>
            <row> Teléfono del comprador: {data?.phone}</row>
        </col>
        </>
    )
}