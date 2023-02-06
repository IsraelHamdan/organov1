import Colaboraror from '../Colaborador'
import './Times.css'


const Times = (props) => {
   const css = {backgroundColor: props.corSecundaria};
   const borda = {borderColor: props.corPrimaria};
   return (
      /*
         renderização consdicional poderá ser feita com o operador ternario que é o que eu usei " ? : '' " ou então usando o && no lugar da interrogação e sem o :'' no final 
      */
      (props.colaboradores.length > 0) ?
      <section className='time'style={css}>
         <h3 key={Times.borda} className='time__nome' style={borda}>{props.nome} </h3>
         <div className="colaboradores">
            {props.colaboradores.map(colaborador => <Colaboraror corDeFundo={props.corPrimaria} key ={colaborador.nome} nome={colaborador.nome} cargo= {colaborador.cargo} imagem={colaborador.imagem}/>)}
         </div>
      </section>
      : 
      <section className="time" style={css}>
         <h3 className="time__nome rodape">{props.nome}</h3>
         <div className="colaboradores">
            
         </div>
         <img src="https://cdn-icons-png.flaticon.com/512/1705/1705634.png" 
            alt="colaborador desconhecido" className='desconhecido'/>
      </section>
   )
}

export default Times;
