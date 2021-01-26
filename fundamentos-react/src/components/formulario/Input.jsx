import React, { useState } from "react";

export default () => {

    const [valor, setValor] = useState("");
    
    function quandoDigitar(e){
        setValor(e.target.value)
    }

    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{ display: "flex", flexDirection:'column' }} >
                <input type="text" value={valor} onChange={quandoDigitar} />
            </div>
        </div>
    )
}