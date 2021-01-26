import React from 'react';
import Botoes from './Botoes';
import Display from './Display';
import PassoForm from './PassoForm';

class Contador extends React.Component {

    state = {
        numero: this.props.init || 0,
        passo : this.props.passo || 5
    }

    setInc= () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }
    
    setDec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (e) => {
        this.setState({
            passo: +e.target.value,
        })
    }

    render(){
        return(
            <div>
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
                <Botoes incrementar={this.setInc} decrementar={this.setDec} />
            </div>
        )
    }

}

export default Contador