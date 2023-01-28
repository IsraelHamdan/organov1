import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {


    const times = [
        'Selecione seu cargo',
        'Programação',
        'Front-end',
        'Data Science',
        'Devops', 'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        // console.log('o formulario de cadastro foi submetido =>', nome, cargo, imagem, time )
        props.aoColaboradorCadastrado( {
            nome,
            cargo,
            imagem, 
            time
        })
    }
    return (
        <section className="formulario">
            <form className='formulario__campos' onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio = {true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor = {nome}
                    aoAlterado = {valor => setNome(valor)}
                />

                <CampoTexto 
                    obrigatorio = {true} 
                    label="Cargo"
                    placeholder="Digite seu cargo" 
                    valor = {cargo}
                    aoAlterado = {valor => setCargo(valor)}
                />

                <CampoTexto     
                    obrigatorio = {true} 
                    label="Imagem"
                    placeholder="Digite o endereço da imagem" 
                    valor = {imagem}
                    aoAlterado = {valor => setImagem(valor)}
                />

                <ListaSuspensa 
                    obrigatorio = {true}
                    label="Time" 
                    itens = {times}
                    placeholder = "Selecione seu cargo" 
                    valor = {time}
                    aoAlterado = {valor => setTime(valor)}
                />

                <Botao>
                    Criar Botao
                </Botao>
            </form>
        </section>
    )
}

export default Formulario