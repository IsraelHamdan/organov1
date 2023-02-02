import Colaboraror from '../Colaborador'
import './Times.css'

const Times = (props) => {
   const css = {backgroundColor: props.corSecundaria};
   const borda = {borderColor: props.corPrimaria};
   return (
      <section className='time'style={css}>
         <h3 key={Times.borda} className='time__nome' style={borda}>{props.nome} </h3>
         <div className="colaboradores">
         {props.colaboradores.map(colaborador => <Colaboraror key ={Times.card} nome={colaborador.nome} cargo= {colaborador.cargo} imagem={colaborador.imagem}/>)}
            
         </div>
      </section>
   )
}

export default Times;
