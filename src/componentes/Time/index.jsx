import '../Colaborador/index'
import './Times.css'

const Times = (props) => {
   const css = {backgroundColor: props.corSecundaria};
   const borda = {borderColor: props.corPrimaria};
   return (
      <section className='time'style={css}>
         <h3 key={Times.borda} className='time__nome' style={borda}>{props.nome} </h3>
         {props.colaboradores.map(Colaboraror => <Colaboraror/>)}
         
      </section>
   )
}

export default Times;
