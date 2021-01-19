import React from "react";
import produtos from "./../../data/produtos";
import "./TabelaProdutos.css";

export default () => {

    const tr = produtos.map( (prod) => {
        return(
            <tr key={prod.id} >
                <td>{ prod.id }</td>
                <td>{ prod.produto }</td>
                <td>R$ { prod.valor.toFixed(2).replace(".", ",") }</td>
            </tr>
        )
    } )

    return (
        <table className="TableProdutos" >
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Produto</th>
                    <th>Valor (R$)</th>
                </tr>
            </thead>
            <tbody>
                {tr}
            </tbody>
        </table>
    )

}