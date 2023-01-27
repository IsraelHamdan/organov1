import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {
    const times = [
        
        'Programação',
        'Front-end',
        'Data Science',
        'Devops', 'Mobile',
        'Inovação e Gestão'
    ]
    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log('O form foi submetido')
    }
    return (
        <section className="formulario">
            <form className='formulario__campos' onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio = {true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto obrigatorio = {true} label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto obrigatorio = {true} label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa obrigatorio = {true} label="Time" itens = {times} placeholder = "Selecione seu cargo" />
                <Botao>
                    Criar Botao
                </Botao>
            </form>
        </section>
    )
}

export default Formulario