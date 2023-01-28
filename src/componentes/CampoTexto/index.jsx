
import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...` 
    /* o useState funciona como um braço (HOOKE) que pega algo, no caso do useState ele pega o estado
    o setValor é o que define setter, ou seja uma forma de definir o valor*/
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input onChange={aoDigitado} required = {props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto