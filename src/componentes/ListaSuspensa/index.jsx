import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
   const placeholderModificada = `${props.placeholder}...` 
   return (
      <div className='lista-suspensa'>
         <label className='lista-suspensa__label'>{props.label}</label>
         <select onChange={evento => props.aoAlterado(evento.target.value)} className='lista-suspensa__select'>
            {props.itens.map(item => 
               <option required = {props.obrigatorio} key={item} placeholder= {placeholderModificada} >{item}</option>
            )}
         </select>
      </div>
   )
}

export default ListaSuspensa