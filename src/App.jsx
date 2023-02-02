import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Times from './componentes/Time';
function App() {
  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      //time de front-end
      nome: 'front-end',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      //Time de Data Sciense
      nome:'Data Sciense',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      //Time de Devops
      nome:'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      //Time de UX e Desing
      nome:'UX e Desing',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    },
    {
      //Time de Mobile
      nome:'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      //Time de Inovação e Gestão
      nome:'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    },
    
  ]

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {times.map(time => 
        <Times 
          key={time.nome} 
          nome={time.nome} 
          corPrimaria= {time.corPrimaria} 
          corSecundaria={time.corSecundaria}
          colaboradores = {colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />)}
    </div>
  );
}

export default App;
